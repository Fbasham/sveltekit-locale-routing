<script>
  import logo from "$lib/assets/canada-logo.svg";
  import { base } from "$app/paths";
</script>

<div>
  <img src={logo} alt="" />
  <h1>Something went wrong</h1>
  <p>Return to the <a href="{base}/en/home">home</a> page</p>
  <h1>Quelque chose s'est mal passé</h1>
  <p>Retournez à la page <a href="{base}/fr/home">d'accueil</a></p>
</div>

<style>
  div {
    width: 80%;
    margin: 3rem;
    line-height: 2rem;
  }
  img {
    width: 50%;
  }
  h1 {
    margin: 3rem 0 2rem 0;
  }
</style>
