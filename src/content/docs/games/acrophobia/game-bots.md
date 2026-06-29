---
title: Acrophobia — Game Bots
description: Setting up the Acrobot IRC bot and registration server to host Acrophobia.
---

import { Steps, Aside } from '@astrojs/starlight/components';


The primary revival bot for Acrophobia is **Acrobot**, an open-source Python project by SecondSight05. It implements both the **Registration Server** and the **IRC Game Bot** (Game List + Game Room).

- **GitHub:** [github.com/SecondSight05/Acrobot](https://github.com/SecondSight05/Acrobot)
- **Bot Downloads:** [gs.bezerk.uk/acrophobia/](http://gs.bezerk.uk/acrophobia/)

---

## Architecture

```
[Acrophobia Client]
      │
      ▼
[Dispatch Server]  ──→  serves Dispatch.ini (HTTP)
      │
      ▼
[Content Server]   ──→  serves UpdateScript.ini + assets (HTTP)
      │
      ▼
[Registration Server]  ──→  /cgi/acrval0.cgi  (HTTP CGI via Acrobot)
      │
      ▼
[Game List IRC Server]  ──→  #Acro_List channel (Acrobot IRC bot)
      │
      ▼
[Game Room IRC Server]  ──→  #Acro_000, etc. (Acrobot IRC bot)
```

---

## Acrobot Components

### `__main__.py` — Entry Point

The startup script that:
- Initializes the SQLite database (`data/bezerk.db`)
- Creates the `accounts`, `rooms`, and `sessions` tables if missing
- Reads config from `data/config.ini` (uses Fernet encryption for password storage)
- Launches the IRC client (`IRCClient.py`) and greenroom (`greenroom.py`) as threads

### `IRCClient.py` — Game List & Room Bot

The main IRC bot. Handles:
- Client login flow (`logon_now` → `logon` → `logon_accepted`)
- Room enumeration (`bot` command listing available rooms)
- Player routing to game rooms

### `greenroom.py` — Waiting Room

Manages the **greenroom** holding state before a game match starts. Tracks players waiting for enough participants before a game begins.

---

## IRC Protocol Reference (Game List Server)

After connecting to IRC, the client joins `#Acro_List` and waits for the bot.

### `logon_now`
Sent by bot to client after they join the list channel.
```
logon_now 0 "Welcome to Acrophobia!"
```
| Parameter | Description |
|---|---|
| `0` | Auth value (unused) |
| `"message"` | Welcome message (unused by client) |

### `logon` (Client → Bot)
Client sends credentials after receiving `logon_now`.
```
logon "username" "password" 29407 1 2 0 130 746 6712950
```
| Parameter | Description |
|---|---|
| `"username"` | Account username |
| `"password"` | Account password (**plaintext!**) |
| `29407` | Encrypted value (purpose unknown) |
| `1 2 0 130` | Game version (= 1.2.0.130) |
| `746` | Player ID |
| `6712950` | Session ID |

### `logon_accepted` (Bot → Client)
Sent if credentials are valid.
```
logon_accepted 0 "Welcome back!"
```

### `bot` — Room List
The bot announces available game rooms. Format details are in the full protocol docs.

---

## Registration Server — HTTP Endpoints

Acrobot exposes HTTP CGI endpoints that the game client calls before IRC login.

### `/cgi/acrval0.cgi` — Login (v1.1.0.114+)

**Request (HTTP POST):**
```
Name=user&Password=pass&Show=ACR&Origin=1.2&Version=1.2.0.130&Platform=W
```

| Field | Description |
|---|---|
| `Name` | Username |
| `Password` | Password (plaintext!) |
| `Show` | Always `ACR` for Acrophobia |
| `Origin` | Installer origin: `1.1`, `1.2`, or `CPC` |
| `Version` | Game version string |
| `Platform` | `W` = Windows |

**Success Response:**
```
PlayerId=746&SessionId=6712950&Adult=1&Result=0.999
```

**Result Codes:**
| Code | Meaning |
|---|---|
| `0.999` | Login successful |
| `2` | Database CGI error |
| `5` | Username not registered |
| `6` | Username or password incorrect |
| `8` | Bad username |
| `9` | Database DB error |
| `10` | Account banned |
| `11` | Email invalid |
| `12` | Username expired (inactive) |
| `13–17` | Various DB errors |

### Older Versions (1.0.24.84 and below)
Older clients use a different endpoint. See the [BezerkIRCDocs Registration Server docs](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite/Registration%20Server) for details.

---

## Setting Up Acrobot

<Steps>

1. **Install prerequisites**

   ```bash
   pip install cryptography
   ```
   You also need Python 3.x (any modern version) and an IRC server. **InspIRCd** is recommended:
   ```bash
   # Arch Linux
   sudo pacman -S inspircd
   ```

2. **Clone the repository**

   ```bash
   git clone https://github.com/SecondSight05/Acrobot.git
   cd Acrobot
   ```

3. **Configure your IRC server**

   Point your InspIRCd to listen on the expected ports. The game typically uses port `6667` for the game list and separate ports for game rooms.

   <Aside type="caution">
   InspIRCd may crash if too much data is sent during IRC login. Throttle your connection if you encounter issues.
   </Aside>

4. **Set up the web server**

   Acrobot needs a web server for the HTTP CGI endpoints (`/cgi/acrval0.cgi` etc.). Any web server works — Apache, Nginx, or a simple Python HTTP server.

5. **Run Acrobot**

   ```bash
   python -m acrobot
   # or
   python __main__.py
   ```

6. **Configure Dispatch.ini**

   Create a `Dispatch.ini` file on your content server pointing the game client to your servers. This file is requested by the client at startup.

</Steps>

---

## Database Schema

Acrobot uses SQLite (`data/bezerk.db`) with these tables:

```sql
-- User accounts
CREATE TABLE accounts (
    Username   TEXT,
    Password   TEXT,   -- Fernet encrypted
    Adult      INTEGER,
    BadName    INTEGER,
    BanStatus  INTEGER
);

-- Game rooms
CREATE TABLE rooms (
    RoomName        TEXT,
    ChannelName     TEXT,
    IsClean         INTEGER,
    SpecialInterest INTEGER
);
```
