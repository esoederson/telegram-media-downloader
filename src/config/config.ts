import "dotenv/config";

function obterVariavelObrigatoria(nome: string): string {
  const valor = process.env[nome];

  if (!valor) {
    throw new Error(`Variável de ambiente obrigatória não encontrada: ${nome}`);
  }

  return valor;
}

export const config = {
  apiId: Number(obterVariavelObrigatoria("API_ID")),
  apiHash: obterVariavelObrigatoria("API_HASH"),
  sessionName: obterVariavelObrigatoria("SESSION_NAME"),
};
