export const EWALE_DIAL_HREF = 'tel:*714*22%23';

type ArticleCta = {
  kicker: string;
  title: string;
  short: string;
  description: string;
  onlineLabel: string;
};

export function getArticleCta(category: string, title: string): ArticleCta {
  const text = `${category} ${title}`.toLowerCase();

  if (text.includes('water')) {
    return {
      kicker: 'Ghana Water',
      title: 'Pay Ghana Water in 30 seconds',
      short: 'Pay with MoMo and keep the SMS as your receipt.',
      description:
        'Dial *714*22#, enter the account number, and pay with Mobile Money. Works on any phone, even without an app.',
      onlineLabel: 'Pay Ghana Water online',
    };
  }

  if (text.includes('dstv') || text.includes('gotv') || text.includes('startimes') || category === 'TV Bills') {
    return {
      kicker: 'TV bills',
      title: 'Renew DSTV, GOtv, or StarTimes in 30 seconds',
      short: 'Pay with MoMo and keep the decoder on while it restores.',
      description:
        'Dial *714*22#, pick TV Bills, enter the smartcard or IUC, and pay with Mobile Money. No trip to town.',
      onlineLabel: 'Pay a TV bill online',
    };
  }

  if (text.includes('checker') || text.includes('wassce') || text.includes('bece') || category === 'Education') {
    return {
      kicker: 'Education',
      title: 'Buy a result checker in 30 seconds',
      short: 'Pay with MoMo and get serial and PIN by SMS.',
      description:
        'Dial *714*22#, pick Education, choose WASSCE or BECE, and pay with Mobile Money. The voucher arrives by SMS.',
      onlineLabel: 'Buy a checker online',
    };
  }

  if (text.includes('airtime') || text.includes('data') || category === 'Telco') {
    return {
      kicker: 'Airtime & data',
      title: 'Buy airtime or data in 30 seconds',
      short: 'Pay with MoMo and credit lands on the number you confirm.',
      description:
        'Dial *714*22#, pick Telco, confirm the number, and pay with Mobile Money. Works on MTN, Telecel, and AT.',
      onlineLabel: 'Buy airtime online',
    };
  }

  if (text.includes('postpaid')) {
    return {
      kicker: 'ECG postpaid',
      title: 'Pay an ECG postpaid bill in 30 seconds',
      short: 'Pay with MoMo and keep the SMS while the bill updates.',
      description:
        'Dial *714*22#, pick ECG postpaid, enter the account number, and pay with Mobile Money. No token — this clears a bill, not a meter.',
      onlineLabel: 'Pay ECG postpaid online',
    };
  }

  if (text.includes('ecg') || text.includes('prepaid') || text.includes('token') || category === 'Utilities') {
    return {
      kicker: 'ECG prepaid & postpaid',
      title: 'Buy ECG prepaid credit in 30 seconds',
      short: 'Pay with MoMo and get your token by SMS instantly.',
      description:
        'Dial *714*22#, enter your meter number, and pay with Mobile Money. Your ECG token arrives by SMS in seconds — works on any phone, even without the Power App.',
      onlineLabel: 'Buy ECG prepaid online',
    };
  }

  return {
    kicker: 'Ewale',
    title: 'Pay on *714*22# in 30 seconds',
    short: 'Airtime, bills, TV, and checkers — any phone, no app.',
    description:
      'Dial *714*22# or pay on ewalepay.com. One shortcode for everyday payments in Ghana. No smartphone and no data required.',
    onlineLabel: 'Pay on ewalepay.com',
  };
}

export function getDialNowCopy(category: string) {
  switch (category) {
    case 'Utilities':
      return 'It is the backup that works when an app, OTP, or data fails. One shortcode also pays Ghana Water and TV bills.';
    case 'TV Bills':
      return 'It works when you have no data and no time to go to town. DSTV, GOtv, and StarTimes restore after the same MoMo debit.';
    case 'Education':
      return 'Buy once, keep the SMS, and do not double-pay on results week. WASSCE and BECE checkers land on the same shortcode.';
    case 'Telco':
      return 'It works on a feature phone when the operator app will not load. MTN, Telecel, and AT share the same checkout.';
    default:
      return 'It is the backup that works when OTP, data, or Play Store fail. One shortcode also pays Ghana Water and TV bills.';
  }
}
