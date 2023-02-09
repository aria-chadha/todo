<template>
    <v-app>
        <v-app-bar app color="dark" dark>
            <div class="d-flex align-center">
                <h2>To-Do List</h2>
            </div>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-main id="body">
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({}),
};
</script>

<style>
#nav {
    padding: 30px;
}
link {
    text-decoration: none;
}
#body {
    background-color: #d8edf1 !important;
}

h3 {
    color: whitesmoke;
    font-size: 25px;
    font-weight: medium;
    text-align: center;
}
</style>
