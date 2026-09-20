import fs from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'content/blog');
const author = 'Guglex Technologies';

/** @type {Array<[string, string, string, string, string[]]>} */
const topics = [
  ['buy-wassce-result-checker-on-ewale', 'Buy a WASSCE result checker on Ewale', 'Buy a WASSCE result checker on Ewale web or *714*22#, pay with mobile money, and receive the serial and PIN after settlement.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['how-to-buy-wassce-result-checker-714-22', 'How to buy a WASSCE result checker on *714*22#', 'Dial *714*22#, choose result checker, pick WASSCE, pay with mobile money, and wait for the voucher SMS from Ewale.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'USSD']],
  ['wassce-result-checker-ewalepay-web', 'Buy a WASSCE result checker on ewalepay.com', 'Use Ewale on the web when you have data: select WASSCE result checker, pay, and save the voucher before you open the WAEC site.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-without-data-ewale', 'Buy a WASSCE result checker on Ewale without data', 'No data is required on *714*22#. Buy the WASSCE result checker on USSD, then use the SMS voucher when you next get a connection.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'USSD']],
  ['wassce-result-checker-mobile-money-ewale', 'Pay for a WASSCE result checker with mobile money on Ewale', 'Ewale collects the WASSCE checker fee through a mobile money PIN prompt. Approve once, then wait for the voucher — do not send money to a personal number.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'Mobile Money']],
  ['wassce-result-checker-mtn-momo-ewale', 'Buy a WASSCE result checker with MTN MoMo on Ewale', 'MTN MoMo works on Ewale for WASSCE result checkers. Keep the MTN number that will receive the PIN prompt and the voucher SMS.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'MTN']],
  ['wassce-result-checker-telecel-ewale', 'Buy a WASSCE result checker with Telecel cash on Ewale', 'Telecel wallets can buy a WASSCE result checker on Ewale. Confirm the paying number before you approve the prompt.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'Telecel']],
  ['wassce-result-checker-airteltigo-ewale', 'Buy a WASSCE result checker with AirtelTigo Money on Ewale', 'AirtelTigo Money can complete a WASSCE result checker purchase on Ewale. Watch for the PIN prompt on the wallet SIM.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'AirtelTigo']],
  ['wassce-checker-voucher-sms-ewale', 'Where the WASSCE result checker voucher arrives after Ewale', 'After settlement, Ewale sends the WASSCE result checker serial and PIN by SMS to the paying number. That SMS is the product.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'SMS']],
  ['wassce-result-checker-serial-pin-ewale', 'WASSCE result checker serial and PIN after buying on Ewale', 'A WASSCE result checker is a serial plus PIN. Ewale delivers both after payment. You still enter your own index number on the WAEC site.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-index-number-ewale', 'Use your WASSCE index number with an Ewale result checker', 'Ewale sells the checker voucher. Your WASSCE index number is separate. You need both on the results site — buying a checker does not look up your index for you.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-for-parents-ewale', 'Parents: buy a WASSCE result checker on Ewale', 'If your child is waiting on WASSCE results, you can buy the result checker on Ewale from your own phone and send them the serial and PIN.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-for-candidates-ewale', 'Candidates: buy your WASSCE result checker on Ewale', 'Buy the WASSCE result checker yourself on Ewale so the voucher SMS lands on your number, then check results when the WAEC portal opens.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-results-week-buy-checker-ewale', 'Buying a WASSCE result checker on Ewale during results week', 'Results week is busy. Buy the WASSCE checker on Ewale once, save the SMS, and retry the WAEC site if it is slow — do not buy a second voucher because the website spun.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-at-night-ewale', 'Buy a WASSCE result checker on Ewale after midnight', '*714*22# works at night. Buy the WASSCE result checker when results drop, even if every shop is closed.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'USSD']],
  ['wassce-result-checker-pending-ewale', 'WASSCE result checker still pending after Ewale payment', 'Pending means settlement is not finished. Do not buy another WASSCE checker. Wait for the SMS or check Ewale history before you pay again.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'Pending']],
  ['wassce-result-checker-not-received-ewale', 'WASSCE result checker voucher did not arrive after Ewale', 'If MoMo left your wallet and the WASSCE voucher SMS did not, wait, then use Ewale support with the payment reference. A second purchase is a second voucher.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'Support']],
  ['wassce-result-checker-wrong-exam-ewale', 'Bought the wrong exam checker on Ewale: WASSCE vs BECE', 'WASSCE and BECE checkers are different products. Confirm exam type on Ewale before you pay. A WASSCE voucher will not open BECE results.', 'Education', ['Ewale', 'WASSCE', 'BECE', 'Result Checker']],
  ['wassce-result-checker-waec-site-ewale', 'Use an Ewale WASSCE checker on the WAEC results site', 'After Ewale sends serial and PIN, open the official WAEC results site, enter index number, serial, and PIN. Ewale does not host the result sheet.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'WAEC']],
  ['wassce-result-checker-expired-voucher-ewale', 'Ewale WASSCE result checker voucher looks used or expired', 'If the WAEC site says the PIN is used, you already checked or someone reused the SMS. Buy another WASSCE checker on Ewale only if you still need a fresh voucher.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-receipt-ewale', 'Keep the Ewale receipt when you buy a WASSCE result checker', 'Save the Ewale SMS and any web receipt. Support can only trace a missing WASSCE checker with the payment reference, not a screenshot of a spinner.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-repeat-purchase-ewale', 'Buying a second WASSCE result checker on Ewale', 'Need another check for a sibling or a second sitting? Buy a second WASSCE result checker on Ewale as a new order. Do not reuse a spent PIN.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-school-noticeboard-ewale', 'Skip the school queue: buy a WASSCE result checker on Ewale', 'You do not need to buy a physical card at the school gate. A WASSCE result checker on Ewale is the same class of voucher, delivered by SMS.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-novdec-result-checker-ewale', 'Nov/Dec WASSCE result checker on Ewale', 'November/December WASSCE still needs a result checker. On Ewale, pick WASSCE — not BECE — and use the index number from that sitting.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-one-voucher-full-result-ewale', 'One WASSCE checker on Ewale covers the full result, not one subject', 'A WASSCE result checker is not sold per subject. One Ewale voucher is meant to open the full result for one index number on the WAEC site.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-vs-scratch-card-ewale', 'Ewale WASSCE checker vs a physical WAEC scratch card', 'A street scratch card and an Ewale WASSCE checker both end as serial and PIN. Ewale is the path that does not depend on a vendor still having stock.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-confirmation-sms-ewale', 'Read the Ewale SMS after you buy a WASSCE result checker', 'The confirmation SMS is not marketing. It carries the WASSCE checker serial and PIN. Screenshot it and keep the thread.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'SMS']],
  ['wassce-result-checker-ussd-menu-ewale', 'Finding WASSCE result checker on the Ewale *714*22# menu', 'On *714*22#, look for result checker or exams — not ECG. Pick WASSCE, confirm the amount, then approve mobile money.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'USSD']],
  ['wassce-result-checker-amount-ewale', 'What you pay for a WASSCE result checker on Ewale', 'The amount on Ewale is the checker price plus whatever your network charges on mobile money. Confirm the summary before the PIN prompt.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-failed-momo-ewale', 'Mobile money failed while buying a WASSCE checker on Ewale', 'A declined PIN means no WASSCE voucher was issued. Check MoMo history. If nothing left the wallet, you can try again.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'Mobile Money']],
  ['wassce-result-checker-double-pay-ewale', 'Do not pay twice for the same WASSCE result checker on Ewale', 'Slow SMS is not a failed purchase. If the first MoMo debit succeeded, wait. Two successful payments are two checkers.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-shared-phone-ewale', 'Buying a WASSCE checker on Ewale from a shared family phone', 'The voucher SMS goes to the paying number. If you use a parent’s phone, they must forward you the serial and PIN.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-abroad-family-ewale', 'Buy a WASSCE result checker on Ewale for a candidate in Ghana', 'Family abroad can still pay if they have a Ghana MoMo wallet on Ewale, or someone in Ghana can buy and send the voucher. The candidate still needs their index number.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-screenshot-ewale', 'Screenshots are not a WASSCE result checker: buy on Ewale', 'A photo of someone else’s result is not a checker. Buy your own WASSCE result checker on Ewale and use your index number.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-pin-prompt-ewale', 'Approve the MoMo PIN when buying a WASSCE checker on Ewale', 'The USSD session can close while the mobile money prompt is still open. Approve it. That prompt is what pays for the WASSCE checker.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'Mobile Money']],
  ['wassce-private-candidate-result-checker-ewale', 'Private candidate WASSCE result checker on Ewale', 'Private candidates still buy a WASSCE result checker. Use the index number on your admission / WAEC documents with the Ewale voucher.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-english-maths-ewale', 'Checking WASSCE English and Maths with one Ewale checker', 'English, Maths, and the rest of the subjects print on one result. One Ewale WASSCE checker is the voucher for that sheet, not a subject pack.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['wassce-result-checker-support-ewale', 'Who to contact if a WASSCE checker from Ewale does not work', 'If payment succeeded and the voucher is missing or rejected, contact Ewale with the reference. WAEC support cannot see Ewale’s payment.', 'Education', ['Ewale', 'WASSCE', 'Result Checker', 'Support']],
  ['wassce-result-checker-ghana-ewale-guide', 'WASSCE result checker in Ghana: the Ewale guide', 'In Ghana you buy a checker, then check on WAEC’s site. Ewale is the purchase path: web or *714*22#, paid with mobile money.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['buy-wassce-checker-before-results-ewale', 'Can you buy a WASSCE result checker on Ewale before results drop?', 'You can buy early and keep the voucher SMS. The WAEC site will only show the result when WAEC releases it. The checker does not leak results early.', 'Education', ['Ewale', 'WASSCE', 'Result Checker']],
  ['buy-bece-result-checker-on-ewale', 'Buy a BECE result checker on Ewale', 'Buy a BECE result checker on Ewale, pay with mobile money, and use the serial and PIN with the candidate’s BECE index number.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['how-to-buy-bece-result-checker-714-22', 'How to buy a BECE result checker on *714*22#', 'Dial *714*22#, choose result checker, select BECE — not WASSCE — confirm the amount, and approve the mobile money PIN.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'USSD']],
  ['bece-result-checker-ewalepay-web', 'Buy a BECE result checker on ewalepay.com', 'On ewalepay.com pick BECE result checker, pay, and save the voucher. Placement talk comes after you actually open the result.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-without-data-ewale', 'Buy a BECE result checker on Ewale without data', 'USSD *714*22# sells the BECE result checker without data. You only need internet later to open the WAEC BECE results page.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'USSD']],
  ['bece-result-checker-mobile-money-ewale', 'Pay for a BECE result checker with mobile money on Ewale', 'Do not transfer to an agent’s personal wallet. Ewale sends an official MoMo prompt for the BECE result checker.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'Mobile Money']],
  ['bece-result-checker-mtn-momo-ewale', 'Buy a BECE result checker with MTN MoMo on Ewale', 'Use the MTN number that should receive both the PIN prompt and the BECE checker SMS.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'MTN']],
  ['bece-result-checker-parents-ewale', 'Parents: buy a BECE result checker on Ewale', 'JHS results day is chaotic. Buy the BECE result checker on Ewale from your phone and keep the voucher for your ward’s index number.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-jhs-ewale', 'BECE result checker for JHS candidates on Ewale', 'BECE is the Junior High exam. On Ewale choose BECE result checker. A WASSCE voucher will not open a JHS result.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-serial-pin-ewale', 'BECE result checker serial and PIN after buying on Ewale', 'Ewale delivers a BECE serial and PIN. Enter those with the BECE index number on the official results site.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-index-number-ewale', 'BECE index number vs the Ewale result checker', 'The checker is not the index number. Teachers, the admission notice, or WAEC documents have the index. Ewale only sells the checker.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-results-week-checker-ewale', 'Buying a BECE result checker on Ewale during results week', 'Buy once on Ewale. If the results site is down, keep the BECE voucher. Refreshing the website does not consume a new checker by itself — entering the PIN might.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-not-received-ewale', 'BECE result checker voucher did not arrive after Ewale', 'Wait after a successful debit. Then contact Ewale with the reference. Buying another BECE checker “just in case” is a second order.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'Support']],
  ['bece-result-checker-pending-ewale', 'BECE result checker still pending on Ewale', 'Pending is not success. Watch MoMo. If you were not debited, you can retry. If you were debited, wait for the BECE voucher SMS.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'Pending']],
  ['bece-vs-wassce-result-checker-ewale', 'BECE vs WASSCE result checker on Ewale', 'They are different exam products on Ewale. Pick BECE for Junior High, WASSCE for Senior High. Paying the wrong one wastes the voucher.', 'Education', ['Ewale', 'BECE', 'WASSCE', 'Result Checker']],
  ['bece-result-checker-waec-ewale', 'Use an Ewale BECE checker on the WAEC results site', 'Ewale is not WAEC. After you buy, take serial, PIN, and BECE index number to the official WAEC BECE result page.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'WAEC']],
  ['bece-result-checker-school-placement-ewale', 'BECE result checker and school placement: what Ewale does', 'Ewale sells the BECE result checker. School placement (CSSPS) is a later process. You still need the result first.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-cssps-ewale', 'BECE checker on Ewale is not CSSPS placement', 'CSSPS placement uses BECE results, but buying a checker on Ewale does not submit school choices. Check the result, then follow GES/CSSPS instructions.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-ussd-menu-ewale', 'Finding BECE result checker on *714*22#', 'Do not open ECG prepaid by mistake. On the Ewale USSD menu choose result checker, then BECE, then pay.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'USSD']],
  ['bece-result-checker-amount-ewale', 'What a BECE result checker costs on Ewale', 'Confirm the cedi amount on the Ewale summary. Network charges sit on top of the checker price. Approve only if the exam type is BECE.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-failed-momo-ewale', 'MoMo failed while buying a BECE result checker on Ewale', 'No debit, no voucher. Try again. If the prompt timed out, check history before a second attempt.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'Mobile Money']],
  ['bece-result-checker-repeat-ewale', 'Buying another BECE result checker on Ewale', 'A second child needs a second checker. Each Ewale purchase is one voucher. Do not share a spent PIN across index numbers.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-night-ewale', 'Buy a BECE result checker on Ewale at night', 'When BECE results drop overnight, *714*22# is still available. Buy the checker, save the SMS, check when the site is up.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-telecel-ewale', 'Buy a BECE result checker with Telecel on Ewale', 'Telecel cash can pay for a BECE result checker on Ewale. The voucher SMS follows the paying number.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'Telecel']],
  ['bece-result-checker-airteltigo-ewale', 'Buy a BECE result checker with AirtelTigo Money on Ewale', 'Use the AirtelTigo wallet SIM for the PIN prompt when you buy a BECE checker on Ewale.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'AirtelTigo']],
  ['bece-result-checker-receipt-ewale', 'Keep the Ewale receipt for a BECE result checker', 'Parents should screenshot the Ewale confirmation. School staff cannot reverse a missing voucher without a payment reference.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-wrong-candidate-ewale', 'Wrong BECE index number after buying a checker on Ewale', 'The voucher still works. The index number is typed on the WAEC site, not into Ewale. Re-enter the correct BECE index; do not buy another checker for a typo.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-scratch-card-vs-ewale', 'BECE scratch card vs buying on Ewale', 'A roadside BECE card and an Ewale checker both become serial and PIN. Ewale is useful when the shop is closed or sold out.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-pin-prompt-ewale', 'Approve the PIN prompt for a BECE checker on Ewale', 'Hanging up the USSD menu does not cancel a live MoMo prompt. Approve or check the wallet before you assume the BECE order failed.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'Mobile Money']],
  ['bece-result-checker-support-ewale', 'Support for a BECE result checker bought on Ewale', 'Payment issues go to Ewale. Result content issues go to WAEC. Do not mix the two inboxes.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'Support']],
  ['bece-result-checker-ghana-ewale-guide', 'BECE result checker in Ghana: buy on Ewale', 'This note is the Ghana path: buy BECE result checker on Ewale, receive voucher, check on WAEC, then deal with placement separately.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['buy-bece-checker-before-results-ewale', 'Buy a BECE result checker on Ewale before results are released', 'You can hold the voucher early. It will not show grades until WAEC publishes BECE results.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-for-guardians-ewale', 'Guardians: buy a BECE result checker without going to town', 'If you cannot reach a vendor, buy the BECE result checker on Ewale USSD and keep the SMS for the candidate.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-double-pay-ewale', 'Avoid paying twice for one BECE result checker on Ewale', 'One successful MoMo debit should produce one voucher. Treat delays as delays, not as a reason to pay again.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['bece-result-checker-sms-ewale', 'BECE result checker SMS from Ewale', 'The SMS is the BECE checker. If you delete it, you may still retrieve details from Ewale history — do not assume you must buy another.', 'Education', ['Ewale', 'BECE', 'Result Checker', 'SMS']],
  ['bece-result-checker-index-mistakes-ewale', 'Common BECE index mistakes when using an Ewale checker', 'Transposed digits and mixing school code with candidate number are common. The Ewale voucher is fine; fix the index on the results site.', 'Education', ['Ewale', 'BECE', 'Result Checker']],
  ['buy-result-checker-on-ewale', 'Buy a result checker on Ewale', 'Result checkers for WAEC exams in Ghana can be bought on Ewale. Choose BECE or WASSCE, pay, and wait for serial and PIN.', 'Education', ['Ewale', 'Result Checker']],
  ['how-to-buy-result-checker-ghana-ewale', 'How to buy a result checker in Ghana on Ewale', 'Buying a result checker in Ghana means paying for a voucher, not paying WAEC cash. Ewale is a digital vendor: *714*22# or ewalepay.com.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['buying-result-checker-ussd-ewale', 'Buying a result checker on Ewale USSD', 'Buying a result checker on *714*22# is for people with a phone and a wallet, not a smartphone app. Follow the exam type carefully.', 'Education', ['Ewale', 'Result Checker', 'USSD', 'Buying Result Checker']],
  ['buying-result-checker-without-vendor-ewale', 'Buying a result checker without a roadside vendor', 'You do not need a shop. Buying a result checker on Ewale replaces the physical card queue when stock or distance is the problem.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['result-checker-what-it-is-ewale', 'What a result checker is when you buy on Ewale', 'A result checker is a paid voucher: serial and PIN. It is not the result itself. Ewale sells the voucher after mobile money settles.', 'Education', ['Ewale', 'Result Checker']],
  ['result-checker-voucher-ewale', 'Result checker vouchers delivered by Ewale', 'After buying a result checker, Ewale delivers a voucher. You still need the candidate index number to see grades.', 'Education', ['Ewale', 'Result Checker']],
  ['buying-result-checker-mobile-money-ghana', 'Buying a result checker with mobile money in Ghana', 'Buying a result checker with MoMo on Ewale is a PIN prompt, not a manual transfer to a name you were given on WhatsApp.', 'Education', ['Ewale', 'Result Checker', 'Mobile Money', 'Buying Result Checker']],
  ['result-checker-bece-or-wassce-ewale', 'Which result checker to buy on Ewale: BECE or WASSCE', 'Buying the wrong result checker is the main avoidable mistake. JHS is BECE. SHS is WASSCE. Ewale lists them separately.', 'Education', ['Ewale', 'BECE', 'WASSCE', 'Result Checker']],
  ['buy-result-checker-online-ghana-ewale', 'Buy a result checker online in Ghana on Ewale', 'ewalepay.com is the online path for buying a result checker. Same product as USSD, better if you want a larger screen to copy serial and PIN.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['result-checker-not-a-pdf-ewale', 'A result checker is not a PDF of the results', 'Buying a result checker on Ewale does not email a certificate PDF. It unlocks the official check. Print or screenshot after WAEC shows the sheet.', 'Education', ['Ewale', 'Result Checker']],
  ['buying-result-checker-for-someone-else-ewale', 'Buying a result checker for someone else on Ewale', 'You can buy the voucher on your wallet and send serial and PIN. They use their index number. Buying a result checker does not attach to a name on Ewale.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['result-checker-serial-and-pin-explained-ewale', 'Result checker serial and PIN explained', 'Serial identifies the voucher. PIN authorises one check (rules depend on WAEC). Ewale sends both when you finish buying a result checker.', 'Education', ['Ewale', 'Result Checker']],
  ['cheapest-result-checker-ghana-ewale', 'Buying a result checker in Ghana without a markup vendor', 'Street vendors sometimes add a walk-up margin. Buying a result checker on Ewale is the listed price plus network charges — confirm the Ewale summary.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['result-checker-exam-type-ewale', 'Always confirm exam type before buying a result checker', 'The Ewale menu will ask BECE or WASSCE. If you skip that, buying a result checker can still succeed — for the wrong exam.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['buying-result-checker-failed-payment-ewale', 'Failed payment while buying a result checker on Ewale', 'Decline or timeout is not a voucher. Check the wallet. Only a successful debit should be followed by a result checker SMS.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['result-checker-delivery-sms-ewale', 'How result checker delivery works on Ewale', 'Buying a result checker is step one. SMS delivery is step two. They are not the same second. Wait before you repurchase.', 'Education', ['Ewale', 'Result Checker', 'SMS']],
  ['buy-result-checker-on-phone-ewale', 'Buy a result checker on your phone with Ewale', 'Phone-only path: *714*22# or the Ewale site in a browser. There is no extra app required for buying a result checker.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['result-checker-waec-ghana-ewale', 'WAEC result checkers bought through Ewale', 'WAEC issues the result. Ewale is where you can buy the checker voucher in Ghana with mobile money.', 'Education', ['Ewale', 'Result Checker', 'WAEC']],
  ['buying-two-result-checkers-ewale', 'Buying two result checkers on Ewale', 'Two candidates, two vouchers. Complete buying a result checker once, save it, then place a second order. Do not mix PINs.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['result-checker-used-pin-ewale', 'Result checker PIN already used', 'If WAEC says used, the voucher did its job or was reused. Buying a result checker again on Ewale is only for a new check, not to unlock the same spent PIN.', 'Education', ['Ewale', 'Result Checker']],
  ['buying-result-checker-momo-prompt-ewale', 'The MoMo prompt when buying a result checker', 'The prompt amount should match Ewale. If the name or amount is wrong, cancel. Buying a result checker should never start with a mystery destination.', 'Education', ['Ewale', 'Result Checker', 'Mobile Money', 'Buying Result Checker']],
  ['result-checker-web-vs-ussd-ewale', 'Buying a result checker: Ewale web vs *714*22#', 'Same product. Web is easier to copy serials. USSD works without data. Choose based on the phone in your hand.', 'Education', ['Ewale', 'Result Checker', 'USSD']],
  ['buy-result-checker-no-app-ewale', 'Buy a result checker on Ewale with no app install', 'You do not need the ECG Power app or a WAEC app to buy the voucher. Ewale USSD and web are enough for buying a result checker.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['result-checker-support-after-ewale', 'After buying a result checker: who supports what', 'Missing voucher: Ewale. Wrong grades or withheld result: WAEC. Buying a result checker does not make Ewale the exam body.', 'Education', ['Ewale', 'Result Checker', 'Support']],
  ['buying-result-checker-results-day-ewale', 'Buying a result checker on results day', 'Networks and WAEC sites strain on results day. Buy the checker on Ewale, then retry the results site. Do not stack purchases.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['result-checker-index-number-vs-checker-ewale', 'Index number vs result checker on Ewale', 'Index number identifies the candidate. The checker pays to view. Buying a result checker never replaces a lost index number.', 'Education', ['Ewale', 'Result Checker']],
  ['buy-result-checker-ewalepay', 'Buy a result checker on ewalepay.com', 'ewalepay.com is Ewale’s web checkout for buying a result checker. Complete payment, copy serial and PIN, then leave to the WAEC site.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['result-checker-card-vs-digital-ewale', 'Physical result checker card vs digital Ewale voucher', 'Both are checkers. Digital buying a result checker on Ewale avoids a sold-out card table. Keep the SMS like you would keep the card.', 'Education', ['Ewale', 'Result Checker']],
  ['buying-result-checker-safe-ewale', 'Safer buying a result checker than paying a stranger', 'WhatsApp “I have checkers” is how people lose money. Buying a result checker on Ewale uses a payment prompt you can match to the order.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['result-checker-ghana-guide-ewale', 'Ghana result checker guide on Ewale', 'Need BECE or WASSCE results in Ghana? Buying a result checker on Ewale is the voucher step. The grades still come from WAEC.', 'Education', ['Ewale', 'Result Checker']],
  ['how-buying-result-checker-works-ewale', 'How buying a result checker works on Ewale', 'Select exam, pay, receive voucher, check result. That is the whole pipeline. Nothing in the middle should be a manual MoMo send.', 'Education', ['Ewale', 'Result Checker', 'Buying Result Checker']],
  ['result-checker-pending-purchase-ewale', 'Pending while buying a result checker on Ewale', 'Pending is an unfinished buy. Do not start buying a result checker a second time until you know whether the first debit happened.', 'Education', ['Ewale', 'Result Checker', 'Pending']],
  ['buy-result-checker-telecel-ewale', 'Buy a result checker with Telecel on Ewale', 'Telecel cash can finish buying a result checker. Put the Telecel SIM in range for the PIN and the SMS.', 'Education', ['Ewale', 'Result Checker', 'Telecel', 'Buying Result Checker']],
  ['buy-result-checker-mtn-ewale', 'Buy a result checker with MTN on Ewale', 'MTN MoMo is a common way of buying a result checker on Ewale. The voucher follows the MTN number that paid.', 'Education', ['Ewale', 'Result Checker', 'MTN', 'Buying Result Checker']],
  ['result-checker-keep-sms-ewale', 'Keep the SMS after buying a result checker', 'Delete the thread and you lose the easiest copy of serial and PIN. Treat buying a result checker like buying a scratch card you must not throw away.', 'Education', ['Ewale', 'Result Checker', 'SMS']],
  ['ecg-prepaid-token-ewale-quick-note', 'ECG prepaid token on Ewale: a short note', 'ECG prepaid on Ewale sells a token, not in-app credit. Pay, wait for SMS, type the token on the meter to restore power.', 'Utilities', ['Ewale', 'ECG', 'Prepaid', 'Token']],
  ['buy-ecg-prepaid-on-ewale-web', 'Buy ECG prepaid on the Ewale website', 'ewalepay.com can sell ECG prepaid when you have data. Confirm the meter name, pay, then enter the token on the keypad meter.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-units-after-ewale-token', 'ECG prepaid units after an Ewale token', 'Cedis you pay become a token, then units on the meter. Ewale does not display remaining units in your kitchen — the meter does.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-meter-number-length-ewale', 'ECG prepaid meter numbers on Ewale', 'Copy the meter number from the meter body. A short or guessed number can still buy prepaid — for another house.', 'Utilities', ['Ewale', 'ECG', 'Prepaid', 'Meter']],
  ['ecg-prepaid-minimum-amount-ewale', 'ECG prepaid minimum amount on Ewale', 'Enter an amount ECG and Ewale will accept. Tiny amounts may fail. Confirm the summary before the prepaid token is requested.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-power-restore-ewale', 'Restore ECG prepaid power with Ewale', 'If the meter is at zero, buy ECG prepaid on Ewale, load the token, then power returns. This is not the postpaid bill flow.', 'Utilities', ['Ewale', 'ECG', 'Prepaid', 'ECG Power']],
  ['ecg-prepaid-token-rejected-meter-ewale', 'ECG prepaid token rejected on the meter after Ewale', 'Retype carefully. Confirm you are on the meter you paid. An Ewale token for meter A will be rejected on meter B.', 'Utilities', ['Ewale', 'ECG', 'Prepaid', 'Token']],
  ['ecg-prepaid-last-token-ewale', 'Find the last ECG prepaid token after paying on Ewale', 'The SMS is the first place. If it is gone, use Ewale web/history rather than buying prepaid again immediately.', 'Utilities', ['Ewale', 'ECG', 'Prepaid', 'Token']],
  ['ecg-prepaid-for-tenants-ewale', 'ECG prepaid for tenants on Ewale', 'Tenants with a keypad meter buy prepaid themselves on Ewale. You need the meter number, not the landlord’s postpaid account.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-landlord-meter-ewale', 'Paying ECG prepaid on a landlord’s meter via Ewale', 'If the house shares one prepaid meter, anyone with the meter number can buy on Ewale. Agree who pays — the token still loads that meter only.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-mtn-momo-ewale', 'Buy ECG prepaid with MTN MoMo on Ewale', 'MTN MoMo pays for ECG prepaid tokens on Ewale. Approve the prompt on the MTN line.', 'Utilities', ['Ewale', 'ECG', 'Prepaid', 'MTN']],
  ['ecg-prepaid-telecel-ewale', 'Buy ECG prepaid with Telecel on Ewale', 'Telecel cash can buy ECG prepaid on Ewale. Keep the Telecel number available for PIN and token SMS.', 'Utilities', ['Ewale', 'ECG', 'Prepaid', 'Telecel']],
  ['ecg-prepaid-without-vendor-ewale', 'ECG prepaid without a neighbourhood vendor', 'When the shop is closed, Ewale USSD still sells prepaid tokens. You are not waiting on someone else’s ECG stock.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-emergency-night-ewale', 'Emergency ECG prepaid at night on Ewale', 'Lights out at 1am is a prepaid problem. Dial *714*22#, buy ECG prepaid, load the token. No vendor required.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-token-digits-ewale', 'ECG prepaid token digits from Ewale', 'Tokens are long digit strings. Do not skip zeros. Enter them in order on the prepaid meter after Ewale SMS arrives.', 'Utilities', ['Ewale', 'ECG', 'Prepaid', 'Token']],
  ['ecg-prepaid-balance-on-meter-vs-ewale', 'ECG prepaid balance lives on the meter, not on Ewale', 'Ewale sells the next token. It is not a wallet of leftover units. Check the meter for remaining prepaid credit.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-wrong-amount-ewale', 'Wrong ECG prepaid amount on Ewale', 'If you already paid, that token is valid for the amount purchased. Buy another prepaid top-up for the extra; you cannot edit a settled token.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-ussd-session-dropped-ewale', 'USSD dropped while buying ECG prepaid on Ewale', 'Check MoMo and wait for SMS before retrying prepaid. A dropped menu is not proof the token was never bought.', 'Utilities', ['Ewale', 'ECG', 'Prepaid', 'USSD']],
  ['ecg-prepaid-receipt-ewale', 'ECG prepaid receipts on Ewale', 'Keep SMS and web receipts. They are how you prove an ECG prepaid purchase if the token is delayed.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-ghana-ewale-guide', 'ECG prepaid in Ghana on Ewale', 'Ghana prepaid electricity on Ewale: meter number, mobile money, token SMS, keypad. That is the loop.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['how-ecg-prepaid-settles-on-ewale', 'How ECG prepaid settles on Ewale', 'Payment first, token after. Prepaid is not complete at PIN entry. It is complete when the token exists.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-keypad-meter-ewale', 'ECG prepaid keypad meters and Ewale', 'No keypad usually means you are not on prepaid. Do not force a token flow. Use ECG postpaid on Ewale instead if you have a bill account.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-sts-token-ewale', 'ECG prepaid STS-style tokens from Ewale', 'The token Ewale sends is what the meter expects. You do not convert it in an app. Type it on the prepaid meter.', 'Utilities', ['Ewale', 'ECG', 'Prepaid', 'Token']],
  ['ecg-prepaid-low-units-ewale', 'Low ECG prepaid units: top up on Ewale before cutoff', 'Do not wait for zero if you can avoid it. Small prepaid top-ups on Ewale prevent a dark house while you hunt for a vendor.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-prepaid-family-meter-ewale', 'Family ECG prepaid meter topped up on Ewale', 'Anyone in the family with the meter number can buy prepaid on Ewale. Confirm it is your meter name before paying.', 'Utilities', ['Ewale', 'ECG', 'Prepaid']],
  ['ecg-postpaid-bill-ewale-guide', 'ECG postpaid bill on Ewale', 'ECG postpaid on Ewale pays an outstanding balance to an account number. There is no token and no keypad step.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid', 'Postpaid']],
  ['pay-ecg-postpaid-on-ewalepay', 'Pay ECG postpaid on ewalepay.com', 'On the web, choose ECG postpaid — not prepaid — enter the account number, confirm the name and outstanding, then pay.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid']],
  ['ecg-postpaid-account-number-ewale', 'ECG postpaid account numbers on Ewale', 'Use the account / customer number on the ECG bill. A prepaid meter number will not pay a postpaid outstanding correctly.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid']],
  ['ecg-postpaid-outstanding-balance-ewale', 'ECG postpaid outstanding balance on Ewale', 'Ewale should show what is due after lookup. Confirm that figure before mobile money. Postpaid is paying a bill, not buying units.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid']],
  ['ecg-postpaid-no-token-ewale', 'ECG postpaid has no token on Ewale', 'If you are waiting for a token SMS after postpaid, you used the wrong product. Postpaid settles a bill. Power is not restored by keypad digits.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid', 'Prepaid']],
  ['ecg-postpaid-disconnection-ewale', 'ECG postpaid disconnection and paying on Ewale', 'Paying postpaid on Ewale can clear arrears. Reconnection timing still belongs to ECG. Keep the receipt.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid']],
  ['ecg-postpaid-vs-prepaid-mistake-ewale', 'Paid ECG prepaid by mistake instead of postpaid', 'That token belongs to a prepaid meter. It does not settle a postpaid bill. You still need the ECG postpaid flow on Ewale for the account.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid', 'Prepaid']],
  ['ecg-postpaid-mtn-momo-ewale', 'Pay ECG postpaid with MTN MoMo on Ewale', 'MTN MoMo can pay ECG postpaid outstanding on Ewale. Match the prompt to the bill amount you confirmed.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid', 'MTN']],
  ['ecg-postpaid-without-data-ewale', 'Pay ECG postpaid on *714*22# without data', 'USSD can look up and pay ECG postpaid. You do not need the ECG Power app for a standard outstanding payment.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid', 'USSD']],
  ['ecg-postpaid-bill-name-confirm-ewale', 'Confirm the ECG postpaid name before you pay on Ewale', 'The returned customer name must be your household or business. Wrong account pays someone else’s postpaid bill.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid']],
  ['ecg-postpaid-partial-payment-ewale', 'Partial ECG postpaid payments on Ewale', 'If you pay less than outstanding, ECG still records a payment. It may not clear disconnection risk. Check what Ewale allows on the summary.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid']],
  ['ecg-postpaid-receipt-ewale', 'ECG postpaid receipts from Ewale', 'Save the Ewale confirmation. ECG’s own SMS or bill update can lag. Your receipt is the first proof.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid']],
  ['ecg-postpaid-pending-ewale', 'ECG postpaid payment pending on Ewale', 'Do not pay the same postpaid bill twice while pending. Check MoMo, then wait for Ewale to finish settlement.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid', 'Pending']],
  ['ecg-postpaid-for-business-ewale', 'ECG postpaid for a small business on Ewale', 'Shop accounts are usually postpaid. Pay the business customer number on Ewale. Do not buy a prepaid token for a billed shop meter unless it is actually prepaid.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid']],
  ['ecg-postpaid-ghana-ewale-guide', 'ECG postpaid in Ghana: pay on Ewale', 'Ghana postpaid electricity: find the bill account, pay outstanding on Ewale, keep the receipt. No token.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid']],
  ['ecg-postpaid-ussd-menu-ewale', 'ECG postpaid on the Ewale USSD menu', 'On *714*22# pick electricity / ECG then postpaid. Prepaid is the other branch. The labels matter.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid', 'USSD']],
  ['ecg-postpaid-wrong-account-ewale', 'Wrong ECG postpaid account paid on Ewale', 'If the name was wrong and you still paid, that money went to that account. Stop and use the receipt with support. Do not immediately pay a second account without checking.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid']],
  ['ecg-postpaid-after-due-date-ewale', 'Paying ECG postpaid after the due date on Ewale', 'You can still pay outstanding on Ewale after due date. Late fees and disconnection rules are ECG’s, not Ewale’s menu.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid']],
  ['ecg-postpaid-sms-confirmation-ewale', 'ECG postpaid SMS confirmation after Ewale', 'You may get Ewale’s SMS first. ECG’s own confirmation can follow later. Both can be true without a token.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid', 'SMS']],
  ['ecg-postpaid-support-ewale', 'ECG postpaid support after paying on Ewale', 'Payment trace: Ewale reference. Supply still off after a cleared bill: ECG. Bring both if you visit an office.', 'Utilities', ['Ewale', 'ECG', 'ECG Postpaid', 'Support']],
  ['ecg-power-app-vs-ewale', 'ECG Power app vs Ewale for buying power', 'ECG Power is ECG’s app. Ewale is a payments product on web and *714*22#. Both can be used for prepaid power; they are not the same login.', 'Utilities', ['Ewale', 'ECG Power', 'ECG', 'Prepaid']],
  ['ecg-power-prepaid-token-ewale', 'ECG power prepaid tokens through Ewale', 'Need ECG power on a prepaid meter? Buy the token on Ewale. “ECG Power” in search usually means electricity units, not the app store listing.', 'Utilities', ['Ewale', 'ECG Power', 'Prepaid', 'Token']],
  ['what-ecg-power-means-on-ewale', 'What people mean by ECG power when they use Ewale', 'Most searches for ECG power are “the lights are off.” On Ewale that is prepaid token or postpaid bill — pick the one that matches the meter.', 'Utilities', ['Ewale', 'ECG Power', 'ECG']],
  ['restore-ecg-power-prepaid-ewale', 'Restore ECG power on prepaid with Ewale', 'Zero units, keypad meter: buy prepaid on Ewale, enter token, ECG power returns. If there is no keypad, you are probably on postpaid.', 'Utilities', ['Ewale', 'ECG Power', 'Prepaid']],
  ['ecg-power-outage-vs-empty-meter-ewale', 'ECG power outage vs empty prepaid meter', 'Area outage: Ewale cannot sell you grid power that is down. Empty meter: buy prepaid. People mix these up every week.', 'Utilities', ['Ewale', 'ECG Power', 'Prepaid']],
  ['buy-ecg-power-on-714-22', 'Buy ECG power on *714*22#', 'Dial *714*22# to buy ECG power as prepaid, or to pay postpaid. The shortcode is Ewale, not the ECG Power app.', 'Utilities', ['Ewale', 'ECG Power', 'USSD']],
  ['ecg-power-app-login-vs-ewale-ussd', 'ECG Power app login vs Ewale USSD', 'Forgot the ECG Power app password? You can still buy ECG power on Ewale USSD with meter or account number and MoMo.', 'Utilities', ['Ewale', 'ECG Power', 'USSD']],
  ['ecg-power-token-not-app-credit-ewale', 'ECG power is a meter token, not app wallet credit', 'Paying on Ewale does not store ECG power inside a phone app. Prepaid credit lives on the meter after the token is entered.', 'Utilities', ['Ewale', 'ECG Power', 'Prepaid']],
  ['ecg-power-for-home-ewale', 'Buy ECG power for the home on Ewale', 'Home ECG power on prepaid is a token purchase. Confirm the meter name so you do not gift power to the next compound.', 'Utilities', ['Ewale', 'ECG Power', 'Prepaid']],
  ['ecg-power-prepaid-customers-ewale', 'ECG power for prepaid customers on Ewale', 'Prepaid customers should never use the postpaid outstanding flow. That will not load ECG power onto a keypad meter.', 'Utilities', ['Ewale', 'ECG Power', 'Prepaid', 'ECG Postpaid']],
  ['no-ecg-power-after-ewale-payment', 'No ECG power after a successful Ewale payment', 'Prepaid: enter the token. Postpaid: wait for ECG to reflect the bill. If you skipped the token, the payment did not fail — the meter never got digits.', 'Utilities', ['Ewale', 'ECG Power', 'Prepaid']],
  ['ecg-power-units-explained-ewale', 'ECG power units explained after Ewale', 'You pay cedis. The meter shows units. Tariff, not Ewale, decides how far those units go. Buy prepaid again when units run low.', 'Utilities', ['Ewale', 'ECG Power', 'Prepaid']],
  ['ecg-power-postpaid-still-off-ewale', 'ECG power still off after postpaid payment on Ewale', 'Postpaid arrears can take time to clear at ECG. A token will not fix a billed account. Keep the Ewale receipt for the office.', 'Utilities', ['Ewale', 'ECG Power', 'ECG Postpaid']],
  ['ecg-power-app-download-or-ewale', 'Download ECG Power app or just use Ewale', 'You do not have to download ECG Power to buy electricity. Ewale web and *714*22# already sell ECG power products.', 'Utilities', ['Ewale', 'ECG Power']],
  ['ecg-power-emergency-topup-ewale', 'Emergency ECG power top-up on Ewale', 'When the house is dark, Ewale USSD is the fast ECG power top-up: prepaid token, SMS, keypad.', 'Utilities', ['Ewale', 'ECG Power', 'Prepaid']],
  ['ecg-power-meter-keypad-ewale', 'ECG power and the meter keypad', 'No token typed, no prepaid power. Ewale’s job ends at delivering the token. The keypad is yours.', 'Utilities', ['Ewale', 'ECG Power', 'Token']],
  ['ecg-power-ghana-ewale-guide', 'ECG power in Ghana: buy through Ewale', 'Ghana homes search ECG power when they need light. Ewale is one place to buy prepaid or pay postpaid without an agent.', 'Utilities', ['Ewale', 'ECG Power', 'ECG']],
  ['cheap-ecg-power-topup-ewale', 'Small ECG power top-ups on Ewale', 'You can buy a small prepaid amount for ECG power when that is all the wallet has. Confirm Ewale accepts the amount before PIN.', 'Utilities', ['Ewale', 'ECG Power', 'Prepaid']],
  ['ecg-power-shared-meter-ewale', 'Shared meter ECG power on Ewale', 'A shared prepaid meter means shared ECG power. Load on Ewale only if everyone agrees whose number is on the sticker.', 'Utilities', ['Ewale', 'ECG Power', 'Prepaid']],
  ['ecg-power-sms-token-ewale', 'ECG power token SMS from Ewale', 'The SMS is the ECG power you bought (prepaid). Forward it to whoever is standing at the meter.', 'Utilities', ['Ewale', 'ECG Power', 'SMS', 'Token']],
  ['ecg-power-wrong-house-ewale', 'ECG power went to the wrong house', 'Wrong meter number on Ewale sends a valid token to another prepaid meter. Confirm name before every ECG power purchase.', 'Utilities', ['Ewale', 'ECG Power', 'Meter']],
  ['ecg-power-weekend-ewale', 'Buy ECG power on a weekend via Ewale', 'Weekends are when vendors close. Ewale still sells ECG power. Prepaid tokens do not wait for Monday.', 'Utilities', ['Ewale', 'ECG Power', 'Prepaid']],
  ['ecg-power-momo-ewale', 'Pay for ECG power with mobile money on Ewale', 'MoMo PIN, then token or bill receipt. That is ECG power on Ewale — not a transfer to a person named “ECG.”', 'Utilities', ['Ewale', 'ECG Power', 'Mobile Money']],
  ['ecg-power-web-ewalepay', 'Buy ECG power on ewalepay.com', 'Web checkout for ECG power: choose prepaid or postpaid, confirm identity, pay, save the result (token or receipt).', 'Utilities', ['Ewale', 'ECG Power']],
  ['ecg-power-ussd-no-smartphone-ewale', 'Buy ECG power on USSD with no smartphone', 'Feature phones can buy ECG power on *714*22#. The ECG Power app is optional. The meter still needs the token if you are prepaid.', 'Utilities', ['Ewale', 'ECG Power', 'USSD']],
  ['what-is-ewale-payments-ghana', 'What Ewale is: everyday payments in Ghana', 'Ewale is Guglex Technologies’ consumer payments product: web plus *714*22#. Result checkers, ECG prepaid, ECG postpaid, airtime, and data — not a blog checkout.', 'Product', ['Ewale']],
  ['how-to-use-ewale-714-22', 'How to use Ewale *714*22#', 'Dial *714*22#, pick the service, confirm the destination, approve MoMo. That is Ewale on any GSM phone.', 'Product', ['Ewale', 'USSD']],
  ['ewalepay-com-vs-ussd', 'ewalepay.com vs *714*22#', 'Same Ewale product, two surfaces. Web when you have data. USSD when you do not. Do not pay twice across both for one order.', 'Product', ['Ewale', 'USSD']],
  ['ewale-services-result-checker-ecg', 'Ewale services: result checker and ECG', 'On one shortcode you can buy a result checker or ECG power (prepaid/postpaid). Pick the menu item you actually need.', 'Product', ['Ewale', 'Result Checker', 'ECG']],
  ['ewale-mobile-money-how-it-works', 'How mobile money works on Ewale', 'Ewale does not ask you to send to a personal number. A PIN prompt is the payment. Wrong prompt, cancel.', 'Product', ['Ewale', 'Mobile Money']],
  ['ewale-no-app-required', 'Ewale does not require an app', 'Skip the app stores. Use ewalepay.com or *714*22#. ECG Power app and WAEC apps are separate products.', 'Product', ['Ewale']],
  ['ewale-for-feature-phones', 'Ewale on a feature phone', 'If the phone can dial USSD and receive SMS, it can use Ewale: result checkers and ECG included.', 'Product', ['Ewale', 'USSD']],
  ['ewale-mtn-telecel-airteltigo', 'Ewale on MTN, Telecel, and AirtelTigo', 'Ewale is built for Ghana networks. The paying SIM receives the prompt and usually the SMS voucher or token.', 'Product', ['Ewale', 'MTN', 'Telecel', 'AirtelTigo']],
  ['ewale-receipts-and-sms', 'Ewale receipts and SMS', 'SMS is part of the product for tokens and result checkers. Keep threads. Support starts from a reference, not a vibe.', 'Product', ['Ewale', 'SMS']],
  ['ewale-pending-payments-explained', 'Pending payments on Ewale explained', 'Pending means not finished. For result checkers and ECG, wait. A second payment is a second order.', 'Product', ['Ewale', 'Pending']],
  ['ewale-safe-meter-and-checker-numbers', 'Confirm meter, account, and exam type on Ewale', 'Wrong meter, wrong postpaid account, wrong exam checker: all succeed as payments and fail as outcomes. Read the confirm screen.', 'Product', ['Ewale', 'ECG', 'Result Checker']],
  ['ewale-customer-support-path', 'Ewale customer support: what to send', 'Send the time, number, amount, and reference. “It did not work” is not a trace for a result checker or ECG token.', 'Product', ['Ewale', 'Support']],
  ['ewale-web-checkout-guide', 'Ewale web checkout on ewalepay.com', 'Choose the product, confirm lookup, pay, copy the voucher or token. Web is Ewale, not WAEC and not ECG’s office.', 'Product', ['Ewale']],
  ['ewale-ussd-menu-map', 'Ewale *714*22# menu map', 'Expect ECG prepaid, ECG postpaid, result checkers, and airtime/data depending on what is live. Read labels. Prepaid is not postpaid. BECE is not WASSCE.', 'Product', ['Ewale', 'USSD', 'ECG', 'Result Checker']],
  ['ewale-ghana-everyday-payments', 'Ewale for everyday payments in Ghana', 'Result checkers in exam season, ECG power when the meter dies, airtime on the same product. That is the point of Ewale.', 'Product', ['Ewale', 'ECG', 'Result Checker']],
  ['ewale-pay-without-agent', 'Pay on Ewale without an agent', 'Agents are optional. Ewale lets you buy a result checker or ECG prepaid from the phone that already has MoMo.', 'Product', ['Ewale']],
  ['ewale-pin-prompt-timeout', 'Ewale PIN prompt timed out', 'Open MoMo history. If there is no debit, retry. If there is a debit, wait for the result checker or ECG token SMS.', 'Product', ['Ewale', 'Mobile Money']],
  ['ewale-do-not-pay-twice', 'Do not pay twice on Ewale', 'The expensive habit: repurchase because SMS is slow. One debit, one result checker or one ECG token.', 'Product', ['Ewale', 'ECG', 'Result Checker']],
  ['ewale-for-parents-and-tenants', 'Ewale for parents and tenants', 'Parents buy BECE/WASSCE checkers. Tenants buy ECG prepaid. Same Ewale, different menu lines.', 'Product', ['Ewale', 'BECE', 'WASSCE', 'ECG']],
  ['ewale-result-checker-and-ecg-same-shortcode', 'Result checker and ECG on the same Ewale shortcode', '*714*22# is one entry. Buying a result checker is not buying ECG power. Finish one flow. Do not mix meter numbers into exam menus.', 'Product', ['Ewale', 'Result Checker', 'ECG', 'USSD']],
];

function yamlTags(tags) {
  return `[${tags.map((t) => JSON.stringify(t)).join(', ')}]`;
}

function body(title, excerpt, tags) {
  const exam = tags.includes('BECE') && tags.includes('WASSCE')
    ? 'BECE or WASSCE'
    : tags.includes('BECE')
      ? 'BECE'
      : tags.includes('WASSCE')
        ? 'WASSCE'
        : tags.includes('Result Checker')
          ? 'BECE or WASSCE'
          : null;
  const prepaid = tags.includes('Prepaid');
  const postpaid = tags.includes('ECG Postpaid') || tags.includes('Postpaid');
  const power = tags.includes('ECG Power');

  const lines = [];
  lines.push(excerpt.replace(/\. $/, '.'));
  lines.push('');
  lines.push('This is a blog note for people searching that problem. Payments happen on **Ewale** ([ewalepay.com](https://ewalepay.com) or **\\*714\\*22#**), not on this website.');
  lines.push('');

  if (exam) {
    lines.push('## Buying the checker');
    lines.push('');
    lines.push(`1. Open Ewale or dial **\\*714\\*22#**.`);
    lines.push(`2. Choose **result checker**, then **${exam}**.`);
    lines.push('3. Confirm the amount. Approve the mobile money PIN once.');
    lines.push('4. Wait for SMS with **serial** and **PIN**.');
    lines.push('5. On the official WAEC results site, enter index number + serial + PIN.');
    lines.push('');
    lines.push('## Do not mix this up');
    lines.push('');
    lines.push('- BECE is Junior High. WASSCE is Senior High. The vouchers are not interchangeable.');
    lines.push('- Ewale sells the checker. WAEC hosts the result.');
    lines.push('- A successful MoMo debit should not be followed by a panic second purchase.');
    lines.push('');
    lines.push('If the voucher never arrives, keep the Ewale reference. If the grades look wrong, that is WAEC, not Ewale.');
  } else if (postpaid && !prepaid) {
    lines.push('## Pay ECG postpaid');
    lines.push('');
    lines.push('1. Choose **ECG postpaid** on Ewale, not prepaid.');
    lines.push('2. Enter the **account / customer number** from the bill.');
    lines.push('3. Confirm the name and outstanding balance.');
    lines.push('4. Approve mobile money. Save the receipt.');
    lines.push('');
    lines.push('There is **no token**. If you are standing at a keypad, you likely needed **ECG prepaid** instead.');
  } else if (prepaid || power) {
    lines.push('## Buy ECG prepaid / restore power');
    lines.push('');
    lines.push('1. Choose **ECG prepaid** on Ewale.');
    lines.push('2. Enter the **meter number** from the meter sticker.');
    lines.push('3. Confirm the registered name. Stop if it is not your house.');
    lines.push('4. Enter the amount, approve MoMo, wait for the **token SMS**.');
    lines.push('5. Type the token on the meter keypad.');
    lines.push('');
    lines.push('ECG Power the app is optional. **ECG power** the electricity is the token on the meter. Postpaid bills will not load a keypad.');
  } else {
    lines.push('## Use Ewale');
    lines.push('');
    lines.push('1. Dial **\\*714\\*22#** or open [ewalepay.com](https://ewalepay.com).');
    lines.push('2. Pick the real product: result checker, ECG prepaid, or ECG postpaid.');
    lines.push('3. Confirm meter, account, or exam type.');
    lines.push('4. Approve one mobile money prompt.');
    lines.push('5. Treat SMS as the receipt for tokens and checkers.');
    lines.push('');
    lines.push('Ewale is the product. This site is the blog.');
  }

  lines.push('');
  lines.push('## If it fails');
  lines.push('');
  lines.push('- Declined PIN: nothing was bought. Retry.');
  lines.push('- Debit with no SMS: wait, then support with the reference.');
  lines.push('- Wrong product selected: that payment cannot be “converted.” Use the correct flow next.');
  return lines.join('\n');
}

const start = new Date('2026-02-20T12:00:00Z');

if (topics.length !== 200) {
  throw new Error(`Expected 200 topics, got ${topics.length}`);
}

const slugs = new Set();
for (const [i, [slug, title, excerpt, category, tags]] of topics.entries()) {
  if (slugs.has(slug)) throw new Error(`Duplicate slug ${slug}`);
  slugs.add(slug);
  const date = new Date(start);
  date.setUTCDate(start.getUTCDate() + i);
  const iso = date.toISOString().slice(0, 10);
  const file = path.join(dir, `${slug}.md`);
  if (fs.existsSync(file)) {
    throw new Error(`Refusing to overwrite ${file}`);
  }
  const md = `---
title: ${JSON.stringify(title)}
excerpt: ${JSON.stringify(excerpt)}
date: ${JSON.stringify(iso)}
author: ${JSON.stringify(author)}
category: ${JSON.stringify(category)}
tags: ${yamlTags(tags)}
---

${body(title, excerpt, tags)}
`;
  fs.writeFileSync(file, md);
}

console.log(`Wrote ${topics.length} notes to ${dir}`);
