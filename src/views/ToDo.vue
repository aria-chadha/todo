<template>
    <div class="container pt-6 mt-6">
        <v-row class="d-flex justify-center">
            <v-col cols="9" class="headline d-flex justify-center">
                <span>Hello, {{ uname }}</span></v-col
            >
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col cols="6" md="3" sm="6" xs="6">
                <v-text-field
                    label="New Task"
                    outlined
                    v-model="newItem"
                    @keyup.enter.prevent="addItem"
                ></v-text-field>
            </v-col>
            <v-col cols="2" md="1">
                <v-btn color="dark" @click.prevent="addItem" class="pa-0" height="55px"
                    ><v-icon>mdi-plus</v-icon></v-btn
                >
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <transition-group name="fade">
                <v-card
                    color="grey lighten-4"
                    class="mx-auto pa-3 ma-2 d-flex justify-around"
                    max-width="600"
                    min-width="350"
                    max-height="80px"
                    v-for="ToDo in ToDos"
                    :key="ToDo.id"
                >
                    <v-row
                        ><v-col cols="1">
                            <v-btn icon color="red" @click="deleteToDo(ToDo.id)">
                                <v-icon>mdi-close-thick</v-icon>
                            </v-btn>
                        </v-col>
                        <v-col cols="2"
                            ><v-btn icon color="blue" @click="editItem(ToDo.id)">
                                <v-icon>mdi-pencil-outline</v-icon>
                            </v-btn>
                        </v-col>
                        <v-col cols="9">
                            <v-list-item-title
                                v-if="editId != ToDo.id"
                                class="headline mb-1 text-left"
                                >{{ ToDo.name }}</v-list-item-title
                            >
                            <v-list-item-title v-else class="headline mb-1 text-left"
                                ><v-text-field
                                    outlined
                                    v-model="updateItem"
                                    @keyup.enter.prevent="editToDo(ToDo.id)"
                                    :placeholder="ToDo.name"
                                ></v-text-field>
                            </v-list-item-title>
                        </v-col>
                    </v-row>
                </v-card>
            </transition-group>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="3" class="headline d-flex justify-center">
                <v-btn @click="logout">Logout</v-btn></v-col
            >
        </v-row>
    </div>
</template>

<script>
import { db } from "../components/firebase/db";
import firebase from "firebase/app";
export default {
    data() {
        return {
            ToDos: [],
            newItem: "",
            updateItem: "",
            editId: null,
            uname: "",
        };
    },
    mounted() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.uname = user.bc.email;
                // ...
            } else {
                this.$router.replace({ name: "login" });
            }
        });
    },

    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace({ name: "login" });
                });
        },
        deleteToDo(id) {
            db.collection("ToDos").doc(id).delete();
        },
        editItem(id) {
            this.editId = id;
        },
        editToDo(id) {
            db.collection("ToDos").doc(id).update({ name: this.updateItem });
            this.editId = null;
        },
        async addItem() {
            if (this.newItem) {
                await db
                    .collection("ToDos")
                    .add({ name: this.newItem })
                    .then(() => {
                        console.log("Sent Item!");
                    })
                    .catch((error) => {
                        console.error("Error:  ", error);
                    });

                this.newItem = "";
            }
        },
    },
    firestore: {
        ToDos: db.collection("ToDos"),
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
