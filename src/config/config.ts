import "dotenv/config";

function getEnv(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Environment variable "${name}" is required.`);
    }

    return value;
}

export const config = {
    apiId: Number(getEnv("API_ID")),
    apiHash: getEnv("API_HASH"),
    sessionName: getEnv("SESSION_NAME"),
};