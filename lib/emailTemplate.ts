interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function contactFormEmail({ name, email, message }: ContactFormData) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const subject = `New message from ${name}`;

  const text = `New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="dark" />
    <meta name="supported-color-schemes" content="dark" />
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin:0; padding:0; background-color:#09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#09090b" style="background-color:#09090b; padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:#18181b; border-radius:12px; overflow:hidden; border:1px solid #27272a;">

            <!-- Header -->
            <tr>
              <td style="padding:28px 32px; border-bottom:2px solid #22d3ee;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align:middle; padding-right:10px;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6L12 13L21 6" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#22d3ee" stroke-width="2"/>
                      </svg>
                    </td>
                    <td style="vertical-align:middle;">
                      <p style="margin:0; color:#fafafa; font-size:16px; font-weight:600;">
                        New Contact Form Submission
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-bottom:20px;">
                      <p style="margin:0 0 6px 0; font-family: 'Courier New', monospace; font-size:11px; letter-spacing:0.05em; color:#22d3ee;">
                        // NAME
                      </p>
                      <p style="margin:0; font-size:15px; color:#fafafa;">
                        ${safeName}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom:20px; border-top:1px solid #27272a; padding-top:20px;">
                      <p style="margin:0 0 6px 0; font-family: 'Courier New', monospace; font-size:11px; letter-spacing:0.05em; color:#22d3ee;">
                        // EMAIL
                      </p>
                      <p style="margin:0; font-size:15px;">
                        <a href="mailto:${safeEmail}" style="color:#67e8f9; text-decoration:none;">${safeEmail}</a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="border-top:1px solid #27272a; padding-top:20px;">
                      <p style="margin:0 0 8px 0; font-family: 'Courier New', monospace; font-size:11px; letter-spacing:0.05em; color:#22d3ee;">
                        // MESSAGE
                      </p>
                      <p style="margin:0; font-size:15px; color:#d4d4d8; line-height:1.6;">
                        ${safeMessage}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td style="padding:0 32px 32px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td bgcolor="#22d3ee" style="border-radius:9999px;">
                      <a href="mailto:${safeEmail}" style="display:inline-block; padding:10px 22px; font-size:14px; font-weight:600; color:#09090b; text-decoration:none; border-radius:9999px;">
                        Reply to ${safeName}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#111113; padding:16px 32px; border-top:1px solid #27272a;">
                <p style="margin:0; font-size:12px; color:#71717a;">
                  Sent from the contact form on cirilobucatcat.github.io
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

  return { subject, text, html };
}