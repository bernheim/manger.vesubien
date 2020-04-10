<template>
    <div class="bg-rifle-500 text-white py-4 md:px-32 px-8">
        <div class="max-w-xl flex md:flex-row flex-col justify-between">
            <div><router-link :to="AddProducer">Admin</router-link></div>
            <div>Mentions légales</div>
            <div>Conditions générales d'utilisation</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Lower'
    
}
</script>

<style>
    .foot > div {
        margin-right: 1em;
    }
</style>