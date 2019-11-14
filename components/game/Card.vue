<template>
    <div :class="['game-card', card.suit]">
        {{ card.rank }} of {{ card.suit }}
        <button @click="$emit('ask', card.rank)">
            Ask for {{ card.rank }}s
        </button>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.game-card {
    &.hearts,
    &.diamonds {
        color: red;
    }
}
</style>
