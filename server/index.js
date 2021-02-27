const express = require('express');
const app = express();
const cors = require('cors')
const fs = require('fs');
const bodyParser = require('body-parser');

const axios = require('axios');
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
})

app.get('/fetch', (req, res) => {
    axios.get('https://www.sbir.gov/api/solicitations.json?keyword=sbir')
    .then((request) => {
        res.send(request.data)
        console.log(request.data)
        console.log('Get request on /fetch route completed')
    })
    .catch((err) => {
        console.log('There was an error')
        console.log(err);
    })
})

app.post('/post', (req, res) => {
    console.log('post request received')
    console.log(req.body);

    fs.writeFile('./favorites.json', JSON.stringify(req.body), err=>{
        if(err){
        console.log('Error writing file', err)
        }else{
        console.log('Write successful');
        }
    })

    res.send('Export complete, check server/favorites.json to see the export');


})