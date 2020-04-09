<template>
    <div class="lg:px-16 py-4">
        <form class="text-left">
            <div class="py-1 mb-6"><input class="addProducerInput" type="text" v-model="newProducer" placeholder="New Producer"><span class="text-crimson">Cannot be edited!</span></div>
            <div><textarea class="addProducerInput" type="text" v-model="newProducerShortTxt" maxlength="60" placeholder="A *very* short description"></textarea></div>
            <div><textarea class="addProducerInput h-64" type="text" v-model="newProducerTxt" placeholder="A not-so-short description"></textarea></div>
            <multiselect v-model="newProducerProducts" :options="options" :multiple="true" placeholder="Products" selectLabel="Appuyez sur entrer pour sélectionner"></multiselect>
            <multiselect v-model="newProducerVillage" :options="villageOptions" placeholder="Village" selectLabel="Appuyez sur entrer pour sélectionner"></multiselect>
            <div><input class="addProducerInput" type="tel" v-model="newProducerPhone" placeholder="Telephone"></div>
            <div><input class="addProducerInput" type="email" v-model="newProducerEmail" placeholder="Email"></div>
            <div class="pretty p-default p-4 bg-indigo-100 inline-block">
                <p-input type="checkbox" name="check" v-model="deliverTrue">Je livre !</p-input>
            </div>
            <div><button @click.prevent="addProducer" class="btn">Add</button></div>
        </form>
        <div><button @click="logout">Logout</button></div>

    </div>
</template>

<script>
import { producersCollection } from '../main.js';
import Multiselect from 'vue-multiselect'
import firebase from 'firebase'

export default {
    name: 'addProducerForm',
    components: {
        Multiselect
    },
    data() {
        return {
            newProducer: "",
            newProducerVillage: "",
            newProducerTxt: "",
            newProducerShortTxt: "",
            villageOptions: ['Saint Martin', 'Roquebilière', 'Lantosque', 'Venanson', 'Utelle', 'La Bollène', 'Belvédère', 'Saint Jean la Rivière', 'Tinée', 'Var', 'Valdeblore'],
            newProducerProducts: [],
            options: ['Fruits', 'Légumes', 'Miel','Fromage','Viande'],
            deliverTrue: false,
            newProducerPhone: "",
            newProducerEmail: "",
            newProducerDoc: ""
        }
    },
    methods: {
        addProducer: function() {
            this.newProducerDoc = this.newProducer.replace(/ /g, '-').toLowerCase()

            if (this.newProducer && this.newProducerTxt && this.newProducerVillage && this.newProducerProducts) {
                producersCollection.doc(this.newProducerDoc).set({
                    name: this.newProducer,
                    shortText: this.newProducerShortTxt,
                    text: this.newProducerTxt,
                    village: this.newProducerVillage,
                    products: this.newProducerProducts,
                    deliver: this.deliverTrue,
                    tel: this.newProducerPhone,
                    email: this.newProducerEmail,
                    createdAt: new Date()
                })
                .catch(function(error) {
                    alert("Error adding document: ", error);
                });
                this.newProducer = '',
                this.newProducerVineyard = '',
                this.newProducerVillage = '',
                this.newProducerProducts = '',
                this.newProducerTxt = '',
                this.newProducerShortTxt = '',
                this.newProducerEmail = '',
                this.newProducerPhone = ''
            }// else {
            //    var inputs = document.getElementsByTagName('input');
            //    for (var i = 0; i < inputs.length; i += 1) {
            //        inputs[i].classList.add('');
            //    }
            //}
        },
        logout: function() {
            firebase.auth().signOut().then(() => {
            this.$store.dispatch('logOut')
            this.$router.replace('login')
            })
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.addProducerInput {
    @apply p-4 my-2 w-full;
    border-bottom: 1px gray solid;
    background-color: rgba(255,255,255,0.6);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.addProducerInput:focus {
    background-color: white;
}

form > * {
    margin-bottom: 1em;
}

</style>