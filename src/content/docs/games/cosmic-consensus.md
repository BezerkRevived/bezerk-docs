---
title: Cosmic Consensus
description: Overview, history, and revival status for Cosmic Consensus — the classic Berkeley Systems opinion polling game.
---

import { Card, CardGrid, Badge } from '@astrojs/starlight/components';


> *"What do YOU think?"*

**Cosmic Consensus** was a multiplayer online party game from **Berkeley Systems**, released alongside other Bezerk.com titles. Players answer opinion-poll-style questions and score points when their answer matches the group **consensus**. The more people who agreed with you, the more points you earned — rewarding group think in a uniquely social game.

<CardGrid>
  <Card title="Game Bots" icon="seti:python">
    Set up the CosmicBot IRC server.
    [View Game Bot Docs](/bezerk-docs/games/cosmic-consensus/game-bots/)
  </Card>
  <Card title="Extracting Content" icon="open-book">
    Unpack original game data from the client installer.
    [Extraction Guide](/bezerk-docs/games/cosmic-consensus/extracting-content/)
  </Card>
  <Card title="How-to's" icon="rocket">
    Step-by-step guides to get Cosmic Consensus running.
    [View How-to's](/bezerk-docs/games/cosmic-consensus/how-tos/)
  </Card>
  <Card title="FAQ" icon="puzzle">
    Common questions about playing and hosting.
    [View FAQ](/bezerk-docs/games/cosmic-consensus/faq/)
  </Card>
</CardGrid>

---

## Game Overview

| Detail | Info |
|---|---|
| **Developer** | Berkeley Systems |
| **Platform** | Windows 95/98/ME |
| **Network** | Bezerk.com (IRC-based) |
| **Active Years** | Late 1990s – ~2001 |
| **Bot Code Name** | `bigidea` (CosmicBot) |
| **Bot Downloads** | [gs.bezerk.uk/bigidea/](http://gs.bezerk.uk/bigidea/) |

---

## How It Works

*   **The Ziggurat Climb:** Players compete to be the first to reach the top of a **ziggurat** (a pyramid-like board structure).
*   **No Right or Wrong Answers:** The host bot presents thought-provoking, opinion-based poll questions. Success relies entirely on predicting the opinions of the group, not factual knowledge.
*   **Consensus Movement:** After each answer phase, players advance up the ziggurat steps. The number of steps you climb is determined by how popular your answer was among the players:
    *   *Most Popular (Consensus) Answer:* Awards the maximum number of steps.
    *   *Less Popular Answers:* Awards fewer steps or none.
*   **Board Traps and Bonuses:** The steps of the ziggurat feature various traps and bonus spaces.
*   **Consensus Strategy:** Simply aiming for the most popular answer isn't always the best route. Players must tactically plan their climb, sometimes choosing a less popular answer to avoid landing on a trap space or to hit a bonus tile.


---

## Server Architecture

Cosmic Consensus shares the same core IRC-based architecture as other Bezerk games:

```
Client → Dispatch Server → Content Server → Registration Server → Game List Server → Game Room Server
```

### Registration Server

Uses `/big/validate.cgi` for login:

**Example Request:**
```
player_name=user&password=pass&origin_code=b1&version=1.0.0.26&platform_code=W
```

**Example Response:**
```
player_name=user&version=1.0.0.26&platform_code=W&player_id=746&playersession_id=6712950&adult=1&result=1
```

| Field | Meaning |
|---|---|
| `origin_code` | `b1` = Cosmic Consensus installer |
| `result` | `1` = success, `5` = not registered, `6` = bad password |
| `adult` | `1` = adult account (access to adult language rooms) |

### Game List Server (IRC)

The client joins the game list IRC channel and receives the room list via IRC private messages. The bot uses messages like `LN`, `LA`, `RR`, `RI`, `RE`, `PLB`, `PLI`, `PLE` to enumerate rooms and players.

---

## CosmicBot (In Development)

<Badge text="In Progress" variant="caution" /> The **CosmicBot** (`bigidea.py`) is currently under active development as the revival server for Cosmic Consensus.

**Current capabilities (early prototype):**
- Connects to a local IRC server
- Handles client login sequence (`LN` / `LA` handshake)
- Serves the room list via `RR` / `RI` / `RE` responses
- Sends player list via `PLB` / `PLI` / `PLE`
- Begins routing clients to a game room (`ST`)

**Source:** `/home/nonasuomy/code/CosmicConsensus/ExtractingFinalVersion/Bezerk/Server/bigidea.py`

### Protocol Snippet

```python
# Room list response (RI = Room Item)
IRCSock.send(f'PRIVMSG {client} :RI 0 BIR 1 2 3 R GIZA 127.0.0.1 6667 Big_000 mode 8 -1 9\r\n'.encode())

# Player list response (PLI = Player List Item)
IRCSock.send(f'PRIVMSG {client} :PLI 0 BIP 0 0 0 P Cookie\r\n'.encode())
```

---

## Revival Status

| Component | Status |
|---|---|
| Registration Server | 🟡 Needs implementation (share with GTP) |
| Game List Bot | 🟡 Early prototype (`bigidea.py`) |
| Game Room Bot | 🔴 Not yet started |
| Content Server | 🟡 See IRC Docs |
| Dispatch Server | 🟡 See IRC Docs |

➡️ **Protocol reference:** [github.com/SecondSight05/BezerkIRCDocs](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite)
