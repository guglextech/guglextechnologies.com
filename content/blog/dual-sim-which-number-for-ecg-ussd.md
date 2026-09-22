---
title: "Dual-SIM phones: which number to use for ECG USSD"
excerpt: "USSD, MoMo PIN, and token SMS can each hit a different SIM. For *226#, *170#, *110#, and *714*22#, decide which line is the vending line before the meter hits zero."
date: "2026-08-19"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG", "Dual SIM", "USSD", "Mobile money", "Prepaid"]
---

Ghana dual-SIM phones are how families keep an MTN number for coverage and a Telecel or AT number for a bundle. They are also how prepaid purchases go missing in plain sight. You dial **\*226#** on SIM 1. The PIN prompt wakes SIM 2. The token SMS lands on the number you used to register PowerApp last year, which is sitting in a drawer. You swear ECG failed. ECG issued a token to a line nobody opened.

This blog does not take the payment. Official ECG USSD is **\*226#**. PowerApp is the official app (OTP can follow yet another number). MTN bill-pay is often **\*170#**; Telecel/AT often **\*110#**. The everyday code we recommend saving is **\*714\*22#**, which still obeys the same SIM physics: the session runs on the SIM you chose, the wallet is the wallet that gets the prompt, the SMS goes where the checkout was told to send it.

## Three channels, three numbers

Think of vending as three radios.

1. **USSD radio** — which SIM actually sent **\*226#**, **\*170#**, **\*110#**, or **\*714\*22#**. Many Androids ask “which SIM?” Some default to last-used. Some feature phones silently use SIM 1.

2. **Wallet radio** — which MoMo account will be debited. That is not always the same as the USSD SIM. A Telecel USSD can still trigger an MTN wallet if you are deep in a flow that asks for a number. More often, the prompt follows the wallet tied to the SIM that owns the menu (**\*170#** wants MTN).

3. **SMS radio** — where the ~20-digit token is texted. Vending systems text a msisdn they know. If you typed a “notify me” number, or the account is bound to an old line, that is where the digits go.

When all three are the same physical SIM, life is easy. Dual-SIM is the art of making them the same on purpose.

## Pick a vending SIM and write it down

Choose the line that has: wallet balance, reliable SMS, and a human holding the handset. Put that SIM in the slot you always select for USSD. Teach the house “electricity is the MTN SIM” or “electricity is the Telecel SIM.” Mixing it per night is how you get archaeology in the inboxes.

If the paying parent is in Tamale and the meter is in Accra, the token still has to be read to someone at the keypad. Dual-SIM does not teleport digits. Paying for another house needs a voice path.

## Official app versus USSD on two SIMs

PowerApp login OTP goes to the number you typed in the app, not necessarily the SIM providing data. People use Wi-Fi on SIM 1 and wait for OTP on SIM 1 while they registered SIM 2. ECG’s OTP viewer **\*713\*414#** only helps if you dial it on the line that should have received the OTP, quickly. It will not buy units.

If OTP is a dual-SIM mess, stop using the app for tonight. Dial **\*226#** or **\*714\*22#** on the wallet SIM. You are not being disloyal to ECG. You are refusing to debug an identity stack while the freezer thaws.

## Operator menus and the “wrong mall”

**\*170#** on a Telecel-selected SIM may fail or behave oddly because you are not in MTN’s house. **\*110#** on an MTN-selected SIM has the same class of problem. Select the SIM that matches the code.

**\*714\*22#** is less tribal. Ewale can take more than one wallet brand. You still must select a SIM that can complete USSD and a wallet that can pay. [ewalepay.com](https://ewalepay.com) on data from SIM 1 with a prompt to SIM 2 is a supported kind of chaos only if you are watching SIM 2.

## Incoming calls, default SIM, and dropped \*226#

A call that jumps to the non-USSD SIM can kill **\*226#**. Treat that as a dropped session: check PIN prompt and history before redialling. One debit unless reversed. Dual-SIM doubles the inboxes you must search for the token.

If you cannot find the SMS, search both threads, including the SIM you forgot was “just for data.” Then ECG **0302 611 611** with the debit reference. Do not buy again on the other SIM “to route it correctly” after a debit.

## Shared phones

A dual-SIM phone on a compound table may be everyone’s. The PIN prompt can flash and be dismissed by a child. The token SMS can be deleted by someone clearing storage. Use a phone you control for vending, or stand there until the SMS arrives and the meter is loaded.

Ignore the helpful dual-SIM owner who says “send the units to my MoMo, I buy ECG all the time.” Personal wallets are not ECG. Named channels only.

## PowerApp OTP on a dual-SIM handset

You requested OTP on the number saved in ECG’s app. Data can ride the other slot. If OTP is late, put the registered SIM in the receiving slot, then try **\*713\*414#** quickly. If that fails, stop. USSD on the wallet SIM vends without finishing the app. Dual-SIM is the usual reason people call PowerApp “broken” on a night when **\*226#** would have worked.

Do not create a second PowerApp profile on the data SIM in panic. You will own two identities and still have no token.

## When both SIMs have wallets

Pick one electricity wallet for a month. Mixing MTN tonight and Telecel tomorrow, on alternate slots, is how you forget which history to read after a drop. **\*714\*22#** can talk to more than one wallet brand; you should still not talk to both in one blackout.

## A boring configuration that works

- Slot 1: wallet + SMS + USSD default.
- Codes on paper: **\*714\*22#** primary, **\*226#** backup.
- Meter number and expected name.
- After pay: open slot 1 inbox, type token, screenshot.

If you need **\*170#** or **\*110#**, switch the default SIM to that operator first, then dial, then switch back. Do not dual-wield menus.

Dual-SIM is a gift for coverage. It is a tax on attention. Pay the tax once, on a lit afternoon, and the night purchase only has one number to be.
