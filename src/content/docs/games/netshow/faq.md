---
title: YDKJ Net Show — FAQ
description: Frequently asked questions about YDKJ Net Show revival.
---

---

## General

### What versions of YDKJ Net Show exist?

Three versions were released on Bezerk.com:
- **YDKJ The Net Show 1.0** — original release
- **YDKJ The Net Show 1.5** — expanded version with more questions and media
- **YDKJ Sports The Net Show** — sports-themed trivia variant

### Do I need an account to play?

No! Unlike Acrophobia and Cosmic Consensus, YDKJ Net Show does **not require account registration**. This makes it simpler to set up a revival server.

### Where can I find the original game client?

Look on abandonware sites. Search for `ydkj_netshow_setup.exe` or similar filenames.

---

## Technical

### What servers does the game need?

Only two:
1. **Dispatch Server** — HTTP server that returns a config pointing to the content server
2. **Content Server** — HTTP server that delivers question packs and game media

There is no IRC or registration server required.

### What protocol does the Dispatch Server use?

The client makes an HTTP GET request to a specific URL and receives a plain-text or INI-format response with connection details. The exact format differs slightly between versions 1.0, 1.5, and Sports.

See the [BezerkIRCDocs Dispatch Server documentation](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite/Dispatch%20Server) for version-specific details.

### Does the game actually run on modern Windows?

The clients were built for Windows 95/98/ME. They may run under compatibility mode on Windows XP or 7, or in a virtual machine. Wine on Linux may also work.

### What file format are the question packs in?

This is still being researched. The question pack format is proprietary and has not yet been fully reverse-engineered for the revival project.

---

## Revival Status

### What's the current state of YDKJ Net Show revival?

The server protocol for the Dispatch and Content servers has been documented in BezerkIRCDocs. The game room bot (the actual game host) has not yet been implemented.

### What's the hardest part of reviving YDKJ Net Show?

Two main challenges:
1. **Question pack format** — The proprietary format for the game's trivia questions needs to be reverse-engineered
2. **Game room bot** — The actual JACK host bot that runs the game hasn't been built yet

### How can I contribute?

- Reverse engineer the question pack file format
- Capture network traffic from an original client session
- Build a game room bot based on the [BezerkIRCDocs protocols](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite)
- Test and document what works with various client versions
