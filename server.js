const app = require("./src/app");
const port = 8080;

app.listen(process.env.PORT || port, () => {
  console.log(`Servidor está rodando na porta ${port}`)
}) 