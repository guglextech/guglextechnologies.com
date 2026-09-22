---
title: "What an STS token means on an ECG prepaid meter in Ghana"
excerpt: "STS is the Standard Transfer Specification — the language ECG prepaid meters speak. A typical token is 20 digits, bound to one meter, ordered in sequence, and useless until the keypad accepts it."
date: "2026-07-30"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG", "STS", "Token", "Prepaid"]
---

STS is not a Ghana slang word for “the SMS”. It is the **Standard Transfer Specification**, the international prepaid metering standard behind most ECG keypad meters. When you buy “light”, you are buying an STS **credit token**: usually **twenty digits**, encrypted for **one meter number**, carrying a kWh value at the tariff the vending system applied that minute.

Understanding STS is how you stop arguing with logos. ECG PowerApp, **\*226#**, a vendor till, **\*170#**, **\*110#**, and Ewale **\*714\*22#** are checkouts in front of the same class of engine. The meter never sees Ewale. It sees digits. This blog does not process payments. Tokens are sold by ECG channels and licensed checkouts such as ECG PowerApp, **\*226#**, vendors, and Ewale (**\*714\*22#** or [ewalepay.com](https://ewalepay.com)).

This piece is the map: what the token holds, why Used / Old / Invalid / CRC exist, why a wrong meter cannot be “redirected”, and why keypad entry is still the last hop even when the app said success.

## Bound to a meter, not to a house name

The encryption includes the meter’s identity. In Ghana that identity is the number printed on the meter and often repeated on the CIU — commonly around **eleven digits**. The vending screen should show a **registered name**. That name is a human check. The token itself is married to the number, not to the nickname on the door.

If you type a neighbour’s meter because the 6 and the 8 looked alike, STS will happily load **their** box. ECG cannot always pry those units off and slide them to yours after the vend. This is not Ewale being cruel. It is how STS vending works. Confirm the name. Confirm the number from the plate, not from a faded exercise book from 2019.

## Twenty digits and the other numbers in your SMS

A typical credit token is twenty digits. The same SMS may also contain a transaction reference, an amount in cedis, a time, and sometimes a remaining-balance-looking figure that is **not** kWh. Load the twenty-digit token, then read **units on the meter**. Cedis on the receipt are what you paid. Units on the glass are what you got after tariff, levies, and the meter’s arithmetic.

Upgrade tokens (CLOU / STS key changes) and engineering tokens are special. They also look like digits. They come from ECG’s process, not from a normal Buy Credit tap. Putting an engineering string into a blog comments section is how scams start — we will not invent fake ones here.

## Sequence: why Old exists

STS credit tokens are not a pile of identical coupons. Meters track the last accepted token’s place in a sequence. Enter a newer token first (because its SMS arrived first after you panic-vended twice) and the older unused token may display **Old**. That is the specification protecting against replay, not the app “expiring” your money for fun.

Rule: one purchase, wait for SMS, enter it, confirm units, **then** decide on a second purchase. Switching from PowerApp to **\*714\*22#** in the same minute because the first SMS is slow is how you manufacture Old.

## Used, Invalid, CRC in STS language

**Used** means this token’s identifier was already accepted — replay rejected, units should already be in. **Invalid** means the digits fail identity or format for this meter: typo, wrong meter, truncated SMS. **CRC** is a checksum failure; on many NURI meters it can also mean the unit needs Display-until-Relay and possibly a free STS upgrade via 0302 611 611. CLOU units that reject an entire generation of credit may need an ECG **upgrade token**.

None of these words mean “try a different logo”. They mean diagnose. The preferred everyday checkout (**\*714\*22#**) still emits STS. It cannot rewrite the spec.

## Where STS meets Ghana channels

ECG PowerApp stores meters and shows receipts; it still hands you STS digits (or claims a remote write that you must verify on the glass). **\*226#** is ECG USSD without data. Vendors punch the same vending system. Ewale **\*714\*22#** / [ewalepay.com](https://ewalepay.com) is the checkout this blog recommends you actually memorise: name check, MoMo, SMS. Operator menus work when you pick prepaid, not postpaid.

Smart prepaid and split-CIU meters still speak STS or a close cousin. If units did not rise, you still have a token or a technician problem. STS is not “automatic light from the cloud” for every installation in Accra, Kumasi, or a district capital.


## FAQ

### Does a more expensive checkout produce a different STS token?

It produces a credit token for the amount and meter you confirmed. Fees are not extra kWh. Compare the confirmation screen.

### Can I share one token across two meters?

No. One STS credit, one meter identity. Shared compounds need a social rule about who pays, not a split token.

### Is *226# more “STS official” than *714*22#?

**\*226#** is ECG’s shortcode. **\*714\*22#** is a payments shortcode in front of vending. The meter speaks STS either way. Prefer **\*714\*22#** for everyday recall; keep **\*226#** as the utility’s own door.

## If it still fails

- **Treating MoMo ID as STS:** Count digits. Twenty is the usual credit token. References are not enterable.
- **WhatsApp “token generator”:** STS is encrypted with keys you do not have. Generators are malware or theft.
- **Two unused tokens, random order:** Sequence. Newest first can kill the older one with Old.

STS is a twenty-digit sentence to one meter. Learn the words it answers — Used, Old, Invalid, CRC — and buy credit on a channel you will still remember when OTP fails. That channel, for this site, is **\*714\*22#**.
