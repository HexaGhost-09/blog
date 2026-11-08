---
title: A practical introduction to Android ADB
description: Set up Android Debug Bridge, verify a device connection and use a few everyday commands.
pubDate: 2026-11-05
tags: [android, adb, tutorials]
---

Android Debug Bridge (ADB) is a command-line tool for communicating with an Android device. It is useful for debugging, installing APKs, collecting logs and managing files.

## Enable USB debugging

1. Open **Settings → About phone**.
2. Find **Build number** and tap it repeatedly until Developer options are enabled. The exact wording varies by manufacturer.
3. Open **Developer options** and enable **USB debugging**.
4. Connect the phone to your computer and approve the debugging prompt on the phone.

Only authorize computers you trust. USB debugging gives an authorized computer powerful access to the device.

## Verify the connection

Run:

```bash
adb devices
```

Your device should appear in the list. The first connection may show an authorization prompt on the phone. If the list is empty, check the cable, USB mode, platform-tools installation and device authorization.

## Useful commands

Show connected devices:

```bash
adb devices
```

Open an interactive device shell:

```bash
adb shell
```

Install an APK:

```bash
adb install app.apk
```

Copy a file from the device to the computer:

```bash
adb pull /sdcard/Download/example.txt .
```

Restart the device:

```bash
adb reboot
```

## Disconnect when finished

When you no longer need debugging, disable USB debugging or revoke authorizations from Developer options. This reduces the chance of an old trusted computer being used unexpectedly.

ADB commands can behave differently across Android versions and manufacturers. Check the output before running commands that modify apps, files or system settings.
