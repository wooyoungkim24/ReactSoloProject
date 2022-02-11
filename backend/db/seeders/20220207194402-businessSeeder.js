'use strict';
const descriptions ={
  "The Dandelion": "Just steps from Philadelphia's bustling Rittenhouse Square, this inviting bilevel restaurant features a whirlwind of idiosyncratic seating areas, bars, hallways, rooms and nooks, each impeccably fashioned to carry its own personality. Whether you're relaxing with a rare cask ale by the brick fireplace, taking afternoon tea in the Victorian-style dining room or enjoying our famous burger in the ruff-and-tumble “Dog Room,” there's space for everyone. The menu, featuring beloved classics like Welsh rarebit, fish and chips, shepherd's pie and a U.K. cheese board, also features plenty of unexpected surprises. Made-from-scratch puddings and hearty family-style roasts served every Sunday round out one of Philly's most tantalizing dining destinations.",
  "Talula's Garden": "Driven by local ingredients prepared in unbreakable harmony with the season, Talula's Garden is a celebration of cooking the way it ought to be. A partnership with award-winning restaurateur Aimee Olexy, a true farm-to-table ethos inspires Talula's unforgettable approach to food, interpretations of traditional Mid-Atlantic cuisine with a light and modern touch. The indoor-outdoor space exudes a cozy, upbeat vibe, with attention to detail that extends from the gorgeous patio to the cheese bar, home to 'Maítre Fromager' Olexy's standout program. Lush plants and vegetation throughout remind guests that the land is the source of all things wholesome and delicious.",
  "Butcher Bar": "BUTCHER BAR - We invite you to our newest restaurant, “meat lovers and comfort foods” complimented with a bar featuring 16 beers on tap, 6 draft wines, and a whiskey-based cocktail program.",
  "Bao Nine": "Bao Nine is an Asian fushion restaurant inspired by the irresistible Taipei street-style Gua Bao: tender, delicious bao buns. The experience? A soft and dreamy pillow. The feeling? Cloud nine. So we went back to our roots—the city of brotherly love—and created flavor combinations that would reflect and inspire our Philly neighbors from all around the world. What to call this sense of happiness that takes you way beyond the usual? Bao nine, of course. Because we're not just any bun. And that's just how you like it.",
  'Wildberry Pancakes and Cafe': "Established in 2004, Wildberry Café continues to delight guests with scrumptious dishes and welcoming hospitality. We strive to make every visit a memorable dining experience. Our breakfast and lunch menus are inspired by a blend of traditional homemade recipes prepared to please your pallet. We use only fresh, seasonal ingredients that deliver the most delicious flavors and robust goodnes. Our commitment to exceed your expectations starts with our high quality and friendly, personalized service. We go out of our way to ensure every diner's needs are met. It would be our privilege to serve you and your guests. We appreciate your choice in dining with us and aspire to become your favorite way to start the day.At Wildberry Café, we promise to welcome you with smiles and fill your appetite with joy. After all, our home is your home!",
  "Au Cheval":"A diner-style bar and restaurant with a passion for eggs, Au Cheval elevates traditional diner fare. Guests can indulge in dishes ranging from chopped chicken liver and roasted bone marrow, to traditional sandwiches, egg-focused entrees, and the signature cheeseburger. The bar program showcases strong, classic cocktails including the Horse's Neck, Vieux Bonal, and Hemingway's Daiquiri. A robust draught beer list offers a wide range of neighborhood, domestic, and international selections. The dimly lit restaurant, pulsating with a vintage reel-to-reel soundtrack, features dark leather booths, dark wood paneling, and a zinc bar wrapped around the open kitchen.",
  "Lou Malnati's Pizzeria": "Malnati's success comes from our commitment to quality. Every Lou Malnati's pizza is handmade from scratch using the finest and freshest ingredients. Every year, the Malnati team hand selects California vine-ripened tomatoes for the perfect sweet and tangy taste. The exclusive sausage blend is seasoned to our exact specifications. The fresh mozzarella cheese comes from the same small dairy that has supplied Lou Malnati's for over 40 years. And our family's secret recipe for flaky, buttery crust has been passed down from generation to generation. You'll know with every bite that each pizza was made with care and special attention.",
  "Smoque BBQ": "Since opening in Chicago's Old Irving Park neighborhood in late 2006, Smoque has garnered a large and loyal following of BBQ devotees from all over Chicagoland and around the country. We have also attracted interest and praise from local and national media outlets, won many awards, and been consistently ranked among Chicago's best restaurants and the nation's best BBQ spots. Whether dining in or taking out at our original Northwest side location, our Loop location in the Revival Food Hall, or using our catering services, we invite you to stop by soon to see why.",
  "Thursday Kitchen": "Chef Proprietor Kyungmin Kay Hyun's love for a wide spread of cultures and cuisine makes it hard to place her cooking in a specific category. That is why her own concept of “New Korean” was born. With Chef Kay's South Korean background, French cuisine training, and an exceptional love for Spanish food, Thursday Kitchen offers a unique blend of international elements in ingredients and flavor in a tapas style fashion. You may be wondering, “Why Thursday?” Typically, the weekend seems to start on Fridays, making Thursday night plans uncertain. At Thursday Kitchen, we want to turn that uncertain feeling into a kind of excitement that only we can offer with our quality of food, service, and overall good vibe.",
  "Rubirosa": "Rubirosa is located in the heart of Nolita and its clientele bridges the gap between the old and new neighborhood regulars. Rubirosa's homey and comfortable atmosphere welcomes every occasion, from family-style group dining to drinks and antipasti at our cozy bar.",
  "Jane Restaurant": "Perfectly positioned on the border of Greenwich Village and SoHo, Jane exists at the intersection of elevated and easygoing. Warmly welcoming locals and visitors to our casual, American bistro for nearly 20 years, we've got your brunch, lunch and dinner plans covered.",
  "Kimura": "Kimura is a Japanese restaurant specializing in motsunabe(a traditional japanese hotpot), a rich broth made of beef or pork intestines. Alongside the exclusive Japanese hot pot, Kimura also includes sushi, lunch 9-column box, wide selected Japanese beer and sake and traditional Japanese snacks. Kimura is a place where you can enjoy Shabu Shabu (Japanese hot pot), Sukiyaki, Mizutaki Nabe and authentic Japanese food in Manhattan NYC. We are looking forward to you!",
  "Hangari Kalguksu": "Hangari Kalguksu is the destination for Korean comfort food. We specialize in kal-guk-su (hand cut noodle soup) and many other dishes including dumplings, bibimbap and our famous bossam. Our mission is to provide the highest quality food and service at a great value. It doesn't get any simpler than that. Tasty food, great service and value.",
  "Republique": "République, located in Mid-City, is owned by Chefs Walter and Margarita Manzke. Centered in the heart of Los Angeles, the historic building in which it resides was originally erected in 1929 by Charlie Chaplin, and later transformed into the iconic La Brea Bakery and Campanile Restaurant. République builds on this storied past, offering a gastronomic environment imbued with history and grandeur. The space features a casual bakery, café, and bar in the front with a more formal dining area located in the rear, serving a French-inspired menu created daily by our chefs.",
  "Eat This Cafe": "Established in 2012, Eat This Cafe has become a local favorite serving delectable brunches, artisanal sandwiches, specialty salads and daily bottomless mimosas.   We thrive in the hustle and bustle of Hollywood's Theatre Row, surrounded by studios, theaters, and sunshine, providing a relaxing respite from a busy day. We're all about adding a special touch to every dish, from our fresh baked bread delivered daily to our homemade potato chips. Whether you're stopping in for a work lunch or joining us for brunch while sightseeing, we look forward to welcoming you.",
  "Stout Burgers & Beers": "At Stout, we aspire to serve the new-style burger: beef cooked medium rare, organic ground chicken, or a quinoa-based veggie option, dressed with a variety of homemade toppings such as onions cooked down to the sweetness of maple syrup, specialty cheeses, smoky bacon, arugula, and roasted tomatoes. It will be worth dropping in just for a mid-afternoon burger, and a craft beer.",
  "Miami Grill": "For over 30 years we've been solving the great “what are we having?” debate. We make it easy with a menu as diverse as Miami itself—there's always something for everyone at your table. Let Miami do the cooking. You enjoy the meal.",
  'Bosscat Kitchen & Libations': "Each season, new flavors and recipes are brought into the kitchen. All cooks on staff are encouraged to brainstorm (and eat) with the chef. This collaborative process is the foundation of Bosscat's culinary art. Encouraging and fostering new ideas with seasonal produce, meats and spices  enable a super fun and fresh menu for our happy patrons.",
  "The Cookshack":"In the heart of Texas, The Cookshack celebrates heat, a tradition Texans know all too well. We like things spicy, so we turned up the heat on some of the best damn fried chicken and ribs in the country. You choose one of our 5 heat levels, from Not Hot to AMF, and we'll do the rest. We also offer incredible sides to complement our hand-battered chicken tenders, our hot-chicken sandwich, and hand-smoked ribs, from traditional fries to our very own, house-made Mac n Cheese. Make sure you try one of our salads, as well. The Shack salad and the Kale Chicken salad are exceptional. So, whether you're in the neighborhood or 100 miles away, come see us 7 days a week, lunch or dinner. We only use the highest quality ingredients, and we aim to give you the best service in town!",
  "Lucille's": "Lucille's is a tribute to a legacy of culinary excellence started almost a century ago. A locally-owned restaurant in the heart of Houston's Museum District, we specialize in well-refined Southern cuisine with infusions of international techniques and flavors. Co-founded in August 2012 by brothers Chris and Ben Williams, the restaurant is a tribute to the culinary tradition began by their great-grandmother, Lucille B. Smith, who was an educator, culinary innovator and successful entrepreneur who founded her own food corporation. Today, Executive Chef Chris Williams and Chef de Cuisine Khang Hoang continue to pay homage to her by replicating some of her most famous recipes while embellishing others to create innovative takes on Southern food classics.",
  "Gen Korean BBQ House": "Enjoy more than just delicious food. We're about the experience. Korean culture has taken the world by storm and at the forefront is the unapologetically bold Gen Korean BBQ House. With our vibrant atmosphere and menu based on authentic but modern Korean recipes, it is no surprise that people are willing to wait in line for over two hours just to get a taste of our All-You-Can-Eat (AYCE) KBBQ experience."
}


const images ={
  "The Dandelion": ["https://s3-media0.fl.yelpcdn.com/bphoto/IszoOQovGzgkCvJXFJEfWA/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/242OpT1PsBGxOLQClXFs7g/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/M5Dwuea2tjbjaZVI6b0Zxw/o.jpg"],
  "Talula's Garden":["https://s3-media0.fl.yelpcdn.com/bphoto/TNtMu58kgijqqvol8tr2WA/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/HdnJPmZXACV30xcsledbAA/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/PXBAsfKDdpHevIbbcfMyJg/o.jpg"],
  "Butcher Bar": ["https://s3-media0.fl.yelpcdn.com/bphoto/HoggPaiFQpIVKkndQEE0IA/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/odw90Jlkm78aRvoY6FbaWQ/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/cNjjCDBFKWLiLJm8Rw59lw/o.jpg"],
  "Maple Japanese Ramen": ["https://s3-media0.fl.yelpcdn.com/bphoto/GijDBAzbzYyFn96-EYTC7Q/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/bgI50S0sgjjBmm7uFsEdRw/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/ttP-o6Ozon19pZSe1KXKBA/o.jpg"],
  "Bao Nine": ["https://s3-media0.fl.yelpcdn.com/bphoto/k9slbxHSHXxI1gUXvRXV3A/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/KXWRtvYiavg1xUJDB6l9SQ/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/4oUAVEt1jhwXwGlJRKjYtg/o.jpg"],
  "Wildberry Pancakes and Cafe": ["https://s3-media0.fl.yelpcdn.com/bphoto/43XNyVUbPJNtC6IFobGRMw/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/__cQUqDXQVUuEuV_UDA8xA/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/b3zCSocLYRB9TlrPhJ9G0A/o.jpg"],
  "Au Cheval": ["https://s3-media0.fl.yelpcdn.com/bphoto/a0yhvSJX_6i28iwS9egDFg/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/mPi0IpUKo02JpOqfOnGVFw/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/9uqRTIfJDorNQKIzh1KUZA/o.jpg"],
  "Lou Malnati's Pizzeria": ["https://s3-media0.fl.yelpcdn.com/bphoto/9FiL-9Pbytyg6usOE02lYg/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/RAm_4JAvH4IXkz43V6XRcg/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/8XY-2k4WOVI4ZizhPd_xrw/o.jpg"],
  "Smoque BBQ": ["https://s3-media0.fl.yelpcdn.com/bphoto/wBfhSd0v-aCmJmXgf26f-g/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/PefUyffpKa_HwN93_Q6ItQ/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/Riu91Ap_yvjUstuarFlE_A/o.jpg"],
  "Joe's Seafood, Prime Steak & Stone Crab": ["https://s3-media0.fl.yelpcdn.com/bphoto/CfdCrLQmJ4pw5gQXeF6fHg/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/nUbFDqU0-dnHcljv1xcong/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/bl3ruWkcsXeIlrT3QRKg5g/o.jpg"],
  "Thursday Kitchen": ["https://s3-media0.fl.yelpcdn.com/bphoto/kx6lT4K3kNV8ZUauntNQhA/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/OzssPi3tPRae3Fe8LSnrTA/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/pDv_Z0fUWjmdPZMjH1S0xw/o.jpg"],
  "Joe's Shanghai": ["https://s3-media0.fl.yelpcdn.com/bphoto/kNHjVjpJzY47sgilvLFyGw/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/fnHr4B2YEnRKlrJ6I7ZF_Q/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/AY3jCGdHL3eFxicQkXWSZg/o.jpg"],
  "Rubirosa": ["https://s3-media0.fl.yelpcdn.com/bphoto/LuSzR8cpVQRofXOT_bMi1A/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/9rzzWu3iqGxC-liqLvWl0Q/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/MMZHXZSfdyJEupS36k8r9A/o.jpg"],
  "Jane Restaurant": ["https://s3-media0.fl.yelpcdn.com/bphoto/J5TWsxXoC_N7KEk2Dp-CwQ/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/V1IX2qagRFLUGpDskPovHQ/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/R1KdVT0EcugFsYITNfNcxg/o.jpg"],
  "Kimura": ["https://s3-media0.fl.yelpcdn.com/bphoto/bUz-DUnMgrY8UqGu3vDxBw/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/YVJMqqrzTF6paN5nY3wETw/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/h6bWjsY0EVA1F2lZuSJWbw/o.jpg"],
  "L'Antica Pizzeria Da Michele": ["https://s3-media0.fl.yelpcdn.com/bphoto/SCuuHjFSwNpuYxpncVDs9w/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/A4jM2azk3NrH9-n-zHyxow/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/POA34WfBF7HEGGsxe85pBw/o.jpg"],
  "Hangari Kalguksu": ["https://s3-media0.fl.yelpcdn.com/bphoto/X_U65O9YnvMyb42h1BZ0JQ/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/RrIv-PigRNU3yYA-L17J9g/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/tHhlq0BeoJJcvZP7q_4t0A/o.jpg"],
  "Republique": ["https://s3-media0.fl.yelpcdn.com/bphoto/Xy6oJ25E2QUzw_zsBD-dhA/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/yUNfbZeF88v_E0xnO1Neuw/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/xUE4XBtt2iU68s3hv1hXGw/o.jpg"],
  "Eat This Cafe": ["https://s3-media0.fl.yelpcdn.com/bphoto/JnO3SLDimv-99ZAU1SN2ew/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/b7JduF39HdLDLWwmIwWnQQ/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/UUsI98aDZDmMgT_dVRZisA/o.jpg"],
  "Stout Burgers & Beers": ["https://s3-media0.fl.yelpcdn.com/bphoto/k2lUZAeuAgqvfkpS5FxT5Q/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/JNn4mga04qKjaVAtoxTWIw/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/2P-RpKdIQFDgID-Ye942aQ/o.jpg"],
  "Miami Grill": ["https://s3-media0.fl.yelpcdn.com/bphoto/SsK37Dtf4B77-aoU6EmXsQ/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/r3dPNC__KuOWzgmMJHIamQ/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/D3zJ50CvCw964nYah0JVJw/o.jpg"],
  'Bosscat Kitchen & Libations': ["https://s3-media0.fl.yelpcdn.com/bphoto/CUsonAxau5HCqy3QWJVRRw/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/ag7cbRecipU7sDp9ruXdiw/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/ASkckJw7IzwFDRi41RZsyg/o.jpg"],
  "The Cookshack": ["https://s3-media0.fl.yelpcdn.com/bphoto/mKOyaJdlmEI6gNgI5ICFeg/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/8wS5jW9hv6LptO2IX-HE1w/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/m72As8z1jaGODCBIKsJ6qw/o.jpg"],
  "Lucille's": ["https://s3-media0.fl.yelpcdn.com/bphoto/g-9le0mqVhH-LSNc9B8iQA/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/7n2BRbP5NKY_3uTRztGrwQ/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/4sJlov5a1Exrx-VrKyo6pg/o.jpg"],
  "Gen Korean BBQ House": ["https://s3-media0.fl.yelpcdn.com/bphoto/BJSpgWS4Pj4R5hQ6-8iz_A/o.jpg","https://s3-media0.fl.yelpcdn.com/bphoto/U1gwgISTMK5YhzahSdU6gA/o.jpg", "https://s3-media0.fl.yelpcdn.com/bphoto/7C_r0b3nOZsS4xICcXccuw/o.jpg"]
}




module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Businesses', [
      //Philly
      {
        title: 'The Dandelion',
        ownerId: null,
        description: descriptions["The Dandelion"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 39.951000,
        longitude: 75.170700,
        imgs: images["The Dandelion"],
        amenitiesId: 1,
        phoneNumber: "(215) 558-2500",
        categories: ["Gastropubs", "British"],
        hours: ["11:30 AM - 10:00 PM", "11:30 AM - 10:00 PM","11:30 AM - 10:00 PM","11:30 AM - 10:00 PM","11:30 AM - 10:00 PM","10:00 AM - 11:00 PM", "10:00 AM - 10:00 PM"]
      },
      {
        title: "Talula's Garden",
        ownerId: null,
        description: descriptions["Talula's Garden"],
        webAddress: "http://www.talulasgarden.com",
        address: "210 W Washington Sq Philadelphia, PA 19106",
        latitude: 39.947220,
        longitude: 75.153600,
        imgs: images["Talula's Garden"],
        amenitiesId: 2,
        phoneNumber: "(215) 592-7787",
        categories: ["American (New)"],
        hours: ["5:00 PM - 9:00 PM","5:00 PM - 9:00 PM","5:00 PM - 9:00 PM","5:00 PM - 9:00 PM","4:00 PM - 10:00 PM", "4:00 PM - 10:00 PM","10:00 AM - 2:00 PM"]
      },
      {
        title: 'Butcher Bar',
        ownerId: null,
        description: descriptions["Butcher Bar"],
        webAddress: "http://www.butcherbarphilly.com",
        address: "2034 Chestnut St Philadelphia, PA 19103",
        latitude: 39.952050,
        longitude: 75.174910,
        imgs: images["Butcher Bar"],
        amenitiesId: 3,
        phoneNumber: "(215) 563-6328",
        categories: ["Steakhouses", "Bars", "Comfort Food"],
        hours: ["4:00 PM - 9:00 PM","4:00 PM - 9:00 PM","4:00 PM - 9:00 PM","4:00 PM - 9:00 PM","4:00 PM - 9:00 PM","4:00 PM - 9:00 PM","10:30 AM - 3:00 PM"]
      },
      {
        title: 'Maple Japanese Ramen',
        ownerId: null,
        description: null,
        webAddress: null,
        address: "2102 Chestnut St Philadelphia, PA 19103",
        latitude: 39.952230,
        longitude: 75.175710,
        imgs: images["Maple Japanese Ramen"],
        amenitiesId: 4,
        phoneNumber: "(215) 988-0788",
        categories: ["Ramen"],
        hours: ["11:00 AM - 9:30 PM","11:00 AM - 9:30 PM","11:00 AM - 9:30 PM","11:00 AM - 9:30 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:30 AM - 9:30 PM"]
      },
      {
        title: 'Bao Nine',
        ownerId: null,
        description: descriptions["Bao Nine"],
        webAddress: "https://www.baoninephilly.com",
        address: "38 S 19th St Philadelphia, PA 19103",
        latitude: 39.952380,
        longitude: 75.172050,
        imgs: images["Bao Nine"],
        amenitiesId: 5,
        phoneNumber: "(215) 982-1738",
        categories: ["Taiwanese", "Asian Fusion"],
        hours: ["11:00 AM - 9:00 PM", "11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 8:00 PM",]
      },

      //Chicago
      {
        title: 'Wildberry Pancakes and Cafe',
        ownerId: null,
        description: descriptions['Wildberry Pancakes and Cafe'],
        webAddress: "http://www.wildberrycafe.com",
        address: "130 E Randolph St Chicago, IL 60601",
        latitude: 41.8848606,
        longitude: 87.6232397,
        imgs: images['Wildberry Pancakes and Cafe'],
        amenitiesId: 6,
        phoneNumber: "(312) 938-9777",
        categories: ["Pancakes", "Waffles", "Cafes"],
        hours: ["7:00 AM - 2:00 PM","7:00 AM - 2:00 PM","7:00 AM - 2:00 PM","7:00 AM - 2:00 PM","7:00 AM - 2:00 PM","7:00 AM - 2:00 PM","7:00 AM - 2:00 PM",]
      },
      {
        title: 'Au Cheval',
        ownerId: null,
        description: descriptions["Au Cheval"],
        webAddress: "http://auchevalchicago.com",
        address: "800 W Randolph St Chicago, IL 60607",
        latitude: 41.8847027,
        longitude: 87.6477509,
        imgs: images["Au Cheval"],
        amenitiesId: 7,
        phoneNumber: "(312) 929-4580",
        categories: ["Bars", "American (Traditional)"],
        hours: ["11:00 AM - 10:15 PM","11:00 AM - 10:15 PM","11:00 AM - 10:15 PM","11:00 AM - 10:15 PM","11:00 AM - 10:15 PM","11:00 AM - 10:15 PM","11:00 AM - 10:15 PM",]
      },
      {
        title: "Lou Malnati's Pizzeria",
        ownerId: null,
        description: descriptions["Lou Malnati's Pizzeria"],
        webAddress: "http://www.loumalnatis.com",
        address: "439 N Wells St Chicago, IL 60654",
        latitude: 41.89035,
        longitude: 87.6337441,
        imgs: images["Lou Malnati's Pizzeria"],
        amenitiesId: 8,
        phoneNumber: "(312) 828-9800",
        categories: ["Pizza", "Italian","Sandwhiches"],
        hours: ["11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 10:00 PM",]
      },
      {
        title: 'Smoque BBQ',
        ownerId: null,
        description: descriptions['Smoque BBQ'],
        webAddress: "http://www.smoquebbq.com",
        address: "3800 N Pulaski Rd Ste 2 Chicago, IL 60641",
        latitude: 41.9502209,
        longitude: 87.72782,
        imgs: images['Smoque BBQ'],
        amenitiesId: 9,
        phoneNumber: "(773) 545-7427",
        categories: ["Barbecue"],
        hours: ["Closed","11:00 AM - 8:00 PM","11:00 AM - 8:00 PM","11:00 AM - 8:00 PM","11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 8:00 PM"]
      },
      {
        title: "Joe's Seafood, Prime Steak & Stone Crab",
        ownerId: null,
        description: null,
        webAddress: "http://joes.net",
        address: "60 E Grand Ave Chicago, IL 60611",
        latitude: 41.8918497,
        longitude: 87.6255667,
        imgs: images["Joe's Seafood, Prime Steak & Stone Crab"],
        amenitiesId: 10,
        phoneNumber: "(312) 379-5637",
        categories: ["Seafood", "Steakhouses"],
        hours: ["11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","11:30 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 9:00 PM",]
      },


      //New York City
      {
        title: 'Thursday Kitchen',
        ownerId: null,
        description: descriptions["Thursday Kitchen"],
        webAddress: "https://thursdaykitchen.com",
        address: "424 E 9th St New York, NY 10009",
        latitude: 40.7275724,
        longitude: 73.9837553,
        imgs: images["Thursday Kitchen"],
        amenitiesId: 11,
        phoneNumber: null,
        categories: ["Korean", "American (New)", "Tapas/Small Plates"],
        hours: ["6:00 PM - 11:00 PM","6:00 PM - 11:00 PM","6:00 PM - 11:00 PM","6:00 PM - 12:00 AM","5:00 PM - 12:00 AM","12:00 PM - 3:00 PM","12:00 PM - 3:00 PM",]
      },
      {
        title: "Joe's Shanghai",
        ownerId: null,
        description: null,
        webAddress: null,
        address: "46 Bowery St New York, NY 10013",
        latitude: 40.7157527,
        longitude: 73.9969166,
        imgs: images["Joe's Shanghai"],
        amenitiesId: 12,
        phoneNumber: "(212) 233-8888",
        categories: ["Shanghainese", "Seafood", "Noodles"],
        hours: ["11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM"]
      },
      {
        title: 'Rubirosa',
        ownerId: null,
        description: descriptions["Rubirosa"],
        webAddress: "http://rubirosanyc.com",
        address: "235 Mulberry St New York, NY 10012",
        latitude: 40.7227467,
        longitude: 73.9961882,
        imgs: images["Rubirosa"],
        amenitiesId: 13,
        phoneNumber: "(212) 965-0500",
        categories: ["Italian", "Pizza"],
        hours: ["11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM",]
      },
      {
        title: 'Jane Restaurant',
        ownerId: null,
        description: descriptions["Jane Restaurant"],
        webAddress: "http://janerestaurant.com",
        address: "100 W Houston St New York, NY 10012",
        latitude: 40.7273842,
        longitude: 74.000203,
        imgs: images["Jane Restaurant"],
        amenitiesId: 14,
        phoneNumber: "(212) 254-7000",
        categories: ["Breakfast & Brunch", "American (New)", "Bars"],
        hours: ["11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","9:00 AM - 9:00 PM","9:00 AM - 9:00 PM",]
      },
      {
        title: 'Kimura',
        ownerId: null,
        description: descriptions["Kimura"],
        webAddress: "https://www.hakatazen.com/menu",
        address: "31 St Marks Pl New York, NY 10003",
        latitude: 40.7290776,
        longitude: 73.9881831,
        imgs: images["Kimura"],
        amenitiesId: 15,
        phoneNumber: "(212) 598-1188",
        categories: ["Japanese", "Hot Pot"],
        hours: ["12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM",]
      },


      //Los Angeles
      {
        title: "L'Antica Pizzeria Da Michele",
        ownerId: null,
        description: null,
        webAddress: "https://damicheleusa.com",
        address: "1534 N McCadden Pl Los Angeles, CA 90028",
        latitude: 34.0990281,
        longitude: 118.3373355,
        imgs: images["L'Antica Pizzeria Da Michele"],
        amenitiesId: 16,
        phoneNumber: "(323) 366-2408",
        categories: ["Pizza", "Italian"],
        hours: ["11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 12:00 AM","11:00 AM - 12:00 AM","11:00 AM - 12:00 AM","11:00 AM - 11:00 PM",]
      },
      {
        title: 'Hangari Kalguksu',
        ownerId: null,
        description: descriptions["Hangari Kalguksu"],
        webAddress: "https://www.hangarikalguksu.com",
        address: "3470 W 6th St Ste 9&10 Los Angeles, CA 90020",
        latitude: 34.0632313,
        longitude: 118.2974085,
        imgs: images["Hangari Kalguksu"],
        amenitiesId: 17,
        phoneNumber: "(213) 388-2326",
        categories: ["Korean", "Noodles"],
        hours: ["10:00 AM - 9:30 PM", "Closed","10:00 AM - 9:30 PM","10:00 AM - 9:30 PM","10:00 AM - 10:30 PM","10:00 AM - 10:30 PM","10:00 AM - 9:30 PM"]
      },
      {
        title: 'Republique',
        ownerId: null,
        description: descriptions["Republique"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 34.0641327,
        longitude: 118.3437403,
        imgs: images["Republique"],
        amenitiesId: 18,
        phoneNumber: "(310) 362-6115",
        categories: ["French", "Breakfast & Brunch","Cocktail Bars"],
        hours: ["8:00 AM - 2:00 PM","8:00 AM - 2:00 PM","8:00 AM - 2:00 PM","8:00 AM - 2:00 PM","8:00 AM - 2:00 PM","8:00 AM - 2:00 PM","8:00 AM - 2:00 PM",]
      },
      {
        title: 'Eat This Cafe',
        ownerId: null,
        description: descriptions["Eat This Cafe"],
        webAddress: "https://eatthiscafe.com",
        address: "6547 Santa Monica Blvd Los Angeles, CA 90038",
        latitude: 34.0908674,
        longitude: 118.3323021,
        imgs: images["Eat This Cafe"],
        amenitiesId: 19,
        phoneNumber: "(323) 999-2003",
        categories: ["Breakfast & Brunch", "Sandwiches","Salad"],
        hours: ["10:00 AM - 4:00 PM","10:00 AM - 4:00 PM","10:00 AM - 4:00 PM","10:00 AM - 4:00 PM","9:00 AM - 4:00 PM","9:00 AM - 4:00 PM","9:00 AM - 4:00 PM",]
      },
      {
        title: 'Stout Burgers & Beers',
        ownerId: null,
        description: descriptions['Stout Burgers & Beers'],
        webAddress: "https://www.stoutburgersandbeers.com/hollywood",
        address: "1544 N Cahuenga Blvd Los Angeles, CA 90028",
        latitude: 34.0994837,
        longitude: 118.329268,
        imgs: images['Stout Burgers & Beers'],
        amenitiesId: 20,
        phoneNumber: "(323) 469-3801",
        categories: ["Gastropubs", "Burgers","American (Traditional)"],
        hours: ["12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM",]
      },



      //Houston
      {
        title: 'Miami Grill',
        ownerId: null,
        description: descriptions["Miami Grill"],
        webAddress: "https://mymiamigrill.com",
        address: "16344 Wallisville Rd Ste 800 Houston, TX 77049",
        latitude: 29.8152812,
        longitude: 95.1410973,
        imgs: images["Miami Grill"],
        amenitiesId: 21,
        phoneNumber: "(281) 915-1900",
        categories: ["American (Traditional)", "Seafood","Sandwiches"],
        hours: ["10:00 AM - 11:00 PM","10:00 AM - 11:00 PM","10:00 AM - 11:00 PM","10:00 AM - 11:00 PM","10:00 AM - 12:00 AM","10:00 AM - 12:00 AM","10:00 AM - 11:00 PM",]
      },
      {
        title: 'Bosscat Kitchen & Libations',
        ownerId: null,
        description: descriptions["Bosscat Kitchen & Libations"],
        webAddress: "https://www.bosscatkitchen-houston.com/",
        address: "4310 Westheimer Rd Ste 150 Houston, TX 77027",
        latitude: 29.7419768,
        longitude: 95.4506193,
        imgs: images["Bosscat Kitchen & Libations"],
        amenitiesId: 22,
        phoneNumber: "(281) 501-1187",
        categories: ["American (New)", "Whiskey Bars","Breakfast & Brunch"],
        hours: ["11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM",]
      },
      {
        title: 'The Cookshack',
        ownerId: null,
        description: descriptions["The Cookshack"],
        webAddress: "https://www.thecookshack.com/location/the-cookshack-houston-heights/",
        address: "4015 Washington Ave Houston, TX 77007",
        latitude: 29.769692,
        longitude: 95.401405,
        imgs: images["The Cookshack"],
        amenitiesId: 23,
        phoneNumber: "(713) 534-1746",
        categories: ["Chicken Shop", "Barbeque","Salad"],
        hours: ["11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM",]
      },
      {
        title: "Lucille's",
        ownerId: null,
        description: descriptions["Lucille's"],
        webAddress: "http://www.lucilleshouston.com",
        address: "5512 La Branch St Houston, TX 77004",
        latitude: 29.723819,
        longitude: 95.3850813,
        imgs: images["Lucille's"],
        amenitiesId: 24,
        phoneNumber: "(713) 568-2505",
        categories: ["American (New)", "Southern"],
        hours: ["Closed","11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","10:00 AM - 3:00 PM", ]
      },
      {
        title: 'Gen Korean BBQ House',
        ownerId: null,
        description: descriptions["Gen Korean BBQ House"],
        webAddress: "https://www.genkoreanbbq.com",
        address: "3201 Louisiana St Ste 101 Houston, TX 77006",
        latitude: 29.7425577,
        longitude: 95.3794964,
        imgs: images["Gen Korean BBQ House"],
        amenitiesId: 25,
        phoneNumber: "(713) 807-7444",
        categories: ["Korean", "Barbeque", "Seafood"],
        hours: ["11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 12:00 AM","11:00 AM - 12:00 AM","11:00 AM - 11:00 PM",]
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Businesses', null, {});
  }
};
