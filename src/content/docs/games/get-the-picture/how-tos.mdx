---
title: Get The Picture — How-to's
description: Step-by-step guides for setting up Get The Picture revival servers.
---

import { Steps, Aside } from '@astrojs/starlight/components';


---

## How to Set Up the Registration Server

Since Get The Picture uses the same registration format as Cosmic Consensus, you can share a registration server implementation between both games (different CGI path only).

<Steps>

1. **Implement `/gtp/validate.cgi`**

   ```python
   #!/usr/bin/env python3
   import os, sys
   from urllib.parse import parse_qs

   content_length = int(os.environ.get('CONTENT_LENGTH', 0))
   body = sys.stdin.read(content_length)
   params = parse_qs(body)

   username = params.get('player_name', [''])[0]
   password = params.get('password', [''])[0]

   # TODO: Check credentials against your database
   # For testing, accept all logins:
   print("Content-Type: text/plain\n")
   print(f"player_name={username}&version=1.0.0.26&platform_code=W&player_id=1&playersession_id=1000&adult=1&result=1")
   ```

2. **Deploy with Apache or Nginx** with CGI support enabled.

3. **Test with curl:**
   ```bash
   curl -X POST http://127.0.0.1/gtp/validate.cgi \
     -d "player_name=test&password=test&origin_code=M1&version=1.0.0.26&platform_code=W"
   ```

</Steps>

---

## How to Set Up Hosts Redirect

Redirect the game client to your local server without patching:

**Windows `hosts` file:**
```
127.0.0.1  dispatch.bezerk.com
127.0.0.1  content.bezerk.com
```

**Linux `/etc/hosts`:**
```
192.168.1.x  dispatch.bezerk.com
192.168.1.x  content.bezerk.com
```

---

## How to Serve Content

Serve the extracted game files from a basic HTTP server:

```bash
# Quick test server (Python)
python -m http.server 80 --directory ./content/
```

For production, use Nginx:
```nginx
server {
    listen 80;
    server_name content.bezerk.com;
    root /var/www/bezerk/gtp;
    
    location /gtp/validate.cgi {
        include fastcgi_params;
        fastcgi_pass 127.0.0.1:9000;
    }
    
    location /gtp/content/ {
        autoindex on;
    }
}
```

---

<Aside type="note">
Get The Picture game room bot development has not yet started. Contributions are welcome — check the [BezerkIRCDocs](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite) protocol documentation to understand what needs to be implemented.
</Aside>
