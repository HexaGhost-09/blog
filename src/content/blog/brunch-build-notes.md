---
title: Notes on building ChromeOS Brunch images
description: A placeholder post showing code blocks, lists and headings. Replace it with your own.
pubDate: 2026-11-06
tags: [chromeos, brunch]
---

This is a sample post so you can see how headings, lists and code render.

## Steps

1. Pick the recovery image that matches your board.
2. Run the Brunch install script.
3. Write the result to a drive.

```bash
sudo bash chromeos-install.sh -src chromeos.bin -dst /dev/sdX
```

Swap the device name for your own drive, and double-check it before running.
