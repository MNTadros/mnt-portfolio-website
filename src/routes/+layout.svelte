<script>
  import "../app.css";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>
<Header />

<main class="container mx-auto pt-8">
  <slot></slot>
</main>
<Footer></Footer>