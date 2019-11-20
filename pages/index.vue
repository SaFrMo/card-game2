<template>
    <main :class="['home']">
        <game-container v-for="(player, i) in players" :key="i" :playerID="i" />
    </main>
</template>

<script>
export default {
    data() {
        return {
            players: ['Sander', 'Melissa']
        }
    }
}
</script>

<style lang="scss">
.home {
    margin: 60px;
    margin-right: 340px;
    text-align: center;

    & > * + * {
        margin-top: 40px;
        border-top: 2px solid black;
        padding-top: 40px;
    }
}
</style>
