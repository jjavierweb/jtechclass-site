<script lang="ts">
	// import images
	import AboutUs2 from '$lib/assets/images/AboutUs2.svg';
	import Mission from '$lib/assets/images/Mission.svg';
	import Vission from '$lib/assets/images/Vission.svg';
</script>

<svelte:head>
	<title>About Us - JTechClass</title>
	<meta
		name="description"
		content="At JTechClass, our mission is to provide small businesses with top-quality IT solutions and support that enable them to operate efficiently and effectively"
	/>
</svelte:head>
<!-- Section of Hero -->
<div class="card-glass-surface px-4 py-10 md:py-20">
	<div
		class="container mx-auto flex flex-col md:grid md:grid-cols-2 md:gap-2 items-center relative"
	>
		<img
			src={AboutUs2}
			alt="About us illustration"
			class="h-80 w-80 md:w-auto md:h-96 block mx-auto md:inline"
			width="0"
			height="0"
		/>
		<div class="flex flex-col">
			<h1 class="text-4xl font-bold md:text-7xl">About Us</h1>
			<p class="mt-4 text-lg">
				Welcome to JTechClass, a small company dedicated to supporting small businesses with their
				IT needs. We are a team of experienced IT professionals who understand the unique challenges
				that small businesses face. Our goal is to provide our clients with the tools and support
				they need to succeed in today's digital landscape.
			</p>
			<p class="mt-4 text-lg">
				JTechClass was founded back in 2016 by Javier Gutierrez as a Youtube Channel where tutorials
				for different IT technologies were presented. Javier Gutierrez is a passionate and
				experienced IT professional with a vision to help small businesses succeed. He has built a
				team of skilled professionals who share his passion and dedication to providing the best
				possible service to our clients.
			</p>
		</div>
	</div>
</div>
<!-- Section for content -->
<div class="container mx-auto p-4 mt-12">
	<div class="flex flex-col md:grid md:grid-cols-2 md:gap-2">
		<img src={Mission} alt="Mission" width="0" height="0" class="w-auto h-96" />
		<div class="mt-8">
			<h2 class="text-3xl font-semibold md:text-5xl">Our Mission:</h2>
			<p class="text-justify mt-4 text-lg">
				At JTechClass, our mission is to provide small businesses with top-quality IT solutions and
				support that enable them to operate efficiently and effectively. We are committed to
				delivering exceptional customer service and building long-term partnerships with our
				clients. By leveraging our expertise and cutting-edge technology, we aim to help small
				businesses succeed in today's rapidly changing business landscape.
			</p>
		</div>
	</div>

	<div class="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-2 mt-12">
		<div class="mt-8">
			<h2 class="text-3xl font-semibold md:text-5xl">Our Vision:</h2>
			<p class="text-justify mt-4 text-lg">
				JTechClass is a small business dedicated to helping other small businesses with their IT
				needs. Our vision is to become the go-to IT solutions provider for small businesses in our
				community and beyond. We believe that small businesses are the backbone of the economy, and
				we are passionate about helping them succeed. We understand the unique challenges that small
				businesses face when it comes to IT, and we are committed to providing affordable, reliable,
				and user-friendly solutions that allow them to focus on what they do best: growing their
				business. To achieve this vision, we will strive to consistently deliver excellent customer
				service and technical support to our clients. We will stay up to date with the latest
				technologies and best practices in the industry, and we will always go the extra mile to
				ensure that our clients are satisfied with our services. In the long term, we hope to expand
				our reach and help even more small businesses with their IT needs. We envision a future
				where every small business has access to the resources and support they need to thrive, and
				we are committed to playing a key role in making that a reality.
			</p>
		</div>
		<img
			src={Vission}
			alt="Vision Statement"
			width="0"
			height="0"
			class="w-auto h-96 self-end place-self-end"
		/>
	</div>
</div>
