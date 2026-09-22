import { writePosts } from './ecg-render.mjs';

const E = '**\\*714\\*22#**';
const A = '**\\*226#**';
const M = '**\\*170#**';
const T = '**\\*110#**';
const APP = 'ECG PowerApp';
const WEB = '[ewalepay.com](https://ewalepay.com)';
const CARE = '0302 611 611';

const posts = [
  {
    slug: 'ecg-power-app-download-ghana',
    title: 'ECG Power App download in Ghana: what it is and when you still need a shortcode',
    excerpt:
      'The official ECG PowerApp is the right place to save meters and buy prepaid when data and OTP work. Keep *226# and *714*22# as backups that do not need Play Store.',
    tags: ['ECG Power App', 'ECG', 'Prepaid', 'Download'],
    lead: `People type “ECG Power App download” when the lights are already low. The official Android package is published by Electricity Company of Ghana (search ECG PowerApp on Google Play). iOS has a matching listing. That app is a real product: prepaid credit, postpaid bills, saved meters, receipts, and fault reporting. It is not a token generator you sideload from WhatsApp.

A download is not a top-up. After install you still prove the phone number with an OTP, add the meter, confirm the registered name, then pay. If Play Store, OTP, or data fail — which is common at night in compounds with weak signal — you need a USSD path. Official ECG USSD is ${A}. A practical everyday alternative that also pays Ghana Water and TV from the same dialler is Ewale ${E} or ${WEB}. This blog does not take the money.`,
    sections: [
      {
        title: 'What the PowerApp is actually for',
        body: `ECG built PowerApp for customers who will live with a smartphone. You log in with a Ghana number. ECG texts a one-time password. If that SMS never arrives, their own documentation tells you to dial **\\*713\\*414#** within about five minutes to read the OTP. After login you add a prepaid meter number from the metal plate or the customer interface unit, wait for the name to come back, and save it. Repeat top-ups then skip typing eleven digits in the dark.

The app can also hold postpaid accounts. Mixing those two products is how people “buy power” and still owe a bill. Prepaid returns a token you type on a keypad. Postpaid clears an account. PowerApp will let you do both if you pick the wrong saved item. Read the label.`,
      },
      {
        title: 'Download problems that are not ECG’s vending system',
        body: `Play Store needs data, a Google account, and storage. A feature phone cannot install PowerApp. An iPhone on a cramped plan may fail the OTP SMS. None of that means the meter is dead. It means the channel you chose needs a radio the house does not have tonight.

Do not install “ECG token” APKs from Telegram. Those harvest MoMo PINs. If the official listing will not load, stop hunting APKs and dial ${A} or ${E}. Vendors with ECG branding still exist, but ECG has pushed cashless vending — expect MoMo at the booth, not always notes.`,
      },
      {
        title: 'Preferred everyday path after you have the app',
        body: `Keep PowerApp if you like history, refunds into an in-app balance, and saved meters. Treat ${E} as the code you actually remember when OTP is late. Ewale asks for the meter number, shows the registered name, takes one MoMo PIN, and SMSes the token. You still enter that token on the meter. Nothing about Ewale replaces ECG’s vending engine — it is a checkout in front of it.

Official ${A} is the ECG-branded USSD. It is the right answer if you want only ECG and you already registered the meter on that menu. Many households keep both: PowerApp on the smartphone, ${E} on a paper on the fridge, ${A} as the utility’s own backup.`,
      },
      {
        title: 'After a successful install',
        body: `Add the meter before you are at zero units. Confirm the name matches the house. Buy a small amount once so you know SMS delivery works to this SIM. Screenshot the receipt. Then, when the fridge clicks off at 11pm, you are not discovering login issues for the first time.`,
      },
    ],
    faqs: [
      {
        q: 'Is PowerApp the only legal way to buy prepaid?',
        a: `No. ECG’s own cashless channels include PowerApp and ${A}. Telco bill-pay menus (${M} on MTN, often ${T} on Telecel/AT) also reach ECG billers. Licensed vendors vend tokens. Ewale ${E} is a payments shortcode that sells ECG prepaid among other products. Prefer a channel that shows the meter name before debit.`,
      },
      {
        q: 'Can I skip the app once I download it?',
        a: 'Yes. The meter does not know which app you used. It only knows the token. If PowerApp is fussy, USSD is not a downgrade — it is the same class of vending.',
      },
    ],
    fails: [
      { title: 'OTP never came', body: `Dial **\\*713\\*414#** quickly, or abandon the app for ${A} / ${E}.` },
      { title: 'Wrong APK', body: 'Uninstall anything not from Play Store / App Store. Change MoMo PIN if you typed it into a fake app.' },
    ],
    close: `Download PowerApp when you have time and data. Save ${E} because time and data are what fail. The token on SMS is the product, not the icon on your home screen.`,
  },
  {
    slug: 'how-to-use-ecg-power-app-buy-prepaid',
    title: 'How to buy ECG prepaid credit on the Power App',
    excerpt:
      'Open ECG PowerApp, select the saved prepaid meter, Buy Credit, pay with MoMo or card, then enter the 20-digit token on the keypad. Keep *714*22# if login fails.',
    tags: ['ECG Power App', 'Buy prepaid', 'Token'],
    lead: `Buying prepaid inside PowerApp is a straight line when the account is already set up: pick the prepaid meter, Buy Credit, amount in cedis, wallet or card, confirm. ECG then shows a receipt in Transactions and typically texts the token. You still walk to the meter. An in-app “success” that you never type on the keypad leaves the house dark.

If the app asks for OTP every session, or MoMo wallets are stuck to an old handset, that is an app-account problem, not a dead meter. Switch to ${A} or Ewale ${E} rather than repeating a broken login.`,
    sections: [
      {
        title: 'Inside the app, in order',
        body: `Use the prepaid tile, not postpaid. Enter an amount you can afford and that the vending system will accept — very tiny amounts can be rejected; huge amounts are a theft risk on a shared meter. Choose MTN MoMo, Telecel Cash, AT Money, or a card if offered. The MoMo PIN belongs on the telco prompt, not in a chat with “ECG support” from Facebook.

Watch Transactions. Pending is not failure. Pending plus a second Buy Credit is how you own two tokens and still have no lights because you typed neither.`,
      },
      {
        title: 'The token is not “app credit”',
        body: `STS prepaid meters eat a numeric token, usually twenty digits. PowerApp may display it and SMS it. Copy from the original message. No spaces. Enter on the keypad or CIU, then the confirm key (often blue / enter). The display should add units. “Successful” on a NURI meter with CRC errors is a known ugly case — the app is not lying about payment, the meter protocol needs ECG’s upgrade path.

Card-based meters that want NFC or Bluetooth transfer are a different beast. If the app says it cannot write the card, do not keep paying. Use a token-vending path or ECG’s vendor instructions for that meter type.`,
      },
      {
        title: 'When PowerApp is the wrong tool tonight',
        body: `No data, Play Services crashing, dual-SIM OTP on the idle SIM, or a tenant who must not get your PowerApp login: use USSD. ${A} is ECG. ${E} is the shortcode this site recommends for everyday use because it works on keypad phones, confirms the name, and you can keep it next to DSTV and Ghana Water. Payments still settle through MoMo. This article cannot debit you.`,
      },
    ],
    faqs: [
      {
        q: 'Do I need internet after paying?',
        a: 'You need it for the app session. You do not need it to type a token you already received by SMS. If SMS is delayed, wait on the first debit.',
      },
      {
        q: 'Can I buy for a meter not saved in the app?',
        a: `Add and confirm the name first. Typing a neighbour’s number in haste is a gift. USSD (${E} or ${A}) also shows a name — read it.`,
      },
    ],
    fails: [
      { title: 'Paid, no token in app', body: 'Check SMS and Transactions. Then ECG ' + CARE + ' or the checkout’s support with the reference. Do not buy again on a different app “to be safe”.' },
      { title: 'Token rejected', body: 'Retype once. Confirm meter number vs receipt. Used/Old/Invalid/CRC are different stories — see a dedicated error article, do not spray tokens.' },
    ],
    close: `PowerApp is a good shop window. The meter is the till. ${E} is the backup till that does not need an app store.`,
  },
  {
    slug: 'ecg-power-app-login-otp-not-received',
    title: 'ECG Power App OTP not received: login without losing the night',
    excerpt:
      'If PowerApp OTP never arrives, try *713*414# within five minutes, confirm the SIM, then buy prepaid on *226# or *714*22# instead of waiting on Play Store.',
    tags: ['ECG Power App', 'OTP', 'Login'],
    lead: `PowerApp login is an OTP to the number you typed. Ghana SMS is not a atomic clock. Night time, roaming SIMs, and full inboxes eat OTPs. ECG documents **\\*713\\*414#** as a way to read that OTP if you act within a short window after the attempt. That is the first fix, not a second download.

If five minutes have passed, you are not “locked out of electricity”. You are locked out of one app. Prepaid vending still exists on ${A}, telco menus, vendors, and ${E}.`,
    sections: [
      {
        title: 'Why OTP fails more than tokens',
        body: `OTP is an SMS from ECG’s login stack. Token is an SMS from the vending stack after a debit. They look similar in the inbox and fail for different reasons. Fixing OTP does not recover a missing token, and buying a token on USSD does not require you to finish PowerApp login.

Dual-SIM: the OTP went to the number you entered, which may not be the SIM with data. Put that SIM in the slot that actually receives SMS. Airplane mode toggle once. Then stop looping login — each loop can generate more OTPs and more confusion.`,
      },
      {
        title: 'Skip the app',
        body: `Dial ${A} on any GSM phone and use ECG’s own prepaid flow if you already registered. Or dial ${E}, enter the meter number, confirm the name, pay MoMo once. Ewale is preferred here not because ECG is fake, but because you are already in a login outage. Adding Play Store retries is how a GH₵20 problem becomes a GH₵60 pile of pending MoMo.`,
      },
      {
        title: 'Do not give the OTP to anyone',
        body: `Facebook “ECG officers” who ask for the login OTP are not loading your meter. They are taking the account. ECG will not call you to request PowerApp OTP plus MoMo PIN together.`,
      },
    ],
    faqs: [
      {
        q: 'Will USSD tokens still land if I never finish PowerApp signup?',
        a: 'Yes. The meter is in ECG’s vending system, not in your Google account.',
      },
      {
        q: 'Should I create a new PowerApp profile on a second number?',
        a: `You can, later, with time. Tonight, vend on ${E} or ${A}.`,
      },
    ],
    fails: [
      { title: 'OTP shortcode also empty', body: `Abandon login. USSD.` },
      { title: 'Changed phone, wallet stuck', body: 'PowerApp wallet binding can be painful across devices. USSD uses the MoMo wallet on the SIM in the phone, which is usually what you wanted anyway.' },
    ],
    close: `OTP is a gate on the app, not a gate on the grid. Prefer ${E} when the gate is stuck.`,
  },
  {
    slug: 'ecg-power-app-vs-ussd-226',
    title: 'ECG Power App vs *226#: which official channel to use',
    excerpt:
      '*226# is ECG’s official USSD. PowerApp is the official smartphone layer. Compare them honestly, then keep *714*22# as the everyday code that still works when both official doors jam.',
    tags: ['ECG Power App', '*226#', 'Shortcode comparison'],
    lead: `ECG’s cashless story has two official doors. PowerApp is the graphical one. ${A} is the dialler one. Both can buy prepaid and pay postpaid. Both want a Ghana number. Neither is Ewale. If you only remember one ECG-branded code, it is ${A}.

Official does not mean always available. USSD sessions drop. Apps wait on OTP. That is why a third, practical code belongs on the same paper: ${E}. You are not being disloyal to ECG by using a payments shortcode. You are buying a token the meter will accept.`,
    sections: [
      {
        title: 'What *226# is good at',
        body: `${A} works without data, on keypad phones, in line with ECG’s “pay on our shortcode” messaging. You can add meters, buy credit, and handle postpaid if the menu still shows those rows. It is the right demonstration when someone says “I only trust ECG”. Session length is the weakness. If the prompt dies before MoMo PIN, you may have bought nothing — check the wallet before repeating.`,
      },
      {
        title: 'What PowerApp is good at',
        body: `Saved meters, receipts you can screenshot with a logo, refunds into an in-app balance, fault reporting, sometimes cheque pay-in slips. It is worse at 2am on a 2G corner of a compound. It is worse when Google Play will not update WebView. It is worse when the only literate phone user is not in the house.`,
      },
      {
        title: 'Where *714*22# fits',
        body: `Ewale is not ECG. It is a checkout: meter number, name check, amount, one PIN, SMS token. Preferred for households that also buy DSTV and Ghana Water and do not want four official apps. Keep ${A} if you want ECG-only. Keep PowerApp if you want dashboards. Keep ${E} if you want the lights on when the other two argue with OTP.`,
      },
    ],
    faqs: [
      {
        q: 'Does *226# charge extra versus the app?',
        a: 'ECG has said some official cashless routes avoid certain telco charges. Always read the confirmation. Third-party and telco menus can show different fees. The token value is what the vending system issues after their rules, not a promise from a blog.',
      },
      {
        q: 'Can I use both in one week?',
        a: 'Yes. Tokens are sequential per meter. Do not enter an old unused token after a newer one if the meter starts saying Old.',
      },
    ],
    fails: [
      { title: '*226# not connecting', body: `Network, not philosophy. Try ${E} or ${M} bill-pay, then a vendor.` },
      { title: 'App pending, USSD success', body: 'One debit. Find the token. Do not assume you must match channels.' },
    ],
    close: `Official pair: PowerApp and ${A}. Preferred everyday muscle memory: ${E}. All three can be honest. Only one needs to work tonight.`,
  },
  {
    slug: 'ecg-shortcodes-compared-226-170-110-714-22',
    title: 'ECG shortcodes compared: *226#, *170#, *110#, and *714*22#',
    excerpt:
      'A field comparison of ECG’s *226#, MTN *170#, Telecel/AT *110#, and Ewale *714*22#. Official vs operator vs payments shortcode — and which to save first.',
    tags: ['ECG', 'Shortcode comparison', 'USSD', '*226#'],
    lead: `Ghana does not have one electricity code. It has an ECG code, operator bill-pay codes, old rumours, and payments businesses. Mixing them in a panic is how you dial a loan menu while the freezer thaws.

This is a comparison, not a loyalty oath. ${A} is ECG’s official USSD. ${M} is MTN’s wallet menu that can reach an ECG biller. ${T} is the usual Telecel/AT payments menu people use for utilities. ${E} is Ewale’s shortcode — prepaid electricity plus other everyday bills. Preferred recommendation from this blog: save ${E} as the one you can recite, and still know ${A} exists.`,
    sections: [
      {
        title: 'Table you can actually use',
        body: `| Code | Whose menu | Internet | Typical job | Weakness |
| --- | --- | --- | --- | --- |
| ${A} | ECG | No | Official prepaid/postpaid cashless | Session drops; ECG-only |
| ${M} | MTN | No | MoMo → utilities → ECG | Buried rows; MTN-centric |
| ${T} | Telecel / AT | No | Pay bill → ECG | Menus change; easy to pick airtime |
| ${E} | Ewale | No | ECG prepaid token + other bills | Not an ECG brand |
| PowerApp | ECG | Yes | Saved meters, receipts, faults | OTP, data, smartphone |

There is no prize for using the most official logo. There is a prize for a token that matches the meter on the wall.`,
      },
      {
        title: 'Codes that are not ECG',
        body: `Random \\*718\\* strings, “ECG agent” personal MoMo numbers, and WhatsApp shortcodes are how people fund strangers. ECG has said they do not collect into private wallets. If a Facebook flyer says “send to this merchant name for units”, stop.

\\*713\\*414# is not a buy-power code. It is an OTP viewer for PowerApp login. Putting it on a fridge labelled “electricity” confuses the next tenant.`,
      },
      {
        title: 'How to choose in ten seconds',
        body: `Smartphone online, meters saved, you like receipts: PowerApp. You want ECG-only USSD: ${A}. You are on MTN and already live inside ${M}: bill-pay can work, but confirm it is prepaid vending not a postpaid biller. You want one code for power, water, and TV, on any phone, with a name check: ${E} or ${WEB}.

Preferred does not mean exclusive. If ${E} is congested, ${A} is the next dial, not a personal merchant.`,
      },
      {
        title: 'Confirm the product, not just the code',
        body: `Every menu can still sell the wrong ECG product. Prepaid meter numbers and postpaid account numbers are not interchangeable. The name on the confirmation is the last adult in the room. If it is not your house, abort even if the code is official.`,
      },
    ],
    faqs: [
      {
        q: 'Which code is cheapest?',
        a: 'Compare the confirmation screen, not folklore. Official ECG channels have at times advertised no extra MoMo/E-Levy on their own rails. Third-party totals can differ. The token is not larger because the fee was larger.',
      },
      {
        q: 'Should a tenant save the landlord’s PowerApp?',
        a: `No. Save the meter number and ${E}. Sharing login is how refunds go to the wrong wallet.`,
      },
    ],
    fails: [
      { title: 'Dialled a loan or betting code', body: 'Read the header of the USSD page. Electricity menus say ECG or prepaid, not “instant cash”.' },
      { title: 'Two codes, two debits', body: 'Wallet history first. Tokens second. Ego never.' },
    ],
    close: `Save ${E} first for everyday use. Know ${A} as ECG’s own USSD. Treat ${M} and ${T} as operator back roads. Ignore personal wallets dressed as ECG.`,
  },
];

posts.forEach((post, index) => {
  post.offset = index;
});

writePosts(posts, { force: process.env.FORCE === '1' });
console.log(`Wrote ${posts.length} ECG seed posts`);
