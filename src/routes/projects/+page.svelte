<script>
    // Sample data for projects
    let projects = [
      {
        name: "Portfolio Website",
        description: "This website you are viewing right now!",
        tech: ["JavaScript", "Svelte","HTML","Tailwind"],
        tag: "JavaScript",
        repo: "https://github.com/MNTadros/mnt-portfolio-website",
        demo: "/",
        icon: "src/lib/imgs/MNT_Icon.png"
    },
    {
        name: "Botics",
        description: "A Minecraft Mod focused on Robotics!",
        tech: ["Java", "Gradle"],
        tag: "Java",
        repo: "https://github.com/MNTadros/Botics",
        demo: "/",
        icon: "src/lib/imgs/Botics_Icon.png"
    },
    {
        name: "ItemExchanger",
        description: "A Minecraft plugin made to exchange items within a server.",
        tech: ["Java", "Maven"],
        tag: "Java",
        repo: "https://github.com/MNTadros/ItemExchanger",
        demo: "/",
        icon: "src/lib/imgs/ItemExchanger_Icon.png"
    }
  ];
  </script>

  <main class="p-6">
    <section>
      <div class="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {#each projects as project}
          <div class="relative bg-orange-100 shadow-md rounded-lg p-4 flex items-center">
            <div class="flex-1">
              <h3 class="text-xl font-semibold mb-2 text-orange-600">
                {project.name}
                <span class="text-sm font-medium text-white bg-orange-400 rounded-full px-2 py-1 ml-2">
                  {project.tag}
                </span>
              </h3>
              <p class="text-gray-700 mb-2">{project.description}</p>
              <p class="text-sm text-gray-500 mb-4">Technologies: {project.tech.join(', ')}</p>
              <div class="flex gap-4">
                {#if project.repo}
                  <a href="{project.repo}" class="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">View Repo</a>
                {/if}
                {#if project.demo}
                  <a href="{project.demo}" class="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
                {/if}
              </div>
            </div>
            <div class="absolute right-0 top-0 bottom-0 flex items-center justify-center w-1/5 rounded-lg">
              {#if project.icon}
                <img src="{project.icon}" alt="{project.name} icon" class="h-full object-cover w-48 border-orange-400 border-2" />
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </section>
  </main>
  
