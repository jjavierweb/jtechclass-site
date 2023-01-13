<script lang="ts">
	import type { Review } from '$lib/types/types';
	import { onMount, onDestroy } from 'svelte';
	import { fly, slide, fade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	export let testimonials: Review[];

	// set the initial testomony adn timer for slide
	let currentIndex: number = 0;
	let slideInterval: any;
	let slideTime: number = 7800; // 5 seconds for each slide
	let transitionDuration: number = 800; // 2 seconds to slide each slide

	//function to start the timer
	function startTimer() {
		slideInterval = setInterval(() => {
			currentIndex = (currentIndex + 1) % testimonials.length;
		}, slideTime);
	}

	//function to stop de timer
	function stopTimer() {
		clearInterval(slideInterval);
	}

	onMount(() => {
		startTimer();
	});

	onDestroy(() => {
		stopTimer();
	});
</script>

<section class="p-4 flex overflow-hidden relative w-full snap-y snap-mandatory">
	{#each testimonials as review, i (review)}
		{#key currentIndex}
			{#if i === currentIndex}
				<div
					class="flex flex-col items-center md:grid md:grid-cols-4 md:place-content-center"
					in:fly={{
						delay: transitionDuration,
						duration: transitionDuration,
						easing: quadInOut,
						y: -500
					}}
				>
					<div class="flex justify-center items-center md:row-span-4 md:col-span-2 as">
						<img
							src={testimonials[currentIndex].customerImage}
							alt=""
							class="w-auto h-96 items-center"
						/>
					</div>
					<div class="flex flex-col justify-center md:col-span-2 text-center md:text-start">
						<h2 class="text-2xl font-semibold">{testimonials[currentIndex].author}</h2>
						<span class="italic font-light text-xl text-gray-300"
							>{testimonials[currentIndex].authorPosition}</span
						>
					</div>
					<div class="flex md:col-span-2">
						<div class="flex flex-row justify-center items-center">
							{#each Array(testimonials[currentIndex].stars) as star, i}
								<svg
									aria-hidden="true"
									class="w-5 h-5 text-warning-500"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><title>Star {i}</title><path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/></svg
								>
							{/each}
						</div>
					</div>
					<div class="flex md:col-span-2">
						<p class="text-center md:text-start">{testimonials[currentIndex].review}</p>
					</div>
				</div>
			{/if}
		{/key}
	{/each}
</section>
