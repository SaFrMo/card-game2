<template>
    <section class="game-container" v-if="G">
        <div class="hand-wrap">
            <game-hand
                v-for="(hand, i) in G.hands"
                :key="i"
                :hand="hand"
                @ask="onAsk"
            />
        </div>
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
            this.client.moves.drawCards({ count: 5 })
            this.client.events.endTurn()
            this.client.moves.drawCards({ count: 5 })
            this.client.events.endTurn()
        },
        onAsk(val) {
            const otherPlayerIndex = this.ctx.currentPlayer == 0 ? 1 : 0
            this.client.moves.askForCard({ rank: val, otherPlayerIndex })
        }
    }
}
</script>

<style lang="scss">
.game-container {
    .hand-wrap {
        display: flex;
        justify-content: space-between;
    }
}
</style>
