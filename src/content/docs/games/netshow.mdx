---
title: YDKJ Net Show
description: Overview, history, and revival status for You Don't Know Jack — The Net Show, the classic Berkeley Systems online trivia game.
---

import { Card, CardGrid, Badge } from '@astrojs/starlight/components';


> *"Question the Answers!"*

**You Don't Know Jack: The Net Show** (YDKJ Net Show) was Berkeley Systems' flagship multiplayer online trivia game, running on Bezerk.com. It brought the irreverent, pop-culture-soaked humour of the YDKJ series to the internet, letting players compete in real time over a dial-up connection. It existed in multiple versions:

- **YDKJ The Net Show 1.0** (original)
- **YDKJ The Net Show 1.5** (expanded question set, updated engine)
- **YDKJ Sports The Net Show** (sports trivia variant)

<CardGrid>
  <Card title="Game Bots" icon="seti:python">
    Set up the JOL (Jack Online) server bot.
    [View Game Bot Docs](/bezerk-docs/games/netshow/game-bots/)
  </Card>
  <Card title="Extracting Content" icon="open-book">
    Unpack question packs and audio from the installer.
    [Extraction Guide](/bezerk-docs/games/netshow/extracting-content/)
  </Card>
  <Card title="How-to's" icon="rocket">
    Step-by-step setup guides.
    [View How-to's](/bezerk-docs/games/netshow/how-tos/)
  </Card>
  <Card title="FAQ" icon="puzzle">
    Common questions about playing and hosting.
    [View FAQ](/bezerk-docs/games/netshow/faq/)
  </Card>
</CardGrid>

---

## Game Overview

| Detail | Info |
|---|---|
| **Developer** | Berkeley Systems |
| **Platform** | Windows 95/98/ME |
| **Network** | Bezerk.com (IRC-based) |
| **Versions** | 1.0, 1.5, Sports |
| **Active Years** | Late 1990s – ~2001 |
| **Bot Downloads** | [gs.bezerk.uk/jol/](http://gs.bezerk.uk/jol/) |

---

## How It Works

*   **Insulting AI Host:** Players are guided by a sarcastic, tongue-in-cheek voice-acted host who reads questions, makes pop-culture jokes, and insults players for wrong answers.
*   **Trivia Buzzing:** The host presents multiple-choice trivia questions. Players must buzz in quickly and choose their answer within the time limit.
*   **Specialty Rounds:** The Net Show retained the hallmark question types from the main series:
    *   **DisOrDat:** A rapid-fire sorting round where players categorize items into one of two categories.
    *   **Gibberish Questions:** Deciphering a nonsense phrase that rhymes with a common saying or quote.
    *   **Jack Attack:** The final speed-matching round where words float across the screen and players match them to a central clue.
*   **Streaming Client Engine:** To play, users download a client that communicates with the Bezerk servers, dynamically streaming audio files and question pack data from the content server.

---

## Server Architecture

YDKJ Net Show uses a **Dispatch + Content** two-server model (simpler than Acrophobia — no registration server required):

```
Client → Dispatch Server → Content Server
```

| Server | Purpose |
|---|---|
| **Dispatch Server** | Points client to the correct content and game servers |
| **Content Server** | Streams question packs, media, and `Dispatch.ini` |

### Dispatch Server Protocol

The Dispatch Server is an HTTP server that returns a structured response to direct the client to the right content server and connection parameters.

**Example Dispatch Response (YDKJ 1.5):**

The dispatch file returned is `Dispatch.ini` — a plain-text config pointing to:
- Content server hostname and port
- Game server hostname and port  
- Version update URL

### Content Server

The Content Server delivers game content via `UpdateScript.ini`. This script tells the client which files to download (question packs, audio clips, game data) and from where.

Key UpdateScript.ini functions used:
| Command | Purpose |
|---|---|
| `File` | Download a specific file |
| `Url` | Base URL for downloads |
| `Version` | Client version check |
| `Launch` | Execute after update |

---

## Versions & Differences

### YDKJ Net Show 1.0
- First release; simpler dispatch protocol
- Smaller question set
- Dispatch Server uses a shorter response format

### YDKJ Net Show 1.5
- Expanded question packs
- Updated dispatch format with more fields
- Enhanced multimedia (more audio/video clips)

### YDKJ Sports The Net Show
- Sports-themed question packs
- Shares the 1.5 dispatch format
- Slightly different content server paths

---

## Revival Status

| Component | Status |
|---|---|
| Dispatch Server | 🟡 Protocol documented |
| Content Server | 🟡 UpdateScript.ini format documented |
| Game Room Bot | 🔴 Not yet started |
| Question Packs | 🔴 Extraction needed from installer |

:::tip
The YDKJ Net Show does **not** require a registration server — players can connect without account creation, making it one of the simpler Bezerk titles to revive.
:::

➡️ **Protocol reference:** [github.com/SecondSight05/BezerkIRCDocs](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite)
