---
title: Get The Picture — FAQ
description: Frequently asked questions about Get The Picture revival.
---

---

## General

### What is Get The Picture?

Get The Picture was a Berkeley Systems multiplayer trivia game on Bezerk.com where players compete to identify progressively-revealed images. The faster you guess correctly, the more points you earn.

### Is there a working revival server?

Not yet. The registration server protocol is documented (shared with Cosmic Consensus), but the game list and game room bots have not been built. Contributions are very welcome!

### How is it different from Cosmic Consensus?

- **Get The Picture** is image-based visual trivia — you guess what a picture shows as it reveals.
- **Cosmic Consensus** is opinion polling — you try to match the group's answer.
- Both share the same registration server format with different `origin_code` values (`M1` vs `b1`).

---

## Technical

### What does origin code `M1` mean?

`M1` is the installer origin code for Get The Picture. It's sent to the registration server during login.

### Why does login fail?

Common causes:
- Missing or wrong Registry keys (`Path`, `Origin`, `Version`)
- Registration server returning an error code
- Result `5` = username not registered
- Result `6` = wrong password

### What image format does the game use?

The native image format is not yet fully documented. Analysis of the original client files is needed.

---

## Contributing

### How can I help with the Get The Picture revival?

Key areas that need work:
1. **Image format reverse engineering** — identify how the game stores/streams image assets
2. **IRC protocol analysis** — capture what messages the client sends when in a game room
3. **Game room bot** — implement the bot that runs actual gameplay
4. **Registration server** — build the CGI handler for `/gtp/validate.cgi`

Protocol reference: [BezerkIRCDocs (rewrite branch)](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite)
