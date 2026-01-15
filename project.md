Project: LinkedIn Recovery Professional (LRP)
1. Project Overview
Goal: A high-authority service site for "LinkedIn account restricted" keywords.

Primary Keyword: linkedin account restricted (Targeting 3.1k volume, $0.02 CPC).

Pricing Strategy: **"Entry-level Recovery" at $50.** This serves as a lead magnet. High-value accounts (10k+ followers) will be upsold manually to premium tiers ($500+).

Blog System: Minimalist, custom-coded Markdown-to-HTML system (No CMS/Database).

2. Technical Stack
Framework: Next.js 15 (App Router).

Content: Markdown (.md) files stored in /content/blog.

Markdown Parser: gray-matter (for metadata) and react-markdown or next-mdx-remote.

Styling: Tailwind CSS + Shadcn UI.

Payment: Stripe (Integration for the $50 base fee).

3. Site Architecture
A. Homepage (The "Panic" Funnel)
Hero Section: * Headline: "Restricted by LinkedIn? Get Professional Help for $50."

Subtext: "Don't lose your professional network to an automated bug. We offer manual recovery starts at just $50."

Diagnostic Form: * Fields: LinkedIn URL, Follower Count, Reason for Restriction.

Logic: If Follower Count > 5,000, trigger a "High Priority Account" flag in the backend.

Pricing Card: Single prominent card showing "$50 Recovery Starter - Includes full case audit and initial manual appeal."

B. The Minimal Blog (Custom Coded)
Storage: All posts live in root/posts/*.md.

Performance: Static Site Generation (SSG). Posts are converted to HTML at build time for instant loading.

SEO: Every post must include YAML frontmatter for:

YAML

title: "How to fix LinkedIn account restricted"
description: "Step by step guide..."
date: "2026-01-15"
keywords: ["linkedin restricted", "account recovery"]
4. Implementation Details for AI Agents
Step 1: File-Based Blog Logic
Create a utility lib/blog.ts to:

Read the /posts directory.

Parse YAML with gray-matter.

Sort by date.

Generate dynamic routes in app/blog/[slug]/page.tsx.

Step 2: High-Converting UI Components
Sticky Header: "LinkedIn Account Restricted? [Start Recovery Now]"

The "Vietnam" Bridge: Form submissions should trigger an email to you with the client's details so you can immediately pass them to your specialist.

Step 3: Legal & Trust
Disclaimer: Clear "Not affiliated with LinkedIn Corp" in footer.

Privacy: Emphasize that we do not store passwords (we use session cookies or guided appeals).

5. Next Step for You
Once you have added this to your project_plan.md, ask Cursor to:

"Create the directory structure for a Next.js 15 app and write the lib/blog.ts utility to read Markdown files from a posts folder using gray-matter."