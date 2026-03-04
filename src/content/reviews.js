// src/content/reviews.js
// Single source of truth for Reviews page content.
// Add new reviews here and they automatically render on /reviews.

function normalizeKey(str = "") {
  return String(str)
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/g, "")
    .trim();
}

export const REVIEW_SOURCES = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/elilanddesign/",
    detail: "Updates, photos, and client feedback",
  },
  {
    name: "Houzz",
    href:
      "https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/e-l-i-land-design-llc-pfvwus-pf~378023936",
    detail: "Design profile and reviews",
  },
  {
    name: "Growcycle",
    href: "https://growcycle.com/services/pro/e-l-i-land-design-llc",
    detail: "Business listing and overview",
  },
];

// Raw reviews list (edit/add here)
export const REVIEWS_RAW = [
  {
    quote:
      "I am pleased to recommend Chris Eiseman and E.L.I. land design. Chris and his company completed a thorough and creative design of our entire 2.8 acre lot including tennis and basketball courts, a bridge, and complex drainage system. Their execution of the design and installation was excellent as was their follow-up over the last two years. We are extremely happy with the completed project. Chris and his team are consummate professionals with a customer-first “can do” attitude. You cannot go wrong with E.L.I. land design.",
    name: "Mickey Barrett",
    meta: "E.L.I Client",
  },
  {
    quote:
      "The E.L.I. team consistently provides my clients with the highest standard in residential landscape architecture. Chris works with each client to create an outdoor living space that is tailored to their individual lifestyle. Combined with the quality of craftsmanship, I have peace of mind that my clients receive the best value.",
    name: "Brian Foster",
    meta: "Sugar Creek Homes",
  },
  {
    quote:
      "E.L.I. has been the perfect fit for our landscaping needs. When we decided to remodel our home and update our landscaping Chris worked closely with us to develop an innovative design that works great with our lifestyle. Upon completion of the project, our yard was breath taking and our home was brought to life. E.L.I. was there in the beginning with design work and the follow up to make sure that everything they planted survived. Their customer service and personalization on our project was top notch. We continue to work with E.L.I. and have not been disappointed.",
    name: "Jean Smith",
    meta: "Lake Conroe",
  },
  {
    quote:
      "My husband and I interviewed a number of landscapers to help us complete our pool landscape. When we met Chris Eiseman we could instantly feel the value in working with a Landscape Architect. We knew the looked we wanted for our pool landscape and some of the plant species that we wanted incorporated into our design. Chris listened to us and presented us with a clearly communicated plan and proposal. We hired E.L.I. land design to install all elements of our pool landscape which included the drain system, irrigation system, lighting system, and plant material. All the plants that were delivered to our project were beautiful! They even found a home for my heirloom daylilies. The E.L.I. team had great service after the install too. Any concerns were addressed timely and efficiently. We are very pleased with our pool landscape and enjoy it every day. We will continue to use and recommend E.L.I. land design.",
    name: "Pamela and Randall Ponder",
    meta: "The Woodlands",
  },
  {
    quote:
      "We have used Chris Eiseman and his company's services on two homes now. Our first home in Fairfield 10 years ago was in serious need of updated landscaping. Chris and his team designed and installed a turn key product including irrigation and landscaping. My wife was absolutely delighted, and I was impressed with the quality of the product and the creative ability of Chris. Fast forward 10 years to the present, in our second home in Fairfield, my wife and I knew who we needed to call for our dream yard. Chris listened to what my wife wanted, and made great suggestions during the design process. The execution of the project followed the plan that was in place and turned out fantastic. My wife and I now get to sit on our new patio in our front yard, surrounded by amazing landscaping that is fully irrigated and get to watch our children play. Chris and his team are the best at what they do and have put a huge smile on our faces yet again. I encourage everyone to go with the best at E.L.I. land design.",
    name: "Casey and Carrie Salge",
    meta: "Cypress",
  },
  {
    quote:
      "All the members of the crew that did our upgrade were friendly and professional from design through completion of the job.",
    name: "Dan Mosher",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "E.L.I. designed our swimming pool and backyard environment. Chris, Matt, and James (and crews) did an awesome job. We are thrilled with the design, work process, and final outcome. They created a great vision, and transformed our backyard into a truly beautiful and functional retreat. Highly recommend!!",
    name: "Ron Proctor",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "Excellent experience. We hired Chris to renovate our front entry, landscaping and drainage. We wanted a clean, modern and updated design with a water feature. Chris had great ideas and the final result was amazing! Very professional and timely project despite it occurring during Harvey. I would definitely recommend and use them again.",
    name: "Alejandra Palmeros-Irvine",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "We have used Chris and his team at ELI for almost 5 years and they have done an awesome job! Very attentive to the client's requests and do a fabulous job!!",
    name: "Chuck Jordan",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "Amazing. Professional design. Chris's design and plant selection is a perfect match for our home and elevation. Our home has been transformed. Everyone we worked with on the job was courteous, professional and extremely hard working.",
    name: "Tom Newsom",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "I cannot say enough good things about this company! The level of service and professionalism was outstanding. The lights completely changed the look of my house, and couldn’t be happier with the results!",
    name: "Jessica Vanosdell",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "Did landscaping lighting ground work. The management and professional work done was outstanding. Workers were very nice and willing to help.",
    name: "Greg Back",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "E.L.I Land Design did a fantastic job with my backyard. Chris and his team were professional, timely, and easy to work with! My wife and I love the design they came up with and feel like we finally have a space our family can enjoy. Thanks guys!",
    name: "Morris Briand",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "We had several issues with our landscaping and drainage. Chris came out and took the time to understand our problem and he explained the solutions in detail. The work started on time and his crew is very professional. They cleaned up the site every day before they left and answered all of our questions along the way. I am very pleased with the results and I strongly recommend Chris and his team at E.L.I. land design.",
    name: "David Vickers",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "We have struggled with several different Landscape Companies over the past few years and were never happy with their work. Chris with E.L.I. is the first company that did what they said they would do when they said they would do it. They were very professional and their work was high quality - they never cut corners. It was really good to work with a company whose employees spoke English. We are very happy with our new landscape and lighting package.",
    name: "Elmo Robinson",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "Chris and crew did an outstanding job on my landscaping. The attention to detail and knowing what needed to be planted and where it needed to be planted was amazing. Chris and his crew were very polite, respectful and thorough. They answered all my questions promptly and there was never any concerns that this project was going to be beautiful. We are very pleased and would highly recommend this landscaping company.",
    name: "ICFargo",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "We loved everything about our experience with ELI. They showed up when they said they would be here. They communicated with us every few days to update us on progress and set expectations about next steps. Most importantly, they finished the work inside of our timeline and on budget. Everyone that works for ELI, from Chris (the owner) to the construction crew, was courteous, clean and extremely professional. The work they completed is absolutely beautiful. It exceeds our expectations in every way! Thank you, ELI.",
    name: "Susan Severa",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "Chris and his crew did a great job bringing the yard back to its original condition ... he also installed state of the art LED lighting and wifi enabled irrigation control which should really help manage water consumption while improving overall moisture management for the planting. His work crew was on time everyday and very careful to do a neat job, minding the pool and other areas in the yard. Highly recommended!",
    name: "Tony Bazzini",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "This company performed a wonderful service from start to finish. The constant communication provided was a very welcome experience. Something that is hard to find now days. The staff were very professional and knowledgable. Everyone arrived on time and cleaned the work area up at the end of the day completely. Our landscaping turned out to be beautiful and we now have the yard we always wanted to have. Thank you E.L.I. for our dream yard!",
    name: "Nannel Wray",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "We worked with ELI for a total front yard landscape renovation and new lighting installation. Chris was very detailed with his planning of our project and the execution by his team was professional and consistent. He was quick to respond with questions and the work turned out beautifully. His follow-up regarding our project has been very quick and detailed as well. Other yards in our neighborhood used to be my \"favorite\". Now my favorite yard is ours!",
    name: "Darcy K",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "My husband and I have been working with Chris and the ELI team on multiple projects over the past few years. Not only is he always done when he says (which is so hard to come by in any residential contractor), he has great vision, the crew is always so nice and our projects always look better than expected! We will never use another company for any of our landscaping needs!",
    name: "Taryn123",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "ELI provided us with a landscaping design for a new construction home situated on one acre. We loved the initial plan and Chris' willingness to alter it to better reflect our taste and budget. Installation was professional and completed as scheduled. Most importantly, we appreciate the plant guarantee and ongoing support to ensure our new landscape develops to its full potential.",
    name: "Maria S",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "E.L.I. Land Design designed and installed the most amazing landscaping for our Spanish Revival home in Bentwater on Lake Conroe. From start-up of the project to the finish, we were extremely pleased with their high level of customer service, personal attention to details, knowledge of plants and subsequent designs along with quality workmanship. They are very flexible to meet the customer’s needs and make the applicable recommendations to ensure the plants are in the right locations and climate. Once the project is complete, they continue to stay in touch, answer questions and come by regularly to check on the landscaping and irrigation system. Since June we have had one rain shower, and surprisingly our plants are thriving. Working with Chris and his team was the best experience in our entire new home project. I would highly recommend utilizing E.L.I. Land Design.",
    name: "Jane Traper",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "We called on ELI to create a unique, attractive and marketable plan for a very high end community in Houston. The complexity of the project was about as high as you could make it due to the need to build a large retaining wall while protecting existing natural landscaping and a lake. We are delighted with the results of the project. ELI meet all of our needs and continues to be a expert consultant on all things landscaping for our project. ELI was responsible for the design and direction of our pool, courtyard, street scape, colors, lighting, hard surfaces and furnishings. We have already invited them to work on our next project. The ELI team is talented, timely, responsive and classy.",
    name: "Kate Good",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "Chris and his ELI team provided a comprhensive analysis of the drainage issues with respect to my property. Chris was very professional and knowledgable about the sheet flow and how the contractor had graded the property in the context of the Woodlands plan. He outlined a plan to address the issue, which included re-grading the property and replacing parts of the yard. It's clear Chris is very experienced with respect to assessing a property's water flow and providing solutions to acccommodate proper flow. Ultimately, Chris and his team put in new tile, re-graded the yard, and updated the landscaping. With respect to the landscaping, I find Chris to be knowledgable about the area and type of landscaping that works best for the climate. After the work was complete, Chris and his team did several follow up calls with respect to my spinkler system and subsequent plantings. I found him to be very responsive and timely. Overall they did a terrific job and I would recommend him for additional work.",
    name: "Chris Gilbert",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "Chris and crew did an outstanding job on the landscaping of our new home in the fall of 2013. It was October/November when they put it in and almost every plant made it through the winter. What did not, he promptly replaced without hesitation. Our back yard needed an extensive drainage system to work with our infinity pool and I can proudly say that the water has not once flowed into the pool from the yard! I would recommend E.L.I. highly to all for all types of landscaping needs.",
    name: "Steve",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "I have lived in my home for 12 years and have hired many different landscape companies. ELI is the first company that has far exceeded my expectations! I have used them for 3 years now and I am so happy with the owners knowledge, experience and excellent customer service! My yard is truely a beautiful work of art!",
    name: "Cynwark",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "The landscaping professionals at ELI designed a plan that fit the architectural style of my home perfectly! They considered all aspects of design and drainage so that my lawn looks amazing year round with little maintenance.",
    name: "Melony Bergeron",
    meta: "E.L.I. Client",
  },
  {
    quote:
      "Chris and ELI Land Design have designed, completed and consulted with my company on numerous projects over the years. Not only does Chris do an excellent job on the design of projects, but manages and completes with the projects with professionalism and class. ELI Land design has finished every project in which I have worked with them on, within the stated timeline and budget. I would recommend ELI Land Design to anyone and look forward to working with them again in the future.",
    name: "Gardner Custom Homes",
    meta: "E.L.I. Client",
  },
];

// Derived + deduped list used by UI
export function getReviews() {
  const seen = new Set();
  const deduped = [];

  for (const r of REVIEWS_RAW) {
    const key = [
      normalizeKey(r.name),
      normalizeKey(r.meta),
      normalizeKey(String(r.quote).slice(0, 140)),
    ].join("|");

    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(r);
  }

  return deduped;
}