---
title: 'macOS upgrade breaking XCode iOS build'
description: 'Try this if your iOS builds are failing on CompileAssetCatalog step.'
date: '2019-08-13'
tags: ['Development']
---

After upgrading to **XCode 10.3** my iOS local builds started to fail on `CompileAssetCatalog`. From what I searched it happens for Native iOS project and React Native ones as well.

Here’s how you fix it:

1. On XCode, clean the build by going to *Product › Clean Build* or by hitting `⌘⇧K` and `⌥⌘⇧K`
2. Go to `~/Library/Developer/Xcode/` and delete the following directories:
    - `iOS Device Support`
    - `DeviredData`
    - `Archives`
3. Restart your macOS
4. Run the build again

Hope that helps!
