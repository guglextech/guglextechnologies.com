---
title: "ECG Power App NFC and card transfer issues: when the phone will not write the credit"
excerpt: "Some ECG meters want a card or NFC write, not a keypad token. If PowerApp fails the transfer after MoMo, stop. Do not buy again. Use ECG help or a channel that matches the meter type."
date: "2026-09-08"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG Power App", "ECG", "Prepaid"]
---

Not every ECG prepaid point eats twenty digits on a kitchen CIU. A subset uses a wallet card, a tap, or a Bluetooth/NFC transfer that ECG PowerApp is supposed to complete after you pay. When that write fails, the app may still show a successful debit. The card still says empty. That gap is where people bleed money.

This article is for the transfer step, not for ordinary keypad tokens. If your meter has a keypad and a confirm key, you are probably in the other family — pay, receive digits, type them. NFC lectures do not apply. This blog does not process payments and cannot write your card from here.

## Two prepaid families, one icon

**Keypad / STS token meters.** Product is a numeric token, usually twenty digits, SMS or on-screen. You are the writer, using fingers.

**Card or app-write meters.** Product is a payload the phone must deliver to a card or to the meter radio. You are holding hardware in a ritual the app invented.

Mixing the rituals is the first error. Buying on **\*714\*22#** produces a token SMS. That SMS may be useless if your device only accepts a card write. Conversely, hammering NFC on a keypad meter does nothing.

Identify the hardware in daylight. Ask the district office or **0302 611 611** which vending method that serial uses if the plate is ambiguous. Do not let a vendor sell you “the usual token” for a card-only point without testing.

## Why NFC fails in Ghana living rooms

Phone case too thick. Card not aligned. NFC disabled in Android settings. iPhone model or iOS version that PowerApp’s transfer stack does not treat kindly. Low battery (NFC is hungry). Another wallet app owning the NFC foreground (Google Wallet, a bank app). Metal table under the card. A cracked antenna.

The app can also fail because ECG’s transfer server never issued a write payload, even though MoMo succeeded. That is a refund/wallet case, not a “tap harder” case.

Try the official steps once or twice: enable NFC, remove the thick case, tap where the app illustrates, hold still. If it still fails, **stop paying**. Photograph the debit, the meter/card ID, and the error string.

### What not to do after a failed write

Do not buy a second credit in PowerApp to “force a retry.” You may now own two payloads and zero successful writes.

Do not type a random reference number on a neighbour’s keypad meter.

Do not install an “NFC fixer” APK.

Do not hand the phone plus PIN to a stranger at a booth unless you watch the entire transfer and you understand whether they are vending a **new** purchase or completing **yours**.

## Where USSD still helps — and where it does not

If your hardware **can** accept a standard token, failed NFC was a wrong path. Recover any existing token from PowerApp history. If there is none and MoMo moved, call ECG. If there is none and MoMo did not move, vend on **\*226#** or **\*714\*22#**, confirm the name, enter the SMS digits on the keypad.

If your hardware **cannot** accept a token, USSD is not magic. **\*714\*22#** will not sprout an NFC radio. You need ECG’s vendor process for that meter type, or a working PowerApp transfer, or a replacement meter conversation. Using Ewale as a preferred everyday backup is still correct for the **keypad** majority of households. For a card-only minority, the preferred backup is a known ECG vendor who can write that card, plus the call centre — not a second anonymous website.

[ewalepay.com](https://ewalepay.com) sits with the token-shaped majority. Do not punish it for a meter family it does not claim to flash.

## Completing a stuck transfer without a second debit

Open Transactions. If a “pending write” or unused credit exists, use the app’s retry/transfer button only. Charge the phone. Try another official PowerApp install on a second device **logged into the same account** if ECG’s docs allow transferring the payload that way — some ecosystems bind the write to the paying login.

If the payload is bound and your phone’s NFC is dead, that is an ECG support ticket. Describe NFC, not “lights off.” Lights off is the symptom. NFC is the broken step.

OTP issues (**\*713\*414#**) are unrelated except that you must be logged in to retry a write. If you cannot log in, do not buy on another number. You will create a payload you cannot see.

## Comparison with keypad life

Keypad users should feel lucky. Their failure modes are SMS delay and typo. Card users have physics. If you are choosing a new installation, ask ECG what the household will vend with at 11pm. A CIU with a keypad is friendlier to **\*714\*22#**, to feature phones, and to relatives in other towns who can text you digits.

## FAQ

### PowerApp says write successful, card still empty.

Retry the read on the meter/card per the device manual once. Then treat it as failed write. Support with videos if you can. Do not repurchase.

### Can I convert an NFC credit into a twenty-digit token?

Only if ECG’s system offers that conversion for your meter. You cannot do it with arithmetic. Ask them.

### Vendor wrote the card after I already paid in the app.

You may have paid twice. Get both receipts. One of those credits should exist. Do not leave the booth without a card that the meter accepts, or without a written acknowledgement.

### Does official \*226# write NFC?

USSD typically issues tokens, not NFC payloads. If **\*226#** gives you digits, you have a keypad-compatible product. If your meter rejects those digits, you used the wrong family.

NFC is a last metre problem. Payment is a first metre problem. Do not buy a second first metre because the last metre failed. Confirm the meter type, confirm the name, and call **0302 611 611** with a reference instead of a second PIN.
