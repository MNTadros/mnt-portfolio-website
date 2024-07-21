<script>
  import "../app.css";
</script>

<nav class="bg-gray-800 p-4 text-white flex justify-between">
  <div class="flex space-x-4">
    <a href="/" class="hover:text-gray-300">Home</a>
    <a href="/contact" class="hover:text-gray-300">Contact</a>
    <a href="/projects" class="hover:text-gray-300">Projects</a>
  </div>
</nav>

<main class="container mx-auto p-4">
  <slot></slot>
</main>
