import express from 'express'
const server_app = express()
const client_opt = 'workspaces/Candy/client_DIST'

server_app.get('/', function(req, res) {
    res.sendFile(client_opt+'/index.html',{root: client_opt })
});