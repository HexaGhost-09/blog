---
title: What's inside an Android APK?
description: Understand the main files in an APK and how resources, metadata and DEX bytecode fit together.
pubDate: 2026-11-04
tags: [android, apk, reverse-engineering]
---

An Android APK is an installable package. Under the hood, it is a ZIP archive containing an app's compiled code, resources, manifest and signing information.

You can inspect the archive without installing the app. Work only with applications you own or are authorized to examine, and respect their licenses and privacy.

## Common APK contents

| File or folder | Purpose |
| --- | --- |
| `AndroidManifest.xml` | Declares app components, permissions and package metadata |
| `classes.dex` | Dalvik Executable bytecode for the application |
| `resources.arsc` | Compiled resource table |
| `res/` | Images, layouts and other app resources |
| `assets/` | Files packaged for the app to read |
| `lib/` | Native libraries, commonly grouped by CPU architecture |
| `META-INF/` | May contain signing-related metadata |

Not every APK contains every item. Split APKs and app bundles can distribute parts of an application across multiple packages.

## Three useful inspection approaches

### 1. Inspect the archive

A ZIP utility can show the file and directory structure. This is a quick first look and does not require decompilation.

### 2. Decode resources and the manifest

APKTool is commonly used to decode resources and produce a more readable manifest representation. Its output is useful for understanding layouts, resource names and package structure.

### 3. Read the application bytecode

JADX can translate DEX bytecode into Java-like source for analysis. Decompiled output is an approximation: names may be obfuscated, and reconstructed code may not match the original source exactly.

## A sensible workflow

1. Record the APK's filename, size and cryptographic hash.
2. Inspect its archive structure.
3. Review the manifest and declared permissions.
4. Decode resources if needed.
5. Inspect DEX code with a decompiler.
6. Keep notes about findings and tool versions.

## Remember

An APK can contain multiple DEX files, native libraries and resources. A single decompiler view is not a complete representation of the application. Treat unknown APKs as untrusted files and avoid installing them on a primary device just to inspect them.
