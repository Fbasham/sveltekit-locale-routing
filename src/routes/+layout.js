export const prerender = true;

import { loadTranslations } from "$lib/translations";

export const load = async ({ url }) => {
  let { pathname } = url;
  let locale = pathname.split`/`[1];
  let path = "/" + pathname.split`/`.slice(2).join`/`;

  await loadTranslations(locale, path);

  return { locale, path };
};
