<template>
    <div class="login">
        <h3>Sign in</h3>
        <form>
            <input type="text" v-model="email" placeholder="Email"><br>
            <input type="password" v-model="password" placeholder="Password"><br>
            <button @click.prevent="login" class="btn">Connect</button>
        </form>
        <div class="py-4">or</div>
        <div class=""><router-link to="/sign-up" class="btn-secondary">Sign up</router-link></div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
            userID: '',
            authenticated: false
        }
    },
    methods: {
        login: function () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                () => {
                    this.$store.dispatch('logIn')
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

<style>
    .login {
        padding-top: 15em;
        background-color: #fbf7ee;
        height: 100vh;
    }
    .login > form > input, .sign-up > form > input {
        margin: 1em 0 1.5em 0;
        width: 20em;
        padding: .75em;
        border-bottom: 1px grey solid;
        background-color: rgba(255,255,255,0.3);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    input:focus {
        background-color: rgba(255,255,255,0.8);
    }
    button {
        cursor: pointer;
    }
    

</style>