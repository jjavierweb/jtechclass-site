<script lang="ts">
	//import required libraries
	import { afterNavigate } from '$app/navigation';

	// import images
	import NewLogo from '$lib/assets/images/NewLogo.svg';

	// import types
	import type { Menu } from '$lib/types/types';

	// define variables
	export let menu_links: Menu[];
	let showMenu: boolean = false;

	// define functions
	function toggleNavbar() {
		showMenu = !showMenu;
	}

	// action after navegation
	afterNavigate(() => {
		showMenu = false;
	});
</script>

<nav class="container mx-auto">
	<div class="flex items-center" data-testid="app-bar" role="toolbar">
		<div class="flex-none flex justify-between items-center">
			<a href="/" title="Go to Homepage">
				<span class="inline sm:inline">
					<img src={NewLogo} alt="Website Logo" class="fill-token h-10" />
				</span>
			</a>
		</div>
		<div class="flex-auto" />
		<div class="flex-none flex items-center space-x-4">
			<button
				class="lg:!hidden btn btn-sm flex flex-col h-10 w-10 justify-center items-center group"
				on:click={toggleNavbar}
				aria-label="Menu button"
			>
				<span
					class="h-2 w-6 my-1 rounded-full bg-white transition ease transform duration-200 {showMenu
						? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
						: 'opacity-50 group-hover:opacity-100'}"
				/>
				<span
					class="h-2 w-6 my-1 rounded-full bg-white transition ease transform duration-200 {showMenu
						? 'opacity-0'
						: 'opacity-50 group-hover:opacity-100'}"
				/>
				<span
					class="h-2 w-6 my-1 rounded-full bg-white transition ease transform duration-200 {showMenu
						? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
						: 'opacity-50 group-hover:opacity-100'}"
				/>
			</button>
			<section class="hidden lg:flex">
				{#each menu_links as link}
					<a href={link.url} class="px-4 py-2 hover:bg-primary-500/10 rounded-token">{link.name}</a>
				{/each}
			</section>
		</div>
	</div>
	<!-- Menu when the screen is small and needs hamburger to toggle -->
	<div class={showMenu ? 'flex flex-col space-y-2 mt-4 items-center' : 'hidden'}>
		{#each menu_links as link}
			<a href={link.url} class="px-4 py-2 hover:bg-primary-500/10 rounded-token ">{link.name}</a>
		{/each}
	</div>
</nav>
