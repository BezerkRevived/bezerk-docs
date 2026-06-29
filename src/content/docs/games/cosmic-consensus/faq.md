---
title: Cosmic Consensus — FAQ
description: Frequently asked questions about Cosmic Consensus revival.
---

---

## General

### What is Cosmic Consensus?

Cosmic Consensus was a Berkeley Systems multiplayer party game where players answer opinion polls and earn points for matching the group consensus. It ran on Bezerk.com until around 2001.

### Is there a working revival server?

The **CosmicBot** (`bigidea.py`) is in early development. It can currently handle client login and room listing, but the full game room gameplay loop is not yet implemented.

### Where can I find the game client?

The Cosmic Consensus client is available from abandonware archives. Look for the original Bezerk.com installer.

---

## Technical

### What does the origin code `b1` mean?

`b1` is the installer origin code for Cosmic Consensus. It's stored in the Windows Registry and sent during login to identify which game is connecting.

### What ports does the game use?

- **HTTP:** Port `80` (registration + content server)
- **IRC Game List:** Typically port `6666` or `6667`
- **IRC Game Rooms:** Additional ports per room

### Why does login fail with result code `5`?

Result code `5` means the username is not registered. Make sure your registration server has a matching account, or implement a registration bypass that accepts any credentials.

### Why does login fail with result code `6`?

Result code `6` means incorrect username or password. Check that the password matches exactly.

---

## Game-Specific

### How does voting work?

Players submit their answer to a question, and the answer that gets the most votes (the consensus) is the winner. Players who chose the consensus answer score points.

### What types of rooms are there?

- **Clean rooms** — Family-friendly
- **Adult Language rooms** — For adult content

### How many players can join a room?

Room capacity is set in the `RI` message (`-1` = unlimited). Typical rooms hold 2–10 players.

---

## Contributing

### How do I help build CosmicBot?

Check the source at:
```
/home/nonasuomy/code/CosmicConsensus/ExtractingFinalVersion/Bezerk/Server/bigidea.py
```

The next major pieces needed are:
1. Full game room protocol (questions, answers, scoring)
2. Persistent account storage
3. A proper registration server CGI handler

Protocol reference: [BezerkIRCDocs (rewrite branch)](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite)
