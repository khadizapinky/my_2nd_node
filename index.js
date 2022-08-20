const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res)=> {
    res.send('Look mama here')
})

const users = [
    {id:1, name:'sabila'},
    {id:2, name:'nabila'},
    {id:3, name:'rabila'}

]


app.get('/users', (req, res) => {
    if(req.query.name){ 
      const search = req.query.name.toLowerCase();
      const matched = users.filter(user => user.name.toLowerCase().includes(search));
      res.send(matched);
    }
    else{
       res.send(users)
    }
    
})


app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id)
    res.send(user);
})

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    console.log('req', req.body)
    res.send(user);
})
app.listen(port, () => {
    console.log('listening to port', port)
})