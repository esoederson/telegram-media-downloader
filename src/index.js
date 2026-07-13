import { conectarTelegram, listarMensagens } from "./telegram.js";

async function main() {
  await conectarTelegram();

  const mensagens = await listarMensagens("me", 5);

  console.log(mensagens);
}

main();
