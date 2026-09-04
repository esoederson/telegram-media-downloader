import { TelegramService } from "./infrastructure/telegram/TelegramService.js";

async function main(): Promise<void> {
  const telegram = new TelegramService();

  await telegram.connect();

  const autorizado = await telegram.isAuthorized();

  console.log("Usuário autorizado:", autorizado);

  if (!autorizado) {
    console.log("Nenhuma sessão Telegram autenticada.");
    return;
  }

  const usuario = await telegram.getMe();

  console.log(usuario);
}

main();
