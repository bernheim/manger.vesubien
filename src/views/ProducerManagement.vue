<template>
    <div class="home py-32 lg:px-32 px-16">
        <addWineForm></addWineForm>
    </div>
</template>

<script>
import addWineForm from '@/components/addWineForm.vue'

export default {
    name: "ProducerManagement",
    components: {
        addWineForm
    }
    
}
</script>