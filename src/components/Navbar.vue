<template>
    <div>
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
                    <v-icon class="mr-2">mdi-folder-multiple-outline</v-icon>
                    <span class="title">Vuetify File Browser</span>
                </v-btn>
            </v-toolbar-title>
            <div class="flex-grow-1"></div>
            <div v-if="$vuetify.breakpoint.smAndUp">
                <v-btn
                    icon
                    href="https://www.npmjs.com/package/vuetify-file-browser"
                    target="_blank"
                >
                    <v-icon style="font-size: 32px" color="blue-grey darken-4">mdi-npm</v-icon>
                </v-btn>
                <v-btn icon href="https://github.com/semeniuk/vuetify-file-browser" target="_blank">
                    <v-icon style="font-size: 32px" color="blue-grey darken-4">mdi-github-circle</v-icon>
                </v-btn>
            </div>
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
    </div>
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
