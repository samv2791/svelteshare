<script>
    let {time, name, breed} = $props();
</script>

<div class="flex justify-between bg-yellow-200 rounded-xl h-10 py-2 px-2 m-2">
    <p>{time}</p>
    <p>{name}</p>
    <p>{breed}</p>
</div>