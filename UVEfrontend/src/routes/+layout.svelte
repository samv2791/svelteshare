<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="grid grid-rows-[auto_1fr_auto] h-screen">

<nav>
	<div class="flex justify-between items-center h-10 w-full bg-orange-200">
		<div class="ml-5">
			<p>Veterinarian</p>
		</div>

		<div class="mr-5 space-x-5">
			<a href="/" class="{$page.url.pathname === '/' ? 'font-bold' : ''}">Home</a>
			<a href="/clients" class="{$page.url.pathname === '/clients' ? "font-bold" : ""}">Clients</a>
			<a href="/requests" class="{$page.url.pathname === '/requests' ? "font-bold" : ""}">Requests</a>
		</div>
	</div>
</nav>

{@render children?.()}

<footer class="flex justify-center">
	<p>Made with ❤️</p>
</footer>

</div>