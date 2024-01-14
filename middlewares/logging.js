import fs from "fs/promises";

async function logging(req, res, next) {
  try {
    const text = `\nIP: ${req.ip}, Method: ${req.method} Endpoint: ${req.originalUrl}`;
    await fs.appendFile("./data/logs.txt", text);
  } catch {
    await fs.appendFile(
      "./data/logs.txt",
      `\nLogging error on IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`
    );
  }
  next();
}

export default logging;
