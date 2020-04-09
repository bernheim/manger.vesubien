<template>
    <ul class="flex flex-wrap content-between pb-24">
        <li v-for="producer in producers" :key="producer.id" class="card-container mt-8" >
            <div class="card bg-white hover:bg-gray-100 cursor-pointer" @click="toProducer(producer)">
                <div>
                    <div v-if="producer.deliver == true" class="bg-english-full text-white font-bold p-4"><icon icon="lorry" />Je livre !</div>
                    <div v-else class="p-6"><div class="p-1"></div></div>
                </div>
                <div class="p-4">
                    <h2 class="text-xl">{{producer.name}}</h2>
                    <div class="text-left py-4 h-min-8-em">
                        <p>{{producer.shortText}}</p>
                    </div>
                    <div class="">
                        <div class="p-2"><div class="bg-gray-300 p-2 inline-block"><icon icon="map" /><span>{{producer.village}}</span></div></div>
                        <div>
                            <div v-for="product in producer.products" :key="product" class="productTag text-sm">
                            #{{ product }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import { producersCollection } from '../main.js';
import icon from './icon.vue';


export default {
    name: 'displayProducers',
    components: {
        icon
    },
    props: {
        type: String
    },
    data() {
        return {
            producers: [],
            producer: "",
            product: "",
            thisType: this.type
        }
    },
    firestore() {
        return {
        producers: producersCollection.where('products','array-contains',this.thisType)
        }
    },
    methods: {
        toProducer: function (producer) {
            this.$router.push({name: ':id', params: {id: producer.id}})
        }
    }
}
</script>

<style>
.h-min-8-em {
    min-height: 8em;
}

</style>