<template>
    <div>
        <form class="text-left edit">
            <div>Name</div>
            <div class="py-1 mb-6"><input class="addProducerInput" type="text" v-model="producer.name" placeholder="New Producer"></div>
            <div class="text-crimson mb-8">N'éditez pas le champ 'nom' sans savoir ce que vous faites !</div>
            <div>Short text</div>
            <div><textarea class="addProducerInput" type="text" v-model="producer.shortText" maxlength="60" placeholder="A *very* short description"></textarea></div>

            <div>Text</div>
            <div><textarea class="addProducerInput h-64" type="text" v-model="producer.text" placeholder="A not-so-short description"></textarea></div>
            <div class="multiselect mt-8">
                <multiselect v-model="producer.products" :options="options" :multiple="true" selectLabel="Appuyez sur entrer pour sélectionner"></multiselect>
            </div>
            <div class="multiselect">
                <multiselect v-model="producer.village" :options="villageOptions" selectLabel="Appuyez sur entrer pour sélectionner"></multiselect>
            </div>
            <div>Telephone</div>
            <div><input class="addProducerInput" type="tel" v-model="producer.tel" placeholder="Telephone"></div>            
            <div>Email</div>
            <div><input class="addProducerInput" type="email" v-model="producer.emai" placeholder="Email"></div>
            <div>Photo</div>
            <div><input class="addProducerInput" type="text" v-model="producer.img" placeholder="Image"></div>
            <div class="pretty p-default p-2 bg-indigo-100 inline-block">
                <p-input type="checkbox" name="check" v-model="producer.deliver">Je livre !</p-input>
            </div>
            <div>
                <button @click.prevent="updateProducer" class="btn mr-8">Update</button>
                <button @click.prevent="deleteProducer" class="btn-tertiary warning">Delete</button>
                </div>
        </form>
    </div>
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
                    name: this.producer.name,
                    shortText: this.producer.shortText,
                    text: this.producer.text,
                    deliver: this.producer.deliver,
                    tel: this.producer.tel,
                    email: this.producer.email,
                    img: this.producer.img,
                    products: this.producer.products,
                    village: this.producer.village
                })
            alert("Updated!")
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
</style>