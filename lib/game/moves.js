function askForCard(G, ctx, value) {
    // check if any other players have a card with the given value
    const matchIndexes = G.hands
        .map((hand, i) => {
            return hand.findIndex(card => card.value == value)
        })
        .filter(Boolean)

    console.log(matchIndexes)
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
