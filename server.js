const app = require("./src/app");
const port = 8080;

app.listen(process.env.PORT || port, () => {
  console.log(`Servidor rodando na porta ${port}`)
}) 