---
title: Preparing for a ChromeOS Brunch installation
description: A practical pre-installation checklist for checking compatibility, preparing media and protecting your data.
pubDate: 2026-11-06
tags: [chromeos, brunch, linux]
---

A ChromeOS Brunch installation is easier to troubleshoot when the preparation is done carefully. Before changing partitions or writing an image, confirm that the target hardware and recovery image are compatible.

## 1. Check compatibility first

Read the Brunch project documentation and confirm that your device's CPU architecture, firmware and hardware are supported by the release you intend to use. Do not assume that an image made for one device will work on another.

## 2. Back up important files

An installation can overwrite partitions or make an existing operating system inaccessible. Back up personal files to a separate drive or trusted storage before continuing.

## 3. Prepare the installation media

Use a reliable USB drive and verify the image before writing it. Be especially careful when selecting the destination disk: writing to the wrong device can destroy its data.

## 4. Keep recovery options available

Before making changes, have a way to restore the original operating system. Keep the device's firmware or recovery instructions nearby and make sure you know how to access its boot menu.

## Troubleshooting notes

- If the USB drive does not appear, check the firmware boot order and recreate the media.
- If startup fails, verify the image and hardware compatibility before repeating the installation.
- If a command refers to a disk such as `/dev/sdX`, identify the actual target disk first. Never copy the example device name blindly.

## Final checklist

- [ ] Hardware compatibility checked against current project documentation
- [ ] Important files backed up
- [ ] Correct image downloaded and verified
- [ ] Target disk identified carefully
- [ ] Recovery path prepared

Treat this as a preparation checklist, not a universal installation recipe. Exact steps depend on the device and Brunch release.
