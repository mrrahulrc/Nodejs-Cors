const http = require('http')
const PORT = 8000

const server = http.createServer()

// Origins That you want to Allowed 
const Origins = ['https://www.google.com', 'https://in.search.yahoo.com']

server.listen(PORT, () => {
    console.log(`Server started : http://locahost:${PORT}`)
})

server.on('request',  (req,res) => {
    if(req.url == '/'){
        if(Origins.indexOf(req.headers.origin) !== -1){
            res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        }
        res.end(JSON.stringify({
            msg : "this is your precious data"
        }));
    }
})