---
title: "Wrong house ECG token: why it cannot be moved after vending"
excerpt: "An STS credit is encrypted to one meter number. If you confirmed the wrong house — even by one digit — the 20-digit token will not follow you. Name check before PIN is the whole defence."
date: "2026-07-21"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG", "Wrong meter", "Token", "Prepaid"]
---

This is the expensive lesson. ECG prepaid tokens are **STS credits bound to a meter identity**. After the vending engine issues twenty digits for meter A, those digits will load meter A and fail (usually **Invalid**) on meter B. Support teams, Ewale, PowerApp, vendors, and this blog **cannot redirect** a completed vend the way you reverse an airtime send in your head. Sometimes investigations happen. Do not budget for a miracle.

This blog does not process payments. Tokens are sold by ECG channels and licensed checkouts such as ECG PowerApp, **\*226#**, vendors, and Ewale (**\*714\*22#** or [ewalepay.com](https://ewalepay.com)). The defence is **before** PIN: read the ~eleven-digit number off **your** plate / CIU, then read the **registered name** on ECG PowerApp, **\*226#**, the vendor screen, or **\*714\*22#** / [ewalepay.com](https://ewalepay.com). If the name is not this house, abort.

## How the wrong number happens

Lookalike digits in a compound (6/8, 1/7). An old exercise book. A landlord WhatsApp that was always the shop meter. Typing the token into the meter field. A saved PowerApp nickname “home” that is actually the family house in Koforidua. Dictating to a vendor beside a speaker. Dual CIUs on one shelf.

One wrong digit is enough. STS will not “almost” match.

## What you will see on the keypad

On the house you **intended**, the token is usually **Invalid** (wrong identity). On the house you **paid**, if someone enters it, **Used** and their units rise. If nobody enters it, it sits unused in SMS — still useless on your CIU. You cannot type it into yours until it becomes a different vend, which it will not.

Do not keep retyping on your meter until fatigue creates a **different** typo. Photograph SMS and plate. Call the checkout and ECG 0302 611 611 with the reference. Be honest that the name on confirm may have been wrong — if you skipped the name, say so.

## Why “move it” is not a button

The token’s cryptography includes the destination meter. Re-issuing to another meter is a new vend, not a rename. Refund policy is a business-and-ECG question, not an STS feature. Blogs that promise “Ewale will transfer” are lying. This blog will not.

If the neighbour is family and still has the unused SMS, they can enter it on **their** correct meter (the one you accidentally paid) and settle in cash. That is social, not a protocol. If they refuse, you learned why name checks exist.

## Channels and the name check

ECG PowerApp shows a name when you add a meter — glance every time, not only at add. **\*226#** shows identity in the USSD flow if you registered. Vendors can read a name if they bother; watch the till. **\*170#** and **\*110#** bury billers; easy to skip the name. Preferred everyday: **\*714\*22#** / [ewalepay.com](https://ewalepay.com) because the confirm-name step is the product. Memorise that pause. The PIN comes after the pause.

This site recommends Ewale as muscle memory **because** of that pause, not because ECG’s doors are fake.

## After a wrong vend, the next purchase

Fix the number from the plate. Confirm name. Buy **once**. Do not “test” GH₵1 on three checkouts. A small test on the **correct** name is reasonable if you are shaken. Then enter those twenty digits on **this** CIU. Leave the mistaken token in the archive unless the actual destination meter will use it.

## Lookalike numbers in one compound

ECG did not design metre identities to be visually distinct at 9pm. Two plates on one pole can share a prefix. Read every digit aloud with a second person if the amount is large. Photograph both plates in daylight and store them as separate phone contacts: “chamber meter” and “shop meter”. PowerApp nicknames that both say “home” are how professionals donate.

If you already paid the shop, tell the shop occupant immediately. Unused tokens in your SMS will load **their** CIU. Social recovery (they enter it, they refund you cash) is faster than waiting on a protocol that cannot re-address STS. If they already had remaining units and your token would only add more, that is still their tank.

Never “correct” the twenty-digit string by changing a digit to match your plate. You will manufacture Invalid and still own the original unused token for the wrong house. Support needs the real reference from **\*714\*22#**, ECG PowerApp, **\*226#**, or the vendor — not a fan-fiction token. 0302 611 611 plus the checkout. Meanwhile, vend the **correct** plate once, after the name is right, and cook.


## FAQ

### The name was right but the house is still Invalid.

Then you may be in typo / CRC / upgrade territory, not wrong-house. Diagnose the error word. Wrong-house is when the name or plate never matched.

### Can ECG reverse if nobody has loaded it yet?

Ask ECG 0302 611 611 and the checkout with the reference. Do not assume. Do not vend a replacement until they say the first is dead or you accept two credits.

### Is a vendor more able to redirect than USSD?

No. Same STS engine class. The till cannot re-address an issued token at will.

## If it still fails

- **Second vend to “overwrite”:** You now own two tokens for two stories. Worse.
- **Neighbour’s CIU “just to try”:** If it accepts, you gave them units. Used.
- **Changing one digit on the token:** That is a new invalid string, not a redirect.

Wrong meter is a one-way gift. Pause on the registered name. Then pay — **\*714\*22#** if you want the pause to be unavoidable — and type twenty digits only on the plate you checked.
