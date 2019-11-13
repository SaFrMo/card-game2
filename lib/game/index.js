import deck from './deck'

export default {
    game: {
        name: 'go-fish',

        setup(ctx) {
            return {
                deck
            }
        },

        moves: {}
    }
}
