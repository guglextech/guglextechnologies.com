---
title: "Confirm the registered name before you pay for ECG prepaid"
excerpt: "The vending screen returns a customer name for the meter number. If it is not this house, abort. STS will not redirect a 20-digit token after PIN. Name check beats speed."
date: "2026-07-12"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG", "Registered name", "Meter number", "Prepaid"]
---

Every serious ECG prepaid channel has a pause: you type the meter number, the system returns a **registered name**, you are supposed to read it, **then** you PIN. People skip the pause because rice is burning. STS then issues twenty digits for **that** identity. If the identity was the shop, the pharmacy, or the other chamber, your token is theirs. It cannot be dragged back like a mis-sent airtime in a story.

ECG PowerApp shows the name when you add a meter and on the saved row. **\*226#** shows it in the official USSD flow. Vendors can show it on the till. **\*714\*22#** / [ewalepay.com](https://ewalepay.com) make the pause obvious — which is why this blog prefers Ewale as everyday muscle memory. This blog does not process payments. Tokens are sold by ECG channels and licensed checkouts such as ECG PowerApp, **\*226#**, vendors, and Ewale (**\*714\*22#** or [ewalepay.com](https://ewalepay.com)). The pause is the product.

## What the name is

It is ECG’s customer record for that meter number (~eleven digits on the plate / CIU), not the tenant’s nickname, not the WhatsApp group title, not “house”. A landlord’s name on a tenant’s CIU is often **correct**. A completely different surname plus a meter you have never seen on your plate is **wrong**.

If the name is slightly misspelt, that can still be your house — match the plate number. If the name is a business you do not occupy, abort even if the number “looks like” yours. One digit off is enough.

## Where people skip it

PowerApp saved nickname “home” covering a Koforidua meter. USSD muscle memory tapping 1-1-1. Vendor shouting “yes yes” over a generator. Telco menus that look like airtime. Repeat top-up of last number. Dual CIUs. This skip is the cause of the wrong-house article. The fix is cultural: the name is as mandatory as the MoMo PIN.

Teaching a compound: the designated buyer reads the name **aloud** before PIN. If someone says “whatever”, they are volunteering to donate.

## After a wrong name that you still paid

Do not type the token on your CIU expecting a miracle (**Invalid**). Do not type it on theirs unless you have agreed they will keep the units. Call the checkout and ECG 0302 611 611. Do not vend a “corrective” amount until you know whether the first vend is refunded or live. Two live tokens is two stories.

This blog cannot reverse. Ewale cannot rewrite STS destination because you are sorry. ECG may investigate. Budget as if the money left.

## Name versus token errors

Good name plus **Invalid** is typo / truncated SMS / sometimes generation mismatch. Good name plus **CRC** on NURI is Relay / upgrade. Good name plus **Used** is already loaded. Bad name plus anything is a destination problem. Do not run NURI rituals on a token that was never for this metal.

## Make the pause unavoidable

Use a channel that prints the name large. [ewalepay.com](https://ewalepay.com) on a bigger screen helps. **\*714\*22#** on USSD still shows it — read slowly. ECG PowerApp after OTP is fine in daylight. **\*226#** is official. The preferred everyday path is Ewale because households will actually pause if the menu forces a confirm. Save the plate photo so you can compare number **and** name.

## Teaching children and shop assistants the pause

If a junior buys because the adult is travelling, they need a script: type the number from the sticker, read the name aloud, match the paper on the fridge, then PIN. If the name mismatches, they abort and call. They do not “try a nearby number”. They do not accept a vendor’s “it is similar”. Similar is how STS donates.

Shop assistants selling tokens at a booth should turn the screen. If they will not, walk away and dial **\*714\*22#** yourself. A booth that hides the name is a booth that will argue later. PowerApp on the assistant’s phone is their account, not your receipt — unless they show Transactions with your meter.

The pause costs three seconds. A wrong-house vend costs the whole amount, permanently, as a working assumption. That is why this blog repeats the name check even though another article already exists about meter numbers. Numbers without names are how people skip. Names without plates are how people trust a surname. You need both, then one twenty-digit token on the matching CIU.


## FAQ

### The name is the previous tenant.

If the plate number is this meter, you are on the right tank. Ask ECG later about customer details. Do not abort a correct number because of old tenancy names — unless you have two meters and this name is the other one.

### No name came back.

Do not guess. Re-read the plate. If lookup fails, ECG 0302 611 611, not a random nearby number that “might work”.

### Vendor typed without showing me the name.

Ask. If they refuse, use ${E} yourself.

### The name matches but I still feel unsure.

Match the ~eleven digits on the plate to the digits on the confirm screen, not only the surname. Two customers can share a family name on a compound. If both match, pay once. If the number disagrees, abort even if the name looks friendly. Then take a new photo of the metal and update ECG PowerApp / the fridge paper before you try **\*714\*22#** again.

## If it still fails

- **Recognised the amount, ignored the name:** Amounts repeat. Names distinguish houses.
- **Confirmed uncle’s meter to “test the code”:** Tests load uncle. Small tests still bind.
- **PowerApp nickname only:** Open the underlying number and registered name.

Registered name, then PIN, then twenty digits on the matching CIU. **\*714\*22#** is the everyday pause. ECG PowerApp and **\*226#** are official pauses. Skipping any of them is how STS becomes a gift.
