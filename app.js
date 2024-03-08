// const express = require('express')
// var cors = require('cors')
// const app = express()
// app.use(cors())

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(4000)

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3030;
app.get('/', function (req, res) {
    res.send('Hello World')
})
// your code
app.get('/hussein', function (req, res) {
    let data  =[{name:'hussein',id:12},{name:'mazn',id:11},{name:'moataz',id:15}]
    res.send(data)
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});