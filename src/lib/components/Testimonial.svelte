<script lang="ts">
	import type { Review } from '$lib/types/types';
	export let testimonials: Review[];
</script>

<ul
	class="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw]"
>
	{#each testimonials as review}
		<li class="shrink-0 snap-center">
			<img src={review.customerImage} alt="" width="400px" />
		</li>
	{/each}
</ul>

<!-- <div class="flex md:grid md:grid-cols-1 md:gap-4">
	<div class="card-glass-surface my-12 rounded-lg p-8 mx-4 flex flex-col shadow-lg">
		<div class="flex justify-center">
			<img src={customerImage} alt="" width="150px" height="150px" />
		</div>
		<div class="flex justify-center my-12">
			<p class="text-xl">{review}</p>
		</div>
	</div>
</div> -->
