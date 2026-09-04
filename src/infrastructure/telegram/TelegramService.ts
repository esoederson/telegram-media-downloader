import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/index.js";

import input from "input";

import { config } from "../../config/config.js";
import { carregarSessao, salvarSessao } from "./sessionStore.js";

export class TelegramService {
  private client: TelegramClient;
  private session: StringSession;

  constructor() {
    const sessao = carregarSessao();

    this.session = new StringSession(sessao);

    this.client = new TelegramClient(
      this.session,
      config.apiId,
      config.apiHash,
      {
        connectionRetries: 5,
      },
    );
  }

  async connect(): Promise<void> {
    await this.client.connect();

    const autorizado = await this.isAuthorized();

    if (!autorizado) {
      await this.login();
    }
  }

  private async login(): Promise<void> {
    console.log("Nenhuma sessão Telegram autenticada.");
    console.log("Iniciando login...");

    await this.client.start({
      phoneNumber: async () => await input.text("Telefone: "),
      phoneCode: async () => await input.text("Código: "),
      password: async () => await input.text("Senha 2FA: "),
      onError: (erro) => console.error(erro),
    });

    const sessao = this.session.save();

    salvarSessao(sessao);

    console.log("Login realizado com sucesso.");
    console.log("Sessão salva.");
  }

  async isAuthorized(): Promise<boolean> {
    return await this.client.isUserAuthorized();
  }

  async getMe() {
    return await this.client.getMe();
  }
}
