<template>
    <section class="game-container" v-if="G">
        {{ G.deck }}
        <!-- <button @click="client.moves.askForCard(3)">Ask</button> -->
    </section>
</template>

<script>
import boardgame from '~/mixins/boardgame'
import options from '~/lib/game'

export default {
    mixins: [boardgame],
    data() {
        return {
            options
        }
    },
    methods: {
        clientReady() {
            this.client.moves.shuffleDeck()
        }
    }
}
</script>

<style lang="scss">
.game-container {
}
</style>
