<template>
    <div><p>{{myWine.id}}, {{myWine.text}}</p>
        <form>
        <textarea v-model="newNote" class="bg-gray-300" type="text"></textarea>
        <button @click.prevent="addNote" class="p-4 my-2 lg:my-0 lg:mx-4 bg-gray-300 hover:bg-gray-100">Add</button>
        </form>
        <ul>
            <li v-for="note in notes" :key="note.text" class="my-8">{{note.text}} - {{note.createdAt.toDate()}}</li>
        </ul>
    </div>
</template>

<script>
import { producersCollection } from '../main.js';
import { notesCollection } from '../main.js';

export default {
    name: 'Wine',
    data () {
        return {
            wine: "",
            myWine: "",
            newNote: "",
            note: "",
            notes: []
        }
    },
    firestore() {
        return {
        myWine: producersCollection.doc(this.$route.params.id),
        notes: notesCollection.where("wineID", "==", this.$route.params.id).orderBy("createdAt", "desc")
        }
    },
    methods: {
        addNote: function() {
            if (this.newNote) {
                 notesCollection.doc().set({
                    wineID: this.myWine.id,
                    text: this.newNote,
                    createdAt: new Date()
                    })
                .catch(function(error) {
                    alert.error("Error adding document: ", error);
                });
                this.newNote = ''
            }
        }
    }
}
</script>