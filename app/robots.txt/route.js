export function GET() {
  const robots = `
User-agent: *
Allow: /

Sitemap: https://contratosexpresso.com.br/sitemap.xml
  `.trim()

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
