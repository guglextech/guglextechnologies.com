---
title: "*714*22# walkthrough: ECG prepaid, ECG postpaid, and Ghana Water on Ewale"
excerpt: "A single, ordered walkthrough of Ewale’s USSD shortcode for the three utility payments that matter: prepaid tokens, postpaid ECG, and Ghana Water."
date: "2026-08-26"
author: "Guglex Technologies"
category: "Utilities"
tags: ["Ewale", "USSD", "ECG", "Ghana Water"]
---

This is the shortcode as a utility tool. Dial **\*714\*22#**. Other Ewale services (airtime, data, results) live on the same code; this article ignores them except to say: do not confirm an amount on the wrong product.

## 0. Before any of the three

- Wallet has balance.
- You can receive a PIN prompt and SMS on the line you are using.
- You have the **identifier** on paper or on the device: meter sticker or bill.

## 1. ECG prepaid (token)

1. Dial **\*714\*22#**.
2. Open **ECG prepaid**.
3. Enter **meter number**.
4. Confirm **name**. Stop if unknown.
5. Enter **amount in GHS**.
6. Confirm the summary.
7. Approve **mobile money PIN**.
8. Wait for **token SMS**. Do not repurchase.
9. Type the **token** on the matching keypad meter.

Success looks like: debit + token + meter units up.

## 2. ECG postpaid (bill)

1. Dial **\*714\*22#**.
2. Open **ECG postpaid**.
3. Enter **account number** from the bill.
4. Confirm **name** (and outstanding, if shown).
5. Enter **amount**.
6. Confirm. Approve PIN.
7. Keep the **reference**. Expect **no token**.

Success looks like: debit + reference. Reconnection, if you were cut, is still ECG’s process.

## 3. Ghana Water

1. Dial **\*714\*22#**.
2. Open **Ghana Water**.
3. Enter **account number**.
4. Confirm **name** (and balance, if shown).
5. Enter **amount**.
6. Confirm. Approve PIN.
7. Keep the **reference**. Expect the **bill** to lag.

Success looks like: debit + reference. The PDF bill may be stale until posting.

## Shared rules for all three

- One **debit** is one **attempt**. A second dial with the same amount is a second attempt.
- **Pending** means watch the wallet, not the vanished menu.
- **Name on lookup** is the last human check.
- Support needs **reference**, identifier, amount, time — not a story about which number you pressed.

## When to leave USSD

Use Ewale on the web when you must paste a long number, retrieve an old ECG token, or read history. Use **\*714\*22#** when data is gone and the bill or the meter is in front of you.

That is the whole utility product on the shortcode: identify, confirm, collect once, deliver (token or posting), keep the reference.
