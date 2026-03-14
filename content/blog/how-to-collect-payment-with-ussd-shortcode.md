---
title: "How to Collect Payment with USSD Shortcode: A Complete Guide"
excerpt: "Learn how to set up USSD shortcode payment collection for your business. From registration to integration, this guide covers everything you need to accept payments via USSD in Africa."
date: "2025-03-14"
author: "Guglex Technologies"
category: "Technology"
tags: ["USSD", "Payments", "Fintech", "Mobile Money", "Africa"]
featured: false
---

# How to Collect Payment with USSD Shortcode: A Complete Guide

USSD (Unstructured Supplementary Service Data) remains one of the most powerful payment collection channels in Africa. Unlike mobile apps or websites, USSD works on every phone — including basic feature phones — without requiring internet access. For businesses operating in markets where smartphone penetration is still growing, USSD shortcodes offer a reliable, inclusive way to collect payments from customers.

This guide walks you through everything you need to know about setting up USSD payment collection, from understanding how it works to going live with your own shortcode.

## What Is a USSD Shortcode?

A USSD shortcode is a short numeric code (typically 3 to 5 digits) that users dial on their phone to access a menu-driven service. When a customer dials your shortcode — for example, `*123#` — they see a text-based menu on their screen where they can navigate options, enter information, and authorize payments.

Unlike SMS, USSD sessions happen in real time. The connection stays open while the user interacts with the menu, making it ideal for transactional flows like:

- Bill payments
- Subscription renewals
- Airtime and data purchases
- Event ticket sales
- Loan repayments
- Service top-ups

## How USSD Payment Collection Works

The payment flow follows a straightforward sequence:

### 1. Customer Dials the Shortcode

The customer dials your USSD code (e.g., `*789*1#`) from their mobile phone. No internet connection or smartphone is required.

### 2. USSD Gateway Routes the Request

The mobile network operator (MNO) routes the dial request to your USSD gateway provider, which forwards it to your application server.

### 3. Your Application Presents a Menu

Your backend application responds with a text menu. For a payment flow, this might look like:

```
Welcome to PayService
1. Pay Bill
2. Check Balance
3. Transaction History
0. Exit
```

### 4. Customer Selects Payment Option

The customer enters their choice. Your application then guides them through the payment steps — selecting a product, entering an amount, and confirming the transaction.

```
Enter amount to pay:
```

```
Confirm payment of GHS 50.00
to PayService?
1. Confirm
2. Cancel
```

### 5. Payment Is Processed

Once the customer confirms, your application triggers the payment through a mobile money API or payment gateway. The customer receives an authorization prompt from their mobile money provider (e.g., MTN Mobile Money, Vodafone Cash, AirtelTigo Money) to enter their PIN.

### 6. Confirmation Is Sent

After successful payment, both the customer and your system receive confirmation. The customer sees a final USSD screen and may also receive an SMS receipt.

## Step 1: Register a USSD Shortcode

Before you can collect payments, you need a dedicated or shared shortcode.

### Dedicated vs. Shared Shortcodes

| Feature | Dedicated Shortcode | Shared Shortcode |
|---|---|---|
| Format | `*123#` | `*123*45#` |
| Cost | Higher (monthly rental) | Lower |
| Branding | Full brand ownership | Shared with other services |
| Best for | Established businesses | Startups and small businesses |

### How to Register

1. **Choose a USSD gateway provider** — Companies like Hubtel, Nalo Solutions, Arkesel, or Africa's Talking provide USSD gateway services across multiple African countries.
2. **Apply for a shortcode** — Submit your business registration documents, a description of your service, and your preferred shortcode to the provider.
3. **Approval from the MNO** — The mobile network operator reviews and approves your shortcode application. This can take 2 to 6 weeks depending on the country and operator.
4. **Configure your shortcode** — Once approved, configure the shortcode to route requests to your application server via the gateway provider's API.

### Required Documents

- Business registration certificate
- Tax identification number
- Description of the USSD service
- Technical contact details
- Data protection compliance documentation (where applicable)

## Step 2: Choose a Payment Integration Partner

Your USSD application needs to connect to a payment processor to actually move money. Common options include:

### Mobile Money APIs

- **MTN Mobile Money API** — Widely used in Ghana, Uganda, Cameroon, and other MTN markets
- **Vodafone Cash API** — Available in Ghana and other Vodafone markets
- **M-Pesa API (Safaricom)** — Dominant in Kenya and Tanzania
- **Airtel Money API** — Available across multiple African countries

### Payment Aggregators

If you want to support multiple mobile money providers through a single integration, payment aggregators simplify the process:

- **Hubtel** — Ghana-focused with mobile money, card payments, and USSD
- **Paystack** — Supports mobile money in Ghana and other markets
- **Flutterwave** — Pan-African coverage with mobile money support
- **Africa's Talking** — Provides USSD gateway and payment APIs in one platform

Using an aggregator means you write one integration and accept payments from MTN, Vodafone, AirtelTigo, and other providers without separate API integrations for each.

## Step 3: Build Your USSD Application

A USSD application is essentially a backend API that receives requests from the USSD gateway and returns text-based menus.

### Basic Architecture

```
Customer Phone → MNO → USSD Gateway → Your API Server → Payment API
```

### Sample USSD Payment Flow (Node.js)

Here is a simplified example of handling a USSD payment session:

```javascript
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/ussd', (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  let response = '';
  const inputs = text.split('*');

  if (text === '') {
    // First request — show main menu
    response = `CON Welcome to PayService
1. Pay Bill
2. Check Balance
3. Exit`;

  } else if (inputs[0] === '1' && inputs.length === 1) {
    // User selected "Pay Bill"
    response = `CON Enter the amount to pay:`;

  } else if (inputs[0] === '1' && inputs.length === 2) {
    const amount = inputs[1];
    response = `CON Confirm payment of GHS ${amount}
1. Confirm
2. Cancel`;

  } else if (inputs[0] === '1' && inputs.length === 3) {
    if (inputs[2] === '1') {
      const amount = inputs[1];
      // Trigger payment API here
      initiatePayment(phoneNumber, amount);
      response = `END Payment of GHS ${amount} initiated.
You will receive a prompt to enter your PIN.`;
    } else {
      response = `END Payment cancelled.`;
    }

  } else if (inputs[0] === '2') {
    response = `END Your balance is GHS 150.00`;

  } else {
    response = `END Thank you for using PayService.`;
  }

  res.set('Content-Type', 'text/plain');
  res.send(response);
});

app.listen(3000, () => {
  console.log('USSD app running on port 3000');
});
```

### Key Concepts

- **`CON`** — Continues the session and waits for user input
- **`END`** — Terminates the session and displays a final message
- **Session ID** — Unique identifier for each USSD session; use it to track multi-step interactions
- **Text** — Contains all user inputs separated by `*` (e.g., `1*50*1` means the user selected option 1, entered 50, then selected option 1 again)

## Step 4: Implement the Payment Logic

Once the customer confirms payment on your USSD menu, you need to trigger the actual mobile money debit. Here is an example using a payment API:

```javascript
async function initiatePayment(phoneNumber, amount) {
  const response = await fetch('https://api.paymentprovider.com/collect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY',
    },
    body: JSON.stringify({
      amount: parseFloat(amount),
      currency: 'GHS',
      phone_number: phoneNumber,
      description: 'Bill Payment via USSD',
      callback_url: 'https://yourdomain.com/payment/callback',
    }),
  });

  const data = await response.json();
  return data;
}
```

### Handling Payment Callbacks

Payment providers send a callback (webhook) to your server once the payment is completed or fails. You must set up an endpoint to handle these:

```javascript
app.post('/payment/callback', (req, res) => {
  const { transaction_id, status, amount, phone_number } = req.body;

  if (status === 'success') {
    // Update your database
    // Send SMS confirmation to customer
    // Activate the service or product
    console.log(`Payment of GHS ${amount} from ${phone_number} successful`);
  } else {
    // Handle failed payment
    console.log(`Payment from ${phone_number} failed`);
  }

  res.status(200).send('OK');
});
```

## Step 5: Test Your USSD Application

Before going live, thorough testing is critical.

### Testing with a USSD Simulator

Most gateway providers offer a USSD simulator in their developer sandbox. This lets you dial your shortcode virtually and test the full menu flow without using a real phone or incurring charges.

### What to Test

- **Happy path** — Complete a successful payment from start to finish
- **Invalid inputs** — Enter letters, symbols, or out-of-range numbers
- **Session timeouts** — USSD sessions typically expire after 120 seconds of inactivity
- **Network errors** — Simulate API failures and ensure graceful error handling
- **Concurrent sessions** — Test with multiple users accessing the shortcode simultaneously
- **Edge cases** — Very large amounts, zero amounts, duplicate transactions

### Go-Live Checklist

- [ ] All menu flows tested and working
- [ ] Payment callbacks processed correctly
- [ ] Error messages are user-friendly
- [ ] Session timeout handling is graceful
- [ ] Transaction logging is in place
- [ ] SMS receipts are sent on successful payment
- [ ] Security measures implemented (rate limiting, input validation)

## Security Best Practices

USSD payment systems handle sensitive financial data. Follow these practices:

### Input Validation

Always validate and sanitize user inputs. Never trust raw USSD input:

```javascript
const amount = parseFloat(inputs[1]);
if (isNaN(amount) || amount <= 0 || amount > 10000) {
  response = 'END Invalid amount. Please try again.';
  return;
}
```

### Rate Limiting

Prevent abuse by limiting how many sessions a single phone number can initiate within a time window.

### Transaction Logging

Log every transaction with timestamps, session IDs, phone numbers, amounts, and statuses. This is essential for dispute resolution and auditing.

### Idempotency

Ensure that duplicate requests do not result in double charges. Use transaction IDs and check for existing transactions before processing.

### Encryption

Use HTTPS for all communication between your server and the payment API. Never transmit sensitive data over unencrypted channels.

## Cost Structure

Understanding the costs involved helps you price your service correctly.

| Cost Component | Typical Range |
|---|---|
| Shortcode rental (monthly) | $50 – $500 |
| Per-session fee | $0.005 – $0.02 |
| Payment processing fee | 1% – 2.5% of transaction |
| Gateway setup fee | $0 – $200 (one-time) |
| Server hosting | $10 – $100/month |

Costs vary significantly by country, provider, and transaction volume. Negotiate rates based on your expected volume — most providers offer discounts at scale.

## Common Challenges and Solutions

### Session Timeouts

USSD sessions are short-lived (typically 120 seconds). Keep menus concise and minimize the number of steps. If a session expires mid-payment, your system should handle the incomplete transaction gracefully.

### Network Latency

USSD relies on the mobile network, which can be slow during peak hours. Optimize your API response times — the gateway expects a response within 5 to 10 seconds.

### Multi-Network Support

If you want customers on all networks to use your shortcode, you need to register the shortcode with each MNO separately (or use a gateway provider that handles cross-network routing).

### Character Limits

USSD messages are limited to 182 characters per screen. Write concise menu text and avoid unnecessary content.

## When to Use USSD vs. Other Channels

| Channel | Best For | Requires Internet | Requires Smartphone |
|---|---|---|---|
| USSD | Mass market, rural areas, instant payments | No | No |
| Mobile App | Rich UI, repeat customers, complex flows | Yes | Yes |
| Web Payment | E-commerce, desktop users | Yes | No |
| SMS | Notifications, simple commands | No | No |
| WhatsApp | Customer engagement, conversational flows | Yes | Yes |

USSD is the strongest choice when you need to reach the widest possible audience, including users without smartphones or internet access.

## Getting Started with Guglex Technologies

Setting up USSD payment collection involves multiple moving parts — shortcode registration, gateway integration, payment API implementation, testing, and security. At Guglex Technologies, we specialize in building USSD applications and payment integrations for businesses across Africa.

Whether you need a simple bill payment flow or a complex multi-service USSD platform, our team handles everything from shortcode acquisition to production deployment.

**Ready to start collecting payments via USSD?** [Contact us](/contact) to discuss your project.
