import { BuildDeck } from './deck'
import moves from './moves'
import { groupBy } from 'lodash'

const numPlayers = 2
const startHandSize = 4
const suits = ['hearts', 'diamonds', 'clubs', 'spades']

const deck = BuildDeck({ low: 1, high: 3, suits })

const phases = {
    play: {
        moves,
        start: true,
        onBegin: (G, ctx) => {
            // shuffle
            moves.shuffleDeck(G, ctx)

            // draw cards
            for (let i = 0; i < ctx.numPlayers; i++) {
                moves.drawCards(G, ctx, {
                    count: startHandSize,
                    playerIndex: i
                })
            }
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
            if (!G.deck.length) {
                const score = {}
                G.hands.forEach((hand, i) => {
                    const values = Object.values(groupBy(G.hands[i], 'rank'))
                    console.log(values)
                    score[`player${i}`] = values.filter(
                        v => v.length == suits.length
                    ).length
                })
                return score
            }
        }
    },

    numPlayers
}
