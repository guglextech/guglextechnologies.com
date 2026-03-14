---
title: "How to Collect Payment with USSD Shortcode: A Complete Guide"
excerpt: "Learn how to set up USSD shortcode payment collection for your business. From registration to integration, this guide covers everything you need to accept payments via USSD in Africa."
date: "2026-03-14"
author: "Guglex Technologies"
category: "Technology"
tags: ["USSD", "Payments", "Fintech", "Mobile Money", "Africa"]
featured: false
---

# How to Collect Payment with USSD Shortcode: A Complete Guide

USSD (Unstructured Supplementary Service Data) remains one of the most powerful payment collection channels in Africa. Unlike mobile apps or websites, USSD works on every phone — including basic feature phones — without requiring internet access. For businesses operating in markets where smartphone penetration is still growing, USSD shortcodes offer a reliable, inclusive way to collect payments from customers.

This guide walks you through everything you need to know about setting up USSD payment collection, from understanding how it works to going live with your own shortcode.

---

## What Is a USSD Shortcode?

A USSD shortcode is a short numeric code (typically 3 to 5 digits) that users dial on their phone to access a menu-driven service. When a customer dials your shortcode — for example, `*123#` — they see a text-based menu on their screen where they can navigate options, enter information, and authorize payments.

Unlike SMS, USSD sessions happen in real time. The connection stays open while the user interacts with the menu, making it ideal for transactional flows like:

- Bill payments
- Subscription renewals
- Airtime and data purchases
- Event ticket sales
- Loan repayments
- Service top-ups

---

## How USSD Payment Collection Works

The payment flow follows a straightforward sequence:

| Step | What Happens | Who Is Involved |
|---|---|---|
| **1. Dial** | Customer dials your USSD code (e.g., `*789*1#`) | Customer |
| **2. Route** | Mobile network operator routes the request to your USSD gateway | MNO + Gateway |
| **3. Menu** | Your application returns a text-based menu | Your Server |
| **4. Select** | Customer navigates the menu and enters payment details | Customer |
| **5. Process** | Your application triggers the payment via mobile money API | Your Server + Payment API |
| **6. Authorize** | Customer receives a prompt to enter their mobile money PIN | Mobile Money Provider |
| **7. Confirm** | Both parties receive confirmation; SMS receipt is sent | All |

No internet connection or smartphone is required at any point in this flow.

---

## Step 1: Register a USSD Shortcode

Before you can collect payments, you need a dedicated or shared shortcode.

### Dedicated vs. Shared Shortcodes

| Feature | Dedicated Shortcode | Shared Shortcode |
|---|---|---|
| **Format** | `*123#` | `*123*45#` |
| **Cost** | Higher (monthly rental) | Lower |
| **Branding** | Full brand ownership | Shared with other services |
| **Best For** | Established businesses with high volume | Startups and small businesses |

### How to Register

1. **Choose a USSD gateway provider** — Companies like Hubtel, Nalo Solutions, Arkesel, or Africa's Talking provide USSD gateway services across multiple African countries.
2. **Apply for a shortcode** — Submit your business registration documents, a description of your service, and your preferred shortcode to the provider.
3. **Approval from the MNO** — The mobile network operator reviews and approves your application. This typically takes 2 to 6 weeks depending on the country and operator.
4. **Configure your shortcode** — Once approved, configure the shortcode to route requests to your application server via the gateway provider's API.

### Required Documents

- Business registration certificate
- Tax identification number
- Description of the USSD service
- Technical contact details
- Data protection compliance documentation (where applicable)

---

## Step 2: Choose a Payment Integration Partner

Your USSD application needs to connect to a payment processor to actually move money.

### Mobile Money APIs

| Provider | Markets | Strength |
|---|---|---|
| **MTN Mobile Money API** | Ghana, Uganda, Cameroon, and others | Largest mobile money network in West Africa |
| **Vodafone Cash API** | Ghana, other Vodafone markets | Strong urban coverage |
| **M-Pesa API (Safaricom)** | Kenya, Tanzania | Dominant in East Africa |
| **Airtel Money API** | Multiple African countries | Wide pan-African reach |

### Payment Aggregators

If you want to support multiple mobile money providers through a single integration, payment aggregators simplify the process:

| Aggregator | Coverage | Key Features |
|---|---|---|
| **Hubtel** | Ghana | Mobile money, card payments, USSD |
| **Paystack** | Ghana, Nigeria, and growing | Mobile money, cards, bank transfers |
| **Flutterwave** | Pan-African | Multiple currencies, wide coverage |
| **Africa's Talking** | Pan-African | USSD gateway and payment APIs in one platform |

Using an aggregator means you write one integration and accept payments from MTN, Vodafone, AirtelTigo, and other providers without separate API integrations for each.

---

## Step 3: Build Your USSD Application

A USSD application is a backend API that receives requests from the USSD gateway and returns text-based menus. The architecture is straightforward:

**Customer Phone → Mobile Network → USSD Gateway → Your API Server → Payment API**

### How a Typical Payment Flow Works

When a customer dials your shortcode, your server receives a request and responds with a menu. The interaction follows this pattern:

1. **Main Menu** — Your server presents the initial options (Pay Bill, Check Balance, etc.)
2. **Amount Entry** — If the customer selects "Pay Bill," your server asks for the amount
3. **Confirmation** — Your server displays the amount and asks the customer to confirm
4. **Payment Trigger** — On confirmation, your server calls the mobile money API to initiate the debit
5. **Result** — The customer sees a final message and receives an SMS receipt

### Key Concepts to Understand

| Concept | Description |
|---|---|
| **CON response** | Continues the session and waits for user input |
| **END response** | Terminates the session and displays a final message |
| **Session ID** | Unique identifier for each USSD session; used to track multi-step interactions |
| **Text parameter** | Contains all user inputs separated by `*` (e.g., `1*50*1` means option 1, then 50, then option 1) |
| **Callback URL** | The endpoint on your server where the payment provider sends transaction results |

Your development team (or technology partner) will use these concepts to build the USSD application using your preferred programming language and framework.

---

## Step 4: Testing

Before going live, thorough testing is critical.

### Testing with a USSD Simulator

Most gateway providers offer a USSD simulator in their developer sandbox. This lets you dial your shortcode virtually and test the full menu flow without using a real phone or incurring charges.

### What to Test

| Test Scenario | Why It Matters |
|---|---|
| **Successful payment (happy path)** | Confirms the full flow works end to end |
| **Invalid inputs** | Ensures your app handles letters, symbols, and out-of-range numbers gracefully |
| **Session timeouts** | USSD sessions expire after ~120 seconds; your app must handle this |
| **Network errors** | Verifies graceful error handling when the payment API is down |
| **Concurrent sessions** | Confirms multiple users can access the shortcode simultaneously |
| **Edge cases** | Very large amounts, zero amounts, duplicate transactions |

### Go-Live Checklist

- All menu flows tested and working
- Payment callbacks processed correctly
- Error messages are user-friendly
- Session timeout handling is graceful
- Transaction logging is in place
- SMS receipts are sent on successful payment
- Security measures implemented (rate limiting, input validation)

---

## Step 5: Security Best Practices

USSD payment systems handle sensitive financial data. These practices are essential:

| Practice | Description |
|---|---|
| **Input Validation** | Always validate and sanitize user inputs. Reject invalid amounts, letters, and symbols. |
| **Rate Limiting** | Limit how many sessions a single phone number can initiate within a time window to prevent abuse. |
| **Transaction Logging** | Log every transaction with timestamps, session IDs, phone numbers, amounts, and statuses for auditing. |
| **Idempotency** | Ensure duplicate requests do not result in double charges. Use unique transaction IDs. |
| **Encryption** | Use HTTPS for all communication between your server and the payment API. |

---

## Cost Structure

Understanding the costs involved helps you price your service correctly.

| Cost Component | Typical Range | Frequency |
|---|---|---|
| **Shortcode rental** | $50 – $500 | Monthly |
| **Per-session fee** | $0.005 – $0.02 | Per session |
| **Payment processing fee** | 1% – 2.5% of transaction | Per transaction |
| **Gateway setup fee** | $0 – $200 | One-time |
| **Server hosting** | $10 – $100 | Monthly |

Costs vary significantly by country, provider, and transaction volume. Negotiate rates based on your expected volume — most providers offer discounts at scale.

---

## Common Challenges and Solutions

| Challenge | Impact | Solution |
|---|---|---|
| **Session Timeouts** | Sessions expire after ~120 seconds | Keep menus concise, minimize steps, handle incomplete transactions gracefully |
| **Network Latency** | Slow responses during peak hours | Optimize API response times to under 5 seconds |
| **Multi-Network Support** | Customers on different networks can't access your shortcode | Register with each MNO or use a gateway that handles cross-network routing |
| **Character Limits** | USSD messages are limited to 182 characters | Write concise menu text, avoid unnecessary content |

---

## When to Use USSD vs. Other Payment Channels

| Channel | Best For | Internet Required | Smartphone Required | Setup Complexity |
|---|---|---|---|---|
| **USSD** | Mass market, rural areas, instant payments | No | No | Medium |
| **Mobile App** | Rich UI, repeat customers, complex flows | Yes | Yes | High |
| **Web Payment** | E-commerce, desktop users | Yes | No | Medium |
| **SMS** | Notifications, simple one-way commands | No | No | Low |
| **WhatsApp** | Customer engagement, conversational flows | Yes | Yes | Low |

USSD is the strongest choice when you need to reach the widest possible audience, including users without smartphones or internet access.

---

## Getting Started

Setting up USSD payment collection involves multiple moving parts — shortcode registration, gateway integration, payment API implementation, testing, and security. At Guglex Technologies, we specialize in building USSD applications and payment integrations for businesses across Africa.

Whether you need a simple bill payment flow or a complex multi-service USSD platform, our team handles everything from shortcode acquisition to production deployment.

**Ready to start collecting payments via USSD?** [Contact us](/contact) to discuss your project.
