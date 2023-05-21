export const prerender = true;

import { loadTranslations } from "$lib/translations";

export const load = async ({ url }) => {
  let { pathname } = url;
  console.log(pathname);
  let locale = pathname.split`/`[2];
  let path = "/" + pathname.split`/`.slice(3).join`/`;

  await loadTranslations(locale, path);

  return { locale, path };
};
