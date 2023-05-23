<script lang="ts">
	import BusinessSolution from '$lib/assets/images/BusinessSolution.svg';
	import NetworkService from '$lib/assets/images/NetworkService.svg';
	import WebsiteService from '$lib/assets/images/WebsiteService.svg';
	import ITSupport from '$lib/assets/images/ITSupport.svg';
	import NewLogo from '$lib/assets/images/NewLogo.svg';

	// import components
	import Card from '$lib/components/Cards.svelte';
	import Testimonial from '$lib/components/Testimonial.svelte';

	//import types
	import type { Service, Review } from '$lib/types/types';

	// variables below

	const services: Array<Service> = [
		{
			serviceName: 'Network Design',
			image: NetworkService,
			description:
				'We offer professional network design services to help businesses plan and implement efficient and reliable computer network infrastructure. Our services include needs assessments, hardware and software selection, and network configuration to ensure security, reliability, and efficiency.'
		},
		{
			serviceName: 'Website Design',
			image: WebsiteService,
			description:
				'We provide web design services to help businesses establish and enhance their online presence. Our services include the creation of visually appealing and user-friendly websites optimized for search engines and mobile devices.'
		},
		{
			serviceName: 'IT Support',
			image: ITSupport,
			description:
				'We offer IT support services to help businesses maintain the smooth operation of their technology systems. Our services include troubleshooting and problem-solving for hardware, software, and network issues, as well as assistance with installations, configurations, and maintenance.'
		}
	];

	const testimonials: Review[] = [
		{
			author: 'Ash',
			customerImage: ITSupport,
			authorPosition: 'CEO',
			stars: 5,
			authorImage: '',
			review:
				'I recently took a course with JTechclass and I was extremely impressed with the quality of instruction. The instructor was knowledgeable and was able to clearly explain complex concepts in a way that was easy to understand. The course materials were well-organized and easy to follow, and the online platform was user-friendly and easy to navigate. Overall, I had a great experience with JTechclass and would highly recommend it to anyone looking to learn new tech skills.'
		},
		{
			author: 'Josh',
			customerImage: ITSupport,
			authorPosition: 'CTO',
			stars: 2,
			authorImage: '',
			review:
				'I recently took a course with JTechclass and I was extremely impressed with the quality of instruction. The instructor was knowledgeable and was able to clearly explain complex concepts in a way that was easy to understand. The course materials were well-organized and easy to follow, and the online platform was user-friendly and easy to navigate. Overall, I had a great experience with JTechclass and would highly recommend it to anyone looking to learn new tech skills.'
		},
		{
			author: 'Julia',
			customerImage: ITSupport,
			authorPosition: 'Owner',
			stars: 5,
			authorImage: '',
			review:
				'I recently took a course with JTechclass and I was extremely impressed with the quality of instruction. The instructor was knowledgeable and was able to clearly explain complex concepts in a way that was easy to understand. The course materials were well-organized and easy to follow, and the online platform was user-friendly and easy to navigate. Overall, I had a great experience with JTechclass and would highly recommend it to anyone looking to learn new tech skills.'
		},
		{
			author: 'Mari',
			customerImage: ITSupport,
			authorPosition: 'Owner',
			stars: 5,
			authorImage: '',
			review:
				'I recently took a course with JTechclass and I was extremely impressed with the quality of instruction. The instructor was knowledgeable and was able to clearly explain complex concepts in a way that was easy to understand. The course materials were well-organized and easy to follow, and the online platform was user-friendly and easy to navigate. Overall, I had a great experience with JTechclass and would highly recommend it to anyone looking to learn new tech skills.'
		},
		{
			author: 'Jul',
			customerImage: ITSupport,
			authorPosition: 'Owner',
			stars: 5,
			authorImage: '',
			review:
				'I recently took a course with JTechclass and I was extremely impressed with the quality of instruction. The instructor was knowledgeable and was able to clearly explain complex concepts in a way that was easy to understand. The course materials were well-organized and easy to follow, and the online platform was user-friendly and easy to navigate. Overall, I had a great experience with JTechclass and would highly recommend it to anyone looking to learn new tech skills.'
		},
		{
			author: 'Antonio',
			customerImage: ITSupport,
			authorPosition: 'Owner',
			stars: 5,
			authorImage: '',
			review:
				'I recently took a course with JTechclass and I was extremely impressed with the quality of instruction. The instructor was knowledgeable and was able to clearly explain complex concepts in a way that was easy to understand. The course materials were well-organized and easy to follow, and the online platform was user-friendly and easy to navigate. Overall, I had a great experience with JTechclass and would highly recommend it to anyone looking to learn new tech skills.'
		}
	];

	// methods below
</script>

<svelte:head>
	<title>Homepage - Javier Aviation</title>
	<meta
		name="description"
		content="Javier Aviation is a IT consulting company that speciallices on helping small business fill their IT needs to attract customers"
	/>
</svelte:head>
<div>
	<header class="card-glass-surface px-4 py-10 md:py-20 ">
		<div
			class="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 place-items-center place-content-center"
		>
			<div class="space-y-4">
				<img
					src={NewLogo}
					alt="JTechClass Site logo"
					width="0"
					height="0"
					class="fill-token w-auto h-24 md:h-32 block mx-auto md:inline"
				/>
				<h2 class="text-2xl md:text-4xl text-center md:text-start">
					"Exceed your tech goals with JTechClass."
				</h2>
				<p class="md:!text-lg text-center md:text-start font-semibold italic">
					"Small businesses are the backbone of the economy. JTechClass is here to support yours
					with top-notch tech services."
				</p>
				<nav class="flex space-x-4 justify-center md:justify-start">
					<a href="/" class="btn bg-primary-500 flex align-middle"
						><span>Learn more</span> <span class="">&RightArrow;</span></a
					> <a href="/about-us" class="btn bg-surface-400/20 ">Why JTechClass?</a>
				</nav>
			</div>
			<figure class="relative flex flex-col">
				<img
					src={BusinessSolution}
					alt="Person having issues with their IT services"
					height="384px"
					width="486.83px"
					class="h-80 w-80 md:w-auto md:h-96"
				/>
			</figure>
		</div>
	</header>
</div>
<div class="container mx-auto p-4 mt-4">
	<h2 class="text-2xl md:text-6xl text-center mt-12 mb-16">Our Services</h2>
	<div class="flex flex-col md:grid md:grid-cols-3 md:gap-2 justify-between mt-4">
		{#each services as service}
			<Card {...service} />
		{/each}
	</div>
	<hr />
	<section id="reviews" class="mt-12 flex flex-col md:grid md:grid-cols-2 items-center">
		<div class="grid">
			<h2 class="text-2xl md:text-6xl text-center">The Proof is in Our Customer's Praise!</h2>
		</div>
		<Testimonial {testimonials} />
	</section>
</div>
