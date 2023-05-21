<script>
  import logo from "$lib/assets/canada-logo.svg";
  import smallLogo from "$lib/assets/small-logo.svg";
</script>

<div class="background">
  <div class="wrapper">
    <div class="top">
      <div class="responsive">
        <img src={logo} alt="government of canada" />
      </div>
      <div class="links">
        <a class="lang-link" href="/en/home">English</a>
        <a class="lang-link" href="/fr/home">French</a>
      </div>
    </div>
    <div class="toc">
      <a class="toca" href="https://www.canada.ca/en/transparency/terms.html"
        >Terms &amp; conditions</a
      >
      <img
        src={smallLogo}
        alt="Symbol of the Government of Canada"
        class="small"
      />
    </div>
  </div>
</div>

<style>
  .background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-image: url("$lib/assets/pexels-rachel-2186964.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 250px;
    border: 1px solid;
    background-color: white;
    border-radius: 5px;
  }
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 1rem;
    flex: 1;
    width: 100%;
  }
  .links {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
  }
  .lang-link {
    background-color: rgb(0, 0, 63);
    color: white;
    font-size: 0.9rem;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
  }
  .lang-link:hover {
    background-color: darkblue;
  }
  .lang-link:focus-visible {
    background-color: darkblue;
  }
  .toc {
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(200, 200, 200);
    width: 100%;
    height: 40%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .toca:visited {
    color: initial;
  }
  .small {
    width: 50%;
  }
  .responsive {
    width: 100%;
    height: auto;
  }
</style>
