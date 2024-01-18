const express = require("express")
const router = express.Router()

router.get("/", async function (req, res) {
  const BOOKS = [
    {
      "author": "John Smith",
      "pages": 300,
      "title": "The Adventure Begins",
      "year": 2005
    },
    {
      "author": "Jane Doe",
      "pages": 250,
      "title": "Mysteries of the Cosmos",
      "year": 2010
    },
    {
      "author": "Robert Johnson",
      "pages": 400,
      "title": "Echoes of the Past",
      "year": 2018
    },
    {
      "author": "Emily White",
      "pages": 320,
      "title": "Whispers in the Wind",
      "year": 2007
    },
    {
      "author": "Michael Brown",
      "pages": 280,
      "title": "Silent Shadows",
      "year": 2015
    },
    {
      "author": "Sophia Turner",
      "pages": 350,
      "title": "Lost in Time",
      "year": 2022
    },
    {
      "author": "David Clark",
      "pages": 270,
      "title": "Journey to the Unknown",
      "year": 2013
    },
    {
      "author": "Emma Taylor",
      "pages": 380,
      "title": "Enchanted Forest",
      "year": 2011
    },
    {
      "author": "Christopher Green",
      "pages": 310,
      "title": "Realm of Dreams",
      "year": 2016
    },
    {
      "author": "Olivia Brown",
      "pages": 290,
      "title": "Beyond the Horizon",
      "year": 2009
    },
    {
      "author": "William Miller",
      "pages": 360,
      "title": "Echoes of Eternity",
      "year": 2014
    },
    {
      "author": "Ella Wilson",
      "pages": 330,
      "title": "The Hidden Key",
      "year": 2008
    },
    {
      "author": "Daniel Harris",
      "pages": 260,
      "title": "Serenade of Stars",
      "year": 2020
    },
    {
      "author": "Sophie Turner",
      "pages": 410,
      "title": "Whispers of Destiny",
      "year": 2019
    },
    {
      "author": "Ryan Adams",
      "pages": 340,
      "title": "Shadows of the Moon",
      "year": 2012
    },
    {
      "author": "Grace Martin",
      "pages": 300,
      "title": "Eternal Flame",
      "year": 2006
    },
    {
      "author": "Jacob White",
      "pages": 280,
      "title": "Secrets of the Stars",
      "year": 2017
    },
    {
      "author": "Lily Johnson",
      "pages": 370,
      "title": "The Crystal Labyrinth",
      "year": 2023
    },
    {
      "author": "Mia Turner",
      "pages": 320,
      "title": "Guardians of the Galaxy",
      "year": 2010
    },
    {
      "author": "Nathan Brown",
      "pages": 290,
      "title": "Echoes from the Abyss",
      "year": 2007
    },
    {
      "author": "Sarah Clark",
      "pages": 380,
      "title": "The Last Voyage",
      "year": 2015
    },
    {
      "author": "Matthew Taylor",
      "pages": 340,
      "title": "Wonders of the Universe",
      "year": 2018
    },
    {
      "author": "Chloe Green",
      "pages": 310,
      "title": "The Enchanted Garden",
      "year": 2013
    },
    {
      "author": "Ethan Wilson",
      "pages": 400,
      "title": "Chronicles of Destiny",
      "year": 2011
    },
    {
      "author": "Ava Harris",
      "pages": 330,
      "title": "Circles of Time",
      "year": 2016
    },
    {
      "author": "Zoe Miller",
      "pages": 270,
      "title": "The Lost City",
      "year": 2009
    },
    {
      "author": "James Turner",
      "pages": 360,
      "title": "Ripples in the Water",
      "year": 2014
    },
    {
      "author": "Madison White",
      "pages": 350,
      "title": "Songs of the Sky",
      "year": 2008
    },
    {
      "author": "Benjamin Clark",
      "pages": 300,
      "title": "Whispers of the Forest",
      "year": 2020
    },
    {
      "author": "Aiden Green",
      "pages": 380,
      "title": "The Celestial Symphony",
      "year": 2019
    },
    {
      "author": "Sophie Adams",
      "pages": 260,
      "title": "Spirals of Time",
      "year": 2012
    },
    {
      "author": "Henry Martin",
      "pages": 290,
      "title": "The Cosmic Odyssey",
      "year": 2017
    },
    {
      "author": "Isabella Wilson",
      "pages": 310,
      "title": "Echoes of Tomorrow",
      "year": 2023
    },
    {
      "author": "Dylan Harris",
      "pages": 340,
      "title": "Whispers in the Dark",
      "year": 2010
    },
    {
      "author": "Samantha Turner",
      "pages": 370,
      "title": "The Enchanted Mirror",
      "year": 2007
    },
    {
      "author": "Noah Brown",
      "pages": 320,
      "title": "Echoes of the Cosmos",
      "year": 2015
    },
    {
      "author": "Lily Clark",
      "pages": 280,
      "title": "The Silent Symphony",
      "year": 2018
    },
    {
      "author": "Carter Taylor",
      "pages": 260,
      "title": "Chronicles of the Unknown",
      "year": 2013
    },
    {
      "author": "Ella Green",
      "pages": 400,
      "title": "Journey to the Stars",
      "year": 2011
    }
  ]


  res.status(200).json({ BOOKS })
})

module.exports = router