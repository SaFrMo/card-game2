import { Client } from 'boardgame.io/client'

export default {
    data() {
        return {
            client: null,
            options: null
        }
    },
    mounted() {
        if (this.options) {
            this.initClient()
        }
    },
    methods: {
        initClient() {
            this.client = new Client(this.options)
            this.client.start()
            this.clientReady()
        },
        clientReady() {}
    },
    computed: {
        G() {
            if (!this.client) return null
            // TODO: find better way to react to client state changes
            const c = this.client.log
            return this.client.store.getState().G
        },
        ctx() {
            if (!this.client) return null
            // TODO: find better way to react to client state changes
            const c = this.client.log
            return this.client.store.getState().ctx
        }
    }
}
