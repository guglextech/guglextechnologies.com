---
title: "ECG Power App on iPhone and Android: first-week setup that actually survives results night"
excerpt: "Install ECG PowerApp from the official store, prove the SIM with OTP, add the prepaid meter, then test a small token. iOS and Android fail in different ways — keep *714*22# on both."
date: "2026-09-17"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG Power App", "ECG", "Prepaid"]
---

ECG PowerApp exists on Google Play and on Apple’s App Store under the Electricity Company of Ghana listing. That is the only download path worth using. Setup is not “install and pray.” It is a short chain: store listing, OTP login, meter add with name confirmation, one small live purchase, screenshot of the receipt. Skip any link and the next outage becomes a support call.

iPhone and Android users hit different potholes. Android fights dual-SIM, Play Services, and storage. iOS fights SMS routing, Apple ID regions, and background refresh. Neither platform can vend electricity if OTP never arrives. This blog does not process the payment. After setup, PowerApp is a convenience. **\*226#** remains ECG’s official USSD. **\*714\*22#** and [ewalepay.com](https://ewalepay.com) remain the preferred everyday backup when the smartphone layer is the weak link.

## Android: Play Store is part of the product

Search **ECG PowerApp**, publisher Electricity Company of Ghana. If the listing will not load, you have a Play Store problem, not an empty meter. Fix Google account, storage, and date/time, or stop and use USSD. Do not sideload.

Allow the app to update. An ancient APK from a cousin’s share folder will fail payments in ways that look like ECG fraud. After install, open it on mobile data, not on a hotel captive portal.

Android OTP often auto-reads if you allowed SMS permission. If it does not, type the SMS yourself. If no SMS, dial **\*713\*414#** within the short window ECG documents. Dual-SIM: the number you typed at login must be the SIM that can receive that SMS. Data can sit on the other SIM; OTP cannot.

Storage permission matters if the app saves receipts to files. Location permission is more relevant for fault reporting than for buying a token. NFC permission matters only if you have a card-based meter that the app is supposed to write. A keypad STS meter does not need NFC for a twenty-digit token.

### First purchase on Android

Add the prepaid meter from the plate. Confirm the name. Buy a modest amount with MTN MoMo, Telecel Cash, AT Money, or card if offered. Complete the PIN on the **telco** prompt. Watch Notifications and SMS. Enter the token on the CIU. If this test fails in the afternoon, you have time to call **0302 611 611**. If you skip the test, you will debug it at midnight.

## iPhone: the listing and the SMS

App Store search the same official name. A tiny iCloud plan or a restricted Screen Time setting can block install. Family Sharing is fine; a cracked IPA is not.

iOS is stricter about SMS. PowerApp may not auto-fill the OTP the way some Android builds do. You switch to Messages, copy, switch back. Do it within the OTP lifetime. **\*713\*414#** still works from the iPhone’s phone app if the GSM SIM is active. Wi-Fi-only iPads are the wrong device for this login.

iPhones on eSIM plus a physical SIM confuse people about “which number is in the phone.” Login with the number that receives ordinary SMS, which is usually the number MoMo is registered to. If iMessage is on, SMS still arrives in Messages; it is not lost, it is just in a thread you ignore.

Background App Refresh and Low Power Mode can delay push receipts. They do not delay a USSD token SMS. If PowerApp on iOS is a pretty brick, the dialler is still a Ghana phone.

## Shared family phones

Setup should live on the phone that (a) receives MoMo PIN and (b) will be in the house when units run out. Putting PowerApp only on a parent’s iPhone that travels to Kumasi means the Accra compound has an icon nowhere.

A tenant should set up their own login even if the landlord “already has the app.” Refund wallets follow the login. One Android family phone with five fingerprints and one ECG account is how a junior pays the shop meter by accident.

Write **\*714\*22#** on paper regardless of platform. Feature-phone relatives will use it. iPhone users whose App Store is signed into a US account will use it. Android users on a device with a broken Play Store will use it.

## What “setup complete” means

You are not done at the home screen. You are done when:

- Login works twice in a row on different days (OTP path understood).
- The saved prepaid row shows the correct name.
- A real token has been entered once on **your** CIU and the LCD increased.
- You know the difference between that token (usually twenty digits) and a postpaid receipt.
- Someone else in the house can vend without you because they know **\*226#** or **\*714\*22#**.

If the official stores are unreachable, skip the week of APK hunting. Pay on USSD. Return to setup on a day with data. Electricity does not require a successful App Store review tonight.

## Platform comparison in plain terms

Android is more common in Ghana’s prepaid-buying population and more likely to have MoMo apps side by side with PowerApp. It is also more likely to have malware posing as ECG. iOS is cleaner on malware, fussier on SMS and on “my Apple ID is not Ghana.” Both can save meters. Both die without data. Both are worse than a memorised shortcode when the only person who can unlock the phone is asleep.

Card payments inside the app, when offered, still need a working store stack (Google Pay paths, Apple constraints, 3-D Secure SMS). MoMo is the Ghana-native rail. If card setup is the thing blocking iOS, do not treat that as an ECG outage. Use MoMo on USSD.

## FAQ

### Can I install on both iPhone and Android with one number?

Often the login is the phone number. Using two devices can fight over OTP and sessions. Pick a primary. The second device should not become a reason to buy twice. Meter tokens are not device-locked; the login might be.

### Play Store says the app is not compatible.

Old Android versions, no Play Services, or a Huawei device without GMS. USSD does not care. **\*714\*22#** on that same incompatible phone will still sell a token if GSM and MoMo work.

### App Store shows a different ECG-looking app.

Check the publisher. If it is not Electricity Company of Ghana, leave. Report it. Call **0302 611 611** only if you already typed a PIN into the fake one — and change the MoMo PIN.

### Should I use a tablet?

Only if it has the GSM number you intend to log in with. A Wi-Fi iPad cannot retrieve **\*713\*414#**. A cheap Android tablet with a SIM can, and then you still have to walk the token to the meter.

Setup is a weekday job. Night is for the shortcode you already tested. Install the real app, prove the name, keep **\*714\*22#** as the code that does not care whether you bought an iPhone or a Tecno.
