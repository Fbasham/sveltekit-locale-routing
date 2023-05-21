<script>
  import logo from "$lib/assets/canada-logo.svg";
</script>

<div class="wrapper">
  <img src={logo} alt="government of canada" />
  <div class="links">
    <a href="/en/home">English</a>
    <a href="/fr/home">French</a>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    border: 1px solid;
    padding: 1rem;
  }
  .links {
    margin-top: 2rem;
    display: flex;
    gap: 10px;
  }
  a {
    background-color: rgb(0, 0, 63);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
  }
  a:hover {
    background-color: darkblue;
  }
  a:focus-visible {
    background-color: darkblue;
  }
</style>
