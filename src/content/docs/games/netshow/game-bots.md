---
title: YDKJ Net Show — Game Bots
description: Setting up the JOL (Jack Online) server bot for YDKJ Net Show revival.
---

import { Steps, Aside } from '@astrojs/starlight/components';


YDKJ The Net Show uses a simpler two-server architecture than the other Bezerk games — no registration server or IRC game list is required. The client just needs a Dispatch Server and a Content Server.

- **Bot Downloads:** [gs.bezerk.uk/jol/](http://gs.bezerk.uk/jol/)
- **Protocol Docs:** [BezerkIRCDocs — Dispatch Server](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite/Dispatch%20Server)

---

## Architecture

```
[YDKJ Client]
      │
      ▼
[Dispatch Server]  ──→  HTTP response pointing to content server
      │
      ▼
[Content Server]   ──→  UpdateScript.ini + question packs + media
      │
      ▼
[Game Server]      ──→  (details TBD — likely IRC or proprietary)
```

Unlike Acrophobia and Cosmic Consensus, YDKJ Net Show **does not require player accounts or registration**. This makes it one of the simpler titles to begin reviving.

---

## Dispatch Server

The Dispatch Server is the client's first point of contact. It returns a configuration telling the client where to find everything else.

### YDKJ Net Show 1.5 — Dispatch Protocol

**What the client requests:** An HTTP GET to the configured dispatch URL.

**What the server returns:** A structured response (similar to `Dispatch.ini`) that includes:
- Content server hostname and port
- Game server connection details
- Version information

The full protocol details are in the [BezerkIRCDocs Dispatch Server docs](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite/Dispatch%20Server).

---

## Content Server

The Content Server delivers all game content via `UpdateScript.ini`.

### `UpdateScript.ini` — Key Commands

| Command | Purpose |
|---|---|
| `Url <base_url>` | Base URL for file downloads |
| `Version <ver>` | Minimum required version |
| `File <filename>` | Download this file |
| `Launch <exe>` | Run this after updating |

The content server must host:
- Question pack files
- Audio clips (the JACK host commentary)
- Video segments (if any)
- Game data files

---

## Version Differences

### Net Show 1.0

- Simpler dispatch format
- Smaller question set
- Shorter `UpdateScript.ini`

### Net Show 1.5

- More complex dispatch with additional fields
- Larger question and media library
- Enhanced audio/video content

### Sports The Net Show

- Sports-themed questions
- Same 1.5 dispatch format
- Different content paths

---

## Minimal Dispatch Server (Python)

```python
from http.server import HTTPServer, BaseHTTPRequestHandler

class DispatchHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        response = b"""
[dispatch]
content_host=127.0.0.1
content_port=80
content_path=/jol/content/
game_host=127.0.0.1
game_port=6667
version=1.5.0.0
"""
        self.send_response(200)
        self.send_header('Content-Type', 'text/plain')
        self.end_headers()
        self.wfile.write(response)

HTTPServer(('', 80), DispatchHandler).serve_forever()
```

---

## Current Status

| Component | Status |
|---|---|
| Dispatch Server | 🟡 Protocol documented |
| Content Server | 🟡 `UpdateScript.ini` format documented |
| Game Room Bot | 🔴 Not yet started |
| Question Pack Extraction | 🔴 Not yet done |

<Aside type="tip">
YDKJ Net Show is a great starting point for Bezerk revival — no registration server means less infrastructure to set up before you can start testing client connectivity.
</Aside>
