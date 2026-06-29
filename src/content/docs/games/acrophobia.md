---
title: Acrophobia
description: Overview, history, and revival status for Acrophobia — the classic Berkeley Systems acronym party game.
---

import { Card, CardGrid, Badge } from '@astrojs/starlight/components';


> *"Think fast, and watch your acronyms!"*

**Acrophobia** was a multiplayer online party game created by **Berkeley Systems** (the same studio behind *You Don't Know Jack*) in 1997. Players are given a random set of letters and must craft a funny, clever, or creative acronym that matches — then vote on each other's submissions. It ran on Bezerk.com and was a landmark title in early internet gaming until the servers shut down around 2001.

<CardGrid>
  <Card title="Game Bots" icon="seti:python">
    Set up the Acrobot IRC server and registration server.
    [View Game Bot Docs](/bezerk-docs/games/acrophobia/game-bots/)
  </Card>
  <Card title="Extracting Content" icon="open-book">
    Unpack original game data from the client installer.
    [Extraction Guide](/bezerk-docs/games/acrophobia/extracting-content/)
  </Card>
  <Card title="How-to's" icon="rocket">
    Step-by-step guides to get Acrophobia running.
    [View How-to's](/bezerk-docs/games/acrophobia/how-tos/)
  </Card>
  <Card title="FAQ" icon="puzzle">
    Common questions about playing and hosting.
    [View FAQ](/bezerk-docs/games/acrophobia/faq/)
  </Card>
</CardGrid>

---

## Game Overview

| Detail | Info |
|---|---|
| **Developer** | Berkeley Systems |
| **Platform** | Windows 95/98/ME |
| **Network** | Bezerk.com (IRC-based) |
| **Active Years** | 1997 – ~2001 |
| **Revival Bot** | [Acrobot](https://github.com/SecondSight05/Acrobot) |
| **Bot Downloads** | [gs.bezerk.uk/acrophobia/](http://gs.bezerk.uk/acrophobia/) |

---

## How It Works

*   **Acronym Generation:** In each round, the game generates a random acronym ranging from **3 to 7 letters** long.
*   **Backronym Creation:** Players race against a timer to submit a creative, funny, or coherent phrase where each word starts with the corresponding letter of the generated acronym.
*   **Anonymous Voting:** Once the submission timer expires, all entries are presented anonymously. Players must vote for their favorite phrase (excluding their own).
*   **Scoring & Bonuses:**
    *   **Vote Points:** Players receive points based on the number of votes their acronym receives.
    *   **Speed Bonus:** Extra points are awarded to players who are among the first to submit a valid answer.
    *   **Voting Bonus:** Points are awarded for choosing the winning entry, which discourages tactical voting for poor answers.
*   **Winning & Face Off:** Players compete in a room (supporting up to 14 players per session) until a player reaches a target score (often **30 points**), triggering a final **Face Off** round to determine the winner.

There are several room types:
- **Clean** rooms — family-friendly
- **Adult Language** rooms — requires an "adult" validated account (over 18)


---

## Server Architecture

Acrophobia uses a layered IRC-based server architecture. The client communicates with the following servers in order:

```
Client → Dispatch Server → Content Server → Registration Server → Game List Server → Game Room Server
```

| Server | Purpose |
|---|---|
| **Dispatch Server** | Entry point — provides pointers to other servers |
| **Content Server** | Delivers `Dispatch.ini` and update scripts |
| **Registration Server** | Account login/registration via HTTP CGI |
| **Game List Server** | Lists available rooms via IRC (`#Acro_List`) |
| **Game Room Server** | Hosts actual gameplay via IRC channels |

---

## Revival Status

<Badge text="Active" variant="success" /> The **Acrobot** project by SecondSight05 is the primary revival effort for Acrophobia. It implements:

- A registration server (HTTP CGI endpoints)
- An IRC bot acting as the game list and game room server
- SQLite-based account storage
- Room management with clean/adult flags
- A "greenroom" holding area before matches begin

➡️ **GitHub:** [github.com/SecondSight05/Acrobot](https://github.com/SecondSight05/Acrobot)
