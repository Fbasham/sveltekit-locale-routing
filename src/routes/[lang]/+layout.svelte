<script>
  import logo from "$lib/assets/canada-logo.svg";
  import { base } from "$app/paths";
  export let data;
</script>

<header>
  <div class="img-container">
    <img src={logo} alt="" />
  </div>
  <div>
    {#if data.locale === "en"}
      <a data-sveltekit-reload href="{base}/fr{data.path}">French</a>
    {:else}
      <a data-sveltekit-reload href="{base}/en{data.path}">English</a>
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
    min-width: 30%;
  }
  .content {
    margin: 3rem;
  }
  @media (max-width: 500px) {
    .img-container {
      width: 60%;
    }
  }
</style>
