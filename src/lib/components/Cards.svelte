<script lang="ts">
	export let image: string;
	export let serviceName: string;
	export let description: string;
</script>

<div class="card-glass-surface my-12 rounded-lg p-4 mx-4 flex flex-col shadow-lg">
	<div class="flex justify-center aspect">
		<img
			src={image}
			alt={serviceName}
			height="192px"
			width="243.41px"
			class="h-48 w-auto -translate-y-20"
		/>
	</div>
	<div class="-translate-y-10">
		<h2 class="text-xl md:text-3xl text-center  text-primary-50 font-semibold uppercase">
			{serviceName}
		</h2>
		<p class="text-justify mt-2 p-4">{description}</p>
	</div>
	<div class="flex flex-1 justify-center items-end -translate-y-5">
		<button class="btn bg-primary-500 fill-token text-base p-4">Explore more &rightarrow;</button>
	</div>
</div>
