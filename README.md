# Dijon Consultants

A modern education-consultancy website for students in Pakistan who are exploring higher-education options in Europe.

## Highlights

- Free consultation and admissions-enquiry form
- Study-destination pages for Portugal, Poland, Latvia and Hungary
- University, course and student-visa guidance
- Scroll-based content animations with reduced-motion support
- Secure server-side Google Sheets enquiry delivery
- Responsive design built with Next.js and Tailwind CSS

## Technology

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Run locally

1. Install dependencies: npm install
2. Add the required environment variables to .env.local
3. Start the development server: npm run dev
4. Open http://localhost:3000

For Windows PowerShell installations that block npm scripts, use npm.cmd run dev.

## Production

Create an optimized build with npm run build, then run it with npm start.

## Enquiry form setup

The contact form sends enquiries server-side to a Google Apps Script web app. Configure the following environment variables in .env.local for local use and in Vercel for production:

- GOOGLE_SHEETS_WEBHOOK_URL
- GOOGLE_SHEETS_WEBHOOK_SECRET

See google-apps-script/README.md for the complete Google Sheets and Apps Script setup.

## Deployment

Pushes to the main branch can deploy automatically through Vercel when this GitHub repository is connected to a Vercel project.

## Important

This website provides study-abroad guidance only. University admission and visa decisions are made by the relevant institutions and authorities.
