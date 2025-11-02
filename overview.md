# Lendly – User Stories and Borrow-Lending Flow

## Overview

**Lendly** is a web platform where users can list items for lending and borrow items from others.

- Borrowers deposit a refundable security amount (based on item value or lender preference).
- Lenders get notified of borrow requests and approve or deny them.
- After the borrowing period, the borrower returns the item and confirms the return; the lender must confirm the condition before the deposit is released.
- The platform can take a small service fee (optional feature).

---

## Roles

1. **Borrower** – requests items to borrow, deposits money, returns item, gets refund.
2. **Lender** – lists items, approves/denies requests, confirms returns, receives refund if damaged.
3. **Admin** – moderates listings, handles disputes, manages users, oversees transactions.

---

## User Stories

### 1. Authentication & Profile

- As a user, I want to create an account using email or social login, so I can start lending or borrowing items.
- As a user, I want to verify my identity (via ID or phone) so others trust my profile.
- As a user, I want to edit my profile (photo, location, bio, contact method) so others can know who I am.

---

### 2. Item Listing (Lender Side)

- As a lender, I want to list an item with details (title, description, photos, category, condition, location, deposit amount) so others can borrow it.
- As a lender, I want to set availability dates for my item so people only request during available times.
  - The system checks item availability before confirming a borrow request.
  - If the item is already borrowed (or reserved), new requests for overlapping dates are blocked or queued.
- As a lender, I want to edit or remove listings when needed.
- As a lender, I want to see all requests made for my items, so I can decide whether to approve or reject them.

---

### 3. Item Browsing & Discovery (Borrower Side)

- As a borrower, I want to browse items in a catalogue so I can find what I need.
- As a borrower, I want to filter items by:
  - Distance (e.g., within 5 km)
  - Category (e.g., electronics, tools, books)
  - Price range
  - Availability dates
- As a borrower, I want to search for items by name or keyword to find specific things quickly.
- As a borrower, I want to view item details (price, deposit, location, lender rating, reviews) before making a decision.

---

### 4. Borrow Request Flow

- As a borrower, I want to send a borrow request with my preferred dates.
- As a lender, I want to receive a notification (email/app) when someone requests my item.
- As a lender, I want to approve or reject the request based on availability or borrower reliability.
- As a borrower, I want to get notified when my request is approved or rejected.
- As a borrower, upon approval, I want to pay the rental fee and deposit securely through the platform.

---

### 5. During Borrowing

- As a borrower, I want to receive reminders when the return deadline is approaching.
- As a lender, I want to track ongoing borrows and expected return dates.
- As a borrower, I want to have a way to send photos or videos on the platform when I pick up the item to document its condition before borrowing.
- As a lender, I want to view the photos or videos submitted by the borrower so I can verify that the item's condition was recorded.
- As a borrower, I want to mark the item as returned once I hand it back.
- As a borrower, I want to have a way to send photos or videos on the platform when I return the item to show its condition at return time.
- As a lender, I want to confirm the item's condition upon return before approving refund.
- As a lender, I want to report an issue or damage if the item is returned broken or late.

---

### Business Rule

- The platform should allow both parties to upload and timestamp condition photos or videos at pickup and return.
- These records should be securely stored and accessible to both the lender and borrower.
- In case of disputes, these records can be used by admins to verify item condition and make resolution decisions.

---

### 6. Payments & Refunds

- As a borrower, I want to send a borrow request with my preferred dates.
- As a lender, I want to receive a notification (email/app) when someone requests my item.
- As a lender, I want to approve or reject the request based on availability or borrower reliability.
- As a borrower, I want to get notified when my request is approved or rejected.
- If the request is approved:
  - As a borrower, I want to confirm my booking by paying the rental fee and deposit, so the item is officially reserved for me.
  - As a lender, I want the system to block overlapping requests once payment is made, ensuring the item cannot be double-booked.
  - As a borrower, I want to receive confirmation of successful payment and booking, including item pickup details.
  - As a borrower, I want to have a way to send photos or videos on the platform when I pick up the item to document its condition before borrowing.
- If the request is rejected:
  - As a borrower, I want to see the reason for rejection (if provided) so I can adjust my request or look for other items.

---

### 7. Notifications & Communication

- As a user, I want to receive email/push notifications for:
  - Borrow requests
  - Approval/rejection updates
  - Return reminders
  - Deposit refund confirmations
- As a borrower or lender, I want to chat in-app to coordinate pickup and return.

---

### 8. Reviews & Ratings

- As a borrower, I want to rate the lender and item after the transaction.
- As a lender, I want to rate the borrower for reliability.
- As a user, I want to see ratings and reviews before trusting another user.

---

### 9. Admin & Safety Features

- As an admin, I want to review flagged listings or dispute reports.
- As an admin, I want to freeze deposits during disputes.
- As an admin, I want to suspend fraudulent users or refund deposits as needed.

---

## Borrow–Lend Flow (Conceptual)

1. Borrower browses items.
2. Sends borrow request (dates, purpose).
3. Lender receives notification.
4. Lender approves or rejects.
5. If approved → Borrower pays deposit and fee.
6. System marks item as "Borrowed."
7. Borrower collects item.
8. Borrow period begins.
9. Reminder sent before deadline.
10. Borrower returns item and marks as returned.
11. Lender confirms item condition.
12. If good → Deposit refunded to borrower, fee released to lender.
13. If not good → Dispute resolution or partial refund.

## Suggested Add-On Features

- Geo-location for distance-based search.
- Smart pricing suggestion based on similar items.
- In-app wallet to hold deposits and payments.
- Verification badges for trusted users.
- Optional insurance for high-value items.
- Automatic reminders (e.g., via SMS or push).
