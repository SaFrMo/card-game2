<template>
    <section class="game-container" v-if="G">
        {{ G.deck }}
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
    }
}
</script>

<style lang="scss">
.game-container {
}
</style>
