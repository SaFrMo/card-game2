<template>
    <section class="hand">
        <ul>
            <li v-for="(card, i) in hand" :key="i">
                <game-card :card="card" />
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: {
        hand: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
.hand {
}
</style>
