import deck from './deck'
import moves from './moves'

const numPlayers = 2

export default {
    game: {
        name: 'go-fish',

        setup(ctx) {
            return {
                hands: Array(numPlayers).fill([]),
                deck
            }
        },

        moves
    },

    numPlayers
}
