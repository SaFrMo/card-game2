<template>
    <section class="game-container" v-if="G">
        <div class="hand-wrap">
            <game-hand
                v-for="(hand, i) in G.hands"
                :key="i"
                :hand="hand"
                @ask="onAsk($event, i)"
            />

            <div class="summary" v-if="ctx.gameover">
                {{ ctx.gameover }}
            </div>
        </div>
    </section>
</template>

<script>
import boardgame from '~/mixins/boardgame'
import * as core from 'boardgame.io/core'
import options from '~/lib/game'

export default {
    mixins: [boardgame],
    data() {
        return {
            options
        }
    },
    methods: {
        onAsk(rank, askerIndex) {
            const otherPlayerIndex = askerIndex == 0 ? 1 : 0
            this.client.moves.askForCard({
                rank,
                otherPlayerIndex,
                askerIndex
            })
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
