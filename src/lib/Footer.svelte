<script lang="ts">
    const icon_size = 24;
    import Icon from '@iconify/svelte';
    const githubValue = "MNTadros";
    const linkedinValue = "x";
</script>

<div class="mt-20 mb-8">
    <div class="flex flex-col gap-6 items-center justify-center">
        <div class="flex gap-6 text-black dark:text-white">
            <a href="https://github.com/{githubValue}" target="_blank">
                <Icon icon="mdi:github" width={icon_size} height={icon_size} class="transition-all hover:brightness-[.80]" />
            </a>
            <a href="https://linkedin.com/{linkedinValue}" target="_blank">
                <Icon icon="devicon:linkedin" width={icon_size} height={icon_size} class="transition-all hover:brightness-[.80]" />
            </a>
        </div>
    </div> 
</div>