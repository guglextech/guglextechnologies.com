---
title: "What pending means for ECG and Ghana Water payments on Ewale"
excerpt: "Pending is not paid and not failed. How to read a pending *714*22# utility payment so you neither retry too early nor wait forever."
date: "2026-09-01"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG", "Ghana Water", "Ewale", "USSD", "Pending"]
---

Utility USSD flows have a state people hate: **pending**. It is the honest state. Treating it as success or failure is how double charges and false support tickets start.

## What pending usually is

After you confirm on **\*714\*22#**:

- Ewale has created an **attempt** with a unique reference.
- The **mobile money prompt** may be open, or the wallet has accepted the PIN and has not yet sent a final callback.
- For ECG prepaid, the **token does not exist yet**.

Pending means “do not spend this as paid, do not start a twin attempt.”

## How long to wait

Minutes, not hours, for a **wallet** final status — approved or declined. If the prompt is still on the phone, finish it or let it expire, then check history.

Hours can still apply **after success** for Ghana Water’s **bill display**. That is a different pending: collection succeeded, utility ledger not yet posted. Do not confuse them.

## What to do

1. Look at the **phone prompt**. Approve or cancel deliberately.
2. Look at **mobile money**. Completed debit = treat as paid-on-Ewale side and wait for token (ECG) or posting (water).
3. No debit after the prompt is gone = safe to start a **new** attempt.
4. Debit present, no token (ECG) after a wait = **support**, same reference.

## What not to do

- Do not dial *714*22# and pay the same meter “because it still says pending.”
- Do not assume USSD “session ended” means declined.
- Do not assume a Ghana Water bill is pending collection when the wallet already shows completed.

## Why Ewale uses pending at all

Mobile money is asynchronous. ECG tokens are asynchronous. Ghana Water posting is asynchronous. The only honest UI is a state that survives a dead USSD session.

Your job as the payer is to follow the **wallet** and the **SMS**, not the last line you remember from a menu that already closed.
