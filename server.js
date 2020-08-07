const cors = require('cors')
const express = require('express')
const axios = require('axios')
const app = express()

app.use(cors())

app.get('/', async(req, res) => {

    try {
        // response é a resposta do axios MAs eu tiro o data de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        
        return res.json(data)    
    } catch (error) {
        console.log(error)
    }

    
})

app.listen('3000')