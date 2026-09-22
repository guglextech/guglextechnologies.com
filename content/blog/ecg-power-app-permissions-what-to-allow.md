---
title: "ECG Power App permissions: what to allow, what to refuse, and why the app asks"
excerpt: "SMS and phone permissions help PowerApp read OTP and pick a SIM. Location and NFC are for other jobs. Refuse junk, never sideload, and keep *714*22# if you will not grant the store app anything tonight."
date: "2026-09-15"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG Power App", "ECG", "Prepaid"]
---

Android will interrupt ECG PowerApp with permission dialogs that look like a scam if you have never installed a utility app. Some of those dialogs are legitimate. SMS helps OTP. Phone state helps dual-SIM. NFC helps certain card meters. Camera may help scan or attach a fault photo. None of them should require you to install a second APK from WhatsApp.

Permissions are not payment. Granting SMS does not buy units. Refusing SMS does not empty the meter. This blog does not process payments and does not need your permissions. If you do not want to bargain with Android tonight, prepaid still vends on **\*226#** and on **\*714\*22#** without a single toggle.

## Map each permission to a job

**SMS.** PowerApp login uses a one-time password. Auto-read is convenience. You can refuse auto-read and type the code from the Messages app. If you refuse SMS entirely, you must still be able to **receive** the SMS at OS level — that is a SIM function, not an app permission. Confused users deny SMS, miss the OTP, and conclude ECG is down. Dial **\*713\*414#** to read the OTP if the SMS is shy, then decide whether the app is worth it.

**Phone / call logs / phone state.** On Android this often means “which SIM is active,” not “ECG will listen to your calls.” Dual-SIM handsets need this to send USSD prompts and to bind the login number. If you refuse and OTP never matches, that is a plausible cause. It is not a reason to give Phone permission to a random “ECG token booster.”

**Location.** Buying a twenty-digit token does not need GPS. Fault reporting and some office-locator features do. You can deny location and still vend prepaid. If the app blocks Buy Credit without location, treat that as a bug or a heavy-handed build: screenshot, use USSD, update from the official store later.

**Camera and files.** Useful for receipts, KYC-style photos, or fault pictures. Not required to type a meter number you already know. Do not grant all-files access to a fake ECG app.

**NFC.** Only for meters whose credit is written to a card or via tap, not for ordinary keypad STS meters. If you do not have that hardware, deny NFC and ignore in-app lectures about tapping.

**Notifications.** Helpful for receipt alerts. Optional. SMS still arrives in the inbox.

### What a genuine store listing should not need

Contacts to “find friends who use ECG.” Accessibility services to “auto-enter tokens.” Device admin to “prevent uninstall.” Overlay to “help you tap faster.” Those are malware patterns. Uninstall. Change MoMo PIN if you typed it. Call your telco, not a Facebook electrician.

iOS uses a shorter list: notifications, maybe camera, maybe local network. If an iOS ECG clone wants full contacts, leave.

## Permissions will not fix a dead radio

People toggle every switch to “Allow” because Buy Credit spun. The spinner was data. Permissions do not create 4G. After you have granted SMS and Phone on the official app, further toggling is theatre. Move to **\*226#** or **\*714\*22#**, confirm the meter name, pay once.

Similarly, granting SMS after you already paid does not pull a missing token out of a completed vend. Tokens come from the vending stack. Look at Transactions and the inbox.

## Privacy in a shared compound

A phone with PowerApp SMS permission will display OTPs on screen. Do not leave that phone with a stranger “so they can buy for us.” They can also approve a login and move a refund wallet. Tenants should use their own login. Landlords should not text OTP to caretakers as a habit.

**\*713\*414#** is an OTP viewer, not a purchase code. Anyone who can hold your SIM can dial it during the window. Treat the SIM as the key.

USSD backups do not store an ECG password on the device. That is one reason **\*714\*22#** is the preferred everyday fallback for households that share cheap Androids and will never have a clean permission story.

## After you allow: still confirm the name

Permission hygiene does not replace meter hygiene. The app can have every toggle green and still vend to the wrong number if you saved the neighbour’s plate. Read the registered name on the amount screen. Tokens are usually twenty digits. Do not double-pay because a permission dialog appeared mid-checkout — cancel, check MoMo, then continue once.

If Android killed the app when the dialog appeared, check the wallet before opening Buy Credit again. Permission prompts plus payment prompts in the same minute are how Ghana phones eat a debit and a “nothing happened” memory.

## Comparison with USSD

**\*226#** asks for no Android permission model. **\*714\*22#** the same. [ewalepay.com](https://ewalepay.com) in a browser asks for nothing beyond the site and then a MoMo prompt. PowerApp asks for more because it is trying to be a dashboard: history, faults, sometimes NFC. That extra is real value on a personal phone you control. It is friction on a child’s phone, a shop attendant’s phone, or a device you will not unlock for Play Protect.

Choose the official app when you will live with it. Choose USSD when the permission screen is the night’s antagonist. Call **0302 611 611** about a stuck debit, not about whether to allow Location.

## FAQ

### If I deny SMS, can I still log in?

Yes, if you can read the OTP another way: notification shade, Messages app, or **\*713\*414#**. Auto-read is optional.

### Why does Play Protect warn me?

If you sideloaded, trust the warning. If you installed from the official listing and Protect still flags it, wait, check the publisher, and do not switch to a “clean” APK from Telegram.

### Can ECG see my photos if I allow files?

They can see what you pick in a file picker, and some builds are clumsier than others. Do not grant blanket access if a one-photo picker exists. Fault photos of a broken pole are fine. Your gallery of IDs is not required for prepaid.

### Will refusing NFC stop keypad tokens?

No. Keypad meters eat digits. NFC is a different meter family. If the app insists on NFC for a keypad meter, you are in the wrong in-app product or a confused version — USSD.

Allow what maps to a job you will use. Refuse theatre. The token does not care about GPS. When the dialogs become the product, dial the shortcode and go to the CIU.
