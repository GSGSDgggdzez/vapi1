<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<div class="flex min-h-screen flex-col bg-gradient-to-b from-rose-50 to-purple-50">
	<div class="mx-auto px-4 py-4">
		<a href="/" class="group inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-5 w-5 transition-transform group-hover:-translate-x-1"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
				/>
			</svg>
			Back to home
		</a>
	</div>

	<section class="container mx-auto max-w-4xl flex-1 px-4 py-12">
		<div class="mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mb-6 flex items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-10 w-10 text-rose-500"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
					/>
				</svg>
				<h2 class="text-2xl font-semibold text-gray-800">Whisper</h2>
			</div>

			<h1 class="text-2xl font-bold tracking-tight text-gray-900">About Whisper</h1>

			<div class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
				<p>
					Whisper is a revolutionary voice-only AI therapy platform designed to provide emotional
					support through the power of conversation. We believe that healing happens through
					speaking and being heard, without the distractions of text or visual interfaces.
				</p>
			</div>
		</div>
	</section>

	<section class="container mx-auto max-w-4xl flex-1 bg-white/50 px-4 py-16">
		<div class="mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mb-8 flex items-center gap-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-10 w-10 text-rose-500"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
					/>
				</svg>

				<h2 class="text-4xl font-bold tracking-tight text-gray-900">The Power of Voice Therapy</h2>
			</div>
			<div class="prose prose-lg max-w-none prose-p:text-gray-700 prose-p:leading-relaxed">
				<p>
					Voice carries emotion in ways that text simply cannot. Tone, pace, and inflection all
					communicate important aspects of our emotional state. By focusing exclusively on voice
					interaction, Whisper creates a more intimate and emotionally resonant therapeutic
					experience.
				</p>
				<p>
					Our AI therapists are designed to listen deeply, respond empathetically, and guide
					conversations in ways that promote emotional healing and personal growth.
				</p>
			</div>
		</div>
	</section>

	<section class="container mx-auto max-w-4xl flex-1 px-4 py-16">
		<div class="mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mb-8 flex items-center gap-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-10 w-10 text-rose-500"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
					/>
				</svg>

				<h2 class="text-4xl font-bold tracking-tight text-gray-900">Our Privacy Commitment</h2>
			</div>
			<div class="prose prose-lg max-w-none prose-p:text-gray-700 prose-p:leading-relaxed">
				<p>
					Privacy is at the core of Whisper's design. We understand that therapeutic conversations
					require absolute trust and confidentiality. That's why we've built Whisper with a
					fundamental commitment: your conversations are never recorded, stored, or analyzed.
				</p>
				<p>
					When you end a session, it's gone forever—just like a real-life conversation. This
					approach ensures that you can speak freely and openly without concerns about your data.
				</p>
			</div>
		</div>
	</section>

	<section class="container mx-auto max-w-4xl flex-1 bg-white/50 px-4 py-16">
		<div class="mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mb-8 flex items-center gap-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-10 w-10 text-rose-500"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
					/>
				</svg>

				<h2 class="text-4xl font-bold tracking-tight text-gray-900">Our Mission</h2>
			</div>
			<div class="prose prose-lg max-w-none prose-p:text-gray-700 prose-p:leading-relaxed">
				<p>
					At Whisper, we believe that emotional wellbeing should be accessible to everyone. Our
					mission is to create a safe, private space where people can explore their thoughts and
					feelings through natural conversation.
				</p>
				<p>
					We're committed to developing AI therapists that are empathetic, insightful, and
					helpful—providing support when and where you need it most.
				</p>
			</div>
		</div>
	</section>
</div>
