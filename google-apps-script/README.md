# Google Sheets enquiry setup

1. Create a Google Sheet and name its first tab `Enquiries`.
2. In the Sheet, open **Extensions → Apps Script** and replace the default code with `Code.gs` from this folder.
3. In Apps Script, open **Project Settings → Script properties** and add `WEBHOOK_SECRET` with a long random value.
4. Select **Deploy → New deployment → Web app**. Set **Execute as** to *Me* and **Who has access** to *Anyone*, then deploy and copy the Web app URL.
5. In Vercel, open **Project → Settings → Environment Variables** and add:
   - `GOOGLE_SHEETS_WEBHOOK_URL`: the copied Web app URL
   - `GOOGLE_SHEETS_WEBHOOK_SECRET`: the same value used for `WEBHOOK_SECRET`
6. Redeploy Vercel. Submit a test enquiry and confirm that it appears in the Sheet and that `info@dijonconsultants.com` receives the notification.

The secret is sent server-to-server by Vercel; it is not exposed in the browser.
