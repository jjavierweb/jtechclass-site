<script lang="ts">
	import { page } from '$app/stores';
	import ErrorImage from '$lib/assets/images/ErrorImage.svg';
</script>

<div class="h-[calc(100vh-150px)] mx-auto p-4 flex justify-center items-center">
	<div class="flex flex-col align-middle place-content-center">
		<div class="card-glass-surface p-4 rounded-md">
			<h1 class="text-2xl sm:text-4xl uppercase text-center">An error has occurred.</h1>
			<p class="text-2xl md:text-4xl uppercase text-center">
				Please try again later or contact support for assistance.
			</p>
			<div class="flex justify-center">
				<a
					href="/"
					class="btn bg-primary-500 mt-4 items-center flex justify-center"
					aria-label="Return Home button">&LeftArrow; Return Home</a
				>
			</div>
		</div>
		{#if $page.error?.message === 'Not Found'}
			<img
				src={ErrorImage}
				alt="Error Message Page not found"
				class="h-96 w-auto align-middle items-center"
			/>
		{/if}
	</div>
</div>
