---
title: 'The Notchless Pixel'
description: 'Installing a custom ROM on Xiaomi Mi Mix 2S.'
date: '2018-05-27'
tags: ['Android', 'Hacking']
---

After my OnePlus 3 smashed into the ground – for the third time, I decided it was time for an upgrade. I was waiting for the release of the Pixel 3 but was a bit disappointed by that notch, not to mention the price.

![Spock: It's only logical](./xiaomi-mi-mix-2s-portrait-mode.jpg)

After doing some research on different models I picked a **Xiaomi Mi Mix 2S**. The built quality of this phone is outstanding, it supports wireless charging, has 6GB of RAM, Snapdragon 845, and most importantly: it has no notch.

There _is_ a problem though: it comes with that horrible MIUI. What I don't get it, is why would they ruin such a good piece of hardware? The whole _Android-trying-to-be-iOS_ thing really doesn't work IMHO… so inspired by Linus’ video on [how to turn the Pocophone into a Pixel](https://www.youtube.com/watch?v=BsHtfLh6azw) I deviced to do the same with the Mi Mix 2S.

For this guide you will need:

1. A [Xiaomi Mi Mix 2s](https://amzn.to/2L7VXPl)
2. The [Pixel Experience ROM](https://forum.xda-developers.com/xiaomi-mi-mix-2s/development/rom-pixel-experience-t3872863)
3. The [Google Camera app](https://www.celsoazevedo.com/files/android/google-camera/dev-bsg/)

Got everything you need? Cool! [Let the hacking commence!](https://www.youtube.com/watch?v=CBcAXP1QjEs)!

## 1. Unlocking the Bootloader

1. Enable **Developer Tools** on your device by going to `Settings › About Phone`, and tapping on `MIUI Version` for about 7-10 times. You should see a message saying “You are now a developer”.
1. Enable the **OEM unlocking** option on your device by going to `Settings › Additional Settings › Developer Tools`.
1. [Download the Mi Unlock tool](https://en.miui.com/unlock/download_en.html) and sign in to your [Mi Account](https://global.account.xiaomi.com/pass/register).
1. Shut down your phone and hold `volume down` and `power button` to enter Fastboot Mode.
1. Connect your phone to your PC using a USB cable and click “Unlock”.

Your phone is now unlocked! You will see a “Unlocked” message when turning on the phone. By the way, if you just got the phone you might need to wait 72 hours after the account was created in order to unlock it.

## 2. Installing the custom ROM

Now that you have your bootloader unlocked, you're free to do whatever you want with your device. Head over to XDA and follow the steps to [install the Pixel Experience ROM](https://forum.xda-developers.com/xiaomi-mi-mix-2s/development/rom-pixel-experience-t3872863).

The device should performs exactly the same – if not better, and the clean Android UI fits the hardware like a glove.

## 3. Installing Google’s Camera App

It's no secret that the best thing about the Pixel is the camera, and what plays a big part in making the camera perform so well is the software. Some developers have taken Pixel's Camera app and ported to a wide range of devices.

After some testing, I found out that the apps ones ported by [BSG](https://www.celsoazevedo.com/files/android/google-camera/dev-bsg/) perform great with the Pixel Experience ROM, specifically the `MGC_6.1.021_MI8_Vc` apk.

The image quality is way better than the one you get with the original camera app. It comes out-of-the-box with Portrait Mode, Google Lens, and Night Sight. See the Spock photo above? Shot with Mi Mix 2S on Portrair mode 🤳

---

Hope you enjoy this guide! Truth be told, the main reason I'm posting this here is for _Future Ed’s_ benefit, in case he needs to do it again.
