<script>
	import { enhance } from '$app/forms';

	let { data, form } = $props();

</script>

<section>
	<!-- navabr -->
	<div class="navbar">
		<div class="flex-1">
			<a href="/" class="flex items-center gap-2 text-2xl" aria-label="Whisper Home">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-10 text-rose-500"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
					/>
				</svg>

				<span class="font-bold text-gray-800">Whisper</span>
			</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li>
					<a href="/about" class="text-xl">About</a>
				</li>
				{#if !data?.user}
					<li>
						<a href="/login" class="btn btn-dash btn-secondary mx-3 rounded-xl">Login</a>
					</li>
					<li>
						<a href="/register" class="btn btn-error rounded-xl text-white">Register</a>
					</li>
				{:else}
					<li>
						<form action="?/logout" use:enhance method="post">
							<button class="btn btn-ghost btn-circle" aria-label="Logout">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
								<polyline points="16 17 21 12 16 7"></polyline>
								<line x1="21" y1="12" x2="9" y2="12"></line>
							</svg>
						</button>
						</form>
					</li>
				{/if}
			</ul>
		</div>
	</div>
	<!-- end navbar -->
</section>
	<!-- start of hero -->
	<div class="hero min-h-screen">
		<div class="hero-content text-center">
			<div class="max-w-2xl">
				<h1 class="mb-6 text-6xl font-bold text-gray-800 md:text-8xl">
					Talk. Feel. <span class="text-accent">Heal.</span>
				</h1>
				<p class="py-6 text-xl text-gray-600">
					Experience therapeutic conversations through voice alone. No text, no transcripts—just a
					private, healing connection.
				</p>

				<button
					class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-secondary rounded-4xl me-2"
					aria-label="Get Started with Whisper"
				>
					Get Started
				</button>
				<button
					class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-outline btn-accent rounded-4xl"
					aria-label="Explore Available Therapists"
				>
					Explore Therapists
				</button>
			</div>
		</div>
	</div>
	<!-- end of hero -->
	<!-- start of features -->
	<section class="flex flex-col items-center justify-center gap-8 px-4 py-8 md:py-16">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-800">How it works</h2>
			<p class="text-gray-600">
				Experience our simple three-step process to begin your healing journey.
			</p>
		</div>
		<div class="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
			<div
				class="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
					<span class="text-2xl" aria-hidden="true">1</span>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Choose a Therapist</h3>
				<p class="text-gray-600">
					Select from our diverse range of AI therapists, each with unique specialties.
				</p>
			</div>
			<div
				class="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
					<span class="text-2xl" aria-hidden="true">2</span>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Talk Privately</h3>
				<p class="text-gray-600">
					Speak freely in a voice-only session. Nothing is recorded or stored.
				</p>
			</div>
			<div
				class="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
					<span class="text-2xl" aria-hidden="true">3</span>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Feel Better</h3>
				<p class="text-gray-600">Experience emotional relief through therapeutic conversation.</p>
			</div>
		</div>
	</section>
	<!-- end of features -->
	<!-- start privacy -->
	<section class="bg-secondary-content py-16">
		<div class="container mx-auto px-4 text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-rose-700"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
					/>
				</svg>

				<span class="font-medium">Privacy First</span>
			</div>
			<h2 class="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
				Your conversations stay with you
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-600">
				We don't record, store, or analyze your therapy sessions. What happens in your session,
				stays in your session.
			</p>
		</div>
	</section>
	<!-- end privacy -->
	<!-- start footer -->
	<footer class="bg-base-200 py-10">
		<div class="container mx-auto px-4 text-center text-gray-600">
			<p>© {new Date().getFullYear()} Whisper. All rights reserved.</p>
		</div>
	</footer>
	<!-- end footer -->

