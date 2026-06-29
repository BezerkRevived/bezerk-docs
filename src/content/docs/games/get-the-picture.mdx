---
title: Get The Picture
description: Overview, history, and revival status for Get The Picture — the classic Berkeley Systems visual trivia game.
---

import { Card, CardGrid, Badge } from '@astrojs/starlight/components';


> *"Race to create the wittiest captions for hilarious pictures!"*

**Get The Picture** was a multiplayer online game show from **Berkeley Systems** on Bezerk.com. Players compete to write the funniest, wittiest, or most relevant captions for an ever-changing array of hilarious photographs, cartoons, and droodle drawings. It offered a creative, humor-focused social experience similar to modern captioning party games.

<CardGrid>
  <Card title="Game Bots" icon="seti:python">
    Set up the Get The Picture server bot.
    [View Game Bot Docs](/bezerk-docs/games/get-the-picture/game-bots/)
  </Card>
  <Card title="Extracting Content" icon="open-book">
    Unpack original image and game data.
    [Extraction Guide](/bezerk-docs/games/get-the-picture/extracting-content/)
  </Card>
  <Card title="How-to's" icon="rocket">
    Step-by-step guides to get the game running.
    [View How-to's](/bezerk-docs/games/get-the-picture/how-tos/)
  </Card>
  <Card title="FAQ" icon="puzzle">
    Common questions about playing and hosting.
    [View FAQ](/bezerk-docs/games/get-the-picture/faq/)
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
| **Bot Downloads** | [gs.bezerk.uk/picture/](http://gs.bezerk.uk/picture/) |

---

## How It Works

*   **Image Presentation:** Players in a game room are presented with a photograph, cartoon, or droodle drawing.
*   **Caption Submission:** Players race against the clock to type and submit their wittiest, funniest, or most creative caption for the image.
*   **Anonymous Voting:** Once the submission timer expires, all players anonymously vote for their favorite caption.
*   **Scoring:** Points are awarded based on the votes received, and the player with the most points at the end of the rounds is declared the winner.

The game leverages the **content delivery system** to stream image assets to clients, making the content server especially important for revival.


---

## Server Architecture

Get The Picture uses the same IRC-based server stack as other Bezerk games:

```
Client → Dispatch Server → Content Server → Registration Server → Game List Server → Game Room Server
```

### Registration Server

Get The Picture shares a registration server with **Cosmic Consensus**, using `/gtp/validate.cgi`:

**Example Request:**
```
player_name=user&password=pass&origin_code=M1&version=1.0.0.26&platform_code=W
```

**Example Response:**
```
player_name=user&version=1.0.0.26&platform_code=W&player_id=746&playersession_id=6712950&adult=1&result=1
```

| Field | Meaning |
|---|---|
| `origin_code` | `M1` = Get The Picture installer |
| `result` | `1` = success, `5` = not registered, `6` = bad password |

### Result Codes (Shared with Cosmic Consensus)

| Code | Meaning |
|---|---|
| `1` or `0.999` | Validation successful |
| `2` | CGI error / No content length |
| `5` | Username not registered |
| `6` | Incorrect username or password |
| `8` | Bad username, enter a new one |
| `10` | Account banned |
| `11` | Invalid email |
| `12` | Username expired (inactive) |
| `13` | Database error |

---

## Content Delivery

Get The Picture is particularly reliant on the **Content Server** to deliver image assets. The content server uses `UpdateScript.ini` to define what files to push to the client, pointing to game media.

Key files needed for revival:
- Game images (the "pictures" revealed during play)
- `Dispatch.ini` — tells the client where to connect
- `UpdateScript.ini` — update manifest

---

## Revival Status

| Component | Status |
|---|---|
| Registration Server | 🟡 Needs implementation (shares endpoint with Cosmic) |
| Game List Bot | 🔴 Not yet started |
| Game Room Bot | 🔴 Not yet started |
| Content/Image Delivery | 🔴 Image assets need extraction |
| Dispatch Server | 🟡 See IRC Docs |

:::note
Get The Picture requires significant **image asset extraction** work from the original client installer before gameplay can be restored.
:::

➡️ **Protocol reference:** [github.com/SecondSight05/BezerkIRCDocs](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite)
