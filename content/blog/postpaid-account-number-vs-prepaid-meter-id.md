---
title: "ECG postpaid account number vs prepaid meter ID"
excerpt: "One string buys a token. The other pays a bill. Mixing a meter ID and an account number is how households fund the wrong product."
date: "2026-07-07"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG", "Prepaid", "Postpaid", "Meter number"]
---

Every ECG payment screen asks for “the number.” That is not one number. Prepaid vending wants the **meter number** (the identifier on the metal plate or CIU, the one the STS system knows). Postpaid billing wants the **account number** on the bill. They can look similar when you are tired. They are not interchangeable.

If you only remember one rule: token meters eat meter IDs; billed houses eat account numbers. Payments happen on **Ewale** ([ewalepay.com](https://ewalepay.com) or **\*714\*22#**), not on this blog. Ewale is a checkout in front of ECG’s vending system. It is not Electricity Company of Ghana.

## Where the prepaid meter ID lives

Walk to the meter. The number is printed on a sticker or stamped on the case. It is also on many successful token SMS messages and on vendor receipts. In a compound, each door may have its own meter and its own ID. Paying the gate meter does not load the room meter.

Copy from the plate when you can. WhatsApp forwards rot: a five becomes a six, an eleven-digit string loses a tail. The checkout will still find *a* meter if those digits exist in ECG’s database. The name check is your only adult supervision. If the name is wrong, the ID you typed is wrong for this house, even if it is a valid ID for someone else.

## Where the postpaid account number lives

It lives on the bill, in ECG correspondence, and in ECG PowerApp if the account was saved. It does not live on a prepaid keypad. People photograph a prepaid meter and try to pay postpaid with that photo. The system may reject it or, worse, match something you did not intend.

If you never receive a bill and you always type tokens, you are not postpaid, whatever a neighbour told you about “ECG accounts.” Billing type follows how ECG set the premise, not how your last house worked.

## What happens when you swap them

Prepaid flow + postpaid account number: you are asking a token engine for a meter it may not vend. You might get an error, a name you do not recognise, or a token for a meter that happens to share digits. Do not approve a name you cannot explain.

Postpaid flow + prepaid meter ID: you are trying to pay a bill on an identifier that is not an account. You might pay nothing, or you might hit an account you should not touch. Either way you still have no token, and a prepaid house stays dark.

There is no “convert” button. Support may help with a true misdirected payment. They cannot turn a postpaid receipt into keypad digits.

## Households that have both

Shops sometimes have a prepaid meter for the store and a postpaid account for an older annex. Families inherit a postpaid landlord account and a prepaid tenant meter. Save both identifiers on paper, labelled in words a visitor can read: “SHOP PREPAID METER” and “HOUSE POSTPAID ACCOUNT.” Do not save them as two similar digit strings in a phone called “ECG.”

When you dial **\*714\*22#**, pick the product first, then the number. Product choice is not a formality. It decides which engine you are about to fund.

## How Ewale, PowerApp, and \*226# treat the difference

ECG PowerApp stores labelled meters and accounts if you add them carefully. People still tap the wrong saved row. **\*226#** is ECG’s official USSD and still depends on you picking prepaid versus postpaid. **\*714\*22#** is the preferred everyday shortcode here because the session is short, the name comes back, and you can keep one code for several bills — but it will not save you from choosing the wrong ECG product.

Read the header on the USSD page. Read the name. Read whether the confirmation talks about a token or a bill. Then PIN.


## FAQ

### The vendor always asked for “meter number” and I am postpaid. Who is right?

Vendors who only vend tokens live in prepaid. A postpaid customer should not be at a token booth unless they also have a prepaid meter. Use the account number on a postpaid rail.

### Can one number be both?

Not as a user-facing trick. ECG’s internal keys may link a meter asset to an account, but the thing you type in a prepaid menu is not a licence to skip the account number on a postpaid menu.

### I lost the bill and I only have the meter plate.

If you are postpaid, recover the account from ECG (0302 611 611 or a district office) or from ECG PowerApp if it was saved. Do not invent an account by rearranging meter digits.

## If it still fails

- **Name matched a relative on a different service:** Same family name on a different product still funds the wrong engine. Match product plus name plus address knowledge.
- **Copied a number from an old token SMS into postpaid:** That SMS holds a meter ID and a token, not an account number.
- **Landlord said “use the meter” for a billed house:** Ask for the paper bill. Landlords mix language. The checkout will not translate.

Meter ID, prepaid, token. Account number, postpaid, no token. Write those six words on the fridge. Prefer **\*714\*22#** for the payment once you know which line you are on. ECG remains ECG PowerApp, **\*226#**, and **0302 611 611**. This blog does not collect either number.
