# EmailJS Setup Instructions

This guide will help you set up email notifications for when someone clicks "Yes" on the proposal page.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

```
Subject: {{subject}}

{{message}}

---
Sent from Proposal Page
```

4. Make sure to include these variables in your template:
   - `{{to_email}}` - recipient email
   - `{{subject}}` - email subject
   - `{{message}}` - email message
   - `{{reply_to}}` - reply-to email (optional)

5. Copy the **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Configure in Your Project

### Option A: Using Environment Variables (Recommended for Production)

1. Create a `.env` file in the root of your project:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Add `.env` to your `.gitignore` file to keep credentials private

3. For GitHub Pages deployment, you'll need to set these as environment variables in your CI/CD pipeline or use a build script

### Option B: Direct Configuration (Quick Setup)

1. Open `src/pages/Proposal.tsx`
2. Find the `EMAILJS_CONFIG` constant near the top
3. Replace the empty strings with your credentials:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: "your_service_id_here",
  TEMPLATE_ID: "your_template_id_here",
  PUBLIC_KEY: "your_public_key_here",
};
```

**Note:** If you use Option B, your credentials will be visible in the code. For production, use Option A with environment variables.

## Step 6: Test

1. Start your development server: `npm run dev`
2. Navigate to the proposal page
3. Click "Yes"
4. Check your email (joemdjossou@gmail.com) - you should receive a notification!

## Troubleshooting

- **Email not sending?** Check the browser console for error messages
- **Credentials not working?** Make sure you copied them correctly (no extra spaces)
- **Template variables not working?** Ensure your EmailJS template includes all required variables: `{{to_email}}`, `{{subject}}`, `{{message}}`

## Security Note

EmailJS Public Keys are safe to expose in frontend code. However, for better security:
- Use environment variables for production
- Consider rate limiting on the EmailJS side
- Monitor your EmailJS usage to prevent abuse

