const nigerianStates = [
  // Kaduna State
  {
    id: 1,
    title: 'Kaduna',
    image: require('../assets/images/kaduna/Kajurucastle.jpg'),
    destinations: [
      {
        id: 1,
        title: 'Zaria emirate',
        image: require('../assets/images/kaduna/zariaemirate1.jpg'),
        destinationImages: [
          require('../assets/images/kaduna/zariaemirate1.jpg'),
          require('../assets/images/kaduna/zariaemirate2.jpg'),
          require('../assets/images/kaduna/zariaemirate3.jpg'),
        ],
        description:
          'The ancient city of Zaria was established as the seat of the throne of Zazzau more than 700 years ago, while the whole kingdom of Zazzau is about 1000 years old and is among the oldest and most populous kingdoms in Northern Nigerian.',
        favorite: false,
        ratings: 5,
        latitude: '11.085541',
        longitude: '7.719945',
      },
      {
        id: 2,
        title: 'Kajuru Castle',
        image: require('../assets/images/kaduna/Kajurucastle.jpg'),
        destinationImages: [
          require('../assets/images/kaduna/Kajurucastle.jpg'),
          require('../assets/images/kaduna/Kajurucastle2.jpg'),
        ],
        description:
          'kajuru Castle is an exclusive and luxurious total getaway built in an early medieval style at Kajuru village in the trade city of Kaduna. This gorgeous architectural masterpiece with breathtaking ambience is set upon elevated peaks with staggering views. Kajuru Castle is styled in a European and clearly German way with a baronial hall, complete with suits of armour.',
        favorite: false,
        ratings: 5,
        latitude: '10.3127',
        longitude: '10.3127',
      },
      {
        id: 3,
        title: 'Gamji Park',
        image: require('../assets/images/kaduna/gamji1.jpg'),
        destinationImages: [
          require('../assets/images/kaduna/gamji1.jpg'),
          require('../assets/images/kaduna/gamji2.jpg'),
        ],
        description:
          'The Gamji park has graduated from a simple garden to a full-blown tourist attraction and recreational centre. Kofar Gamji covers an area of 7000 metres and is decorated with architectural designs and sculptures as well as the magnificent Hall. There is sparse vegetation of mangrove and orchard trees. The dotted islands formed by River Kaduna that runs through the park as well as assorted flowers emphasize its beauty.',
        favorite: false,
        ratings: 5,
        latitude: '10.505703',
        longitude: '7.43879',
      },
      {
        id: 4,
        title: 'Ancient Nok Settlement',
        image: require('../assets/images/kaduna/ancientNokSettlement.jpg'),
        destinationImages: [
          require('../assets/images/kaduna/ancientNokSettlement.jpg'),
          require('../assets/images/kaduna/ancientNokSettlement2.jpg'),
        ],
        description:
          'The Nok settlement is an ancient civilization, one of the first that usher the iron age, it is a fascinating wonder of the ingenious nature of the Nok people. From the rock shelters to the Nok terracotta sprinkled around, everything here is designed to blow your mind away. Come with a camera because the will a lot of things to capture.',
        favorite: false,
        ratings: 5,
        latitude: '9.472090',
        longitude: '8.017960',
      },
    ],
  },

  // Bauchi State
  {
    id: 2,
    title: 'Bauchi',
    image: require('../assets/images/bauchi/bauchi.jpg'),
    destinations: [
      {
        id: 1,
        title: 'Yankari Game Reserve',
        image: require('../assets/images/bauchi/Yankari-Game-Reserve.jpeg'),
        destinationImages: [
          require('../assets/images/bauchi/Yankari-Game-Reserve.jpeg'),
          require('../assets/images/bauchi/yankari1.jpg'),
          require('../assets/images/bauchi/yankari2.jpg'),
          require('../assets/images/bauchi/yankari3.jpg'),
          require('../assets/images/bauchi/yankari4.jpg'),
          require('../assets/images/bauchi/yankari5.jpg'),
        ],
        description:
          'The park is home to the largest collection of elephants in Nigeria and one of the largest in West Africa.  So yes, a large number of large mammals. The reserve is completely covered by Sudan savanna. Apart from the elephant, other animals that can be found here include impalas, leopards, exotic birds and baboons just to mention a few. Apart from seeing the animals, other activities at the park include mountain climbing and picnicking with family.',
        favorite: false,
        ratings: 5,
        latitude: '9.8543',
        longitude: '10.3030',
      },
      {
        id: 2,
        title: 'Wikki Warm Spring',
        image: require('../assets/images/bauchi/wakki1.jpg'),
        destinationImages: [
          require('../assets/images/bauchi/wakki1.jpg'),
          require('../assets/images/bauchi/wakki2.jpg'),
          require('../assets/images/bauchi/wakki3.jpg'),
        ],
        description:
          'Although it is located in Yankari National Park, the Wikki warm spring deserves a mention of its own. The spring occurs naturally as a result of the geothermal activity that occurs below the park. The spring has a consistent temperature of 31°C with crystal clear water that flows gently into a sparkling lake. The lake is 200 metres long, 10 metres wide and about 2 metres deep making it perfect for a quick swim so be sure to bring along a swimming trunk.',
        favorite: false,
        ratings: 5,
        latitude: '9.8543',
        longitude: '10.3030',
      },
      {
        id: 3,
        title: 'Tunga Dutse',
        image: require('../assets/images/bauchi/Tunga1.jpg'),
        destinationImages: [
          require('../assets/images/bauchi/Tunga1.jpg'),
          require('../assets/images/bauchi/Tunga2.jpg'),
          require('../assets/images/bauchi/Tunga3.jpg'),
        ],
        description:
          'Tunga Dutse is popular for the ancient engraving on the rocks. If you don’t believe me, look at the writing on the wall. The writings are large and cover a huge area on the sandstone embankment. The meaning and age of the inscriptions are yet to be determined but they are one of the most significant wall writings to be found in Bauchi and Nigeria in general.',
        favorite: false,
        ratings: 5,
        latitude: '9.8543',
        longitude: '10.3030',
      },
    ],
  },

  // Kano State

  {
    id: 3,
    title: 'Kano',
    image: require('../assets/images/Kano-images/Kofar_Sabuwar(Naisa).jpg'),
    destinations: [
      {
        id: 1,
        title: 'Kano City Walls',
        image: require('../assets/images/Kano-images/kano-city-walls-monument-naijapr.jpg'),
        destinationImages: [
          require('../assets/images/Kano-images/kano-city-walls-monument-naijapr.jpg'),
          require('../assets/images/Kano-images/Kofar_Sabuwar(Naisa).jpg'),
          require('../assets/images/Kano-images/kano-city-wall-780x520.jpg'),
        ],
        description: `The Ancient Kano City Walls in Hausa called Kofar Na'isa, were ancient defensive walls built to protect the inhabitants of the ancient city of Kano. The wall was initially built from 1095 through 1134 and completed in the middle of the 14th century. The Ancient Kano City Walls were described as the most impressive monument in West Africa.`,
        favorite: false,
        ratings: 5,
        latitude: '11.9555',
        longitude: '8.49754',
      },
      {
        id: 2,
        title: 'Gidan Makama',
        image: require('../assets/images/Kano-images/Gmakama.jpg'),
        destinationImages: [
          require('../assets/images/Kano-images/Gmakama.jpg'),
          require('../assets/images/Kano-images/gidan-makama1.png'),
          require('../assets/images/Kano-images/gidan-makama3.png'),
          require('../assets/images/Kano-images/gidan-makam2.png'),
        ],
        description: `This was built in 1953 to preserve the rich history of Kano. It is notable as the home of past Emir's of Kano.Built by Lord Lugard in 1953. The Gidan Makama Museum also known as Kano museum is a time capsule with displays of traditional materials, city walls, maps of Kano, the history of statehood, It exhibits Kano in the 19th century, its Civil War, economy, traditions,industry and music.`,
        favorite: false,
        ratings: 5,
        latitude: '11.955076',
        longitude: '8.562595',
      },
      {
        id: 3,
        title: 'Challawa George Dam',
        image: require('../assets/images/Kano-images/challawa1.png'),
        destinationImages: [
          require('../assets/images/Kano-images/challawa3.png'),
          require('../assets/images/Kano-images/challawa1.png'),
          require('../assets/images/Kano-images/challawa2.png'),
        ],
        description: `The Challawa Gorge Dam is in Karaye Local Government Area of Kano State in the Northwest of Nigeria, about 90km southwest of Kano city. It is a major reservoir on the Challawa River, a tributary of the Kano River, which is the main tributary of the Hadejia River.`,
        favorite: false,
        ratings: 5,
        latitude: '11.719',
        longitude: '8.0138',
      },
    ],
  },

  //Enugu State

  {
    id: 4,
    title: 'Enugu',
    image: require('../assets/images/Enugu-images/enugu.jpg'),
    destinations: [
      {
        id: 1,
        title: 'Ezegu Complex',
        image: require('../assets/images/Enugu-images/ezeagu-tourist-complex.jpg'),
        destinationImages: [
          require('../assets/images/Enugu-images/ezeagu-tourist-complex.jpg'),
          require('../assets/images/Enugu-images/ezegu2.png'),
          require('../assets/images/Enugu-images/ezegu3.png'),
        ],
        description:
          'The complex exhibits one of the natural wonders of nature. Measuring about 22 hectares in size, it comprises a lake, a cave and a waterfall (spring water), it is located in the southern central pan of Enugu State. The complex features exotic foliage, a beautiful waterfall, a natural spring and lake and a three kilometer long cave full of tunnels and chambers.',
        favorite: false,
        ratings: 5,
        latitude: '6.3812',
        longitude: '7.2637',
      },
      {
        id: 2,
        title: 'Ngwo Pine Forest',
        image: require('../assets/images/Enugu-images/ngwo-pine-wow.jpg'),
        destinationImages: [
          require('../assets/images/Enugu-images/ngwo-pine-wow.jpg'),
          require('../assets/images/Enugu-images/ngwo-caves.png'),
          require('../assets/images/Enugu-images/ngwo2.png'),
          require('../assets/images/Enugu-images/ngwo3.png'),
          require('../assets/images/Enugu-images/ngwo4.png'),
        ],
        description:
          'Ngwo Pine Forest is a beautiful gift of nature to the Ngwo community, a sleepy farming community on the outskirts of the capital city of Enugu. The Ngwo Pine Forest is used as a recreational area to picnic.',
        favorite: false,
        ratings: 5,
        latitude: '6.4295',
        longitude: '7.4437',
      },
    ],
  },

  // Akwa-Ibom

  {
    id: 5,
    title: 'Akwa Ibom',
    image: require('../assets/images/Akwa-Ibom-images/akwa-ibo.jpeg'),
    destinations: [
      {
        id: 1,
        title: 'Ibom e-library',
        image: require('../assets/images/Akwa-Ibom-images/ibom-elibraryxx.png'),
        destinationImages: [
          require('../assets/images/Akwa-Ibom-images/ibom-elibraryxx.png'),
          require('../assets/images/Akwa-Ibom-images/ibom-lib2.png'),
          require('../assets/images/Akwa-Ibom-images/ibom-lib3.png'),
        ],
        description:
          'The Ibom E-Library is a library located in Uyo, Akwa Ibom State, Nigeria. The E-Library has a multi-functional Conference centre used for conferences and summits.',
        favorite: false,
        ratings: 5,
        latitude: '5.0152',
        longitude: '7.9128',
      },
      {
        id: 2,
        title: 'Ibeano Beach',
        image: require('../assets/images/Akwa-Ibom-images/ibeano-beach-wow.jpg'),
        destinationImages: [
          require('../assets/images/Akwa-Ibom-images/ibeano-beach-wow.jpg'),
          require('../assets/images/Akwa-Ibom-images/ibeano-beachxx.png'),
          require('../assets/images/Akwa-Ibom-images/ibeano-beachhh.png'),
        ],
        description:
          'The Ibeno Beach is one of the beaches on the Atlantic Ocean along the shorelines of Ibeno. It is the longest sand beach in West Africa.The beach is located in Ibeno, a local government area of Akwa Ibom State southeastern, Nigeria.',
        favorite: false,
        ratings: 5,
        latitude: '4.568693',
        longitude: '7.976396',
      },
    ],
  },

  //Nasarawa State

  {
    id: 6,
    title: 'Nasarawa',
    image: require('../assets/images/Nasarawa-images/nasarawa-img.png'),
    destinations: [
      {
        id: 1,
        title: 'Farin Ruwa',
        image: require('../assets/images/Nasarawa-images/Nasarawa-State-Image.jpg'),
        destinationImages: [
          require('../assets/images/Nasarawa-images/Nasarawa-State-Image.jpg'),
          require('../assets/images/Nasarawa-images/farin-ruwa-falls.jpg'),
          require('../assets/images/Nasarawa-images/farin-ruwaxx.png'),
        ],
        description:
          'Farin Ruwa Falls is a waterfall found in the central region of Nigeria. It is among the highest waterfalls in Nigeria. It is significant among Africas falls when the total height covered by the waterfall is considered.',
        favorite: false,
        ratings: 5,
        latitude: '9.14806',
        longitude: '8.75750',
      },
      {
        id: 2,
        title: 'Hunki OX-bow Lake',
        image: require('../assets/images/Nasarawa-images/hunki-ox-bow.jpg'),
        destinationImages: [
          require('../assets/images/Nasarawa-images/hunki-ox-bow.jpg'),
          require('../assets/images/Nasarawa-images/hunki-lake.jpg'),
        ],
        description:
          'The lake is like an Ox-bow, shaped in two arms with each of them measuring 6-7 kilometres long and 70 kilometres wide. The lake that derives its name from the host Hunki, a settlement in Tunga district of the Awe local government. ',
        favorite: false,
        ratings: 5,
        latitude: '7.955',
        longitude: '4.986',
      },
    ],
  },

  // Abuja

  {
    id: 7,
    title: 'Abuja',
    image: require('../assets/images/Abuja/AsoRock.jpeg'),
    destinations: [
      {
        id: 1,
        title: 'Arts And Crafts Village',
        image: require('../assets/images/Abuja/arts-and-crafts-village.webp'),
        destinationImages: [
          require('../assets/images/Abuja/arts-and-crafts-village.webp'),
          require('../assets/images/Abuja/arts-and-crafts-village2.jpg'),
          require('../assets/images/Abuja/arts-and-crafts-village3.jpg'),
          require('../assets/images/Abuja/arts-and-crafts-village4.jpg'),
        ],
        description:
          ' Abuja Arts and Crafts Village is located at the Central Business District in Abuja , behind the Silverbird Cinema. It contains lots of artefacts and handicrafts here for visitors to see and even buy.',
        favorite: false,
        ratings: 5,
        latitude: '',
        longitude: '',
      },
      {
        id: 2,
        title: 'Millenium Park',
        image: require('../assets/images/Abuja/abj-mil-park.png'),
        destinationImages: [
          require('../assets/images/Abuja/abj-mil-park.png'),
          require('../assets/images/Abuja/abj-mil-park5.jpg'),
          require('../assets/images/Abuja/abj-mil-park2.jpg'),
          require('../assets/images/Abuja/abj-mil-park-4.jpg'),
          require('../assets/images/Abuja/abj-mil-park3.jpg'),
        ],
        description:
          'It is the largest public park in the capital city of Abuja. It is situated in the Maitama district. Her Majesty Queen Elizabeth II of the United Kingdom was the one who inaugurated the park that has become kids’ paradise and a relaxation haven.',
        favorite: false,
        ratings: 5,
        latitude: '9.0707',
        longitude: '7.4997',
      },
      {
        id: 3,
        title: 'Jabi Boat Lake Club',
        image: require('../assets/images/Abuja/jabi-boat-club2.jpg'),
        destinationImages: [
          require('../assets/images/Abuja/jabi-boat-club2.jpg'),
          require('../assets/images/Abuja/jabi-boat-lake-club.jpeg'),
          require('../assets/images/Abuja/jabi-boat-club.jpg'),
        ],
        description:
          'Jabi Boat Club (JBC), is a family entertainment center designed to offer water based recreational facilities for the people of Abuja and its environs as well as tourists, reaching out to all ages and inclinations.',
        favorite: false,
        ratings: 5,
        latitude: '9.07134',
        longitude: '7.41508',
      },
    ],
  },

  // Lagos

  {
    id: 8,
    title: 'Lagos',
    image: require('../assets/images/Lagos/lagos17.jpg'),
    destinations: [
      {
        id: 1,
        title: 'National Museum',
        image: require('../assets/images/Lagos/national-museum.png'),
        destinationImages: [
          require('../assets/images/Lagos/national-museum-lagos.jpg'),
          require('../assets/images/Lagos/national-museum2.png'),
          require('../assets/images/Lagos/national-museum3.jpg'),
        ],
        description:
          'Representing a country overflowing with diverse cultural heritage, the Nigerian national museum is the perfect expo of Nigerian history. Showcasing works of art dating back to the pre-independence era, the museum tells the story of Nigeria’s journey through years of progressive growth.',
        favorite: false,
        ratings: 5,
        latitude: '6.4443',
        longitude: '3.4037',
      },
      {
        id: 2,
        title: 'Lekki Conservation Center',
        image: require('../assets/images/Lagos/lekki-conservation.jpg'),
        destinationImages: [
          require('../assets/images/Lagos/lekki-conservation.jpg'),
          require('../assets/images/Lagos/lekki-con.jpg'),
          require('../assets/images/Lagos/lekki-conserv-center.jpg'),
          require('../assets/images/Lagos/Lekki-Conservation-Centre-6.jpg'),
        ],
        description:
          'Built in 1990, Lekki conservation centre covers a land area of 78 hectares. This nature hub is run by the Nigerian conservation foundation (NCF) and If you appreciate the sight of plants and animals in their natural habitat, then this place is a must visit for you. The NCF was set aside to sustain the natural habitation of plants, and animals as urbanization began leading to the intrusion of areas meant for them.',
        favorite: false,
        ratings: 5,
        latitude: '6.4415',
        longitude: '3.5358',
      },
      {
        id: 3,
        title: 'National Theater',
        image: require('../assets/images/Lagos/national-theater-lagos.jpg'),
        destinationImages: [
          require('../assets/images/Lagos/national-theater-lagos.jpg'),
          require('../assets/images/Lagos/national-theater.jpg'),
          require('../assets/images/Lagos/national-arts-theatre-lagos.jpg'),
        ],
        description:
          'An architectural masterpiece and cultural landmark, the edifice is one of the few properties of the country that has stood the test of time. Being home to everything art, the National Theatre provides an avenue for you to learn a lot more about art while having fun in its lush environment.',
        favorite: false,
        ratings: 5,
        latitude: '6.4765',
        longitude: '3.3695',
      },
    ],
  },

  // {
  //   id: 5,
  //   title: '',
  //   image: require('../'),
  //   destinations: [
  //     {
  //       id: 1,
  //       title: '',
  //       image: require('../'),
  //       destinationImages: [
  //         require('../'),
  //         require('../'),
  //         require('../')
  //       ],
  //       description:
  //         '',
  //       favorite: false,
  //       ratings: 5,
  //       latitude: '',
  //       longitude: ''
  //     },
  //     {
  //       id: 2,
  //       title: '',
  //       image: require('../'),
  //       destinationImages: [
  //         require('../'),
  //         require('../')
  //       ],
  //       description:
  //         '',
  //       favorite: false,
  //       ratings: 3,
  //       latitude: '',
  //       longitude: ''
  //     },
  //     {
  //       id: 3,
  //       title: '',
  //       image: require('../'),
  //       destinationImages: [
  //         require('../'),
  //         require('../')
  //       ],
  //       description:
  //         '',
  //       favorite: false,
  //       ratings: 2,
  //       latitude: '',
  //       longitude: ''
  //     },
  //   ]
  // },
];

export default nigerianStates;
