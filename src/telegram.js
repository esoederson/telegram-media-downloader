import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/index.js";

import input from "input";

import { config } from "./config.js";

import { carregarSessao, salvarSessao } from "./session.js";

const sessao = carregarSessao();

console.log("Sessão carregada:");
console.log(sessao);

const stringSession = new StringSession(sessao);

const client = new TelegramClient(stringSession, config.apiId, config.apiHash, {
  connectionRetries: 5,
});

export async function conectarTelegram() {
  await client.connect();

  const autorizado = await client.isUserAuthorized();

  if (!autorizado) {
    console.log("Primeiro acesso. Fazendo login...");

    await client.start({
      phoneNumber: async () => await input.text("Telefone:"),

      phoneCode: async () => await input.text("Código:"),

      password: async () => await input.text("Senha:"),

      onError: console.log,
    });

    salvarSessao(client.session.save());

    console.log("Sessão salva.");
  } else {
    console.log("Sessão reutilizada.");
  }

  return client;
}

// export async function listarMensagens(canal, limite = 20) {
//   const mensagens = [];

//   for await (const mensagem of client.iterMessages(canal, {
//     limit: limite,
//   })) {
//     mensagens.push(mensagem);
//   }

//   return mensagens;
// }

export async function listarMensagens() {

    const mensagens = await client.getMessages("me", {
        limit: 5
    });

    console.log(mensagens);

    return mensagens;
}
