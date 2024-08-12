const express = require ('express');
const app = express();

const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log('Server 3001');
});


app.get('/', (req, res) => {
    'Hello from server'
})


