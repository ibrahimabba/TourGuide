const nigerianStates = [
  {
    id: 1,
    title: 'Kaduna',
    image: require('../assets/images/Kajurucastle.jpg'),
    destinations: [
      {
        id: 1,
        title: 'Zaria emirate',
        image: require('../assets/images/zariaemirate1.jpg'),
        destinationImages: [
          require('../assets/images/zariaemirate1.jpg'),
          require('../assets/images/zariaemirate2.jpg'),
          require('../assets/images/zariaemirate3.jpg')
        ],
        description:
          'The ancient city of Zaria was established as the seat of the throne of Zazzau more than 700 years ago, while the whole kingdom of Zazzau is about 1000 years old and is among the oldest and most populous kingdoms in Northern Nigerian.',
        favorite: false,
        ratings: 5,
        latitude: '11.085541',
        longitude: '7.719945'
      },
      {
        id: 2,
        title: 'Kajuru Castle',
        image: require('../assets/images/Kajurucastle.jpg'),
        destinationImages: [
          require('../assets/images/Kajurucastle.jpg'),
          require('../assets/images/Kajurucastle2.jpg')
        ],
        description:
          'kajuru Castle is an exclusive and luxurious total getaway built in an early medieval style at Kajuru village in the trade city of Kaduna. This gorgeous architectural masterpiece with breathtaking ambience is set upon elevated peaks with staggering views. Kajuru Castle is styled in a European and clearly German way with a baronial hall, complete with suits of armour.',
        favorite: false,
        ratings: 3,
        latitude: '10.3127° N',
        longitude: '10.3127° N'
      },
      {
        id: 3,
        title: 'Gamji Park',
        image: require('../assets/images/gamji1.jpg'),
        destinationImages: [
          require('../assets/images/gamji1.jpg'),
          require('../assets/images/gamji2.jpg')
        ],
        description:
          'The Gamji park has graduated from a simple garden to a full-blown tourist attraction and recreational centre. Kofar Gamji covers an area of 7000 metres and is decorated with architectural designs and sculptures as well as the magnificent Hall. There is sparse vegetation of mangrove and orchard trees. The dotted islands formed by River Kaduna that runs through the park as well as assorted flowers emphasize its beauty.',
        favorite: false,
        ratings: 2,
        latitude: '10.505703° N',
        longitude: '7.4falsefalse50919°N'
      },
      {
        id: 4,
        title: 'Ancient Nok Settlement',
        image: require('../assets/images/ancientNokSettlement.jpg'),
        destinationImages: [
          require('../assets/images/ancientNokSettlement.jpg'),
          require('../assets/images/ancientNokSettlement2.jpg')
        ],
        description:
          'The Nok settlement is an ancient civilization, one of the first that usher the iron age, it is a fascinating wonder of the ingenious nature of the Nok people. From the rock shelters to the Nok terracotta sprinkled around, everything here is designed to blow your mind away. Come with a camera because the will a lot of things to capture.',
        favorite: false,
        ratings: 1,
        latitude: '9.472090° N',
        longitude: '8.017960° N'
      }
    ]
  },


  {
    id: 2,
    title: 'Bauchi',
    image: require('../assets/images/bauchi.jpg'),
    destinations: [
      {
        id: 1,
        title: 'Yankari Game Reserve',
        image: require('../assets/images/yankari1.jpg'),
        destinationImages: [
          require('../assets/images/yankari1.jpg'),
          require('../assets/images/yankari2.jpg'),
          require('../assets/images/yankari3.jpg'),
          require('../assets/images/yankari4.jpg'),
          require('../assets/images/yankari5.jpg')
        ],
        description:
          'The park is home to the largest collection of elephants in Nigeria and one of the largest in West Africa.  So yes, a large number of large mammals. The reserve is completely covered by Sudan savanna. Apart from the elephant, other animals that can be found here include impalas, leopards, exotic birds and baboons just to mention a few. Apart from seeing the animals, other activities at the park include mountain climbing and picnicking with family.',
        favorite: false,
        ratings: 2,
        latitude: '9.8543',
        longitude: '10.3030'
      },
      {
        id: 2,
        title: 'Wikki Warm Spring',
        image: require('../assets/images/wakki1.jpg'),
        destinationImages: [
          require('../assets/images/wakki1.jpg'),
          require('../assets/images/wakki2.jpg'),
          require('../assets/images/wakki3.jpg')
        ],
        description:
          'Although it is located in Yankari National Park, the Wikki warm spring deserves a mention of its own. The spring occurs naturally as a result of the geothermal activity that occurs below the park. The spring has a consistent temperature of 31°C with crystal clear water that flows gently into a sparkling lake. The lake is 200 metres long, 10 metres wide and about 2 metres deep making it perfect for a quick swim so be sure to bring along a swimming trunk.',
        favorite: false,
        ratings: 3,
        latitude: '9.8543',
        longitude: '10.3030'
      },
      {
        id: 3,
        title: 'Tunga Dutse',
        image: require('../assets/images/Tunga1.jpg'),
        destinationImages: [
          require('../assets/images/Tunga1.jpg'),
          require('../assets/images/Tunga2.jpg'),
          require('../assets/images/Tunga3.jpg')
        ],
        description:
          'Tunga Dutse is popular for the ancient engraving on the rocks. If you don’t believe me, look at the writing on the wall. The writings are large and cover a huge area on the sandstone embankment. The meaning and age of the inscriptions are yet to be determined but they are one of the most significant wall writings to be found in Bauchi and Nigeria in general.',
        favorite: false,
        ratings: 4,
        latitude: '9.8543',
        longitude: '10.3030'
      }
    ]
  }

];

export default nigerianStates;
