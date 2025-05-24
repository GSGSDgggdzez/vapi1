<script>
    import { onMount, onDestroy } from 'svelte';
    import { PUBLIC_VAPI_KEY } from '$env/static/public';
    import Vapi from '@vapi-ai/web';

    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();

    // Initialize variables for call state management
    let vapi;
    let isCallActive = false;
    let callStatus = $state('idle');
    let micMuted = $state(false);
    let speakerMuted = $state(false);
    let isSpeaking = $state(false);
    let isListening = $state(false);

    // Set up Vapi instance and event listeners when component mounts
    onMount(() => {
        vapi = new Vapi(PUBLIC_VAPI_KEY);

        // Handle errors during the call
        vapi.on('error', (error) => {
            console.error('Vapi error:', error);
            callStatus = 'ended';
            isCallActive = false;
        });

        // Update status when call starts
        vapi.on('start', () => {
            callStatus = 'active';
        });

        // Update status when call ends
        vapi.on('end', () => {
            callStatus = 'ended';
            isCallActive = false;
        });

        // Update speaking/listening indicators
        vapi.on('speaking', () => {
            isSpeaking = true;
            isListening = false;
        });

        vapi.on('listening', () => {
            isSpeaking = false;
            isListening = true;
        });
    });

    // Clean up when component is destroyed
    onDestroy(() => {
        if (isCallActive) {
            vapi.stop();
        }
    });

    // Function to start the call
    function startCall() {
    if (!data.therapist || !data.therapist.vapi_id) {
        console.error('No therapist ID available');
        return;
    }

    callStatus = 'connecting';
    vapi
        .start(data.therapist.vapi_id)
        .then(() => {
            isCallActive = true;
            callStatus = 'active';
        })
        .catch((error) => {
            console.error('Failed to start call:', error);
            callStatus = 'ended';
        });
}


    // Function to end the call
    function endCall() {
        if (isCallActive) {
            vapi.stop();
            isCallActive = false;
            callStatus = 'ended';
        }
    }

    // Function to toggle microphone
    function toggleMic() {
        micMuted = !micMuted;
        if (vapi) {
            vapi.setMicrophoneMuted(micMuted);
        }
    }

    // Function to toggle speaker
    function toggleSpeaker() {
        speakerMuted = !speakerMuted;
        if (vapi) {
            vapi.setOutputMuted(speakerMuted);
        }
    }
</script>

<div class="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 flex flex-col">
    {#if callStatus === 'idle'}
        <div class="flex-1 flex flex-col items-center justify-center p-8">
            <div class="bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-lg text-center">
                <div class="flex justify-center mb-6">
                    <img
                        src={data.therapist?.avatar && data.therapist.avatar[0]
                            ? `http://127.0.0.1:8090/api/files/therapist/${data.therapist.id}/${data.therapist.avatar[0]}`
                            : '/placeholder.svg?height=128&width=128'}
                        alt={data.therapist?.name || "Therapist"}
                        class="h-32 w-32 rounded-full object-cover shadow-lg ring-4 ring-rose-100 mx-auto"
                    />
                </div>
                <h1 class="text-3xl font-bold text-white mb-4">{data.therapist?.name || "Therapist"}</h1>
                <p class="text-white/60 text-lg mb-4">{data.therapist?.specialty || "Therapy Session"}</p>
                <div class="flex flex-wrap justify-center gap-3 mb-10">
                    {#if data.therapist?.traits}
                        {#each data.therapist.traits as trait}
                            <span class="badge badge-lg bg-white/10 text-white border-white/20">
                                {trait}
                            </span>
                        {/each}
                    {/if}
                </div>
                <button 
                    onclick={startCall} 
                    class="btn btn-lg w-full rounded-xl bg-rose-500 hover:bg-rose-600 text-white"
                >
                    Start Session
                </button>
            </div>
        </div>
    {:else}
        <div class="absolute top-4 right-4 z-10">
            <button
                class="btn btn-ghost btn-circle bg-white/10 hover:bg-white/20 text-white"
                onclick={endCall}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span class="sr-only">End Session</span>
            </button>
        </div>
        <div class="flex-1 flex flex-col items-center justify-center p-4">
            <div class="w-full max-w-md flex flex-col items-center">
                <div class="mb-8 text-center">
                    <h2 class="text-xl font-medium text-white mb-2">{data.therapist?.name || "Therapist"}</h2>
                    <p class="text-white/60">
                        {#if callStatus === 'connecting'}
                            Connecting...
                        {:else if isSpeaking}
                            Speaking...
                        {:else if isListening}
                            Listening...
                        {:else}
                            Ready to talk
                        {/if}
                    </p>
                </div>
                <div class="w-full h-40 flex items-center justify-center mb-12">
                    <div class="w-full h-full flex items-center justify-center">
                        <div class="loading loading-bars loading-lg text-white"></div>
                    </div>
                </div>
                <div class="flex gap-6">
                    <button
                        class="btn btn-outline btn-circle w-14 h-14 {micMuted 
                            ? 'bg-red-500/20 text-white border-red-500/30' 
                            : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}"
                        onclick={toggleMic}
                    >
                        {#if micMuted}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="1" y1="1" x2="23" y2="23"></line>
                                <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                                <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
                                <line x1="12" y1="19" x2="12" y2="23"></line>
                                <line x1="8" y1="23" x2="16" y2="23"></line>
                            </svg>
                        {:else}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                <line x1="12" y1="19" x2="12" y2="23"></line>
                                <line x1="8" y1="23" x2="16" y2="23"></line>
                            </svg>
                        {/if}
                        <span class="sr-only">{micMuted ? "Unmute Microphone" : "Mute Microphone"}</span>
                    </button>
                    <button
                        class="btn btn-outline btn-circle w-14 h-14 {speakerMuted 
                            ? 'bg-red-500/20 text-white border-red-500/30' 
                            : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}"
                        onclick={toggleSpeaker}
                    >
                        {#if speakerMuted}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                <line x1="17" y1="9" x2="23" y2="15"></line>
                            </svg>
                        {:else}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                        {/if}
                        <span class="sr-only">{speakerMuted ? "Unmute Speaker" : "Mute Speaker"}</span>
                    </button>
                </div>
            </div>
        </div>
    {/if}
</div>
