const low = 1
const high = 13
const suits = ['hearts', 'diamonds', 'clubs', 'spades']

const output = suits.map(suit => {
    const o = []
    for (let i = low; i <= high; i++) {
        o.push({ suit, value: i })
    }
    return o
})

export default [].concat(...output)
