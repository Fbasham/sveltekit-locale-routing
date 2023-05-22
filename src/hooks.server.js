export const handle = async ({ event, resolve }) => {
  if (event.url.pathname === "/") resolve(event);
  let locale = event.url.pathname.split`/`[1];

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(/<html.*>/, `<html lang="${locale}">`),
  });
};
