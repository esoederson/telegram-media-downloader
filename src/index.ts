import { TelegramService } from "./infrastructure/telegram/TelegramService.js";

async function main(): Promise<void> {
  const telegram = new TelegramService();

  await telegram.connect();

  const autorizado = await telegram.isAuthorized();

  if (!autorizado) {
    console.log("Usuário não autorizado.");
    return;
  }

  const dialogos = await telegram.getDialogs();

  console.log(`Total de conversas: ${dialogos.length}`);

  for (const dialogo of dialogos) {
    console.log(dialogo.name);
  }
}

main();
