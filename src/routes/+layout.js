export const prerender = true;

import { loadTranslations } from "$lib/translations";
import { base } from "$app/paths";

export const load = async ({ url }) => {
  let { pathname } = url;
  let locale = pathname.split`/`[base === "" ? 1 : 2];
  let path = "/" + pathname.split`/`.slice(base === "" ? 2 : 3).join`/`;

  await loadTranslations(locale, path);

  return { locale, path };
};
