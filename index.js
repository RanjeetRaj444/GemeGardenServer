const jsonServer = require('json-server')
const cors = require("cors");
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 3000

server.use(cors());
server.use(middlewares)
server.use(router)
server.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send("Server is working")
})

server.listen(PORT, () => {
  console.log('JSON Server is running')
})


