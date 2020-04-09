<template>
    <form class="text-left edit">
        <div>Name</div>
        <div class="cotenteditable" ref="name" contenteditable="true">{{producer.name}}</div>
        <div class="text-crimson mb-8">N'éditez pas le champ 'nom' sans savoir ce que vous faites !</div>
        <div>Short text</div>
        <div class="cotenteditable" ref="short" contenteditable="true">{{producer.shortText}}</div>
        <div>Text</div>
        <div class="cotenteditable" ref="text" contenteditable="true">{{producer.text}}</div>
        <div class="multiselect mt-8">
            <multiselect v-model="producer.products" :options="options" :multiple="true" selectLabel="Appuyez sur entrer pour sélectionner"></multiselect>
        </div>
        <div class="multiselect">
            <multiselect v-model="producer.village" :options="villageOptions" selectLabel="Appuyez sur entrer pour sélectionner"></multiselect>
        </div>
        <div>Telephone</div>
        <div class="cotenteditable" ref="tel" contenteditable="true">{{producer.tel}}</div>
        <div>Email</div>
        <div class="cotenteditable" ref="email" contenteditable="true">{{producer.email}}</div>
        <div>Photo</div>
        <div class="cotenteditable" ref="img" contenteditable="true">{{producer.img}}</div>
        <div class="pretty p-default p-2 bg-indigo-100 inline-block">
            <p-input type="checkbox" name="check" v-model="producer.deliver">Je livre !</p-input>
        </div>
        <div>
            <button @click.prevent="updateProducer" class="btn mr-8">Update</button>
            <button @click.prevent="deleteProducer" class="btn-tertiary warning">Delete</button>
            </div>
    </form>
</template>

<script>
import { producersCollection } from '../main.js';
import Multiselect from 'vue-multiselect'

export default {
    props: {
        producer: {
            default: ''
        }
    },
    components: {
        Multiselect
    },
    data() {
        return {
            options: ['Fruits', 'Légumes', 'Miel','Fromage','Viande'],
            villageOptions: ['Saint Martin', 'Roquebilière', 'Lantosque', 'Venanson', 'Utelle', 'La Bollène', 'Belvédère', 'Saint Jean la Rivière', 'Tinée', 'Var', 'Valdeblore'],


        }
    },
    methods: {
        updateProducer: function () {
            producersCollection.doc(this.producer.id).update(
                {
                    name: this.$refs.name.innerHTML,
                    shortText: this.$refs.short.innerHTML,
                    text: this.$refs.text.innerHTML,
                    deliver: this.producer.deliver,
                    tel: this.$refs.tel.innerHTML,
                    email: this.$refs.email.innerHTML,
                    img: this.$refs.img.innerHTML,
                    products: this.producer.products,
                    village: this.producer.village
                }
            )
        },
        deleteProducer: function(myProducer) {
            if(confirm('Confirm deletion?')) {
                producersCollection.doc(myProducer.id).delete()
                this.$router.push({name:'Home'})
            }
        }
    }
}
</script>

<style>
    .edit {
        border-top: 3px solid grey;
        @apply p-4 mt-8;
    }

    .edit > div:not(.multiselect) {
        margin: initial;
        padding: 1em;
    }

    .cotenteditable {
        background-color: rgba(255,255,255,0.6);
        margin-bottom: 2em;
        border-bottom: 2px solid rgba(50,50,50,0.2);
    }

    .cotenteditable:focus {
        background-color: rgba(255,255,255,0.8);

    }
</style>