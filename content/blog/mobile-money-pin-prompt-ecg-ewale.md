---
title: "Mobile money PIN prompts when paying ECG on Ewale *714*22#"
excerpt: "The USSD menu is not the payment. The mobile money prompt is. How to approve, what a timeout means, and how to avoid double-paying ECG on Ewale."
date: "2026-09-03"
author: "Guglex Technologies"
category: "Utilities"
tags: ["Mobile Money", "ECG", "Ewale", "USSD"]
---

On Ewale, **\*714\*22#** collects consent and identity. **Mobile money** collects the money. Confusing the two is how people pay twice or think they paid when they did not.

## What you should see

After you confirm meter and amount on Ewale:

1. The USSD session says a prompt is being sent (or equivalent).
2. A **separate** message appears from your network / wallet: amount, merchant, PIN.
3. You enter the PIN **on that prompt**, not back into the Ewale menu.

If you type your PIN into the USSD session because a menu asked for “1 to confirm,” that is not a wallet PIN. Confirmation and PIN are different screens.

## Timeout

Prompts expire. If you wait, talk, or the phone loses signal:

- The debit may **not** have happened.
- Or the debit **did** happen and the USSD session died anyway.

Always open **mobile money history** before starting a new ECG purchase.

## Declined PIN

Wrong PIN, insufficient balance, wallet limits, or a blocked wallet. No debit, no token. Fix the wallet, then dial **\*714\*22#** again. This is a clean retry.

## Duplicate prompts

Do not approve **two** prompts for the same intended token. If a prompt is on screen and you also re-dialled Ewale, you may have two live attempts.

Approve at most one. Cancel or ignore extras. Then check history.

## Which number gets the prompt

The prompt goes to the **MSISDN** Ewale is collecting against — usually the line you dialled with. If you are paying from a wallet on a different SIM, you must use the flow that targets that wallet (where Ewale allows it). Paying with SIM A and expecting a prompt on SIM B is a common miss.

## After approval

Wait for SMS. Do not immediately start a second ECG buy “to be sure.” Sure is the **debit line** in the wallet, then the **token SMS**.

If the prompt succeeded and there is no token after a wait, you have a **settlement/token delivery** problem, not a PIN problem. Take the reference to support. Do not create a second debit.
