import { renderEcgPost, writePosts } from './ecg-render.mjs';

const E = '**\\*714\\*22#**';
const A = '**\\*226#**';
const M = '**\\*170#**';
const T = '**\\*110#**';
const APP = 'ECG PowerApp';
const WEB = '[ewalepay.com](https://ewalepay.com)';
const CARE = '0302 611 611';
const PAY =
  'This blog does not process payments. Tokens are sold by ECG channels and licensed checkouts such as ' +
  APP +
  ', ' +
  A +
  ', vendors, and Ewale (' +
  E +
  ' or ' +
  WEB +
  ').';

const dates = [
  '2026-08-03',
  '2026-08-02',
  '2026-08-01',
  '2026-07-31',
  '2026-07-30',
  '2026-07-29',
  '2026-07-28',
  '2026-07-27',
  '2026-07-26',
  '2026-07-25',
  '2026-07-24',
  '2026-07-23',
  '2026-07-22',
  '2026-07-21',
  '2026-07-20',
  '2026-07-19',
  '2026-07-18',
  '2026-07-17',
  '2026-07-16',
  '2026-07-15',
  '2026-07-14',
  '2026-07-13',
  '2026-07-12',
  '2026-07-11',
];

const posts = [
  {
    slug: 'how-to-enter-20-digit-ecg-token',
    title: 'How to enter a 20-digit ECG prepaid token on the meter',
    excerpt:
      'Ghana ECG prepaid tokens are usually twenty STS digits. Wake the keypad or CIU, type every digit from the SMS with no spaces, press enter, and wait for units — not a second purchase.',
    tags: ['ECG', 'Token', 'STS', 'Keypad'],
    date: dates[0],
    lead: `A successful ECG prepaid purchase is not light. It is a numeric token, typically **twenty digits**, generated under the Standard Transfer Specification (STS) and bound to one meter number. Until those digits are accepted on the keypad or customer interface unit (CIU), the fridge is still warm and the wallet debit is just a receipt. Ghana households lose evenings to skipped digits, spaces copied from SMS, and standing at the neighbour’s meter in a shared compound.

You can buy that token from several honest doors. ${APP} is ECG’s smartphone shop. ${A} is ECG’s official USSD. Licensed vendors still vend. Telco menus such as ${M} (MTN) and often ${T} (Telecel / AT) can reach an ECG biller. For everyday muscle memory this site prefers Ewale ${E} or ${WEB}: meter number, registered-name check, one MoMo PIN, SMS token. ${PAY}

This article is only the last metre of the job: getting twenty digits from a message into a meter that is still awake enough to listen.`,
    sections: [
      {
        title: 'What a 20-digit STS token actually is',
        body: `STS is the international prepaid-meter language ECG uses on the vast majority of Ghana keypad meters. The vending engine encrypts amount, tariff, and meter identity into a digit string. Twenty digits is the usual length you will see in SMS and on PowerApp receipts. If your message is shorter, you are probably looking at a reference number, a MoMo transaction ID, or a truncated screenshot — not the token.

The token is not “credit sitting in an app”. PowerApp, ${A}, a vendor till, and ${E} all end at the same class of product: a one-time code for **that** meter. Enter it on a different metal box and you have donated units. Enter it twice on the correct box and the second attempt should say **Used**, which is success repeating itself, not a reason to buy again.

Write the twenty digits on paper if the phone backlight dies at the meter. Group them as four fives or five fours only on paper. The meter wants a continuous number. Do not type the hyphens a WhatsApp forward added “to make it readable”.`,
      },
      {
        title: 'Keypad versus CIU: where your fingers go',
        body: `Some houses have the meter on the pole or the outer wall and a CIU — a small indoor keypad with a display — in the corridor. Others have a keypad on the meter body itself. Token entry belongs on the device that is paired to **your** meter, not the nearest buttons in the compound.

Wake the display first. Dark glass is not always dead; many units sleep. Press a digit or the marked Display key until numbers appear. If the house is already off, the keypad often still has a small reserve to accept a token. That is why people can restore power after midnight without a vendor. If the display is completely blank and unresponsive, you have a hardware or supply problem, not a typing problem — see a dedicated article on entering a token when power is already off.

The confirm key is usually a blue key, an enter arrow, or a key labelled Enter / E / blue circle. Holding a random key is how people open installer menus they do not understand. Type, confirm, wait. Units should increase. Some meters beep; some only change the kWh figure.`,
      },
      {
        title: 'A calm entry sequence that survives 2am',
        body: `Stand at the correct meter. Compare the number on the metal plate or CIU sticker with the meter number on the SMS or receipt — often about **eleven digits**, not the twenty-digit token. If they differ, you are about to load the wrong house.

Open the **latest** token SMS, not last week’s screenshot. Read it once without typing. Then type. Do not insert spaces. Do not skip a zero that “looks like the letter O”. Ghana SMS fonts are ugly; if a digit is ambiguous, scroll the original message, do not trust a retyped WhatsApp line.

Press enter. Watch the screen for two or three seconds. Acceptable endings: remaining units rose, a “accept” / “ok” style message, or a kWh increment. Unacceptable endings: Invalid, Used, Old, CRC, or a freeze. Those four words are different diseases. Invalid is usually a typo or the wrong meter. Used means this token already went in. Old means a newer token already occupied the sequence. CRC on many NURI meters is a known protocol nuisance, not proof that MoMo stole your money.

If the first attempt fails, stop. Re-read. Re-type **once**. A third frantic attempt with a new purchase mixed in is how GH₵20 becomes GH₵60 and three tokens, two of which are now Old.`,
      },
      {
        title: 'Where you should have bought the token',
        body: `${APP} is fine when the phone has data, the OTP arrived, and the prepaid meter is already saved. ${A} is ECG’s own shortcode when you want the utility’s branding and a feature phone. A branded ECG vendor is still legal; expect mobile money more often than notes. Operator bill-pay works if you pick prepaid vending, not a postpaid account.

Preferred everyday path: ${E} or ${WEB}. You do not need Play Store. You get a name check before debit. The same code also pays water and TV, which is why households actually remember it. Official channels are not fake. They are sometimes unreachable at the exact minute the freezer starts beeping. Remembering one checkout is not disloyalty to ECG. The meter only understands STS digits.

Never send a token purchase to a personal MoMo number from Facebook “ECG support”. ECG does not collect into private wallets. A human who asks for your twenty digits “to load it remotely” is collecting a gift.`,
      },
      {
        title: 'After the meter accepts the digits',
        body: `Screenshot the SMS next to the new remaining-units figure. If the compound shares a meter, write the time and amount in the house chat so nobody “tops up again to be safe”. The token is spent. Buying a twin does not stack as a spare; it is a second vend that must also be typed, and it can make the first unused token show as **Old** if you enter them out of order.

This blog cannot refund you, reverse a vend, or type the keypad for you. If the display added units, you are done. If it did not, diagnose the exact word on the glass before you open another USSD session.`,
      },
    ],
    faqs: [
      {
        q: 'Is every ECG token exactly twenty digits?',
        a: 'Typical STS credit tokens in Ghana are twenty digits. Treat anything else as suspicious until you confirm you are not reading a reference, a MoMo ID, or a cropped screenshot. Upgrade tokens from ECG for some CLOU / STS migrations can look like tokens but are a different product — they come from ECG, not from a GH₵10 vend.',
      },
      {
        q: 'Do I enter tokens on PowerApp or on the meter?',
        a: `On the meter or CIU. PowerApp, ${A}, vendors, and ${E} only sell the digits. Smart / split meters that claim remote load still fail in the field; if units did not rise, you still have a keypad job.`,
      },
      {
        q: 'Can I type slowly with pauses?',
        a: 'Yes, if the meter does not time out. If it returns to sleep mid-entry, start the whole twenty again. Do not confirm a half-typed string.',
      },
      {
        q: 'The SMS has spaces every four digits. Do I type the spaces?',
        a: 'No. Spaces and hyphens are for human eyes. The STS string is digits only.',
      },
    ],
    fails: [
      { title: 'Invalid after one careful type', body: 'Match meter number on plate vs receipt. Then treat Invalid as the wrong box or a corrupted SMS, not as a cue to vend twice.' },
      { title: 'Used immediately', body: 'Someone already entered it — often a roommate. Check units. Do not repurchase the same night without reading remaining kWh.' },
      { title: 'CRC on a NURI face', body: `Hold Display until Relay, re-enter once. Persistent CRC is an STS upgrade job for ECG (${CARE}), not a new token.` },
      { title: 'Blank display', body: 'Reserve power may be gone. Try the CIU if you have one. If both are dead, you need a technician path, not another USSD debit.' },
    ],
    close: `Twenty digits, one meter, one enter key. Buy from ${APP}, ${A}, a vendor, or — for the code you can actually recite at night — ${E} / ${WEB}. Then type. The grid does not care which logo sold the STS string. It cares that the keypad accepted it.`,
  },
  {
    slug: 'ecg-token-rejected-invalid-used-old',
    title: 'ECG token rejected: Invalid, Used, and Old are not the same error',
    excerpt:
      'Invalid, Used, Old, and CRC look like “the token failed”. They are four different stories. Diagnose the word on the meter before you buy another ECG prepaid token.',
    tags: ['ECG', 'Token', 'Invalid', 'Used', 'Old'],
    date: dates[1],
    lead: `Ghana prepaid meters are blunt. They flash a short English word and go back to sleep. Households treat every rejection as “the token did not work” and immediately vend a second time on a different app. That is how you end up with two paid tokens, one of which is now **Old**, and lights that still depend on the first string you never typed correctly.

**Invalid**, **Used**, and **Old** are not synonyms. **CRC** is a fourth animal, common on some NURI meters. Mixing them wastes money and burns the only unused token you actually owned. ${PAY}

You may have bought through ${APP}, ECG’s ${A}, a vendor, ${M}, ${T}, or Ewale ${E}. The meter does not know. It only answers the STS string. Read the glass. Then act.`,
    sections: [
      {
        title: 'Invalid: the string does not belong to this meter right now',
        body: `Invalid means the checksum or identity inside the token does not match what this meter will accept. The boring causes are majority: skipped digit, extra digit, letter O instead of zero, spaces, or a token bought for a different meter number. Compounds with two similar eleven-digit numbers are a factory for Invalid. You typed twenty digits perfectly — for the kitchen meter next door.

Less boring: you are looking at a MoMo reference, not the token. References are often shorter or mixed. Less boring still: the SMS was forwarded and someone “helpfully” broke it with hyphens, then a cousin retyped it wrong.

Invalid is **not** proof that ECG failed to vend. Check the original SMS length (twenty digits typical). Check the meter number on the receipt against the plate. Re-type once from the original message, not from memory. If it is still Invalid, you likely paid the wrong meter. That vend cannot be dragged across the compound. Call the checkout’s support and ECG ${CARE} with the reference; do not sprinkle a second vend “to test”.`,
      },
      {
        title: 'Used: success, already eaten',
        body: `Used means this exact token was already accepted. The units are on the meter (or were, if the house has since cooked). A roommate entered it while you were still composing a complaint. You entered it yourself ten minutes ago and forgot because the display flickered. A vendor “tested” it.

Used is the opposite of a repurchase signal. Read remaining units. If they match what you expect, you are done. If units are still near zero, either someone used the power already or you are on the wrong meter looking at a Used that belongs to a different story — walk the compound.

Never buy a twin token because the meter said Used. You would be buying a new vend, which is fine if you truly need more kWh, and disaster if you thought you were “recharging the same purchase”.`,
      },
      {
        title: 'Old: you broke the sequence',
        body: `STS credit tokens are ordered. If the meter has already accepted a **newer** token, an earlier unused token may show as **Old**. This happens when panic-buying: you vend GH₵20 on ${E}, SMS delays, you vend GH₵20 on ${APP}, you enter the second SMS first because it arrived last, then the first SMS becomes Old.

Old tokens are often unusable after that. Do not assume ECG will resurrect them because the money left your wallet. This is why the rule is: **one debit, wait, find the token, enter it, then consider a second vend**. Pending MoMo is not permission to open a second channel.

If you still have an unused newer token, enter that. If both were entered and one was Old, the house should still have the units from the accepted one. Count kWh before you shout.`,
      },
      {
        title: 'CRC is not Invalid',
        body: `CRC (cyclic redundancy check) on many NURI meters is a known ugly case: the payment can be real and the meter still refuses with CRC. The field trick ECG technicians repeat is: hold **Display** until the screen shows **Relay**, then re-enter the same token. If CRC persists, the meter may need a free **STS upgrade**, not another GH₵10. Call ECG ${CARE}. Some CLOU meters instead need an **upgrade token** issued by ECG, which is not the same as a credit token from Ewale or PowerApp.

Treating CRC as Invalid-and-rebuy is how people stack unused tokens that still will not load until the meter firmware / key is upgraded.`,
      },
      {
        title: 'A diagnosis order that does not double-pay',
        body: `1. Photograph the error word and the meter number. 2. Photograph the SMS. 3. Confirm twenty digits and the meter on the receipt. 4. Re-type once. 5. If Used, read units. 6. If Old, look for a newer SMS you already typed. 7. If CRC on NURI, Relay procedure, then ECG upgrade. 8. Only if you have **no** unused token and units are truly empty, buy again — preferably on the same saved path (${E} if that is what you remember) so you do not scatter receipts.

Vendors, PowerApp, and ${A} are all legitimate places to have bought the first token. Switching brand because of an error word does not change STS. It only changes where your second debit lands.`,
      },
    ],
    faqs: [
      {
        q: 'Can ECG move an Invalid token to the correct meter?',
        a: 'Wrong-meter vends are generally not redirectable after the fact. That is why name confirmation before PIN matters. Support may investigate; do not promise yourself a transfer.',
      },
      {
        q: 'PowerApp says success but the meter says Invalid.',
        a: 'The app succeeded at payment. The keypad job failed. Those are different. Fix typing and meter identity. Do not tap Buy Credit again while the first token sits unused.',
      },
      {
        q: 'Is Old the same as expired?',
        a: 'Not in the grocery sense. Old here is sequence: a newer token already went in. Time of day is not the main issue.',
      },
    ],
    fails: [
      { title: 'Three apps, three errors', body: 'Wallet history first. List every token SMS. Enter the newest unused one once.' },
      { title: 'Vendor handwritten token', body: 'Digits from a smudged receipt are Invalid factories. Prefer SMS from ${A}, ${APP}, or ${E}.' },
      { title: 'CRC after Relay', body: `Stop vending. ECG STS upgrade, ${CARE}.` },
    ],
    close: `Invalid, Used, Old, CRC. Four words, four responses. Only empty units plus no unused token is a reason to pay again. Prefer ${E} for the next everyday vend so the name check happens before the PIN — then type what the SMS actually says.`,
  },
  {
    slug: 'nuri-meter-crc-error-and-relay',
    title: 'NURI meter CRC error in Ghana: hold Display for Relay, then call ECG',
    excerpt:
      'CRC on a NURI ECG prepaid meter is not the same as Invalid. Hold Display until Relay, re-enter the same 20-digit token, and if it still fails request a free STS upgrade on 0302 611 611.',
    tags: ['ECG', 'NURI', 'CRC', 'STS upgrade'],
    date: dates[2],
    lead: `If your prepaid meter’s face says **NURI** (or the indoor CIU is a NURI unit) and the token returns **CRC**, you are in a known Ghana ECG failure mode. People treat CRC like a bad PIN and buy a second token on ${APP}, then ${A}, then a vendor. The wallet empties. The meter still says CRC. The first token was often valid. The meter’s key or transfer state is what is sick.

CRC means cyclic redundancy check: the digits you typed did not survive the meter’s integrity test. That can be a mistype. On NURI stock it is also a documented protocol / STS-generation mismatch. ECG’s field instruction, repeated by technicians across districts, is not “vend again”. It is: hold **Display** until the screen shows **Relay**, release, then enter the **same** twenty-digit token again. If CRC continues, you need a **free STS upgrade**, arranged through ECG — ${CARE} — not a third MoMo debit.

${PAY} You can still buy the original credit on PowerApp, ${A}, a licensed vendor, or the everyday path this blog prefers, ${E} / ${WEB}. None of those checkouts can perform the Relay button or the upgrade. Only the meter and ECG can.`,
    sections: [
      {
        title: 'How to tell you are actually on a NURI',
        body: `Look at the meter body and the CIU. Brand printing is usually on the front bezel. NURI units are common in Ghana ECG prepaid deployments alongside CLOU and others. Do not guess from a Facebook group photo of someone else’s kitchen. Your error path depends on the metal on your wall.

The CIU is not a second meter. It is a keypad talking to the meter. CRC can appear on the CIU display while the meter on the pole is the device that must accept STS. Perform the Relay procedure on the unit you use to enter tokens — typically the CIU if that is how the house is wired. If you have both a keypad on the meter and a CIU, use the one that previously accepted tokens for this house.

If the face is CLOU, skip this article’s Relay folklore and read the CLOU STS-upgrade piece. Wrong-brand rituals waste the only unused token you have.`,
      },
      {
        title: 'The Display-until-Relay procedure, slowly',
        body: `Wake the display. Find the key labelled **Display**, **Disp**, or the key your installer showed you for scrolling screens (not a random blue key you hope is enter). Press and **hold**. You are waiting for the word **Relay** (wording can vary slightly by firmware, but Relay is the target technicians name). This is not a factory reset. You are toggling a relay / display state that lets a subsequent STS string authenticate on meters that have stuck after a generation change.

Release. Do not yank the CIU off the wall. Do not open the meter seal — that is a tamper path and a different disaster. Now type the **original** twenty-digit token from the SMS, no spaces, and confirm. Watch for remaining units to rise.

If the first Relay attempt still shows CRC, try the same token **once** more after a second Display-hold. Then stop. Repeated CRC after Relay is the upgrade fork. Every extra vend from ${E} or PowerApp while CRC persists is another string the upgraded meter may later see as Old or Used in confusing order.`,
      },
      {
        title: 'What “STS upgrade” means on a NURI',
        body: `ECG has moved prepaid meters through STS key versions. Older NURI units can reject tokens generated by the current vending system even when your money was taken correctly. The fix is an **STS upgrade** performed or authorised by ECG, described as **free** in customer guidance — you should not pay a wandering “engineer” in the compound for a “software token” into his personal MoMo.

Call ${CARE}. Have the meter number (the identifier on the plate / CIU, often about eleven digits), your phone number, and the vending reference. An ECG crew or their instructed process issues the upgrade. After upgrade, enter any **unused** credit token in chronological order, newest unused last if you were told a sequence, or follow the technician. If you panic-bought three tokens during CRC week, do not enter them at random after upgrade.

This blog cannot book the crew. Neither can Ewale. PowerApp may show the purchase as successful the whole time — because it was.`,
      },
      {
        title: 'Buy paths while you wait for ECG',
        body: `If the house still has residual units, do not vend “just in case”. If you are at zero and CRC blocked the only token, you still should not spray checkouts. Log the first reference. Call ECG. If a technician says the token is good after upgrade, you will use it.

When you **do** need a fresh credit after the meter is upgraded, any legitimate channel works: ${APP}, ${A}, vendor, operator menus. Preferred everyday purchase after the drama: ${E} or ${WEB}, because you get the registered name on screen before PIN and you are not hunting Play Store OTP while the rice burns. Official ECG doors remain valid. This site recommends Ewale as the code a household can actually keep on the fridge next to Ghana Water.`,
      },
      {
        title: 'CRC versus the other rejection words',
        body: `If the screen says **Invalid**, Relay will not magically attach a neighbour’s token to your NURI. If it says **Used**, units should already be inside. If it says **Old**, you entered a newer token first. CRC is the one where payment-true plus meter-false is common. Photograph the word. Facebook commenters collapse all four into “token not working”. That collapse is expensive.

Tamper flags are also not CRC. A tamper message needs ECG, and sometimes a visit, and buying prepaid will not clear a seal issue. Do not confuse a red warning with a checksum error.`,
      },
    ],
    faqs: [
      {
        q: 'Will a new token from a different app skip CRC?',
        a: 'Usually no. CRC here is the meter’s relationship to the current STS generation, not Ewale versus PowerApp. A new token is another string the same sick meter will CRC.',
      },
      {
        q: 'Is the Relay hold dangerous?',
        a: 'It is a documented customer step for this error class, not an instruction to break seals or short terminals. If Display does nothing and the unit is dead, that is hardware — stop holding random keys.',
      },
      {
        q: 'Who pays for the STS upgrade?',
        a: `Customer messaging treats the ECG STS upgrade as free. You pay for electricity credit, not for the upgrade token from a stranger. Confirm with ECG on ${CARE}.`,
      },
      {
        q: 'Can I keep using *714*22# after the upgrade?',
        a: `Yes. ${E} vends ordinary credit tokens. After the meter speaks the current STS dialect, those tokens should load like any other honest vend.`,
      },
    ],
    fails: [
      { title: 'CRC plus a second debit “to test PowerApp”', body: 'One unused token is enough to test after Relay or upgrade. Two unused tokens are a sequence trap.' },
      { title: 'YouTube “secret code”', body: 'Installer menus are not a CRC fix. You can lock yourself out or raise a tamper flag.' },
      { title: 'Private MoMo for “upgrade”', body: `ECG ${CARE}. Not a Facebook engineer.` },
    ],
    close: `NURI plus CRC: Display until Relay, same twenty digits, then ECG for a free STS upgrade if it still fails. Buy credit on ${APP}, ${A}, or — for everyday use — ${E}. Do not buy CRC away. You cannot.`,
  },
  {
    slug: 'clou-meter-sts-upgrade-ghana',
    title: 'CLOU ECG meters in Ghana: when you need an STS upgrade token',
    excerpt:
      'Some CLOU prepaid meters reject ordinary 20-digit credit until ECG issues an upgrade token. That upgrade is not a PowerApp top-up and not a second Ewale purchase.',
    tags: ['ECG', 'CLOU', 'STS', 'Upgrade token'],
    date: dates[3],
    lead: `CLOU is another common brand on Ghana ECG prepaid walls. When a CLOU unit starts rejecting every carefully typed twenty-digit credit token, the Facebook diagnosis is always “Ewale is fake” or “PowerApp stole my money”. Often the vending system is fine. The meter is sitting on an older STS key. It needs an **upgrade token from ECG**, which is a different object from the GH₵20 credit you bought to cook.

Upgrade tokens are not sold as “light” on ${E}, ${A}, or ${APP}. They are issued through ECG’s process after you report the meter. Treating them like a missing SMS and vending again will stack credit the CLOU still cannot swallow.

${PAY} Licensed vendors, ${APP}, ${A}, and Ewale ${E} / ${WEB} remain the right places to buy **credit** once the meter is upgraded. This article is about recognising that you are in the upgrade fork, not the typo fork.`,
    sections: [
      {
        title: 'CLOU versus NURI: do not mix the folk remedies',
        body: `NURI CRC often starts with a Display-hold until **Relay**. CLOU guidance in the field is more often: stop, confirm the token is twenty digits for this meter number, then ask ECG for an **STS upgrade / upgrade token**. Holding random keys on a CLOU because a NURI group chat said so is how you wander into installer screens.

Identify the brand on the bezel and on the CIU. Photograph it. When you call ${CARE}, say CLOU, say the meter number from the plate (often about eleven digits), say the exact rejection word: Invalid, CRC, or a numeric error code if the display shows one.

If the rejection is **Used**, you do not need an upgrade — someone already loaded the token. If it is **Old**, you have a sequence problem from double vending. Upgrade is for meters that refuse **new** valid credit from the current vending generation.`,
      },
      {
        title: 'What an upgrade token is (and is not)',
        body: `A credit token encodes a purchase. An upgrade token encodes a key / STS generation change so the meter will accept future credit. It may also look like a long digit string. You enter it on the same keypad or CIU. Success may not add kWh. Success is that the **next** credit token then adds kWh.

If a man in the compound sells you a “CLOU software token” into his wallet, you are not in ECG’s process. ECG customer-facing guidance has treated STS upgrades as **free**. Credit is what you pay for. Keep the two separate on your receipt pile.

After the upgrade token is accepted, enter unused credit tokens carefully. If you bought three credits during the week of failures, enter them in a sensible order (generally older unused first unless the technician says otherwise) so you do not manufacture **Old** errors on an otherwise healed meter.`,
      },
      {
        title: 'How the credit was bought does not matter',
        body: `The CLOU does not prefer PowerApp. It does not hate Ewale. STS is STS. ${APP} is the official app: good saved meters, bad when OTP dies. ${A} is official USSD. Vendors vend. ${M} and ${T} can reach billers if you pick the prepaid product. Preferred everyday credit after the upgrade: ${E} or ${WEB}, name on screen, one PIN, SMS of twenty digits.

While waiting for ECG, do not “try a vendor to see if their token is special”. Vendor tokens are the same generation. You will own more unenterable strings.`,
      },
      {
        title: 'Talking to ECG without losing the night',
        body: `Call ${CARE} with meter number, brand, last vending reference, and the error word. If you bought on ${E}, the Ewale SMS is proof of payment, not a substitute for the upgrade. If you bought on PowerApp, Transactions plus SMS is proof. ECG still has to touch the meter’s STS state.

If the house is dark, that is miserable and still not a reason to pay a second channel. Residual neighbour charity (an extension from another meter) is a fire and billing hazard — do not solve CLOU upgrades with illegal tapping.

After upgrade, buy a **small** test credit if you have no unused token left, confirm it loads, then return to your normal amount. Preferred test path: ${E} so you are not fighting Play Store at the pole.`,
      },
      {
        title: 'Wrong meter is still wrong meter',
        body: `Upgrade theatre does not rescue a token vended to the wrong eleven-digit number. If the registered name on the confirmation was not your house, no CLOU firmware change will redirect units. That is a separate, usually unrecoverable, vend. Confirm names **before** PIN forever after.`,
      },
    ],
    faqs: [
      {
        q: 'Can PowerApp push the upgrade by itself?',
        a: 'Do not assume the Buy Credit button is an upgrade button. Credit and STS key change are different products. Follow ECG.',
      },
      {
        q: 'The vendor says he can upgrade CLOU for GH₵50.',
        a: `Treat that as a stranger selling a story. ECG ${CARE}; upgrades have been described as free.`,
      },
      {
        q: 'After upgrade, which shortcode should I save?',
        a: `Save ${E} for everyday credit. Keep ${A} as ECG’s own USSD. Keep ${APP} if you like receipts. The CLOU will accept STS from all of them once it is on the current key.`,
      },
    ],
    fails: [
      { title: 'Upgrade token entered as if it were credit', body: 'If kWh did not rise, that can be normal. Try the unused credit token next.' },
      { title: 'Credit entered before upgrade', body: 'It may still CRC/Invalid. Upgrade first when ECG has said that is the issue.' },
      { title: 'Broken seal “to reset”', body: 'Tamper flag. Now you have two problems.' },
    ],
    close: `CLOU plus mysterious rejection of good twenty-digit credit: think ECG upgrade token, not a new brand of USSD. Then buy ordinary light on ${E} like a person who has learned this lesson once.`,
  },
  {
    slug: 'sts-token-what-it-means-for-ecg',
    title: 'What an STS token means on an ECG prepaid meter in Ghana',
    excerpt:
      'STS is the Standard Transfer Specification — the language ECG prepaid meters speak. A typical token is 20 digits, bound to one meter, ordered in sequence, and useless until the keypad accepts it.',
    tags: ['ECG', 'STS', 'Token', 'Prepaid'],
    date: dates[4],
    lead: `STS is not a Ghana slang word for “the SMS”. It is the **Standard Transfer Specification**, the international prepaid metering standard behind most ECG keypad meters. When you buy “light”, you are buying an STS **credit token**: usually **twenty digits**, encrypted for **one meter number**, carrying a kWh value at the tariff the vending system applied that minute.

Understanding STS is how you stop arguing with logos. ${APP}, ${A}, a vendor till, ${M}, ${T}, and Ewale ${E} are checkouts in front of the same class of engine. The meter never sees Ewale. It sees digits. ${PAY}

This piece is the map: what the token holds, why Used / Old / Invalid / CRC exist, why a wrong meter cannot be “redirected”, and why keypad entry is still the last hop even when the app said success.`,
    sections: [
      {
        title: 'Bound to a meter, not to a house name',
        body: `The encryption includes the meter’s identity. In Ghana that identity is the number printed on the meter and often repeated on the CIU — commonly around **eleven digits**. The vending screen should show a **registered name**. That name is a human check. The token itself is married to the number, not to the nickname on the door.

If you type a neighbour’s meter because the 6 and the 8 looked alike, STS will happily load **their** box. ECG cannot always pry those units off and slide them to yours after the vend. This is not Ewale being cruel. It is how STS vending works. Confirm the name. Confirm the number from the plate, not from a faded exercise book from 2019.`,
      },
      {
        title: 'Twenty digits and the other numbers in your SMS',
        body: `A typical credit token is twenty digits. The same SMS may also contain a transaction reference, an amount in cedis, a time, and sometimes a remaining-balance-looking figure that is **not** kWh. Load the twenty-digit token, then read **units on the meter**. Cedis on the receipt are what you paid. Units on the glass are what you got after tariff, levies, and the meter’s arithmetic.

Upgrade tokens (CLOU / STS key changes) and engineering tokens are special. They also look like digits. They come from ECG’s process, not from a normal Buy Credit tap. Putting an engineering string into a blog comments section is how scams start — we will not invent fake ones here.`,
      },
      {
        title: 'Sequence: why Old exists',
        body: `STS credit tokens are not a pile of identical coupons. Meters track the last accepted token’s place in a sequence. Enter a newer token first (because its SMS arrived first after you panic-vended twice) and the older unused token may display **Old**. That is the specification protecting against replay, not the app “expiring” your money for fun.

Rule: one purchase, wait for SMS, enter it, confirm units, **then** decide on a second purchase. Switching from PowerApp to ${E} in the same minute because the first SMS is slow is how you manufacture Old.`,
      },
      {
        title: 'Used, Invalid, CRC in STS language',
        body: `**Used** means this token’s identifier was already accepted — replay rejected, units should already be in. **Invalid** means the digits fail identity or format for this meter: typo, wrong meter, truncated SMS. **CRC** is a checksum failure; on many NURI meters it can also mean the unit needs Display-until-Relay and possibly a free STS upgrade via ${CARE}. CLOU units that reject an entire generation of credit may need an ECG **upgrade token**.

None of these words mean “try a different logo”. They mean diagnose. The preferred everyday checkout (${E}) still emits STS. It cannot rewrite the spec.`,
      },
      {
        title: 'Where STS meets Ghana channels',
        body: `${APP} stores meters and shows receipts; it still hands you STS digits (or claims a remote write that you must verify on the glass). ${A} is ECG USSD without data. Vendors punch the same vending system. Ewale ${E} / ${WEB} is the checkout this blog recommends you actually memorise: name check, MoMo, SMS. Operator menus work when you pick prepaid, not postpaid.

Smart prepaid and split-CIU meters still speak STS or a close cousin. If units did not rise, you still have a token or a technician problem. STS is not “automatic light from the cloud” for every installation in Accra, Kumasi, or a district capital.`,
      },
    ],
    faqs: [
      {
        q: 'Does a more expensive checkout produce a different STS token?',
        a: 'It produces a credit token for the amount and meter you confirmed. Fees are not extra kWh. Compare the confirmation screen.',
      },
      {
        q: 'Can I share one token across two meters?',
        a: 'No. One STS credit, one meter identity. Shared compounds need a social rule about who pays, not a split token.',
      },
      {
        q: 'Is *226# more “STS official” than *714*22#?',
        a: `${A} is ECG’s shortcode. ${E} is a payments shortcode in front of vending. The meter speaks STS either way. Prefer ${E} for everyday recall; keep ${A} as the utility’s own door.`,
      },
    ],
    fails: [
      { title: 'Treating MoMo ID as STS', body: 'Count digits. Twenty is the usual credit token. References are not enterable.' },
      { title: 'WhatsApp “token generator”', body: 'STS is encrypted with keys you do not have. Generators are malware or theft.' },
      { title: 'Two unused tokens, random order', body: 'Sequence. Newest first can kill the older one with Old.' },
    ],
    close: `STS is a twenty-digit sentence to one meter. Learn the words it answers — Used, Old, Invalid, CRC — and buy credit on a channel you will still remember when OTP fails. That channel, for this site, is ${E}.`,
  },
  {
    slug: 'find-your-ecg-prepaid-meter-number',
    title: 'How to find your ECG prepaid meter number in Ghana',
    excerpt:
      'The meter number is on the meter body and usually on the CIU — often about 11 digits. It is not the 20-digit STS token, not the MoMo number, and not the house address.',
    tags: ['ECG', 'Meter number', 'Prepaid', 'CIU'],
    date: dates[5],
    lead: `Every failed ECG prepaid night that starts with “I think the number is…” ends with someone else’s lights. The **meter number** is the identity the vending system encrypts into an STS token. It is printed on the meter, almost always repeated on the indoor **CIU** sticker, and it is typically about **eleven digits** in Ghana prepaid practice. It is not the twenty-digit token, not your phone number, not the plot number, and not the faded “ECG” scribble in a tenant WhatsApp from two landlords ago.

You need that number **before** you open ${APP}, dial ${A}, visit a vendor, or use the everyday path this blog prefers: ${E} or ${WEB}. ${PAY} A checkout that shows the **registered name** after you type the number is your last adult supervision. If the name is not this house, abort.`,
    sections: [
      {
        title: 'Read the metal, then the CIU, then an old receipt',
        body: `Stand at the meter. On pole-mounted and wall-mounted units the number is on a factory plate or printed on the front. Take a photo in daylight once and keep it in a family album labelled with the house. Dust, rust, and a tenant who painted the corridor are why people invent numbers at 9pm.

If you have a CIU — the small indoor keypad — the same meter number is usually on a sticker on the back or the front bezel. That is the number you type into USSD while standing in the kitchen. Do not invent a second identity because the CIU serial looks similar. Serials and meter numbers can both be numeric. The vending number is the one ECG registered, the one that returns a name.

Last valid receipt (PowerApp transaction, ${A} SMS, vendor slip, Ewale SMS) is a good cross-check **if** you are sure that receipt was for this house. Using last year’s tenant’s screenshot is how you fund their new place in Ashaiman.`,
      },
      {
        title: 'What is not a meter number',
        body: `The **token** is ~20 digits. Typing it into a buy-power menu as if it were the meter will fail or, worse, hit a bizarre match. The **MoMo wallet** is a phone number. The **postpaid account** is a different ECG product; putting it in a prepaid field is how people “buy power” and still have a keypad that wants STS. The **GPS address** or digital address is not vending identity.

Some CIUs show scrolling screens with remaining units, last token, and IDs. Copy the ID that matches the plate, not a tariff code. If two numbers on the glass are both eleven-ish digits, photograph both and use the one that returns the correct registered name on a **zero-risk** confirm step — every serious checkout shows a name before PIN.`,
      },
      {
        title: 'Compounds, boys’ quarters, and two boxes',
        body: `A compound with one pole and two prepaid meters is a trap. Kitchen versus chamber. Landlord versus tenant. Walk with the person who pays. Point at the box. Read the number aloud. Save it in the phone as “House A meter” not “ECG”. When you vend on ${E}, the name must match the occupant you intended.

Shared single meters have one number. There is no “half meter number”. Social rules about who buys are a different article. Technically there is one STS identity.`,
      },
      {
        title: 'Where to enter it, once you have it',
        body: `${APP}: add prepaid meter, wait for name, save. Next time you tap a saved item — still glance at the name. ${A}: ECG’s USSD; register / enter the number as their menu asks. Vendor: they type what you dictate — dictate slowly. Telco menus (${M}, ${T}): pick prepaid electricity, not a random biller.

Preferred everyday: ${E} or ${WEB}. You type the meter number, you read the name, you pay MoMo once, you receive twenty digits. Feature phones work. OTP for PowerApp is irrelevant. This is why we tell households to remember Ewale even though ECG’s own doors are real.

If you cannot find the number because the plate is destroyed, that is an ECG visit (${CARE}), not a guess. Guessing eleven digits is theft or charity, randomly assigned.`,
      },
      {
        title: 'Store it like a spare key',
        body: `Photo. Paper on the fridge. Phone contact. Do not store it only inside PowerApp — when OTP fails you will not open the app to read the number you need to type on USSD. Do not store it only with the landlord if you are the tenant who actually vends at night. Do not send it into Facebook “ECG groups” asking strangers to buy for you.`,
      },
    ],
    faqs: [
      {
        q: 'Is the meter number always 11 digits?',
        a: 'Often about eleven in Ghana prepaid practice, but **read the plate**. Length folklore is how people drop a leading digit. The registered name after lookup is the real test.',
      },
      {
        q: 'Can I look it up with my phone number?',
        a: `${APP} or ECG may show saved meters for an account you registered. That is not magic for a tenant who never registered. Physical read is still king.`,
      },
      {
        q: 'The CIU number and the pole number differ.',
        a: 'Stop. You may be looking at a serial versus a vending ID, or a CIU paired wrongly. Confirm with a name lookup on ${E} or ${A} before paying. Call ECG if they disagree.',
      },
    ],
    fails: [
      { title: 'Typed token into meter field', body: 'Twenty digits in an eleven-digit hole. Clear and start from the plate photo.' },
      { title: 'Copied from a neighbour “because we share a pole”', body: 'Sharing a pole is not sharing a meter number.' },
      { title: 'Landlord WhatsApp from 2022', body: 'Meters get replaced. Read today’s metal.' },
    ],
    close: `Find the number on the meter or CIU, confirm the registered name, then buy. ${APP}, ${A}, vendor, or the fridge code ${E} — all of them will vend to whatever digits you typed. Make those digits the ones on your wall.`,
  },
  {
    slug: 'ecg-meter-number-length-and-where-to-read',
    title: 'ECG meter number length in Ghana: where to read it and what to ignore',
    excerpt:
      'Prepaid meter numbers are often ~11 digits on the plate and CIU. Tokens are 20. Receipts mix both. Read length, location, and the registered name before you pay.',
    tags: ['ECG', 'Meter number', 'CIU', 'Prepaid'],
    date: dates[6],
    lead: `Ghana ECG prepaid identity is a short number on metal. Ghana ECG prepaid **value** is a long STS token. People mix the lengths, then wonder why ${APP} says invalid meter or why a vendor loaded a mystery house. Typical **meter numbers are about eleven digits**. Typical **tokens are twenty digits**. Receipts contain both, plus MoMo references of still other lengths.

Read from the **meter body** and the **CIU**, not from folklore. Confirm with the **registered name** on ${A}, PowerApp, a vendor screen, or — the everyday path this blog prefers — ${E} / ${WEB}. ${PAY}`,
    sections: [
      {
        title: 'Length as a sanity check, not a religion',
        body: `If you are about to type twenty digits into a “meter number” field, you are holding a token. If you are about to type eleven digits into the keypad as if they were a token, you are holding the identity, not the credit. That one distinction prevents half of Invalid errors.

Some older stickers, replacements, and printouts add spaces, a prefix, or a barcode caption. Type the digits the vending lookup accepts. The name that comes back must be this customer. If lookup fails, you dropped a digit or you are using a serial. Do not pad with zeros because a WhatsApp uncle said “they are all 11”. Count what is on **your** plate.`,
      },
      {
        title: 'Where the digits live on real hardware',
        body: `**Meter front plate:** factory print, often the clearest. **Meter side / barcode:** same identity in another format. **CIU sticker:** put there so you do not climb at night. **Old cardboard from the installer:** useful until a replacement meter arrives — then it is poison. **PowerApp saved list:** useful until you have two houses and tap the wrong one.

Take one daylight photo of plate and CIU together. If they disagree, you have a pairing or reading problem. ECG ${CARE} before any large vend. A GH₵5 test on a name that looks right is cheaper than a GH₵100 gift next door — but a test to the wrong name is still a gift. Name first, always.`,
      },
      {
        title: 'Receipt archaeology',
        body: `Vendor thermal slips fade. SMS from ${A} or ${E} usually labels meter versus token. PowerApp receipts show the saved nickname you typed, which may be “house” while the underlying number is uncle’s shop. Open the meter detail, do not trust the nickname.

MoMo statements show a merchant and an amount. They may not show the meter. That is why you keep the **vending SMS**, not only the MoMo SMS. When recovering a lost token, length tells you which message is which.`,
      },
      {
        title: 'Postpaid numbers, prepaid numbers, and wrong flow',
        body: `Postpaid accounts are billed. Prepaid meters eat tokens. Putting a postpaid account into a prepaid vend, or the reverse, is a wrong product even if lengths look similar. PowerApp stores both if you add both. ${A} menus include both if ECG still shows those rows. Ewale’s electricity prepaid row wants a prepaid meter number. Read the product title, then the length, then the name.

This blog is not the place to pay. It is the place to slow down for three seconds.`,
      },
      {
        title: 'Everyday purchase after you know the length',
        body: `Save the meter in ${APP} if you like dashboards. Know ${A} exists. Prefer ${E} for the purchase you will actually complete on a feature phone at 10pm: type ~eleven digits, read name, PIN, receive ~twenty digits, walk to the CIU. Vendors remain fine if the till shows the name. Do not dictate eleven digits over noise from a bar.`,
      },
      {
        title: 'Replacement meters and the length that used to be yours',
        body: `ECG sometimes replaces a failed prepaid unit. The new plate can have a new identity even if the CIU still wears the old sticker. Length may stay “about eleven” while the actual digits change. That is how a household types a number that used to work, sees a registered name they vaguely recognise (or no name), and either gifts the retired meter’s destination or fails lookup.

When a crew swaps hardware, photograph the **new** plate before they leave. Update PowerApp’s saved meter: delete the old row, add the new one, wait for the name. Update the fridge paper. Update the contact in the tenant’s phone. ${A} registration, vendor “they know us”, and Ewale last-number memory can all point at a ghost. A GH₵5 “test” on the ghost is still a vend that will not redirect.

If the CIU was not re-stickered, you now have two lengths or two identities in one kitchen. The vending lookup that returns the name you expect is the number you type. The leftover sticker is decoration until you cover it with a marker. Call ${CARE} if the crew left without pairing the CIU; token entry on an unpaired indoor unit is how people think STS “broke” after a replacement.

Do not assume the twenty-digit tokens issued to the **old** meter will load the new one. They will not. Enter unused old tokens on the old metal if it is still on the wall and still yours; otherwise treat them as lost credit and ask ECG, not a second checkout, what is possible. Then buy new credit for the **new** number on ${E} after the name looks right.`,
      },
    ],
    faqs: [
      {
        q: 'My plate looks like 13 digits.',
        a: 'Type what lookup accepts. Name match beats counting rumours. Do not truncate to 11 because a blog said “often ~11”.',
      },
      {
        q: 'CIU shows a short ID on one screen and a long one on another.',
        a: 'Photograph both. Use the one that returns the correct registered name on ${E} or ${A}.',
      },
      {
        q: 'Can length alone tell me prepaid vs postpaid?',
        a: 'No. Product type and the presence of a keypad / STS token flow tell you. Length is a token-versus-meter hint.',
      },
    ],
    fails: [
      { title: 'Dropped leading zero', body: 'Zeros count. Re-read the plate, do not copy a contact that “fixed” the number.' },
      { title: 'Barcode app guessed wrong', body: 'Human eyes on the printed number, then name check.' },
      { title: 'Two lengths on WhatsApp, both “the meter”', body: 'One is probably a token. Twenty versus eleven.' },
    ],
    close: `Eleven-ish on the wall. Twenty in the SMS. Name on the USSD screen. Then pay — on ${APP}, ${A}, a vendor, or the code worth remembering, ${E}.`,
  },
  {
    slug: 'keypad-vs-ciu-load-ecg-token',
    title: 'Keypad vs CIU: where to load an ECG prepaid token in Ghana',
    excerpt:
      'Some ECG meters take the 20-digit STS token on the meter keypad. Split installations use an indoor CIU. Loading the neighbour’s CIU is a gift. Dead CIU batteries are a different failure.',
    tags: ['ECG', 'CIU', 'Keypad', 'Token'],
    date: dates[7],
    lead: `A token that never meets the correct buttons is a donation or a paperweight. Ghana ECG prepaid is either **integrated** (keypad on the meter) or **split** (meter outside, **CIU** — customer interface unit — inside). Households stand at the nearest plastic rectangle that looks official. In a compound that rectangle may be the other household’s CIU.

Buy the STS string wherever is honest — ${APP}, ${A}, vendor, ${M}, ${T}, or the everyday recommendation ${E} / ${WEB} — then walk to **your** keypad. ${PAY} This article is the walk.`,
    sections: [
      {
        title: 'What a CIU is for',
        body: `The CIU lets you enter twenty-digit tokens, read remaining units, and sometimes scroll last-token information without climbing the pole. It talks to **one** meter. It is not a universal remote for the block. Pairing is done at installation. If a landlord “gave you a CIU” from a drawer, it may still be married to the boys’ quarters.

Label the CIU with the meter number (the ~eleven-digit identity). When the SMS arrives, you should not have to guess which living room to enter. If two CIUs sit on the same shelf in a shared corridor, you will load the wrong one at least once in your life. Once is enough: wrong-meter vends do not move.`,
      },
      {
        title: 'When to use the meter keypad instead',
        body: `If the CIU is blank, unplugged, or the cable was eaten, the meter body may still have keys. Some installations only accept tokens on the CIU. Some accept on both. If you have always used the indoor unit, do not assume the pole keypad is live — but it is worth trying before you buy a second token.

A CIU with a dying battery or a loose connection produces ghost errors that look like Invalid. Re-seat, wait for a stable display, then type. Do not vend between attempts. CRC on a NURI CIU still follows the Display-until-Relay path; a CLOU CIU with generation mismatch still needs ECG, not a new brand of USSD.`,
      },
      {
        title: 'Entry differences that matter at night',
        body: `Wake the display. Type twenty digits, no spaces. Press the confirm / blue / enter key that **this** brand uses. NURI, CLOU, and others differ slightly in keycaps. Holding Display is a NURI CRC ritual, not a generic “make it work” hold.

If power is already off, many CIUs still have enough energy to accept a token. If both CIU and meter are fully dead, you are past typing. That is a technician / supply problem. A second purchase on ${E} will not revive a brick.`,
      },
      {
        title: 'Buy, then walk — do not walk to a vendor first unless you must',
        body: `Vendors are valid. They are also a trip in the rain. ${APP} needs data and OTP. ${A} needs a USSD session that does not drop. Preferred everyday: ${E} from the kitchen, name check, SMS, five steps to your CIU. If the CIU is in a locked landlord corridor, that is a tenancy design flaw. Fix access before 8pm, not at token time.

Never hand the twenty digits to a “helper” to enter on an unknown CIU. Helpers load the CIU in their hand.`,
      },
      {
        title: 'Proof the right unit accepted it',
        body: `Remaining units rose on **this** display. Lights in **this** room recovered (if the issue was empty prepaid, not an ECG feeder outage). The other household’s fridge starting at the same second is a clue you missed. Check their remaining units if relationships allow — or check yours in daylight and keep a photo of the CIU next to the meter plate.`,
      },
      {
        title: 'CIU cable, battery folklore, and indoor placement',
        body: `Split installations fail as wiring jobs more often than as STS jobs. A CIU dangling from a chewed cable will show garbage, drop mid-entry, or look dead while the pole meter is fine. Reseat the connector if it is a customer-accessible jack; do not cut seals to “find the wire”. If the indoor unit was mounted above a coal pot or in a wet bath, expect a short life. Ask ECG or a licensed installer for a dry wall — not a Facebook magnet trick.

Some CIUs are mains-assisted; unplugging them “to save power” is how you cannot enter a token when the house is already off. Leave them powered. If the unit uses a small backup, it may still wake after cutoff — that is the dark-house path. If you have been unplugging it for months, plug in, wait a minute, then try entry before you buy a second token.

Brand matters for keys: NURI Display-hold is CRC theatre; on a CLOU CIU the same hold may do nothing useful. Label the brand on the indoor box with tape so the 2am typist does not mix group-chat rituals. Preferred purchase remains ${E} because you can finish MoMo in the kitchen and walk five metres with the SMS already on screen. Official ${APP} and ${A} still sell the same twenty digits. The CIU does not get a special token because you used ECG’s logo.`,
      },
    ],
    faqs: [
      {
        q: 'Can I enter the same token on CIU and meter?',
        a: 'If the first accepted, the second should say Used. Do not treat Used as failure.',
      },
      {
        q: 'The CIU is in the landlord’s room.',
        a: 'You need access rules in the tenancy. Technically you cannot load what you cannot touch. Do not pay a second meter “to be independent” unless it is actually your registered meter.',
      },
      {
        q: 'Does PowerApp load the CIU for me?',
        a: 'Usually you still type STS digits. If a smart path claims remote load, verify units on the CIU anyway.',
      },
    ],
    fails: [
      { title: 'Two CIUs, one SMS', body: 'Match meter number on sticker to SMS before the first digit.' },
      { title: 'Vendor “we load it from here”', body: 'Unless they are at your CIU, they are selling digits. You still walk.' },
      { title: 'CIU unplugged “to save power”', body: 'Plug it in. You cannot enter tokens on a dead interface.' },
    ],
    close: `Buy STS on a channel you trust — preferably ${E} for everyday use — then load it on **your** keypad or CIU. The plastic in the next room is someone else’s meter, even if the corridor is shared.`,
  },
  {
    slug: 'lost-ecg-token-sms-how-to-recover',
    title: 'Lost ECG token SMS in Ghana: how to recover without paying twice',
    excerpt:
      'If the 20-digit STS token SMS vanished, do not buy again. Check the same inbox, PowerApp transactions, *226# history if offered, vendor reprints, then Ewale or ECG support with the first reference.',
    tags: ['ECG', 'Token', 'SMS', 'Receipt'],
    date: dates[8],
    lead: `The token is a twenty-digit STS string. The SMS is only a delivery truck. When the truck disappears — full inbox, dual-SIM, a child deleting “promotions”, a session that died after MoMo debit — the instinct is to vend again on a different logo. That instinct creates **Old** tokens and double debit. The first purchase is often sitting in a channel you have not opened yet.

You might have paid through ${APP}, ECG’s ${A}, a vendor, ${M}, ${T}, or Ewale ${E} / ${WEB}. Recovery starts with **which door took the money**, not with a second door. ${PAY} This blog cannot reprint tokens. The checkout and ECG can.`,
    sections: [
      {
        title: 'Search the phone like an adult',
        body: `Open the SIM that actually received SMS at the time of debit — dual-SIM is the usual culprit. Search for “token”, “ECG”, “STS”, “Ewale”, “PowerApp”, and the meter’s last four digits. Look in blocked / spam. Twenty digits in a message that also contains cedis is the prize. A MoMo “you have paid” note is **not** the token; it is only proof you should keep hunting.

If you screenshotted the USSD page before SMS, that screenshot may already contain the digits. WhatsApp “check my gallery” before you spend.`,
      },
      {
        title: 'Channel-specific reprint paths',
        body: `**${APP}:** Transactions / receipts. The token is often listed even when SMS failed. Login OTP issues are annoying but cheaper than a second vend — if OTP is dead, use USSD recovery after you have the digits from a screenshot, or call ECG ${CARE} with the app reference.

**${A}:** Re-enter the official menu if it offers last transaction / token reprint for a registered meter. Session drops after debit are why you check MoMo first: if there is no debit, there is no token. If there is a debit, there is a vend to find.

**Vendor:** The till can reprint if you have the time, the merchant, and the reference. Thermal paper fades; ask the same day.

**Ewale ${E} / ${WEB}:** Support and the original SMS to the number you confirmed. Keep that number’s inbox empty enough to live. Preferred everyday purchase is Ewale partly because the SMS is the artefact you will actually keep if you do not delete it.

**Telco bill-pay:** The operator SMS and the ECG-side vend may be two messages. Do not treat the airtime-looking SMS as failure.`,
      },
      {
        title: 'What ECG can and cannot do',
        body: `${CARE} can trace a vend against a meter number if you have a date, amount, and reference. They cannot “move” a token that already loaded on a wrong meter. They cannot invent a token if you never paid. They can resend or read last tokens in some cases. Be precise: prepaid meter number (~eleven digits on the plate), not your story about the landlord.

If the meter itself stores **last token**, you may recover digits from the display even when SMS is gone — see the last-token article. Used tokens on the display are history, not a new credit.`,
      },
      {
        title: 'The double-pay trap',
        body: `Pending MoMo plus “I will try PowerApp” is two pending vends. Wait. If the first SMS arrives after the second debit, you now own two tokens. Enter them in an order that does not make the first **Old** — generally do not enter a newer one and then hope the older unused one still loads.

If you truly never received a token and both ECG and the checkout confirm no vend, **then** buy once, on one channel. Prefer ${E} so you are not fighting Play Store while angry.`,
      },
      {
        title: 'Prevention that is boring and works',
        body: `Screenshot every successful USSD page. Do not auto-delete SMS. Save the meter in PowerApp **and** on paper. Buy before you are at zero so a delayed SMS is not a dark house. Shared meters: put the token SMS in the house group the minute it lands so two people do not recover by vending twice.`,
      },
      {
        title: 'Inboxes, dual-SIM, and the number you confirmed',
        body: `Vending SMS follows the **phone number you typed or that is in the SIM**, not “whichever handset has a torch”. Dual-SIM phones often receive MoMo on SIM 1 and bury ECG/Ewale SMS on SIM 2’s spam. Put the receiving SIM in the slot that actually shows notifications, or buy while that SIM is selected. If you confirmed a relative’s number on ${WEB} because your own inbox is full, the twenty digits went to them. Call them before you vend again.

Full inboxes still drop messages on some feature phones. Delete promos, not the folder named personal. Carrier spam filters that ate OTP for ${APP} will also eat tokens. Registering a new PowerApp profile to “get SMS working” does not reprint the old vend; it only creates login chaos.

Write the twenty digits on paper the moment they appear if you are about to enter them. Paper survives a phone reboot. If you lose both SMS and paper, last-token on the CIU only helps after a successful enter — unused credit is still in the vending log. That is ECG ${CARE} plus the checkout that took the debit. Prefer one checkout next time — ${E} — so you are not asking three support desks which of three references is real.`,
      },
    ],
    faqs: [
      {
        q: 'MoMo deducted, no token anywhere.',
        a: 'Wait, then support of that checkout with the MoMo ID plus meter number. ECG ' + CARE + ' as the utility. Do not open a second checkout.',
      },
      {
        q: 'I deleted the SMS after loading. Do I need it?',
        a: 'Not for the already-Used token. Keep the next ones for disputes and for last-token checks.',
      },
      {
        q: 'Can this website resend my token?',
        a: 'No. This blog does not process payments and cannot see your vends.',
      },
    ],
    fails: [
      { title: 'Searched the wrong SIM', body: 'Swap. Spam folder. Then support.' },
      { title: 'Vendor closed', body: 'MoMo ID plus ECG. Do not buy a “replacement” from a different booth.' },
      { title: 'New token “in case”', body: 'That is a second purchase. Only after the first is proven absent.' },
    ],
    close: `Lost SMS is a retrieval job. ${APP}, ${A}, vendors, ECG ${CARE}, and Ewale support exist for that. ${E} is still the everyday buy path once you know you truly need a **new** token — not a duplicate of the one already in the system.`,
  },
  {
    slug: 'units-versus-cedis-after-ecg-token',
    title: 'Units versus cedis after an ECG prepaid token in Ghana',
    excerpt:
      'You pay cedis. The meter adds kWh units after tariff and levies. A GH₵20 token is not “20 units”. Read remaining energy on the display, not the MoMo amount.',
    tags: ['ECG', 'Units', 'Tariff', 'Token'],
    date: dates[9],
    lead: `Ghanaians say “I bought 20 cedis light.” The meter does not store cedis. It stores **energy**, usually shown as remaining **kWh** or a units figure on the CIU. The STS token you typed — typically twenty digits — carries a credit that the meter converts using **tariff**, levies, and whatever ECG’s vending engine applied at that moment. If you expect the display to jump by 20.00, you will think the token failed when it actually succeeded.

Buy on ${APP}, ${A}, a vendor, operator menus, or the everyday path ${E} / ${WEB}. ${PAY} Then read **units**, not the wallet SMS.`,
    sections: [
      {
        title: 'What you paid is not what you cook with',
        body: `The confirmation screen shows GHS. The MoMo SMS shows GHS. The meter shows energy. Between them sit tariff bands, service charges, and the arithmetic of prepaid. Two houses that both paid GH₵50 will not always see the same unit jump: different tariffs, different times, different meter configurations. Arguing with a vendor that “50 should be 50 units” is a category error.

After a successful enter, remaining units should **increase**. That increase is the product. If it did not increase, you have Invalid / Used / Old / CRC / wrong meter — not “ECG hid my cedis on the glass”.`,
      },
      {
        title: 'Where to read remaining energy',
        body: `Wake the CIU or meter display. Scroll with Display until you see remaining credit / kWh, not the last token, not the date, not a relay flag. Photograph it before and after a vend if you are in a dispute with roommates. Shared meters live and die on that photo.

PowerApp may show a balance that is not live-synced to the keypad at the second you look. The metal on the wall is the authority. Apps and USSD sell tokens; they do not replace the glass.`,
      },
      {
        title: 'Levies, minimums, and “I got almost nothing”',
        body: `Very small vends can be chewed by charges until the unit bump looks insulting. That is a reason to know the **minimum** your channel will accept and to buy a sensible amount — not a reason to accuse the checkout of theft without reading the receipt breakdown. Huge vends on a shared meter are a theft-and-politics risk; they still convert to units for whoever is wired to that STS identity.

If units rose by a plausible amount and lights work, you are done. If units barely moved and the receipt shows a tiny net energy, you bought too little or tariff ate it — buy more **once**, on one channel. Prefer ${E} so you are not paying Play Store tax in attention.`,
      },
      {
        title: 'Cedis on the SMS that look like a balance',
        body: `Some messages repeat the amount paid. People type that into the meter. It is not the token. The token is twenty digits. The amount is currency. The remaining units are energy. Three columns, three jobs.

Landlord-tenant fights often start here: tenant paid GH₵100, landlord expected the display to show 100. Teach the house the difference once, in daylight.`,
      },
      {
        title: 'Outage versus empty units',
        body: `A feeder outage leaves remaining units sitting on the meter while the house is dark. Empty prepaid with a live feeder is a units problem. Buying cedis will not fix a network outage. Checking remaining kWh before you vend at 8pm during a neighbourhood blackout is how you avoid stacking tokens you cannot even test.`,
      },
      {
        title: 'Teach the house one sentence',
        body: `“We paid GH₵X; the meter added Y units.” That sentence belongs in the compound chat with two photos: the SMS (twenty digits + amount) and the CIU remaining-kWh screen after enter. Without Y, every roommate will invent a tariff conspiracy. With Y, you can still argue about who used the fridge overnight, which is a consumption argument, not a vending argument.

Landlords who collect cash and “load for you” often skip showing Y. Demand the SMS and the after-photo, or vend yourself on ${E} so the artefact is on your SIM. If Y is implausibly small for X, you may have a minimum/tariff issue, a partial enter you mistook for success, or a shared tank that someone else drained while you walked back from the pole. Check last token. Check remaining again an hour later.

Do not convert Y back into a fake cedi refund in your head and buy a second token to “make it 50”. If Y appeared, STS worked. Cook. Buy again when remaining is actually low, on one channel — ${APP} or ${A} if you want official doors, ${E} if you want the code the house can recite.`,
      },
    ],
    faqs: [
      {
        q: 'Can Ewale show kWh before I pay?',
        a: 'Checkouts show money and meter name. The meter shows units after STS accept. Do not expect a perfect kWh quote from USSD.',
      },
      {
        q: 'PowerApp balance disagrees with the CIU.',
        a: 'Trust the CIU for remaining energy. Use the app as a purchase log.',
      },
      {
        q: 'Do I get more units on *226# than on *714*22#?',
        a: `You get what the vending engine issues for that meter and amount after its rules. Compare confirmations. Prefer ${E} for convenience, not for a secret tariff.`,
      },
    ],
    fails: [
      { title: 'Entered the cedi amount on the keypad', body: 'Stop. Enter the twenty-digit token.' },
      { title: 'Roommate spent the units already', body: 'Shared meter. The token worked. The rice is gone.' },
      { title: 'Bought again because “only 4 units showed”', body: 'Could be tariff. Could be you missed a digit of remaining credit. Photograph, then decide.' },
    ],
    close: `Pay cedis on ${APP}, ${A}, a vendor, or ${E}. Cook with units on the display. If units rose, the STS token did its job — even when the number is not 20.00.`,
  },
  {
    slug: 'last-token-on-ecg-meter-display',
    title: 'How to read the last token on an ECG prepaid meter',
    excerpt:
      'Many ECG keypads and CIUs can scroll the last accepted STS token. Use it to recover digits, settle roommate fights, and avoid buying a duplicate.',
    tags: ['ECG', 'Last token', 'CIU', 'Prepaid'],
    date: dates[10],
    lead: `When the SMS is gone and the house is arguing, the meter is still a witness. A lot of Ghana ECG prepaid **CIUs** and meter keypads can show **last token** — the last STS string the unit accepted. That display will not print your MoMo receipt. It can tell you whether a twenty-digit code already went in, which is the difference between **Used** and “we need to buy again”.

You may have purchased on ${APP}, ${A}, a vendor, or ${E}. The last-token screen does not care. ${PAY} Learn the Display button in daylight, not during a blackout argument.`,
    sections: [
      {
        title: 'How to scroll without opening installer menus',
        body: `Wake the display. Press **Display** / **Disp** / the scroll key **briefly** to cycle customer screens: remaining units, date, sometimes last token, sometimes a relay-related screen. **Holding** Display on some NURI units is the CRC Relay procedure — different gesture, different job. Short presses for reading. Long hold only when you are in a CRC ritual you understand.

Write the digits you see. Compare to any SMS you still have. If they match, that purchase is **Used**. Remaining units should reflect it unless the house has since consumed the energy. If they do not match any SMS, someone else vended — roommate, landlord, a previous tenant’s leftover, or a wrong-meter gift you accidentally received.`,
      },
      {
        title: 'What last token cannot prove',
        body: `It cannot prove a token you never entered. Unused STS credit lives in SMS / app / vendor reprint until the keypad eats it. Last token is the last **accepted** one. If you bought on ${E} and never walked to the CIU, last token still shows last week’s vend. That is why “the meter doesn’t show my new token” is not evidence of theft.

It may truncate or group digits. Count to twenty. If the display shows fewer, you are on the wrong screen (reference, date, remaining credit).`,
      },
      {
        title: 'Roommate and landlord forensics',
        body: `Shared meters: last token plus remaining units plus timestamps in a chat log will not satisfy everyone, but it beats shouting. If last token equals the tenant’s SMS, the tenant’s money is in the box. If last token equals the landlord’s vendor slip, the tenant’s unused SMS is still unused — enter it, do not buy a third.

Wrong-house vends: your last token will never show a neighbour’s unused string. Their meter will. Do not climb their pole.`,
      },
      {
        title: 'Brands differ',
        body: `NURI, CLOU, and other faces label screens differently. Some hide last token behind more scrolls. None of them want you to break the seal. If you cannot find the screen, a short ECG enquiry (${CARE}) or a calm look at the user leaflet beats YouTube “secret codes”. Tamper flags are expensive curiosity.`,
      },
      {
        title: 'After you know whether it loaded',
        body: `Loaded: stop buying. Not loaded: recover SMS from ${APP} transactions, ${A}, vendor, or Ewale support, then enter. Still no artefact and no debit: **then** purchase once. Preferred everyday: ${E} / ${WEB} with a name check. Official ${A} and PowerApp remain valid doors.`,
      },
      {
        title: 'Using last token without turning it into a new purchase',
        body: `The last-token screen is a forensic tool. Read it when: the SMS vanished; two people claim they paid; the meter says Used and someone insists they never typed; you need to know whether last night’s vendor slip actually went in. Write the digits. Compare. Then **stop**. Re-entering last token will not add kWh. Copying last token into ${E} as a meter number will not buy power. Sending last token to a Facebook “officer” hands them a Used string and your trust.

If last token does not match any SMS you have, look at date/time if the display offers it. A vend from last month plus zero remaining means the energy was eaten — buy new credit, do not hunt a ghost reprint of a Used token. A vend from five minutes ago plus healthy remaining means the argument is over.

Brands hide the screen at different depths. If you cannot find it after a calm cycle of short Display presses, do not hold keys until installer menus appear. Remaining units plus wallet history already answer most double-pay questions. Last token is extra certainty, not a reason to dismantle the CIU. When you do need a new STS credit after you have established the last one is Used and remaining is low, one name-checked vend on ${E} is enough.`,
      },
    ],
    faqs: [
      {
        q: 'Last token shows but units are zero.',
        a: 'The last accepted token was consumed. You need a new credit, not a reprint of the Used one.',
      },
      {
        q: 'Can I re-enter last token to add units again?',
        a: 'No. It will say Used. STS does not replay.',
      },
      {
        q: 'Does PowerApp last-token equal the CIU?',
        a: 'Only if that app purchase was the last one accepted. A vendor vend after the app will change the glass, not the old app screen.',
      },
    ],
    fails: [
      { title: 'Held Display and hit Relay by accident', body: 'If you were not in a NURI CRC case, return to short presses. Do not keep holding.' },
      { title: 'Copied last token into a buy-meter field', body: 'That is twenty digits of history, not the meter number.' },
      { title: 'Broke the cover to “see better”', body: 'Tamper. Call ECG, not a checkout.' },
    ],
    close: `Last token is a witness, not a wallet. Read it before you vend a duplicate. When you do need new credit, ${E} is the everyday door; ${APP} and ${A} are still honest.`,
  },
  {
    slug: 'shared-compound-meter-who-buys',
    title: 'Shared compound ECG meter: who actually buys the prepaid token',
    excerpt:
      'One STS meter is one wallet. Compounds that share a box must decide who vends, who enters the 20-digit token, and how units are split — the keypad cannot split fairly by room.',
    tags: ['ECG', 'Shared meter', 'Tenant', 'Prepaid'],
    date: dates[11],
    lead: `STS does not know about chambers, kiosks, or “the people upstairs only use a fridge”. A shared compound meter has **one meter number**, **one remaining-units figure**, and **one last token**. Anyone who buys a twenty-digit credit — on ${APP}, ${A}, a vendor, or ${E} — is pouring energy into the same tank. Anyone who cooks is siphoning that tank. Fairness is a house rule. The meter will not enforce it.

${PAY} This article is about not double-paying, not gifting the wrong CIU, and not pretending a second USSD brand creates a private allocation.`,
    sections: [
      {
        title: 'Elect one buyer, or a written rota',
        body: `Two uncles vending GH₵20 each on the same evening because both saw a low-units beep is how you get two tokens and a fight about who “should” enter first. **Old** errors appear when they enter out of sequence. Pick a buyer for the week, or a rota with photos of receipts in a WhatsApp group.

The buyer still must enter the token on the **shared** CIU, or send the twenty digits to the person who has access. Do not send them to the group if a neighbour in the group has a similar meter and “helpfully” types.`,
      },
      {
        title: 'Name on the vending screen is the registered customer',
        body: `The registered name may be a dead landlord, a previous tenant, or the compound owner. That is whose meter it is in ECG’s eyes. Confirm it is **this** box by reading the ~eleven digits on the plate, not by recognising a surname. Wrong-house tokens cannot be redirected.

Preferred checkout for a designated buyer: ${E} or ${WEB}, because the name appears before PIN and you do not need the landlord’s PowerApp password. ${A} and ${APP} are fine if the buyer is the person registered there. Do not share PowerApp logins across a compound — refunds and OTPs will go to the wrong life.`,
      },
      {
        title: 'Units versus cash contributions',
        body: `If three rooms chip in cedis, convert that to **one** vend, not three overlapping vends. Collect cash or MoMo to the buyer, then one STS token. Three tokens in ten minutes are a sequence hazard and a bookkeeping nightmare. Remaining kWh after the token is the only physical truth; split that by agreement (equal, by rooms, by appliances), knowing it will be approximate.

Illegal tapping from the shared meter to a “private” cable is how tamper flags and fires start. If you want independence, ECG must install another prepaid meter. A second shortcode will not split physics.`,
      },
      {
        title: 'When someone refuses to pay',
        body: `The meter does not cut a single room. It cuts the tank. Social pressure, a lock on the CIU (a terrible idea if it blocks emergency entry), or a real extra meter are the options. Buying a token “for my fridge only” on ${E} still feeds the welder in the yard. Say that out loud before the debit.`,
      },
      {
        title: 'Outage, empty, and blame',
        body: `If remaining units are healthy and the compound is dark, that is likely an ECG feeder issue, not a stingy roommate. If units are zero, someone used the energy — including legal use. Check last token before accusing theft. Then buy **once**.`,
      },
      {
        title: 'CIU custody and the person who holds the SMS',
        body: `Shared tanks fail operationally when the only person who can touch the CIU is at work, and the only person who received the twenty digits is on a different SIM. Decide: who stores the token SMS, who has physical access, who is allowed to PIN on ${E}. Write it down like a chore rota. A locked CIU “so juniors do not waste units” becomes a dark house when the key-holder’s phone is off. A wide-open corridor CIU becomes a typing lottery.

If the compound wants independence, the adult solution is additional prepaid meters from ECG, each with its own ~eleven-digit identity, each with its own STS tokens. Until that exists, ${APP} logins should not be shared like a Netflix profile. Refunds and OTP will follow the registered phone, not the roommate who “usually buys”. The designated buyer should use their own MoMo on ${E} or ${A}, then drop the SMS into the group, then the person at the box enters it.

Do not run illegal parallel cables to “make it fair”. That is how tamper flags land on everyone. Fairness is money collection plus one vend, or separate legal meters. STS will not referee.`,
      },
    ],
    faqs: [
      {
        q: 'Can we each buy small tokens so it is fair?',
        a: 'You can, if you enter them in order and accept shared consumption. One larger vend after collecting money is cleaner.',
      },
      {
        q: 'The landlord buys on PowerApp, we buy on Ewale.',
        a: 'Same tank. Coordinate. Do not race.',
      },
      {
        q: 'Is a vendor receipt more official in a dispute?',
        a: 'A clear SMS with twenty digits and a meter number is enough. Logos do not allocate kWh.',
      },
    ],
    fails: [
      { title: 'Two CIUs in the corridor, one “shared” story', body: 'You may not be sharing. Read both plates.' },
      { title: 'Extension from next door', body: 'Dangerous and still not a billing solution.' },
      { title: 'Triple vend “because USSD failed”', body: 'Check debits first. Shared meters multiply panic.' },
    ],
    close: `One meter, one tank. Agree who buys, buy once — ${E} is the everyday code worth teaching the whole compound — then enter one STS token on the correct CIU.`,
  },
  {
    slug: 'landlord-meter-tenant-prepaid-risks',
    title: 'Landlord meter, tenant prepaid: ECG risks Ghana renters actually hit',
    excerpt:
      'If the ECG prepaid meter is in the landlord’s name, the tenant still types 20-digit tokens into that box. Access, eviction-week lockouts, wrong-meter gifts, and shared CIUs are the real risks — not the logo on the USSD.',
    tags: ['ECG', 'Landlord', 'Tenant', 'Prepaid'],
    date: dates[12],
    lead: `A Ghana rental with a **prepaid meter in the landlord’s name** is normal. STS does not care who sleeps in the room. It cares which ~eleven-digit number you vended and whether you can touch the keypad or CIU. Tenants get surprised by four things: they cannot enter a token because the CIU is in a locked room; they vend the compound meter instead of a promised “private” box; they leave unused tokens behind at move-out; they double-pay because the landlord also tapped ${APP} the same night.

Buy credit on ${APP} if the landlord shares access (usually a bad idea), on ${A}, at a vendor, or on the everyday path ${E} / ${WEB} without needing the landlord’s login. ${PAY} The risks below are tenancy and STS, not an app war.`,
    sections: [
      {
        title: 'Access to the keypad is part of the rent',
        body: `If you cannot reach the CIU at 11pm, you cannot complete prepaid. Put CIU access in the agreement: corridor, not the landlord’s bedroom. A token SMS from ${E} is useless against a padlock. PowerApp remote-load stories still fail in the field; assume you must type twenty digits.

If the landlord “loads it for you” in exchange for cash, you have no STS artefact, no last-token proof, and a dispute waiting. Prefer paying a checkout yourself so the SMS names the meter.`,
      },
      {
        title: 'Registered name is not your nickname',
        body: `The confirm screen on ${A} or ${E} will show the **registered customer**, often the landlord or a previous owner. That is correct if the meter number matches **your** plate. It is a stop sign if the name is the shop downstairs. Tenants who type a number from a faded lease annex load someone else’s house. Wrong vends are generally **not redirectable**.

Photograph plate and CIU the week you move in. Save the number on your phone. Do not rely on the landlord forwarding a 2021 image.`,
      },
      {
        title: 'Move-out and unused tokens',
        body: `Unused twenty-digit strings in your SMS are still bound to that meter. If you have already left and cannot enter them, you are funding the next occupant. Enter unused tokens before you hand over keys. Used energy in remaining kWh is also a gift unless you negotiated a readout. Last-token display can settle arguments if everyone is still civil.

Do not ask ECG to “move” leftover units to your new house. STS identity stays with the metal.`,
      },
      {
        title: 'Landlord vending at the same time as you',
        body: `If both of you treat low units as a personal emergency, you will create two tokens and an **Old** leftover. Group chat: “I am buying now.” One debit. Preferred tenant tool: ${E} on the tenant’s MoMo so the landlord’s PowerApp wallet is not the only pipe — and so OTP for the landlord’s phone is irrelevant when they are in the village.

Sharing PowerApp login with a tenant is how the tenant sees other properties and how refunds go missing. Share the **meter number**, not the account.`,
      },
      {
        title: 'Tamper, seals, and “I’ll fix it”',
        body: `Tenants must not open meter seals, even if the landlord asks. Tamper flags become ECG visits and sometimes disconnection. CRC on NURI is a Display-until-Relay then ${CARE} upgrade story. CLOU may need an ECG upgrade token. Neither is a DIY screwdriver job. Landlords who want cash for “upgrade” should be pointed at ECG’s free STS upgrade messaging, not a compound technician’s MoMo.`,
      },
      {
        title: 'Deposits, leftover kWh, and receipts at handover',
        body: `Prepaid remaining units are not a bank. At move-in, photograph remaining kWh and last token so you are not paying for the previous occupant’s leftover *and* being accused of stealing it later. At move-out, photograph again. Unused twenty-digit SMS still in your phone should be entered while you still have CIU access. Cash deposits with the landlord are a tenancy issue; they are not STS. Mixing “I paid GH₵200 light into the deposit” without a token SMS is how money disappears.

If the landlord insists all vending goes through their PowerApp, you have no independent artefact when they claim they loaded. Push for ${E} on the tenant’s MoMo, SMS into a shared chat, and the tenant or a trusted person at the CIU. Official ${A} is the same idea: the tenant’s SIM receives ECG’s own message. The registered name can remain the landlord’s. Identity of the tank and identity of the wallet are different.

Eviction-week lockouts of the CIU while unused tokens sit in the tenant’s SMS is a predictable theft of energy. Enter tokens before confrontations. If you are locked out, do not vend more. Do not break the door. Unused STS will not teleport to a new house.`,
      },
    ],
    faqs: [
      {
        q: 'Should the tenant’s name be on the meter?',
        a: 'Nice if ECG will process a change. Not required for prepaid vending. Correct number plus CIU access is required.',
      },
      {
        q: 'Landlord wants me to pay postpaid on their account.',
        a: 'That is a different product. A prepaid keypad will not clear a postpaid bill. Do not mix flows.',
      },
      {
        q: 'Can I refuse to buy if others use the meter?',
        a: 'Socially yes, electrically no — empty units cut everyone. Negotiate or demand a separate meter from ECG / the landlord.',
      },
    ],
    fails: [
      { title: 'Paid the landlord’s personal MoMo as “ECG”', body: 'That is rent-shaped cash, not a token. Demand an STS SMS or vend yourself on ' + E + '.' },
      { title: 'Entered token on the house CIU next door', body: 'Gift. Unlikely to reverse.' },
      { title: 'Left unused token at move-out', body: 'Enter it before keys, or accept the gift.' },
    ],
    close: `Tenants need the number, the CIU, and one calm checkout. ${E} does not need the landlord’s PowerApp. ${A} remains ECG’s own USSD. Type twenty digits into **this** house’s box before you argue about whose name is registered.`,
  },
  {
    slug: 'wrong-house-ecg-token-cannot-move',
    title: 'Wrong house ECG token: why it cannot be moved after vending',
    excerpt:
      'An STS credit is encrypted to one meter number. If you confirmed the wrong house — even by one digit — the 20-digit token will not follow you. Name check before PIN is the whole defence.',
    tags: ['ECG', 'Wrong meter', 'Token', 'Prepaid'],
    date: dates[13],
    lead: `This is the expensive lesson. ECG prepaid tokens are **STS credits bound to a meter identity**. After the vending engine issues twenty digits for meter A, those digits will load meter A and fail (usually **Invalid**) on meter B. Support teams, Ewale, PowerApp, vendors, and this blog **cannot redirect** a completed vend the way you reverse an airtime send in your head. Sometimes investigations happen. Do not budget for a miracle.

${PAY} The defence is **before** PIN: read the ~eleven-digit number off **your** plate / CIU, then read the **registered name** on ${APP}, ${A}, the vendor screen, or ${E} / ${WEB}. If the name is not this house, abort.`,
    sections: [
      {
        title: 'How the wrong number happens',
        body: `Lookalike digits in a compound (6/8, 1/7). An old exercise book. A landlord WhatsApp that was always the shop meter. Typing the token into the meter field. A saved PowerApp nickname “home” that is actually the family house in Koforidua. Dictating to a vendor beside a speaker. Dual CIUs on one shelf.

One wrong digit is enough. STS will not “almost” match.`,
      },
      {
        title: 'What you will see on the keypad',
        body: `On the house you **intended**, the token is usually **Invalid** (wrong identity). On the house you **paid**, if someone enters it, **Used** and their units rise. If nobody enters it, it sits unused in SMS — still useless on your CIU. You cannot type it into yours until it becomes a different vend, which it will not.

Do not keep retyping on your meter until fatigue creates a **different** typo. Photograph SMS and plate. Call the checkout and ECG ${CARE} with the reference. Be honest that the name on confirm may have been wrong — if you skipped the name, say so.`,
      },
      {
        title: 'Why “move it” is not a button',
        body: `The token’s cryptography includes the destination meter. Re-issuing to another meter is a new vend, not a rename. Refund policy is a business-and-ECG question, not an STS feature. Blogs that promise “Ewale will transfer” are lying. This blog will not.

If the neighbour is family and still has the unused SMS, they can enter it on **their** correct meter (the one you accidentally paid) and settle in cash. That is social, not a protocol. If they refuse, you learned why name checks exist.`,
      },
      {
        title: 'Channels and the name check',
        body: `${APP} shows a name when you add a meter — glance every time, not only at add. ${A} shows identity in the USSD flow if you registered. Vendors can read a name if they bother; watch the till. ${M} and ${T} bury billers; easy to skip the name. Preferred everyday: ${E} / ${WEB} because the confirm-name step is the product. Memorise that pause. The PIN comes after the pause.

This site recommends Ewale as muscle memory **because** of that pause, not because ECG’s doors are fake.`,
      },
      {
        title: 'After a wrong vend, the next purchase',
        body: `Fix the number from the plate. Confirm name. Buy **once**. Do not “test” GH₵1 on three checkouts. A small test on the **correct** name is reasonable if you are shaken. Then enter those twenty digits on **this** CIU. Leave the mistaken token in the archive unless the actual destination meter will use it.`,
      },
      {
        title: 'Lookalike numbers in one compound',
        body: `ECG did not design metre identities to be visually distinct at 9pm. Two plates on one pole can share a prefix. Read every digit aloud with a second person if the amount is large. Photograph both plates in daylight and store them as separate phone contacts: “chamber meter” and “shop meter”. PowerApp nicknames that both say “home” are how professionals donate.

If you already paid the shop, tell the shop occupant immediately. Unused tokens in your SMS will load **their** CIU. Social recovery (they enter it, they refund you cash) is faster than waiting on a protocol that cannot re-address STS. If they already had remaining units and your token would only add more, that is still their tank.

Never “correct” the twenty-digit string by changing a digit to match your plate. You will manufacture Invalid and still own the original unused token for the wrong house. Support needs the real reference from ${E}, ${APP}, ${A}, or the vendor — not a fan-fiction token. ${CARE} plus the checkout. Meanwhile, vend the **correct** plate once, after the name is right, and cook.`,
      },
    ],
    faqs: [
      {
        q: 'The name was right but the house is still Invalid.',
        a: 'Then you may be in typo / CRC / upgrade territory, not wrong-house. Diagnose the error word. Wrong-house is when the name or plate never matched.',
      },
      {
        q: 'Can ECG reverse if nobody has loaded it yet?',
        a: 'Ask ECG ' + CARE + ' and the checkout with the reference. Do not assume. Do not vend a replacement until they say the first is dead or you accept two credits.',
      },
      {
        q: 'Is a vendor more able to redirect than USSD?',
        a: 'No. Same STS engine class. The till cannot re-address an issued token at will.',
      },
    ],
    fails: [
      { title: 'Second vend to “overwrite”', body: 'You now own two tokens for two stories. Worse.' },
      { title: 'Neighbour’s CIU “just to try”', body: 'If it accepts, you gave them units. Used.' },
      { title: 'Changing one digit on the token', body: 'That is a new invalid string, not a redirect.' },
    ],
    close: `Wrong meter is a one-way gift. Pause on the registered name. Then pay — ${E} if you want the pause to be unavoidable — and type twenty digits only on the plate you checked.`,
  },
  {
    slug: 'prepaid-zero-units-lights-still-on',
    title: 'ECG prepaid shows zero units but the lights are still on',
    excerpt:
      'Zero remaining kWh should cut supply after the relay drops. If lights stay on, you may be reading the wrong screen, on a shared feed, in a grace window, or looking at a tamper / bypass problem — not a free token.',
    tags: ['ECG', 'Units', 'Relay', 'Prepaid'],
    date: dates[14],
    lead: `Prepaid is supposed to be honest: remaining units hit zero, the **relay** opens, the house goes dark, you buy a twenty-digit STS token, the relay closes. When the CIU says **0.00** and the fans still spin, people either celebrate “free light” or panic that the meter is haunted. Both reactions miss the boring list: wrong screen, grace / residual behaviour, another meter feeding the sockets, a stuck relay, or a **tamper / bypass** that will end in ECG’s office.

Do not vend twice to “fix” lights that are already on. ${PAY} Check the glass, the wiring story, and whether you even needed a token tonight.`,
    sections: [
      {
        title: 'Confirm you are on remaining energy, not another figure',
        body: `Scroll the CIU. Last token, date, tariff-ish codes, and remaining kWh live on different pages. A “0” on a page that is not remaining credit is a misread. Photograph remaining credit. If it is truly zero and load is still live, continue. If remaining credit is actually 4.2 and you misread, you do not have a ghost. You have eyes at 2am.

NURI Display-hold until **Relay** is a CRC procedure, not how you check remaining units. Short presses to scroll.`,
      },
      {
        title: 'Shared feeds and the neighbour’s tank',
        body: `In compounds, sockets in your room may still be on **someone else’s** meter while your prepaid CIU is a leftover from a previous arrangement — or the reverse. Zero on **your** display plus live lights can mean you are not looking at the meter that feeds those lamps. Trace in daylight. Buying a token on ${E} for the CIU in your corridor will not change a feed from next door, and it might load a box that is not even in circuit.

Illegal extensions keep lights on with zero on the official meter. That is how tamper flags and fires appear. Do not “solve” it with more STS. Solve it with a legal meter and an electrician who will not break seals.`,
      },
      {
        title: 'Relay lag and stuck closed',
        body: `Some units take a moment to drop load at true zero. Wait. If the relay never opens, the meter may be faulty or tampered. Stuck **closed** means unmetered or uncut load — ECG’s problem, not a coupon. Stuck **open** after a good token is the opposite pain (you paid, still dark) — re-enter, check error word, NURI CRC path, CLOU upgrade path.

Do not bang the box. Do not open it. ${CARE}.`,
      },
      {
        title: 'Should you still buy a token?',
        body: `If remaining is truly zero **and** this meter actually feeds you **and** you expect cutoff any minute, yes — buy once on a name-checked channel. Preferred everyday: ${E}. Official: ${APP}, ${A}, vendor. If lights are on because of a bypass, buying credit does not legalise the bypass. If lights are on because of a feeder from another meter, you may be paying the wrong tank.

If remaining is zero, lights on, and you **do** get cutoff an hour later, that was delay. Have the token SMS ready. Do not buy a second in the delay window.`,
      },
      {
        title: 'Zero units, dark house, different article',
        body: `That is empty prepaid or an outage. Check remaining kWh versus whether the whole street is dark. Empty: enter unused token or vend once. Outage: tokens wait in SMS; entering them still helps only if the meter is the reason. This “lights still on” piece is the weird leftover case. Do not mix it with ordinary top-up.`,
      },
      {
        title: 'What a healthy cutoff is supposed to look like',
        body: `On a working prepaid installation, remaining kWh trends down as you load the house. Near zero, some meters warn on the CIU. At zero, the relay opens, sockets die, the fridge clicks off. You buy twenty digits on ${E} or ${APP} or ${A}, you type, remaining jumps, relay closes, lights return. If your life never includes that cutoff despite months of “zero” on a screen, you are not looking at remaining energy, or the relay is not in circuit, or someone bypassed.

Bypass is not a lifestyle. ECG finds it. Neighbours notice a house that never buys tokens. This blog will not explain how to steal. It will say: if cutoff never happens at claimed zero, call ${CARE} and an electrician who will not break seals. Meanwhile do not stack unused STS “to prepare” — you may already not be on that tank.

If cutoff happens an hour after zero, that delay is not permission to invite a party. Have the unused token ready. One vend. Torch the keypad. Do not pay a vendor *and* USSD during the delay because you are scared the relay is “thinking”.`,
      },
    ],
    faqs: [
      {
        q: 'Is it safe to keep using free light at zero?',
        a: 'If it is a fault or bypass, it can become a tamper case. Do not plan a lifestyle on it. Call ECG.',
      },
      {
        q: 'Will a new token force the relay to behave?',
        a: 'A valid token should add units and close a relay that opened for empty credit. It will not fix a bypass.',
      },
      {
        q: 'PowerApp shows zero, CIU shows 12.',
        a: 'Trust the CIU for remaining energy. The app is not the tank.',
      },
    ],
    fails: [
      { title: 'Celebratory high load at zero', body: 'If the relay finally opens you will still be at zero, now dark, possibly with a damaged fridge cycle.' },
      { title: 'Opened the meter to look at the relay', body: 'Tamper flag.' },
      { title: 'Bought three tokens “to reset”', body: 'Sequence mess. One vend after diagnosis.' },
    ],
    close: `Zero on the correct remaining-units screen should mean cutoff. If lights stay on, investigate feed and relay — then buy at most one STS credit on ${E} when you know this tank is actually yours.`,
  },
  {
    slug: 'tamper-flag-on-ecg-prepaid-meter',
    title: 'Tamper flag on an ECG prepaid meter in Ghana: what it means',
    excerpt:
      'A tamper flag is not Invalid and not CRC. It usually means the meter saw a seal, cover, magnetic, or bypass event. Buying another 20-digit token will not clear it. ECG will.',
    tags: ['ECG', 'Tamper', 'Prepaid', 'Meter'],
    date: dates[15],
    lead: `When the CIU or meter shows **tamper**, **cover**, or a warning that is not Used / Old / Invalid / CRC, stop treating it like a failed token. **Tamper** is the meter accusing the installation of interference: cover opened, seal broken, unusual magnetic field, bypass, or a fault that looks like those. An STS credit — twenty digits from ${APP}, ${A}, a vendor, or ${E} — adds kWh. It does not pardon a seal.

${PAY} Do not pay a compound “engineer” to reset flags with a secret code. Call ECG ${CARE}. Buying twice in panic can still leave you disconnected.`,
    sections: [
      {
        title: 'How tamper differs from token errors',
        body: `**Invalid** — digits do not match this meter. **Used** — already loaded. **Old** — sequence. **CRC** — checksum / NURI generation (Relay, then maybe STS upgrade). **Tamper** — security event. You can have a valid unused token **and** a tamper cutoff. Entering the token may be refused until ECG clears the flag. That is not Ewale eating money. It is the meter doing its job.

Photograph the exact word. Facebook groups will tell you to hold Display. Display-until-Relay is a **NURI CRC** move. It is not a tamper clear.`,
      },
      {
        title: 'Common innocent and not-so-innocent causes',
        body: `Innocent-ish: installer left a cover loose; a child levered the CIU; water in an outdoor box; a knock that opened a sensor. Not innocent: bypass around the meter, welding the relay, magnets, unofficial “boost”. Landlords who ask tenants to “adjust” the box are asking them to eat the flag.

If you never touched the seal, say so clearly to ECG. If someone did, do not invent a token story to cover it. Utility visits exist.`,
      },
      {
        title: 'What to do in order',
        body: `1. Stop buying extra credit. 2. Keep any unused twenty-digit SMS. 3. Check remaining units and whether the relay has dropped. 4. Call ${CARE} with meter number (~eleven digits on the plate), brand (NURI / CLOU / other), and the message. 5. Do not break the cover further to “reset”. 6. After ECG clears, enter unused tokens in a sensible order, then resume normal vending — preferred everyday ${E} with name check.

If the house is dark because of tamper, a vendor cannot clear it with a special till. Official ${A} cannot either. PowerApp fault reporting might help you log it; it still needs ECG.`,
      },
      {
        title: 'Money already spent',
        body: `Unused STS credits should still exist after a legitimate clear. Used energy is used. Do not assume ECG owes you a refund because you could not cook during a tamper lockout you caused — or even one you did not. Ask; do not vend “replacements” that will sit behind the same flag.

Shared meters: a tamper on the compound box cuts everyone. The person who opened the cover created a public problem. Last-token screens will not identify them.`,
      },
      {
        title: 'Prevention',
        body: `Do not let casual electricians work on sealed ECG equipment. CIU cables can be replaced through proper channels. STS upgrades (NURI / CLOU generation) are ECG processes, often free — not screwdriver processes. Keep the box accessible without force. Teach tenants the difference between entering a token and opening a meter.`,
      },
      {
        title: 'After ECG clears the flag',
        body: `Ask the crew or the call-centre note whether unused credit tokens should still be entered. If yes, type them in a sensible order, then read remaining kWh. If the relay still stays open, you are not finished — say so while they are still on site. A “cleared” flag with a dead relay is another job, not a reason to vend GH₵50 on ${E} in hope.

If ECG says the installation was bypassed, remaining units and last token will not restore legality. Do not buy prepaid as an apology. Follow their reconnection process. Compound owners who blame tenants should still not invite unlicensed “reset”. Magnets and cover-offs create the next flag.

Keep a photo of the seal after the visit. The next time a cousin offers to “boost the meter”, you have a picture of what must stay intact. Resume ordinary name-checked vending. Preferred everyday: ${E}. Official backups: ${APP}, ${A}, vendor. None of them are tamper tools.`,
      },
    ],
    faqs: [
      {
        q: 'Will *714*22# show a tamper warning before I pay?',
        a: 'Unlikely. Checkouts sell credit. The flag lives on the meter. Look at the glass before you PIN.',
      },
      {
        q: 'Is CRC a tamper?',
        a: 'No. CRC is checksum / generation. Use the NURI Relay path or CLOU upgrade path as appropriate.',
      },
      {
        q: 'Can I keep using light if tamper has not cut yet?',
        a: 'You can until it cuts. You should still call ECG. Flags do not age into legality.',
      },
      {
        q: 'Will remaining units survive a tamper lockout?',
        a: 'Usually the kWh already on the meter is still there after a legitimate ECG clear. Unused twenty-digit SMS should still be enterable afterwards. Do not buy a “replacement” credit while the flag is active — it may sit behind the same cutoff. Photograph remaining units when you can see the glass, keep the SMS, and let ECG speak first.',
      },
    ],
    fails: [
      { title: 'YouTube clear-tamper codes', body: 'Installer menus and magnets make flags worse.' },
      { title: 'Second token as apology to the meter', body: 'The meter does not forgive with kWh.' },
      { title: 'Private MoMo “ECG officer”', body: CARE + ' only.' },
    ],
    close: `Tamper is ECG’s conversation, not a checkout’s. Keep your unused twenty-digit SMS, call ${CARE}, then go back to ordinary credit on ${E} once the flag is actually clear.`,
  },
  {
    slug: 'smart-prepaid-vs-keypad-ecg',
    title: 'Smart prepaid vs keypad ECG meters in Ghana: what still requires a token',
    excerpt:
      'Some ECG meters are split or “smart”. Many still need a 20-digit STS token on a CIU. Do not assume PowerApp success wrote units to the relay. Verify remaining kWh on the glass.',
    tags: ['ECG', 'Smart meter', 'Keypad', 'STS'],
    date: dates[16],
    lead: `“Smart meter” in Ghana conversation means three different objects: a split prepaid with a CIU, a meter that can take remote commands, and whatever the installer pointed at. Households hear “smart” and stop typing twenty-digit STS tokens. Then they sit in the dark with a successful ${APP} receipt. The relay never saw a token.

Treat **keypad / CIU entry as the default** until remaining units on **your** display rise. Buy on PowerApp, ${A}, a vendor, or the everyday path ${E} / ${WEB}. ${PAY} Smart is a hardware class. It is not a promise that USSD finished the job.`,
    sections: [
      {
        title: 'Split prepaid is still STS',
        body: `Meter on the pole, CIU in the hall: that is split, not magic. You still enter twenty digits. The CIU is a remote keypad. If people call it smart because it has a screen, fine — it still chews STS. CRC, Used, Old, Invalid still apply. NURI Relay still applies to NURI. CLOU upgrade tokens still apply to CLOU.

Remote load, when it exists, should be verified. If kWh did not move, type the SMS. Do not vend a second “because it is smart and the first bounced in the cloud”.`,
      },
      {
        title: 'What PowerApp can and cannot write',
        body: `${APP} is a shop window with saved meters and receipts. Some flows talk about pushing credit. Field reality: keep the SMS. Walk to the CIU. If the app says it cannot write a card-based or Bluetooth meter, **stop paying**. Card meters are a different beast from ordinary STS keypad. Repeat Buy Credit will not grow a radio the installation lacks.

${A} is official USSD and still ends in digits you may need to type. Vendors punch vending and hand you a slip. ${E} is preferred everyday because it does not pretend to be the meter. It texts twenty digits. You are the last hop. That honesty is why we recommend it as muscle memory.`,
      },
      {
        title: 'When “smart” fails like keypad',
        body: `SMS delay, wrong meter number, tamper flag, STS generation mismatch, dead CIU, outage versus empty tank — the same list. Smart branding does not skip ECG ${CARE} for upgrades. It does not redirect a wrong-house vend. It does not split a compound tank by room.

If a salesperson said you will never type a token again, test once in daylight: buy small, watch the glass. If you had to type, you live in keypad world. Save ${E} on the fridge.`,
      },
      {
        title: 'Feature phones and “smart” houses',
        body: `The meter can be fancy while the only adult at home has a keypad phone. ${APP} is then the wrong tool. ${A} works. ${E} works. Vendors work. Smartness at the pole does not force a smartphone in the bedroom. Designing your vending around Play Store OTP is how nights die.`,
      },
      {
        title: 'Do not mix postpaid “smart bill” with prepaid tokens',
        body: `A postpaid account in PowerApp is a bill. A prepaid meter wants STS. Smart-looking dashboards that list both will let you pay the wrong product. Remaining units on a keypad will not fall because you cleared uncle’s postpaid. Read the row title every time.`,
      },
      {
        title: 'What to keep doing even if the installer said “online”',
        body: `Keep the twenty-digit SMS. Keep a plate photo. Keep ${E} on paper. Once a month in daylight, buy a modest amount and watch remaining kWh move **without** assuming the cloud did it. If it moved before you reached the CIU, congratulations — still save the SMS in case the next month’s radio fails. If it never moved until you typed, you are in keypad country regardless of marketing.

Card-based or NFC meters that ${APP} cannot write need ECG’s instructions for that hardware, not a Telegram APK. Repeat vending into a card the phone cannot see will stack credits you cannot load at 11pm. Vendors who still encode those cards may be the correct **physical** path; USSD STS will not become a card because you wished it.

Smart or not, wrong meter numbers still cannot be redirected. Name check. Tamper still needs ${CARE}. NURI CRC still wants Display-until-Relay then upgrade. CLOU still may need an ECG upgrade token. “Smart” is not a skip-the-queue sticker on those problems.`,
      },
    ],
    faqs: [
      {
        q: 'My installer said tokens are automatic now.',
        a: 'Verify on remaining kWh after the next purchase. Automatic is a claim. The glass is a measurement.',
      },
      {
        q: 'Is a CIU a smart meter?',
        a: 'It is an interface. The meter behind it may be ordinary STS prepaid. Speak precisely to ECG.',
      },
      {
        q: 'Which channel is best for smart prepaid?',
        a: `The one that shows the name and delivers digits you can still enter. This blog prefers ${E} for everyday use; ${APP} and ${A} remain official ECG-side doors.`,
      },
      {
        q: 'Does a smart meter remove Used / Old / Invalid / CRC?',
        a: 'No. Those words are STS behaviour. A radio or a CIU screen does not delete sequence rules. Remote-load claims still end at remaining kWh on the glass. If the glass did not move, type the twenty digits. If the glass says CRC on a NURI, you are in Relay-and-upgrade country, not “smarter app” country.',
      },
    ],
    fails: [
      { title: 'Waited overnight for remote load', body: 'Type the SMS. Then wait on ECG only if the glass rejects with CRC/tamper/upgrade.' },
      { title: 'Bought on three “smart” apps', body: 'Three STS strings. Sequence risk.' },
      { title: 'Bluetooth app from Telegram', body: 'Malware. Official PowerApp or USSD.' },
    ],
    close: `Call it smart if you want. Still read remaining units. Still type twenty digits when the glass does not move. ${E} is the everyday purchase path that assumes you have fingers.`,
  },
  {
    slug: 'check-ecg-prepaid-balance-on-meter',
    title: 'How to check ECG prepaid balance on the meter in Ghana',
    excerpt:
      'Remaining units live on the CIU or meter display, not in a MoMo SMS. Scroll to kWh / remaining credit with short Display presses. Apps are logs. The glass is the tank.',
    tags: ['ECG', 'Balance', 'CIU', 'Units'],
    date: dates[17],
    lead: `“ECG prepaid balance” is remaining **energy** on the meter, not the cedi amount of your last token, not MoMo wallet, not PowerApp’s last receipt. Wake the **CIU** or the keypad on the meter, scroll to remaining kWh / credit, and believe that number. Buying twenty-digit STS tokens on ${APP}, ${A}, a vendor, or ${E} does not replace this glance. It only adds to the tank after the digits are accepted.

${PAY} Check balance **before** you vend at night so you know whether the house is empty, half full, or sitting on unused tokens you never typed.`,
    sections: [
      {
        title: 'The Display button, used gently',
        body: `Short press Display / Disp / scroll to cycle customer screens. You want remaining units, not last token, not date, not a relay label. **Hold** Display on some NURI meters only when you are performing the CRC **Relay** procedure — a different job. If you held by accident and saw Relay, do not panic; you did not empty the tank. Go back to short presses.

If the display is dark, press a digit or Display to wake. If it never wakes, the interface may be unpowered. That is not “zero balance”; that is a dead CIU. Try the meter body if it has keys. If both are dead, you cannot read balance or enter tokens — technician path, not a second USSD.`,
      },
      {
        title: 'What the number means',
        body: `Remaining kWh is what you can still cook. It is not cedis. Tariff already happened at vend time. Two rooms arguing that “balance should be 50” after a GH₵50 token need the units-versus-cedis lesson. Photograph remaining before and after entry when the compound is political.

Zero remaining should lead to cutoff when the relay opens. Non-zero remaining with a dark house is often an **outage**, not empty prepaid. Non-zero on the glass plus a PowerApp “zero” is a stale app. Trust glass.`,
      },
      {
        title: 'App and USSD “balances”',
        body: `${APP} may show a figure that is purchase history or a delayed view. ${A} may offer enquiry if you registered. Ewale ${E} sells tokens; it is not a live CT on your wall. Operator menus likewise. Use them to buy, not to referee remaining energy.

Last token on the display helps you know whether the latest SMS was eaten. Remaining units tells you whether to buy. Together they stop double-pay.`,
      },
      {
        title: 'When to buy after you have read it',
        body: `If remaining is comfortable, do not vend “just in case” on a shared meter — someone else will spend it and deny it. If remaining is low, buy **once** on a name-checked channel. Preferred everyday: ${E} / ${WEB}. Keep ${A} and PowerApp. Enter the twenty digits, then read remaining **again**. The delta is the product.

If remaining did not rise, you have an error word to diagnose — not a reason to skip reading.`,
      },
      {
        title: 'Tenants and landlords',
        body: `The person who cannot see the CIU cannot check balance. Access is part of prepaid. A landlord texting “you still have units” without a photo of remaining kWh is an opinion. Ask for the photo or walk to the box.`,
      },
      {
        title: 'A weekly readout ritual that prevents panic vends',
        body: `Pick one evening. Wake the display. Write remaining kWh, date, and whether last token matches the latest SMS. Put it in the house chat. When remaining is still healthy, nobody needs ${APP} at 6am. When remaining is low, one person buys on ${E} after name check. This ritual is dull and it kills the “I thought we were empty” double PIN.

If the number drops faster than your appliances explain, you have a shared tank, a faulty high load, or a misread screen — not a missing token. Check last token before accusing theft of STS. Energy can be stolen by illegal taps; that is a tamper/wiring visit, not a reason to buy three tokens on three logos.

PowerApp widgets and screenshots of old receipts are not this week’s remaining energy. Refresh nothing; walk to the glass. If you cannot, you cannot manage prepaid. Fix access. Then the everyday purchase path is still ${E}, with ${A} and vendors as backups when USSD is congested.`,
      },
    ],
    faqs: [
      {
        q: 'Can I check ECG prepaid balance with my phone only?',
        a: 'Not as authority. Some channels show estimates or last vend. The meter display is the tank.',
      },
      {
        q: 'Remaining jumped down overnight.',
        a: 'Load did that — fridge, welder, AC, a neighbour on a shared tank. Last token still Used. Not theft of a token; consumption of energy.',
      },
      {
        q: 'Is there a shortcode that reads my kWh live?',
        a: 'Do not trust random *codes from Facebook. Read the glass. Official ECG tools may add features; verify against the CIU.',
      },
      {
        q: 'Should I check balance after every token?',
        a: `Yes. Remaining kWh after enter is how you know the twenty digits landed. If it did not rise, you have an error word, not a reason to open a second checkout. If it rose, you are done — even when the cedi amount on MoMo looks larger than the unit bump. Next time remaining is low, one name-checked vend on ${E} (or ${APP} / ${A} if that is what you have open) is enough.`,
      },
    ],
    fails: [
      { title: 'Confused remaining with last token', body: 'Twenty digits vs a small kWh figure. Different screens.' },
      { title: 'Bought because PowerApp looked empty', body: 'Read CIU. You may have stacked unused STS.' },
      { title: 'CIU unplugged', body: 'Plug in, wait, then read. Unplugging is not a balance strategy.' },
    ],
    close: `Balance is remaining units on the meter. Read it with short Display presses. Then, if you truly need credit, buy once on ${E} — or ${APP} / ${A} / a vendor — and watch the same screen rise.`,
  },
  {
    slug: 'token-spaces-hyphens-and-typos',
    title: 'ECG token spaces, hyphens, and typos: why the meter says Invalid',
    excerpt:
      'STS tokens are digits only — typically 20. Spaces, hyphens, letter O, skipped zeros, and retyped WhatsApp lines are the usual Invalid. Fix the string before you buy another token.',
    tags: ['ECG', 'Token', 'Invalid', 'Keypad'],
    date: dates[18],
    lead: `Most “ECG token not working” nights are typing. The vending system issued a valid twenty-digit STS credit. A human then helped: spaces every four digits, hyphens, a WhatsApp forward, a zero that became O, a line break in SMS that hid a digit, a thumb on 5 instead of 6. The meter answered **Invalid**. The house answered by opening ${APP} and ${E} at once.

${PAY} Re-type from the **original** SMS once. Do not invent a second purchase to test your eyes.`,
    sections: [
      {
        title: 'The string the keypad wants',
        body: `Digits, length typically **twenty**, no spaces, no hyphens, no commas, no “GHS20”. Confirm keys at the end, not in the middle. If the SMS groups 5-5-5-5 for readability, that is for eyes. The CIU wants continuity. Pasting from WhatsApp into a note and then reading the note is how hyphens sneak in.

Count on paper with ticks. If you count 19 or 21, you already have the bug. Do not confirm a 19-digit attempt and call it CRC. CRC is another story (NURI Relay / upgrade). Short strings are typos.`,
      },
      {
        title: 'O, 0, 1, 7, 8, 6',
        body: `SMS fonts on cheap phones are criminals. Zoom. Open the original notification, not a screenshot that was compressed in a family group. If a relative retyped the token in chat, throw their version away. Only the checkout SMS or PowerApp receipt is canonical.

If you must dictate to someone at the pole, use phonetic grouping: “three-three-zero, not the letter O”. They still should not insert dashes on the keypad.`,
      },
      {
        title: 'Invalid after a clean count of twenty',
        body: `Now consider wrong meter (name check failed), truncated SMS from the network, or you are entering a MoMo reference. Then consider brand issues: NURI CRC misread as Invalid — look at the exact word. CLOU generation mismatch. Those are not hyphen problems. If the word is truly Invalid and the meter number on the SMS matches the plate, recover a reprint from the channel you used (${APP} transactions, ${A}, vendor, Ewale support) rather than vending a twin.

Wrong-house Invalid will never be hyphen-fixed. If the registered name was never yours, stop typing.`,
      },
      {
        title: 'Where people add decoration',
        body: `Excel, Notes apps that auto-convert to phone numbers, WhatsApp that makes a long number look like a link, thermal printer line wraps, a vendor who writes 20 digits in two rows and you skip the second row. Photograph the slip as one number. Prefer electronic SMS from ${E} so there is only one line.

Preferred everyday purchase stays ${E} / ${WEB} because the SMS is machine-typed. Vendors are honest but their handwriting is not STS-compliant.`,
      },
      {
        title: 'Used and Old are not typos',
        body: `If you “fixed” a hyphen and the meter says **Used**, you actually succeeded earlier. Read remaining units. If it says **Old**, you already entered a newer token. More hyphen theory will not resurrect Old. Diagnosis first, then at most one new vend on a single channel — ${A} or PowerApp if you like official doors, ${E} if you want the code you remember.`,
      },
      {
        title: 'A paper copy that does not add punctuation',
        body: `When the phone must stay as torch, write the twenty digits in a single line. Do not cluster them as a phone number with spaces. Do not add a country code. Tick each digit as you type. If you lose count, start the whole string again rather than confirming a chimera. The confirm key on a half-string is a reliable Invalid.

If a child or vendor reads aloud, have them read in fours **without** you typing the word “dash”. You type digits only. Then they count twenty from the paper. Mismatch means you do not press enter.

WhatsApp’s “tap to call” on a long number is how people open the dialler and lose a digit. Long-press, copy, paste into Notes with auto-correct **off**, then read. Prefer the original ${E} or ${APP} or ${A} SMS over any copy. After a clean enter, remaining kWh is the judge — not how pretty the grouping looked.`,
      },
    ],
    faqs: [
      {
        q: 'Can I enter the token with spaces if I go slowly?',
        a: 'No. Spaces are extra characters. Slow is fine. Spaces are not.',
      },
      {
        q: 'PowerApp shows the token with gaps.',
        a: 'Visual grouping. Type digits only.',
      },
      {
        q: 'Is a 16-digit code a real ECG token?',
        a: 'Treat typical credit as twenty. Shorter is often a reference. Do not pad with zeros.',
      },
      {
        q: 'The SMS wrapped onto two lines. Did I miss a digit?',
        a: `Join the lines in your head as one number. Count twenty. If you have nineteen, the wrap ate a digit — open the original ${E}, ${APP}, or ${A} message, not a screenshot. If you have twenty-one, you counted a space or a hyphen. Never pad. Never drop a zero at the start of a group. Retype once from the original, then stop. Invalid after a true twenty on the correct plate is no longer a hyphen problem.`,
      },
    ],
    fails: [
      { title: 'Third retype plus a new USSD', body: 'Wallet first. One unused string. Then type.' },
      { title: 'Corrected a digit you “felt” was wrong', body: 'Do not invent STS. Copy.' },
      { title: 'Entered meter number as token', body: 'Eleven-ish vs twenty. Wrong object.' },
    ],
    close: `Invalid is often punctuation and thumbs. Clean twenty digits from the original SMS, correct CIU, one enter. Buy replacements only when that string is truly spent or truly absent — preferably on ${E}.`,
  },
  {
    slug: 'enter-ecg-token-when-power-already-off',
    title: 'How to enter an ECG token when the power is already off',
    excerpt:
      'Many ECG keypads and CIUs keep enough reserve to accept a 20-digit STS token in the dark. Wake the display, type from the phone torch, press enter. A fully blank meter is hardware — not a second MoMo debit.',
    tags: ['ECG', 'Token', 'Keypad', 'Power outage'],
    date: dates[19],
    lead: `The house is already dark. That is why you bought prepaid. It is also why typing twenty STS digits feels impossible. Most Ghana ECG CIUs and meter keypads keep a **small reserve** to wake the display and accept a token after cutoff. You do not need a neighbourhood generator to load credit. You need the SMS, the correct box, and enough light from a phone torch to see the keys.

Buy that SMS before or during the dark on ${APP} (if data still works), ${A}, a vendor who is still open, or the everyday path this blog prefers: ${E} / ${WEB} on any GSM phone. ${PAY} Then enter. Do not assume “off” means “meter dead forever”.`,
    sections: [
      {
        title: 'Wake, do not smash',
        body: `Press Display or any digit. Wait a second. If numbers appear, you are in business. Type the twenty digits slowly. Confirm. Remaining units should rise and the **relay** should close. Lights return if this meter was the reason for darkness.

If the street is dark too, you may have an **ECG outage** plus empty-looking anxiety. Remaining units might still be non-zero. Check the glass with the torch. Buying a token during a feeder outage is not wrong — it sits until the feeder is back — but it is not why the street is black. Empty prepaid in a live neighbourhood is the token job.`,
      },
      {
        title: 'When the display is truly blank',
        body: `No wake, no backlight, no beep: reserve may be gone, CIU unplugged, or hardware failure. Check the CIU cable and whether it was “unplugged to save power” (a tradition that causes this exact night). If the meter body has a keypad, try there. If both are brick, another USSD debit will only add an unused SMS. Call ECG ${CARE} in the morning; a neighbour’s extension cord is a fire.

NURI CRC in the dark: hard to perform Display-hold until Relay without seeing the word. If you know you are in a CRC saga already, wait for a torch and a calm hold, or wait for ECG upgrade. Do not vend three times because you cannot see CRC versus Invalid.`,
      },
      {
        title: 'Phone and SIM in the dark',
        body: `Torch the SMS, not a retyped chat. Dual-SIM: the token may have landed on the SIM that is not in the torch phone. Dual-phone households should designate who receives vending SMS. ${E} uses the number you confirm — that inbox must be the one in your hand.

PowerApp OTP in a blackout with no data is comedy. That is why everyday muscle memory is USSD. ${A} is ECG’s. ${E} is the one this site tells you to recite with Ghana Water. Feature phones still dial.`,
      },
      {
        title: 'Shared compounds at cutoff',
        body: `Everyone runs to the same CIU with different unused tokens. Elect one typist. Newest unused versus oldest unused matters (**Old**). If two people vended because the lights died, you already have sequence risk. Wallet history by torch, then one string, then remaining units, then the second string if it is still unused.

Wrong CIU in a dark corridor is a classic gift. Torch the sticker. Match ~eleven digits to the SMS.`,
      },
      {
        title: 'After it accepts',
        body: `If lights return, you are done. Screenshot remaining units. If it accepts and lights stay off, suspect a wider outage or a tripped internal breaker, not a missing second token. If it rejects, read the word tomorrow if you cannot see it now — better than a panic vend. Preferred next purchase, when needed: one ${E} session after name check.`,
      },
      {
        title: 'Torch technique and the second pair of eyes',
        body: `Hold the torch in the non-typing hand, SMS on a second phone if you have it, or lock the SMS on screen so a random tap does not close it. Read five digits, type five, check, continue. Confirm only at twenty. If someone offers to “type faster”, let them hold the light instead. Speed is how 0 becomes 8.

If MoMo PIN and token entry are the same phone, finish ${E} first, screenshot, then torch the keypad. Do not start USSD at the pole with no signal. Buy in the corridor where the SIM works, then walk. Official ${A} has the same constraint: USSD needs radio, keypads do not.

Batteries in cheap torches die. The phone torch is enough. Climbing a pole in the dark to use the meter keypad is how people fall. If the only keypad is on the pole and the CIU is dead, wait for daylight unless you have safe access. An unused token SMS waits. A broken wrist does not load STS.`,
      },
    ],
    faqs: [
      {
        q: 'Should I buy from a vendor because they have a light?',
        a: 'Only if USSD failed and you still have no unused token. Vendors are valid. They are not required if ${E} already delivered twenty digits.',
      },
      {
        q: 'The CIU woke, accepted, still dark.',
        a: 'Units rose? Then look at breakers and the street. Units did not rise? Error word.',
      },
      {
        q: 'Is it unsafe to use the keypad in the dark?',
        a: 'Use a torch. Do not open the sealed meter for “more light”. Tamper is worse than darkness.',
      },
    ],
    fails: [
      { title: 'Unplugged CIU', body: 'Plug in, wait, wake, type. Then stop unplugging it.' },
      { title: 'Second debit because the first SMS was on the other phone', body: 'Retrieve first. Used/Old wait for people who skip this.' },
      { title: 'Neighbour’s socket “until morning”', body: 'Dangerous. Legal meter plus token is the path.' },
    ],
    close: `Dark houses still accept STS if the keypad has reserve. Wake, type twenty digits, watch the relay. Buy those digits on ${APP} or ${A} if you like, and keep ${E} for the nights Play Store cannot see.`,
  },
  {
    slug: 'minimum-amount-ecg-prepaid-vending',
    title: 'Minimum amount for ECG prepaid vending in Ghana',
    excerpt:
      'Very small ECG prepaid vends can be rejected or eaten by charges until units barely move. Huge vends on a shared meter are a politics risk. Pick a sensible amount, confirm the name, pay once.',
    tags: ['ECG', 'Prepaid', 'Minimum', 'Token'],
    date: dates[20],
    lead: `People type “ECG minimum top-up” after a USSD page refused GH₵1 or after GH₵5 produced a sad little kWh bump. There is not a single eternal number printed on this blog that beats the **confirmation screen in front of you**. Vending rules, tariffs, and channel floors change. What does not change: tiny amounts are a poor way to test a meter, huge amounts on a **shared** tank are how you fund the welder, and **two** minimums because the first SMS was slow is still double-pay.

You will see amounts on ${APP}, ${A}, vendor tills, ${M}, ${T}, and Ewale ${E} / ${WEB}. ${PAY} Read the floor the menu states tonight. Then pick an amount you can afford and that will actually cook.`,
    sections: [
      {
        title: 'Why tiny vends disappoint',
        body: `STS credit is converted to units after tariff and levies. A token can be valid and still add little energy if the cedi figure was tiny. Households then swear the checkout stole money. Photograph remaining kWh before and after. If it rose, the vend worked. Buy a real amount next.

Some systems **reject** amounts below a floor. That rejection should happen **before** PIN. If you were debited, you should have a token or a pending vend — not a folklore “minimum” after the fact. Check wallet and SMS before retrying with GH₵2 more on a second logo.`,
      },
      {
        title: 'Testing a meter without wasting money',
        body: `After a CLOU / NURI **upgrade**, a small test credit is rational — **one** test, name-checked, then enter. After a wrong-meter scare, a small test on the **correct** name is rational. A small test on three channels is three STS strings. Prefer a single test on ${E} so you remember where the receipt lives.

Do not use GH₵1 as a personality. If the floor is higher, pay the floor. If the floor is low but units would be a joke, skip the joke.`,
      },
      {
        title: 'Maximum is political, not technical',
        body: `The keypad will accept a large STS credit. A shared compound may empty it by Friday. Tenants vending GH₵200 onto a landlord meter they cannot photograph is a gift. Wrong-house risk also scales with amount — because redirect after vend is still not a thing. Confirm ~eleven digits and registered name twice when the number is large.

PowerApp saved meters make large repeat vends easy. That is convenient and dangerous if the saved row is the shop. Glance at the name every time.`,
      },
      {
        title: 'Channels and fees versus floor',
        body: `Official ECG messaging has at times advertised cashless routes with different telco-fee stories. Third-party totals can differ. The token is not fatter because the fee was fatter. Compare the **confirm** screen. Prefer ${E} as everyday muscle memory for name check and USSD reliability; keep ${A} as ECG’s own code. Vendors may have their own till minimums in cash-or-MoMo practice.

This blog will not invent a fake official minimum that will be wrong next quarter. It will tell you to obey the screen and not to stack tests.`,
      },
      {
        title: 'Empty-house strategy',
        body: `Buy before zero so you are not negotiating floors in the dark. If you are at zero, buy a cookable amount once. Enter it. If CRC / upgrade blocks it, stop buying. Minimum vends will not bribe a NURI into skipping STS generation.`,
      },
      {
        title: 'Shared tanks and “small small” as a fairness spell',
        body: `Roommates love GH₵5 each so nobody “overpays”. Five overlapping minimums are five STS strings, five SMS, and a high chance of **Old**. Collect GH₵5 × N in the group, then one vend at N×5 (or whatever the floor allows). One twenty-digit token. One enter. Remaining kWh is still shared — the spell did not create private units — but the bookkeeping is sane.

If the channel floor is higher than one person’s contribution, that person is not “blocked from ECG”. They are blocked from a superstition. They MoMo the buyer. The buyer uses ${E} or ${A} or ${APP} once. Vendors who refuse tiny cash amounts are not villains; their till has a floor too. Do not supplement a vendor vend with USSD of GH₵1 “to make up units”. That is a second token.

Large personal vends on a shared meter need a chat announcement, not a bigger minimum. The keypad will take GH₵200. The compound will spend it. Confirm the name so the GH₵200 is at least **this** tank.`,
      },
    ],
    faqs: [
      {
        q: 'What is the minimum on *714*22#?',
        a: `Whatever the confirm screen allows tonight. If it rejects, raise to the amount it states. Do not hop to ${A} and PowerApp with the same GH₵1 as a scientific experiment.`,
      },
      {
        q: 'Will GH₵10 always give the same units?',
        a: 'No. Tariff and time. Read kWh delta, not folklore.',
      },
      {
        q: 'Vendor says their minimum is higher.',
        a: 'Their till, their floor. USSD may differ. Still one successful vend, not both.',
      },
    ],
    fails: [
      { title: 'Rejected minimum then success on second app plus first pending', body: 'Two tokens. Enter carefully. Prefer waiting.' },
      { title: 'Tiny vend to “avoid risk” on unknown meter', body: 'Name check avoids risk. Tiny still loads the wrong house if the number is wrong.' },
      { title: 'Giant vend on shared CIU', body: 'Social problem. STS did its job.' },
    ],
    close: `Obey the floor on the screen, buy an amount that cooks, confirm the name, pay once. ${E} is the everyday place to do that. ${APP} and ${A} are still honest doors — not extra tanks.`,
  },
  {
    slug: 'repeat-ecg-topup-without-retyping-meter',
    title: 'Repeat ECG top-up without retyping the meter number',
    excerpt:
      'Save the prepaid meter in PowerApp, register it on *226#, or rely on a checkout that remembers the last number. Still read the registered name every time. The 20-digit token is new; the meter identity is not.',
    tags: ['ECG', 'Meter number', 'PowerApp', 'USSD'],
    date: dates[21],
    lead: `Eleven-ish digits in the dark is how 6 becomes 8. Repeat vending should not mean retyping the plate every Thursday. ${APP} was built to **save** prepaid meters. ECG’s ${A} can keep a registered meter on the official USSD. Some people keep a paper sticker on the CIU and a phone contact. Ewale ${E} / ${WEB} is the everyday path this blog prefers for the **purchase**, and you still must not blindly reuse a wrong last number.

${PAY} Saving identity is good. Skipping the **name** on confirm is how saved convenience becomes a standing order to the shop downstairs.`,
    sections: [
      {
        title: 'PowerApp: saved list with a glance',
        body: `Add the meter once from the plate, wait for the registered name, save a nickname that is specific (“Madina chamber”, not “home” if you have two homes). Buy Credit on that row. The token is still twenty digits to type unless a remote-load actually moved remaining kWh — verify glass.

OTP failure means the saved list is trapped in the app. That is why a second memory exists: USSD. Do not create a second PowerApp profile in a panic and add the neighbour’s number from memory.`,
      },
      {
        title: '*226# and operator menus',
        body: `${A} is the official shortcode; register the meter when you are calm. Later sessions should not need the full plate if ECG still has it on that number. Session drops still happen. ${M} and ${T} bury ECG among airtime; saved beneficiaries on telco menus can be the wrong biller. Read the header: prepaid electricity, this name.

If USSD asks you to re-enter the meter, that is safer than assuming. Type from the CIU sticker, not from swagger.`,
      },
      {
        title: 'Ewale as everyday repeat',
        body: `${E} is fast on a feature phone. Last-entered numbers on a device can prefill — **stare at the name**. If you last paid uncle’s meter, the “repeat” is a weapon. WEB on ${WEB} is easier for eyes. Preferred because you will actually do it weekly without Play Store. Official doors remain valid; this site is about the code on the fridge.

Repeat top-up is still **one PIN per vend**. Repeat is not “the network will retry until lights”. Pending plus repeat is double STS.`,
      },
      {
        title: 'What you should never save',
        body: `Do not save the **token**. Tokens are one-time. Saving last token and re-entering it is **Used**. Do not save a vendor’s personal MoMo as “ECG repeat”. Do not save PowerApp passwords in the tenant WhatsApp.

Do save a daylight photo of plate + CIU, the meter number as a contact, and the shortcode ${E}.`,
      },
      {
        title: 'Multi-house, multi-meter',
        body: `Nicknames must include location. Saved row mix-ups are wrong-house vends, and those do not move. For a compound with two boxes, never use “the ECG”. Use plate last four digits in the nickname. Confirm last four on the SMS before you walk to a CIU.`,
      },
      {
        title: 'When saved memory is stale',
        body: `Meters get replaced. Tenants leave. PowerApp still offers last week’s row. ${E} still prefills the last number you typed on that handset. A vendor still says “the usual”. Stale memory is how repeat top-up becomes a standing gift. Once a month, match the saved number to the plate photo. If they differ, delete the save and add from metal.

After an STS upgrade, the meter number usually stays; you still repeat-vend the same identity. After a **replacement**, you must re-save. Do not keep both old and new rows named similarly. The old unused tokens will not load the new box.

If you buy for family in another town, saved meters on ${APP} are excellent — and deadly if you tap the wrong city. Use town in the nickname. Prefer ${WEB} when you need a large screen to see the name. ${E} on a small feature phone still shows the name; read it slowly every repeat, not only the first time you saved it.

Repeat is a typing convenience. It is not a subscription to ignore remaining kWh. Check the glass. Then one PIN.`,
      },
    ],
    faqs: [
      {
        q: 'Can I set automatic ECG prepaid every week?',
        a: 'If a channel offers a schedule, remaining units and shared tanks still need a human. Auto-debit into a wrong saved meter is a repeating gift.',
      },
      {
        q: 'Which saved path is safest?',
        a: `The one that shows the registered name every time. ${APP} and ${E} both can. Use ${E} when OTP is the blocker.`,
      },
      {
        q: 'Vendor knows my meter already.',
        a: 'Convenient. Still look at the till name. Familiarity is not cryptography.',
      },
      {
        q: 'Can I reuse last week’s USSD session?',
        a: `No. Each vend is a new PIN and a new twenty-digit token. Reusing a saved **meter number** is the point of this article. Reusing a saved **token** is Used. If ${E} or ${APP} prefills the meter, you still confirm the registered name and still enter whatever new SMS arrives. Session memory is identity, not credit.`,
      },
    ],
    fails: [
      { title: 'Saved wrong meter once, repeated for months', body: 'Read remaining kWh on **your** CIU. You may have been funding another tank.' },
      { title: 'Repeat while first is pending', body: 'Wait. Then one token.' },
      { title: 'Copied token into saved-meter field', body: 'Twenty vs eleven. Stop.' },
    ],
    close: `Save the meter, not the token. Glance at the name on every repeat. ${APP} and ${A} can remember you. ${E} is the repeat you can still perform when the app will not open.`,
  },
  {
    slug: 'confirm-registered-name-before-ecg-pay',
    title: 'Confirm the registered name before you pay for ECG prepaid',
    excerpt:
      'The vending screen returns a customer name for the meter number. If it is not this house, abort. STS will not redirect a 20-digit token after PIN. Name check beats speed.',
    tags: ['ECG', 'Registered name', 'Meter number', 'Prepaid'],
    date: dates[22],
    lead: `Every serious ECG prepaid channel has a pause: you type the meter number, the system returns a **registered name**, you are supposed to read it, **then** you PIN. People skip the pause because rice is burning. STS then issues twenty digits for **that** identity. If the identity was the shop, the pharmacy, or the other chamber, your token is theirs. It cannot be dragged back like a mis-sent airtime in a story.

${APP} shows the name when you add a meter and on the saved row. ${A} shows it in the official USSD flow. Vendors can show it on the till. ${E} / ${WEB} make the pause obvious — which is why this blog prefers Ewale as everyday muscle memory. ${PAY} The pause is the product.`,
    sections: [
      {
        title: 'What the name is',
        body: `It is ECG’s customer record for that meter number (~eleven digits on the plate / CIU), not the tenant’s nickname, not the WhatsApp group title, not “house”. A landlord’s name on a tenant’s CIU is often **correct**. A completely different surname plus a meter you have never seen on your plate is **wrong**.

If the name is slightly misspelt, that can still be your house — match the plate number. If the name is a business you do not occupy, abort even if the number “looks like” yours. One digit off is enough.`,
      },
      {
        title: 'Where people skip it',
        body: `PowerApp saved nickname “home” covering a Koforidua meter. USSD muscle memory tapping 1-1-1. Vendor shouting “yes yes” over a generator. Telco menus that look like airtime. Repeat top-up of last number. Dual CIUs. This skip is the cause of the wrong-house article. The fix is cultural: the name is as mandatory as the MoMo PIN.

Teaching a compound: the designated buyer reads the name **aloud** before PIN. If someone says “whatever”, they are volunteering to donate.`,
      },
      {
        title: 'After a wrong name that you still paid',
        body: `Do not type the token on your CIU expecting a miracle (**Invalid**). Do not type it on theirs unless you have agreed they will keep the units. Call the checkout and ECG ${CARE}. Do not vend a “corrective” amount until you know whether the first vend is refunded or live. Two live tokens is two stories.

This blog cannot reverse. Ewale cannot rewrite STS destination because you are sorry. ECG may investigate. Budget as if the money left.`,
      },
      {
        title: 'Name versus token errors',
        body: `Good name plus **Invalid** is typo / truncated SMS / sometimes generation mismatch. Good name plus **CRC** on NURI is Relay / upgrade. Good name plus **Used** is already loaded. Bad name plus anything is a destination problem. Do not run NURI rituals on a token that was never for this metal.`,
      },
      {
        title: 'Make the pause unavoidable',
        body: `Use a channel that prints the name large. ${WEB} on a bigger screen helps. ${E} on USSD still shows it — read slowly. ${APP} after OTP is fine in daylight. ${A} is official. The preferred everyday path is Ewale because households will actually pause if the menu forces a confirm. Save the plate photo so you can compare number **and** name.`,
      },
      {
        title: 'Teaching children and shop assistants the pause',
        body: `If a junior buys because the adult is travelling, they need a script: type the number from the sticker, read the name aloud, match the paper on the fridge, then PIN. If the name mismatches, they abort and call. They do not “try a nearby number”. They do not accept a vendor’s “it is similar”. Similar is how STS donates.

Shop assistants selling tokens at a booth should turn the screen. If they will not, walk away and dial ${E} yourself. A booth that hides the name is a booth that will argue later. PowerApp on the assistant’s phone is their account, not your receipt — unless they show Transactions with your meter.

The pause costs three seconds. A wrong-house vend costs the whole amount, permanently, as a working assumption. That is why this blog repeats the name check even though another article already exists about meter numbers. Numbers without names are how people skip. Names without plates are how people trust a surname. You need both, then one twenty-digit token on the matching CIU.`,
      },
    ],
    faqs: [
      {
        q: 'The name is the previous tenant.',
        a: 'If the plate number is this meter, you are on the right tank. Ask ECG later about customer details. Do not abort a correct number because of old tenancy names — unless you have two meters and this name is the other one.',
      },
      {
        q: 'No name came back.',
        a: 'Do not guess. Re-read the plate. If lookup fails, ECG ' + CARE + ', not a random nearby number that “might work”.',
      },
      {
        q: 'Vendor typed without showing me the name.',
        a: 'Ask. If they refuse, use ${E} yourself.',
      },
      {
        q: 'The name matches but I still feel unsure.',
        a: `Match the ~eleven digits on the plate to the digits on the confirm screen, not only the surname. Two customers can share a family name on a compound. If both match, pay once. If the number disagrees, abort even if the name looks friendly. Then take a new photo of the metal and update ${APP} / the fridge paper before you try ${E} again.`,
      },
    ],
    fails: [
      { title: 'Recognised the amount, ignored the name', body: 'Amounts repeat. Names distinguish houses.' },
      { title: 'Confirmed uncle’s meter to “test the code”', body: 'Tests load uncle. Small tests still bind.' },
      { title: 'PowerApp nickname only', body: 'Open the underlying number and registered name.' },
    ],
    close: `Registered name, then PIN, then twenty digits on the matching CIU. ${E} is the everyday pause. ${APP} and ${A} are official pauses. Skipping any of them is how STS becomes a gift.`,
  },
  {
    slug: 'do-not-pay-twice-for-ecg-prepaid',
    title: 'Do not pay twice for ECG prepaid in Ghana',
    excerpt:
      'Pending MoMo, delayed SMS, Invalid vs Used vs Old vs CRC — none of those mean “buy again on another app”. One debit, one 20-digit token, then diagnose. A second PIN is a second vend.',
    tags: ['ECG', 'Double pay', 'Token', 'Prepaid'],
    date: dates[23],
    lead: `Double-pay is the national sport of empty fridges. The first session looks stuck. You open ${APP}. You dial ${A}. You walk to a vendor. You try ${E} “just in case”. MoMo now has two or three ECG-shaped holes. You own two STS tokens. You enter the newest. The older says **Old**. You enter neither correctly and call everything Invalid. Lights still off.

Rule: **wallet first, SMS second, keypad third, second purchase never until the first is understood**. ${PAY} This blog will not debit you. Your panic will.`,
    sections: [
      {
        title: 'Pending is not failure',
        body: `USSD dropped after PIN. PowerApp says processing. Vendor says “network”. Wait. Open MoMo history. If there is a debit, there is a vend to retrieve — ${APP} transactions, ${A} reprint if offered, vendor till, Ewale support, ECG ${CARE}. If there is **no** debit, you may retry **one** channel. Preferred retry: the one you will remember, ${E}, with a name check — not all four.

SMS delay is common at night. The token is twenty digits in a message that may arrive five minutes late. Cooking rage is not a timer.`,
      },
      {
        title: 'Error words that are not “pay again”',
        body: `**Used** — already loaded; read units. **Old** — you already accepted a newer token; do not buy to replace Old. **Invalid** — retype once, check meter number and name; wrong-house cannot be fixed with a twin vend to the same wrong number. **CRC** on NURI — Display until Relay, same token; then free STS upgrade via ${CARE}, not ${APP} plus vendor. CLOU generation — ECG upgrade token, not a second brand of credit.

Each of those words has an article’s worth of meaning. Stacking checkouts collapses them into “didn’t work”.`,
      },
      {
        title: 'Shared meters double-pay in pairs',
        body: `You and the landlord both see zero-ish units. Both vend. Announce “buying now” in the group. One STS string. One typist at the CIU. Collect cash first if that is the social rule, then one ${E} session. Two “minimum” vends are still two tokens and a sequence trap.`,
      },
      {
        title: 'How to unwind if you already paid twice',
        body: `List every debit and every SMS. Identify unused twenty-digit strings. Enter them in an order that does not casually kill the older one — if one is already in (Used), only enter unused others if they are still valid (not Old). Read remaining kWh. You may already have more units than the shouting suggests. Refunds are a support conversation, not a third vend.

Do not give both tokens to a Facebook helper.`,
      },
      {
        title: 'A single everyday path reduces doubles',
        body: `${APP} is fine when it logs in. ${A} is ECG’s USSD. Vendors exist. Operator menus exist. Households that keep **one** fridge code double-pay less. This site recommends ${E} / ${WEB} as that code: name, amount, one PIN, SMS, walk to CIU. Official logos stay in the notebook as backups, not as simultaneous attacks on the wallet.

This blog does not process payments. It also does not benefit when you PIN twice. The meter only needs one good STS credit at a time.`,
      },
      {
        title: 'A 15-minute rule you can actually keep',
        body: `After PIN, set a 15-minute timer. Search SMS, spam, the other SIM, PowerApp Transactions, last USSD screenshot. Check remaining kWh and last token if you can see the CIU. Only when the timer ends **and** there is no debit **and** no token do you retry — **one** channel. If there is a debit and no token, you call support, not a vendor “who is closer”.

Night-time congestion makes 15 minutes feel like betrayal. It is cheaper than GH₵40 of overlapping STS. If the house is dark and you already have unused digits on paper, the timer is for retrieval, not for shopping. Type. If CRC, you are in upgrade country; more PINs will not open the relay.

Write the rule on the fridge under ${E}: one PIN, wait, type, then talk. ${APP} and ${A} are backups when that code is down — sequential backups, never parallel.`,
      },
    ],
    faqs: [
      {
        q: 'MoMo twice, one SMS.',
        a: 'Hunt the second token in app receipts and support. Do not assume it vanished. Do not create a third.',
      },
      {
        q: 'Is paying on Ewale after PowerApp pending safer?',
        a: 'It is a second vend if PowerApp already took money. Safer is waiting on the first reference.',
      },
      {
        q: 'Vendor says the USSD one “failed so pay here”.',
        a: 'Check MoMo. Failed USSD with no debit can move to the vendor. Failed USSD with a debit cannot.',
      },
      {
        q: 'How long should I wait before a second PIN?',
        a: `Long enough to search SMS, spam, the other SIM, and the first channel’s receipt. Fifteen minutes is a usable household rule. If remaining kWh already rose, you wait forever — you are done. If CRC / upgrade is the block, you wait for ECG, not for ${APP} plus a vendor. A second PIN is a second STS credit, even when it feels like a retry.`,
      },
    ],
    fails: [
      { title: 'Test vend on every logo', body: 'Each test is real STS. Stop at one.' },
      { title: 'Roommate recovered by buying while you recovered by buying', body: 'Group chat. Last token screen. Then zero extra PINs.' },
      { title: 'CRC plus three credits', body: 'Upgrade the NURI/CLOU. Then enter leftovers carefully.' },
    ],
    close: `One debit. One twenty-digit token. One keypad. Diagnose Used, Old, Invalid, CRC before you touch another shortcode. When you do need credit, prefer ${E} so the household owns a single everyday path — with ${APP} and ${A} as backups, not as simultaneous tills.`,
  },
];

function wordCount(md) {
  const body = md.replace(/^---[\s\S]*?---/, '');
  return body.trim().split(/\s+/).filter(Boolean).length;
}

const FORBIDDEN = new Set([
  'enter-ecg-token-on-meter-after-ewale',
  'ecg-token-did-not-arrive-after-ewale',
  'confirm-meter-number-before-you-pay-ewale',
  'buy-ecg-prepaid-token-on-714-22',
  'ecg-prepaid-vs-postpaid-wrong-flow',
  'ecg-outage-vs-empty-prepaid-meter',
  'pay-ecg-postpaid-on-ewale',
  'pay-ecg-at-night-without-vendor-ewale',
]);

for (const post of posts) {
  if (FORBIDDEN.has(post.slug)) {
    throw new Error(`Forbidden slug: ${post.slug}`);
  }
}

writePosts(posts, { force: process.env.FORCE === '1' });

const rows = posts.map((post) => {
  const md = renderEcgPost(post);
  const words = wordCount(md);
  return { slug: post.slug, date: post.date, words };
});
const short = rows.filter((row) => row.words < 900);
if (short.length) {
  throw new Error('SHORT:\n' + short.map((row) => `${row.slug}\t${row.words}`).join('\n'));
}

console.log('slug\tdate\twords');
for (const row of rows) {
  console.log(`${row.slug}\t${row.date}\t${row.words}`);
}
console.log(`\nWrote ${posts.length} posts, min ${Math.min(...rows.map((r) => r.words))} words`);
