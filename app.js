const express = require('express');
const dotenv = require('dotenv')
const {adminRoute,frontendRoute} = require('./routes')
const expressEjsLayout = require('express-ejs-layouts')

// configuration .env
dotenv.config();

const port = process.env.SERVER_PORT || 2020

//server
const app = express();

//serve static files
app.use(express.static(__dirname+'/public'))

//setting view engine and layouts
app.set('view','ejs')
app.use(expressEjsLayout);

//frontendRoute
app.use('/', frontendRoute)
//adminRoute
app.use('/admin',adminRoute)


const startServer = ()=>{
    try {
        app.listen(port,()=>{
            console.log(`server runing on http://localhost:${port}`)
        })
    } catch (e) {
        console.log(e)
        
    }
}
startServer();