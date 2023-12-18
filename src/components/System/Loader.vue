<template>
    <div style="height: 50vh;">
        <v-row class="loader">
            <v-col class="text-center d-flex flex-column justify-center align-center">
                <v-progress-circular color="primary" class="mb-3" indeterminate></v-progress-circular>
                {{ smsWait }}
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Loader',
    props: {
        smsWait: {
            type: String,
        }

    }
}
</script>

<style scoped>
.loader {
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
