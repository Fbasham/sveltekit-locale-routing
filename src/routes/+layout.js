export const prerender = true;

import { loadTranslations } from "$lib/translations";
import { base } from "$app/paths";
import { error } from "@sveltejs/kit";

export const load = async ({ url }) => {
  let { pathname } = url;
  let locale = pathname.split`/`[base === "" ? 1 : 2];
  let path = "/" + pathname.split`/`.slice(base === "" ? 2 : 3).join`/`;

  try {
    await loadTranslations(locale, path);
  } catch (e) {
    console.log(e.message);
    throw error(408, e.message);
  }

  return { locale, path };
};
