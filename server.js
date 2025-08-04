// server.js
const app = require('./index');
const port = 80;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
