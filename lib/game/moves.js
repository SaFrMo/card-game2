import { INVALID_MOVE } from 'boardgame.io/core'
import { groupBy } from 'lodash'

const suitCount = 4

// Alice asks Bob for a rank
// if Bob has that rank, they give all matches to Alice
// if Alice has a book of cards, they lay down all 4
// loop restarts
// otherwise, Alice draws a card
// if Alice has a book of cards, they lay down all 4
// Alice ends their turn
function askForCard(G, ctx, { rank, otherPlayerIndex, askerIndex = -1 }) {
    askerIndex = askerIndex == -1 ? ctx.currentPlayer : askerIndex

    if (askerIndex != ctx.currentPlayer) {
        return INVALID_MOVE
    }

    // find matches
    const toGive = G.hands[otherPlayerIndex].filter(card => card.rank == rank)
    toGive.forEach(card => {
        addCardToHand(G, ctx, { card, playerIndex: askerIndex })
    })
    // remove matches from Bob hand
    G.hands[otherPlayerIndex] = G.hands[otherPlayerIndex].filter(
        card => !toGive.includes(card)
    )

    // no match, so draw a card and end the turn
    if (!toGive.length) {
        drawCards(G, ctx)
        ctx.events.endTurn()
    }
}

function shuffleDeck(G, ctx) {
    G.deck = ctx.random.Shuffle(G.deck)
}

function drawCards(G, ctx, { count = 1, playerIndex = -1 } = {}) {
    for (let i = 0; i < count; i++) {
        if (G.deck.length) {
            const card = G.deck.shift()
            addCardToHand(G, ctx, { card, playerIndex })
        }
    }
}

function addCardToHand(G, ctx, { card, playerIndex = -1 } = {}) {
    playerIndex = playerIndex == -1 ? ctx.currentPlayer : playerIndex
    // add card to target player hand
    G.hands[playerIndex].push(card)
}

export default {
    askForCard,
    shuffleDeck,
    drawCards,
    addCardToHand
}
