<template>
    <v-app id="app">
        <v-app-bar
            dense
            flat
            fixed
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            color="blue-grey lighten-4"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-0"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <v-btn text to="/">
                    <v-icon class="mr-2">mdi-view-dashboard</v-icon>
                    <span class="title">Vuetify File Browser</span>
                </v-btn>
            </v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-btn icon>
                <v-icon style="font-size: 32px" color="blue-grey darken-4">mdi-github-circle</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" fixed app :clipped="$vuetify.breakpoint.lgAndUp">
            <v-list>
                <v-list-item to="/">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="ml-n5">Home</v-list-item-title>
                </v-list-item>
                <v-list-item to="/" disabled>
                    <v-list-item-icon>
                        <v-icon>mdi-help-circle-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="ml-n5">Documentation</v-list-item-title>
                </v-list-item>
                <v-list-group prepend-icon="mdi-github-circle" no-action :value="true">
                    <template v-slot:activator>
                        <v-list-item-content class="ml-n5">
                            <v-list-item-title>GitHub</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        href="https://github.com/semeniuk/vuetify-file-browser"
                        target="_blank"
                    >
                        <v-list-item-content class="ml-n5">
                            <v-list-item-title>
                                <v-icon left>mdi-vuetify</v-icon>Vuetify Component
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                        href="https://github.com/semeniuk/vuetify-file-browser-server"
                        target="_blank"
                    >
                        <v-list-item-content class="ml-n5">
                            <v-list-item-title>
                                <v-icon left>mdi-nodejs</v-icon>Backend
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                        href="https://github.com/semeniuk/vuetify-file-browser-demo"
                        target="_blank"
                    >
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
        drawer: null
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
