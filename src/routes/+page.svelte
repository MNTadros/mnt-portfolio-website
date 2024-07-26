<script>
    import { goto } from '$app/navigation';
</script>

<div class="flex justify-center items-center pt-4">
    <main class="p-8 text-center box-content w-3/4 md:w-1/2 bg-white shadow-lg rounded-lg">
        <h1 class="text-4xl font-bold mb-6">MNTadros</h1>
        <p class="text-lg mb-8">
            Hello! I'm excited to share my journey and work with you. Explore more about who I am, check out my projects, view my resume, and get answers to common questions.
        </p>
        <nav class="space-y-8 text-left">
            <div>
                <p class="text-md mt-1">
                    Learn about my background, interests, and the journey that has shaped me on the 
                    <button class="text-orange-500 hover:underline" on:click={() => goto('/who')}>Who Am I?</button> page. Discover my passions, experiences, and what drives me in both my personal and professional life.
                </p>
            </div>
            <div>
                <p class="text-md mt-1">
                    This section showcases a variety of my work, from personal endeavors to professional assignments. Check out my 
                    <button class="text-orange-500 hover:underline" on:click={() => goto('/projects')}>Projects</button> to see highlights of my skills, creativity, and dedication to continuous learning and improvement.
                </p>
            </div>
            <div>
                <p class="text-md mt-1">
                    Explore my professional qualifications, including my educational background, work experience, and key skills, on my 
                    <button class="text-orange-500 hover:underline" on:click={() => goto('/resume')}>Resume</button> page. This section provides a comprehensive view of my career journey and the expertise I bring to the table.
                </p>
            </div>
            <div>
                <p class="text-md mt-1">
                    The 
                    <button class="text-orange-500 hover:underline" on:click={() => goto('/faq')}>FAQ</button> section addresses common questions and provides detailed answers to help you better understand my work and approach. If you have any additional inquiries, this is the place to find the information you're looking for.
                </p>
            </div>
        </nav>
    </main>
</div>
