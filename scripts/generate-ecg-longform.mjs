import { writePosts, renderEcgPost } from './ecg-render.mjs';

const E = '**\\*714\\*22#**';
const A = '**\\*226#**';
const M = '**\\*170#**';
const T = '**\\*110#**';
const APP = 'ECG PowerApp';
const WEB = '[ewalepay.com](https://ewalepay.com)';
const CARE = '0302 611 611';
const PAY =
  'Payments happen on **Ewale** (' +
  WEB +
  ' or ' +
  E +
  '), not on this blog. Ewale is a checkout in front of ECG’s vending system. It is not Electricity Company of Ghana.';

const posts = [];

posts.push({
  slug: 'dumsor-versus-empty-prepaid-meter',
  title: 'Dumsor versus an empty prepaid meter: how to tell which dark you are in',
  excerpt:
    'A feeder outage and a meter at zero units feel identical in a dark room. Only one of them is solved by buying a prepaid token.',
  date: '2026-07-10',
  tags: ['ECG', 'Prepaid', 'Outage', 'Dumsor'],
  lead: `Ghanaians use “dumsor” for almost every kind of darkness. That habit costs money. A feeder outage, a blown transformer, a scheduled load-shedding block, and a prepaid meter that has run to zero units all leave the fridge silent. Only the last one is a vending problem. Empty prepaid is not the same as dumsor. Buying a token during a neighbourhood outage will not relight the street. Skipping a token because “ECG is off again” will leave you dark after the feeder returns.

The diagnostic is older than smartphones. Look at the next house, the street light, and the meter display — in that order — before you open a wallet. ${PAY}`,
  sections: [
    {
      title: 'What dumsor actually is in 2026',
      body: `Dumsor, in everyday speech, means the grid is not delivering energy to your area. The cause might be generation shortfall, a tripped feeder, a fault on the 11kV line, a blown fuse at the pole, or planned maintenance. Electricity Company of Ghana restores those from the network side. You cannot type a 20-digit token hard enough to fix a dead feeder.

The prepaid meter still has a job during dumsor: it remembers remaining units, and it will accept a new token if you can see the keypad. Those units sit and wait. They do not jump the queue at the substation. If neighbours on the same transformer are also dark, you are almost certainly in an outage, not in a personal empty-meter event.`,
    },
    {
      title: 'What an empty prepaid meter actually is',
      body: `A prepaid meter is a small shop in the wall. You buy credit, it issues or accepts a token, units drop as you cook and iron, and at some threshold the relay opens. That is a commercial disconnect you inflicted on yourself by running out of credit. The rest of the street can be blazing. Your flat is dark because the meter decided you had spent what you paid for.

Look at the customer interface unit or the meter face. A display that still has power to show **0.00** units, “Connect” waiting, or a low-credit warning is a vending problem. A completely dead display while the whole compound is black is more often an outage — the meter itself has no mains to light its screen. People confuse a blank screen with “the meter is empty.” A blank screen during a feeder trip is normal. Check a neighbour before you spend.`,
    },
    {
      title: 'The neighbour-and-street test',
      body: `Step outside. If three houses sharing your pole are lit and yours is not, you have a household problem: empty units, a tripped internal breaker, a burnt socket, or a meter that rejected the last token. If the whole stretch is dark, including shops that you know keep credit on the meter, treat it as ECG’s network until proven otherwise.

Street lights are a useful but imperfect clue. Some are on a different circuit. A dark street light plus dark houses is still a strong outage signal. A lit street with your rooms dark points at your meter or your consumer unit. In a compound with a shared gate light on a different meter, that gate light can lie to you. Ask the people in the next room, not the pole.`,
    },
    {
      title: 'Why panic-buying during dumsor is a waste of attention',
      body: `A token bought in an outage is not wasted if you needed units anyway. It is wasted attention if you already had credit and you are buying a second token because the lights will not come on. The vending system will happily sell you more credit. The feeder does not care. You now own two tokens, a thinner wallet, and the same darkness.

If you are genuinely near zero and the outage may last hours, buying once is reasonable — the freezer will need those units when power returns, and night vendors may be closed. Buy once. Enter the token when you can see the keypad, even by phone torch. Then wait on ECG, not on another checkout.`,
    },
    {
      title: 'When the display is lying, or you cannot reach it',
      body: `Split-meter installations put the bulky meter in a locked corridor and a CIU in the kitchen. The CIU can go blank on a flat battery while the main meter still has units. Replacing a CIU battery is not the same as buying credit. If the CIU says zero and the main meter (when you get the landlord to open the box) still shows units, you do not have an empty meter. You have a communication or battery issue. Call a technician or ECG — do not keep vending.

If you cannot reach the meter at all, do not guess the number from an old WhatsApp. Wrong-meter gifts are permanent. Wait until someone can read the sticker, or use a number you confirmed last week against the registered name on the checkout.`,
    },
    {
      title: 'After you know which dark it is',
      body: `Empty meter, street alive: buy prepaid. Preferred everyday path is ${E} or ${WEB}. Confirm the registered name, pay mobile money once, wait for the SMS, type the token. Official ${APP} and ${A} remain ECG’s own doors if you already live in those apps. This site prefers Ewale because the same shortcode also pays water and TV, works on a keypad phone, and does not need Play Store at 9 p.m.

Outage, street dead: call ECG on **${CARE}** if you need to report a fault, or wait if the whole district is already on radio. Do not open three different payment apps “just in case.” Tokens do not start generators.`,
    },
  ],
  faqs: [
    {
      q: 'Can a token I buy during dumsor expire before the lights return?',
      a: 'Unused tokens remain valid to enter on that meter. Enter them. Units sit on the meter. They are not a reservation with ECG’s control room. If you delay entering and later buy another token, follow the meter’s rules about old versus new tokens — type the unused one; do not spray digits.',
    },
    {
      q: 'The whole house is dark but the neighbour on the same block has power. Empty or outage?',
      a: 'Treat it as your meter, your breaker, or a service cable issue to your house — not district dumsor. Check units. If units remain and the main breaker is on, ECG may still need to see a service-drop fault. Buying more credit will not splice a burnt cable.',
    },
    {
      q: 'Is Ewale the same as ECG?',
      a: `No. ECG runs the network and the official vending platforms (${APP}, ${A}). Ewale is a payments shortcode and website that can sell prepaid tokens. Prefer it for everyday top-ups. Never tell a relative that ${E} “is ECG.”`,
    },
    {
      q: 'Should I call 0302 611 611 before I buy a token?',
      a: `Only if you have already decided this is a network or meter-hardware problem. An empty prepaid display plus lit neighbours is not a call-centre job. It is a checkout job.`,
    },
  ],
  fails: [
    {
      title: 'Bought a token, street still dark',
      body: 'You may have been in an outage. Enter the token anyway so units are waiting. Do not buy a second one.',
    },
    {
      title: 'Assumed dumsor, feeder returned, house still dark',
      body: 'You were empty. Buy prepaid once on ' + E + ' and enter the token.',
    },
    {
      title: 'Paid postpaid during a prepaid empty',
      body: 'Wrong product. Postpaid clears an account number. It does not mint a token. Use prepaid for token meters.',
    },
    {
      title: 'Guessed the meter number in the dark',
      body: 'If the name on the confirmation was not your household, abort. A confirmed PIN is a gift to that meter.',
    },
  ],
  close: `Name the dark before you name the amount. Dumsor is ECG’s network. Empty prepaid is your credit. ${E} is the everyday way to fix the second one. **${CARE}** is how you talk to ECG about the first. This blog cannot debit you and cannot close a feeder.`,
});

posts.push({
  slug: 'buy-token-during-ecg-outage',
  title: 'Should you buy an ECG prepaid token during an outage?',
  excerpt:
    'Buying credit while the feeder is down stores units for later. It does not restore the street. Buy once, enter the token by torch, and do not double-pay.',
  date: '2026-07-09',
  tags: ['ECG', 'Prepaid', 'Outage', 'Token'],
  lead: `The lights die, the freezer starts a quiet thaw, and someone in the WhatsApp group says “buy power, maybe the meter reset.” That sentence mixes two systems. An outage is a network event. A token is a vending event. You can buy a token during an ECG outage. You should only do it if the meter was already low, and you should do it once.

Units purchased during dumsor sit on the meter after you enter the token. They do not bribe the control room. ${PAY}`,
  sections: [
    {
      title: 'When buying during an outage is rational',
      body: `If you were already at a few units, the outage may last long enough that you will hit zero the moment the feeder returns — iron, fridge start-up surge, and lights all at once. Loading before that moment is ordinary household planning. Night vendors will be shut. ${APP} may fail OTP because the cell site is congested. USSD still works on a phone with GSM.

Buy a normal amount, not a panic amount. A huge load on a shared meter is how a roommate walks away with a month of your credit, or how a stolen phone plus a saved meter number becomes a theft. Confirm the name. One PIN. Stop.`,
    },
    {
      title: 'When buying during an outage is superstition',
      body: `If the meter showed healthy units an hour ago and the whole street went dark together, more credit will not help. People still buy because action feels better than waiting. The vending engine will not refuse you. You will own extra units you did not need tonight, which is harmless if you can afford it, and expensive if you cannot.

Worse: you buy, SMS is slow because the same congestion that killed the feeder is delaying texts, and you buy again. Now you have two tokens for a meter that was never empty. Enter both later. Do not invent a third “to be sure.”`,
    },
    {
      title: 'Entering a token when the keypad is in the dark',
      body: `The meter does not need the national grid to be healthy in every case — some meters still accept keypad input on residual power or on the CIU. Use a phone torch. Type the twenty digits with no spaces. Press the enter key the meter was designed for (often the blue key). If the display is completely dead and will not wake, wait until mains return, then enter the token immediately. A token sitting in SMS is still unused. It is not “on the meter” until the meter says so.

Do not dictate the token to a child who then types it on the neighbour’s CIU because that kitchen still has a candle and a similar box. Tokens are married to a meter number. The wrong box will reject it or, in ugly cases, you discover too late that you paid the wrong number.`,
    },
    {
      title: 'Official channels versus the everyday shortcode during faults',
      body: `${APP} is the right official app when data, OTP, and login already work. ${A} is ECG’s official USSD. Both remain legitimate during an outage. They are not always reachable when everyone in the district is doing the same thing.

This blog’s preferred everyday approach is ${E} or ${WEB}: meter number, name check, amount, one mobile-money PIN, SMS token. That is not an ECG brand. It is a checkout. If Ewale is congested, ${A} is the next honest dial, then a licensed vendor when shops reopen. Personal MoMo numbers posing as “ECG officers” on Facebook are not a channel.`,
    },
    {
      title: 'What to tell the rest of the house',
      body: `If one person buys during the outage, put it in the family chat with the amount and “do not buy again.” The second most common double purchase in Ghana is not fraud. It is two siblings being helpful. Forward the token SMS to whoever can reach the keypad. Paying is not the same as keying.

When power returns, glance at the unit display before you celebrate. If it is still zero, you never entered the token, or you entered it on the wrong meter, or you were empty and the SMS never arrived. Those are three different repairs. Only the last one needs support. The first needs walking to the wall.`,
    },
  ],
  faqs: [
    {
      q: 'Will ECG reverse a token I bought during a long outage?',
      a: 'Unlikely. You bought credit. Credit is not a ticket to energy delivery at a chosen hour. Enter it. If the meter later faults, that is a hardware or vending-support issue, not a “dumsor refund.”',
    },
    {
      q: 'The USSD session died while the feeder was down. Did I pay?',
      a: 'Read mobile-money history, not the disappeared USSD page. A debit is a purchase in progress or completed. Pending is not an invitation to start a second product on a different app.',
    },
    {
      q: 'Can I buy on \\*226# and \\*714\\*22# “to be safe”?',
      a: `No. Two successful checkouts are two tokens. Pick one path. Preferred everyday: ${E}. Official backup: ${A} or ${APP}.`,
    },
  ],
  fails: [
    {
      title: 'SMS delayed, second purchase done',
      body: 'You now have two tokens. Keep both SMS messages. Enter them on the correct meter when you can see it. Do not buy a third.',
    },
    {
      title: 'Token typed, meter dead, street dead',
      body: 'The token likely sat. Wait for the feeder. Call ' + CARE + ' only to report the outage, not to demand vending.',
    },
    {
      title: 'Vendor “held” your cash until power returns',
      body: 'You do not need a vendor to be online for USSD. Prefer ' + E + ' and keep the SMS yourself.',
    },
  ],
  close: `An outage is allowed to make you anxious. It is not allowed to make you a double customer. If you need units, buy once on ${E} or ${WEB}, torch the keypad, and let ECG restore the line. This article cannot take your money and cannot close a fault ticket.`,
});

posts.push({
  slug: 'pay-ecg-postpaid-bill-online-ghana',
  title: 'How to pay an ECG postpaid bill online in Ghana',
  excerpt:
    'Postpaid is an account number and a bill, not a 20-digit token. Pay the postpaid product once, keep the SMS, and do not wander into prepaid by habit.',
  date: '2026-07-08',
  tags: ['ECG', 'Postpaid', 'Online payment', 'Ewale'],
  lead: `Postpaid electricity in Ghana is a monthly (or periodic) bill against an account. You do not type a token on a keypad after a successful postpaid payment. If your fingers are waiting for twenty digits, you are in the wrong product — or you are actually prepaid and should not be here.

Online in this country still means several doors: ${APP}, ECG’s own USSD ${A}, telco bill-pay menus, and payments businesses such as Ewale. None of those doors is this blog. ${PAY}`,
  sections: [
    {
      title: 'Find the identifier that postpaid actually uses',
      body: `Postpaid uses an **account number**, printed on the bill, on older ECG paper, or in ${APP} if someone already saved the account. It is not the eleven-or-so-digit meter serial you would type for prepaid vending, even if a meter exists on the wall. Mixing those two strings is the most expensive typo in the utilities menu.

Read the name that comes back. Landlords reuse accounts. Previous tenants leave bills. If the name is not the household you intend to clear, stop. Paying a stranger’s postpaid debt does not put a single unit on your prepaid meter, and it does not create a token you can retype next door.`,
    },
    {
      title: 'The honest online paths',
      body: `${APP} is ECG’s official smartphone path: save the postpaid account, see an outstanding figure, pay with mobile money or a card if the app offers it. ${A} is the official USSD twin. Telco menus (${M} on many MTN wallets, often ${T} on Telecel or AT) bury ECG under “pay bill” — easy to tap the prepaid biller by mistake.

Ewale (${E} or ${WEB}) is the everyday checkout this site recommends when you already pay water and TV from the same dialler. Choose the **postpaid** row, not prepaid. Confirm name and amount. One PIN. You should receive a payment confirmation, not a token SMS. If the menu is trying to vend a token, you picked prepaid.`,
    },
    {
      title: 'Amount: full bill, part payment, and estimates',
      body: `Pay what the confirmation shows you are paying. If the bill in your hand is older than the figure on the screen, believe the live query more than last month’s PDF — then keep the SMS if they disagree. Partial payments may be allowed. They do not always prevent disconnection if ECG’s rules for that account still see arrears. A blog cannot promise that GH₵50 tonight saves a postpaid house from a crew tomorrow.

Do not round into a prepaid amount “because that is what we always load.” Prepaid amounts buy tokens. Postpaid amounts reduce an account balance. They are not interchangeable fuel.`,
    },
    {
      title: 'What “online” does not do',
      body: `It does not print a new paper bill. It does not automatically notify every roommate. It does not restore a prepaid house that went dark because someone used the postpaid flow. It does not skip ECG’s posting delay. The SMS is your receipt while ECG’s own statement catches up. Paying twice because the website still says “unpaid” an hour later is how you overpay an account and still feel cheated.

If you needed a token, abandon this article and use prepaid vending. If you needed the lights during a feeder outage, neither product will help until the network is back.`,
    },
    {
      title: 'After due date, still online',
      body: `Online payment still works after the due date on many accounts. That is not the same as a promise that disconnection has not already been scheduled. Pay, keep the reference, and if a crew still arrives, the conversation is with ECG on **${CARE}** plus your SMS — not a second panic payment on a different app without checking the first debit.

Reconnection after a postpaid cut is an ECG process. It is not a prepaid token. Do not let a vendor sell you “units to reconnect postpaid.”`,
    },
  ],
  faqs: [
    {
      q: 'Why did I not get a 20-digit token after paying postpaid?',
      a: 'Because postpaid does not use tokens. The confirmation SMS is the product. If you expected a token, you may have a prepaid meter and used the wrong flow — or you used the right flow and should stop waiting for digits.',
    },
    {
      q: 'Can I pay a postpaid bill from another town?',
      a: `Yes, if you have the account number and you confirm the name. ${E} and ${WEB} are built for that. Send the SMS to whoever holds the paper bill so nobody pays again.`,
    },
    {
      q: 'Is paying on Ewale the same as walking into an ECG office?',
      a: 'It is a payment against the same class of account if you chose postpaid and the name matched. It is not a customer-service visit. Name changes, tariff disputes, and meter replacements still belong to ECG.',
    },
  ],
  fails: [
    {
      title: 'Chose prepaid because the icon said ECG',
      body: 'You may now own a token for a meter number you typed in confusion. That token does not clear the postpaid bill. Pay postpaid as a new, correct transaction.',
    },
    {
      title: 'Account still showing unpaid',
      body: 'Wait with the first reference. Call ' + CARE + ' or the checkout’s support if posting is still wrong after a reasonable delay. Do not stack payments.',
    },
    {
      title: 'Paid a previous tenant’s name',
      body: 'You paid that account. Get the current account number from the bill or from ECG. Do not guess.',
    },
  ],
  close: `Postpaid online is account number, name, amount, one PIN, and no token. Prefer ${E} or ${WEB} for the everyday payment. Keep ${APP} and ${A} as ECG’s own doors. Keep **${CARE}** for the bill that will not post. This blog is not a till.`,
});

posts.push({
  slug: 'postpaid-account-number-vs-prepaid-meter-id',
  title: 'ECG postpaid account number vs prepaid meter ID',
  excerpt:
    'One string buys a token. The other pays a bill. Mixing a meter ID and an account number is how households fund the wrong product.',
  date: '2026-07-07',
  tags: ['ECG', 'Prepaid', 'Postpaid', 'Meter number'],
  lead: `Every ECG payment screen asks for “the number.” That is not one number. Prepaid vending wants the **meter number** (the identifier on the metal plate or CIU, the one the STS system knows). Postpaid billing wants the **account number** on the bill. They can look similar when you are tired. They are not interchangeable.

If you only remember one rule: token meters eat meter IDs; billed houses eat account numbers. ${PAY}`,
  sections: [
    {
      title: 'Where the prepaid meter ID lives',
      body: `Walk to the meter. The number is printed on a sticker or stamped on the case. It is also on many successful token SMS messages and on vendor receipts. In a compound, each door may have its own meter and its own ID. Paying the gate meter does not load the room meter.

Copy from the plate when you can. WhatsApp forwards rot: a five becomes a six, an eleven-digit string loses a tail. The checkout will still find *a* meter if those digits exist in ECG’s database. The name check is your only adult supervision. If the name is wrong, the ID you typed is wrong for this house, even if it is a valid ID for someone else.`,
    },
    {
      title: 'Where the postpaid account number lives',
      body: `It lives on the bill, in ECG correspondence, and in ${APP} if the account was saved. It does not live on a prepaid keypad. People photograph a prepaid meter and try to pay postpaid with that photo. The system may reject it or, worse, match something you did not intend.

If you never receive a bill and you always type tokens, you are not postpaid, whatever a neighbour told you about “ECG accounts.” Billing type follows how ECG set the premise, not how your last house worked.`,
    },
    {
      title: 'What happens when you swap them',
      body: `Prepaid flow + postpaid account number: you are asking a token engine for a meter it may not vend. You might get an error, a name you do not recognise, or a token for a meter that happens to share digits. Do not approve a name you cannot explain.

Postpaid flow + prepaid meter ID: you are trying to pay a bill on an identifier that is not an account. You might pay nothing, or you might hit an account you should not touch. Either way you still have no token, and a prepaid house stays dark.

There is no “convert” button. Support may help with a true misdirected payment. They cannot turn a postpaid receipt into keypad digits.`,
    },
    {
      title: 'Households that have both',
      body: `Shops sometimes have a prepaid meter for the store and a postpaid account for an older annex. Families inherit a postpaid landlord account and a prepaid tenant meter. Save both identifiers on paper, labelled in words a visitor can read: “SHOP PREPAID METER” and “HOUSE POSTPAID ACCOUNT.” Do not save them as two similar digit strings in a phone called “ECG.”

When you dial ${E}, pick the product first, then the number. Product choice is not a formality. It decides which engine you are about to fund.`,
    },
    {
      title: 'How Ewale, PowerApp, and \\*226# treat the difference',
      body: `${APP} stores labelled meters and accounts if you add them carefully. People still tap the wrong saved row. ${A} is ECG’s official USSD and still depends on you picking prepaid versus postpaid. ${E} is the preferred everyday shortcode here because the session is short, the name comes back, and you can keep one code for several bills — but it will not save you from choosing the wrong ECG product.

Read the header on the USSD page. Read the name. Read whether the confirmation talks about a token or a bill. Then PIN.`,
    },
  ],
  faqs: [
    {
      q: 'The vendor always asked for “meter number” and I am postpaid. Who is right?',
      a: 'Vendors who only vend tokens live in prepaid. A postpaid customer should not be at a token booth unless they also have a prepaid meter. Use the account number on a postpaid rail.',
    },
    {
      q: 'Can one number be both?',
      a: 'Not as a user-facing trick. ECG’s internal keys may link a meter asset to an account, but the thing you type in a prepaid menu is not a licence to skip the account number on a postpaid menu.',
    },
    {
      q: 'I lost the bill and I only have the meter plate.',
      a: `If you are postpaid, recover the account from ECG (${CARE} or a district office) or from ${APP} if it was saved. Do not invent an account by rearranging meter digits.`,
    },
  ],
  fails: [
    {
      title: 'Name matched a relative on a different service',
      body: 'Same family name on a different product still funds the wrong engine. Match product plus name plus address knowledge.',
    },
    {
      title: 'Copied a number from an old token SMS into postpaid',
      body: 'That SMS holds a meter ID and a token, not an account number.',
    },
    {
      title: 'Landlord said “use the meter” for a billed house',
      body: 'Ask for the paper bill. Landlords mix language. The checkout will not translate.',
    },
  ],
  close: `Meter ID, prepaid, token. Account number, postpaid, no token. Write those six words on the fridge. Prefer ${E} for the payment once you know which line you are on. ECG remains ${APP}, ${A}, and **${CARE}**. This blog does not collect either number.`,
});

posts.push({
  slug: 'ecg-postpaid-after-due-date',
  title: 'Paying an ECG postpaid bill after the due date',
  excerpt:
    'Late payment can still go through online or on USSD. It is not a token, and it is not a guarantee that a disconnection crew has been cancelled.',
  date: '2026-07-06',
  tags: ['ECG', 'Postpaid', 'Due date', 'Disconnection'],
  lead: `Due dates on ECG postpaid bills are calendar facts, not token countdowns. After the date, many digital rails will still take money against the account. That payment reduces what you owe. It does not rewind a disconnection order by magic, and it does not emit a prepaid token for a keypad.

If your house is prepaid, this article is the wrong map — empty units are not “overdue bills.” ${PAY}`,
  sections: [
    {
      title: 'What “after due date” means for postpaid',
      body: `You still have an account. ECG still wants the arrears. Late payment can attract whatever penalties ECG’s tariff and billing rules apply — this blog will not invent a percentage. Read the bill and the confirmation screen. Pay the amount you intend to clear. Keep the SMS as proof of the time you paid.

Online and USSD do not close at 5 p.m. with the district office. That is the point of cashless. It is also why people pay at 11 p.m. and assume a crew cannot arrive at 8 a.m. Assume nothing about crews. Assume you needed the reference.`,
    },
    {
      title: 'Disconnection is not empty prepaid',
      body: `Postpaid disconnection is ECG opening the service because of debt (or a related enforcement step). Prepaid “disconnection” at zero units is the meter’s relay doing its commercial job. After-due-date postpaid energy is not restored by buying a token. If a vendor offers you “emergency units” for a postpaid cut, you are being sold the wrong product.

If the lights are already off after a postpaid cut, paying online is step one. Reconnection procedure is step two, with ECG. Call **${CARE}** or visit the district with the payment proof. Do not stack prepaid vending on top.`,
    },
    {
      title: 'How to pay late without making it worse',
      body: `Use one channel. Preferred everyday checkout: ${E} or ${WEB}, **postpaid** product, account number, name check, amount, one PIN. Official alternatives: ${APP} and ${A}. Telco bill-pay (${M}, ${T}) can work if you select ECG postpaid and not a token biller.

Do not pay GH₵100 on Ewale and another GH₵100 on PowerApp because the first SMS was slow. Late plus double is still double. If the confirmation shows fees, those fees are part of what leaves the wallet — read them. ECG has advertised no extra charges on some official rails; third-party totals can differ. This article will not declare E-Levy as always zero.`,
    },
    {
      title: 'Partial payments after the date',
      body: `A partial payment is a partial reduction. Whether it is enough to halt enforcement is ECG’s rule for that account, not a blog policy. If you can clear the arrears, do that in one confirmed debit rather than five experimental ones. If you cannot, pay what you can on the correct account, then speak to ECG about the rest. WhatsApp “officers” who ask for MoMo to a personal wallet to “stop the van” are not a due-date strategy.`,
    },
    {
      title: 'When the bill and the live balance disagree',
      body: `Paper lags. Estimations happen. A payment you made last week may not be on the crumpled bill in the drawer. Trust a live name-and-balance query on an official or reputable checkout more than the paper, then keep both. If you are billed for a house you have left, that is an account-administration issue for ECG, not a reason to start prepaid vending on the new flat’s meter under the old account number.`,
    },
    {
      title: 'Do not treat late as prepaid',
      body: `Stress after a due date makes people grab the first ECG-looking row on a telco menu. That row is often prepaid. A late postpaid house that suddenly “buys units” has not paid the arrears. It may have funded a meter ID they typed from a sticker that was never their billing key.

Stay on the postpaid product. Use ${E} or ${WEB} if that is your everyday checkout, ${APP} or ${A} if you want ECG’s own door. Then, if lights stay off because a crew already visited, the next adult is **${CARE}**, not a token vendor at the junction who has never seen your account.`,
    },
  ],
  faqs: [
    {
      q: 'Will paying after the due date on \\*714\\*22# avoid disconnection automatically?',
      a: 'It pays the account if you used postpaid correctly. Automatic crew cancellation is not a feature this blog can promise. Keep the SMS and contact ECG if a visit still happens.',
    },
    {
      q: 'I paid late and still have no token.',
      a: 'Correct, if you are postpaid. Tokens are prepaid. If the house is actually a token meter, you used the wrong flow and you still need prepaid credit.',
    },
    {
      q: 'Should I wait until I can visit an office because I am late?',
      a: `No. Pay electronically if you can, then use the office or ${CARE} for disputes and reconnection. Standing in a queue does not make the debit more valid than a confirmed MoMo payment.`,
    },
  ],
  fails: [
    {
      title: 'Bought prepaid “emergency credit” after a postpaid cut',
      body: 'Wrong engine. Pay the postpaid account. Ask ECG about reconnection.',
    },
    {
      title: 'Two late payments on two apps',
      body: 'Find both references. You may have overpaid. Stop the third attempt.',
    },
    {
      title: 'Paid the wrong account because the due date stressed you',
      body: 'Name check exists for this moment. Support may or may not recover a misdirected bill payment. The next payment must be on the right account.',
    },
  ],
  close: `After the due date you still pay an account, not a keypad. Prefer ${E} for the everyday debit. Use **${CARE}** when money has left and the service has not. Empty prepaid remains a different darkness. This blog will not charge you a late fee; it also will not take the bill.`,
});

posts.push({
  slug: 'disconnection-prepaid-empty-vs-postpaid-debt',
  title: 'ECG disconnection: empty prepaid meter vs postpaid debt',
  excerpt:
    'Zero units is a self-inflicted prepaid cut. A postpaid cut is debt enforcement. They feel the same in the dark and they are repaired by opposite payments.',
  date: '2026-07-05',
  tags: ['ECG', 'Prepaid', 'Postpaid', 'Disconnection'],
  lead: `“ECG has cut us” is the sentence that collapses two legal and technical events into one panic. On prepaid, the meter is allowed to open its relay when credit hits zero. Nobody from the district office needs to visit. On postpaid, disconnection is an enforcement step against an account that did not pay. Putting a token into a postpaid cut does not restore the line. Paying a postpaid bill does not mint units on a token meter.

Start with how this house has always paid. ${PAY}`,
  sections: [
    {
      title: 'Prepaid empty: the meter did its job',
      body: `STS prepaid is designed so that energy stops when you have not paid for more of it. That stoppage is not dumsor. Neighbours can be on. Your display can show zero. The repair is a token: confirm meter number and name, pay once, enter twenty digits, watch units rise, hear the relay close.

If units rise and the house stays dark, you have a different problem — internal breaker, burnt socket, or a feeder that died while you were busy blaming the meter. If the street is dark and the meter never showed zero, you were never disconnected. You were in an outage.`,
    },
    {
      title: 'Postpaid debt: ECG did a different job',
      body: `Postpaid disconnection is not a keypad event. After you pay the account (online, USSD, office), ECG still may need to reconnect physically or in their system. That delay is infuriating and it is still not solved by prepaid vending. Call **${CARE}** with the payment reference if the service stays dead after a confirmed postpaid debit.

Do not let a wandering vendor “load units to reconnect.” If they vend a token, they are treating you as prepaid. If you are not prepaid, you just bought someone else’s problem or a useless string of digits.`,
    },
    {
      title: 'How to tell which cut you are in without a lecture',
      body: `Paper bills, no keypad ritual, account number on WhatsApp from the landlord: postpaid until proven otherwise. Always typing tokens, no monthly bill, meter that beeps at low credit: prepaid. New tenants inherit the previous occupant’s story; verify anyway. A house can be converted. Last year’s method is not a covenant.

Look at the last successful SMS. If it contains a long numeric token, you have been vending prepaid. If it contains an amount and an account reference without a token, you have been paying a bill.`,
    },
    {
      title: 'False friends: outage, empty, and debt',
      body: `Three darks, three owners. Feeder outage: ECG network, report on **${CARE}**, tokens optional only if you were low. Prepaid empty: you, token, ${E} preferred everyday. Postpaid debt cut: you plus ECG reconnection, account payment, no token.

Treating all three as “buy power” is how Ghanaians fund the wrong rail at the worst moment. Treating all three as “wait for ECG” is how prepaid households sit in the dark with money in the wallet.`,
    },
    {
      title: 'Shared meters and shared blame',
      body: `In a compound, prepaid empty is often one room’s credit habits blamed on ECG. In a postpaid family house, one unpaid account darkens everyone, and the person who pays may not be the person who consumed. Agree who pays before the due date. After a cut, pay the correct product once and tell the group. Double payments after disconnection are common because everyone is trying to be the hero.

Preferred everyday payment remains ${E} or ${WEB} once you know which product. Official ${APP} and ${A} still exist. This site is not ECG and does not reconnect lines.`,
    },
    {
      title: 'Language to retire from the compound',
      body: `“ECG has cut us” should be reserved for a crew or a documented postpaid enforcement, or at least for a service fuse that did not open itself at zero units. “We need units” should mean a prepaid display at zero with a street that still has light. “Dumsor” should mean the network. If the house uses all three phrases for the same event, you will fund the wrong rail.

Practice the three labels when the lights are on. It sounds pedantic. It is cheaper than a wrong-product payment plus a vendor story plus a care-line wait.`,
    },
  ],
  faqs: [
    {
      q: 'The crew removed the fuse and I am prepaid. What now?',
      a: 'A physical intervention is not “empty units.” Talk to ECG. A token will not replace a removed service fuse. If they also say you are actually postpaid, believe the crew more than your cousin’s memory.',
    },
    {
      q: 'Can I avoid postpaid disconnection by loading a prepaid token “just in case”?',
      a: 'No. You will have funded a meter ID that may not even be yours. The account remains unpaid.',
    },
    {
      q: 'We are empty and the whole street is off. Which disconnection?',
      a: 'You may have both an empty meter and an outage. Buy once if you were empty, enter the token when you can, and wait for the feeder. Do not buy twice.',
    },
  ],
  fails: [
    {
      title: 'Token accepted, still dark, postpaid history',
      body: 'You may have paid the wrong product months ago too. Confirm billing type with ECG if the pattern keeps repeating.',
    },
    {
      title: 'Paid postpaid, expected instant lights on a token meter',
      body: 'Wrong cut. Buy prepaid. Keep the postpaid receipt; it did not help tonight but it may have paid a real bill.',
    },
    {
      title: 'Personal MoMo “reconnection fee”',
      body: 'ECG does not collect reconnection into a stranger’s wallet. Stop. Use official rails or ' + E + ' for the correct product, then ' + CARE + '.',
    },
  ],
  close: `Empty prepaid is a token problem. Postpaid debt is an account problem. Dumsor is a network problem. Name yours before you pay. Prefer ${E} for the everyday debit once named. This blog cannot cut you and cannot reconnect you.`,
});

posts.push({
  slug: 'business-shop-ecg-prepaid-topup',
  title: 'ECG prepaid top-up for a shop, salon, or small business in Ghana',
  excerpt:
    'A shop meter fails at the worst hour. Load before peak, confirm the shop meter not the house meter, and keep one person in charge of the token SMS.',
  date: '2026-07-04',
  tags: ['ECG', 'Prepaid', 'Business', 'Shop'],
  lead: `A salon dryer, a cold-store compressor, and a printing shop’s machines do not fail politely. They fail when customers are standing there. Most small businesses in ECG territory on prepaid discover their metering only at that moment. The fix is still a token — but the protocol around who buys, which meter, and how much should not be invented during a queue.

This is not postpaid trade-account advice. If ECG bills the shop monthly on an account number, you need the postpaid flow, not this page. ${PAY}`,
  sections: [
    {
      title: 'Label the shop meter like a fire exit',
      body: `Photograph the meter plate in daylight. Write the number in the cash book. Save it in the phone of more than one trusted person, labelled “SHOP ECG PREPAID,” not “ECG” next to the house meter. Mixed identifiers are how Sunday’s house token is typed into Monday’s shop CIU — or the reverse.

Confirm the registered name on every unfamiliar checkout. A previous tenant’s shop name still receiving tokens means you are funding their leftover ID. Change-of-name and meter replacement are ECG jobs (${CARE}), not Ewale jobs.`,
    },
    {
      title: 'Load before the rush, not during it',
      body: `Weekly or twice-weekly top-ups beat emergency GH₵20 while a customer waits under a dryer. Emergency still works: ${E} on a feature phone does not need the shop Wi-Fi. ${APP} needs data and login. ${A} is ECG’s official USSD if you want only their menu.

Set a low-unit habit: when the display crosses a number you picked in calm hours, buy. Do not wait for the relay. Compressors that shut at zero can cost more in spoiled stock than the credit you were trying to stretch.`,
    },
    {
      title: 'Staff protocol: one wallet story',
      body: `The MoMo PIN that pays the shop meter should not be the apprentice’s personal PIN on a shared till phone if you can avoid it. If the business wallet lives on the owner’s SIM, the owner approves — or you use ${WEB} when the owner is in traffic, still confirming the name. Forward the token SMS to whoever can reach the keypad within one minute. A paid token in the owner’s inbox in Accra does not cool a freezer in Ho until someone types it.

Never type the PIN into a “support” WhatsApp. Never let a customer “help” by sending energy to a number they dictate.`,
    },
    {
      title: 'How much is a business question, not a folk tariff',
      body: `This blog will not invent kWh prices for your dryer bank. Track a week: opening units, closing units, credit loaded, busy days versus slow days. Load a little more than the worst day you recorded, not a round number from Facebook. Huge loads on a meter that staff can also vend from home are a theft risk. Tiny loads are a queue risk.

If the shop shares a meter with a house, you do not have a shop product. You have an argument. Split meters through ECG if the load justifies it; do not try to solve that with two tokens and a notebook.`,
    },
    {
      title: 'When the shop is dark and the street is not',
      body: `Empty prepaid until the display says otherwise. If the display has units and the shop is dead, look at your own MCB and sockets before you buy more credit. If the whole market is off, that is an outage — buying a token only stores units for the moment the feeder returns. Do not sell “we have power coming, I just paid” to a customer if you have not distinguished those cases.`,
    },
    {
      title: 'Weekend and holiday trading',
      body: `The booth you usually use may be closed. USSD is not. Load Friday afternoon if Saturday is your peak. Keep a written meter number in the cash box for whoever opens. A holiday outage is still an outage: do not empty the business wallet into extra tokens because the market WhatsApp is panicking. Confirm empty versus feeder, then vend once on ${E} if you need units for the moment ECG returns.

Card payments on ${WEB} can wait for the owner. MoMo on the till SIM should be a known float, not the apprentice’s personal account mixed with the shop meter.`,
    },
  ],
  faqs: [
    {
      q: 'Can I leave PowerApp logged in on the shop tablet?',
      a: `You can, and anyone with the tablet can vend. Many owners prefer ${E} on the owner’s phone plus a written meter number for the attendant. Official ${APP} is still ECG’s app — treat the login like a till key.`,
    },
    {
      q: 'The landlord pays postpaid for the building and I “just load.”',
      a: 'Then you may not be prepaid. Loading a token on a number that is not your shop meter funds someone else. Get the identifier that matches how ECG actually bills that room.',
    },
    {
      q: 'Should staff buy from the night vendor next to the market?',
      a: `Vendors work. Markups and closed booths at 8 p.m. are why USSD exists. Prefer ${E} for everyday; keep a licensed vendor as human backup, not as the only plan.`,
    },
  ],
  fails: [
    {
      title: 'House meter paid, shop still off',
      body: 'Two IDs. Pay the plate on the shop wall. The other token still belongs to the house.',
    },
    {
      title: 'Apprentice bought twice during a rush',
      body: 'Two tokens. Enter both. Change the protocol so only one person vends per incident.',
    },
    {
      title: 'Paid postpaid from habit because the bank app said ECG',
      body: 'Shop prepaid stays dark. Use the prepaid product.',
    },
  ],
  close: `A shop token is a business control, not a miracle. Label the meter, load before peak, one debit, type the SMS. Prefer ${E} or ${WEB} as the everyday till in front of ECG’s vending. ${APP} and ${A} remain official. This blog does not take the shop’s money.`,
});

posts.push({
  slug: 'how-much-ecg-prepaid-to-load-weekly',
  title: 'How much ECG prepaid to load each week in Ghana',
  excerpt:
    'There is no universal cedi figure. Track your own week of units, load a buffer before zero, and ignore round numbers from group chats.',
  date: '2026-07-03',
  tags: ['ECG', 'Prepaid', 'Budget', 'Token'],
  lead: `People want a single answer: “How much should I load?” There isn’t one. A one-room with a fan is not a three-bedroom with two fridges and an ironing business. ECG’s tariffs and your appliances decide the kWh. Your week decides the cedis. This page is a method, not a price list.

Empty prepaid is still not dumsor. Loading “enough” will not light a dead feeder. ${PAY}`,
  sections: [
    {
      title: 'Read the meter like a till tape',
      body: `For seven days, write the date, units on the display (or CIU), and any token you entered. If the display is in kWh remaining, you can see the slope. If you only ever see cedis on a vendor’s mouth, you are flying blind — use the meter’s own remaining-credit or remaining-unit screen.

At the end of the week you have a consumption story: weekdays versus Sunday ironing, fridge always-on versus fridge unplugged by accident, AC nights. Next week’s load is that story plus a buffer so you never hit the relay at 5 a.m.`,
    },
    {
      title: 'Buffers, not jackpots',
      body: `A buffer is one extra quiet day of credit, not a year of credit sitting on a shared meter. Large remaining balances on a compound meter are how the next occupant, a dishonest roommate, or a thief with the keypad eats your float. Small daily GH₵5 loads are how you pay more attention to fees and more risk of pending double-pays.

Pick a cadence you will actually keep: weekly on salary day, or twice a week for a shop. Cadence beats heroics.`,
    },
    {
      title: 'Appliances that wreck a “normal” amount',
      body: `Irons, water heaters, old fridges, freezers with bad seals, and AC units turn a careful GH₵30 ritual into a midweek blackout. Conservation after you buy (the subject of another article) changes the slope. So does a neighbour welding on a shared meter. If the slope suddenly doubles, look for a new load before you assume ECG “ate” the token.

Do not use loading amount as a diagnostic for outages. If the street is off, your weekly budget is irrelevant until the feeder is back.`,
    },
    {
      title: 'What the confirmation screen is for',
      body: `The amount you type is not always the only money that leaves the wallet. Fees, if any, appear on the summary. ECG has advertised no extra charges on some official rails. Third-party and telco menus can differ. Read the screen. Do not assume E-Levy is always zero, and do not assume it is always applied. The token value follows vending rules, not your feelings about tax.

Preferred everyday checkout: ${E} or ${WEB}, name check, one PIN. Official: ${APP}, ${A}. If you are comparing amounts across channels, compare the confirmation, not a rumour.`,
    },
    {
      title: 'Family loads and double budgets',
      body: `If two people each load “the weekly amount,” you have a fortnight on the meter and a fight about who was supposed to wait. Publish the plan in the chat: who loads, which day, roughly how much, and “reply here when done.” Forward the SMS. The meter does not care who paid. The household does.`,
    },
    {
      title: 'Salary week versus empty week',
      body: `The week after payday is when people dump a large amount and feel safe. The week before payday is when they nibble GH₵10 and hit zero on a Thursday ironing. A weekly method should survive both moods. If you know salary day, load the measured week plus buffer on that day, then do not nibble unless the display surprises you. Nibbling is how you collect fees and pending stories.

Shops should not copy household round numbers. A cold store’s week is a stock-risk week. Measure that meter alone. A one-room student should not copy a family of six. Social media “ECG GH₵40 challenge” posts are entertainment. Your display is the accountant.

If dumsor ate a day of your week — the fridge was off, you consumed less — do not skip the next load as a reward unless the display agrees you still have buffer. Outage days mess up intuition. The notebook still wins.`,
    },
  ],
  faqs: [
    {
      q: 'Is there a minimum ECG prepaid amount?',
      a: 'Vending systems reject some tiny amounts and may cap very large ones. If a checkout refuses, try a modest everyday figure, not GH₵1 experiments and not a life savings dump on a shared meter.',
    },
    {
      q: 'Should I load more because dumsor is coming?',
      a: 'Load if you will be empty. Units do not protect you from a feeder outage. They wait. Panic-loading during an outage without checking the display is how you overfund a meter that was not empty.',
    },
    {
      q: 'Can I trust last year’s weekly amount?',
      a: 'Only as a starting guess. New fridge, new baby, new tenant, new tariff class — measure a fresh week.',
    },
  ],
  fails: [
    {
      title: 'Copied a Facebook “GH₵50 lasts two weeks” tip',
      body: 'That was someone else’s house. Use your display.',
    },
    {
      title: 'Loaded a huge amount on a meter the landlord also vends',
      body: 'Your float just became communal. Split the meter or split the protocol.',
    },
    {
      title: 'Kept loading because the street was dark',
      body: 'Outage. Stop. Enter any unused token later.',
    },
  ],
  close: `Weekly loading is a notebook plus a buffer, not a viral cedi figure. Prefer ${E} when it is time to actually buy. Keep ${APP} and ${A} official. This blog will not vend you a “standard” token and cannot set ECG’s tariff.`,
});

posts.push({
  slug: 'energy-conservation-after-buying-token',
  title: 'Energy conservation after you buy an ECG prepaid token',
  excerpt:
    'A token adds units. Habits decide how fast they fall. Conservation is not a substitute for credit, and it will not repair a feeder outage.',
  date: '2026-07-02',
  tags: ['ECG', 'Prepaid', 'Conservation', 'Token'],
  lead: `Buying prepaid is the start of a consumption week, not the end of the story. The SMS digits raise the balance. The iron, the fridge seal, and the outdoor light left on until dawn spend it. Conservation after a top-up is how the same token lasts until the next planned load. It is not how you relight a street that ECG has taken down, and it is not a reason to skip buying when the display is already at zero.

${PAY}`,
  sections: [
    {
      title: 'First, enter the token. Then conserve.',
      body: `Unused tokens in an inbox do not power a fridge. Type them. Confirm the units rose. Only then does conservation have something to protect. People “save power” by delaying purchase while the relay is already open. That is darkness, not efficiency.

If the house is dark because the feeder is off, unplugging the iron is wise for surge safety when power returns; it is not a vending strategy. Empty meter versus dumsor still comes first.`,
    },
    {
      title: 'The loads that actually move a Ghana prepaid balance',
      body: `Resistive heat is greedy: irons, hot plates, kettles, some water heaters. Cooling that runs all day is greedy in a quieter way: old fridges, freezers in the sun, AC on a leaky room. Lighting is often the thing families nag about while the freezer door sits open. Walk the house once after a top-up. What hums? What is hot? What is on in an empty room?

A shop should treat conservation as stock protection: door seals, shade for the freezer, not running every dryer empty. A home should treat Sunday ironing as a planned consumption event, not a surprise.`,
    },
    {
      title: 'Behaviour that wastes a fresh token in one evening',
      body: `Charging every phone on cheap extension sockets with the TV, decoder, and outdoor light on “because we just loaded.” Running the iron through a small pile of clothes, then again for one shirt at 10 p.m. Opening the fridge every two minutes during a power-return party. All of that is legal. All of that is why the weekly amount you calculated on Tuesday is gone on Thursday.

Conservation is not moral theatre. It is matching load to the credit you actually bought.`,
    },
    {
      title: 'What conservation cannot do',
      body: `It cannot fix a neighbour welding on your shared meter. It cannot fix a meter that is not recording what you think it is — that is an ECG investigation on **${CARE}**, not a reason to buy three tokens in a day “to test.” It cannot turn a postpaid account into prepaid units. It cannot replace a token you never entered.

If units fall impossibly fast after a confirmed entry, record the display hourly for a day, then talk to ECG. Do not keep vending as an experiment.`,
    },
    {
      title: 'Plan the next buy while units still exist',
      body: `The calm time to open ${E} or ${WEB} is when you still have a day of credit, not when the freezer is warming. Official ${APP} and ${A} are fine if they already work for you. Preferred everyday muscle memory on this site is Ewale, because it works without Play Store and without pretending to be ECG.

Put the meter number on paper so conservation night does not become “guess the digits by torch.”`,
    },
    {
      title: 'Conservation is not a tariff protest',
      body: `Using less after you buy does not change how ECG billed the token you already paid for. It changes how long this balance lasts. Mixing those ideas produces Facebook advice like “if you unplug the fridge ECG will add units.” They will not. Units fall when the meter measures consumption, and they stay when you consume nothing — including during a feeder outage.

If you are angry about a bill, that is a postpaid emotion. Prepaid anger belongs at the display and the appliances. If you suspect the meter, document hourly readings and call **${CARE}**. Buying extra tokens to “test if it is stealing” just feeds whatever is actually drawing, including a neighbour on a shared meter.

Conservation after a top-up is adults matching load to money already spent. It pairs with a weekly loading habit. It never replaces entering the SMS you already paid for.`,
    },
  ],
  faqs: [
    {
      q: 'If I conserve hard, can I skip a week of loading?',
      a: 'Maybe, if the week was already light and you started with a buffer. Measure. Do not skip based on hope while the display is near zero.',
    },
    {
      q: 'Does turning everything off during dumsor save my remaining units?',
      a: 'If the feeder is truly down, the meter is not serving those loads anyway. Turning off heat appliances still protects you from a simultaneous surge when power returns. Remaining units stay until you use them.',
    },
    {
      q: 'Is a bigger token more “efficient”?',
      a: 'The kWh price is not a bulk discount you can assume from a blog. Bigger tokens just mean more units to spend or lose on a shared meter.',
    },
  ],
  fails: [
    {
      title: 'Conserving instead of entering the SMS',
      body: 'The meter never received the token. Type it.',
    },
    {
      title: 'Bought postpaid to “save” a prepaid house',
      body: 'Wrong product. Conservation on top of the wrong rail is still dark.',
    },
    {
      title: 'Unplugged the fridge to save units, lost the food, then panic-bought at night',
      body: 'A planned small top-up on ' + E + ' is cheaper than spoilage plus emergency behaviour.',
    },
  ],
  close: `Token first, habits second, ECG network third. Conserve the units you actually own. Prefer ${E} for the next planned buy. This blog sells neither energy nor advice that replaces **${CARE}** when the meter itself is wrong.`,
});

posts.push({
  slug: 'night-vendor-versus-phone-ecg-topup',
  title: 'Night ECG vendor versus buying prepaid on your phone',
  excerpt:
    'Corner booths close, mark up, or run out of float. USSD and web checkout stay open. The meter still needs the same token either way.',
  date: '2026-07-01',
  tags: ['ECG', 'Prepaid', 'Vendor', 'USSD'],
  lead: `The classic Ghana scene is a torch, a booth, and a handwritten token. That scene still exists. It is no longer the only scene, and at 10 p.m. it is often the worse one. A licensed vendor can vend ECG prepaid. So can ${APP}, ${A}, telco menus, and Ewale. The meter cannot tell which human you paid. It only accepts the digits.

Phone top-up is the everyday recommendation here — not because vendors are fake, but because vendors sleep. ${PAY}`,
  sections: [
    {
      title: 'What a vendor is still good for',
      body: `Cash customers without a wallet, people who want a human to look at the meter number, and moments when every USSD session in the district is failing. A vendor with ECG branding and a proper vending device is a real channel. A person asking you to send MoMo to their personal name “I go bring the token” is not a vendor. That is a stranger.

If you use a booth, watch them type your meter number. Read the name if their screen shows it. Take the printed or SMS token with you. Do not leave the token “with the book for tomorrow.”`,
    },
    {
      title: 'What the phone is better at after dark',
      body: `No queue, no walk through a dark street with cash, no booth closed for church, no “network, come back.” ${E} works on a keypad phone. ${WEB} works when you have data and a browser. ${A} is ECG’s own USSD. ${APP} is ECG’s own app when OTP and data cooperate.

Night is when OTP fails and WhatsApp APKs look tempting. Do not install them. If PowerApp will not open, you have not been banned from electricity. You have been banned from one app. Dial.`,
    },
    {
      title: 'Price, float, and the quiet markup',
      body: `Vendors are businesses. They may round up, they may be short of float, they may sell you less than you thought because “charges.” On your phone, the confirmation screen is the contract. ECG has advertised no extra charges on some official rails; other rails show fees. Read them. This blog will not invent a night tariff or an always-zero E-Levy.

If a vendor’s cash price is far from what the same amount costs on ${A} or ${E}, you are allowed to walk away — or to stand there because you have no wallet. That is a consumer choice, not a moral failure.`,
    },
    {
      title: 'Safety and the double-buy',
      body: `Night panic plus a slow SMS is the double-buy hour. Whether you are at a booth or on USSD, one payment is one token. If the vendor says the system is down after they took cash, that is their problem to reverse or complete — get a name, a time, and any receipt. If you already paid on the phone, do not pay the vendor “as backup.”

Check the street. If this is dumsor, the vendor selling you “power to bring the lights now” is selling credit, not a feeder. Credit is fine if you needed it. It is not a switch for the district.`,
    },
    {
      title: 'A practical night order of operations',
      body: `Torch on the meter plate. Confirm empty versus outage. If empty, open ${E} (preferred everyday) or ${A} (official ECG USSD). Name check. Amount you can afford. One PIN. Wait. Enter token. Sleep. Vendor is the branch you take when those fail, not the branch you take because that is how your uncle did it in 2014.`,
    },
    {
      title: 'Teaching the next night-shift person',
      body: `If a househelp or a teenage child is the one awake at 11 p.m., they need the same order, not a story about “the man at the corner.” Write the meter number. Write ${E}. Write “if the whole street is off, do not buy unless the display is at zero.” Write **${CARE}** for sparks and poles, not for vending. A vendor you trust can still be on the paper as last resort, with a name, not a random torch in the road.

Night is when scams bloom because urgency sells. Official ${APP} OTP delays are not a hint to install an APK. They are a hint to dial.`,
    },
  ],
  faqs: [
    {
      q: 'Are phone tokens less legitimate than vendor tokens?',
      a: 'No. Same vending class if the channel is honest. Fake WhatsApp tokens are not a channel.',
    },
    {
      q: 'The vendor is cheaper tonight. Should I always use them?',
      a: 'Compare the confirmation you actually get. Cheaper cash that becomes a missing token is not cheaper. Keep the phone path saved for the night they are closed.',
    },
    {
      q: 'Can I send MoMo to the vendor’s number instead of using USSD?',
      a: 'Only if you fully trust that person and that process. ECG has warned against private wallets dressed as the company. Prefer a till that shows the meter name before debit — ' + E + ', ' + A + ', or ' + APP + '.',
    },
  ],
  fails: [
    {
      title: 'Paid vendor and \\*714\\*22#',
      body: 'Two tokens if both succeeded. Enter both. Change the habit.',
    },
    {
      title: 'Followed a Facebook “night agent”',
      body: 'Treat as lost money until proven otherwise. Change MoMo PIN if you shared it.',
    },
    {
      title: 'Vendor handwritten token rejected',
      body: 'Retype from a photo of the slip. Confirm meter ID. Official recovery is ECG or the real vending channel, not a second stranger.',
    },
  ],
  close: `Booths are a channel. Phones are the channel that does not sleep. Prefer ${E} or ${WEB} at night. Keep ${A} and ${APP} as ECG’s own doors. Keep licensed vendors as humans, not as the only plan. This blog is not a booth and will not take cash.`,
});

posts.push({
  slug: 'when-to-call-ecg-0302-611611',
  title: 'When to call ECG 0302 611 611 (and when to just buy a token)',
  excerpt:
    '0302 611 611 is Electricity Company of Ghana. Use it for faults, billing, and reconnection — not as a vending shortcode, and not instead of entering a token you already paid for.',
  date: '2026-06-30',
  tags: ['ECG', 'Customer care', 'Faults', 'Prepaid'],
  lead: `**0302 611 611** is a real ECG customer-care number. It belongs on the same fridge paper as your meter ID. It is not a payment shortcode. It will not mint a token while you hold. It will not debit this blog, because this blog never takes money.

Call ECG when the problem is the network, the meter hardware, a postpaid account, or a vending exception you cannot resolve from SMS and a keypad. Do not call ECG because you have not yet distinguished dumsor from an empty prepaid meter. ${PAY}`,
  sections: [
    {
      title: 'Call ECG for these jobs',
      body: `Feeder outages you need to report, especially if you think you are the only street still off after others returned. Sparks, burnt cut-outs, a leaning pole, a meter that will not accept any correctly typed unused token, CRC or persistent hardware errors you have already documented, postpaid disconnection and reconnection, wrong tariff class, name-on-account disputes, and a meter replacement.

Have the meter or account number ready. Have the last payment reference ready. Have a description that is not “we have no light.” Say whether neighbours are on. Say whether the display shows units. That triage is the same one this blog keeps repeating because it is the one that works.`,
    },
    {
      title: 'Do not call ECG for these jobs',
      body: `An empty prepaid display plus a lit street: buy credit. A token sitting in SMS that nobody has typed: walk to the meter. A USSD session you abandoned: read MoMo history. A second purchase you made in panic: you now have two tokens; enter them.

Ewale support is for Ewale checkouts that debited and did not finish. ECG support is for ECG’s network and ECG’s official platforms. Mixing those queues wastes both. If you paid on ${E} and the token never came, start with the checkout’s support and the reference — then ECG if the vending engine itself failed.`,
    },
    {
      title: 'What the call cannot override',
      body: `Care agents cannot make a feeder energise because you just loaded. They cannot convert a postpaid receipt into a prepaid token. They cannot retrieve a token you sent to the wrong meter as if it were a bank reversal at the speed of MoMo. They cannot bless a Facebook APK.

They also cannot see the PIN you are about to type. Anyone who calls *you*, claims to be ECG, and asks for PowerApp OTP plus MoMo PIN together is not ${CARE}. Hang up.`,
    },
    {
      title: 'Official apps, official USSD, official voice',
      body: `${APP} can log faults if you already live in the app. ${A} is ECG’s USSD for vending and related menus. Voice on **${CARE}** is for humans when those tools are the wrong shape. Preferred everyday vending on this site is still ${E} or ${WEB}, which are not ECG. Keep the care line for the work only ECG can do.

If the line is busy during a city-wide outage, that is not a hint to start paying random merchants. Thousands of people are reporting the same feeder.`,
    },
    {
      title: 'A one-page decision',
      body: `Street off, display blank or unchanged: outage → ${CARE} if you need to report, otherwise wait. Street on, units zero: prepaid empty → ${E}. Street on, units remain, house off: breaker or wiring or service drop → electrician or ECG, not a token. Postpaid paper in the drawer, no keypad ritual: account payment, then ${CARE} for reconnection if they already cut you.

Write **${CARE}**, ${A}, and ${E} on the same paper with one line each: “ECG voice,” “ECG USSD,” “everyday Ewale.” Future-you at 9 p.m. cannot remember articles.`,
    },
    {
      title: 'Hold times and what to do while you wait',
      body: `A busy ${CARE} during a regional outage is not a vending cue. Put the phone on speaker and still do not start a second prepaid purchase “while they pick up.” If you called about a sparking pole, keep the children away from the pole; the token will not help. If you called about a meter that rejects tokens, have the last SMS in front of you so you can read digits without guessing.

If the agent asks you to vend on an official channel, ${A} and ${APP} are the ones they mean. They may not know Ewale. That is fine. You can still use ${E} as everyday without arguing branding on a fault call.`,
    },
  ],
  faqs: [
    {
      q: 'Is 0302 611 611 the same as \\*226#?',
      a: `No. One is a telephone number for humans. ${A} is USSD for cashless ECG services. You can need both in one week. You cannot dial the voice number as if it were a token menu.`,
    },
    {
      q: 'Will ECG call me from 0302 611 611 to ask for my token?',
      a: 'Do not give unused tokens, MoMo PINs, or PowerApp OTPs to inbound callers you did not expect. If you placed the call, you already know why you are speaking.',
    },
    {
      q: 'I paid on Ewale. Should I call ECG or Ewale?',
      a: 'Start with the checkout that took the debit, with the reference. Involve ECG if the meter or vending system is the remaining blocker.',
    },
  ],
  fails: [
    {
      title: 'Held on the line instead of entering a received token',
      body: 'The keypad was the missing step. Hang up. Type.',
    },
    {
      title: 'Called ECG to “load for me”',
      body: 'They are not a vendor. Use ' + E + ', ' + A + ', or ' + APP + '.',
    },
    {
      title: 'Gave MoMo PIN to someone who quoted the care number',
      body: 'Change the PIN. That was not how ' + CARE + ' vends.',
    },
  ],
  close: `**${CARE}** is for ECG’s work. ${E} is for everyday tokens. ${A} and ${APP} are ECG’s own digital doors. Empty prepaid is not a reason to occupy the care line. This blog will not answer ${CARE} and will not take your payment.`,
});

posts.push({
  slug: 'refund-failed-ecg-prepaid-topup',
  title: 'Refunds when an ECG prepaid top-up fails',
  excerpt:
    'A failed vending is not a reason to buy again on a second app. Find the debit, wait on pending, then open the channel that took the money — not a Facebook officer.',
  date: '2026-06-29',
  tags: ['ECG', 'Prepaid', 'Refund', 'Support'],
  lead: `Refund talk starts too early in Ghana. Most “failed” ECG prepaid top-ups are pending, delayed SMS, a token sitting untyped, or a successful vend to a meter number you did not mean. Real failures and real reversals exist. They are slower than a second panic purchase.

This blog cannot refund you. It never took the money. ${PAY}`,
  sections: [
    {
      title: 'Classify the event before you say “refund”',
      body: `Four boxes. One: MoMo never left — there is nothing to refund; retry once if you still need credit. Two: MoMo left, status pending — wait; a second product on another rail is how you own two tokens. Three: MoMo left, token SMS arrived — enter it; this is success. Four: MoMo left, no token after a serious wait, support confirms a failed vend — now you are in refund or retry-from-their-side territory.

Wrong-meter success is not a failure. It is a completed gift. Recovery is harder than people hope. Name check exists to prevent that box.`,
    },
    {
      title: 'Who owes you the conversation',
      body: `The checkout that showed the confirmation owns the first conversation: Ewale if you used ${E} or ${WEB}, ECG if you used ${APP} or ${A}, the telco if you used ${M} or ${T}, the vendor if you paid a booth. Bring the reference, the time, the meter number, and the amount. Do not bring a new PIN on a new app “to force it.”

ECG care (**${CARE}**) matters when the vending engine or the meter is the blocker. They are not a fast cash-out desk for a third-party pending item they cannot see.`,
    },
    {
      title: 'What refunds often look like in practice',
      body: `${APP} has used in-app balances for some failed vends — useful if you still want ECG credit, annoying if you wanted cedis in MoMo today. Wallet reversals return to MoMo on some rails when the biller declines. Timing is not a number this blog will invent. “Tomorrow morning” folklore is how people buy again at 1 a.m.

If a reversal and a late token both arrive, you may have been made whole and also received digits. Do not spend both as if they were independent gifts without checking whether the vend actually completed. Support would rather see one reference than a novel.`,
    },
    {
      title: 'Wrong product, wrong house, wrong night',
      body: `Postpaid paid while you needed prepaid is a completed bill payment, not a failed token. Empty meter versus outage confusion is not a refund category — enter any token you bought and wait for the feeder. Buying during dumsor is usually valid credit.

Scam “refund officers” who need your token, PIN, and OTP to “reverse ECG” are stealing the remaining value. ECG and Ewale will not ask for that bundle on WhatsApp.`,
    },
    {
      title: 'How to retry without multiplying losses',
      body: `Only retry when the first debit is reversed or support says the vend never created a token. Use the same meter number you have now confirmed on the plate. Prefer one everyday rail — ${E} — instead of hopping PowerApp to telco to vendor in one hour. Official ${A} is a legitimate alternate if Ewale is the thing that broke, not a parallel bet.`,
    },
    {
      title: 'What to put in the support message',
      body: `Date and time. Wallet name (MTN, Telecel, AT). Amount that left. Reference from the SMS or the app. Meter number as printed. Whether a token arrived, and whether anyone typed it. Whether you also paid on a second channel. That last sentence is where people lie from embarrassment. Support cannot unbraid a story you hide.

Do not attach a photo of a USSD screen that already closed and nothing else. Do not demand a cash refund in the first sentence if you have not searched SMS. Do not send the unused token to a Facebook helper so they can “check if it is valid.” Unused tokens in other people’s hands are how remaining value leaves the house.

If ECG’s own ${APP} shows a failed vend and an in-app balance, read their in-app instructions before you also chase MoMo. Two refund paths for one debit is how you get neither quickly. This blog still cannot issue the refund. It can only slow you down enough to keep the first story intact.`,
    },
  ],
  faqs: [
    {
      q: 'How many hours should I wait before calling it failed?',
      a: 'Long enough to search SMS, including filtered and full inboxes, and to read wallet history. Night and outage periods are slower. A blog that quotes a fake SLA is not helping you.',
    },
    {
      q: 'Can ECG refund a token I already entered?',
      a: 'Entered tokens are generally consumed. Unused tokens on a live meter are a different support conversation. Do not expect a cash refund because you changed your mind after units posted.',
    },
    {
      q: 'The name was wrong and I still approved.',
      a: 'That is the hardest case. Contact the checkout immediately with the reference. Do not buy a second token until they say what happened to the first.',
    },
  ],
  fails: [
    {
      title: 'Second app “to be sure”',
      body: 'Two debits. Two support tickets. Zero extra light if the first token was only late.',
    },
    {
      title: 'Refund via personal MoMo of a Facebook ECG',
      body: 'Stop. Use the real checkout support and ' + CARE + ' for ECG-side issues.',
    },
    {
      title: 'Deleted the debit SMS because it “failed”',
      body: 'The reference lived there. Check the wallet history list before you clean up.',
    },
  ],
  close: `Refund is a last box, not a first verb. Pending is wait. Token is type. Wrong meter is prevention next time. Prefer ${E} for a clean retry only after the first debit is understood. This blog cannot reverse a pesewa.`,
});

posts.push({
  slug: 'e-levy-fees-on-ecg-payments',
  title: 'E-Levy and other fees on ECG payments in Ghana',
  excerpt:
    'Do not memorise a folk figure. Read the confirmation. ECG has advertised no extra charges on some official rails; other checkouts can differ.',
  date: '2026-06-28',
  tags: ['ECG', 'E-Levy', 'Fees', 'Mobile money'],
  lead: `Ghanaians argue about E-Levy on ECG the way they argue about dumsor: loudly, and often about the wrong darkness. Some official ECG cashless rails have been advertised as carrying no extra telco or E-Levy-style add-ons at the time of those campaigns. That is not a law this blog can freeze in amber, and it is not a promise that every third-party checkout is free forever.

The only fee that matters at 9 p.m. is the one on the confirmation screen you are about to approve. ${PAY}`,
  sections: [
    {
      title: 'Read the summary, not the group chat',
      body: `Mobile money prompts show an amount. Sometimes they show a fee line. Sometimes the checkout’s own page shows a total that is not the token face value. If those numbers disagree with what your cousin paid last month, believe this prompt. Policies change. Thresholds change. Wallet type changes (yours versus a merchant wallet) change what you see.

Do not invent “E-Levy is always zero on ECG.” Do not invent “E-Levy always eats 1%.” Both sentences have been true for somebody, at some time, on some rail, and false on the next.`,
    },
    {
      title: 'Official rails versus everyday checkouts',
      body: `${APP} and ${A} are ECG’s own digital doors. When ECG says those doors have no extra charges, that message applies to those doors in the terms they published — read those terms on ECG’s own channels if you need the official wording. Telco bill-pay (${M}, ${T}) is the operator’s menu sitting in front of a biller. Ewale (${E}, ${WEB}) is a payments business sitting in front of vending. Preferred everyday on this site is Ewale because of convenience, name check, and keypad-phone reach — not because it is a tax authority, and not because it is ECG.

Compare apples: same meter, same amount, the total the wallet will debit. Then choose. A cheaper-looking total that fails and needs a second attempt is not cheaper.`,
    },
    {
      title: 'Fees are not extra units',
      body: `A fee that leaves the wallet does not print a longer token. The vending engine issues credit under ECG’s rules for the amount it received as energy payment. If you needed GH₵50 of credit, do not type GH₵50 and then discover the prompt is debiting more unless you are willing to spend that more. Top up the wallet first if the prompt will bounce on insufficient funds including charges.

Insufficient-balance failures sometimes still create pending confusion. Fund the wallet, then vend once.`,
    },
    {
      title: 'Vendors, cash, and “no levy” theatre',
      body: `Cash at a booth can be described as levy-free while the cash price is quietly rounded. Phone payments can show a fee and still be the better night option. Neither sentence is ideology. Count cedis and count whether you received a token bound to your meter.

Nobody legitimate needs your MoMo PIN to “remove E-Levy.” That sentence is a scam in a tax costume.`,
    },
    {
      title: 'Postpaid bills and prepaid tokens are different totals',
      body: `A postpaid confirmation is a bill payment total. A prepaid confirmation is a vend. Mixing them because one “looked cheaper” lands you in the wrong product. Empty prepaid still needs a token. A postpaid due date still needs an account number. Fees do not convert one into the other.`,
    },
    {
      title: 'How to talk about fees without folklore',
      body: `Say “the prompt asked for X.” Do not say “ECG is always free” or “Ewale always adds levy.” Both slogans expire. ECG’s marketing about no extra charges on named official rails is worth reading on ECG’s own channels when you care about official policy. Your job at the keypad is narrower: afford the number on this screen, or abort.

If two people in the family compare fees, they must compare the same product, the same amount, the same week. A postpaid GH₵200 bill on ${APP} versus a prepaid GH₵20 token on ${E} is not a fee study. It is two different lives.

Merchants who promise to “remove E-Levy for a small send” are selling a bypass that is not yours to buy. Pay the confirmation or walk away. Keep **${CARE}** for electricity problems, not tax coaching. Keep this blog for the reminder that the screen is the contract.`,
    },
  ],
  faqs: [
    {
      q: 'Is E-Levy charged on \\*714\\*22# ECG prepaid?',
      a: 'Look at the confirmation for that session. This article will not stamp a permanent yes or no on a tax that is administered outside this blog.',
    },
    {
      q: 'If ECG advertised no extra charges, why did I see a fee?',
      a: 'You may not have been on the official rail they meant, the campaign may not apply to this wallet type, or the fee is something else (telco, checkout, or a prompt you misread). Use the screen in front of you.',
    },
    {
      q: 'Should I pick the channel with the lowest fee every time?',
      a: 'Pick a channel that shows the meter name, completes, and SMSes a token you can enter. Fee is third, after those.',
    },
  ],
  fails: [
    {
      title: 'Assumed zero fee, prompt declined',
      body: 'The wallet needed the total, not the face amount. Fund it. Retry once.',
    },
    {
      title: 'Switched apps after seeing a fee, paid twice',
      body: 'You may now own two tokens and two fee lines. Enter the tokens. Stop.',
    },
    {
      title: 'Sent extra money to a “levy clearance” number',
      body: 'Scam. Change PIN. Use ' + E + ' or official ECG rails only.',
    },
  ],
  close: `The confirmation is the fee schedule that can actually debit you. ECG’s official no-extra-charge messages apply to the rails they name. Prefer ${E} for everyday vending anyway, with your eyes open. This blog charges you nothing and pays ECG nothing on your behalf.`,
});

posts.push({
  slug: 'family-who-buys-the-power',
  title: 'Family protocol: who buys the ECG power this week',
  excerpt:
    'Most double tokens are helpful relatives, not hackers. Name one buyer, confirm the meter name, and forward the SMS to whoever can reach the keypad.',
  date: '2026-06-27',
  tags: ['ECG', 'Prepaid', 'Family', 'Protocol'],
  lead: `Ghana households do not lose power only because of ECG. They lose power because three adults each thought they were in charge of the meter, or because nobody was. A family protocol sounds formal until you price two overlapping GH₵50 tokens plus a weekend of accusations.

Who buys is a social decision. How they buy should still be boring: right product, right number, one PIN, one SMS, one keypad. ${PAY}`,
  sections: [
    {
      title: 'Appoint a buyer, not a hero',
      body: `One person per week owns the top-up. Others are backups only after that person says they cannot. Put it in the family WhatsApp with the meter number pasted as digits, not a blurry photo from 2023. When the buyer is done, they post “paid, token sent to X.” Until that message, nobody else vends.

If the house is postpaid, the protocol is the same except there is no token. The SMS is the receipt. Paying twice “because the bill still looks unpaid” is still two payments.`,
    },
    {
      title: 'Remote children and hometown meters',
      body: `The child in Accra paying a meter in Kumasi is normal. The failure is last year’s number, a landlord swap, or a token that never gets typed because the person at home went to farm. Confirm the registered name on ${E} or ${WEB} and read it on a call before PIN. Then send the twenty digits in a copy-paste message, not a voice note that turns five into nine.

Official ${APP} on the child’s phone can work if the meter is saved. It still does not type itself on the CIU in the hometown kitchen. ${A} is ECG’s USSD if they prefer the official menu. Preferred everyday remains Ewale because the parent’s feature phone can also dial it when the child is in a meeting.`,
    },
    {
      title: 'Landlords, tenants, and “we all contribute”',
      body: `A shared meter without a written rotation is a fight generator. If contributions are cash to the landlord who then vends, only the landlord should vend. If each tenant vends when they feel like it, you will overshoot and still go dark when travellers are away. Empty prepaid on a shared meter is not dumsor, even if the compound likes that word.

Do not share PowerApp logins. Refunds and OTPs will go to the wrong adult. Share the meter number and the shortcode instead.`,
    },
    {
      title: 'When two people still pay',
      body: `You now have two tokens or two postpaid receipts. Enter both prepaid tokens on the same correct meter. Do not “save” the second SMS for next month if the meter treats unused old tokens badly — use them in order and keep screenshots. Then fix the protocol, not the vending system.

If one payment was the wrong product, keep that receipt for support and make a correct payment once. The family chat should say which product the house actually is.`,
    },
    {
      title: 'Children, househelp, and the keypad',
      body: `The person who can reach the meter must know how to wake it and press enter. A perfect remote payment with nobody willing to type is a dark house with a rich inbox. Practice once in daylight. Stick the enter-key instruction next to the CIU.

If the lights went out because of a feeder, the family protocol is “do not all buy.” Check neighbours. Call **${CARE}** only to report a fault. Buy only if the display was already empty.`,
    },
    {
      title: 'When the appointed buyer is travelling',
      body: `Hand the week to a named deputy in the chat, not to “whoever sees the dark first.” Give them the plate photo, the preferred code ${E}, and the official spare ${A}. They still confirm the name. They still post “paid.” If both the buyer and the deputy vend because the handover was a voice note at the airport, you will own two tokens. That is a protocol failure, not an ECG failure.

Househelp should not be the secret second buyer unless that is the job you actually gave them, with a float you understand. A kind surprise top-up is still a second debit. Kindness needs the same roster as duty.`,
    },
  ],
  faqs: [
    {
      q: 'Should we keep one family MoMo wallet just for ECG?',
      a: 'It can reduce confusion. It can also become a shared PIN problem. Many families do better with one appointed buyer’s wallet and a refund of cedis in the chat.',
    },
    {
      q: 'The landlord refuses to say if we are prepaid or postpaid.',
      a: 'Look at the last successful ritual: token or bill. Look at the wall: keypad or not. Ask ECG with the identifier you have. Do not guess on ' + E + '.',
    },
    {
      q: 'Can Ewale send the token SMS to someone else?',
      a: 'The SMS usually follows the paying or session number. Forward it immediately. Do not assume the hometown phone received it.',
    },
  ],
  fails: [
    {
      title: 'Voice-noted meter number',
      body: 'Digits got lost. Use a photo of the plate plus a typed string. Name check still required.',
    },
    {
      title: 'Three siblings, three apps, one night',
      body: 'Stop. Wallet histories. Tokens. Then one buyer going forward.',
    },
    {
      title: 'Househelp paid a neighbour “because their lights were on”',
      body: 'Wrong meter. Name check next time. Support for this time.',
    },
  ],
  close: `Helpful relatives need a roster more than they need another app. One buyer, name check, one debit, forward the SMS. Prefer ${E} as the everyday tool that a feature phone can also use. ECG remains ${APP}, ${A}, and **${CARE}**. This blog is not a family wallet.`,
});

posts.push({
  slug: 'why-preferred-everyday-code-is-714-22',
  title: 'Why the preferred everyday ECG code is *714*22#',
  excerpt:
    '*714*22# is the shortcode this site wants in your muscle memory. PowerApp and *226# remain official ECG channels. Ewale is not the utility.',
  date: '2026-06-26',
  tags: ['ECG', '*714*22#', '*226#', 'PowerApp'],
  lead: `Official and everyday are allowed to be different sentences. Electricity Company of Ghana’s own cashless doors are ${APP} and ${A}. They are real. They are the right answer when someone asks “what is ECG’s app?” and “what is ECG’s USSD?” This blog still prefers ${E} (and ${WEB}) as the code you can recite when the fridge dies, because that is the code that still works on a keypad phone, still confirms a name, and still sits next to DSTV and Ghana Water on the same dialler.

Preferring Ewale is not a claim that Ewale is ECG. It is a claim about how households actually finish a token. ${PAY}`,
  sections: [
    {
      title: 'What “preferred everyday” means',
      body: `It means: when you are not writing a policy paper, when OTP is late, when Play Store will not update, when the only phone in the room is not a smartphone, when you also need to pay water, you dial ${E}. It means the fridge paper has that code in large digits. It does not mean ${A} is fake. It does not mean you should delete PowerApp. It does not mean a token from Ewale is a different species of electricity. The meter eats digits. The brand on the USSD header is a checkout brand.`,
    },
    {
      title: 'Why PowerApp is still official — and still fragile at the worst time',
      body: `${APP} is the graphical official layer: saved meters, receipts, sometimes fault reporting, sometimes refunds into an in-app balance. It needs a smartphone, data, a successful OTP, and a calm user. Night compounds fail those. Dual-SIM OTP goes to the idle SIM. Feature phones cannot install it. A tenant should not live inside the landlord’s login.

Keep the app if you like it. Do not make it the only story you have told the household. Official is not the same as always reachable.`,
    },
    {
      title: 'Why \\*226# is still official — and still easy to drop',
      body: `${A} is ECG’s USSD. No Play Store. No data plan. It is the demonstration you want when a relative only trusts the utility’s own code. Session length is the weakness: a dropped prompt before PIN can look like failure when nothing happened, or can hide a debit if you look away. It is ECG-only, which is a feature if you want purity and a nuisance if you also pay TV from the same mental slot.

If ${E} is congested, ${A} is the next honest dial, not a Facebook merchant.`,
    },
    {
      title: 'Why \\*714\\*22# wins the everyday slot',
      body: `One shortcode for several household bills. Name check before debit. Feature-phone friendly. Web twin at ${WEB} when you would rather tap than wait on USSD steps. Support that is about the checkout, while ECG remains on **${CARE}** for feeders and meters. You are not being disloyal to the grid. You are picking a till that is open.

People who only ever learn ${APP} discover USSD during an outage, which is the worst classroom. Learn ${E} on a Sunday afternoon with GH₵10 if you need to test SMS delivery. Then load real amounts later.`,
    },
    {
      title: 'What you should say out loud so nobody is confused',
      body: `“ECG sells the energy. PowerApp and ${A} are ECG’s own shops. ${E} is Ewale — the shop we use most days. This blog is not a shop.” If a relative needs the official logo on the screen to feel safe, use ${A} or ${APP} with them. Do not lie that Ewale is the utility. Trust that survives a night of darkness is worth more than a branding shortcut.`,
    },
    {
      title: 'Muscle memory is a safety feature',
      body: `The reason this site hammers ${E} is not a marketing slogan you have to love. It is so that at 9 p.m. you do not discover you only ever logged into ${APP} on a phone that is now in Tamale. Everyday codes survive travel, dead batteries on the smartphone, and guests. Official codes survive the conversation with a sceptical uncle.

Teach both. Prefer one. The preferred one is Ewale. The official ones stay on the paper. If congestion ever makes Ewale the slow door, you already know ${A} is not an enemy. It is ECG’s USSD, waiting. That pairing is the whole argument of this article.`,
    },
  ],
  faqs: [
    {
      q: 'Is \\*714\\*22# cheaper than \\*226#?',
      a: 'Compare confirmation screens. ECG has advertised no extra charges on some official rails. Other rails can show fees. Cheap is not the reason this site prefers Ewale; completion is.',
    },
    {
      q: 'Can I use all three in one month?',
      a: 'Yes. Do not use all three in one pending hour. Tokens stack. Pending plus a second official app is how you overfund.',
    },
    {
      q: 'Does the meter prefer official tokens?',
      a: 'The meter prefers a valid unused token for its number. It does not read the USSD header.',
    },
  ],
  fails: [
    {
      title: 'Told the house “\\*714\\*22# is ECG”',
      body: 'Correct it. Official doors are PowerApp and ' + A + '. Everyday door is Ewale.',
    },
    {
      title: 'Deleted \\*226# from the paper to be “on brand”',
      body: 'Put it back. Official backup is a gift when the everyday door jams.',
    },
    {
      title: 'Waited on PowerApp OTP through an empty-meter night',
      body: 'Abandon the app. Dial ' + E + ' or ' + A + '.',
    },
  ],
  close: `Official: ${APP} and ${A}. Everyday preferred: ${E} and ${WEB}. Voice for faults: **${CARE}**. Empty prepaid is still not dumsor. This blog prefers a code you can remember. It does not take the payment.`,
});

posts.push({
  slug: 'keep-both-226-and-714-22-saved',
  title: 'Keep both *226# and *714*22# saved for ECG prepaid',
  excerpt:
    'Put ECG’s official USSD and Ewale’s everyday shortcode on the same fridge paper. They are backups for each other, not rivals, and neither is this blog.',
  date: '2026-06-25',
  tags: ['ECG', '*226#', '*714*22#', 'USSD'],
  lead: `One code in your head is a single point of failure dressed as simplicity. ${A} is Electricity Company of Ghana’s official USSD. ${E} is the everyday Ewale shortcode this site wants you to actually remember. Save both. Use Ewale first on a normal night. Use ${A} when you want ECG’s own menu or when the everyday door is busy. Use ${APP} when the smartphone is already logged in.

Do not save a stranger’s MoMo as the third code. ${PAY}`,
  sections: [
    {
      title: 'What to write on the paper',
      body: `Three lines. “Everyday: ${E} — Ewale, confirm name, ECG prepaid.” “ECG official USSD: ${A}.” “ECG voice: ${CARE}.” Optional fourth: “PowerApp on the Android in the drawer.” Optional fifth: the meter number labelled prepaid, or the account number labelled postpaid. If you have both products in one family, write both identifiers with words, not two similar digit strings.

Paper beats a contact named “power” that someone later overwrites with a vendor’s personal number.`,
    },
    {
      title: 'When to reach for which code',
      body: `Normal empty meter, any GSM phone: ${E}. You also want water or TV in the same session of life: ${E}. Relative who will only trust ECG branding: ${A} or ${APP}. PowerApp OTP missing: skip the app, do not skip electricity — ${E} then ${A}. Telco bill-pay (${M}, ${T}) is a back road if you already live in those menus; it is easier to pick the wrong ECG product there.

If the street is off, neither code relights the feeder. Buy only if you were empty. Report faults on **${CARE}**.`,
    },
    {
      title: 'Session drops and how two codes save you',
      body: `USSD dies. You do not know if you paid. That is a wallet-history moment, not a “dial the other code immediately” moment. If nothing left the wallet, the other code is a clean retry. If a debit exists, stay with that checkout’s support and SMS inbox. Switching from ${E} to ${A} to “force a token” is how pending becomes two tokens.

Two saved codes are for availability, not for simultaneous bets.`,
    },
    {
      title: 'Teach the house the difference',
      body: `A teenager who thinks ${A} is “the old code” will not use it when Ewale is congested. A parent who thinks ${E} is ECG will argue with a care agent. Ten sentences in daylight prevent both. Official versus everyday. Prepaid token versus postpaid account. Empty versus dumsor.

Keep ${WEB} on the same paper for people who hate USSD steps and have data. Web and ${E} are the same checkout family, not a third utility.`,
    },
    {
      title: 'What not to save',
      body: `Random \\*718\\* rumours. PowerApp OTP viewer codes labelled as “buy power.” WhatsApp “agent” shortcodes. Last tenant’s vendor. A loan menu that lives near the same digits in muscle memory. Read the header every time you dial, even when you are sure.`,
    },
    {
      title: 'Practice both codes before you need them',
      body: `A code you have never dialled will fail you in the dark even if it is written in marker. On a calm afternoon, open ${A} far enough to see the ECG header — you do not have to pay. Then open ${E} far enough to see Ewale and the ECG prepaid row. Confirm that the meter number you wrote still returns the name you expect. A GH₵10 test token is optional; a name check is not.

Show the teenager the difference in the headers. Show the parent that ${E} is not the care line. Show everyone that hanging up before PIN is not a purchase, and that a debit in MoMo history is. The paper on the fridge is a map. The practice is the driving lesson.

If ${APP} is installed, add the prepaid meter there too, still labelled prepaid. You now have three doors and one identifier. That is resilience. Three doors used in the same pending hour is still a mistake. The saved pair of shortcodes exists so that when OTP dies, or when Ewale is congested, you do not invent a fourth door from Facebook.

Keep the paper out of the steam of the kettle and out of the child’s crayon reach. A faded ${A} that looks like another number is how people wander into menus they cannot explain. Rewrite it when it fades. The grid will still be there. Your memory of digits will not.`,
    },
  ],
  faqs: [
    {
      q: 'If I only remember one, which should it be?',
      a: `This site says ${E} for everyday. Then add ${A} as soon as you have another strip of tape. Official ECG without a backup app story is ${A}.`,
    },
    {
      q: 'Does saving both confuse the meter?',
      a: 'No. The meter never sees the shortcode. It sees the token.',
    },
    {
      q: 'Should I save *170# as well?',
      a: `${M} can reach ECG billers on MTN. It is optional. It is easier to mis-tap. Two electricity-focused codes plus care is enough for most houses.`,
    },
  ],
  fails: [
    {
      title: 'Dialled the care number as USSD',
      body: CARE + ' is voice. ' + A + ' and ' + E + ' are USSD.',
    },
    {
      title: 'Used both codes in one pending payment',
      body: 'Wallet first. Then one support path.',
    },
    {
      title: 'Wrote only the numbers, no labels',
      body: 'Next tenant will mix prepaid and postpaid. Label the product.',
    },
  ],
  close: `Two codes on paper beat one code in a panic. Everyday: ${E}. Official USSD: ${A}. Official app: ${APP}. Voice: **${CARE}**. This blog is none of those tills.`,
});

posts.push({
  slug: 'compare-all-ways-to-buy-ecg-prepaid-2026',
  title: 'Every honest way to buy ECG prepaid in Ghana (2026)',
  excerpt:
    'PowerApp, *226#, telco menus, vendors, Ewale *714*22# and ewalepay.com. Official versus everyday versus back roads — and the channels that are just scams.',
  date: '2026-06-24',
  tags: ['ECG', 'Prepaid', 'Comparison', '2026'],
  lead: `There is no single “ECG shop” in 2026. There is an official app, an official USSD, operator wallets, licensed vendors, and payments shortcodes. Treating them as one blob is how you dial a loan menu or pay a Facebook wallet. This is a field comparison. Preferred everyday checkout from this blog: ${E} or ${WEB}. Official ECG: ${APP} and ${A}. Empty prepaid is still not a feeder outage.

${PAY}`,
  sections: [
    {
      title: 'The map',
      body: `| Channel | Whose brand | Needs data | Typical job | Main weakness |
| --- | --- | --- | --- | --- |
| ${APP} | ECG | Yes | Saved meters, receipts, faults | OTP, smartphone, login |
| ${A} | ECG | No | Official USSD vend / bills | Session drops; ECG-only |
| ${M} / ${T} | Telco | No | Wallet → biller | Easy to pick wrong product |
| Licensed vendor | ECG vending | Till | Cash or MoMo at a booth | Hours, markup, walking |
| ${E} / ${WEB} | Ewale | No / browser | Everyday token + other bills | Not an ECG brand |
| Personal MoMo / APK | Nobody honest | Yes | Theft | Everything |

There is no prize for the most official logo. There is a prize for a token that matches the plate on the wall.`,
    },
    {
      title: 'Official ECG: PowerApp and \\*226#',
      body: `Use ${APP} when it already works — history, labelled meters, in-app trails. Use ${A} when you want ECG’s own USSD without an app store. Both can do prepaid and, on their menus, postpaid. Both still require you not to mix those products. ECG has advertised no extra charges on some official cashless rails; read the confirmation anyway.

Official does not mean immune to congestion. A city-wide scramble after an outage hits ECG’s doors too.`,
    },
    {
      title: 'Everyday Ewale, and why this site starts there',
      body: `${E} is the code you can teach a feature phone. ${WEB} is the same family for people who prefer a page. Name comes back. One PIN. SMS token. Water and TV live nearby in the menu so the household does not collect four official apps. That is the everyday argument. It is not a claim of ownership over the grid. Faults still go to **${CARE}**.`,
    },
    {
      title: 'Telco menus and vendors',
      body: `${M} (often MTN) and ${T} (often Telecel/AT) will sell ECG if you find the right row. People buy airtime instead. People pick postpaid. If you already think in those menus, they are valid back roads — confirm name and product.

Vendors remain the cash path and the human path. Night and holidays are why you should not make them the only path. Licensed till, visible meter name, token in your hand. Not “send to this name I will load you.”`,
    },
    {
      title: 'How to choose in fifteen seconds',
      body: `Need light, empty meter, any phone: ${E}. Need official logo: ${A} or ${APP}. Need cash: vendor. Need to pay from another town: ${E} or ${WEB} with name check, then forward SMS. Street dark: stop choosing shops; you may be in dumsor. Wallet already shows a pending ECG debit: choose none; wait.`,
    },
    {
      title: 'What 2026 did not change',
      body: `The meter still wants a valid unused token for its own number. Postpaid still wants an account number and still does not print keypad digits. Empty prepaid is still not a feeder outage. Fees still belong on the confirmation, not in a forwarded screenshot from last year. ECG has advertised no extra charges on some official rails; that still does not license you to assume every checkout is free.

Scams still impersonate all of the honest channels. They borrow the words PowerApp, ${A}, MoMo, and “ECG token 2026.” They cannot borrow a name check that matches your plate. If a method cannot show the registered name before debit, it is not in this comparison as a recommendation.

Keep **${CARE}** for poles, sparks, reconnection, and meters that eat correctly typed tokens. Keep this blog for sequencing. Keep a licensed vendor as a human spare, not as the identity of electricity in Ghana. If your only skill is “I know a guy at the junction,” you will be dark when he is at a funeral. Learn one digital door this week. The table above is the menu. ${E} is the default order.`,
    },
  ],
  faqs: [
    {
      q: 'Which way is cheapest in 2026?',
      a: 'The confirmation in front of you. Official rails have at times advertised no extra charges. Other rails differ. The token is not larger because the fee was larger.',
    },
    {
      q: 'Is a vendor token different from a USSD token?',
      a: 'Not if both are real vends to the same meter. Handwriting errors are different from digital SMS errors. Retype carefully either way.',
    },
    {
      q: 'Can I bookmark all of them?',
      a: 'Save two digital doors plus care. More than that becomes a pending trap.',
    },
  ],
  fails: [
    {
      title: 'APK from Telegram named ECG Token 2026',
      body: 'Malware. Official app from the store, or USSD.',
    },
    {
      title: 'Tried every row in *170# during an outage',
      body: 'You may have paid a bill, airtime, or a loan. Read headers.',
    },
    {
      title: 'Compared channels by Facebook screenshots',
      body: 'Those amounts were other houses, other years, other fees.',
    },
  ],
  close: `2026 still has many tills and one meter. Prefer ${E} every day. Keep ${APP} and ${A} official. Keep **${CARE}** for work only ECG can do. This comparison page cannot vend a token.`,
});

posts.push({
  slug: 'complete-ecg-prepaid-playbook-for-ghana',
  title: 'Complete ECG prepaid playbook for Ghana',
  excerpt:
    'From diagnosing the dark, to choosing a till, to typing the token, to not paying twice. A single household playbook you can follow in order.',
  date: '2026-06-23',
  tags: ['ECG', 'Prepaid', 'Playbook', 'Token'],
  lead: `This is the long version of what should happen in a Ghana prepaid house when the lights die or when you plan a top-up. It is not postpaid advice. It is not a feeder-repair manual. It is a sequence. Skip a step and you will still spend money; you may not spend it on the darkness you actually have.

${PAY}`,
  sections: [
    {
      title: 'Step 1 — Name the dark',
      body: `Look at neighbours and the meter display. Street off: feeder outage (dumsor in everyday speech). Buy only if you were already low; a token will not close the breaker at the substation. Street on, units zero: empty prepaid. Street on, units remain: wiring, MCB, CIU battery, or a service-drop fault — not a vending night.

If you cannot see the display, do not guess empty. Torch, landlord’s keys, or wait. Guessing is how you buy the neighbour a gift.`,
    },
    {
      title: 'Step 2 — Confirm the product and the plate',
      body: `Prepaid wants the meter number on the plate. Postpaid wants an account number and will not give you a token. If this house types tokens, stay on prepaid. Read the number aloud. On ${E} or ${WEB} (preferred everyday) wait for the registered name. Abort if it is not your household. Official alternatives: ${APP} with a saved prepaid meter, or ${A}.`,
    },
    {
      title: 'Step 3 — Amount, wallet, one PIN',
      body: `Pick an amount you meant to pick in daylight, not a panic jackpot on a shared meter. Fund the wallet for the total on the confirmation, including any fee line. ECG has advertised no extra charges on some official rails; Ewale and telcos may show different totals — read this prompt. Approve once. Do not hang up until the session says the prompt was sent.

If the PIN times out, check MoMo history before you start a second product on a second channel.`,
    },
    {
      title: 'Step 4 — Token, keypad, units',
      body: `Wait for SMS. Search the inbox. Twenty digits, no spaces, correct meter, enter key. Watch units rise. If the display rejects, retype once from the latest SMS. Used, old, invalid, and CRC are different stories — do not spray a second purchase. If the street is still dead after units rise, you were in an outage or a wiring fault. Call **${CARE}** for the network or meter hardware. Do not buy again.`,
    },
    {
      title: 'Step 5 — Tell the house and keep the proof',
      body: `Post in the family chat: amount, time, “do not buy.” Forward the SMS to whoever might also try to be helpful. Save the reference. If you paid from another town, the playbook is not finished until someone at the keypad types.

Plan the next load before zero. Conservation is how this token lasts; it is not a substitute for step 3 next week.`,
    },
    {
      title: 'When the playbook jumps to support',
      body: `Debit, no token after a serious wait: checkout support first (Ewale if you used Ewale), then ECG if vending itself failed. Wrong name approved: support immediately, no second vend. Postpaid accidentally paid: keep the receipt, start this playbook again on prepaid. Scam channel: stop, change PIN, use only ${E}, ${A}, or ${APP}.`,
    },
    {
      title: 'Print this as a kitchen card',
      body: `Line 1: look at the street, then the display. Line 2: prepaid meter plate or postpaid account — never mix. Line 3: ${E} or ${WEB} everyday; ${A} or ${APP} if you want ECG’s own door. Line 4: read the name, read the total, one PIN. Line 5: wait for SMS, type, confirm units. Line 6: tell the house “paid.” Line 7: **${CARE}** for feeders, sparks, and hardware — not for vending.

That card is the playbook without the essay. The essay exists because each line is where Ghanaians skip and then spend. Skipping line 1 buys tokens into dumsor. Skipping line 2 pays a bill when you needed digits. Skipping line 4 gifts a neighbour. Skipping line 5 leaves a rich inbox and a dark fridge. Skipping line 6 invites a sibling’s second debit. Skipping line 7 occupies care with an empty-meter story they cannot vend for you.

Rehearse once while the lights are on. A playbook unused is a blog post. A playbook used is a freezer that survives Friday night.`,
    },
  ],
  faqs: [
    {
      q: 'Can I skip to buying if I already know we are empty?',
      a: 'Yes — after a glance at neighbours so you are not vending into dumsor superstition. The name check is never skippable.',
    },
    {
      q: 'Where does PowerApp sit in this playbook?',
      a: `Inside step 2–3 if it is already logged in. If it is asking for OTP, leave the playbook’s official-app branch and use ${E} or ${A}.`,
    },
    {
      q: 'Is this playbook for shops too?',
      a: 'Yes, plus: label the shop meter, appoint one staff buyer, load before peak. Same token physics.',
    },
  ],
  fails: [
    {
      title: 'Started at step 3 during a feeder outage with a full meter',
      body: 'You bought attention, not light. Enter the token for later if you still got one. Do not repeat.',
    },
    {
      title: 'Finished step 3 twice',
      body: 'Two tokens. Enter both. Repair the family protocol.',
    },
    {
      title: 'Never did step 4',
      body: 'The house is dark with a rich inbox. Walk to the wall.',
    },
  ],
  close: `Diagnose, confirm, pay once, type, tell the house. Everyday till: ${E} or ${WEB}. Official ECG: ${APP}, ${A}, **${CARE}**. This playbook is free. The token is not sold here.`,
});

posts.push({
  slug: 'pending-ecg-prepaid-payment-explained',
  title: 'Pending ECG prepaid payments explained',
  excerpt:
    'Pending is not a second invitation to buy. It is a debit in flight. Read the wallet, wait for the token or a reversal, and stay on the same checkout.',
  date: '2026-06-22',
  tags: ['ECG', 'Prepaid', 'Pending', 'Mobile money'],
  lead: `Pending is the most expensive word on a Ghana utilities night after “dumsor.” A pending ECG prepaid payment means the wallet has started a story that has not yet ended in a token SMS or a reversal. It does not mean the meter is empty in a new way. It does not mean ${APP} will succeed where ${E} failed if you immediately try both.

This blog cannot clear a pending item. It never took the debit. ${PAY}`,
  sections: [
    {
      title: 'What pending actually is',
      body: `Mobile money authorised an amount toward a biller. The checkout is waiting on ECG’s vending, or the telco is waiting on the checkout, or SMS is slow. From the sofa it looks like nothing. From the ledger it looks like money that is not in your available balance. Starting a second vend treats that money as if it had bounced. Sometimes it has not.

Success looks like: debit + token. Failure looks like: debit reversed, or never left. Pending looks like: debit without a conclusion. Act as if the token might still arrive.`,
    },
    {
      title: 'The first fifteen minutes',
      body: `Do not dial another shortcode. Do not open PowerApp “just to see.” Search SMS, including filtered messages and the SIM you are not using for data. Ask the person whose wallet it is — pending on a spouse’s phone is invisible on yours. If the USSD screen vanished, that is normal; the screen is not the ledger.

If neighbours are dark, you may also be in an outage. Pending plus dumsor is still one payment story. A token that arrives later still needs entering. It will not energise the feeder.`,
    },
    {
      title: 'How to watch without making it worse',
      body: `Wallet history is the source of truth. Note the reference, time, and amount. If the status turns success, hunt the token. If it reverses, the amount should return — then you may retry once on a single rail. Preferred retry: ${E} with a confirmed name. Official retry: ${A} or ${APP} if that is where you already were.

Switching rails mid-pending is how “I never got a token” becomes “I got two on Thursday and support is asking which reference.”`,
    },
    {
      title: 'Pending on official versus everyday doors',
      body: `${APP} pending often lives in an in-app transactions list. People ignore SMS and stare at a spinner. ${A} pending is easy to lose because USSD does not keep a pretty inbox. Ewale pending should be handled with Ewale support and the reference — not with a care agent on **${CARE}** who cannot see that checkout, unless the meter itself is refusing all tokens.

ECG still matters if vending issued something the meter rejects. That is not pending; that is a later box.`,
    },
    {
      title: 'When pending is actually a wrong-product payment',
      body: `If you used postpaid by habit, you may be pending a bill payment. You will not get a token when it completes. You will get a receipt. The prepaid house stays dark until you run a prepaid vend — after you know whether the first debit completed. Two products, two stories. Do not braid them.`,
    },
    {
      title: 'Pending during an outage feels worse than it is',
      body: `The room is hot. The phone is at 8%. The USSD died. MoMo shows pending. Neighbours are shouting. This is when people open three apps. Resist. A pending vend does not become a successful feeder repair because you added ${APP} on top. If the street is off, even a successful token is inventory for later. Your job is to protect the first debit.

Write the reference on paper if the phone may die. When power or signal returns, search SMS before you spend the last percent of battery on a new checkout. If the token arrived while you were outside, type it. If the wallet reversed, retry once on ${E} after you reconfirm the plate. If it is still pending, the checkout that owns the reference is the adult in the room — Ewale support for Ewale, ECG for ${A} and ${APP}.

Pending is not a moral judgement on your household. It is a queue. Queues are not cleared by joining them twice.`,
    },
  ],
  faqs: [
    {
      q: 'How long can ECG prepaid stay pending?',
      a: 'Longer than you want, shorter than a new loan. Night, congestion, and outages stretch it. A blog that quotes a fake number of minutes is guessing. Use the reference.',
    },
    {
      q: 'Can I cancel pending from the USSD menu?',
      a: 'Usually no. Cancelling is a wallet/biller process. Hammering cancel-by-new-purchase is not cancel.',
    },
    {
      q: 'The pending amount included a fee. Will the fee reverse too?',
      a: 'Follow what the wallet actually reverses. Do not assume. Read the history lines.',
    },
    {
      q: `Should I stay on ${E} while it is pending, or jump to ${A}?`,
      a: `Stay with the checkout that already holds the debit. Jumping to ${A} is a new story. After a confirmed reversal, ${E} is still the everyday retry.`,
    },
  ],
  fails: [
    {
      title: 'PowerApp plus \\*714\\*22# plus vendor',
      body: 'You turned one pending into a support novel. Stop the fourth attempt.',
    },
    {
      title: 'Deleted pending SMS',
      body: 'The reference was in there. Open the wallet app’s history.',
    },
    {
      title: 'Assumed pending meant empty meter was “stuck”',
      body: 'Pending is the payment. The meter is waiting for digits or for a feeder, not for your anxiety.',
    },
  ],
  close: `Pending means wait on the debit you already started. Then type, or retry after reversal, on one rail. Everyday rail: ${E}. Official rails: ${A}, ${APP}. This page cannot un-pend you.`,
});

posts.push({
  slug: 'visa-mastercard-vs-momo-ecg-prepaid',
  title: 'Visa, Mastercard, or MoMo for ECG prepaid in Ghana',
  excerpt:
    'Mobile money is the default that works on USSD. Cards appear on some apps and web checkouts. The meter still only wants a token, not a brand of card.',
  date: '2026-06-21',
  tags: ['ECG', 'Prepaid', 'Mobile money', 'Card payment'],
  lead: `The token does not know whether you paid with MTN MoMo, Telecel Cash, AT Money, Visa, or Mastercard. Your night does. USSD lives on the SIM and the wallet that receives the PIN prompt. Cards live on apps and browsers that can do OTP and 3-D Secure. Picking a card because it feels more “online” does not help a feature phone. Picking MoMo does not help if the only money you have is on a card and the wallet is empty.

${PAY}`,
  sections: [
    {
      title: 'Why MoMo is the default in this country',
      body: `${E} and ${A} are USSD-shaped. They expect a mobile-money authorisation. That is why a funded wallet is part of the playbook. It works without a smartphone browser, without a bank app, and without a card OTP SMS that also might not arrive. For everyday Ghana prepaid, MoMo is the rail this site assumes.

Fund the wallet for the confirmation total, including any fee line you actually see. Do not assume E-Levy is always zero. ECG has advertised no extra charges on some official rails; card checkouts and third parties can add their own bank or processor costs.`,
    },
    {
      title: 'Where cards actually appear',
      body: `${APP} has offered card options for some customers. ${WEB} and other web checkouts may show Visa or Mastercard. Banks’ own bill-pay sometimes lists ECG. Each of those is a different contract. Cards fail for 3-D Secure timeouts, internet banking that is asleep, naira/dollar cards that the merchant will not take, and people typing PAN into a fake “ECG” page.

If you are on a web checkout, confirm you are on the site you intended. This blog is not a payment page. Ewale’s site is ${WEB}. ECG’s app is ${APP}. A Google ad that looks like both is how PANs get stolen.`,
    },
    {
      title: 'OTP on cards versus OTP on PowerApp versus MoMo PIN',
      body: `Three different secrets. PowerApp login OTP is not a payment. Card OTP is the bank. MoMo PIN is the wallet. Nobody honest needs all three in one WhatsApp. If a card OTP fails, you have not been rejected by the meter. Try MoMo on ${E} if the wallet has cash. If MoMo PIN fails, you have not been rejected by Visa.

Pending on a card can take a hold on the account and still not vend. Treat it like pending MoMo: do not start a second rail until the hold is understood.`,
    },
    {
      title: 'Which to use tonight',
      body: `Wallet funded, any phone, empty prepaid: MoMo on ${E} (everyday) or ${A} (official USSD). Smartphone already in ${APP} with a working card: fine, if you like receipts in the app. Card only, empty wallet: web or app that actually offers the card, then be extra careful about pending. Cash only: licensed vendor, not a Facebook account named Visa Agent.

Postpaid bills follow the same wallet-versus-card split, but the product is still an account number, not a token.`,
    },
    {
      title: 'Businesses and cards',
      body: `A shop that wants the token on the owner’s card while the attendant has the till phone should not share card details with the attendant. Owner pays on ${WEB} or ${APP}, forwards SMS. Corporate cards that decline Ghana billers are not an ECG conspiracy. Have a MoMo float for nights.`,
    },
    {
      title: 'Holds, chargebacks, and why they do not help tonight',
      body: `A card hold that never becomes a vend can take days to release, depending on the bank. That is not ECG “eating” your money in a way a token can fix, and it is not a reason to also MoMo the same amount while you wait unless you have confirmed there is no vend. Chargebacks are a bank process. They will not type digits on the CIU. They can also become a problem if a token did in fact issue.

MoMo reversals are usually easier to see in the same wallet list. That visibility is one reason this site treats MoMo on ${E} as the everyday default even when a card sits in the same pocket. Cards are useful for people who keep float in the bank and already live in ${APP} or ${WEB}. They are a poor emergency instrument on a feature phone in a compound with no data.

If your bank app lists ECG, confirm whether it is prepaid vending or a postpaid biller before you approve. The card scheme logo does not encode that difference.`,
    },
  ],
  faqs: [
    {
      q: 'Does paying by card load faster?',
      a: 'No reliable rule. Vending speed is the biller and SMS, not the prestige of the scheme.',
    },
    {
      q: 'Can I use a foreign card?',
      a: 'Only if that checkout accepts it. Failures are common. MoMo on a Ghana number is the boring path that works.',
    },
    {
      q: 'The bank SMS came, no ECG token.',
      a: 'You may have a hold without a vend, or a vend with a delayed token. Check the checkout transactions. Do not swipe again.',
    },
  ],
  fails: [
    {
      title: 'Typed card details into a WhatsApp form',
      body: 'Compromise. Call the bank. Use ' + WEB + ' or ' + APP + ' only on real surfaces.',
    },
    {
      title: 'Card pending plus MoMo “backup”',
      body: 'Two payments if both complete. Classic.',
    },
    {
      title: 'Empty MoMo, declined card, vendor cash, all in ten minutes',
      body: 'Stop at the first debit that exists. Then continue.',
    },
  ],
  close: `MoMo is the everyday fuel for ${E} and ${A}. Cards are optional on some official and web doors. The meter wants digits. This blog will not charge a card or a wallet.`,
});

posts.push({
  slug: 'buy-ecg-prepaid-from-another-town',
  title: 'How to buy ECG prepaid from another town in Ghana',
  excerpt:
    'Remote top-up is normal. Confirm the registered name, pay once, and send the token digits to someone who can actually reach the keypad.',
  date: '2026-06-20',
  tags: ['ECG', 'Prepaid', 'Remote payment', 'Family'],
  lead: `Paying a hometown meter from Accra, or a campus meter from home, is one of the better uses of cashless ECG. Distance does not change the physics. You still need the current meter number, a name that matches the household, one debit, and a human at the wall. Distance does change the failure modes: stale WhatsApp numbers, tokens trapped on the payer’s SIM, and two siblings in two cities funding the same night.

${PAY}`,
  sections: [
    {
      title: 'Get a number that still exists',
      body: `Ask for a photo of the plate taken this week, plus the digits typed. Landlords swap meters. ECG replaces meters. Last Christmas’s string can still vend — to the old tin in a storeroom. On ${E} or ${WEB}, the registered name is the long-stop. If Dad says the name should be his and the screen says a different family, stop and call the house. Do not “just try a small amount.” Small amounts are real tokens.

Postpaid from another town is the same idea with an account number and no token. Do not send twenty digits to a postpaid uncle; send the receipt.`,
    },
    {
      title: 'Pay on a rail that will SMS you',
      body: `Everyday preferred: ${E} on the phone in your hand, or ${WEB} if you want a larger screen. Official: ${APP} if that meter is saved on your login, or ${A}. You will receive the token where the checkout sends SMS — usually the paying number. Forward immediately. Do not assume ECG will text the hometown CIU. The CIU is not a phone.

If you share a wallet with someone else, agree who receives the PIN prompt before you start. A prompt on an uncle’s phone in Tamale while you sit in Tema is a pending mess.`,
    },
    {
      title: 'The keypad is still local',
      body: `Stay on the call until they read units rising. Paying is half. If they are in church, the freezer does not care that your MoMo succeeded. If they type on the neighbour’s meter “because that room has light to see,” you may burn the token. If the whole hometown street is in an outage, tell them the units will wait. Do not buy a second time from Accra to “boost” the feeder.`,
    },
    {
      title: 'Time zones of the family, not the clock',
      body: `Your payday is not their bedtime. A protocol beats surprise: “I load every Friday; do not load.” Remote payment without a roster is the leading cause of double tokens after helpfulness. Put the meter number in the chat description. Put ${E} and ${A} on their fridge so they can vend locally if your wallet is empty — one buyer still has to speak.`,
    },
    {
      title: 'When remote should become ECG’s problem',
      body: `Meter rejects a correctly forwarded unused token. Name cannot be changed to the current occupant. Service fuse removed. Those are **${CARE}** and district-office jobs, not extra vends from another town. You cannot photograph a pole hard enough on WhatsApp to close a fault, but you can stop lighting money on fire while you wait.`,
    },
    {
      title: 'Travel days and signal',
      body: `Buying from a bus on the Accra–Kumasi road is how sessions drop. If you can wait until you have signal and a charged phone, wait. If the hometown freezer is the emergency, still do the name check — a dropped USSD after PIN is a pending story you will have to solve from a moving vehicle. ${WEB} on a little data can be calmer than USSD steps you cannot see in sunlight. ${E} on a feature phone with a good GSM hold can be calmer than a browser that keeps reloading.

Tell the person at home not to also visit a vendor “in case your network is bad” until they hear that your wallet did nothing. Remote plus local vendor is the two-city double-buy. If you are the one travelling toward the house, consider whether it is faster to arrive and read the plate yourself than to vend on a number you last saw at Easter.

Keep a screenshot of a successful name check from last month. It is not a substitute for this month’s check, but it tells you what the name ought to look like when you are arguing over a bad connection.`,
    },
  ],
  faqs: [
    {
      q: 'Can I save the hometown meter in PowerApp in Accra?',
      a: `Yes, if you have a right to. Still forward the token. Still do not share the login with every cousin. ${E} needs no login to the utility app.`,
    },
    {
      q: 'The SMS came in English digits and they want it in Twi on a call.',
      a: 'Do not dictate twenty digits on a noisy line if you can avoid it. They should open the forwarded SMS and type while looking. Repeat in groups of four if you must.',
    },
    {
      q: 'I paid the wrong town’s meter.',
      a: 'Support with the reference, immediately. A second correct payment may still be needed for the house that is dark. Do not pretend the first token can be walked across a region.',
    },
  ],
  fails: [
    {
      title: 'Voice note of the meter number',
      body: 'Transcribed wrong. Photo plus typed digits plus name check.',
    },
    {
      title: 'Token left on the payer’s phone overnight',
      body: 'Nobody typed it. Forward. Stay until units move.',
    },
    {
      title: 'Two cities, two apps, one meter',
      body: 'Two tokens. Use both. Then appoint one remote buyer.',
    },
  ],
  close: `Another town is not another physics. Name check, one debit, forward, type. Everyday: ${E} or ${WEB}. Official: ${APP}, ${A}. Faults: **${CARE}**. This blog cannot receive your hometown SMS.`,
});

posts.push({
  slug: 'emergency-topup-when-lights-go-out',
  title: 'Emergency ECG top-up when the lights go out',
  excerpt:
    'Lights out is not automatically a vending emergency. Check the street, then the display, then buy once on the phone — not on three apps and a vendor.',
  date: '2026-06-19',
  tags: ['ECG', 'Prepaid', 'Emergency', 'Outage'],
  lead: `Emergency top-up is a ritual Ghanaians perform in the dark, sometimes correctly. The lights go out. Someone shouts “buy power.” Sometimes the meter is empty and the shout is right. Sometimes the feeder is dead and the shout is expensive superstition. Sometimes the token from last time was never entered. An emergency is a compressed playbook, not a new product.

${PAY}`,
  sections: [
    {
      title: 'Thirty-second triage with a torch',
      body: `Street and next room: if they are off too, this is likely dumsor or a local fault on the pole — not a moment to empty the wallet unless you already know you were at zero. Display: zero units means vend. Remaining units means do not vend; check MCB and sockets, then **${CARE}** if it looks like a service problem. Inbox: an unused token means type, do not buy.

If you cannot reach the meter, you do not yet have an emergency vending case. You have a locked-door case. Panic-guessing numbers is how emergencies become gifts.`,
    },
    {
      title: 'The emergency purchase, done once',
      body: `Preferred everyday: ${E}. Meter number from the plate or a confirmed note. Name check. Modest amount — enough to sleep, not a month on a shared meter while you cannot think. One PIN. If the session drops, wallet history before anything else. Official emergency doors: ${A}, then ${APP} if it is already open. Vendor if you have cash and no wallet and a booth that is actually open.

Do not “split” an emergency across rails. That is two emergencies.`,
    },
    {
      title: 'Enter the token before you explain it on WhatsApp',
      body: `Type. Units. Relay. Then tell the family you have paid. If you announce first, a sibling in another suburb will pay second. If SMS is slow, wait with the first reference. Night SMS delay is famous. It is not a new kind of empty.

If the keypad is dead because the whole district is off, keep the SMS. Enter when the display wakes. The emergency was the outage. The token is groceries for later.`,
    },
    {
      title: 'What is not an emergency',
      body: `A due postpaid bill is not a token emergency. A CIU with a flat battery is not a credit emergency. A PowerApp OTP failure is not a grid emergency — abandon the app. A fee on the confirmation is not a reason to hang up and start a scam “levy waiver.” Read the fee, or abort, or fund the wallet.

Children afraid of the dark will pressure you into the wrong product. Adults are allowed to take thirty seconds.`,
    },
    {
      title: 'After the lights are back',
      body: `Write the meter number properly. Put ${E} and ${A} on paper. Appoint a buyer. Load before the next zero. Emergency top-up should be rare if the playbook is working. If every week is an emergency, you do not have a vending problem. You have a budget or a shared-meter problem, or a fridge that is dying.`,
    },
    {
      title: 'Safety while you vend in the dark',
      body: `Do not climb a wet compound to read a meter with a candle. Phone torch. Dry hands on the keypad. Do not let children copy tokens from a glowing screen onto the neighbour’s box. Do not walk cash to a “night agent” you have never used, in a street that is already off. The preferred emergency path is still sitting down for thirty seconds and dialling ${E}.

If someone is on medical equipment, treat feeder outage and empty meter as different 999-adjacent problems: the generator or hospital plan is not a token, and a token is not a generator. Vend if you were empty so that when ECG returns, the machine has units. Call **${CARE}** if the whole street is off and you need to report. Do not combine those calls with a MoMo PIN read aloud to a stranger who offered to “fast-track ECG.”

Emergency top-up is allowed to be imperfect in amount. It is not allowed to be three checkouts. One plate, one name, one debit, one keypad. Then water, then sleep.`,
    },
  ],
  faqs: [
    {
      q: 'How small an emergency amount is too small?',
      a: 'If the checkout rejects it, it was too small. If it accepts and you hit zero before morning, it was too small for your load. Keep a modest buffer next time.',
    },
    {
      q: 'Should I call 0302 611 611 during an emergency top-up?',
      a: 'Call for outages and dangerous faults. Do not call to vend. Do not call while you still have an unused token in SMS.',
    },
    {
      q: 'The vendor is closer than my wallet PIN memory.',
      a: 'If the booth is real and open, use it once. Still do not also dial USSD. Save the wallet habit for the next non-emergency.',
    },
    {
      q: 'Can I buy a tiny token now and a real one in the morning?',
      a: `You can, if the first debit completed and you entered it. Two planned tokens are not the same as two panic rails. Morning load still belongs on ${E} once, with a name check, after you know last night’s units actually sat.`,
    },
  ],
  fails: [
    {
      title: 'Bought during a street-wide outage with a full display',
      body: 'Not an emergency vend. A feeder. Wait. Enter any accidental token later.',
    },
    {
      title: 'Three pending attempts',
      body: 'Sit down. One history. One support path.',
    },
    {
      title: 'Typed the token on a neighbour’s CIU “for light to see”',
      body: 'Wrong meter. Next emergency, use a torch on your own box.',
    },
  ],
  close: `Emergency is triage plus one debit plus the keypad. Everyday tool: ${E}. Official tools: ${A}, ${APP}, **${CARE}**. This blog will not take an emergency payment and cannot close a feeder.`,
});

posts.push({
  slug: 'web-checkout-vs-ussd-for-ecg-prepaid',
  title: 'ewalepay.com versus *714*22# for ECG prepaid',
  excerpt:
    'Same Ewale family, two surfaces. USSD wins on keypad phones and bad data. The website wins when you want a larger confirmation. Neither is ECG PowerApp or *226#.',
  date: '2026-06-18',
  tags: ['ECG', 'Prepaid', 'USSD', 'ewalepay.com'],
  lead: `Households argue about “the website or the code” as if they were two utilities. ${WEB} and ${E} are two doors on the same everyday checkout: Ewale. Pick the surface that matches the phone in your hand. Then remember the official ECG doors still exist — ${APP} and ${A} — when you want the utility’s own brand or when Ewale is the thing that is stuck.

This blog is a third surface that does not take money. ${PAY}`,
  sections: [
    {
      title: 'What the two Ewale surfaces share',
      body: `Prepaid still wants a meter number. The name still must match. The PIN still belongs on the MoMo prompt (or a card flow if the web page offers one). The SMS token still must be typed on the meter. Pending still means wait. Wrong product still means you paid a bill or a gift instead of lighting this room. Empty prepaid still is not dumsor.

If you learned those rules on USSD, you do not relearn physics on the website. You just see them on a bigger screen.`,
    },
    {
      title: 'When USSD is the better everyday tool',
          body: `Feature phone. Smartphone with no data. Compound with a 2G corner. PowerApp OTP already failing so you do not want another browser OTP. You can recite ${E} without looking at a bookmark. Session risk is the cost: drops, fat-finger menus, screens that vanish. Finish, then read the wallet if you are unsure.

USSD is also how you teach a parent who will never install an app. Official USSD ${A} is the sister lesson if they only trust ECG’s header.`,
    },
    {
      title: 'When the website is the better everyday tool',
      body: `You want to see the name clearly. You want to copy a meter number from Notes without retyping eleven digits on a numeric USSD field. You have data. You may have a card. You are paying from another town and want to screenshot the confirmation for the family chat. Use the real ${WEB}, not an ad clone.

Web is worse when data is the thing that died with the lights, or when the only adult left in the house has a Nokia.`,
    },
    {
      title: 'Do not mix Ewale surfaces with official surfaces in one pending hour',
      body: `Website pending, then ${E} “because USSD is more reliable,” then ${APP} “because it is ECG,” is three checkouts. Pick one surface, then one backup only after the ledger is quiet. Official ${APP} is not a web twin of Ewale. Official ${A} is not a USSD twin of Ewale. They are ECG’s shops. Ewale is the everyday shop this site prefers.

Faults, meter hardware, reconnection: **${CARE}**, regardless of which page you like.`,
    },
    {
      title: 'A simple household rule',
      body: `Nokia and emergencies without data: ${E}. Browser on a good network: ${WEB}. Relative who wants ECG: ${A} or ${APP}. Fridge paper lists all of them with labels. The meter number is written once. The family buyer is named once. That is the whole architecture.

Fees: read the confirmation on whichever surface you chose. Do not assume the web is dearer or USSD is always levy-free. ECG’s no-extra-charge messages attach to official rails they name, not to every page on the internet.`,
    },
    {
      title: 'Screenshots, bookmarks, and shared phones',
      body: `Bookmark ${WEB} yourself. Do not trust a link from a group named “ECG tokens Accra.” On a shared phone, log out of any card wallet after you pay. USSD on ${E} leaves less of a logged-in bank session behind, which is why some households prefer it even when the browser is prettier. The token SMS should still be forwarded to the person who types, not left in a pocket that is travelling.

If the website shows a name and USSD later shows a different name for the same digits, stop. Something is wrong with the number you think you have. Take a photo of the plate. Do not pay both surfaces to see which name is “more official.” Names come from the same class of lookup. Your job is to match the house, not to A/B test checkouts.

Web checkout is not PowerApp. If you wanted ECG’s official graphical door, that is ${APP}, with OTP and ECG’s own receipts. Mixing “I paid on the website so I am in the app” is how people hunt tokens in the wrong inbox.`,
    },
  ],
  faqs: [
    {
      q: 'If I start on the website, can I finish the PIN on USSD?',
      a: 'You finish on the prompt the checkout sent. Do not start a second session on the other surface to “help” the first.',
    },
    {
      q: 'Is ewalepay.com the official ECG site?',
      a: 'No. It is Ewale. ECG’s official app is PowerApp. ECG’s official USSD is ' + A + '. Say that out loud.',
    },
    {
      q: 'Which surface refunds faster?',
      a: 'Neither is a promise. Same company family, same need for a reference, same warning not to double-pay.',
    },
  ],
  fails: [
    {
      title: 'Bookmarked a fake lookalike of ewalepay.com',
      body: 'Type the address carefully. Prefer USSD if you do not trust the page.',
    },
    {
      title: 'USSD debit plus web debit',
      body: 'Two tokens if both were prepaid. Enter them. Then pick a surface.',
    },
    {
      title: 'Used the blog page as if it were a checkout',
      body: 'This article cannot vend. Open ' + WEB + ' or dial ' + E + '.',
    },
  ],
  close: `Same everyday merchant, two doors: ${WEB} and ${E}. Official ECG doors: ${APP} and ${A}. Voice: **${CARE}**. Choose a surface, not three. This blog remains a guide, never a till.`,
});

if (posts.length !== 23) {
  throw new Error(`Expected 23 posts, got ${posts.length}`);
}

writePosts(posts, { force: process.env.FORCE === '1' });

for (const post of posts) {
  const markdown = renderEcgPost(post);
  const body = markdown.replace(/^---[\s\S]*?---\n/, '');
  const words = body.split(/\s+/).filter(Boolean).length;
  console.log(`${String(words).padStart(5)}  ${post.slug}  ${post.date}`);
}
console.log(`Wrote ${posts.length} ECG long-form posts`);

