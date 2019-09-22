<template>
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

            <v-list-group prepend-icon="mdi-npm-variant-outline" no-action :value="true">
                <template v-slot:activator>
                    <v-list-item-content class="ml-n5">
                        <v-list-item-title>NPM Packages</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item
                    href="https://www.npmjs.com/package/vuetify-file-browser"
                    target="_blank"
                >
                    <v-list-item-content class="ml-n5">
                        <v-list-item-title>
                            <v-icon left>mdi-vuetify</v-icon>Vuetify Component
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    href="https://www.npmjs.com/package/vuetify-file-browser-server"
                    target="_blank"
                >
                    <v-list-item-content class="ml-n5">
                        <v-list-item-title>
                            <v-icon left>mdi-nodejs</v-icon>Server
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
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
                            <v-icon left>mdi-nodejs</v-icon>Server
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
</template>

<script>
export default {
    data: () => ({
        drawer: null
    })
};
</script>

<style>
</style>
