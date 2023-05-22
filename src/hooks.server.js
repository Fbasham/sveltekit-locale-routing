import { error } from "@sveltejs/kit";

export const handle = async ({ event, resolve }) => {
  if (event.url.pathname === "/") resolve(event);
  let locale = event.url.pathname.split`/`[
    process.env.NODE_ENV === "development" ? 1 : 2
  ];
  let response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(/<html.*>/, `<html lang="${locale}">`),
  });

  if (!response.ok) throw error(404, "not found");
  return response;
};
