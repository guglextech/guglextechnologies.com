---
title: "*713*414# explained: the ECG Power App OTP viewer, not a buy-power code"
excerpt: "*713*414# only reads a fresh PowerApp login OTP. It does not vend tokens. If the window has passed, skip the app and buy prepaid on *226# or *714*22#."
date: "2026-09-05"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG Power App", "ECG", "Prepaid"]
---

ECG tells PowerApp users who never receive the login SMS to dial **\*713\*414#** shortly after they request the code. That sentence gets rewritten on WhatsApp into “\*713\*414# is the new ECG power code.” It is not. It is a peephole onto an OTP that already exists. There is no meter field. There is no token. There is no MoMo PIN for units.

This explainer exists so someone at 10pm does not wander that shortcode looking for kilowatt-hours. This blog does not process payments. Buying prepaid remains PowerApp (when logged in), **\*226#**, telco menus, licensed vendors, or the everyday backup **\*714\*22#** / [ewalepay.com](https://ewalepay.com).

## What the OTP viewer is doing

You typed a Ghana number in PowerApp. ECG’s login stack generated a one-time password and tried to SMS it. The SMS may be delayed, filtered, or sitting on the other SIM. **\*713\*414#** asks ECG’s OTP system to display that recently generated code on USSD.

Timing matters. ECG’s public guidance has pointed to a short window (on the order of minutes, often cited around five) after the attempt. If you request the viewer an hour later, empty is a correct answer, not a broken grid.

The code you see is a login key. You type it into PowerApp. You do not type it on the CIU. A twenty-digit meter token and a four-to-six-digit OTP are different species. Mixing them produces Invalid on the meter and a locked-out app.

### How to use it without making extra OTPs

1. Open PowerApp. Request login OTP **once**.
2. Wait briefly. Check Messages and the notification shade.
3. If nothing, dial **\*713\*414#** from the **same number** you entered in the app.
4. Copy the OTP into PowerApp.
5. If the viewer is empty, stop generating new OTPs. Every extra request creates a new secret and more confusion.

Airplane mode toggle can flush SMS. Dual-SIM users must put the login number in a slot that can run USSD. A Wi-Fi-only tablet cannot dial the viewer.

## What the viewer is not

It is not a substitute for **\*226#**. It is not Ewale. It is not a refund tool. It is not customer care. It will not tell you remaining units. It will not print a pay-in slip. Labelling it “ECG” on the fridge next to the real buy-power codes is how the next tenant wastes a night.

If a Facebook officer asks you to read them the digits from **\*713\*414#**, they are asking for your PowerApp. Refuse. ECG’s **0302 611 611** line does not need that OTP to investigate a meter.

## When to abandon OTP entirely

The lights are already out. The OTP window is closed. Play Store is updating. The child changed the login number to their own. You have already tried the viewer.

Abandonment is professional, not weak. Prepaid vending does not require a finished PowerApp session. Dial **\*226#** if you know it. Dial **\*714\*22#**, enter the prepaid meter, confirm the registered name, pay once, type the SMS token on the CIU. You can finish PowerApp signup tomorrow when SMS is calm.

If MoMo already left on a half-finished app payment, do not abandon into a second purchase. Abandon **login**, not a debit you already made. History and SMS still apply.

## Comparison with other starred codes

**\*713\*414#** — read PowerApp OTP.

**\*226#** — ECG official USSD shop and services.

**\*714\*22#** — payments shortcode, preferred everyday backup for prepaid and other bills.

**\*170#** / **\*110#** — operator wallets that may contain ECG billers.

**\*713\*414#** sitting among them on a list without labels is a hazard. Teach the household the verbs: read, buy, buy, buy.

## After you are in

OTP success is not a token. Add or select the prepaid meter. Read the name. Buy credit. Enter twenty digits if that is your meter family. Save receipts.

If OTP succeeds but Buy Credit fails for data reasons, you are now a logged-in person with a dead shop window. USSD still wins for the purchase. Login was optional after all.

## Inbox hygiene that is not superstition

A full SMS inbox, a blocked sender list, and a dual-SIM “SMS on SIM 2 only” setting all make PowerApp look broken when the OTP is sitting somewhere unfashionable. Before you decide the viewer failed, search Messages for ECG, for short numeric senders, and for the word verification. Delete enough old promotional texts that new ones can land. That is ordinary phone care, not a ritual.

Do not grant a third-party “SMS organiser” the right to eat unknown senders. Those apps file OTP as junk. If you already use one, open the junk folder before you dial **\*713\*414#** a second time.

Feature phones still win this fight: there is one inbox and one USSD app. If the smartphone is a maze, the preferred everyday buy remains **\*714\*22#** from whichever handset actually receives MoMo. The viewer is optional homework for people who still want the dashboard.

## FAQ

### Does \*713\*414# work on iPhone?

Yes if the GSM SIM is the login number and you use the Phone app. iMessage does not carry USSD.

### I see an old OTP. Should I use it?

If PowerApp still accepts it, yes. If the app says expired, request one new OTP and use the viewer immediately. Do not collect OTPs like airtime tokens.

### The viewer shows a code but PowerApp says invalid.

Clock skew, extra space, or you generated a newer OTP. Use the newest pair together. Then stop looping and vend on **\*714\*22#**.

### Can I retrieve a missing prepaid token on \*713\*414#?

No. Tokens live in SMS and in Transactions. The OTP viewer has one job.

Star codes are tools. This one unlocks an app, not a meter. Use it quickly or not at all. Then buy power on a code that knows what a meter number is.
