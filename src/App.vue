<template>
    <v-app id="app">
        <app-bar />
        <drawer />
        <v-content>
            <v-container>
                <router-view />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";

export default {
    name: "App",
    components: {
        AppBar,
        Drawer
    }
};
</script>

<style>
* {
    text-transform: initial;
}

.v-list-group__header__prepend-icon {
    margin-right: 10px;
}
</style>
