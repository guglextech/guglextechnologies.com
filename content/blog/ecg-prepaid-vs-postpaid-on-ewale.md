---
title: "ECG prepaid vs postpaid on Ewale: which *714*22# flow to use"
excerpt: "Prepaid ECG sells a token. Postpaid ECG pays an outstanding bill. Using the wrong Ewale flow wastes money and does not restore power."
date: "2026-09-12"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG", "Prepaid", "Postpaid", "Ewale", "USSD"]
---

ECG has two consumer products that look similar on a phone menu and are not the same product.

**Prepaid** is a meter that only runs when you load a token. **Postpaid** is a billed account. You pay what you already used. Ewale supports both on **\*714\*22#**. Choosing the wrong one is the most common expensive mistake on the shortcode.

## How to tell which one you have

Look at the meter and the last document ECG gave you.

- A **prepaid** meter has a keypad. You type digits after every purchase. There is usually a 11-digit (or similar) **meter number** on a sticker.
- A **postpaid** account is a **customer/account number** on a bill. There is no token to type. Power stays on until ECG disconnects for non-payment.

If you have a keypad on the meter, you are almost certainly prepaid. If you receive a monthly bill with an outstanding balance and no token history, you are postpaid.

## What Ewale does in each case

**Prepaid on Ewale**

1. Look up the meter.
2. Collect the amount.
3. After settlement, issue a **token** (and units).
4. Deliver that token by SMS.

**Postpaid on Ewale**

1. Look up the account.
2. Show the outstanding balance where available.
3. Collect the amount against that account.
4. There is **no token**. The payment is the product.

You cannot “convert” a postpaid payment into a prepaid token, or the reverse, after the debit.

## Practical consequences

If you pay **postpaid** against a **prepaid** meter number (or the nearest-looking account), you have not bought units. The prepaid meter will still beep and cut.

If you buy a **prepaid token** for a neighbour’s meter because you used the number on their sticker, *their* lights come on.

Always confirm the **name** on the lookup screen. If the name is unfamiliar, hang up.

## Amounts work differently

On prepaid, the amount is what you choose to load now — GHS 20, 50, 100 — converted into units after vendor rates and any applicable charges.

On postpaid, the amount should match (or reduce) an **outstanding balance**. Paying GHS 5 on a GHS 400 bill does not restore a disconnected postpaid service by itself; ECG’s own reconnection rules still apply.

## Use *714*22# with the right menu item

On Ewale, pick the menu line that matches the meter in front of you. Do not pick “ECG” at random. If the menu separates prepaid and postpaid, that split exists because the backends are different.

When in doubt, read the meter: keypad means prepaid token. Bill in the drawer means postpaid account.
