---
title: Cosmic Consensus — How-to's
description: Step-by-step guides for setting up and playing Cosmic Consensus.
---

import { Steps, Aside } from '@astrojs/starlight/components';


---

## How to Set Up a Local Cosmic Consensus Server

<Steps>

1. **Set up an IRC server**

   Install InspIRCd and configure it to listen on the ports your bot will use:
   - Port `6666` — Game List server
   - Port `6667` — Game Room server

2. **Set up the CosmicBot**

   The bot source is at:
   ```
   /home/nonasuomy/code/CosmicConsensus/ExtractingFinalVersion/Bezerk/Server/bigidea.py
   ```

   Run it with Python:
   ```bash
   python bigidea.py
   ```

3. **Set up a web server for registration**

   Host the `/big/validate.cgi` endpoint. You can implement this as a simple Python Flask/FastAPI app or a CGI script:

   ```python
   # Minimal validate.cgi response for a hardcoded test user
   # result=1 = success
   print("Content-Type: text/plain\n")
   print("player_name=testuser&version=1.0.0.26&platform_code=W&player_id=1&playersession_id=1000&adult=1&result=1")
   ```

4. **Create `Dispatch.ini`** and host it on your web server.

5. **Redirect the game client** via hosts file:
   ```
   127.0.0.1  dispatch.bezerk.com
   ```

6. **Launch the game client** on Windows and log in.

</Steps>

---

## How to Add Game Rooms

The current CosmicBot prototype hardcodes room entries in the `RR` response handler. To add rooms, modify the `RI` lines in `bigidea.py`:

```python
# Add a new room:
IRCSock.send(f'PRIVMSG {ClientIRCName} :RI 2 BIR 1 2 3 R ATLANTIS 127.0.0.1 6668 Big_001 mode 8 -1 9\r\n'.encode())
```

Make the bot also update the `RB` count at the beginning:
```python
IRCSock.send(f'PRIVMSG {ClientIRCName} :RB 3\r\n'.encode())  # 3 rooms
```

---

## How to Test the Registration Endpoint

Use `curl` to test your `/big/validate.cgi` endpoint:

```bash
curl -X POST http://127.0.0.1/big/validate.cgi \
  -d "player_name=testuser&password=testpass&origin_code=b1&version=1.0.0.26&platform_code=W"
```

Expected success response:
```
player_name=testuser&version=1.0.0.26&platform_code=W&player_id=1&playersession_id=1000&adult=1&result=1
```

---

## How to Debug the Client Connection

Enable verbose logging on your IRC server and watch the client's IRC messages to understand which step is failing:

```bash
# InspIRCd debug mode
inspircd --debug --nofork
```

Look for the sequence:
1. Client joins `#Big_List`
2. Bot sends `LN 0`
3. Client sends `L <username> ...`
4. Bot sends `LA <username> Version X.X.X.X 0`
5. Client sends `RR` (room request)
6. Bot responds with room list
