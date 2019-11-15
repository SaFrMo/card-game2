<template>
    <section class="game-container" v-if="G">
        <div class="hand-wrap">
            <game-hand
                v-for="(hand, i) in G.hands"
                :key="i"
                :hand="hand"
                @ask="onAsk($event, i)"
                @pass="onPass"
            />
        </div>

        <div class="summary" v-if="ctx.gameover">
            <p>{{ winner.name }} wins! Score: {{ winner.score }}</p>
            <p><button @click="client.reset">Play Again</button></p>
        </div>
    </section>
</template>

<script>
import boardgame from '~/mixins/boardgame'
import * as core from 'boardgame.io/core'
import options from '~/lib/game'
import { maxBy } from 'lodash'

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
        },
        onPass() {
            this.client.events.endTurn()
        }
    },
    computed: {
        winner() {
            const vals = Object.keys(this.ctx.gameover).map(key => ({
                name: key,
                score: this.ctx.gameover[key]
            }))
            return maxBy(vals, 'score')
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
