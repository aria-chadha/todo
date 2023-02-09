<template>
    <div>
        <v-container class="d-flex align-center justify-center" style="height: 900px">
            <v-card
                style="width: 500px; height: 600px"
                class="text-center grey darken-3 white--text pa-10"
            >
                <v-alert v-if="error" color="red lighten-2">{{ error }}</v-alert>
                <h2 class="fw-bold my-6 text-uppercase">Log in</h2>

                <p class="pb-6">Please enter your username and password</p>
                <form>
                    <div class="form-group">
                        <label class="control-label" for="email">Email</label>

                        <v-text-field
                            v-model="email"
                            name="email"
                            type="text"
                            dark
                            outlined
                        ></v-text-field>

                        <p class="text-danger" v-if="error">
                            {{ error }}
                        </p>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="password">Password</label>

                        <v-text-field
                            v-model="password"
                            name="password"
                            type="password"
                            dark
                            outlined
                        ></v-text-field>
                        <div class="ma-2" v-if="error">
                            {{ error }}
                        </div>
                    </div>
                </form>

                <v-btn
                    v-if="!error && password.length != 0 && email.length != 0"
                    @click="onSubmit"
                    class="px-5"
                    >Log in</v-btn
                >

                <v-btn v-else disabled class="px-5 mb-2">Log in</v-btn>
                <div class="pt-5">
                    <p class="card-footer text-center">
                        Don't have an account?
                        <a href="/#/register" class="text-white-50 fw-bold">Register</a>
                    </p>
                </div>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
    name: "LoginView",
    data() {
        return {
            password: "",
            email: "",

            formSubmitted: false,
            logIn: true,
            error: "",
        };
    },
    methods: {
        async onSubmit() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then((data) => {
                    console.log(data);
                    this.$router.replace({ name: "todo" });
                })
                .catch((error) => {
                    this.error = error;
                });
        },
        resetForm() {
            this.email = null;
            this.password = null;
        },
    },
};
</script>
