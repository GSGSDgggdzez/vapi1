<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<div class="min-h-screen bg-gradient-to-b from-rose-50 to-purple-50">
	<!-- Navigation Bar -->
	<nav class="navbar">
		<div class="flex-1">
			<a
				href="/"
				class="flex items-center gap-2 text-2xl transition-opacity hover:opacity-90"
				aria-label="Whisper Home"
			>
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
					<a href="/" class="text-xl transition-colors hover:text-rose-500">About</a>
				</li>
				{#if !data?.user}
					<li>
						<a
							href="/login"
							class="btn btn-dash btn-secondary mx-3 rounded-xl transition-opacity hover:opacity-90"
							>Login</a
						>
					</li>
					<li>
						<a
							href="/register"
							class="btn btn-error rounded-xl text-white transition-opacity hover:opacity-90"
							>Register</a
						>
					</li>
				{:else}
					<li>
						<form action="?/logout" use:enhance method="post">
							<button
								class="btn btn-ghost btn-circle transition-colors hover:bg-rose-100"
								aria-label="Logout"
							>
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
	</nav>

	<div class="mx-auto px-4 py-8">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-4 text-4xl font-bold text-gray-800">Welcome to Whisper</h1>

			<p class="mb-8 text-xl text-gray-600">
				Ready to talk? Choose a therapist to begin your session.
			</p>
			<br />

			<div class="relative mt-4">
				<input
					type="search"
					placeholder="Search therapists..."
					class="input input-bordered w-full transition-colors focus:border-rose-500 focus:outline-none"
				/>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-2">
		{#each data.therapists as therapist}
			<div class="rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100">
				<div class="p-6">
					<div class="flex items-start gap-6">
						<img
							src={therapist.avatar && therapist.avatar[0]
								? `http://127.0.0.1:8090/api/files/therapist/${therapist.id}/${therapist.avatar[0]}`
								: '/placeholder.svg?height=96&width=96'}
							alt={therapist.name}
							class="h-24 w-24 rounded-full object-cover shadow-sm ring-2 ring-rose-100"
						/>
						<div class="flex-1">
							<div class="flex items-center justify-between">
								<h3 class="text-2xl font-bold text-gray-800 hover:text-rose-500 transition-colors">{therapist.name}</h3>
								<button class="h-10 w-10 rounded-full hover:bg-gray-100 transition-colors">
									<svg class="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<circle cx="12" cy="12" r="10" />
										<path d="M12 16v-4" />
										<path d="M12 8h.01" />
									</svg>
									<span class="sr-only">More information</span>
								</button>
							</div>
							<p class="mb-3 text-lg font-medium text-rose-500">{therapist.specialty}</p>
						</div>
					</div>
					<div class="mt-6 border-t border-gray-100 pt-6">
						<p class="text-base leading-relaxed text-gray-600">{therapist.description}</p>
					</div>
				</div>
				<div class="border-t border-gray-100 bg-gray-50 px-6 py-4">
					<a href="/app/session/{therapist.id}" class="block w-full">
						<button class="w-full rounded-xl bg-rose-500 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-rose-600 hover:shadow-md active:transform active:scale-95">
							Start Session
						</button>
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
