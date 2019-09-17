<template>
    <div>
        <h1 class="text-center font-weight-light my-5">Vuetify File Browser</h1>
        <v-row>
            <v-col>
                <file-browser :axiosConfig="{baseURL: '__AXIOS_BASE_URL__'}" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import FileBrowser from "vuetify-file-browser";

export default {
    components: {
        FileBrowser
    }
};
</script>
