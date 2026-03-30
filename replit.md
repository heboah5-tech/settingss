# مقارنة التأمين — Insurance Comparison

A Next.js 15 Arabic (RTL) landing page for car insurance comparison.

## Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3 + Tajawal Google Font
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Language**: TypeScript

## Running
```bash
pnpm dev       # Development on port 5000
pnpm build     # Production build
pnpm start     # Production server on port 5000
```

## Pages
| Route | Description |
|-------|-------------|
| `/` | Home — insurance links, policy cards, contact |
| `/privacy` | Privacy policy |
| `/cookies` | Cookie policy |
| `/terms` | Terms and conditions |
| `/security` | Security rules and certifications |

## Key Notes
- All pages are RTL Arabic
- Port 5000 required for Replit webview
- No database or authentication — static content only
- Google Ads (gtag AW-11024225673) loaded via next/script
