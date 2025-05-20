<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});

	
	let { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
	<div class=" h-screen bg-gradient-to-b from-rose-50 to-purple-50">
		{@render children()}
	</div>
</QueryClientProvider>
