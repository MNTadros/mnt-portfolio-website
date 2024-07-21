<script>
    import { page } from '$app/stores';
    
    const links = [
        { name: "who", href: "/who" },
        { name: "projects", href: "/projects" },
        { name: "resume", href: "/resume" },
        { name: "faq", href: "/faq" }
    ];

    let page_title = null;
    $: {
        const link = links.find(({ href }) => href.slice(1) === $page.url.pathname.split("/")[1]);
        if (link) {
            page_title = link.name.charAt(0).toUpperCase() + link.name.slice(1);
        } else {
            page_title = null;
        }
    }
</script>

<header class="sticky top-0 z-50 bg-background backdrop-blur-2xl" data-sveltekit-noscroll>
    <div class="layout-md py-1 flex justify-between items-center border-b border-neutral-300 dark:border-neutral-700 ">
        <bi class="pl-4 my-2 text-xl sm:text-2xl font-mono italic font-bold text-[105%] leading-[100%] text-black dark:text-white">
            <!-- <span class ="flex justify-normal space-x-4"> -->
            <!-- <img src="src/imgs/favicon.png" alt="logo pic" width="28" height="18"> -->
            <a href="/">Mina Tadros</a>
            <!-- </span> -->
            {#if page_title}
                <span class="font-normal text-neutral-800 dark:text-neutral-200">
                    <span class="text-neutral-500 hidden sm:inline">—</span>
                    <p class="sm:inline">
                        {page_title}
                    </p>
                </span>
            {/if}
        </bi>
        <nav class="mr-8 flex items-start text-neutral-500 justify-end space-x-4 sm:space-x-6 text-lg py-0.5">
            {#each links as link (link)}
                <a
                    href={link.href}
                    class="hover:dark:text-neutral-100 hover:text-neutral-900 transition-colors rounded bg-orange-300 px-2"
                    class:dark:text-white={$page.url.pathname.split("/")[1] === link.href.slice(1)}
                    class:text-black={$page.url.pathname.split("/")[1] === link.href.slice(1)}
                >
                    {link.name}
                </a>
            {/each}
        </nav>

    </div>
</header>
