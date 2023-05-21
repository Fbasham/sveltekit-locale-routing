<script>
  import { page } from "$app/stores";
</script>

<h1>{$page.error.message}</h1>
<p>Error {$page.status}</p>
<p>It appears the page you're looking for doesn't exist</p>
<p>Return to the <a href="/en/home">home</a> page</p>
