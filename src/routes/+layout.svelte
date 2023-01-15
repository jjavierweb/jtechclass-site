<script lang="ts">
	import '../app.css';

	// Import components
	import Navbar from '$lib/components/Navbar.svelte';

	// Variable definitions
	const menu_links: Array<any> = [
		{ name: 'Home', url: '/' },
		{ name: 'About Us', url: '/about-us' },
		{ name: 'Services', url: '/services' },
		{ name: 'Contact Us', url: '/contact-us' }
	];

	let year = new Date().getFullYear();

	// Function definitions
</script>

<svelte:head>
	<title>Home Page - Javier Aviation</title>
</svelte:head>
<header
	class="sticky top-0 flex-none z-10 bg-surface-800 p-4 shadow-lg space-x-4 border-b-surface-100"
>
	<Navbar {menu_links} />
</header>

<main id="page-content" class="">
	<slot />
</main>

<footer>
	<div class="container justify-evenly mx-auto p-8 mt-12">
		<hr />
		<div class="flex flex-col md:flex-row justify-evenly p-4 gap-4">
			<div class="items-start">Created by JTechClass &copy; {year}</div>
			<div class="md:ml-auto">All Right Reserved &reg;</div>
		</div>
	</div>
</footer>
