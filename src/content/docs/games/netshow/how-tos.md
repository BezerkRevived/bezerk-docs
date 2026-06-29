---
title: YDKJ Net Show — How-to's
description: Step-by-step guides for setting up YDKJ Net Show revival servers.
---

import { Steps, Aside } from '@astrojs/starlight/components';


---

## How to Set Up a Dispatch Server

<Steps>

1. **Choose your web server** — Apache, Nginx, or a simple Python HTTP server works.

2. **Create your `Dispatch.ini` file** with your server's details:
   ```ini
   [dispatch]
   content_host=192.168.1.x
   content_port=80
   content_path=/jol/content/UpdateScript.ini
   version=1.5.0.0
   ```

3. **Host the file** at the path the game client expects. Use your hosts file to redirect the original domain:
   ```
   127.0.0.1  dispatch.bezerk.com
   ```

4. **Test with curl:**
   ```bash
   curl http://dispatch.bezerk.com/cgi/dispatch.cgi
   ```

</Steps>

---

## How to Set Up a Content Server

<Steps>

1. **Organize your extracted content** into a directory structure matching the `UpdateScript.ini` manifest.

2. **Create `UpdateScript.ini`:**
   ```ini
   Url http://content.bezerk.com/jol/content/
   Version 1.5.0.0
   File questions/pack001.dat
   File audio/commentary.pak
   Launch jol.exe
   ```

3. **Serve the directory:**
   ```bash
   # Quick test:
   python -m http.server 80 --directory ./content/
   
   # Or with Nginx — point root to your content directory
   ```

4. **Redirect the content server domain:**
   ```
   127.0.0.1  content.bezerk.com
   ```

</Steps>

---

## How to Verify Client Connectivity

After setting up both servers, check that the client:

1. Downloads `Dispatch.ini` successfully (check web server access logs)
2. Downloads `UpdateScript.ini` from the content server
3. Downloads listed content files
4. Launches the game executable

Monitor your web server logs in real time:
```bash
tail -f /var/log/nginx/access.log
```

---

## How to Use the Hosts File

**Windows** (`C:\Windows\System32\drivers\etc\hosts`):
```
127.0.0.1  dispatch.bezerk.com
127.0.0.1  content.bezerk.com
```

**Linux** (`/etc/hosts`):
```
127.0.0.1  dispatch.bezerk.com
127.0.0.1  content.bezerk.com
```

<Aside type="tip">
You need to run your text editor as Administrator (Windows) or with `sudo` (Linux) to save changes to the hosts file.
</Aside>

---

## How to Capture Original Traffic (Advanced)

If you have access to the original game running against an original/captured server environment, capturing network traffic with **Wireshark** is the best way to document the full protocol:

```bash
# Capture HTTP traffic on port 80
wireshark -k -f "tcp port 80"
```

Filter for `http` packets and export the captured responses — this gives you the exact format expected by the game client.
