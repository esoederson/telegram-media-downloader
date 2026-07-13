import fs from "fs";
import path from "path";

const SESSION_DIR = path.join(process.cwd(), "sessions");

const SESSION_FILE = path.join(SESSION_DIR, "telegram.session");

if (!fs.existsSync(SESSION_DIR)) {
  fs.mkdirSync(SESSION_DIR, {
    recursive: true,
  });
}

export function carregarSessao() {
  if (!fs.existsSync(SESSION_FILE)) {
    return "";
  }

  return fs.readFileSync(SESSION_FILE, "utf8");
}

export function salvarSessao(sessao) {
  fs.writeFileSync(SESSION_FILE, sessao, "utf8");
}
