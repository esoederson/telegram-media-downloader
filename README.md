# Telegram Media Downloader

> Professional open source tool for downloading and organizing media from Telegram chats and channels that the authenticated user is authorized to access.

![Project Status](https://img.shields.io/badge/status-in%20development-orange)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node.js](https://img.shields.io/badge/node-%3E%3D22-green)
![TypeScript](https://img.shields.io/badge/TypeScript-Planned-blue)

---

## Why?

Telegram Media Downloader was created with two complementary goals.

The first is to provide a reliable tool capable of downloading and organizing media from Telegram chats and channels that the authenticated user is authorized to access.

The second is educational.

Instead of being just another downloader, this repository documents the complete process of designing, implementing and maintaining a professional Node.js and TypeScript application following modern software engineering practices.

Every architectural decision is documented to help developers understand not only **how** the project works, but also **why** it was built this way.

---

## Philosophy

- Readability over cleverness.
- Architecture before implementation.
- Documentation before optimization.
- Learning before shortcuts.
- Open Source by design.

---

## Features

### Implemented

- [x] Telegram authentication
- [x] Persistent session

### Planned

- [ ] Chat explorer
- [ ] Media explorer
- [ ] Media downloader
- [ ] Resume interrupted downloads
- [ ] Interactive CLI
- [ ] Configuration profiles
- [ ] Logging system
- [ ] Automated tests
- [ ] Cross-platform support

---

## Project Status

This project is currently under active development.

The development process is intentionally documented to serve as a learning resource for developers interested in Node.js, TypeScript, software architecture and open source practices.

---

## High-Level Architecture

```text
CLI
 │
 ▼
Application
 │
 ▼
Telegram Services
 │
 ▼
Infrastructure
```

See:

- docs/architecture/ARCHITECTURE.md

---

## Technology Stack

- Node.js
- TypeScript (planned)
- GramJS
- Vitest
- ESLint
- Prettier
- GitHub Actions

---

## Documentation

- Architecture
- Roadmap
- Contributing Guide
- Engineering Journal
- RFCs

---

## Roadmap

The project roadmap is available in:

docs/ROADMAP.md

---

## Contributing

Contributions are welcome.

Please read the contribution guide before opening Issues or Pull Requests.

---

## License

MIT License.