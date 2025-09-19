<script>
    import Request from '$lib/components/Request.svelte';
</script>

<div class="flex flex-col justify-center mx-50">
    <h1 class="text-5xl">App<span class="bg-green-200 rounded-md p-0.5">ointment requests</span></h1>
    <table class="mt-10">
    <thead>
        <tr>
            <th>Date</th>
            <th>Timeslot</th>
            <th>Name</th>
            <th>Breed</th>
            <th>State</th>
        </tr>
    </thead>
    <tbody class="text-center">
        <Request date="24/01/2025" timeslot="9:00 - 10:00" name="test" breed="dog" state="tbd"></Request>
        <Request date="24/01/2025" timeslot="9:00 - 10:00" name="test" breed="dog" state="tbd"></Request>
        <Request date="24/01/2025" timeslot="9:00 - 10:00" name="test" breed="dog" state="tbd"></Request>
        <Request date="24/01/2025" timeslot="9:00 - 10:00" name="test" breed="dog" state="tbd"></Request>
        <Request date="24/01/2025" timeslot="9:00 - 10:00" name="test" breed="dog" state="tbd"></Request>
        <Request date="24/01/2025" timeslot="9:00 - 10:00" name="test" breed="dog" state="tbd"></Request>
        <Request date="24/01/2025" timeslot="9:00 - 10:00" name="test" breed="dog" state="tbd"></Request>
        <Request date="24/01/2025" timeslot="9:00 - 10:00" name="test" breed="dog" state="tbd"></Request>
        <Request date="24/01/2025" timeslot="9:00 - 10:00" name="test" breed="dog" state="tbd"></Request>
    </tbody>
</table>
</div>