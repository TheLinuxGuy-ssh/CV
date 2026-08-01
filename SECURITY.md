# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Do not open a public issue.** Instead, contact the maintainer directly at the email address listed on the GitHub profile.

Please include:

- A detailed description of the vulnerability
- Steps to reproduce the issue
- The affected version(s)
- Any potential mitigations you have identified

You can expect a response within 48 hours. Once the vulnerability is confirmed, we will work on a fix and coordinate a release.

## Supported Versions

| Version | Supported |
|---|---|
| Latest (main branch) | ✅ |
| Older versions | ❌ |

## Security Best Practices

This project follows Next.js security best practices. Security headers are configured in `next.config.js`:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Production source maps are disabled
- The `x-powered-by` header is removed

If you believe any security headers are missing or misconfigured, please report it via the process above.
