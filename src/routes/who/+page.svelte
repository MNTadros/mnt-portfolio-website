<script>
    let gallery = [
      {
        img: "src/lib/imgs/gallery/two.jpg",
        alt: "Me!",
        onHover: "First day of competition!"
      },
      {
        img: "src/lib/imgs/gallery/three.jpg",
        alt: "Terry(the robot)!",
        onHover: "This is Team 6141's pride and joy, Terry!"
      },
      {
        img: "src/lib/imgs/gallery/four.jpg",
        alt: "A picture of Montreal",
        onHover: "Montreal 2023!"
      },
      {
        img: "src/lib/imgs/gallery/five.jpg",
        alt: "Honor Roll paper",
        onHover: "Making Honor Roll this year!"
      },
      {
        img: "src/lib/imgs/gallery/six.jpg",
        alt: ":headinhands:",
        onHover: "Losing our last competition :("
      },
      {
        img: "src/lib/imgs/gallery/seven.jpg",
        alt: "6141",
        onHover: "Team 6141"
      },
      {
        img: "src/lib/imgs/gallery/eight.jpg",
        alt: "A glowing TORONTO sign",
        onHover: "Skating at Nathan Philips Square"
      },
      {
        img: "src/lib/imgs/gallery/nine.jpg",
        alt: "4 goofy boys",
        onHover: "My Friends!"
      }
    ];
  </script>
  
  <div class="container mx-auto px-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
              <div class="relative overflow-hidden">
                  <img class="max-w-full h-full w-full rounded-lg" src="{gallery[0].img}" alt="{gallery[0].alt}">
                  <div class="absolute inset-0 bg-black bg-opacity-50 text-white text-center flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span>{gallery[0].onHover}</span>
                  </div>
              </div>
              <div class="relative overflow-hidden">
                  <img class="max-w-full h-full rounded-lg" src="{gallery[1].img}" alt="{gallery[1].alt}">
                  <div class="absolute inset-0 bg-black bg-opacity-50 text-white text-center flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span>{gallery[1].onHover}</span>
                  </div>
              </div>
          </div>
  
          <div class="grid gap-4">
              <div class="relative overflow-hidden">
                  <img class="max-w-full h-full rounded-lg" src="{gallery[2].img}" alt="{gallery[2].alt}">
                  <div class="absolute inset-0 bg-black bg-opacity-50 text-white text-center flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span>{gallery[2].onHover}</span>
                  </div>
              </div>
              <div class="relative overflow-hidden">
                  <img class="max-w-full h-full rounded-lg" src="{gallery[3].img}" alt="{gallery[3].alt}">
                  <div class="absolute inset-0 bg-black bg-opacity-50 text-white text-center flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span>{gallery[3].onHover}</span>
                  </div>
              </div>
          </div>
  
          <div class="grid gap-4">
              <div class="relative overflow-hidden">
                  <img class="max-w-full h-full rounded-lg" src="{gallery[4].img}" alt="{gallery[4].alt}">
                  <div class="absolute inset-0 bg-black bg-opacity-50 text-white text-center flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span>{gallery[4].onHover}</span>
                  </div>
              </div>
              <div class="relative overflow-hidden">
                  <img class="max-w-full h-full rounded-lg" src="{gallery[5].img}" alt="{gallery[5].alt}">
                  <div class="absolute inset-0 bg-black bg-opacity-50 text-white text-center flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span>{gallery[5].onHover}</span>
                  </div>
              </div>
          </div>
  
          <div class="grid gap-4">
              <div class="relative overflow-hidden">
                  <img class="h-auto max-w-full rounded-lg" src="{gallery[6].img}" alt="{gallery[6].alt}">
                  <div class="absolute inset-0 bg-black bg-opacity-50 text-white text-center flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span>{gallery[6].onHover}</span>
                  </div>
              </div>
              <div class="relative overflow-hidden">
                  <img class="h-auto max-w-full rounded-lg" src="{gallery[7].img}" alt="{gallery[7].alt}">
                  <div class="absolute inset-0 bg-black bg-opacity-50 text-white text-center flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span>{gallery[7].onHover}</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
  