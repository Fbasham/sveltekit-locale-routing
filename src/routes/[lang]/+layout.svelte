<script>
  import logo from "$lib/assets/canada-logo.svg";
  export let data;
</script>

<header>
  <div class="img-container">
    <img src={logo} alt="" />
  </div>
  <div>
    {#if data.locale === "en"}
      <a data-sveltekit-reload href={`/fr${data.path}`}>French</a>
    {:else}
      <a data-sveltekit-reload href={`/en${data.path}`}>English</a>
    {/if}
  </div>
</header>

<slot />

<style>
  header {
    display: flex;
    justify-content: space-between;
  }
  .img-container {
    width: 25%;
  }
</style>
