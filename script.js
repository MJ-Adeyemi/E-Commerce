const data = [
  {
    id: 1,
    image: "./pictures/Bently Bentayga.jpeg",
    name: "Bently Bentayga",
    brand: "Bently",
    category: "Cars",
    description:
      "With a choice between a V8 petrol engine and a V6 hybrid powertrain, the Bentayga is packed with the latest lifestyle-enhancing technology, from driver assistance systems to connected services.",
    price: 50,
    dprice: 57,
  },

  {
    id: 2,
    image: "./pictures/Bently Mulliner.png",
    name: "Bently Mulliner",
    brand: "Bently",
    category: "Brand",
    description:
      "With roots that can be traced back to before the birth of the motor car, Mulliner operates today as Bentley’s personal commissioning division. From special features and finishes to entirely new coachbuilt vehicles, the Mulliner name continues to represent the ultimate in Bentley luxury.",
    price: 64,
    dprice: 69,
  },

  {
    id: 3,
    image: "./pictures/Enzo Ferrari.jpeg",
    name: "Enzo Ferrari",
    brand: "Ferrari",
    category: "Cars",
    description:
      "A limited-edition super car that represents the pinnacle of motors port technology. The Enzo's engine is a 65° V12 designed on the back of Ferrari's experience in Formula 1. It has a total displacement of 5,998 cc, with a maximum power of 660 hp at 7,800 rpm and a maximum torque of 657 kgm at 5,500 rpm.",
    price: 48,
    dprice: 51,
  },

  {
    id: 4,
    image: "./pictures/F50.webp",
    name: "Ferrari F50",
    brand: "Ferrari",
    category: "Cars",
    description:
      "Although the two previous “Supercars” had been powered by turbocharged V8 engines, this variant used a normally aspirated V12 engine as the motive force, albeit more than fifty per cent greater in capacity than its predecessors.",
    price: "67",
    dprice: "70",
  },

  {
    id: 5,
    image: "./pictures/Ferrari F80.jpeg",
    name: "Ferrari F80",
    brand: "Ferrari",
    category: "Cars",
    description:
      "The Ferrari F80 is conceived to deliver the ultimate in performance without penalising driving comfort. Co-developed with Brembo and an all-time first for a road-going application, CCM-R Plus uses longer carbon fibres to significantly improve mechanical strength (+100%) and thermal conductivity (+300%) over previous generation solutions, and braking surfaces coated with a layer of silicon carbide (SiC) to offer incredible wear resistance and shorter bedding-in times.",
    price: 78,
    dprice: 81,
  },

  {
    id: 6,
    image: "./pictures/LaFerrari Aperta.jpeg",
    name: "LaFerrari Aperta",
    brand: "Ferrari",
    category: "Cars",
    description:
      "As with the LaFerrari, the Aperta’s powertrain combined an 800 cv V12 ICE with a 120 kW (163 cv) electric motor to unleash a total power output in excess of 960 cv. The KERS (Kinetic Energy Recovery System), tested on the track and evolved for use in a road car, guaranteed maximum integration between the V12 and the electric motor, seamlessly blending the advantages of both.",
    price: 87,
    dprice: 92,
  },

  {
    id: 7,
    image: "./pictures/LaFerrari.jpeg",
    name: "LaFerrari",
    brand: "Ferrari",
    category: "Cars",
    description:
      "Maranello’s first HY-KERS hybrid. An extraordinarily ambitious project, combining an 800 hp V12 combustion engine with a 120 kW electric motor. Total power: 963 HP. The 6262 cc V12 was a major new milestone in the Prancing Horse’s construction history. Until it was launched in 2013, no other naturally aspirated engine mounted in a road-going Ferrari had delivered such blistering performance.",
    price: 72,
    dprice: 75,
  },

  {
    id: 8,
    image: "./pictures/lamborghini countach.jpg",
    name: "Lamborghini Countach LPI 800-4",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "Fifty years since its unveiling at the Geneva Motor Show, the legendary Lamborghini Countach is making headlines again with a limited-series hybrid supercar celebrating the visionary design that revolutionized modern sports cars forever and laid the foundations of the Lamborghini legacy. This is the new Countach LPI 800-4. Inspired by the past, made for the future.",
    price: 82,
    dprice: 87,
  },

  {
    id: 9,
    image: "./pictures/lamborghini huracan evo spyder.jpg",
    name: "Lamborghini Huracan Evo Spyder",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "The Huracán EVO Spyder lets one experience the thrill of extreme driving. Colors, smells and sounds meld with a seductive design and ultra-light materials.  The 640 hp naturally aspirated V10 engine roars with authority, as the exhaust announces the presence of a formidable machine. The aerodynamic lines of the super sports car, perfectly streamlined, slice through the air.",
    price: 94,
    dprice: 101,
  },

  {
    id: 10,
    image: "./pictures/lamborghini huracan sterrato.jpg",
    name: "Lamborghini Huracan Sterrato",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "The first of its kind, the Huracán Sterrato explores a new frontier in driving pleasure, designed to push the envelope when the asphalt ends. The super sports car is equipped with a dedicated iteration of the LDVI (Lamborghini Integrated Vehicle Dynamics) system, featuring specific Strada and Sport calibrations and introducing Rally mode. Like a work of art, it represents the leading edge of innovation: the super sports car concept imagined in a radically new way.",
    price: 110,
    dprice: 118,
  },

  {
    id: 11,
    image: "./pictures/lamborghini huracan STO.jpg",
    name: "Lamborghini Huracan STO",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "A super-sports car created with a singular purpose, the Huracán STO delivers all the feel and technology of a genuine race car in a road-legal model. Lamborghini’s years-long motorsport know-how, intensified by a winning heritage, is concentrated in the new Huracán STO. Its extreme aerodynamics, track-honed handling dynamics, lightweight contents and the highest-performing V10 engine to date come together, ready to trigger all the emotions of the racetrack in your everyday life.",
    price: 101,
    dprice: 114,
  },

  {
    id: 12,
    image: "./pictures/Ferrari F80.jpeg",
    name: "Ferrari F80 - X",
    brand: "Ferrari",
    category: "Cars",
    description:
      "X - The Ferrari F80 is conceived to deliver the ultimate in performance without penalising driving comfort. Co-developed with Brembo and an all-time first for a road-going application, CCM-R Plus uses longer carbon fibres to significantly improve mechanical strength (+100%) and thermal conductivity (+300%) over previous generation solutions, and braking surfaces coated with a layer of silicon carbide (SiC) to offer incredible wear resistance and shorter bedding-in times.",
    price: 78,
    dprice: 81,
  },

  {
    id: 13,
    image: "./pictures/lamborghini huracan tecnica.jpg",
    name: "Lamborghini Huracan Hecnica",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "The latest member of the Huracán range provides the purest Lamborghini driving experience combined with the freedom of everyday use: a bridge between past and future, lifestyle and performance, road and track. Huracán Tecnica brings forth a pilot’s attitude in every driver, delivering the most rewarding performance and the ultimate, fun-to-drive experience — simultaneously. Unleash the unique character of the most versatile Huracán.",
    price: 92,
    dprice: 99,
  },

  {
    id: 14,
    image: "./pictures/lamborghini revuelto.jpg",
    name: "Lamborghini Revuelto",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "Just before the 60th anniversary of the marque, Lamborghini unveiled Revuelto, the first HPEV (High Performance Electrified Vehicle) hybrid super sports car. With the Revuelto, Lamborghini has established a new benchmark in performance, on-board technology, and driving pleasure.",
    price: 68,
    dprice: 74,
  },

  {
    id: 15,
    image: "./pictures/lamborghini sian fkp 37.jpg",
    name: "Lamborghini Sian FKP 37",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "The Sián FKP 37 is the first super sports car powered by a V12 engine and hybrid technology based on supercapacitors. Its powerful V12 engine, coupled with electric boost, creates an unrivaled gem of engineering and technology. Sián—lightning in Bolognese—is a name that captures the car’s true character, foremost its speed, which exceeds 220 mph (350 km/h).",
    price: 74,
    dprice: 80,
  },

  {
    id: 16,
    image: "./pictures/lamborghini sian roadster.jpg",
    name: "Lamborghini Sian Roadster",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "X - The latest member of the Huracán range provides the purest Lamborghini driving experience combined with the freedom of everyday use: a bridge between past and future, lifestyle and performance, road and track. Huracán Tecnica brings forth a pilot’s attitude in every driver, delivering the most rewarding performance and the ultimate, fun-to-drive experience — simultaneously. Unleash the unique character of the most versatile Huracán.",
    price: 79,
    dprice: 83,
  },

  {
    id: 17,
    image: "./pictures/lamborghini temerario.jpg",
    name: "Lamborghini Temerario",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "The first open-top hybrid Lamborghini super sports car to feature a supercapacitor, the Sián Roadster roars with electrified intensity, resonating with the inimitable V12 sound from the most powerful Lamborghini engine to date. Limited to only 19 examples, the Sián Roadster advances hybrid technology with the world’s first use of a supercapacitor in a materials-science application unique to the industry.",
    price: 75,
    dprice: 92,
  },

  {
    id: 18,
    image: "./pictures/lamborghini urus performante.jpg",
    name: "Lamborghini Urus Performante",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "A visionary concept: Urus Performante is the sporty evolution of the first-ever Super Sport Utility Vehicle, one that defines a new segment as the absolute all-around super sports car. With its distinctive, sporting design, revolutionary use of lightweight components and improved aerodynamics, Urus Performante elevates driving fun and SUV performance to a whole new level.",
    price: 96,
    dprice: 102,
  },

  {
    id: 19,
    image: "./pictures/lamborghini urus S.jpg",
    name: "Lamborghini Urus S",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "The Urus embodies a visionary concept through the realization of a Super Sport Utility Vehicle born from pure Lamborghini DNA. In the Lamborghini Urus S, performance, design and exclusivity are evolved, revealing even greater strength and a heightened perception of luxury.",
    price: 105,
    dprice: 112,
  },

  {
    id: 20,
    image: "./pictures/lamborghini urus SE.jpg",
    name: "Lamborghini Urus SE",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "Urus SE is the next step in Automobili Lamborghini’s journey toward complete hybridization. As the first PHEV (Plug-in Hybrid Electric Vehicle) version of the luxury Super SUV, the SE sets a new benchmark for the whole segment in terms of comfort, performance, efficiency, emissions, and driving experience.",
    price: 117,
    dprice: 125,
  },

  {
    id: 21,
    image: "./pictures/Lamborghini-Asterion.jpg",
    name: "Lamborghini Asterion",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "The Sián FKP 37 is the first production Lamborghini powered by a V12 with supercapacitor-based hybrid technology, and as we already know, is the fastest Lamborghini ever. But many will remember that there was a concept car with very different technology which was the first to pit Lamborghini’s engineers against the challenge of electrification. Its name is the Lamborghini Asterion.",
    price: 113,
    dprice: 115,
  },

  {
    id: 22,
    image: "./pictures/Lamborghini-Estoque.jpg",
    name: "Lamborghini Estoque",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "The Estoque concept car is a four-door super sports car that enhances the tradition of the brand with totally new versatility. Suited for daily driving, it is the perfect match for a multi-faceted lifestyle. Conceptually speaking, the Estoque expresses the idea of a Lamborghini which is both a top-class super sports car and a highly practical GT.",
    price: 94,
    dprice: 100,
  },

  {
    id: 23,
    image: "./pictures/Lamborghini-Terzo-Millennio.jpg",
    name: "Lamborghini Terzo Millennio",
    brand: "Lamborghini",
    category: "Cars",
    description:
      "X - The latest member of the Huracán range provides the purest Lamborghini driving experience combined with the freedom of everyday use: a bridge between past and future, lifestyle and performance, road and track. Huracán Tecnica brings forth a pilot’s attitude in every driver, delivering the most rewarding performance and the ultimate, fun-to-drive experience — simultaneously. Unleash the unique character of the most versatile Huracán.",
    price: 82,
    dprice: 90,
  },

  {
    id: 24,
    image: "./pictures/Rolls Royce Black Badge Ghost Series II.jpg",
    name: "Rolls Royce Black Badge Ghost Series II",
    brand: "Rolls Royce",
    category: "Cars",
    description:
      "The Lamborghini Terzo Millennio is famous for its incredibly futuristic lines that make it an authentic masterpiece of automotive design. But what are the technological solutions being researched by the Lamborghini R&D department in collaboration with the Massachusetts Institute of Technology that might make the dream of a totally electric Lamborghini come true one day?",
    price: 156,
    dprice: 172,
  },

  {
    id: 25,
    image: "./pictures/Rolls Royce Cullinan Series II.jpg",
    name: "Rolls Royce Cullinan Series II",
    brand: "Rolls Royce",
    category: "Cars",
    description:
      "The Rolls-Royce Cullinan is a full-sized luxury sport utility vehicle (SUV) manufactured by Rolls-Royce Motor Cars as the brand's first all-wheel drive vehicle.[4] It is named after the Cullinan Diamond, the largest gem-quality rough diamond ever discovered.[4]  The Cullinan sits above the Ghost and below the Phantom in Rolls-Royce's line.",
    price: 175,
    dprice: 189,
  },

  {
    id: 26,
    image: "./pictures/Rolls Royce Ghost Extented Series II.jpg",
    name: "Rolls Royce Ghost Extended Series II",
    brand: "Rolls Royce",
    category: "Cars",
    description:
      "For those who desire the agility and bespoke luxury of the Ghost Series II with enhanced rear seating space, the Ghost Extended Series II offers the ideal solution. By extending the rear doors and apertures, the model adds 170mm to the rear suite, preserving its refined silhouette while delivering superior comfort.",
    price: 182,
    dprice: 198,
  },

  {
    id: 27,
    image: "./pictures/Rolls Royce Ghost Series II.jpg",
    name: "Rolls Royce Ghost Series II",
    brand: "Rolls Royce",
    category: "Cars",
    description:
      "The 2025 Rolls-Royce Ghost Series II continues to be powered by the legendary 6.75-liter twin-turbocharged V12 engine, an engineering masterpiece that remains unchanged, delivering an impressive 563 horsepower. This engine epitomizes the balance between power and refinement that defines Rolls-Royce.",
    price: 202,
    dprice: 215,
  },

  {
    id: 28,
    image: "./pictures/Rolls Royce Phantom Extended.jpeg",
    name: "Rolls Royce Phantom Extended",
    brand: "Rolls Royce",
    category: "Cars",
    description:
      "The Rolls-Royce Phantom is a full-sized luxury saloon manufactured by Rolls-Royce Motor Cars. It is the eighth and current generation of the Rolls-Royce Phantom, debuting in 2017, and the second launched by Rolls-Royce under BMW ownership. It is offered in two wheelbase lengths. This is the current flagship model made by Rolls-Royce Motor Cars.",
    price: 245,
    dprice: 258,
  },

  {
    id: 29,
    image: "./pictures/Rolls Royce Phantom Scintilla.jpg",
    name: "Rolls Royce Phantom Scintilla",
    brand: "Rolls Royce",
    category: "Cars",
    description:
      "Phantom Scintilla is presented in a flawless two-tone Bespoke finish. Andalusian White graces the upper body, while the lower body is adorned in Thracian Blue. The colourway evokes the sea around the island of Samothrace where the Winged Victory of Samothrace statue originates.",
    price: 301,
    dprice: 315,
  },

  {
    id: 30,
    image: "./pictures/Rolls Royce Ghost Series II.jpg",
    name: "Rolls Royce Ghost Series II-X",
    brand: "Rolls Royce",
    category: "Cars",
    description:
      "X - The 2025 Rolls-Royce Ghost Series II continues to be powered by the legendary 6.75-liter twin-turbocharged V12 engine, an engineering masterpiece that remains unchanged, delivering an impressive 563 horsepower. This engine epitomizes the balance between power and refinement that defines Rolls-Royce.",
    price: 202,
    dprice: 215,
  },
];

let text = "";
let card = document.getElementById("card");

function fetchProduct() {
  try {
    for (let i = 0; i < data.length; i++) {
      text += `
      <div class= "w-[350px] space-y-2 bg-white px-[10px] py-[10px] border rounded-[5px]">
        <div>
          <img src="${data[i].image}" class="w-[300px] h-[200px]" alt="${data[i].name}"/>
        </div>
        <p class="font-bold text-[18px]">${data[i].name}</p>
        <p><span class="font-bold">Brand:</span> <span class="font-bold text-yellow-700">${data[i].brand}</span></p>
        <p><span class="font-bold">Category:</span> <span class="font-bold">${data[i].category}</span></p>
        <p><span class="font-bold">Description:</span> <span class="">${data[i].description}</span></p>
        <div class="flex gap-[10px]">
          <p><span class="font-bold text-[19px]">$${data[i].price}</span></p>
          <p class="mt-[3px]"><span class="line-through text-gray-500 text-[15px]">$${data[i].dprice}</p>
        </div>
        <button class="bg-yellow-800 hover:bg-yellow-600 text-white w-full py-[5px] font-bold rounded-[10px]">ADD TO CART</button>
      </div>
          `;
    }
  } catch (error) {
    console.log(error);
  }

  card.innerHTML = text;
}

// function addTocart() {
//   let title = document.getElementById("title").innerHTML;
//   let by = document.getElementById("by").innerHTML;
//   let brand = document.getElementById("brand").innerHTML;
//   let desc = document.getElementById("desc").innerHTML;
//   let image = document.getElementById("image").src;
//   let price = document.getElementById("price").innerHTML;
//   const product = [];

//   product.push(title, by, brand, image, price, desc);

//   localStorage.setItem(title, JSON.stringify(product));
//   // localStorage.clear();
// }

fetchProduct();
