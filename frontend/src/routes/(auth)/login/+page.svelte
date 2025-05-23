<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	/** @type {{ data: import('./$types').PageData }} */
	let { data, form } = $props();
</script>

<div class="flex min-h-screen flex-col bg-gradient-to-b from-rose-50 to-purple-50">
	<div class="flex flex-1 items-center justify-center px-4">
		<div class="w-full max-w-md">
			<div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
				<div class="mb-6 flex justify-center">
					<div class="flex items-center justify-center">
						<a href="/" class="flex items-center gap-2 text-2xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-10 text-rose-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
								/>
							</svg>

							<span class=" font-bold text-gray-800">Whisper</span>
						</a>
					</div>
				</div>
				<p class="text-center text-2xl font-bold">Login with to account</p>
				<form
					action="?/login"
					use:enhance={({ form, data, action, cancel }) => {
						return async ({ result, update }) => {
							if (result.type === 'success') {
								await goto('/app/dashboard');
							}
							await update();
						};
					}}
					class="flex flex-col items-center justify-center"
					method="post"
				>
					<input
						class="input validator my-3 w-full rounded-xl"
						value={form?.data?.email ?? ''}
						type="email"
						name="email"
						id="email"
						required
						placeholder="mail@site.com"
					/>
					{#if form?.error?.email}
						<div class="text-sm text-red-500">
							{form?.error?.email}
						</div>
					{/if}
					<input
						class="input validator my-3 w-full rounded-xl"
						value={form?.data?.password ?? ''}
						type="password"
						name="password"
						id="password"
						required
						placeholder="Password"
					/>
					{#if form?.error?.password}
						<div class="text-sm text-red-500">
							{form?.error?.password}
						</div>
					{/if}
					{#if form?.error}
						<div role="alert" class=" alert alert-error w-full rounded-2xl text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 shrink-0 stroke-current"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span>{form?.error}</span>
						</div>
					{/if}
					<button class="btn btn-secondary my-3 w-full rounded-xl"> Login </button>
					<p>Already have an account? <a href="/register" class="text-secondary">Sign Up</a></p>
				</form>
			</div>
		</div>
	</div>
</div>
