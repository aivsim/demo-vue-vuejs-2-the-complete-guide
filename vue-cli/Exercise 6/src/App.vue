<template>
    <div class="container">
        <app-header> </app-header>
        <hr>
        <div class="row">
            <appServers> </appServers>
            <server-details></server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';
    import Footer from './components/Shared/Footer.vue';

    export default {
        components: {
            appHeader: Header,
            appServers: Servers,
            ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
