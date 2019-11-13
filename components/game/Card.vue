<template>
    <div :class="['game-card', card.suit]">
        {{ card.value }} of {{ card.suit }}
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
