<script>
    let faqs = [
      {
    category: "Programming",
    question: "Favorite language?",
    answer: "I love Java but I have been currently leaning a bit more towards Kotlin."
  },
  {
    category: "Programming",
    question: "Favorite Project?",
    answer: "My favorite project is probably my most recent one which I am working on, its an educational app called PreEng!"
  },
  {
    category: "Programming",
    question: "What programming language are you most proficient in??",
    answer: "I have used Java for robotics, minecraft plugins & modding aswell for many small projects, so I would have to answer Java!"
  },
  {
    category: "Personal Life",
    question: "What are your interests?",
    answer: "I’m interested in technology, reading, and traveling."
  },
  {
    category: "Personal Life",
    question: "What motivates you?",
    answer: "Creating! Whenever I think of something interesting it motivates me to have the skills to build it."
  },
  {
    category: "Personal Life",
    question: "What are your long term goals?",
    answer: "I would love to work on the software part of drones or cars."
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
