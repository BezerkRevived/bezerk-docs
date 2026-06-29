---
title: Acrophobia — FAQ
description: Frequently asked questions about running and playing Acrophobia with the revival server.
---

---

## General

### What is Acrophobia?

Acrophobia was a multiplayer party game by Berkeley Systems (1997–~2001) where players invent acronyms for randomly selected letters, then vote on each other's creations. It ran on Bezerk.com using an IRC-based server infrastructure.

### Can I still play the original game?

The original Bezerk.com servers shut down around 2001. The game client still exists as abandonware, and you can host your own server using **Acrobot**.

### Where do I get the game client?

The original Acrophobia client can be found on abandonware sites. Look for `acro_setup.exe` or versions like `1.2.0.130`.

---

## Setup & Technical

### What IRC server should I use?

[InspIRCd](https://www.inspircd.org/) works best with Acrobot. Other IRC servers may work but have not been as thoroughly tested.

### Why does the game report version `0.0.0.4915348`?

This happens when the Windows Registry key `HKLM\SOFTWARE\Berkeley Systems\Acrophobia\Path` is not set correctly. Make sure it points to your game installation directory.

### Why does the game report origin code `err`?

Same cause as above — the `Path` or `Origin` registry key is missing or wrong. Fix:
```
HKLM\SOFTWARE\Berkeley Systems\Acrophobia\Origin = 1.2
```

### The game crashes after IRC login — why?

InspIRCd has flood protection that can disconnect clients if too much data is sent during the login phase. Check InspIRCd's connection throttle settings and consider increasing the allowed burst rate.

### What ports does the game use?

- **IRC (Game List):** typically `6667`
- **IRC (Game Rooms):** additional ports as configured
- **HTTP (Registration + Content):** `80`

---

## Gameplay

### What are the room types?

- **Clean rooms** — Family-friendly; no adult content
- **Adult Language rooms** — Requires an account with `Adult = 1`
- **Special Interest rooms** — Themed rooms for specific topics

### How does scoring work?

Each round, players who receive votes earn points. The more votes you receive for your acronym, the more points you score. You cannot vote for your own submission.

### What is the "faceoff" round?

At the end of a game, the top players face off in a final round. The original Acrobot notes that the scoreboard for this round was never fully figured out.

### How many players can be in a room?

Room capacity is configurable. The `RI` (Room Item) message includes a capacity field (set to `-1` for unlimited).

---

## Acrobot Specific

### Is Acrobot feature-complete?

As of now, Acrobot "mostly just works" but still has some bugs. The faceoff round scoreboard is a known incomplete feature.

### Where do I report bugs?

Open an issue on the [Acrobot GitHub repository](https://github.com/SecondSight05/Acrobot/issues).

### Can I contribute improvements?

Yes! The repo is open-source. The original author notes: *"If you do want to improve this, go right ahead. You'll definitely do better than I did."*

### What is the `greenroom.py` for?

The greenroom is a waiting-room state that players enter before a game match formally begins. It holds players until enough participants have joined to start a round.
