<script lang="ts">
	import { page } from '$app/stores';
	import ErrorImage from '$lib/assets/images/ErrorImage.svg';
</script>

<div class=" h-[calc(100vh-150px)] mx-auto p-4 flex justify-center items-center">
	<div class="flex flex-col align-middle place-content-center">
		<h1 class="text-2xl sm:text-4xl uppercase text-center">
			An error has occurred. Please try again later.
		</h1>
		{#if $page.error?.message === 'Not Found'}
			<img src={ErrorImage} alt="Error Message Page not found" class="align-middle items-center" />
		{/if}
	</div>
</div>
