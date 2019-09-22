<template>
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
        <v-btn icon href="https://www.npmjs.com/package/vuetify-file-browser" target="_blank">
            <v-icon style="font-size: 32px" color="blue-grey darken-4">mdi-npm</v-icon>
        </v-btn>
        <v-btn icon href="https://github.com/semeniuk/vuetify-file-browser" target="_blank">
            <v-icon style="font-size: 32px" color="blue-grey darken-4">mdi-github-circle</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>
