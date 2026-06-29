---
title: Get The Picture — Game Bots
description: Setting up the Get The Picture IRC game server and registration server.
---

import { Steps, Aside } from '@astrojs/starlight/components';


Get The Picture uses the same IRC-based server architecture as Cosmic Consensus, sharing even the same registration endpoint structure. A dedicated bot for Get The Picture has not yet been built, but the protocol is documented.

- **Bot Downloads:** [gs.bezerk.uk/picture/](http://gs.bezerk.uk/picture/)
- **Protocol Docs:** [BezerkIRCDocs](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite)

---

## Architecture

```
[Get The Picture Client]
      │
      ▼
[Dispatch Server]    ──→  serves Dispatch.ini (HTTP)
      │
      ▼
[Content Server]     ──→  serves UpdateScript.ini + images (HTTP)
      │
      ▼
[Registration Server] ──→  /gtp/validate.cgi  (HTTP CGI)
      │
      ▼
[Game List IRC]      ──→  IRC game list channel
      │
      ▼
[Game Room IRC]      ──→  IRC game room channels
```

---

## Registration Server — `/gtp/validate.cgi`

Get The Picture shares the same registration protocol as Cosmic Consensus, with a different path and origin code.

### Request Format (HTTP POST)
```
player_name=user&password=pass&origin_code=M1&version=1.0.0.26&platform_code=W
```

| Field | Value |
|---|---|
| `origin_code` | `M1` (Get The Picture installer) |
| `platform_code` | `W` (Windows) |

### Success Response
```
player_name=user&version=1.0.0.26&platform_code=W&player_id=746&playersession_id=6712950&adult=1&result=1
```

### Result Codes

| Code | Meaning |
|---|---|
| `1` or `0.999` | Login successful |
| `2` | CGI error |
| `5` | Username not registered |
| `6` | Wrong username/password |
| `8` | Bad username |
| `10` | Account banned |
| `11` | Email invalid |
| `12` | Username expired |
| `13` | Database error |

---

## Content Server — Image Delivery

Get The Picture is uniquely dependent on the **Content Server** to deliver the game images that are progressively revealed during play. This makes content extraction and hosting especially important.

The Content Server must serve:
- Game image assets (the "pictures" to be guessed)
- `Dispatch.ini` — server routing config
- `UpdateScript.ini` — update manifest

---

## Minimal Registration Server (Python)

You can implement a minimal registration CGI for testing:

```python
#!/usr/bin/env python3
import sys

# Read POST data
content_length = int(os.environ.get('CONTENT_LENGTH', 0))
post_data = sys.stdin.read(content_length)
# Parse player_name from post_data...

print("Content-Type: text/plain")
print()
print("player_name=testuser&version=1.0.0.26&platform_code=W&player_id=1&playersession_id=1000&adult=1&result=1")
```

---

## Current Status

| Component | Status |
|---|---|
| Registration Server (`/gtp/validate.cgi`) | 🔴 Needs implementation |
| Game List IRC Bot | 🔴 Not yet started |
| Game Room IRC Bot | 🔴 Not yet started |
| Image content extraction | 🔴 Not yet done |
| Dispatch + Content Server | 🟡 Protocol documented |
