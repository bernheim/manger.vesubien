<template>
    <div class="sign-up pt-32">
        <p>Create a new account</p>
        <form>
            <input type="text" v-model="email" placeholder="Email"><br>
            <input type="password" v-model="password" placeholder="Password"><br>
            <button class="btn" @click="SignUp">Sign up</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'SignUp',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        SignUp: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                () => {
                    alert('Account created.'),
                    this.$router.replace('home')
                },
                (err) => {
                    alert('Oops. ' + err.message)
                }
            );
        }
    }
}
</script>