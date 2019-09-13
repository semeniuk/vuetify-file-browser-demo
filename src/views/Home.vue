<template>
    <div>
        <h1 class="text-center font-weight-light my-5">Vuetify File Browser</h1>
        <v-row>
            <v-col>
                <file-browser :axiosConfig="{baseURL:'http://localhost:8081'}" />
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
