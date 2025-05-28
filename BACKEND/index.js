const express = require('express')
const axios = require('axios')
const cors = require('cors')

require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 4000

app.use(cors())

const API_KEY = process.env.OPENWEATHER_API_KEY

app.get('/api/clima', async (req, res) => {
    const ciudad = req.query.cuidad || 'Quito'
    try {
        const respuesta = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
        )
        const {temp} = respuesta.data.main
        const{description} = respuesta.data.weather[0]
        res.json({ciudad, temperatura: temp, descripcion: description})
    } catch (error) {
        res.status(500).json({ error: 'Error al consultar clima'})
        
    }
})

app.listen(PORT, () => {
    console.log('Backend escuchando en http://localhost:4000')
})