<template>
    <v-app id="app">
        <v-app-bar dense flat fixed clipped-left app color="blue-grey lighten-4">
            <v-toolbar-title>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-0"></v-app-bar-nav-icon>
                <span>Vuetify File Browser</span>
            </v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-btn icon>
                <v-icon style="font-size: 32px" color="blue-grey darken-4">mdi-github-circle</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" fixed clipped app>
            <v-list>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title class="ml-n5">Home</v-list-item-title>
                </v-list-item>
                <v-list-group prepend-icon="mdi-github-circle" no-action :value="true">
                    <template v-slot:activator>
                        <v-list-item-content class="ml-n5">
                            <v-list-item-title>GitHub</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item link>
                        <v-list-item-content class="ml-n5">
                            <v-list-item-title>
                                <v-icon left>mdi-vuetify</v-icon>Vuetify Component
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-content class="ml-n5">
                            <v-list-item-title>
                                <v-icon left>mdi-nodejs</v-icon>Backend
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-content class="ml-n5">
                            <v-list-item-title>
                                <v-icon left>mdi-web</v-icon>Demo Site
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <v-container>
                <router-view />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data: () => ({
        drawer: false
    })
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
