import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const html = await Deno.readTextFile(new URL("./index.html", import.meta.url));

serve((_req) => {
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
});
