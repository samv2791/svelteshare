<script>
    import Appointment from '$lib/components/Appointment.svelte';
    import PetInfo from '$lib/components/PetInfo.svelte';
</script>

<div class="flex flex-col justify-center mx-50">
    <h1 class="text-5xl mb-5">Ap<span class="bg-pink-500 rounded-md">pointments</span></h1>
    <div class="flex space-x-5">
        <div class="flex-[2] bg-gray-200 rounded-md h-auto">
            <div class="grid grid-cols-4 space-y-5 p-5">
                <Appointment time="10:00" name="test" breed="dog"></Appointment>
                <Appointment time="10:00" name="test" breed="dog"></Appointment>
                <Appointment time="10:00" name="test" breed="dog"></Appointment>
                <Appointment time="10:00" name="test" breed="dog"></Appointment>
                <Appointment time="10:00" name="test" breed="dog"></Appointment>
                <Appointment time="10:00" name="test" breed="dog"></Appointment>
            </div>
        </div>
        <div class="flex-[1]">
            <PetInfo name="test" age=10 breed="dog"></PetInfo>
        </div>
    </div>
</div>



