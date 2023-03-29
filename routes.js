
let cards = [
    {id: '1', name: '1st card', status: 'to do', priority: 2  },
    {id: '2', name: '2st card', status: 'progress', priority: 5 },
]

function routes(app){


app.get('/card', (req, res) => {
    res.send(cards)
})

app.delete('/card/:cardId', (req, res) => {
    console.log(req)
    const cardId = req.params.cardId;
    cards = cards.filter(el => el.id !== cardId )
    res.send(cards)
})

app.post('/card', (req, res) => {
    console.log(req)
    const card = req.body
    cards.push({id: Math.random().toString(), ... card});
    res.send('Card created')
})

app.patch('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    const card = req.body
    cards = cards.map( el => el.id === cardId ? ({...card, id: el.id}) : el)
    res.send('Card Updated')
})
}

module.exports = routes;
