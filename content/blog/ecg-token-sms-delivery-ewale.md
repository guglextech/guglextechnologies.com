---
title: "How ECG token SMS delivery works on Ewale after *714*22#"
excerpt: "The token SMS is the delivery mechanism for prepaid ECG on Ewale. What the message contains, why it can lag, and how to retrieve the same token without paying again."
date: "2026-08-30"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG", "SMS", "Token", "Ewale", "USSD"]
---

For ECG prepaid on Ewale, SMS is not a courtesy. It is how the product reaches you when the USSD session is already gone.

## What the SMS is for

The message should let you:

- Identify the **payment** (amount, meter, reference).
- Copy the **token digits**.
- Optionally see **units**.

If a message has amount but no token, it may be a **payment receipt** sent before generation finished. Wait for a second SMS before assuming failure.

## Why SMS lags

- Settlement is not instant.
- Token generation is a vendor step after settlement.
- The SMS centre can delay under load.
- Your inbox can be full; the message is rejected on the device, not unsent.

Lag of a few minutes is normal. Lag of many hours with a confirmed debit is not — that is retrieval/support.

## Phone number

SMS goes to the number Ewale has for that order, typically the paying MSISDN. If you paid from a wallet on another line, the token may not arrive on the phone in your hand.

Check both SIMs. Check SIM 2. Check a dual-SIM inbox you never open.

## Retrieval vs repurchase

Retrieval: same order, same token, shown again.

Repurchase: new debit, new token.

You want retrieval whenever a debit already exists. Use Ewale web history if you have data, or support with the reference if you do not.

## Security

A token SMS is as good as cash until it is entered. Do not screenshot it onto WhatsApp status. Forward it only to the person at the meter, then delete the forward if the thread is shared.

Ewale’s side of this is to store the token against the order for a window and not log it forever in plaintext operational noise. Your side is not to multiply copies.

## *714*22# will not re-print the whole token on demand

USSD is a bad place to dump 20 digits on a 182-character screen, and sessions expire. Do not expect the shortcode to be your archive. The archive is SMS + order record.

When the lights are out, the working sequence is: pay, wait for SMS, type token, keep SMS as receipt.
