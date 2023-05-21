<script>
  import logo from "$lib/assets/canada-logo.svg";
  import { page } from "$app/stores";
</script>

<div>
  <img src={logo} alt="" />
  <h1>Something went wrong</h1>
  <p>Error: {$page.status}</p>
  <p>Return to the <a href="/en/home">home</a> page</p>
  <h1>Quelque chose s'est mal passé</h1>
  <p>Erreur: {$page.status}</p>
  <p>Retournez à la page <a href="/fr/home">d'accueil</a></p>
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
