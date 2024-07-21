<script>
    // Sample data for projects
    let projects = [
      {
        name: "Project One",
        description: "A brief description of Project One.",
        tech: ["JavaScript", "Svelte"],
        repo: "/",
        demo: "/"
      }
    ];
  </script>

  <main class="p-6">
    <section>
      <h2 class="text-2xl font-semibold mb-4">Projects</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each projects as project}
          <div class="bg-white shadow-md rounded-lg p-4">
            <h3 class="text-xl font-semibold mb-2">{project.name}</h3>
            <p class="text-gray-700 mb-2">{project.description}</p>
            <p class="text-sm text-gray-500 mb-4">Technologies: {project.tech.join(', ')}</p>
            <div class="flex gap-4">
              {#if project.repo}
                <a href="{project.repo}" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View Repo</a>
              {/if}
              {#if project.demo}
                <a href="{project.demo}" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </section>
  </main>
  
  