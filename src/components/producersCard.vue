<template>
    <div>
        <div>
            <h2>{{this.thisTitle}}</h2>
        </div>
        <displayProducers :type="this.thisTitle"></displayProducers>
</div>
</template>

<script>
import displayProducers from '@/components/displayProducers.vue'

export default {
    name: 'producersCard',
    components: {
        displayProducers
    },
    props: {
        type: String
    },
    data() {
        return {
            thisTitle: this.title
        }
    }
}
</script>