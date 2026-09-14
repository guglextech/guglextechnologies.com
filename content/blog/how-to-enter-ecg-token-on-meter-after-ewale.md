---
title: "How to enter an ECG prepaid token on the meter after buying on Ewale"
excerpt: "You have the SMS from *714*22#. Here is how to key the token into a typical ECG prepaid meter, and what error screens actually mean."
date: "2026-09-06"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG", "Token", "Meter", "Ewale"]
---

Buying on Ewale is half the job. The meter only runs after it **accepts** the token. This is the physical half.

## Prepare the digits

Open the SMS from Ewale. The token is a long numeric string, often grouped. You will type it **without spaces**.

Do not type:

- The amount you paid.
- The unit (kWh) figure.
- The meter number.

Only the token.

If you are entering for someone else, read the digits aloud in groups of four and have them repeat. Most “invalid token” cases are a swapped pair of digits.

## On a typical keypad meter

1. Stand at the **meter you paid** — confirm the sticker number matches the Ewale lookup.
2. Wake the keypad (any key, or the blue button, depending on the model).
3. Enter the token from the first digit to the last.
4. Press the **enter** key the meter uses to accept a token (commonly the blue button).
5. Wait for the display. You want a message that units were accepted, not a reject code.

If the backlight dies mid-entry, start again. Partial entry is not saved like a draft.

## Common reject reasons

**Wrong meter.** Token is valid for another device. Paying on Ewale for meter A and typing at meter B will fail or, worse, succeed on B if someone already used it there.

**Already used.** Someone in the house entered it. Check the units on the display before buying another.

**Incomplete token.** USSD/SMS wrapping can split a long token across two messages. Use the full string.

**Old tariff / vendor issues (rare).** If the number is complete, unused, and for this meter, stop repeating. That is a support case with the Ewale **reference**, not a tenth attempt at the keypad.

## After it accepts

The display should show remaining units going **up**. If it stays at zero, the accept message was not an accept — read it again.

You do not need to keep the SMS for the meter anymore. Keep it as a **receipt**.

## If you cannot reach the meter

A token sitting in SMS does not power the house. If the meter is locked in a landlord’s closet, you still need access. Ewale cannot remotely “load” a keypad meter without those digits being typed (unless a specific meter class supports remote vending — most household keypads do not).

Pay when you can stand at the meter, or when someone trusted can.
