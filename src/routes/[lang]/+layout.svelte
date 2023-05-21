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

<div class="content">
  <slot />
</div>

<style>
  header {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid lightgray;
  }
  .img-container {
    width: 30%;
  }
  .content {
    margin: 3rem;
  }
</style>
