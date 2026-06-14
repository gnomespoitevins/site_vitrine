export const dynamic = "force-static";

export function GET() {
  return new Response("google-site-verification: google45ffa2c602e8e3df.html", {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
