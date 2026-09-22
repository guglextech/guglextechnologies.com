---
title: "ECG Power App not working without data: what still vends prepaid"
excerpt: "PowerApp is a data app. When 4G dies in the compound, prepaid still exists on *226# and on *714*22#. Diagnose the radio first so you do not double-pay."
date: "2026-09-18"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG Power App", "ECG", "Prepaid"]
---

ECG PowerApp is not a USSD skin. It needs IP connectivity for login, meter lookup, payment initialisation, and the Transactions list. When the phone shows “no internet,” the icon on the home screen is decoration. The meter on the wall is still in ECG’s vending system. You buy a token through a channel that can speak without a browser.

Households treat “the app is not working” as “ECG is down.” Sometimes ECG **is** under load. More often the compound is on a tired 2G corner, the Wi-Fi router died with the power, and Play Services cannot reach Google. This article separates those failures so you pick a backup once. This site does not debit you. Official ECG USSD is **\*226#**. The everyday keypad backup this blog prefers when the app cannot get data is **\*714\*22#** or [ewalepay.com](https://ewalepay.com) from somewhere that still has a signal.

## What PowerApp silently requires

A working Ghana number for OTP. A radio that can receive SMS. **Data** (mobile or Wi-Fi) for almost every tap after splash. Google Play Services on Android for some payment and notification paths. Enough battery that the phone does not die during MoMo PIN.

If the house has already lost power, Wi-Fi is usually gone too. People then discover that their “unlimited” night bundle is on the SIM that is not the ECG login SIM. Dual-SIM plus no lights is a classic trap.

USSD does not use that bundle. **\*226#** rides the telco signalling channel. **\*714\*22#** does the same. A feature phone with no Play Store can still finish a prepaid purchase if MoMo has balance. That is the point of keeping a shortcode on paper on the fridge.

### A five-minute diagnosis that is not superstition

1. Look at the status bar. No 4G/LTE/Wi-Fi means do not keep pulling PowerApp to refresh.
2. Open a lightweight page or MoMo app. If nothing loads, the problem is radio, not ECG branding.
3. Toggle airplane mode once. Wait for SMS and bars to return.
4. If OTP is the blocker rather than browsing, try **\*713\*414#** quickly. If the OTP viewer is also empty, stop looping login.
5. Dial **\*226#** or **\*714\*22#** from the SIM that holds the MoMo wallet.

If step 5 fails too, you may have a real telco outage. Walk toward the road for signal, or use a second phone. Do not send money to a “vendor” WhatsApp number while you walk.

## Data is not the same as SMS

PowerApp can fail to load while SMS still arrives. That is good news if you already paid: the token may be sitting in the inbox. It is bad news if you keep tapping Buy Credit because the spinner never stops — you might still enqueue a debit when the radio flickers back for two seconds.

Conversely, you can have data and no SMS. Then PowerApp might show a receipt you cannot receive as text. Screenshot it. Twenty-digit tokens are still valid from a screenshot.

Prepaid vending after a USSD PIN uses SMS more than it uses your data bundle. That is why a no-data night is not an automatic vendor-queue night.

## Channel order when the app is mute

**First:** confirm whether MoMo already left. If yes, hunt token, do not hunt a new app.

**Second:** official **\*226#** if you know that menu and the meter is registered there.

**Third:** **\*714\*22#** if you want a short flow that asks for the meter number, shows the registered name, and takes one PIN. Confirm the name. Abort if it is not your house. This is the backup to memorise for household members who will never find the PowerApp wallet tile.

**Fourth:** telco utility menus (**\*170#**, often **\*110#**) if you already live in those screens and you can tell prepaid from postpaid.

**Fifth:** a licensed vendor with cashless MoMo, not a stranger’s personal wallet advertised as “ECG agent.”

[ewalepay.com](https://ewalepay.com) still needs data, so it is a poor rescue when the complaint is “no data.” It is a good rescue when PowerApp specifically is broken but the browser works. Match the tool to the failure.

## Compound-house radio problems

Metal roofing, water tanks, and a meter room at the back of the plot all eat 4G. The CIU is often in the kitchen; the only bar of signal is at the compound gate. Pay at the gate. Enter the token at the CIU. Do not stand in the Faraday cage of the meter room pulling PowerApp.

Night-time congestion on a single mast makes apps look more broken than USSD. Apps retry with HTTPS; USSD either starts a session or it does not. If **\*226#** and **\*714\*22#** both time out, wait rather than launching four payment apps that will all succeed when the mast recovers.

## Do not “fix data” with a fake APK

Telegram files named ECG-PowerApp-offline.apk do not add an offline mode. They add a keylogger. If you cannot download the official app for lack of data, you also cannot safely sideload it. Use USSD. Call **0302 611 611** in daylight if you need ECG to explain a stuck debit — they will not need your APK.

Saving meters in PowerApp on a good-data afternoon still helps the next time the app works. It does not help tonight if tonight has no IP. Write the meter number on paper. That paper plus **\*714\*22#** is a complete checkout for a keypad meter.

## FAQ

### Can PowerApp cache a purchase offline and send it later?

Treat that as unsafe folklore. If the UI is frozen, assume nothing until MoMo and SMS agree. An offline queue that later fires is exactly how double-pays happen.

### My data is on but the app still sits on a white screen.

That can be ECG’s servers, a stale WebView, or a blocked captive portal on hotel Wi-Fi. Switch to mobile data. If it still fails, USSD. Updating the app requires… data and Play Store. Circular. Shortcode.

### Does \*226# need the same login as PowerApp?

It is ECG’s USSD registration, not your Google account. You may need to have used it before for some menus. If **\*226#** is unfamiliar, **\*714\*22#** only needs the meter number and a name you recognise.

### We have power for the phone but the fridge is on a different meter that is empty.

Pay the empty meter. Data on your phone does not load a neighbour circuit. Confirm the plate.

No data is a radio story. Prepaid is a token story. Keep them separate, confirm the name, pay once, type the digits on the CIU.
