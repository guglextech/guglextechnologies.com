---
title: "Power App SMS and phone permissions: OTP auto-read, dual-SIM, and what stays private"
excerpt: "Allowing SMS lets PowerApp catch a login OTP. Allowing Phone helps Android pick a SIM. Neither permission loads units. If you will not grant them, *714*22# still vends prepaid."
date: "2026-09-04"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG Power App", "ECG", "Prepaid"]
---

Two Android permissions cause more arguments than the rest of ECG PowerApp combined: SMS and Phone. Families hear “the app wants to read my messages” and uninstall. Other families grant everything to a cloned APK and lose a MoMo PIN. The official store app sits between those reactions.

This is a narrower permissions piece than a general allow-list. It is about those two toggles, OTP, and dual-SIM. This blog does not need either permission and does not process payments. If you refuse both tonight, you can still confirm a meter name and buy a token on **\*226#** or **\*714\*22#**.

## SMS permission is about OTP, not about tokens

PowerApp login sends a one-time password by text. With SMS permission, many Android builds auto-fill the box. Without it, you open Messages and type. The SMS still arrives if the SIM is working. Permission is auto-read, not receive.

People deny SMS, never look in Messages, and declare ECG dead. Look in Messages. If the thread is empty, dial **\*713\*414#** in the short window. If that is empty too, stop. The app is not your only shop.

Token SMS after a purchase is also just SMS. PowerApp does not need SMS permission to **generate** a token. The vending stack texts the number on the transaction. You can read that message with zero extra grants. Do not enable SMS because a token is late. Enabling SMS does not pull a message from a slow SMS centre.

### What SMS permission can expose on a shared phone

Anyone who can unlock the phone can see OTP notifications. A caretaker “helping” can also approve a new device login. Prefer a personal phone for PowerApp. Prefer USSD on the shared Android that lives on the kitchen shelf.

A malicious ECG-named APK with SMS permission can read MoMo one-time codes and reset texts. Official listing only. If you granted SMS to a sideload, revoke, uninstall, change MoMo PIN, and watch the wallet.

iOS users rarely get a true SMS grant in the Android sense. They copy from Messages. That is healthy. It is also slower at night. Plan for it, or plan for USSD.

## Phone permission is about SIMs, not wiretaps

On modern Android, the scary name “Phone” often maps to phone state: call status, device identifiers, **which SIM is active**. PowerApp and the MoMo prompt need to know where to send USSD. Dual-SIM Ghana phones without this grant can request OTP on number A and fire data on number B until the session is nonsense.

If you refuse Phone permission and login works, leave it. If OTP and wallet prompts disagree about the number, allow it on the official app or take the SIM out and use a single-SIM handset for the purchase.

Call-log access, if a build still asks, is harder to justify for buying prepaid. Prefer the least privilege. A build that will not vend without your entire call history is a build to update from Play or to abandon for **\*714\*22#**.

Phone permission does not let ECG listen to your voice calls through the microphone. Microphone would be a separate toggle. Do not grant microphone for a token.

## Dual-SIM recipes that actually work

Put the MoMo wallet SIM and the PowerApp login number on the **same** SIM if you can. That one SIM receives OTP, receives token SMS, and approves PIN.

If they must differ (work number versus wallet), be explicit: login with the SMS-capable number; when MoMo asks, switch default USSD/SIM as your phone requires. Test this in the afternoon.

When it is too fiddly, skip PowerApp. **\*714\*22#** from the wallet SIM is one radio, one PIN, one name check. [ewalepay.com](https://ewalepay.com) on any data SIM still hits the wallet you choose on the prompt. Complexity is optional.

## Permissions versus a missing debit

You paid; you granted SMS afterwards; still no token. The order does not summon the message. Check MoMo, PowerApp history, and the inbox. Call **0302 611 611** with the reference. Do not grant Phone permission as a rain dance.

You have not paid; you granted everything; Buy Credit still dies. You have a data or gateway problem. USSD.

## Comparison with USSD privacy

USSD sessions are not innocent — they are still telco traffic — but they do not leave an app on the phone with SMS read access. For a borrowed handset, **\*226#** or **\*714\*22#** is the privacy-preserving vending method. Finish, delete the SMS if you must, walk away. Do not install PowerApp “for five minutes” on a stranger’s phone.

## FAQ

### If I allow SMS, can ECG read my bank messages?

The official app is supposed to look for its own OTP. Software can be buggy or greedy. Use the official store build. Revoke after login if you are uncomfortable; you can still paste the next OTP by hand.

### Play Protect says the app reads SMS. Is that proof it is fake?

No. Official PowerApp has a reason. Publisher identity is the proof. A second app with the same permission and a joke publisher is fake.

### Should I allow SMS only while logging in?

Yes, if your Android version makes that easy. Log in, revoke, live with manual OTP next time, or live with USSD.

### Does \*713\*414# need SMS permission?

No. It is USSD. It needs the SIM and the timing window.

SMS and Phone are plumbing for login and SIM selection. They are not electricity. Grant them to the real app if they reduce friction on a phone you own. Refuse them on clones. Buy the token on a shortcode when the plumbing debate is longer than the darkness.
