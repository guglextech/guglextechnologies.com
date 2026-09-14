---
title: "How ECG prepaid tokens work after you dial *714*22#"
excerpt: "A prepaid token is generated after settlement, not when you press confirm. How Ewale turns a mobile money debit into digits you can type on the meter."
date: "2026-09-09"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG", "Token", "Ewale", "USSD", "Settlement"]
---

People expect the token on the same screen as “confirm.” That is not how prepaid electricity is sold in Ghana.

## The order of events

1. You identify a **meter**.
2. You pay with **mobile money**.
3. The collection **settles**.
4. The vendor path **generates a token** and a unit amount.
5. Ewale **stores** that token on the order and **sends SMS**.

Step 4 cannot run in the middle of step 2. If the PIN is still pending, there is no token. If the debit later reverses, there should be no token either.

## Why USSD often will not show the full token

USSD sessions are short. Token generation can take longer than the session. Ewale is built so the session can end on “prompt sent” or “processing,” and the **SMS** carries the digits.

That is inconvenient. It is also correct. A token printed on a screen that already timed out is a token nobody can recover.

## Units vs cedis

You pay **cedis**. The meter receives **units** (kWh). The conversion uses the tariff in force for that meter class, not a round number you picked. GHS 50 is not “50 units.”

The SMS should include the token. It may also include units. Enter the **token**, not the unit figure, on the keypad.

## Tokens are one-time

A token is spent when a meter accepts it. It cannot be reused on a second meter. It cannot be split. If you lose the SMS after the meter has accepted it, you do not need the digits again — the power is already on the meter.

If you lose the SMS **before** entry, you need a retrieval of the **same** token, not a new purchase.

## Treat tokens like cash

Do not forward the SMS to a group chat “for the house” if you have not yet entered it. Anyone with the digits can load the meter if they reach it first — which is fine for a trusted compound, and a problem if the meter is in a public corridor.

On Ewale, the operational standard is: store the token against the order, show it again for a defined window, then stop. That window is why you should not treat a missing SMS as a reason to pay twice.

## What *714*22# is doing in this chain

The shortcode is the **collection channel**. It is not the token printer. Its job is to identify the meter, collect a confirmed amount, and leave a reference that can be matched to the token when settlement completes.

If you understand that split, delays make sense. If you do not, every delay looks like a lost payment.
