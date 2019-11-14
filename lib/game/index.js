import deck from './deck'
import moves from './moves'

const numPlayers = 2
const startHandSize = 4

const phases = {
    play: {
        moves,
        start: true,
        onBegin: (G, ctx) => {
            moves.shuffleDeck(G, ctx)
            moves.drawCards(G, ctx, { count: startHandSize, playerIndex: 0 })
            moves.drawCards(G, ctx, { count: startHandSize, playerIndex: 1 })
        }
    }
}

export default {
    game: {
        name: 'go-fish',

        setup(ctx) {
            return {
                hands: Array(numPlayers).fill([]),
                deck
            }
        },
        phases,
        moves,
        endIf(G) {
            // TODO: figure out who has the most books when the game ends
            return !G.deck.length
        }
    },

    numPlayers
}
