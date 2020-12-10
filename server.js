const app = require("./src/app");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});