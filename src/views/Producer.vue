<template>
    <div class="home text-left">
        <div class="producer-header-container lg:px-32 py-32" v-bind:style="backgroundImage">
            <div class="producer-header" style="background: rgba(255,255,255,0.9)">
                <h1 class="">{{myProducer.name}}</h1>
            </div>
        </div>
        <div class="lg:px-32 px-8 pb-16">
            <div class="text-gray-800 text-xl py-8">{{myProducer.shortText}}</div>
            <div class="py-2 flex md:flex-row flex-col info-box">
                <div class="md:mr-1"><icon icon="map" /><span>{{myProducer.village}}</span></div>
                <div v-if="myProducer.tel" class="select-all md:mr-1">{{myProducer.tel}}</div>
                <div v-if="myProducer.email" class="underline"><a href="mailto:exemple@exemple.fr">exemple@exemple.fr</a></div>
            </div>
            <div class="text-gray-900 py-8">{{myProducer.text}}</div>
            <div>
                <div>Je produis :</div>
                <div v-for="product in myProducer.products" :key="product" class="productTag text-2xl">
                    #{{ product }}
                </div>
            </div>
            <div v-if="authenticated==true">
                <editProducer :producer="myProducer" />
            </div>
        </div>
    </div>
</template>

<script>
import { producersCollection } from '../main.js';
import icon from '@/components/icon.vue';
import editProducer from '@/components/editProducer.vue'

export default {
    name: 'Producer',
    data () {
        return {
            producer: "",
            myProducer: "",
            inlineStyles: "",
        }
    },
    components: {
        icon,
        editProducer
    },
    computed: {
        authenticated() {
            return this.$store.state.authenticated
        },
        backgroundImage() {
            return "background-image: url(" + this.myProducer.img + ")"
        }
    },
    firestore() {
        return {
            myProducer: producersCollection.doc(this.$route.params.id)
        }
    },
    methods: {
        deleteProducer: function(myProducer) {
            producersCollection.doc(myProducer.id).delete();
            this.$router.push({name:'Home'})
        }
    }
}
//name: this.newProducer,
//                    shortText: this.newProducerShortTxt,
//                    text: this.newProducerTxt,
//                    village: this.newProducerVillage,
//                    products: this.newProducerProducts,
//                    deliver: this.deliverTrue,
</script>

<style>
    .producer-header-container {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .producer-header {
        @apply p-8 inline-block;
        border: 1px solid grey;
 

    }

    .producer-header > h1 {
        @apply text-3xl py-8;
    }
    
    .info-box > div {
        display: inline-block;
        @apply p-2 bg-rifle text-white text-xl;
    }

    
</style>