---
title: "ECG Power App balance versus the meter LCD: why those numbers disagree"
excerpt: "The app wallet, the last receipt, and the CIU display are three different stories. Trust the LCD for remaining units, and use *714*22# if you need a new token rather than a new number on a screen."
date: "2026-09-06"
author: "Guglex Technologies"
category: "Utilities"
tags: ["ECG Power App", "ECG", "Prepaid"]
---

People open ECG PowerApp to “check remaining lights.” What they often see is a wallet figure, a last purchase amount, or a stale dashboard tile. Then they walk to the CIU and the LCD tells a different story. Both can be true. They are not measuring the same object.

This article is a translation guide. This blog does not process payments and cannot poll your meter. If you need more energy, you buy a token and enter it. If you need to understand a refund, you look at the wallet. If you need to know whether the fridge will die during the match, you look at the glass on the wall.

## The LCD is the live prepaid truth

On a functioning keypad meter, the display shows remaining credit or units as the meter understands them. That number falls as you use power. It rises when a valid token is accepted. It does not rise when PowerApp shows “success” and you have not typed the digits. It does not fall when you refund a wallet.

If the LCD is zero, you are empty, regardless of a GH₵40 tile in the app that is actually last month’s purchase amount or a refund sitting unused.

If the LCD has units and the house is dark, you may have an outage, a tripped breaker, a dead CIU battery, or a different circuit. Buying another token will not fix a feeder. Call **0302 611 611** for a true outage after you have checked the obvious.

## What PowerApp is usually showing

**Last transaction amount.** A receipt of GH₵50 is not 50 units left. Tariff conversion already happened inside vending. You bought a quantity of energy that the token represented. That quantity has been draining since you entered it.

**In-app wallet.** Refunds and leftover app credit. Spendable inside PowerApp, invisible to the CIU until you buy and enter a new token.

**A “balance” tile that never updates.** Some builds fetch poorly. Pull-to-refresh on data. If it still looks fictional, ignore it. The LCD wins.

**Postpaid outstanding.** If you mixed products, the scary balance is a bill, not prepaid units. Paying it will not increment a keypad. See the in-app prepaid-versus-postpaid distinction before you PIN.

### Why the two displays drift even when both work

You entered a token two hours ago; the app’s home tile has not refreshed. You used a lot of power since the last fetch. You bought on **\*714\*22#** or **\*226#**; PowerApp does not always ingest other channels’ vends into a live balance. You have two meters and the app is showing the other one. You are looking at MoMo balance and calling it ECG.

There is also tariff and rounding. Do not expect the cedis you typed to appear as the same cedis on an LCD that might be in units. The meter’s own menu (often a keypad short sequence printed on the CIU) is the official local readout.

## How to reconcile after a purchase

1. Confirm MoMo debit.
2. Confirm token (usually twenty digits) in SMS or PowerApp history.
3. Enter the token.
4. Watch the LCD change.
5. Only then glance at the app for the receipt archive.

If step 4 does nothing, you have a token error or the wrong CIU. The app balance will not rescue you. Retype once. Call ECG with the rejection code. Do not buy a second token to “sync the app with the meter.” Sync is not a product.

If you bought on USSD, do not wait for PowerApp to “catch up” before you enter the SMS token. The app is optional in that story. [ewalepay.com](https://ewalepay.com) the same.

## Landlords, tenants, and argument numbers

A landlord who only looks at PowerApp history will undercount a tenant who vends on **\*714\*22#**. A tenant who only looks at the LCD may have used a token the landlord already paid. The physical display plus dated SMS screenshots settle those fights. A single app tile will not.

Shared meters make “balance” political. If eight rooms drain one LCD, no app can allocate fairly. That is a house rule problem, not an ECG API problem.

## When the LCD itself is lying or dead

Blank display, error codes, CRC loops, or a CIU that does not communicate with a boxed meter: you are in hardware or protocol land. PowerApp cannot display a truth the meter cannot compute. Some NURI CRC cases need ECG’s upgrade path. Keep receipts. Do not spray tokens. Report via the app’s fault tools or the call centre with photos.

A blinking low-credit warning on the CIU is more trustworthy than a cheerful app icon.

## FAQ

### Can PowerApp read my remaining units over the air?

Do not rely on it. Treat any remote balance as a hint. The keypad query and the LCD are the instruments.

### I have wallet money and LCD zero. Which do I use?

Wallet is not units. Buy prepaid from the wallet (or from MoMo) and enter the new token. If Buy Credit is broken, USSD with MoMo; chase the wallet in daylight.

### Why did LCD go up by less than I expected?

Tariff, service charges inside vending, or you entered a smaller unused token than you thought. Read the receipt. A blog cannot quote your tariff band.

### Should I screenshot the LCD after every top-up?

Yes if you share a meter or you dispute vendor entries. Date the photo. It is better evidence than a remembered app tile.

Three numbers, one kitchen. Let the LCD say how much energy is left. Let history say what you paid. Let the wallet say what the app still owes you. Buy only when the first of those is actually empty.
