import { loadTranslations } from "$lib/translations";

export const load = async ({ url }) => {
  let { pathname } = url;
  let locale = pathname.split`/`[1];
  let path = pathname.replace(/^\/(en|fr)/, "");

  await loadTranslations(locale, path);

  return { locale, path };
};
