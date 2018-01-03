require('./config/config');

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

let publicDir = path.join(__dirname + './../dist');

app.use(express.static(publicDir));
app.use(cors({origin: 'http://localhost:3000'}));


app.get('/',(req, res)=>{
  res.sendFile(publicDir+'/index.html');
});

app.get('/pizza', (req, res)=> {
  res.send({name: 'Pizzaman', job: 'pizza Driver'});
});

app.listen(port, () => {
  console.log('App Running on port ' + port);
})

