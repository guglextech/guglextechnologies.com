---
title: "ECG token did not arrive after paying on Ewale: what to do"
excerpt: "If *714*22# debited mobile money but no ECG token SMS arrived, do not buy a second token. Check settlement, wait, then recover the token — not a duplicate purchase."
date: "2026-09-10"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG", "Token", "Ewale", "SMS", "Support"]
---

The worst time to panic-buy a second ECG token is the ten minutes after the first debit. Two successful payments are two tokens. One of them may still be in transit.

## Separate three events

1. **USSD session ended.** The menu closed. That is not a payment result.
2. **Mobile money debit.** Money left the wallet. That is a real attempt.
3. **Token issued.** ECG (via the vendor path Ewale uses) generated digits. Those digits go out by **SMS**, and are stored against the order.

You can have (1) without (2). You can have (2) without (3) for a short time. You should not have (2) forever without (3).

## Wait, then look at the wallet

If the PIN prompt succeeded:

- Open mobile money and confirm the **debit** and the **reference**.
- Check **SMS** from Ewale and from your network, including the same inbox as promotions (tokens are easy to miss).
- Wait **several minutes**. Token generation is after settlement, not inside the first USSD screen.

If there is **no debit**, there is no token to wait for. Dial **\*714\*22#** and pay again.

## Do not retry as a new purchase

Retry in payments means: recover the **same** order. A new trip through the menu with the same meter and amount is a **new** order.

If the first debit exists, stop. Use the reference. That is what support needs.

## Where the token actually is

On Ewale, prepaid tokens are treated as the product of the order. They are not supposed to live only in a vanished USSD session. If SMS is delayed, the token should still be retrievable against that payment for a defined window — on the web, or through support.

Have ready:

- Date and approximate time.
- Amount.
- Meter number.
- Mobile money reference.
- The number that received the prompt.

## Meter rejected the token

That is a different problem from “no SMS.” If you have digits and the meter says invalid:

- Re-type slowly. Do not skip the last group.
- Confirm you are at the **same meter** you paid.
- Confirm the token is unused. A token entered on another meter in the house is spent.

## When to contact support

Contact support when there is a **debit** and **no token** after a reasonable wait, or when the token is invalid on the correct meter. Do not open a ticket for a declined PIN. That payment never happened.
