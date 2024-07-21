<script>
    let faqs = [
  {
    category: "Interests",
    question: "What are your main interests?",
    answer: "I’m interested in technology, reading, and traveling."
  },
  {
    category: "Family",
    question: "Do you have siblings?",
    answer: "Yes, I have one older brother and one older sister."
  }
];

function groupByCategory(faqs) {
      return faqs.reduce((acc, faq) => {
        if (!acc[faq.category]) {
          acc[faq.category] = [];
        }
        acc[faq.category].push(faq);
        return acc;
      }, {});
    }

    let groupedFaqs = groupByCategory(faqs);

    function handleMouseEnter(event) {
      event.currentTarget.classList.remove('animate-move');
    }

    function handleMouseLeave(event) {
      event.currentTarget.classList.add('animate-move');
    }
</script>
<main class="p-6 sm:max-w-2xl md:max-w-6xl mx-auto">
    <section>
      {#each Object.entries(groupedFaqs) as [category, faqs]}
        <div class="pb-20 mb-20">
          <div class="flex justify-center mb-4">
            <h2 class="text-xl sm:text-2xl font-mono italic font-bold text-[105%] leading-[100%] bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-amber-500">
              {category}
            </h2>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3" class:justify-center={faqs.length === 1}>
            {#each faqs as faq}
              <div role="button" tabindex="0"
                class="relative bg-gradient-to-r from-orange-400 via-yellow-500 to-amber-500 shadow-lg rounded-full p-6 flex flex-col items-center text-center animate-move transition-transform duration-500 ease-in-out transform hover:scale-105"
                on:mouseenter={handleMouseEnter}
                on:mouseleave={handleMouseLeave}
              >
                <h3 class="text-xl font-semibold mb-2 text-white">{faq.question}</h3>
                <p class="text-white">{faq.answer}</p>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </section>
  </main>
