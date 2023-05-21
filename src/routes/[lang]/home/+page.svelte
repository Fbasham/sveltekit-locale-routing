<script>
  import { t, locale } from "$lib/translations";
  import { base } from "$app/paths";
</script>

<h1>{$t("home.title")}</h1>
<ul>
  <li><a href="{base}/{$locale}/about">{$t("home.about")}</a></li>
</ul>

<style>
  h1 {
    margin-bottom: 2rem;
  }
  ul {
    list-style-position: inside;
  }
</style>
