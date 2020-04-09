<template>
    <div class="absolute w-full text-left">
        <nav class="md:px-32 px-10">
            <router-link to="/home" class="p-6 inline-block font-bold">Accueil</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style>
nav > a:hover {
    background-color: rgba(255,255,255,0.8);    
}

nav {
    background-color: rgba(255,255,255,0.5);
    border-top: 3px solid theme('colors.english.full');
    color: theme('colors.english.full')
}
</style>