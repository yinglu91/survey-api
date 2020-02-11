const express = require('express') ;
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there?!'})
});

const PORT = process.env.PORT || 5000; 

// auto inject process.env.PORT in Heroku (Dynamic Port Binding), 
// but in local may undefine, default: 5000
app.listen(PORT, ()=> {
  console.log(`server is started on port: ${PORT}`)
})