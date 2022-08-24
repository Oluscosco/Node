const http = require('http')

const server = createServer((rec, res) => {
    res.end("Hello from server")
})

server.listen(3040, () => {
    console.log("Server is running on port 3040")
})
