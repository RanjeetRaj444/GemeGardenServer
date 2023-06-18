const jsonServer = require('json-server')
const cors = require("cors");
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 3000

server.use(cors({
  origin: '*'
}));
server.use(middlewares)
server.use(router)
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

server.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send("Server is working")
})

server.listen(PORT, () => {
  console.log('JSON Server is running')
})


