---
title: "ECG token rejected: Invalid, Used, and Old are not the same error"
excerpt: "Invalid, Used, Old, and CRC look like “the token failed”. They are four different stories. Diagnose the word on the meter before you buy another ECG prepaid token."
date: "2026-08-02"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG", "Token", "Invalid", "Used", "Old"]
---

Ghana prepaid meters are blunt. They flash a short English word and go back to sleep. Households treat every rejection as “the token did not work” and immediately vend a second time on a different app. That is how you end up with two paid tokens, one of which is now **Old**, and lights that still depend on the first string you never typed correctly.

**Invalid**, **Used**, and **Old** are not synonyms. **CRC** is a fourth animal, common on some NURI meters. Mixing them wastes money and burns the only unused token you actually owned. This blog does not process payments. Tokens are sold by ECG channels and licensed checkouts such as ECG PowerApp, **\*226#**, vendors, and Ewale (**\*714\*22#** or [ewalepay.com](https://ewalepay.com)).

You may have bought through ECG PowerApp, ECG’s **\*226#**, a vendor, **\*170#**, **\*110#**, or Ewale **\*714\*22#**. The meter does not know. It only answers the STS string. Read the glass. Then act.

## Invalid: the string does not belong to this meter right now

Invalid means the checksum or identity inside the token does not match what this meter will accept. The boring causes are majority: skipped digit, extra digit, letter O instead of zero, spaces, or a token bought for a different meter number. Compounds with two similar eleven-digit numbers are a factory for Invalid. You typed twenty digits perfectly — for the kitchen meter next door.

Less boring: you are looking at a MoMo reference, not the token. References are often shorter or mixed. Less boring still: the SMS was forwarded and someone “helpfully” broke it with hyphens, then a cousin retyped it wrong.

Invalid is **not** proof that ECG failed to vend. Check the original SMS length (twenty digits typical). Check the meter number on the receipt against the plate. Re-type once from the original message, not from memory. If it is still Invalid, you likely paid the wrong meter. That vend cannot be dragged across the compound. Call the checkout’s support and ECG 0302 611 611 with the reference; do not sprinkle a second vend “to test”.

## Used: success, already eaten

Used means this exact token was already accepted. The units are on the meter (or were, if the house has since cooked). A roommate entered it while you were still composing a complaint. You entered it yourself ten minutes ago and forgot because the display flickered. A vendor “tested” it.

Used is the opposite of a repurchase signal. Read remaining units. If they match what you expect, you are done. If units are still near zero, either someone used the power already or you are on the wrong meter looking at a Used that belongs to a different story — walk the compound.

Never buy a twin token because the meter said Used. You would be buying a new vend, which is fine if you truly need more kWh, and disaster if you thought you were “recharging the same purchase”.

## Old: you broke the sequence

STS credit tokens are ordered. If the meter has already accepted a **newer** token, an earlier unused token may show as **Old**. This happens when panic-buying: you vend GH₵20 on **\*714\*22#**, SMS delays, you vend GH₵20 on ECG PowerApp, you enter the second SMS first because it arrived last, then the first SMS becomes Old.

Old tokens are often unusable after that. Do not assume ECG will resurrect them because the money left your wallet. This is why the rule is: **one debit, wait, find the token, enter it, then consider a second vend**. Pending MoMo is not permission to open a second channel.

If you still have an unused newer token, enter that. If both were entered and one was Old, the house should still have the units from the accepted one. Count kWh before you shout.

## CRC is not Invalid

CRC (cyclic redundancy check) on many NURI meters is a known ugly case: the payment can be real and the meter still refuses with CRC. The field trick ECG technicians repeat is: hold **Display** until the screen shows **Relay**, then re-enter the same token. If CRC persists, the meter may need a free **STS upgrade**, not another GH₵10. Call ECG 0302 611 611. Some CLOU meters instead need an **upgrade token** issued by ECG, which is not the same as a credit token from Ewale or PowerApp.

Treating CRC as Invalid-and-rebuy is how people stack unused tokens that still will not load until the meter firmware / key is upgraded.

## A diagnosis order that does not double-pay

1. Photograph the error word and the meter number. 2. Photograph the SMS. 3. Confirm twenty digits and the meter on the receipt. 4. Re-type once. 5. If Used, read units. 6. If Old, look for a newer SMS you already typed. 7. If CRC on NURI, Relay procedure, then ECG upgrade. 8. Only if you have **no** unused token and units are truly empty, buy again — preferably on the same saved path (**\*714\*22#** if that is what you remember) so you do not scatter receipts.

Vendors, PowerApp, and **\*226#** are all legitimate places to have bought the first token. Switching brand because of an error word does not change STS. It only changes where your second debit lands.


## FAQ

### Can ECG move an Invalid token to the correct meter?

Wrong-meter vends are generally not redirectable after the fact. That is why name confirmation before PIN matters. Support may investigate; do not promise yourself a transfer.

### PowerApp says success but the meter says Invalid.

The app succeeded at payment. The keypad job failed. Those are different. Fix typing and meter identity. Do not tap Buy Credit again while the first token sits unused.

### Is Old the same as expired?

Not in the grocery sense. Old here is sequence: a newer token already went in. Time of day is not the main issue.

## If it still fails

- **Three apps, three errors:** Wallet history first. List every token SMS. Enter the newest unused one once.
- **Vendor handwritten token:** Digits from a smudged receipt are Invalid factories. Prefer SMS from ${A}, ${APP}, or ${E}.
- **CRC after Relay:** Stop vending. ECG STS upgrade, 0302 611 611.

Invalid, Used, Old, CRC. Four words, four responses. Only empty units plus no unused token is a reason to pay again. Prefer **\*714\*22#** for the next everyday vend so the name check happens before the PIN — then type what the SMS actually says.
