---
title: Acrophobia — How-to's
description: Step-by-step guides for setting up and playing Acrophobia with the Acrobot revival server.
---

import { Steps, Aside, Tabs, TabItem } from '@astrojs/starlight/components';


---

## How to Set Up a Complete Acrophobia Server

This guide walks through a full local revival server setup.

### Prerequisites

- Python 3.x
- An IRC server (InspIRCd recommended)
- A web server (Apache, Nginx, or Python's built-in server for testing)
- The original Acrophobia game client installed on Windows

<Steps>

1. **Set up InspIRCd**

   Install and configure InspIRCd. Create a dedicated Bezerk IRC network:
   ```
   Bind Port: 6667  (main game server)
   Servername: bezerk.local
   ```

   <Aside type="caution">
   InspIRCd may crash or disconnect if too much data is sent during the IRC login handshake. If you have issues, look at InspIRCd's flood protection settings.
   </Aside>

2. **Clone and set up Acrobot**

   ```bash
   git clone https://github.com/SecondSight05/Acrobot.git
   cd Acrobot
   pip install cryptography
   ```

3. **Configure the web server**

   Host the CGI endpoints. With Apache:
   ```apache
   <VirtualHost *:80>
       ScriptAlias /cgi/ /path/to/acrobot/cgi/
   </VirtualHost>
   ```

4. **Host `Dispatch.ini`**

   Create a `Dispatch.ini` pointing to your local server and host it at a web-accessible path. The game client will download this on startup.

5. **Fix Windows Registry**

   On the Windows machine running the game client, set:
   ```
   HKLM\SOFTWARE\Berkeley Systems\Acrophobia\Path = C:\Acrophobia\
   HKLM\SOFTWARE\Berkeley Systems\Acrophobia\Origin = 1.2
   ```

6. **Point the client to your server**

   Modify the game's startup to use your local `Dispatch.ini` URL instead of the original Bezerk.com address. This may require a hex editor or hosts file redirect:
   ```
   # /etc/hosts (or C:\Windows\System32\drivers\etc\hosts)
   127.0.0.1  dispatch.bezerk.com
   ```

7. **Run Acrobot**

   ```bash
   python __main__.py
   ```

8. **Test with the game client**

   Launch Acrophobia on Windows. It should:
   - Download `Dispatch.ini` from your server
   - Connect to your registration server and log in
   - Join the game list IRC channel
   - Show your hosted rooms

</Steps>

---

## How to Create a New Game Room

In Acrobot, rooms are stored in the SQLite database. To add a new room:

<Tabs>
  <TabItem label="Via Database">
  ```sql
  INSERT INTO rooms (RoomName, ChannelName, IsClean, SpecialInterest)
  VALUES ('The Lobby', '#Acro_000', 1, 0);
  ```
  </TabItem>
  <TabItem label="Via Config (if supported)">
  Edit `data/config.ini` and add your room configuration per the Acrobot documentation.
  </TabItem>
</Tabs>

- `IsClean = 1` → Family-friendly room
- `IsClean = 0` → Adult Language room (requires adult account flag)
- `SpecialInterest = 1` → Special interest/themed room

---

## How to Register a New Account

Since the original bezerk.com registration server is offline, you must create accounts directly in the Acrobot database:

```sql
INSERT INTO accounts (Username, Password, Adult, BadName, BanStatus)
VALUES ('myusername', 'encrypted_password_here', 1, 0, 0);
```

<Aside type="note">
Passwords in Acrobot are **Fernet encrypted**. You'll need to use Python to generate the encrypted value:

```python
from cryptography.fernet import Fernet
key = # load from your config
f = Fernet(key)
encrypted = f.encrypt(b'mypassword').decode()
print(encrypted)
```
</Aside>

---

## How to Ban a User

```sql
UPDATE accounts SET BanStatus = 1 WHERE Username = 'baduser';
```

---

## How to Use a Hosts File Redirect

The easiest way to redirect the game client to your revival server without patching the game binary is using the system hosts file.

**Windows (`C:\Windows\System32\drivers\etc\hosts`):**
```
127.0.0.1  dispatch.bezerk.com
127.0.0.1  content.bezerk.com
127.0.0.1  reg.bezerk.com
```

**Linux (`/etc/hosts`):**
```
192.168.1.x  dispatch.bezerk.com
192.168.1.x  content.bezerk.com
192.168.1.x  reg.bezerk.com
```
Replace `192.168.1.x` with your revival server's IP.
