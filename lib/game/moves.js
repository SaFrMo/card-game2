// Alice asks Bob for a rank
// if Bob has that rank, they give all matches to Alice
// if Alice has a book of cards, they lay down all 4
// loop restarts
// otherwise, Alice draws a card
// if Alice has a book of cards, they lay down all 4
// Alice ends their turn
function askForCard(G, ctx, { rank, otherPlayerIndex }) {
    // find matches
    const toGive = G.hands[otherPlayerIndex].filter(card => card.rank == rank)
    // add matches to Alice hand
    G.hands[ctx.currentPlayer].push(...toGive)
    // remove matches from Bob hand
    G.hands[otherPlayerIndex] = G.hands[otherPlayerIndex].filter(
        card => !toGive.includes(card)
    )
}

function shuffleDeck(G, ctx) {
    G.deck = ctx.random.Shuffle(G.deck)
}

function drawCards(G, ctx, { count = 1 } = {}) {
    for (let i = 0; i < count; i++) {
        const card = G.deck.shift()
        G.hands[ctx.currentPlayer].push(card)
    }
}

export default {
    askForCard,
    shuffleDeck,
    drawCards
}
