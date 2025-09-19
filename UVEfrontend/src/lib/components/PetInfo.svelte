<script>
	let { name, age, breed } = $props();
</script>

<div class="relative">
	<div class="absolute left-1/2 -top-10 -translate-x-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-orange-300">
		<p class="text-center text-5xl">🐶</p>
	</div>
	<div class="bg-gray-200 px-4 pt-10 pb-5 rounded-xl text-center">
		<h2>{name}</h2>
		<ul>
			<li>{age}</li>
			<li>{breed}</li>
		</ul>
	</div>
</div>
