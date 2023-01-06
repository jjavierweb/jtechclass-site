<script lang="ts">
	let contactMethods: Array<any> = [
		{
			name: 'Email',
			endpont: 'mailto:info@javieraviation.com',
			endpointText: 'info@javieraviation.com'
		},
		{
			name: 'Phone',
			endpoint: 'tel: 1-800-123-1234',
			endpointText: '1-800-123-1234'
		},
		{
			name: 'Facebook',
			endpoint: 'https://facebook.com/javieraviation',
			endpointText: '@javieraviation'
		}
	];
</script>

<svelte:head>
	<title>Contact Us - Javier Aviation</title>
	<meta
		name="description"
		content="Contact us via email, phone or by filling the form in this page with any questions you might have"
	/>
</svelte:head>

<div class="container mx-auto p-4 mt-4">
	<h1 class="text-2xl font-bold sm:text-4xl text-center">Contact Us</h1>
	<div class="container p-4 flex flex-col md:flex-row justify-between">
		<div class="flex flex-grow">
			<form action="" method="post" on:submit|preventDefault class="m-4 flex-grow">
				<div class="flex flex-col flex-auto">
					<label for="first">First Name <span class="text-primary-500">*</span> </label>
					<input type="text" name="first" id="first" required />
				</div>
				<div class="flex flex-col mt-4 flex-auto">
					<label for="last">Last Name <span class="text-primary-500">*</span> </label>
					<input type="text" name="last" id="last" required />
				</div>
				<div class="flex flex-col  mt-4">
					<label for="email">Email Address <span class="text-primary-500">*</span> </label>
					<input type="email" name="email" id="email" required />
				</div>
				<div class="flex flex-col mt-4">
					<label for="confirmEmail"
						>Confirm Email Address <span class="text-primary-500">*</span>
					</label>
					<input type="email" name="confirmEmail" id="confirmEmail" required />
				</div>
				<div class="flex flex-col mt-4">
					<label for="message">Message <span class="text-primary-500">*</span> </label>
					<textarea name="message" id="message" />
				</div>
				<div class="flex mt-4">
					<button type="submit" class="flex btn bg-primary-500 ">Send Message</button>
				</div>
			</form>
		</div>
		<div class="flex flex-1 flex-col mt-4 ">
			<h2 class="text-xl md:text-2xl font-semibold">Direct Contact</h2>
			{#each contactMethods as contact}
				<div class="p-4 align-baseline">
					<h3 class=" text-lg uppercase text-primary-500">{contact.name}</h3>
					<a
						href={contact.endpoint}
						class="font-semibold text-sm md:text-base text-theme-font-color-base m-2"
						>{contact.endpointText}</a
					>
				</div>
			{/each}
		</div>
	</div>
</div>
