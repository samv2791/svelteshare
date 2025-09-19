<script>
    let {date, timeslot, name, breed, state} = $props();
</script>

<tr class="even:bg-blue-100">
    <td class="py-2">{date}</td>
    <td>{timeslot}</td>
    <td>{name}</td>
    <td>{breed}</td>
    <td>{state}</td>
</tr>