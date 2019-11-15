<template>
    <section class="hand">
        <ul>
            <li v-for="(card, i) in displayHand" :key="i">
                <game-card :card="card" @ask="$emit('ask', $event)" />
            </li>
            <li>
                <button @click="$emit('pass')">Pass</button>
            </li>
        </ul>

        <div class="books" v-if="books.length">
            <span>Books:</span>
            <ul>
                <li v-for="(book, i) in books" :key="i">
                    <span>{{ book[0].rank }}s</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { groupBy } from 'lodash'

export default {
    props: {
        hand: {
            type: Array,
            required: true
        },
        context: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        displayHand() {
            const bookRanks = this.books.reduce(
                (acc, curr) => acc.concat(curr[0].rank),
                []
            )
            return this.hand.filter(card => !bookRanks.includes(card.rank))
        },
        books() {
            const suitCount = 4
            return Object.values(groupBy(this.hand, 'rank')).filter(
                arr => arr.length == suitCount
            )
        }
    }
}
</script>

<style lang="scss">
.hand {
}
</style>
