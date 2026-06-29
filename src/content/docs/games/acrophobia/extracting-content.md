---
title: Acrophobia — Extracting Content
description: How to extract game data, assets, and content from the original Acrophobia installer.
---

import { Steps, Aside } from '@astrojs/starlight/components';


This guide covers how to extract the original game content from the Acrophobia client installer for use in a revival server setup.

---

## What Needs to Be Extracted

| Asset | Purpose |
|---|---|
| `Dispatch.ini` | Tells the client where to connect (servers) |
| `UpdateScript.ini` | Client update manifest — lists files to download |
| Game media files | Audio, images used during gameplay |
| Word lists / acronym data | If packaged inside the client |
| Registry settings | Version/origin strings used during login |

---

## Client Versions

| Version | Origin Code | Notes |
|---|---|---|
| 1.0.24.84 and below | (older) | Uses the older registration protocol |
| 1.1.0.114 | `1.1` | First version to use newer CGI endpoint |
| 1.2.0.130 | `1.2` | Most common revival target |
| 1.2.0.131 | `CPC` | CPC-bundled variant |

<Aside type="note">
If the `Path` registry key is not set correctly in Windows, the game will report version `0.0.0.4915348` and origin `err`. Make sure the registry points to your installed game directory.
</Aside>

---

## Extracting the Installer

<Steps>

1. **Obtain the original installer**

   The Acrophobia client installer is available from various abandonware archives. Look for `acro_setup.exe` or similar.

2. **Extract with 7-Zip or similar**

   Many old installers use a self-extracting archive format compatible with 7-Zip:
   ```bash
   7z x acro_setup.exe -o./extracted/
   ```
   Or use an older Windows installer tool like **Universal Extractor**.

3. **Locate `Dispatch.ini`**

   This file is usually in the extracted files or installed to the game directory. It looks like:
   ```ini
   [Dispatch]
   Host=dispatch.bezerk.com
   Port=80
   Path=/cgi/dispatch.cgi
   ```
   For revival, replace the host/path with your own server.

4. **Locate `UpdateScript.ini`**

   The update script lists all downloadable content. In the `<Original File Examples>` folder of BezerkIRCDocs you can find example formats.

5. **Extract media assets**

   Game audio and images are typically stored in a game-specific archive format. Tools like **ResHack** or **Resource Hacker** may help extract embedded resources from the `.exe`.

</Steps>

---

## Registry Keys

The Acrophobia client reads several Windows Registry keys:

| Key Path | Value | Purpose |
|---|---|---|
| `HKLM\SOFTWARE\Berkeley Systems\Acrophobia\Path` | `C:\Program Files\Acrophobia\` | Game installation path |
| `HKLM\SOFTWARE\Berkeley Systems\Acrophobia\Version` | `1.2.0.130` | Client version |
| `HKLM\SOFTWARE\Berkeley Systems\Acrophobia\Origin` | `1.2` | Installer origin code |

If these keys are missing or incorrect, the client will report version `0.0.0.4915348` and origin code `err` in login requests.

**Fix:** Manually create these registry keys with correct values after installation.

---

## `Dispatch.ini` Format

The dispatch file tells the client where to find its content server:

```ini
[connection]
host=your.server.com
port=80
path=/dispatch/acrophobia.ini
```

For a local revival setup:
```ini
[connection]
host=127.0.0.1
port=80
path=/dispatch/acrophobia.ini
```

---

## `UpdateScript.ini` Reference

The update script controls what the client downloads at startup. Key sections:

```ini
; Tell client the update URL base
Url http://your.server.com/content/

; Version check
Version 1.2.0.130

; Download specific files
File acro_data.pak
File sounds.pak

; Launch after update
Launch acrophobia.exe
```

See the [Original File Examples](https://github.com/SecondSight05/BezerkIRCDocs/tree/rewrite/%3COriginal%20File%20Examples%3E) folder in BezerkIRCDocs for real `UpdateScript.ini` and `Dispatch.ini` examples.

---

## Notes on Content Server Setup

Once you have extracted the assets, host them on a simple HTTP server:

```bash
# Python simple server (for testing only)
python -m http.server 80
```

Your directory structure should match what the `UpdateScript.ini` expects:
```
/
├── dispatch/
│   └── acrophobia.ini   (Dispatch.ini)
├── content/
│   ├── UpdateScript.ini
│   ├── acro_data.pak
│   └── ...
```
