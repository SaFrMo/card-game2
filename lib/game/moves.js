import { INVALID_MOVE } from 'boardgame.io/core'

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
    // add matches to Alice hand
    G.hands[askerIndex].push(...toGive)
    // remove matches from Bob hand
    G.hands[otherPlayerIndex] = G.hands[otherPlayerIndex].filter(
        card => !toGive.includes(card)
    )

    // TODO: how to return success/failure?
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
            G.hands[playerIndex == -1 ? ctx.currentPlayer : playerIndex].push(
                card
            )
        }
    }
}

function setupGame(G, ctx) {}

export default {
    askForCard,
    shuffleDeck,
    drawCards,
    setupGame
}
