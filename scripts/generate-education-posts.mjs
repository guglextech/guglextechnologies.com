import fs from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'content/blog');

function yamlList(items) {
  return `[${items.map((item) => JSON.stringify(item)).join(', ')}]`;
}

function isoDate(daysBeforeSep21) {
  const d = new Date(Date.UTC(2026, 8, 21));
  d.setUTCDate(d.getUTCDate() - daysBeforeSep21);
  return d.toISOString().slice(0, 10);
}

function render(post) {
  const need = post.need.map((item, i) => `${i + 1}. ${item}`).join('\n');
  const steps = post.steps.map((item, i) => `${i + 1}. ${item}`).join('\n');
  const fails = post.fails.map((item) => `- **${item.title}:** ${item.body}`).join('\n');
  const after = post.after
    ? `\n## After you pay\n\n${post.after}\n`
    : '';
  const extra = post.extra
    ? `\n## ${post.extra.title}\n\n${post.extra.body}\n`
    : '';
  const faqs = post.faqs?.length
    ? `\n## FAQ\n\n${post.faqs.map((item) => `### ${item.q}\n\n${item.a}`).join('\n\n')}\n`
    : '';

  return `---
title: ${JSON.stringify(post.title)}
excerpt: ${JSON.stringify(post.excerpt)}
date: ${JSON.stringify(post.date)}
author: "Guglex Technologies"
category: "Education"
tags: ${yamlList(post.tags)}
---

${post.lead}

Payments happen on **Ewale** ([ewalepay.com](https://ewalepay.com) or **\\*714\\*22#**), not on this blog.

## What you need

${need}

## The flow on \\*714\\*22#

${steps}
${after}${extra}${faqs}
## If something fails

${fails}

${post.close}
`;
}

const pay = '**Ewale** ([ewalepay.com](https://ewalepay.com) or **\\*714\\*22#**)';
const ussd = '**\\*714\\*22#**';
const waecdirect = '[ghana.waecdirect.org](https://ghana.waecdirect.org/)';
const eresults = '[eresults.waecgh.org](https://eresults.waecgh.org/)';
const cssps = '[cssps.gov.gh](https://www.cssps.gov.gh/)';

const posts = [
  {
    slug: 'how-to-check-wassce-results-ghana-2026',
    title: 'How to check WASSCE results in Ghana (2026)',
    excerpt:
      'Buy a WASSCE result checker on *714*22#, then enter index number, serial, and PIN on ghana.waecdirect.org.',
    tags: ['WASSCE', 'WAEC', 'Result checker', 'Ghana'],
    lead: '“Check WASSCE results” is two jobs. First you buy a WAEC voucher. Then you type that voucher on the official WAEC Ghana portal. Ewale does the first job. WAEC does the second.',
    need: [
      'A **WASSCE** checker — not a BECE voucher.',
      'The candidate’s **index number** (usually 10 digits).',
      'A browser for ' + waecdirect + '.',
    ],
    steps: [
      `Dial ${ussd} or open [ewalepay.com](https://ewalepay.com).`,
      'Open **Results Vouchers / Education** and choose **WASSCE / Nov-Dec**.',
      'Confirm the cedi amount on the summary. Approve **one** MoMo PIN.',
      'Copy **serial** and **PIN** from the SMS.',
      `On ${waecdirect}, enter index number, exam type, year, serial, and PIN.`,
    ],
    after: 'Results display on WAEC’s site, not in the Ewale app. Save or print the page. Do not buy a second checker because the portal was slow.',
    extra: {
      title: 'School vs private',
      body: 'Pick **WASSCE (School)** or **WASSCE (Private / Nov-Dec)** on the portal to match how the candidate registered. The Ewale voucher type is the same WASSCE / Nov-Dec checker.',
    },
    fails: [
      { title: 'Invalid PIN', body: 'Swap serial and PIN fields, drop spaces, and confirm the year is 2026 (or the year they sat).' },
      { title: 'Lookalike website', body: 'Stop. Prefer the address WAEC publishes. Fake pages harvest vouchers.' },
    ],
    close: 'Voucher from Ewale. Grades from WAEC. One confirmed debit unless you truly need a second candidate.',
  },
  {
    slug: 'how-to-check-bece-results-online-ghana-2026',
    title: 'How to check BECE results online in Ghana (2026)',
    excerpt:
      'Parents search BECE results every year. Buy the BECE checker on Ewale, then check on the official WAEC eResults site.',
    tags: ['BECE', 'WAEC', 'Result checker', 'JHS'],
    lead: 'BECE results are not CSSPS placement. The checker voucher shows WAEC grades. School placement is a different, usually free, portal.',
    need: [
      'A **BECE** checker voucher from ' + pay + '.',
      'The JHS candidate **index number**.',
      'The official BECE checker: ' + eresults + ' (or the URL WAEC publishes that year).',
    ],
    steps: [
      `Dial ${ussd}. Choose **Results Vouchers**, then **BECE**.`,
      'Pay once. Wait for serial and PIN by SMS.',
      `Open ${eresults}. Select BECE School or BECE Private.`,
      'Enter index number, year **2026**, serial, and PIN. Submit once.',
    ],
    after: 'If grades show, screenshot and print. Placement comes later on ' + cssps + ' and does not consume this voucher.',
    extra: {
      title: 'Café printing',
      body: 'You can check on a phone, then send the screenshot to a café. You do not need to buy the checker at the café if you already paid on Ewale.',
    },
    fails: [
      { title: 'Bought WASSCE instead', body: 'That PIN will not open BECE. Buy BECE as a new product.' },
      { title: 'Two parents paid', body: 'You now have two vouchers. Use one. Keep the other for a sibling or a second allowed check.' },
    ],
    close: 'BECE on the Ewale row. BECE on the WAEC form. Read both words before the PIN.',
  },
  {
    slug: 'how-to-buy-wassce-checker-online-ghana',
    title: 'How to buy a WASSCE checker online in Ghana',
    excerpt:
      'Skip the WAEC office queue. Buy a WASSCE result checker on ewalepay.com or *714*22# and get serial and PIN by SMS.',
    tags: ['WASSCE', 'Buy result checker', 'Ewale', 'Online'],
    lead: 'Buying a WASSCE checker online means paying for a serial and PIN, not uploading results. Ewale is the checkout. ghana.waecdirect.org is where you later view grades.',
    need: [
      'Any Ghana GSM phone, or data for [ewalepay.com](https://ewalepay.com).',
      'Mobile Money with enough balance for the amount on screen (WAEC checkers on Ewale are shown in cedis before you approve).',
      'The phone that should receive the voucher SMS.',
    ],
    steps: [
      `Dial ${ussd} or use the Education / result-checker flow on the web.`,
      'Select **WASSCE / Nov-Dec**, not BECE.',
      'Choose self or another number if the menu offers it.',
      'Read the total. Approve the MoMo prompt **once**.',
    ],
    after: 'The SMS is the card. Screenshot it. Then check on ' + waecdirect + ' with the index number.',
    fails: [
      { title: 'PIN timed out', body: 'If MoMo did not debit, nothing was bought. Dial again.' },
      { title: 'Web tab closed', body: 'Check SMS and wallet history before starting a second checkout.' },
    ],
    close: 'Online buy, SMS voucher, official portal. That is the whole path.',
  },
  {
    slug: 'how-to-buy-bece-checker-online-ghana',
    title: 'How to buy a BECE checker online in Ghana',
    excerpt:
      'Buy a BECE result checker from any phone on *714*22#. Pay with MoMo and receive serial and PIN by SMS.',
    tags: ['BECE', 'Buy result checker', 'Ewale', 'Online'],
    lead: 'JHS parents still hear “go and buy a card.” You can buy the same class of WAEC voucher online on Ewale without standing at a booth.',
    need: [
      'Certainty it is **BECE**, not WASSCE.',
      'MoMo PIN on the paying phone.',
      'A plan for who keeps the SMS — parent or candidate.',
    ],
    steps: [
      `Dial ${ussd}. Open **Results Vouchers**.`,
      'Choose **BECE checker**. Confirm the product name.',
      'Enter quantity 1 unless you are buying for more than one candidate.',
      'Approve once. Copy serial and PIN from SMS.',
    ],
    after: 'Use the voucher on the official BECE checking site. Ewale will not display the grades inside USSD.',
    fails: [
      { title: 'Vendor already sold you a scratch card', body: 'Try that card first. A second digital voucher is a second fee.' },
    ],
    close: 'Online is not a different exam. It is a different way to receive serial and PIN.',
  },
  {
    slug: 'buy-waec-result-checker-with-mobile-money',
    title: 'Buy a WAEC result checker with Mobile Money',
    excerpt:
      'MTN MoMo, Telecel Cash, or AT Money can pay for a WASSCE or BECE checker on *714*22#.',
    tags: ['WAEC', 'Mobile Money', 'Result checker', 'MoMo'],
    lead: 'The debit is ordinary Mobile Money. The product is a WAEC serial and PIN. If you only watch the USSD menu close, you have not finished — the PIN prompt is the payment.',
    need: [
      'A funded MoMo wallet on the line you are dialling from.',
      'The exam type: **WASSCE** or **BECE**.',
    ],
    steps: [
      `Dial ${ussd} from the wallet’s number.`,
      'Pick Results Vouchers / Education.',
      'Confirm amount and exam name.',
      'Enter the MoMo PIN on the **prompt**, not inside a guessed USSD field.',
    ],
    after: 'Wallet SMS plus Ewale voucher SMS. Keep both. One is the debit proof; the other is the checker.',
    extra: {
      title: 'Which wallet',
      body: 'Ewale accepts the Ghana wallets on the live menu (MTN, Telecel, AT). Use the wallet that actually has the balance. Do not split one checker across two phones.',
    },
    fails: [
      { title: 'Insufficient funds', body: 'Top up, then buy once. A failed PIN is not a voucher.' },
    ],
    close: 'MoMo pays Ewale. Ewale delivers the voucher. WAEC still holds the result.',
  },
  {
    slug: 'buy-wassce-checker-mtn-momo-714-22',
    title: 'Buy a WASSCE checker with MTN MoMo on *714*22#',
    excerpt:
      'From an MTN line, dial *714*22#, pick WASSCE / Nov-Dec, and approve the MoMo PIN. Serial and PIN arrive by SMS.',
    tags: ['WASSCE', 'MTN', 'MoMo', 'USSD'],
    lead: 'Most WASSCE searches on results week happen on MTN phones. You do not need the Ewale app. The dialler is enough.',
    need: [
      'An **MTN** number with MoMo balance for the amount shown.',
      'WASSCE selected — SHS, not JHS.',
    ],
    steps: [
      `On the MTN phone, dial ${ussd}.`,
      'Results Vouchers → **WASSCE / Nov-Dec**.',
      'Self or other, then quantity.',
      'Approve the MTN MoMo prompt.',
    ],
    after: 'Open SMS before you check WhatsApp. The voucher is easy to miss in a busy inbox.',
    fails: [
      { title: 'Prompt on a different SIM', body: 'Dual-SIM phones: the wallet that was billed is the one that must show the MoMo SMS.' },
    ],
    close: 'MTN line, one PIN, one WASSCE voucher. Then ghana.waecdirect.org.',
  },
  {
    slug: 'buy-bece-checker-with-mtn-momo',
    title: 'Buy a BECE checker with MTN Mobile Money',
    excerpt:
      'Parents on MTN can buy a BECE result checker on Ewale without a scratch card or a trip to town.',
    tags: ['BECE', 'MTN', 'MoMo', 'Parents'],
    lead: 'If the candidate is in JHS, the voucher word on Ewale must be BECE. Paying with MTN MoMo does not change the exam type.',
    need: [
      'MTN MoMo PIN.',
      'BECE index number ready **after** purchase, on the WAEC site — not typed into Ewale.',
    ],
    steps: [
      `Dial ${ussd}.`,
      'Choose **BECE** under Results Vouchers.',
      'Approve MTN MoMo once.',
      'Send serial and PIN to whoever will open ' + eresults + '.',
    ],
    after: 'Placement is not this SMS. Grades are this SMS plus the index number.',
    fails: [
      { title: 'Candidate sat WASSCE', body: 'Stop. Buy WASSCE instead. MoMo will not convert the voucher.' },
    ],
    close: 'MTN is the rail. BECE is the product. Keep them straight on the summary.',
  },
  {
    slug: 'buy-wassce-checker-on-ewalepay-com',
    title: 'Buy a WASSCE checker on ewalepay.com',
    excerpt:
      'If you have data, the web checkout on ewalepay.com is easier for bulk or a larger screen. USSD remains the no-data backup.',
    tags: ['WASSCE', 'ewalepay.com', 'Result checker'],
    lead: 'ewalepay.com is the same Ewale catalogue as *714*22#. Use the site when the phone can browse. Use USSD when data is dead.',
    need: [
      'A browser and a MoMo or card option the site shows.',
      'The WASSCE / Nov-Dec product — not BECE.',
    ],
    steps: [
      'Open [ewalepay.com](https://ewalepay.com) and the result-checker / Education service.',
      'Select WASSCE. Set quantity.',
      'Pay. Watch SMS on the number you confirmed.',
      'If the site hangs after debit, check SMS before retrying.',
    ],
    after: 'Web or USSD, the voucher is still serial + PIN. Check on ' + waecdirect + '.',
    fails: [
      { title: 'OTP then nothing', body: 'Read wallet history. One debit, one voucher. Support if SMS never comes.' },
    ],
    close: 'Same product, two doors: the website and *714*22#.',
  },
  {
    slug: 'where-to-buy-wassce-result-checker-in-ghana',
    title: 'Where to buy a WASSCE result checker in Ghana',
    excerpt:
      'You can still queue at an office or a shop. Or dial *714*22# / use ewalepay.com and receive the voucher by SMS.',
    tags: ['WASSCE', 'Where to buy', 'Result checker', 'Ghana'],
    lead: '“Where to buy WASSCE checker” usually means: who is allowed to sell a WAEC voucher, and how fast you get serial and PIN. Ewale is a digital counter that is open when the street stall is not.',
    need: [
      'A decision: shop card, or digital on ' + pay + '.',
      'Time on results week — shops run out; USSD does not need shelf stock.',
    ],
    steps: [
      'If you want digital: dial ' + ussd + ', WASSCE / Nov-Dec, pay once.',
      'If you already hold an unused scratch card, use that first.',
      'Check only on ' + waecdirect + '.',
    ],
    after: 'Wherever you bought it, WAEC sees a serial and PIN. They do not see your shop name.',
    extra: {
      title: 'Do not buy from result-upgrade pages',
      body: 'Anyone offering to change grades is not selling a checker. WAEC has warned against that trade. Buy a voucher, then check yourself.',
    },
    fails: [
      { title: 'Sold a screenshot of someone else’s PIN', body: 'That voucher may already be used. Buy from Ewale so the SMS is issued to you.' },
    ],
    close: 'A trusted checkout plus the official portal beats a stranger’s WhatsApp “checker”.',
  },
  {
    slug: 'where-to-buy-bece-result-checker-in-ghana',
    title: 'Where to buy a BECE result checker in Ghana',
    excerpt:
      'Find a BECE checker without Ghana Post queues: Ewale *714*22# sells the voucher and texts serial and PIN.',
    tags: ['BECE', 'Where to buy', 'Result checker'],
    lead: 'BECE week empties the corner shop. The product you need is still a WAEC BECE voucher. Ewale is one place that sells it to a phone.',
    need: [
      'BECE, not WASSCE, not a CSSPS “placement card”.',
      'MoMo on the paying line.',
    ],
    steps: [
      `Dial ${ussd} anywhere in Ghana the USSD works.`,
      'Results Vouchers → BECE.',
      'Pay. Keep SMS.',
      'Check on ' + eresults + '.',
    ],
    after: 'Buying in Accra for a candidate in Wa is normal. Forward the SMS. The index number stays with the candidate.',
    fails: [
      { title: 'Paid a school “collector” with no voucher', body: 'Ask for serial and PIN in writing. If none, you did not buy a checker.' },
    ],
    close: 'Location of the buyer does not matter. Exam type and SMS do.',
  },
  {
    slug: 'wassce-result-checker-price-ghana-ewale',
    title: 'WASSCE result checker price in Ghana',
    excerpt:
      'Ewale shows the cedi price on the confirmation screen before you approve. Confirm that amount — it is the fee for serial and PIN, not for changing grades.',
    tags: ['WASSCE', 'Price', 'Result checker'],
    lead: 'People search “WASSCE checker price” because shops shout different numbers. On Ewale you pay what the summary shows for the WASSCE / Nov-Dec voucher (commonly GH₵24 per voucher on the live menu — always read the screen).',
    need: [
      'Wallet balance at least the **on-screen** total, including quantity.',
      'WASSCE selected so you are not quoting a BECE row.',
    ],
    steps: [
      `Dial ${ussd} and open the WASSCE checker row.`,
      'Set quantity. Read **GH₵** total.',
      'If the total is wrong, abort. Do not approve a surprise figure.',
      'Approve once.',
    ],
    after: 'Price buys access, not an A in Maths. Nobody legitimate sells upgraded results.',
    faqs: [
      {
        q: 'Does a higher price mean more checks?',
        a: 'No. Quantity means more vouchers. One voucher is typically reusable a few times for the **same** index and year on WAEC’s rules — not for a second person.',
      },
      {
        q: 'Is web cheaper than USSD?',
        a: 'Use the amount on that checkout. Do not assume a discount because you opened a browser.',
      },
    ],
    fails: [
      { title: 'Agent added “service charge”', body: 'If you already paid them, that is between you and the agent. Buying on Ewale yourself shows one total.' },
    ],
    close: 'The honest price is the one on the Ewale summary before the PIN.',
  },
  {
    slug: 'bece-result-checker-price-ghana-ewale',
    title: 'BECE result checker price in Ghana',
    excerpt:
      'See the BECE voucher amount on *714*22# before you pay. One price, one serial and PIN by SMS.',
    tags: ['BECE', 'Price', 'Result checker'],
    lead: 'BECE checker prices at kiosks move with panic. Ewale prints the amount in cedis on the confirmation screen. Read it. That is what MoMo will take.',
    need: [
      'The BECE product row.',
      'Quantity 1 for one candidate unless you are buying for a class.',
    ],
    steps: [
      `Dial ${ussd} → Results Vouchers → BECE.`,
      'Check unit price × quantity.',
      'Approve only if it matches what you intended.',
    ],
    after: 'CSSPS placement checking has been free on the GES portal in recent years. Do not treat this BECE voucher price as a placement fee.',
    fails: [
      { title: 'Charged twice', body: 'Two approvals are two vouchers. Open SMS before a third attempt.' },
    ],
    close: 'Pay the summary. Keep the SMS. Placement is a different website.',
  },
  {
    slug: 'how-to-check-wassce-results-on-phone',
    title: 'How to check WASSCE results on your phone',
    excerpt:
      'Use Chrome or Safari on ghana.waecdirect.org with the serial and PIN from your Ewale SMS. No café required.',
    tags: ['WASSCE', 'Mobile', 'How to check'],
    lead: 'You can check WASSCE on a phone if you have data **for WAEC’s site**. Buying the checker on USSD did not need data. Viewing grades does.',
    need: [
      'Ewale SMS with serial and PIN.',
      'Index number.',
      'Mobile data or Wi-Fi.',
    ],
    steps: [
      'Buy on ' + ussd + ' if you do not already have a voucher.',
      'Open ' + waecdirect + ' in the phone browser.',
      'Index number → WASSCE → year → serial → PIN → Submit.',
      'Screenshot the result immediately.',
    ],
    after: 'If the page spins, wait. Reloading with a new voucher is how people double-pay.',
    fails: [
      { title: 'No data after buying', body: 'The voucher is already yours. Find Wi-Fi. Do not buy again.' },
    ],
    close: 'USSD to buy. Browser to look. Two apps, one voucher.',
  },
  {
    slug: 'check-wassce-results-ghana-waecdirect',
    title: 'Check WASSCE results on ghana.waecdirect.org',
    excerpt:
      'ghana.waecdirect.org is the official WAEC Ghana checker for WASSCE. You still need a voucher from Ewale or another authorised seller.',
    tags: ['WASSCE', 'ghana.waecdirect.org', 'WAEC'],
    lead: 'Bookmark the real host: ghana.waecdirect.org. Ads in search results sometimes wrap a clone. Your Ewale PIN should be typed only on WAEC.',
    need: [
      'A WASSCE voucher (serial + PIN).',
      'Index number and exam year.',
    ],
    steps: [
      'Purchase on ' + pay + ' if needed.',
      'Go to ' + waecdirect + '.',
      'Fill every labelled box. Do not paste the Ewale payment reference into PIN.',
      'Submit. Print or save PDF if the browser offers it.',
    ],
    extra: {
      title: 'What Ewale cannot do',
      body: 'Ewale cannot “open” ghana.waecdirect.org for you and cannot reset a PIN WAEC already accepted. Support is for missing SMS after a real debit.',
    },
    fails: [
      { title: 'Certificate request vs checker', body: 'Attestation and certificates are other WAEC services. A result checker only shows the result page.' },
    ],
    close: 'Official URL, correct year, voucher from a checkout you trust.',
  },
  {
    slug: 'check-bece-results-eresults-waecgh-org',
    title: 'Check BECE results on eresults.waecgh.org',
    excerpt:
      'The WAEC eResults portal is where many BECE candidates enter index number, serial, and PIN. Buy the BECE voucher on *714*22# first.',
    tags: ['BECE', 'eresults.waecgh.org', 'WAEC'],
    lead: 'eresults.waecgh.org is a WAEC Ghana results host. Use it when WAEC points BECE checks there. If WAEC publishes a different BECE URL that year, use that one — not a Facebook clone.',
    need: [
      'BECE serial and PIN from Ewale.',
      'Index number entered twice if the form asks you to confirm.',
    ],
    steps: [
      'Buy BECE on ' + ussd + '.',
      'Open ' + eresults + '.',
      'Select BECE (School) or BECE (Private).',
      'Year, serial, PIN, captcha if shown. Submit once.',
    ],
    after: 'Download or screenshot. Printing can wait. Losing the only view of the page is worse.',
    fails: [
      { title: 'Used a WASSCE PIN here', body: 'Wrong exam type. Buy BECE.' },
    ],
    close: 'Match portal, exam type, and voucher. Then stop buying.',
  },
  {
    slug: 'how-to-print-wassce-results-ghana',
    title: 'How to print WASSCE results in Ghana',
    excerpt:
      'After Ewale sends serial and PIN, open ghana.waecdirect.org, view the result, then print or save PDF from the browser.',
    tags: ['WASSCE', 'Print results', 'WAEC'],
    lead: 'Printing is not a second purchase. If you already have a working check on screen, use the phone or a café printer. Do not buy another checker “for the printout”.',
    need: [
      'A successful result page.',
      'A printer, or PDF, or a café that accepts a screenshot.',
    ],
    steps: [
      'Check on ' + waecdirect + ' with the Ewale voucher.',
      'Use browser Print / Share → PDF.',
      'If you need paper, send the file to a shop. You already paid WAEC access.',
    ],
    after: 'Some cafés sell checkers as a bundle with print. If you already bought on Ewale, pay only for paper.',
    fails: [
      { title: 'Café operator kept your PIN', body: 'Change nothing — the voucher may now be used. Check yourself next time.' },
    ],
    close: 'One voucher can be enough to see and print. Extra fees should be for ink, not a second PIN.',
  },
  {
    slug: 'how-to-print-bece-results-from-phone',
    title: 'How to print BECE results from your phone',
    excerpt:
      'Screenshot or save the official BECE result page, then print at a café. The Ewale voucher is already spent at check time.',
    tags: ['BECE', 'Print results', 'Parents'],
    lead: 'Parents ask for a hard copy for the house. That copy is a print of WAEC’s page, not a new card.',
    need: [
      'The result showing on the official site.',
      'A clear screenshot of the full grade list.',
    ],
    steps: [
      'Check BECE after buying on ' + ussd + '.',
      'Screenshot every subject.',
      'Print at a shop. Do not dictate your PIN to the attendant if the page is already on your phone.',
    ],
    after: 'Keep the SMS even after printing. Reprinting later may need another allowed use of the same voucher.',
    fails: [
      { title: 'Blurred photo', body: 'Zoom and recapture. A café cannot typeset WAEC grades from memory.' },
    ],
    close: 'Phone check first. Paper second. New checker only if WAEC requires a new voucher.',
  },
  {
    slug: 'find-your-wassce-index-number',
    title: 'Find your WASSCE index number',
    excerpt:
      'The index number identifies the candidate. Ewale does not issue it. Find it on admission papers, the school, or WAEC registration records.',
    tags: ['WASSCE', 'Index number', 'Find'],
    lead: 'A result checker without an index number is a locked door. Ewale sells the key (serial and PIN). The school already gave you the door number.',
    need: [
      'Admission notice, ID card, or the school’s result list.',
      'The year you sat the paper.',
    ],
    steps: [
      'Look for a **10-digit** index on WAEC/school documents.',
      'Do not invent digits or reuse a friend’s number.',
      'Buy the WASSCE checker on ' + ussd + ' only when you can type the index on ' + waecdirect + '.',
    ],
    extra: {
      title: 'What Ewale will not ask',
      body: 'The USSD buy flow does not need your index number. Anyone asking for index + MoMo PIN together is not the Ewale checkout.',
    },
    fails: [
      { title: 'Used BECE index on WASSCE', body: 'Wrong exam. Find the WASSCE index.' },
    ],
    close: 'Find the index first if you can. Buy the voucher when you are ready to check.',
  },
  {
    slug: 'find-your-bece-index-number',
    title: 'Find your BECE index number',
    excerpt:
      'JHS index numbers live on registration slips and school lists. You need that number plus a BECE checker from *714*22#.',
    tags: ['BECE', 'Index number', 'Find', 'JHS'],
    lead: 'Parents searching “find BECE index number” are one step from checking. The other step is the voucher. Do not pay a stranger to “locate” an index that the school already printed.',
    need: [
      'The candidate’s school contact or slip.',
      'Date of birth for CSSPS later — not required to buy a checker.',
    ],
    steps: [
      'Ask the JHS for the WAEC index.',
      'Write it with a zero if it starts with zero.',
      'Buy BECE on ' + pay + '.',
      'Enter that index on the official BECE portal.',
    ],
    after: 'For placement you will type index + year suffix on ' + cssps + '. That is still not a paid checker.',
    fails: [
      { title: 'Guessing the last digits', body: 'WAEC will not correct you. You may burn a voucher use.' },
    ],
    close: 'School has the index. Ewale has the voucher. You bring both to WAEC’s page.',
  },
  {
    slug: 'find-official-waec-result-portal-ghana',
    title: 'Find the official WAEC result portal in Ghana',
    excerpt:
      'WASSCE: ghana.waecdirect.org. BECE: eresults.waecgh.org. Buy the matching checker on ewalepay.com or *714*22#.',
    tags: ['WAEC', 'Find', 'Result portal'],
    lead: 'Search ads invent “WAEC checker login” pages. The official hosts are short and dull. Bookmark them before results week.',
    need: [
      'The exam you sat.',
      'A voucher from a real checkout, not from the fake page.',
    ],
    steps: [
      'WASSCE → ' + waecdirect + '.',
      'BECE → ' + eresults + '.',
      'Buy the matching voucher on ' + ussd + '.',
      'If the site asks for extra “activation fees”, leave.',
    ],
    extra: {
      title: 'waecgh.org',
      body: 'WAEC Ghana also publishes notices on waecgh.org. Follow links from there if you are unsure. Do not follow sponsored “result now” buttons.',
    },
    fails: [
      { title: 'Portal asked for your MoMo PIN', body: 'WAEC does not take your Ewale PIN. You already paid Ewale.' },
    ],
    close: 'Find the portal once. Save it. Buy the voucher on Ewale, not on a banner.',
  },
  {
    slug: 'find-cssps-placement-portal-ghana',
    title: 'Find the CSSPS school placement portal',
    excerpt:
      'SHS/TVET placement is on cssps.gov.gh. It is not the BECE result checker you buy on *714*22#.',
    tags: ['CSSPS', 'School placement', 'BECE', 'Find'],
    lead: 'Every September, families mix “results” and “placement”. CSSPS tells you the school. The BECE checker tells you the grades. Different websites, different payments.',
    need: [
      'BECE index number and date of birth as registered.',
      'The official site ' + cssps + '.',
    ],
    steps: [
      'Open ' + cssps + ' — not a Facebook image of a portal.',
      'Enter index and year the way CSSPS labels (often index + year).',
      'Do **not** type an Ewale serial here.',
      'If you still need grades, buy a **BECE** checker on ' + ussd + ' and use the WAEC site.',
    ],
    extra: {
      title: 'Is placement free?',
      body: 'In recent years GES has allowed free online placement checks. If a page sells a “CSSPS PIN”, confirm it is really required this cycle. A BECE result checker will not log you into CSSPS.',
    },
    fails: [
      { title: 'Index not found', body: 'Fix digits and date of birth before paying anyone.' },
    ],
    close: 'cssps.gov.gh for school. WAEC for grades. Ewale for the grade voucher.',
  },
  {
    slug: 'cssps-vs-bece-result-checker',
    title: 'CSSPS placement vs BECE result checker',
    excerpt:
      'Placement is the school. The checker is the grades. Buy a BECE voucher on Ewale only when you need WAEC results, not when you only need CSSPS.',
    tags: ['CSSPS', 'BECE', 'Result checker'],
    lead: 'If the child already knows the grades from school and you only want the SHS name, start at cssps.gov.gh. If you have no grades yet, buy a BECE checker on Ewale, then place later.',
    need: [
      'A clear goal: grades, placement, or both.',
    ],
    steps: [
      'Grades: ' + ussd + ' → BECE voucher → ' + eresults + '.',
      'Placement: ' + cssps + ' with index and date of birth.',
      'Self-placement, if offered, is still on CSSPS — not on Ewale.',
    ],
    after: 'Buying two BECE checkers will not change the school CSSPS gave you.',
    fails: [
      { title: 'Paid for “placement upgrade”', body: 'That is not a WAEC checker. Stop.' },
    ],
    close: 'Name the job: grades or school. Pay only for the job that needs a voucher.',
  },
  {
    slug: 'wassce-result-checker-faq',
    title: 'WASSCE result checker FAQ',
    excerpt:
      'Answers to the questions people search on results week: where to buy, where to check, how many times, and what *714*22# actually sends.',
    tags: ['WASSCE', 'FAQ', 'Result checker'],
    lead: 'This FAQ is about buying a WASSCE voucher on Ewale and checking on WAEC. It is not a place to change grades.',
    need: [
      'WASSCE as the exam.',
      'Patience for SMS after one debit.',
    ],
    steps: [
      'Buy: ' + ussd + ' → WASSCE / Nov-Dec.',
      'Check: ' + waecdirect + '.',
      'Keep SMS until you have a copy of the result.',
    ],
    faqs: [
      {
        q: 'Does Ewale show my WASSCE grades?',
        a: 'No. Ewale sends serial and PIN. Grades render on WAEC’s portal.',
      },
      {
        q: 'Can I check last year’s WASSCE?',
        a: 'Usually yes if you pick the correct year and index on ghana.waecdirect.org and the voucher is still valid for that lookup.',
      },
      {
        q: 'School or Nov-Dec?',
        a: 'Same Ewale WASSCE / Nov-Dec product. On WAEC, choose the sitting you registered for.',
      },
      {
        q: 'How many times can I submit?',
        a: 'WAEC commonly allows a few uses on the same index and year. It is not a licence for classmates.',
      },
    ],
    fails: [
      { title: 'BECE voucher in the SMS', body: 'Wrong menu. Buy WASSCE.' },
    ],
    close: 'Buy once. Check on WAEC. Ask Ewale only about the debit and the SMS.',
  },
  {
    slug: 'bece-result-checker-faq',
    title: 'BECE result checker FAQ',
    excerpt:
      'JHS parents: what a BECE checker is, what it is not, how to buy on *714*22#, and how it differs from CSSPS.',
    tags: ['BECE', 'FAQ', 'Parents'],
    lead: 'Most BECE FAQ searches are the same three fears: wrong card, no SMS, and whether placement needs another payment.',
    need: [
      'The word **BECE** on the Ewale summary.',
      'Index number from the JHS.',
    ],
    steps: [
      'Buy on ' + ussd + '.',
      'Check on the official BECE portal.',
      'Place later on ' + cssps + ' if that is the next task.',
    ],
    faqs: [
      {
        q: 'Is the checker the same as school placement?',
        a: 'No. Checker = WAEC grades. CSSPS = school. Do not skip the distinction on results week.',
      },
      {
        q: 'Can two children share one PIN?',
        a: 'No. Once a voucher is tied to an index, it is not a family pass.',
      },
      {
        q: 'Do I need a smartphone to buy?',
        a: 'No. *714*22# runs on a keypad phone. You may need a browser later to see grades.',
      },
      {
        q: 'What if results are withheld?',
        a: 'That message comes from WAEC, not from Ewale. A second voucher will not lift a withhold.',
      },
    ],
    fails: [
      { title: 'Paid twice in panic', body: 'Check both SMS threads. You may already have a working PIN.' },
    ],
    close: 'BECE voucher, BECE portal, then CSSPS if you need the school name.',
  },
  {
    slug: 'waec-result-checker-faq-ewale',
    title: 'WAEC result checker FAQ for Ewale (*714*22#)',
    excerpt:
      'What you buy on Ewale, what SMS contains, who to call, and why this blog cannot accept MoMo.',
    tags: ['WAEC', 'FAQ', 'Ewale', 'USSD'],
    lead: 'Ewale is a payments product. A WAEC result checker is one of the education items on the menu. Serial and PIN come by SMS after a successful debit.',
    need: [
      'The exam name.',
      'A wallet PIN you will not share in chat.',
    ],
    steps: [
      `Dial ${ussd}.`,
      'Results Vouchers: BECE or WASSCE / Nov-Dec.',
      'Approve the amount on screen.',
      'Store the SMS.',
    ],
    faqs: [
      {
        q: 'Where do I pay?',
        a: 'ewalepay.com or *714*22#. Not in the comments of this article.',
      },
      {
        q: 'Support?',
        a: 'Use the support option on the USSD menu or email walletewale@gmail.com with the debit reference. Nobody from Ewale needs your MoMo PIN.',
      },
      {
        q: 'Bulk?',
        a: 'The menu lets you set quantity (up to the live limit, often dozens per transaction) for a class or PTA.',
      },
    ],
    fails: [
      { title: 'Phishing “Ewale agent”', body: 'Hang up. Real checkout is the shortcode or the website.' },
    ],
    close: 'FAQ ends where WAEC begins: the official result page.',
  },
  {
    slug: 'novdec-wassce-checker-on-ewale',
    title: 'Buy a Nov/Dec WASSCE checker on Ewale',
    excerpt:
      'Private / Nov-Dec candidates use the WASSCE / Nov-Dec voucher on *714*22#. Check on ghana.waecdirect.org with the private index.',
    tags: ['Nov-Dec', 'WASSCE', 'Private candidate'],
    lead: 'Nov/Dec is still WASSCE, with a private sitting. Ewale does not sell a third mystery SKU. You buy WASSCE / Nov-Dec, then tell WAEC which sitting.',
    need: [
      'Your **private** index number.',
      'The year you sat Nov/Dec.',
    ],
    steps: [
      `Dial ${ussd} → WASSCE / Nov-Dec.`,
      'Pay once. Save SMS.',
      'On ' + waecdirect + ' choose WASSCE Private / Nov-Dec, not School.',
    ],
    after: 'A school-candidate index will not open a private sitting. The voucher is not the mistake — the form is.',
    fails: [
      { title: 'Bought BECE because it was cheaper in a shop', body: 'Wrong exam. Buy WASSCE / Nov-Dec on Ewale.' },
    ],
    close: 'Same voucher family as school WASSCE. Different index and exam type on WAEC.',
  },
  {
    slug: 'wassce-school-vs-private-result-checker',
    title: 'WASSCE school vs private: which checker to buy',
    excerpt:
      'Both sittings use the WASSCE / Nov-Dec checker on Ewale. The split happens on the WAEC portal, not on the MoMo prompt.',
    tags: ['WASSCE', 'Private candidate', 'School candidate'],
    lead: 'Parents overthink the Ewale menu. If the child is not BECE, you want WASSCE / Nov-Dec. School versus private is a dropdown on ghana.waecdirect.org.',
    need: [
      'Knowledge of how the candidate registered.',
      'The matching index number.',
    ],
    steps: [
      'Buy one WASSCE / Nov-Dec voucher on ' + ussd + '.',
      'At WAEC, select School or Private accurately.',
      'Submit. If it fails, change the exam type before buying another PIN.',
    ],
    after: 'Two vouchers are for two people or a voucher that truly never worked — not for toggling School/Private casually.',
    fails: [
      { title: 'Private index + School dropdown', body: 'Fix the dropdown. Keep the same PIN.' },
    ],
    close: 'Ewale: WASSCE. WAEC: sitting. Get both right.',
  },
  {
    slug: 'bece-school-vs-private-result-checker',
    title: 'BECE school vs private result checker',
    excerpt:
      'Buy a BECE voucher on Ewale, then pick BECE School or BECE Private on the WAEC eResults form.',
    tags: ['BECE', 'Private candidate', 'WAEC'],
    lead: 'Private BECE exists. The Ewale product is still labelled BECE. The portal asks which stream. Mixing WASSCE into this story is how PINs get wasted.',
    need: [
      'BECE voucher.',
      'The correct BECE stream on ' + eresults + '.',
    ],
    steps: [
      'Purchase BECE on ' + pay + '.',
      'Select BECE (School) or BECE (Private).',
      'Enter index and year. Submit.',
    ],
    after: 'CSSPS rules for private candidates can differ. Read GES notices. The checker still only shows grades.',
    fails: [
      { title: 'Used a friend’s school index', body: 'You may lock the voucher to the wrong person.' },
    ],
    close: 'BECE voucher first. Stream second. Placement third.',
  },
  {
    slug: 'buy-result-checker-bulk-for-school-ewale',
    title: 'Buy result checkers in bulk for a school on Ewale',
    excerpt:
      'PTA, heads, and coordinators can set quantity on *714*22# and pay once. Each voucher still needs its own serial and PIN distribution.',
    tags: ['Bulk', 'School', 'Result checker', 'WASSCE'],
    lead: 'Bulk is quantity, not a shared PIN. If you buy 40 WASSCE checkers, you should receive 40 serial/PIN pairs (or 40 SMS, depending on how you routed “self vs other”).',
    need: [
      'A list of candidates and exam type (all WASSCE or all BECE — do not mix in one confused checkout).',
      'Wallet balance for quantity × unit price on screen.',
    ],
    steps: [
      `Dial ${ussd}. Pick one exam type.`,
      'Enter quantity within the live limit.',
      'Pay once. Record every SMS or on-screen pair.',
      'Give each candidate their own voucher. Do not photocopy one PIN.',
    ],
    extra: {
      title: 'Other number',
      body: 'If the menu can SMS the student directly, use it. Otherwise you become the post office: forward each pair once.',
    },
    fails: [
      { title: 'One PIN for the whole class', body: 'WAEC will attach it to the first index. The rest fail.' },
    ],
    close: 'Bulk buy, individual vouchers. That is the only bulk that works.',
  },
  {
    slug: 'buy-bece-checker-for-your-child',
    title: 'How parents buy a BECE checker for their child',
    excerpt:
      'Pay from your MoMo on *714*22#, keep the SMS, and sit with the child on the official BECE portal. Do not mix it with CSSPS.',
    tags: ['BECE', 'Parents', 'How to'],
    lead: 'The child has the index. You have the wallet. Ewale lets those two facts meet without sending the child to a night market.',
    need: [
      'Your MoMo.',
      'The child’s BECE index, written down.',
      'Ten quiet minutes and a browser.',
    ],
    steps: [
      'You dial ' + ussd + ' and buy **BECE**.',
      'You copy serial and PIN.',
      'Together you open the official BECE site and submit.',
      'You screenshot. You do not buy a second “just in case” the same minute.',
    ],
    after: 'Tell the other parent in the house. Duplicate checkouts are the classic results-week tax.',
    fails: [
      { title: 'Uncle also bought', body: 'Use one voucher. Save the second for a sibling or an allowed re-check.' },
    ],
    close: 'One adult, one debit, one child, one BECE PIN — unless you have two children.',
  },
  {
    slug: 'buy-wassce-checker-for-your-child',
    title: 'How parents buy a WASSCE checker for their child',
    excerpt:
      'SHS guardians: dial *714*22#, choose WASSCE / Nov-Dec, pay, and hand serial and PIN to the candidate for ghana.waecdirect.org.',
    tags: ['WASSCE', 'Parents', 'How to'],
    lead: 'A WASSCE checker is not school fees and not admission. It is paid access to the grade list. Buy it when the candidate is ready to type the index.',
    need: [
      'WASSCE, not BECE.',
      'Child’s index number.',
    ],
    steps: [
      'Buy on ' + pay + '.',
      'Send a photo of the SMS if the child is on campus.',
      'Child checks on ' + waecdirect + '.',
      'Parent keeps a copy of the screenshot.',
    ],
    after: 'Universities will want official processes later. This printout is for you and the candidate today.',
    fails: [
      { title: 'WhatsApp “I can check for you”', body: 'Do not give PIN and index to a stranger. Check together.' },
    ],
    close: 'You pay. They type the index. WAEC shows the subjects.',
  },
  {
    slug: 'parents-guide-bece-results-week-ewale',
    title: 'BECE results week: a parent’s guide',
    excerpt:
      'Order of operations: confirm the index, buy one BECE checker on Ewale, check WAEC, then CSSPS. Do not reverse it in a panic.',
    tags: ['BECE', 'Parents', 'Results week', 'How to'],
    lead: 'Results week is a queue of rumours. A simple order saves money: identity, voucher, grades, placement.',
    need: [
      'Index number.',
      'One paying adult.',
      'Official URLs saved.',
    ],
    steps: [
      'Write the index on paper.',
      'Buy **one** BECE checker on ' + ussd + '.',
      'Check grades on the WAEC BECE portal.',
      'Later, check ' + cssps + ' for the school.',
    ],
    extra: {
      title: 'Rumour control',
      body: 'Nobody can upgrade BECE for a fee. Extra Ewale purchases only make sense for extra candidates or a voucher that never arrived.',
    },
    fails: [
      { title: 'Family group chat bought four times', body: 'Stop the chat. Count SMS. Use what you have.' },
    ],
    close: 'Sequence beats speed. One debit per child unless SMS truly failed.',
  },
  {
    slug: 'how-to-use-wassce-checker-after-ewale',
    title: 'How to use a WASSCE checker after buying on Ewale',
    excerpt:
      'Ewale is done when the SMS arrives. Using the checker means ghana.waecdirect.org, index number, year, serial, and PIN.',
    tags: ['WASSCE', 'How to', 'WAEC'],
    lead: 'Buying is the easy half. Using the checker is data entry. Most failures are swapped fields, not bad payments.',
    need: [
      'SMS in front of you.',
      'Index number in front of you.',
    ],
    steps: [
      'Open ' + waecdirect + '.',
      'Index in the index box only.',
      'Serial in serial. PIN in PIN (often 12 digits for WASSCE).',
      'Year matching the sitting. Submit once.',
    ],
    after: 'If it succeeds, you are finished with Ewale for this candidate.',
    fails: [
      { title: 'Letter O vs zero', body: 'Copy from SMS, do not retype from memory.' },
    ],
    close: 'Use the voucher on WAEC. Do not type it into random “result apps”.',
  },
  {
    slug: 'how-to-use-bece-checker-after-ewale',
    title: 'How to use a BECE checker after buying on Ewale',
    excerpt:
      'Take serial and PIN from the Ewale SMS to the official BECE results site. Enter the JHS index number exactly.',
    tags: ['BECE', 'How to', 'WAEC'],
    lead: 'After MoMo, nothing happens until a browser talks to WAEC. That is normal.',
    need: [
      'BECE SMS.',
      'Quiet so you do not mistype the index.',
    ],
    steps: [
      'Open the official BECE checker (' + eresults + ' or WAEC’s published URL).',
      'Confirm BECE School or Private.',
      'Paste serial and PIN. Submit.',
    ],
    after: 'If WAEC says used, someone already checked — often another relative. Ask the family before buying again.',
    fails: [
      { title: 'Captcha failed', body: 'Retry captcha, not the purchase.' },
    ],
    close: 'The checker is used on WAEC. Ewale already did its part.',
  },
  {
    slug: 'waec-checker-pin-invalid-or-not-working',
    title: 'WAEC checker PIN invalid or not working',
    excerpt:
      'Invalid PIN is usually the wrong portal, wrong exam, swapped serial, or a used voucher — not a reason to instantly buy two more on *714*22#.',
    tags: ['WAEC', 'PIN', 'Troubleshooting'],
    lead: 'Treat “invalid” as a checklist. Buying in a loop is how results week becomes expensive.',
    need: [
      'The original Ewale SMS.',
      'The exact URL you are posting to.',
    ],
    steps: [
      'Confirm WASSCE vs BECE vs the voucher you bought.',
      'Confirm ' + waecdirect + ' vs ' + eresults + '.',
      'Re-copy serial and PIN with no spaces.',
      'Only if the debit produced **no** SMS, contact Ewale support with the reference.',
    ],
    extra: {
      title: 'Used PIN',
      body: 'If a sibling already submitted successfully, the PIN did work. Check their screenshot.',
    },
    fails: [
      { title: 'Third purchase while angry', body: 'Pause. You may already own working unused vouchers in SMS.' },
    ],
    close: 'Debug the form before you debit again.',
  },
  {
    slug: 'result-checker-sms-delayed-ewale',
    title: 'Result checker SMS delayed after Ewale',
    excerpt:
      'A MoMo debit without an immediate voucher SMS is a wait-and-trace problem, not an automatic second purchase.',
    tags: ['SMS', 'Result checker', 'Pending'],
    lead: 'Networks stall. Results-week SMS storms stall more. The rule is the same as ECG tokens: do not double-pay while the first debit is live.',
    need: [
      'MoMo transaction ID.',
      'The paying number’s inbox, including filtered folders.',
    ],
    steps: [
      'Search SMS for “serial”, “PIN”, or Ewale.',
      'Wait a few minutes. Toggle airplane mode.',
      'If still empty, support via ' + ussd + ' or walletewale@gmail.com with the reference.',
      'Do not start a second identical checkout “to be safe”.',
    ],
    after: 'When the SMS lands, proceed to WAEC. The delay did not cancel the voucher.',
    fails: [
      { title: 'Bought on a friend’s phone', body: 'The SMS may be on their SIM. Call them.' },
    ],
    close: 'Trace the first debit. Second vouchers are for second needs.',
  },
  {
    slug: 'one-waec-checker-two-candidates',
    title: 'Can one WAEC checker work for two candidates?',
    excerpt:
      'No. A voucher binds to an index. Buy two checkers on *714*22# if you have two children.',
    tags: ['WAEC', 'FAQ', 'Result checker'],
    lead: 'Sharing a PIN feels thrifty. WAEC designed the opposite. The first successful index owns the voucher.',
    need: [
      'A count of candidates, not a count of phones.',
    ],
    steps: [
      'Candidate A: one BECE or WASSCE voucher on ' + ussd + '.',
      'Candidate B: a second checkout (or quantity 2).',
      'Label the SMS threads with names immediately.',
    ],
    after: 'Quantity 2 on one payment is fine. One PIN for two indexes is not.',
    fails: [
      { title: 'Tried the second child “just to see”', body: 'You may have spent a use or locked the voucher. Stop experimenting.' },
    ],
    close: 'Two indexes, two vouchers. That is the cheap option compared with wasted PINs.',
  },
  {
    slug: 'how-many-times-can-you-use-waec-checker',
    title: 'How many times can you use a WAEC result checker?',
    excerpt:
      'WAEC typically allows a few checks of the same candidate and year. It is not unlimited and not transferable.',
    tags: ['WAEC', 'FAQ', 'Result checker'],
    lead: 'Reprint, yes. New cousin, no. If you need another person checked, buy another voucher on Ewale.',
    need: [
      'The same index and year as the first successful check.',
      'The same serial and PIN.',
    ],
    steps: [
      'Reuse on the official portal until WAEC refuses.',
      'Screenshot early so you are not dependent on leftover uses.',
      'Buy a fresh checker on ' + ussd + ' only when WAEC says the voucher is exhausted or you have a new candidate.',
    ],
    after: 'Ewale cannot add extra uses to a PIN WAEC already issued.',
    fails: [
      { title: 'Portal down, bought another', body: 'Wait. Uses remaining on the first PIN still matter.' },
    ],
    close: 'A few looks at one result. Not a neighbourhood licence.',
  },
  {
    slug: 'check-old-wassce-results-previous-year',
    title: 'How to check old WASSCE results from a previous year',
    excerpt:
      'Buy a current WASSCE / Nov-Dec checker on Ewale, then select the historical year and matching index on ghana.waecdirect.org.',
    tags: ['WASSCE', 'Previous year', 'WAEC'],
    lead: 'Old results still need a live voucher. The year dropdown on WAEC is what points at 2023 or 2024, not the date you bought on Ewale.',
    need: [
      'The index from that year.',
      'A WASSCE checker from ' + pay + '.',
    ],
    steps: [
      'Buy WASSCE / Nov-Dec today on ' + ussd + '.',
      'On ' + waecdirect + ' set the **exam year you sat**, not today’s year by habit.',
      'Submit serial and PIN.',
    ],
    after: 'Wrong year is a common “result not found”. Fix the year before buying another PIN.',
    fails: [
      { title: 'Used a 2019 index with 2026 selected', body: 'Change the year. Keep the voucher.' },
    ],
    close: 'New voucher, old year, same official portal.',
  },
  {
    slug: 'result-upgrade-scams-ghana-waec',
    title: 'WAEC result upgrade scams in Ghana',
    excerpt:
      'Nobody can pay to upgrade WASSCE or BECE grades. Buy a checker on *714*22# and read the real page on WAEC’s site.',
    tags: ['WAEC', 'Scam', 'WASSCE', 'BECE'],
    lead: 'The search is ugly and popular: “pay to fix WASSCE”. WAEC repeats the warning every release. A checker shows what was sat. It does not rewrite it.',
    need: [
      'Scepticism.',
      'The official portal only.',
    ],
    steps: [
      'Buy a normal voucher on ' + ussd + '.',
      'Check yourself on ' + waecdirect + ' or ' + eresults + '.',
      'Ignore anyone who wants MoMo to “meet WAEC staff”.',
    ],
    extra: {
      title: 'What a real purchase looks like',
      body: 'You get serial and PIN by SMS from the checkout you initiated. You do not get a Photoshop PDF from a stranger.',
    },
    fails: [
      { title: 'Already paid a fixer', body: 'That money is not an Ewale voucher. Buy a real checker if you still need to see grades.' },
    ],
    close: 'Pay Ewale for access. Pay no one for fiction.',
  },
  {
    slug: 'buy-wassce-checker-without-going-to-waec-office',
    title: 'Buy a WASSCE checker without going to a WAEC office',
    excerpt:
      '*714*22# and ewalepay.com sell the voucher remotely. You still check on ghana.waecdirect.org.',
    tags: ['WASSCE', 'How to', 'USSD'],
    lead: 'The office sells paper and answers. Your phone can sell you the same class of checker at night. Choose the phone if the queue is the only problem.',
    need: [
      'Any working GSM line.',
      'MoMo.',
    ],
    steps: [
      `Dial ${ussd} from home.`,
      'WASSCE / Nov-Dec → pay.',
      'Check online. Skip the travel.',
    ],
    after: 'If you need a certified statement later, that is a different WAEC product. Today’s checker is not that certificate.',
    fails: [
      { title: 'Office told you digital is fake', body: 'The portal accepts serial and PIN. Origin is a valid voucher, not a building.' },
    ],
    close: 'Office optional. Official website mandatory.',
  },
  {
    slug: 'buy-bece-checker-on-feature-phone',
    title: 'Buy a BECE checker on a feature phone',
    excerpt:
      'KaiOS and keypad phones can dial *714*22#. Viewing grades may still need a smartphone or café browser afterwards.',
    tags: ['BECE', 'Feature phone', 'USSD'],
    lead: 'Buying does not require Chrome. Seeing the table of subjects usually does. Split the work: buy on the Nokia, check on a neighbour’s Android.',
    need: [
      'A dialler.',
      'Later, a browser you trust.',
    ],
    steps: [
      'On the feature phone, dial ' + ussd + '.',
      'Buy BECE. Write serial and PIN in a notebook.',
      'On any browser, open the official BECE portal and type what you wrote.',
    ],
    after: 'Do not give the notebook to a café and walk away. Stay while they type.',
    fails: [
      { title: 'USSD not on that network', body: 'Try the other SIM or the web checkout on a borrowed data phone.' },
    ],
    close: 'Keypad can buy. A browser must show. Plan both.',
  },
  {
    slug: 'how-to-confirm-wassce-or-bece-before-paying',
    title: 'Confirm WASSCE or BECE before you pay',
    excerpt:
      'The summary screen is the last chance. WASSCE and BECE vouchers are not interchangeable after the MoMo PIN.',
    tags: ['WASSCE', 'BECE', 'How to', 'FAQ'],
    lead: 'If you remember one habit from this blog, remember it: read the exam name next to the cedis.',
    need: [
      'Knowledge of the candidate’s actual exam.',
    ],
    steps: [
      `Dial ${ussd}.`,
      'Open the voucher list slowly.',
      'If the child is in JHS, **BECE**. If SHS or Nov-Dec, **WASSCE**.',
      'Abort with cancel if the label is wrong. Then start again.',
    ],
    after: 'A wrong voucher is a new purchase of the right one, plus a leftover PIN you might use for someone on the correct exam.',
    fails: [
      { title: 'Guessed because the queue was noisy', body: 'Step outside. Read. Then pay.' },
    ],
    close: 'Label first. PIN second. WAEC will not translate for you.',
  },
  {
    slug: 'ghana-waecdirect-org-how-to-use-after-ewale',
    title: 'How to use ghana.waecdirect.org after Ewale',
    excerpt:
      'A field-by-field walkthrough of the official WASSCE checker using serial and PIN from *714*22#.',
    tags: ['ghana.waecdirect.org', 'WASSCE', 'How to'],
    lead: 'The portal is a form. Treat it like a bank transfer: every box has one job.',
    need: [
      'WASSCE voucher SMS.',
      'Index and year.',
    ],
    steps: [
      'Visit ' + waecdirect + ' only.',
      'Examination type: WASSCE School or Private.',
      'Year: the sitting, not “this year” by reflex.',
      'Serial, then PIN from Ewale. Submit.',
    ],
    extra: {
      title: 'Reference numbers',
      body: 'Ewale’s payment reference is for support tickets. It is not a WAEC PIN.',
    },
    fails: [
      { title: 'HTTPS warning / odd subdomain', body: 'Leave. Type the host yourself.' },
    ],
    close: 'Form on WAEC. Receipt on Ewale. Do not mix the numbers.',
  },
  {
    slug: 'eresults-waecgh-org-bece-checker-guide',
    title: 'eresults.waecgh.org BECE checker guide',
    excerpt:
      'How to finish a BECE check on WAEC eResults after Ewale has texted serial and PIN.',
    tags: ['eresults.waecgh.org', 'BECE', 'How to'],
    lead: 'eResults looks like a government form because it is one. Complete it once, correctly.',
    need: [
      'BECE voucher.',
      'Index typed the same way twice if asked.',
    ],
    steps: [
      'Buy on ' + ussd + ' if needed.',
      'Open ' + eresults + '.',
      'Exam type BECE. Year. Serial. PIN. Captcha.',
      'Wait for the new window. Screenshot it.',
    ],
    after: 'Pop-up blockers sometimes hide the result. Allow the window instead of buying another PIN.',
    fails: [
      { title: 'Blocked pop-up', body: 'Enable pop-ups for this host and submit again with the same voucher.' },
    ],
    close: 'Same PIN, better browser settings, no second debit.',
  },
  {
    slug: 'wassce-results-not-showing-portal',
    title: 'WASSCE results not showing on the portal',
    excerpt:
      'No result is not automatically a bad Ewale voucher. Check year, exam type, index, and whether WAEC has released that sitting.',
    tags: ['WASSCE', 'Troubleshooting', 'WAEC'],
    lead: 'Empty states have several authors: WAEC release timing, your typos, or a voucher for the wrong exam. Only one of those is Ewale’s SMS.',
    need: [
      'The SMS.',
      'A second pair of eyes on the index.',
    ],
    steps: [
      'Confirm WAEC has released that exam.',
      'Confirm School vs Private.',
      'Confirm year and index.',
      'If the PIN itself is rejected after all that, then investigate the voucher with Ewale **if it never worked and SMS looks incomplete**.',
    ],
    after: 'Withheld or cancelled is a WAEC status. More MoMo will not clear it.',
    fails: [
      { title: 'Released tomorrow, bought three today', body: 'Keep one voucher. Wait for the release notice.' },
    ],
    close: 'Diagnose the portal before you diagnose the payment.',
  },
  {
    slug: 'bece-results-withheld-cancelled-what-to-do',
    title: 'BECE results withheld or cancelled: what to do',
    excerpt:
      'Withheld and cancelled are WAEC decisions. A new BECE checker on *714*22# will not reverse them.',
    tags: ['BECE', 'WAEC', 'Parents', 'FAQ'],
    lead: 'The checker did its job if it showed a withhold. Buy another checker only if you never saw any official status.',
    need: [
      'The screenshot of what WAEC displayed.',
      'The school’s contact for withheld cases.',
    ],
    steps: [
      'Do not pay a fixer.',
      'Ask the school / WAEC channels published for that year.',
      'Keep the Ewale SMS as proof you checked.',
    ],
    after: 'Placement may also stall. That is CSSPS/GES, still not a second voucher.',
    fails: [
      { title: 'Someone selling “release codes”', body: 'Scam. Stop.' },
    ],
    close: 'You paid to see the truth. The next step is official, not another USSD panic.',
  },
  {
    slug: 'index-number-mistakes-when-checking-waec',
    title: 'Index number mistakes when checking WAEC results',
    excerpt:
      'A single wrong digit burns a voucher use. Find the index on school paper, then buy the checker on Ewale.',
    tags: ['Index number', 'WAEC', 'How to'],
    lead: 'The expensive typo is not the PIN. It is the index. Serials are copied from SMS; indexes are copied from fading photocopies.',
    need: [
      'Primary document, not WhatsApp hearsay.',
    ],
    steps: [
      'Read the index aloud.',
      'Buy the correct exam checker on ' + ussd + '.',
      'Type the index once, look away, type the confirmation if the site asks.',
    ],
    extra: {
      title: 'Leading zeros',
      body: 'Keep them. They are digits, not decoration.',
    },
    fails: [
      { title: 'Used phone number as index', body: 'Start over with the real index. The voucher may already be bound.' },
    ],
    close: 'Slow index, fast PIN. Not the other way round.',
  },
  {
    slug: 'buy-result-checker-weekend-or-holiday-ewale',
    title: 'Buy a result checker on a weekend or holiday',
    excerpt:
      '*714*22# does not close on Saturday. Buy WASSCE or BECE checkers when the WAEC office is shut.',
    tags: ['Result checker', 'Weekend', 'Ewale'],
    lead: 'Offices close. USSD does not. The limitation on a Sunday is whether WAEC’s website is up, not whether Ewale can sell the PIN.',
    need: [
      'MoMo that works on weekends (it does).',
    ],
    steps: [
      `Dial ${ussd} any day the network is up.`,
      'Buy the right exam.',
      'If ghana.waecdirect.org is overloaded, keep the SMS and retry the **site**, not the payment.',
    ],
    after: 'Holiday traffic jams the portal. It does not void your voucher.',
    fails: [
      { title: 'Thought USSD was “weekday only”', body: 'Try it. The menu is the proof.' },
    ],
    close: 'Weekend buy is valid. Weekend double-buy is still waste.',
  },
  {
    slug: 'self-or-other-when-buying-checker-ewale',
    title: 'Self or other: who receives the result checker SMS',
    excerpt:
      'If Ewale asks self vs other, the phone you name is the one that should get serial and PIN. Plan that before the MoMo PIN.',
    tags: ['Result checker', 'SMS', 'Parents', 'FAQ'],
    lead: 'Paying and receiving can be different numbers. If you get that wrong, the candidate stares at an empty inbox while your phone holds the PIN.',
    need: [
      'The number that should store the voucher.',
    ],
    steps: [
      'On ' + ussd + ', read Self vs Other carefully.',
      'Other: type the candidate’s number as you would a transfer, then confirm the name if shown.',
      'Pay. Confirm which SIM beeped.',
    ],
    after: 'If it landed on you, forward it. The voucher still works.',
    fails: [
      { title: 'Other number with a typo', body: 'A stranger may now hold the PIN. Support with the reference; do not spray more purchases blindly.' },
    ],
    close: 'Name the inbox. Then name the exam. Then pay.',
  },
  {
    slug: 'how-to-check-wassce-results-without-scratch-card',
    title: 'How to check WASSCE results without a scratch card',
    excerpt:
      'Digital serial and PIN from *714*22# replace the plastic card. Check on ghana.waecdirect.org the same way.',
    tags: ['WASSCE', 'Scratch card', 'How to'],
    lead: 'No card in the house does not mean no checker. Ewale texts the two secrets the card would have hidden under latex.',
    need: [
      'A phone, not a kiosk.',
    ],
    steps: [
      'Buy WASSCE on ' + pay + '.',
      'Treat SMS fields as the scratched panel.',
      'Enter them on ' + waecdirect + '.',
    ],
    after: 'If you find an old unused card later, you now have two vouchers. Use them for two needs, not two tries at the same panic.',
    fails: [
      { title: 'Bought digital and card “to compare”', body: 'Unnecessary unless you have two candidates.' },
    ],
    close: 'The portal never required plastic. It required serial and PIN.',
  },
  {
    slug: 'how-to-check-bece-results-without-vendor',
    title: 'How to check BECE results without a vendor',
    excerpt:
      'No booth, no problem: buy BECE on *714*22#, then check on the official WAEC site from any browser.',
    tags: ['BECE', 'How to', 'USSD'],
    lead: 'Vendors are convenient until they are sold out. Your shortcode is not sold out.',
    need: [
      'MoMo.',
      'Index number.',
    ],
    steps: [
      `Dial ${ussd}, buy BECE.`,
      'Open the official BECE checker.',
      'Enter serial, PIN, index.',
    ],
    after: 'You can still print at a vendor. You do not have to **buy** at a vendor.',
    fails: [
      { title: 'Vendor offered to “do it all” for extra', body: 'Pay extra only if you want their labour, not a second voucher you already own.' },
    ],
    close: 'Vendor optional. Official check required.',
  },
  {
    slug: 'find-lost-checker-serial-and-pin',
    title: 'Find a lost result checker serial and PIN',
    excerpt:
      'Search SMS, backups, and the paying number first. Ewale support can help with a debit reference — do not immediately buy another *714*22# voucher.',
    tags: ['Find', 'SMS', 'Result checker'],
    lead: 'Lost PIN is usually a lost message, not a lost payment. Hunt the inbox like you would hunt a scratch card under the sofa.',
    need: [
      'Access to the paying SIM.',
      'MoMo date and amount.',
    ],
    steps: [
      'Search the thread list for Ewale / serial / PIN.',
      'Ask who else might have received “Other”.',
      'Screenshot cloud backups if the phone died.',
      'Support with the reference if the debit is real and the SMS never existed.',
    ],
    after: 'A second purchase is valid if support cannot rebuild the first voucher. Document that, then buy.',
    fails: [
      { title: 'Factory reset', body: 'The network may still have delivered SMS. A new phone with the same SIM can show old messages depending on the operator — look before you pay.' },
    ],
    close: 'Find first. Repurchase last.',
  },
  {
    slug: 'jhs-bece-checker-for-guardians-ewale',
    title: 'JHS BECE checker for guardians',
    excerpt:
      'Guardians of JHS candidates: buy BECE only, keep the SMS, check WAEC, then CSSPS. All from *714*22# plus two official websites.',
    tags: ['BECE', 'JHS', 'Guardians', 'How to'],
    lead: 'If you are the adult with the wallet, you are the checkout. The candidate is the index. Do not send a 15-year-old to negotiate a roadside card at night.',
    need: [
      'BECE certainty.',
      'Your MoMo.',
    ],
    steps: [
      'Buy BECE on ' + ussd + '.',
      'Check grades.',
      'Talk about the grades before you fight CSSPS rumours.',
    ],
    after: 'The child does not need to know your MoMo PIN to use the voucher.',
    fails: [
      { title: 'WASSCE bought because a neighbour shouted it', body: 'Neighbour’s child may be in SHS. Yours is JHS. Buy BECE.' },
    ],
    close: 'Guardian pays. Child’s index. BECE portal. Then placement.',
  },
  {
    slug: 'shs-wassce-checker-for-guardians-ewale',
    title: 'SHS WASSCE checker for guardians',
    excerpt:
      'Guardians of SHS candidates buy WASSCE / Nov-Dec on Ewale. The student checks ghana.waecdirect.org with their index.',
    tags: ['WASSCE', 'SHS', 'Guardians'],
    lead: 'Campus is far. MoMo is local. SMS forwards well. That is the whole long-distance checker story.',
    need: [
      'Student’s index, photographed clearly.',
      'A channel to send serial and PIN (not Facebook comments).',
    ],
    steps: [
      'Buy WASSCE on ' + pay + '.',
      'Send SMS image on WhatsApp.',
      'Student checks once and sends the result screenshot back.',
    ],
    after: 'If two uncles pay, the student should use the first working PIN and tell the family.',
    fails: [
      { title: 'Sent PIN in a 40-person group', body: 'Anyone can burn it. Use a direct chat.',
      },
    ],
    close: 'Distance is not a reason to use a fixer. It is a reason to use USSD.',
  },
  {
    slug: 'telecel-momo-buy-result-checker-ewale',
    title: 'Buy a WAEC result checker with Telecel Cash',
    excerpt:
      'Telecel (formerly Vodafone) wallets can pay Ewale. Dial *714*22#, pick WASSCE or BECE, approve the Cash PIN.',
    tags: ['Telecel', 'MoMo', 'Result checker', 'WAEC'],
    lead: 'The exam does not care which wallet paid. WAEC will not see Telecel or MTN. They will see serial and PIN.',
    need: [
      'Telecel Cash balance for the on-screen amount.',
      'The correct exam row.',
    ],
    steps: [
      `From the Telecel line, dial ${ussd}.`,
      'BECE or WASSCE / Nov-Dec.',
      'Approve Cash PIN.',
      'Read SMS on that same SIM.',
    ],
    after: 'If you expected the SMS on MTN, you bought on the wrong handset.',
    fails: [
      { title: 'Dual SIM paid Telecel, watching MTN inbox', body: 'Open the Telecel inbox.' },
    ],
    close: 'Wallet is a pipe. Exam type is the product.',
  },
  {
    slug: 'buy-waec-checker-quantity-1-to-80',
    title: 'Buying more than one WAEC checker on Ewale',
    excerpt:
      'Set quantity on *714*22# when you have more than one candidate. Confirm the total in cedis before the PIN.',
    tags: ['Result checker', 'Bulk', 'WAEC'],
    lead: 'Quantity is a multiplier. 3 × the unit price is 3 vouchers. It is not “three extra uses” of one PIN.',
    need: [
      'A number of distinct candidates.',
      'Balance for the **total**.',
    ],
    steps: [
      'Choose one exam type per checkout if the menu is per-product.',
      'Enter quantity.',
      'Read the total twice.',
      'Store every serial/PIN pair with a name.',
    ],
    after: 'If SMS shows one pair but you paid for ten, that is a support case with the debit amount — not a shrug.',
    fails: [
      { title: 'Quantity 10 for one child', body: 'Unless you need ten separate vouchers, you overpaid.' },
    ],
    close: 'Count people, then count vouchers. Then count cedis.',
  },
  {
    slug: 'what-you-get-when-you-buy-result-checker-ewale',
    title: 'What you get when you buy a result checker on Ewale',
    excerpt:
      'You get a serial number and a PIN by SMS — not a PDF of grades, not placement, not a certificate.',
    tags: ['Result checker', 'FAQ', 'Ewale'],
    lead: 'Search language is messy: “buy results”, “buy WASSCE”, “buy checker”. On Ewale the SKU is a voucher. Knowing that prevents rage at the wrong company.',
    need: [
      'The right expectation.',
    ],
    steps: [
      'Pay on ' + ussd + '.',
      'Receive serial + PIN.',
      'Take those to WAEC.',
      'Receive grades on WAEC.',
    ],
    extra: {
      title: 'What you do not get',
      body: 'You do not get CSSPS placement, a WAEC certificate reprint, or a changed grade. You do not get support from this blog’s host for the MoMo debit — that is Ewale.',
    },
    fails: [
      { title: 'Expected a download in USSD', body: 'USSD cannot host the result table. Open a browser.' },
    ],
    close: 'SMS secrets in, WAEC page out. That is the product.',
  },
  {
    slug: 'check-placement-cssps-free-vs-buy-checker',
    title: 'CSSPS placement is not a paid BECE checker',
    excerpt:
      'Check school placement on cssps.gov.gh. Buy a BECE result checker on *714*22# only when you need WAEC grades.',
    tags: ['CSSPS', 'BECE', 'School placement', 'FAQ'],
    lead: 'Two tabs: grades and school. Paying for the wrong tab is the most expensive mix-up in September.',
    need: [
      'To know which question you are asking.',
    ],
    steps: [
      '“What school?” → ' + cssps + ' (free in recent cycles).',
      '“What grades?” → BECE voucher on ' + ussd + ' → WAEC.',
      'Do not type serial into CSSPS.',
      'Do not type date of birth into Ewale.',
    ],
    after: 'Unplaced candidates follow GES self-placement instructions on CSSPS, not a second Ewale PIN.',
    fails: [
      { title: 'Sold a CSSPS checker at a kiosk this year', body: 'Verify against cssps.gov.gh. GES has said checking placement is free.' },
    ],
    close: 'Free portal for school. Paid voucher for grades. Keep the receipts in the right pocket.',
  },
  {
    slug: 'how-to-buy-result-checker-results-day-ewale',
    title: 'How to buy a result checker on results day',
    excerpt:
      'On release day, networks and portals slow down. Buy once on *714*22#, wait for SMS, then retry the WAEC site — not the payment.',
    tags: ['Results day', 'WASSCE', 'BECE', 'How to'],
    lead: 'Results day feels like a fire. The fire is traffic. Your job is to make one clean purchase and then be patient with WAEC’s servers.',
    need: [
      'A charged phone.',
      'Balance already in MoMo **before** the announcement, if you can.',
      'Bookmarked official URLs.',
    ],
    steps: [
      'Pick BECE or WASSCE once, correctly.',
      'Buy on ' + ussd + ' or [ewalepay.com](https://ewalepay.com).',
      'Save SMS.',
      'Loop on the official checker until it loads. Do not loop on checkout.',
    ],
    extra: {
      title: 'Family protocol',
      body: 'One person is the buyer. Announce it in the family chat. That single sentence prevents four debits.',
    },
    fails: [
      { title: 'Portal 500 error', body: 'Your voucher is still valid. Wait.' },
    ],
    close: 'One debit. Many refreshes. That is results day done well.',
  },
];

if (posts.length !== 60) {
  throw new Error(`Expected 60 posts, got ${posts.length}`);
}

const existing = new Set(
  fs.readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, '')),
);

const collisions = posts.filter((post) => existing.has(post.slug));
if (collisions.length && process.env.FORCE !== '1') {
  throw new Error(`Slug collision: ${collisions.map((post) => post.slug).join(', ')}`);
}

posts.forEach((post, index) => {
  post.date = isoDate(index);
  const filePath = path.join(dir, `${post.slug}.md`);
  fs.writeFileSync(filePath, render(post));
});

console.log(`Wrote ${posts.length} education posts`);
