// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
    rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data));
    }),
];

// "A New Hope",
//     "The Empire Strikes Back",
//     "Return of the Jedi",
//     "The Phantom Menace",
//     "Attack of the Clones",
//     "Revenge of the Sith",

export const data = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "http://swapi.dev/api/planets/1/",
        films: [
            "A New Hope",
            "The Empire Strikes Back",
            "Return of the Jedi",
            "Revenge of the Sith",
        ],
        species: [],
        vehicles: [
            "http://swapi.dev/api/vehicles/14/",
            "http://swapi.dev/api/vehicles/30/",
        ],
        starships: [
            "http://swapi.dev/api/starships/12/",
            "http://swapi.dev/api/starships/22/",
        ],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        url: "http://swapi.dev/api/people/1/",
    },
    {
        name: "C-3PO",
        height: "167",
        mass: "75",
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a",
        homeworld: "http://swapi.dev/api/planets/1/",
        films: [
            "A New Hope",
            "The Empire Strikes Back",
            "Return of the Jedi",
            "The Phantom Menace",
            "Attack of the Clones",
            "Revenge of the Sith",
        ],
        species: ["http://swapi.dev/api/species/2/"],
        vehicles: [],
        starships: [],
        created: "2014-12-10T15:10:51.357000Z",
        edited: "2014-12-20T21:17:50.309000Z",
        url: "http://swapi.dev/api/people/2/",
    },
    {
        name: "R2-D2",
        height: "96",
        mass: "32",
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a",
        homeworld: "http://swapi.dev/api/planets/8/",
        films: [
            "A New Hope",
            "The Empire Strikes Back",
            "Return of the Jedi",
            "The Phantom Menace",
            "Attack of the Clones",
            "Revenge of the Sith",
        ],
        species: ["http://swapi.dev/api/species/2/"],
        vehicles: [],
        starships: [],
        created: "2014-12-10T15:11:50.376000Z",
        edited: "2014-12-20T21:17:50.311000Z",
        url: "http://swapi.dev/api/people/3/",
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male",
        homeworld: "http://swapi.dev/api/planets/1/",

        films: [
            "A New Hope",
            "The Empire Strikes Back",
            "Return of the Jedi",
            "Revenge of the Sith",
        ],
        species: [],
        vehicles: [],
        starships: ["http://swapi.dev/api/starships/13/"],
        created: "2014-12-10T15:18:20.704000Z",
        edited: "2014-12-20T21:17:50.313000Z",
        url: "http://swapi.dev/api/people/4/",
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female",
        homeworld: "http://swapi.dev/api/planets/2/",
        films: [
            "A New Hope",
            "The Empire Strikes Back",
            "Return of the Jedi",
            "Revenge of the Sith",
        ],
        species: [],
        vehicles: ["http://swapi.dev/api/vehicles/30/"],
        starships: [],
        created: "2014-12-10T15:20:09.791000Z",
        edited: "2014-12-20T21:17:50.315000Z",
        url: "http://swapi.dev/api/people/5/",
    },
    // {
    //     name: "Owen Lars",
    //     height: "178",
    //     mass: "120",
    //     hair_color: "brown, grey",
    //     skin_color: "light",
    //     eye_color: "blue",
    //     birth_year: "52BBY",
    //     gender: "male",
    //     homeworld: "http://swapi.dev/api/planets/1/",
    //     films: ["A New Hope", "Attack of the Clones", "Revenge of the Sith"],
    //     species: [],
    //     vehicles: [],
    //     starships: [],
    //     created: "2014-12-10T15:52:14.024000Z",
    //     edited: "2014-12-20T21:17:50.317000Z",
    //     url: "http://swapi.dev/api/people/6/",
    // },
    // {
    //     "name": "Beru Whitesun Lars",
    //     "height": "165",
    //     "mass": "75",
    //     "hair_color": "brown",
    //     "skin_color": "light",
    //     "eye_color": "blue",
    //     "birth_year": "47BBY",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/1/",
    //     "films": [
    //         "A New Hope",
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-10T15:53:41.121000Z",
    //     "edited": "2014-12-20T21:17:50.319000Z",
    //     "url": "https://swapi.dev/api/people/7/"
    // },
    // {
    //     "name": "R5-D4",
    //     "height": "97",
    //     "mass": "32",
    //     "hair_color": "n/a",
    //     "skin_color": "white, red",
    //     "eye_color": "red",
    //     "birth_year": "unknown",
    //     "gender": "n/a",
    //     "homeworld": "https://swapi.dev/api/planets/1/",
    //     "films": [
    //         "A New Hope"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/2/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-10T15:57:50.959000Z",
    //     "edited": "2014-12-20T21:17:50.321000Z",
    //     "url": "https://swapi.dev/api/people/8/"
    // },
    // {
    //     "name": "Biggs Darklighter",
    //     "height": "183",
    //     "mass": "84",
    //     "hair_color": "black",
    //     "skin_color": "light",
    //     "eye_color": "brown",
    //     "birth_year": "24BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/1/",
    //     "films": [
    //         "A New Hope"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [
    //         "https://swapi.dev/api/starships/12/"
    //     ],
    //     "created": "2014-12-10T15:59:50.509000Z",
    //     "edited": "2014-12-20T21:17:50.323000Z",
    //     "url": "https://swapi.dev/api/people/9/"
    // },
    {
        "name": "Obi-Wan Kenobi",
        "height": "182",
        "mass": "77",
        "hair_color": "auburn, white",
        "skin_color": "fair",
        "eye_color": "blue-gray",
        "birth_year": "57BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/20/",
        "films": [
            "A New Hope",
            "The Empire Strikes Back",
            "Return of the Jedi",
            "The Phantom Menace",
            "Attack of the Clones",
            "Revenge of the Sith"
        ],
        "species": [],
        "vehicles": [
            "https://swapi.dev/api/vehicles/38/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/48/",
            "https://swapi.dev/api/starships/59/",
            "https://swapi.dev/api/starships/64/",
            "https://swapi.dev/api/starships/65/",
            "https://swapi.dev/api/starships/74/"
        ],
        "created": "2014-12-10T16:16:29.192000Z",
        "edited": "2014-12-20T21:17:50.325000Z",
        "url": "https://swapi.dev/api/people/10/"
    }, {
        "name": "Anakin Skywalker",
        "height": "188",
        "mass": "84",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "41.9BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "A New Hope",
            "The Empire Strikes Back",
            "Return of the Jedi",
            "The Phantom Menace",
            "Attack of the Clones",
            "Revenge of the Sith",
        ],
        "species": [],
        "vehicles": [
            "https://swapi.dev/api/vehicles/44/",
            "https://swapi.dev/api/vehicles/46/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/39/",
            "https://swapi.dev/api/starships/59/",
            "https://swapi.dev/api/starships/65/"
        ],
        "created": "2014-12-10T16:20:44.310000Z",
        "edited": "2014-12-20T21:17:50.327000Z",
        "url": "https://swapi.dev/api/people/11/"
    },
    {
        //     "name": "Wilhuff Tarkin",
        //     "height": "180",
        //     "mass": "unknown",
        //     "hair_color": "auburn, grey",
        //     "skin_color": "fair",
        //     "eye_color": "blue",
        //     "birth_year": "64BBY",
        //     "gender": "male",
        //     "homeworld": "https://swapi.dev/api/planets/21/",
        //     "films": [
        //         "A New Hope",
        //         "Revenge of the Sith"
        //     ],
        //     "species": [],
        //     "vehicles": [],
        //     "starships": [],
        //     "created": "2014-12-10T16:26:56.138000Z",
        //     "edited": "2014-12-20T21:17:50.330000Z",
        //     "url": "https://swapi.dev/api/people/12/"
        // },

        "name": "Chewbacca",
        "height": "228",
        "mass": "112",
        "hair_color": "brown",
        "skin_color": "unknown",
        "eye_color": "blue",
        "birth_year": "200BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/14/",
        "films": [
            "A New Hope",
            "The Empire Strikes Back",
            "Return of the Jedi",
            "Revenge of the Sith",
        ],
        "species": [
            "https://swapi.dev/api/species/3/"
        ],
        "vehicles": [
            "https://swapi.dev/api/vehicles/19/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/10/",
            "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-10T16:42:45.066000Z",
        "edited": "2014-12-20T21:17:50.332000Z",
        "url": "https://swapi.dev/api/people/13/"
    },
    {
        "name": "Han Solo",
        "height": "180",
        "mass": "80",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "brown",
        "birth_year": "29BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/22/",
        "films": [
            "A New Hope",
            "The Empire Strikes Back",
            "Return of the Jedi",
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "https://swapi.dev/api/starships/10/",
            "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-10T16:49:14.582000Z",
        "edited": "2014-12-20T21:17:50.334000Z",
        "url": "https://swapi.dev/api/people/14/"
    },
    // {
    //     "name": "Greedo",
    //     "height": "173",
    //     "mass": "74",
    //     "hair_color": "n/a",
    //     "skin_color": "green",
    //     "eye_color": "black",
    //     "birth_year": "44BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/23/",
    //     "films": [
    //         "A New Hope"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/4/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-10T17:03:30.334000Z",
    //     "edited": "2014-12-20T21:17:50.336000Z",
    //     "url": "https://swapi.dev/api/people/15/"
    // },
    // {
    //     "name": "Jabba Desilijic Tiure",
    //     "height": "175",
    //     "mass": "1,358",
    //     "hair_color": "n/a",
    //     "skin_color": "green-tan, brown",
    //     "eye_color": "orange",
    //     "birth_year": "600BBY",
    //     "gender": "hermaphrodite",
    //     "homeworld": "https://swapi.dev/api/planets/24/",
    //     "films": [
    //         "A New Hope",
    //         "Return of the Jedi",
    //         "The Phantom Menace"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/5/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-10T17:11:31.638000Z",
    //     "edited": "2014-12-20T21:17:50.338000Z",
    //     "url": "https://swapi.dev/api/people/16/"
    // },
    // {
    //     "name": "Wedge Antilles",
    //     "height": "170",
    //     "mass": "77",
    //     "hair_color": "brown",
    //     "skin_color": "fair",
    //     "eye_color": "hazel",
    //     "birth_year": "21BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/22/",
    //     "films": [
    //         "A New Hope",
    //         "The Empire Strikes Back",
    //         "Return of the Jedi"
    //     ],
    //     "species": [],
    //     "vehicles": [
    //         "https://swapi.dev/api/vehicles/14/"
    //     ],
    //     "starships": [
    //         "https://swapi.dev/api/starships/12/"
    //     ],
    //     "created": "2014-12-12T11:08:06.469000Z",
    //     "edited": "2014-12-20T21:17:50.341000Z",
    //     "url": "https://swapi.dev/api/people/18/"
    // },
    // {
    //     "name": "Jek Tono Porkins",
    //     "height": "180",
    //     "mass": "110",
    //     "hair_color": "brown",
    //     "skin_color": "fair",
    //     "eye_color": "blue",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/26/",
    //     "films": [
    //         "A New Hope"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [
    //         "https://swapi.dev/api/starships/12/"
    //     ],
    //     "created": "2014-12-12T11:16:56.569000Z",
    //     "edited": "2014-12-20T21:17:50.343000Z",
    //     "url": "https://swapi.dev/api/people/19/"
    // },
    {
        "name": "Yoda",
        "height": "66",
        "mass": "17",
        "hair_color": "white",
        "skin_color": "green",
        "eye_color": "brown",
        "birth_year": "896BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/28/",
        "films": [
            "The Empire Strikes Back",
            "Return of the Jedi",
            "The Phantom Menace",
            "Attack of the Clones",
            "Revenge of the Sith",
        ],
        "species": [
            "https://swapi.dev/api/species/6/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-15T12:26:01.042000Z",
        "edited": "2014-12-20T21:17:50.345000Z",
        "url": "https://swapi.dev/api/people/20/"
    },
    {
        "name": "Palpatine",
        "height": "170",
        "mass": "75",
        "hair_color": "grey",
        "skin_color": "pale",
        "eye_color": "yellow",
        "birth_year": "82BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/8/",
        "films": [
            "The Empire Strikes Back",
            "Return of the Jedi",
            "The Phantom Menace",
            "Attack of the Clones",
            "Revenge of the Sith",
        ],
        "species": [],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-15T12:48:05.971000Z",
        "edited": "2014-12-20T21:17:50.347000Z",
        "url": "https://swapi.dev/api/people/21/"
    }, {
        "name": "Boba Fett",
        "height": "183",
        "mass": "78.2",
        "hair_color": "black",
        "skin_color": "fair",
        "eye_color": "brown",
        "birth_year": "31.5BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/10/",
        "films": [
            "The Empire Strikes Back",
            "Return of the Jedi",
            "Attack of the Clones"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "https://swapi.dev/api/starships/21/"
        ],
        "created": "2014-12-15T12:49:32.457000Z",
        "edited": "2014-12-20T21:17:50.349000Z",
        "url": "https://swapi.dev/api/people/22/"
    },
    // {
    //     "name": "IG-88",
    //     "height": "200",
    //     "mass": "140",
    //     "hair_color": "none",
    //     "skin_color": "metal",
    //     "eye_color": "red",
    //     "birth_year": "15BBY",
    //     "gender": "none",
    //     "homeworld": "https://swapi.dev/api/planets/28/",
    //     "films": [
    //         "The Empire Strikes Back"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/2/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-15T12:51:10.076000Z",
    //     "edited": "2014-12-20T21:17:50.351000Z",
    //     "url": "https://swapi.dev/api/people/23/"
    // },
    // {
    //     "name": "Bossk",
    //     "height": "190",
    //     "mass": "113",
    //     "hair_color": "none",
    //     "skin_color": "green",
    //     "eye_color": "red",
    //     "birth_year": "53BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/29/",
    //     "films": [

    //         "The Empire Strikes Back"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/7/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-15T12:53:49.297000Z",
    //     "edited": "2014-12-20T21:17:50.355000Z",
    //     "url": "https://swapi.dev/api/people/24/"
    // },
    // {
    //     "name": "Lando Calrissian",
    //     "height": "177",
    //     "mass": "79",
    //     "hair_color": "black",
    //     "skin_color": "dark",
    //     "eye_color": "brown",
    //     "birth_year": "31BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/30/",
    //     "films": [
    //         "The Empire Strikes Back",
    //         "Return of the Jedi"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [
    //         "https://swapi.dev/api/starships/10/"
    //     ],
    //     "created": "2014-12-15T12:56:32.683000Z",
    //     "edited": "2014-12-20T21:17:50.357000Z",
    //     "url": "https://swapi.dev/api/people/25/"
    // },
    // {
    //     "name": "Lobot",
    //     "height": "175",
    //     "mass": "79",
    //     "hair_color": "none",
    //     "skin_color": "light",
    //     "eye_color": "blue",
    //     "birth_year": "37BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/6/",
    //     "films": [
    //         "The Empire Strikes Back"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-15T13:01:57.178000Z",
    //     "edited": "2014-12-20T21:17:50.359000Z",
    //     "url": "https://swapi.dev/api/people/26/"
    // },
    // {
    //     "name": "Ackbar",
    //     "height": "180",
    //     "mass": "83",
    //     "hair_color": "none",
    //     "skin_color": "brown mottle",
    //     "eye_color": "orange",
    //     "birth_year": "41BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/31/",
    //     "films": [
    //         "Return of the Jedi"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/8/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-18T11:07:50.584000Z",
    //     "edited": "2014-12-20T21:17:50.362000Z",
    //     "url": "https://swapi.dev/api/people/27/"
    // },
    // {
    //     "name": "Mon Mothma",
    //     "height": "150",
    //     "mass": "unknown",
    //     "hair_color": "auburn",
    //     "skin_color": "fair",
    //     "eye_color": "blue",
    //     "birth_year": "48BBY",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/32/",
    //     "films": [
    //         "Return of the Jedi"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-18T11:12:38.895000Z",
    //     "edited": "2014-12-20T21:17:50.364000Z",
    //     "url": "https://swapi.dev/api/people/28/"
    // },
    // {
    //     "name": "Arvel Crynyd",
    //     "height": "unknown",
    //     "mass": "unknown",
    //     "hair_color": "brown",
    //     "skin_color": "fair",
    //     "eye_color": "brown",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/28/",
    //     "films": [
    //         "Return of the Jedi"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [
    //         "https://swapi.dev/api/starships/28/"
    //     ],
    //     "created": "2014-12-18T11:16:33.020000Z",
    //     "edited": "2014-12-20T21:17:50.367000Z",
    //     "url": "https://swapi.dev/api/people/29/"
    // },
    // {
    //     "name": "Wicket Wystri Warrick",
    //     "height": "88",
    //     "mass": "20",
    //     "hair_color": "brown",
    //     "skin_color": "brown",
    //     "eye_color": "brown",
    //     "birth_year": "8BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/7/",
    //     "films": [
    //         "Return of the Jedi"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/9/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-18T11:21:58.954000Z",
    //     "edited": "2014-12-20T21:17:50.369000Z",
    //     "url": "https://swapi.dev/api/people/30/"
    // },
    // {
    //     "name": "Nien Nunb",
    //     "height": "160",
    //     "mass": "68",
    //     "hair_color": "none",
    //     "skin_color": "grey",
    //     "eye_color": "black",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/33/",
    //     "films": [
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/10/"
    //     ],
    //     "vehicles": [],
    //     "starships": [
    //         "https://swapi.dev/api/starships/10/"
    //     ],
    //     "created": "2014-12-18T11:26:18.541000Z",
    //     "edited": "2014-12-20T21:17:50.371000Z",
    //     "url": "https://swapi.dev/api/people/31/"
    // }, 
    {
        "name": "Qui-Gon Jinn",
        "height": "193",
        "mass": "89",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "92BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/28/",
        "films": [
            "The Phantom Menace",
        ],
        "species": [],
        "vehicles": [
            "https://swapi.dev/api/vehicles/38/"
        ],
        "starships": [],
        "created": "2014-12-19T16:54:53.618000Z",
        "edited": "2014-12-20T21:17:50.375000Z",
        "url": "https://swapi.dev/api/people/32/"
    },
    // {
    //     "name": "Nute Gunray",
    //     "height": "191",
    //     "mass": "90",
    //     "hair_color": "none",
    //     "skin_color": "mottled green",
    //     "eye_color": "red",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/18/",
    //     "films": [
    //         "The Phantom Menace",
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/11/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-19T17:05:57.357000Z",
    //     "edited": "2014-12-20T21:17:50.377000Z",
    //     "url": "https://swapi.dev/api/people/33/"
    // },
    // {
    //     "name": "Finis Valorum",
    //     "height": "170",
    //     "mass": "unknown",
    //     "hair_color": "blond",
    //     "skin_color": "fair",
    //     "eye_color": "blue",
    //     "birth_year": "91BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/9/",
    //     "films": [
    //         "A New Hope"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-19T17:21:45.915000Z",
    //     "edited": "2014-12-20T21:17:50.379000Z",
    //     "url": "https://swapi.dev/api/people/34/"
    // },
    // {
    //     "name": "Padmé Amidala",
    //     "height": "185",
    //     "mass": "45",
    //     "hair_color": "brown",
    //     "skin_color": "light",
    //     "eye_color": "brown",
    //     "birth_year": "46BBY",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/8/",
    //     "films": [
    //         "The Phantom Menace",
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [
    //         "https://swapi.dev/api/starships/39/",
    //         "https://swapi.dev/api/starships/49/",
    //         "https://swapi.dev/api/starships/64/"
    //     ],
    //     "created": "2014-12-19T17:28:26.926000Z",
    //     "edited": "2014-12-20T21:17:50.381000Z",
    //     "url": "https://swapi.dev/api/people/35/"
    // },
    // {
    //     "name": "Jar Jar Binks",
    //     "height": "196",
    //     "mass": "66",
    //     "hair_color": "none",
    //     "skin_color": "orange",
    //     "eye_color": "orange",
    //     "birth_year": "52BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/8/",
    //     "films": [
    //         "The Phantom Menace",
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/12/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-19T17:29:32.489000Z",
    //     "edited": "2014-12-20T21:17:50.383000Z",
    //     "url": "https://swapi.dev/api/people/36/"
    // },

    // {
    //     "name": "Roos Tarpals",
    //     "height": "224",
    //     "mass": "82",
    //     "hair_color": "none",
    //     "skin_color": "grey",
    //     "eye_color": "orange",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/8/",
    //     "films": [
    //         "The Phantom Menace"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/12/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-19T17:32:56.741000Z",
    //     "edited": "2014-12-20T21:17:50.385000Z",
    //     "url": "https://swapi.dev/api/people/37/"
    // },
    // {
    //     "name": "Rugor Nass",
    //     "height": "206",
    //     "mass": "unknown",
    //     "hair_color": "none",
    //     "skin_color": "green",
    //     "eye_color": "orange",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/8/",
    //     "films": [
    //         "The Phantom Menace"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/12/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-19T17:33:38.909000Z",
    //     "edited": "2014-12-20T21:17:50.388000Z",
    //     "url": "https://swapi.dev/api/people/38/"
    // },
    // {
    //     "name": "Ric Olié",
    //     "height": "183",
    //     "mass": "unknown",
    //     "hair_color": "brown",
    //     "skin_color": "fair",
    //     "eye_color": "blue",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/8/",
    //     "films": [
    //         "The Phantom Menace"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [
    //         "https://swapi.dev/api/starships/40/"
    //     ],
    //     "created": "2014-12-19T17:45:01.522000Z",
    //     "edited": "2014-12-20T21:17:50.392000Z",
    //     "url": "https://swapi.dev/api/people/39/"
    // },
    // {
    //     "name": "Watto",
    //     "height": "137",
    //     "mass": "unknown",
    //     "hair_color": "black",
    //     "skin_color": "blue, grey",
    //     "eye_color": "yellow",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/34/",
    //     "films": [
    //         "The Phantom Menace",
    //         "Attack of the Clones"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/13/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-19T17:48:54.647000Z",
    //     "edited": "2014-12-20T21:17:50.395000Z",
    //     "url": "https://swapi.dev/api/people/40/"
    // },
    // {
    //     "name": "Sebulba",
    //     "height": "112",
    //     "mass": "40",
    //     "hair_color": "none",
    //     "skin_color": "grey, red",
    //     "eye_color": "orange",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/35/",
    //     "films": [
    //         "https://swapi.dev/api/films/4/"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/14/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-19T17:53:02.586000Z",
    //     "edited": "2014-12-20T21:17:50.397000Z",
    //     "url": "https://swapi.dev/api/people/41/"
    // }, {
    //     "name": "Quarsh Panaka",
    //     "height": "183",
    //     "mass": "unknown",
    //     "hair_color": "black",
    //     "skin_color": "dark",
    //     "eye_color": "brown",
    //     "birth_year": "62BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/8/",
    //     "films": [
    //         "The Phantom Menace"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-19T17:55:43.348000Z",
    //     "edited": "2014-12-20T21:17:50.399000Z",
    //     "url": "https://swapi.dev/api/people/42/"
    // },
    // {
    //     "name": "Shmi Skywalker",
    //     "height": "163",
    //     "mass": "unknown",
    //     "hair_color": "black",
    //     "skin_color": "fair",
    //     "eye_color": "brown",
    //     "birth_year": "72BBY",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/1/",
    //     "films": [
    //         "The Phantom Menace",
    //         "Attack of the Clones"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-19T17:57:41.191000Z",
    //     "edited": "2014-12-20T21:17:50.401000Z",
    //     "url": "https://swapi.dev/api/people/43/"
    // },
    {
        "name": "Darth Maul",
        "height": "175",
        "mass": "80",
        "hair_color": "none",
        "skin_color": "red",
        "eye_color": "yellow",
        "birth_year": "54BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/36/",
        "films": [
            "The Phantom Menace"
        ],
        "species": [
            "https://swapi.dev/api/species/22/"
        ],
        "vehicles": [
            "https://swapi.dev/api/vehicles/42/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/41/"
        ],
        "created": "2014-12-19T18:00:41.929000Z",
        "edited": "2014-12-20T21:17:50.403000Z",
        "url": "https://swapi.dev/api/people/44/"
    },
    // {
    //     "name": "Bib Fortuna",
    //     "height": "180",
    //     "mass": "unknown",
    //     "hair_color": "none",
    //     "skin_color": "pale",
    //     "eye_color": "pink",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/37/",
    //     "films": [
    //         "Return of the Jedi",
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/15/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T09:47:02.512000Z",
    //     "edited": "2014-12-20T21:17:50.407000Z",
    //     "url": "https://swapi.dev/api/people/45/"
    // },
    // {
    //     "name": "Aayla Secura",
    //     "height": "178",
    //     "mass": "55",
    //     "hair_color": "none",
    //     "skin_color": "blue",
    //     "eye_color": "hazel",
    //     "birth_year": "48BBY",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/37/",
    //     "films": [
    //         "The Phantom Menace",
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/15/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T09:48:01.172000Z",
    //     "edited": "2014-12-20T21:17:50.409000Z",
    //     "url": "https://swapi.dev/api/people/46/"
    // },
    // {
    //     "name": "Ratts Tyerell",
    //     "height": "79",
    //     "mass": "15",
    //     "hair_color": "none",
    //     "skin_color": "grey, blue",
    //     "eye_color": "unknown",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/38/",
    //     "films": [

    //         "The Phantom Menace"],

    //     "species": [
    //         "https://swapi.dev/api/species/16/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T09:53:15.086000Z",
    //     "edited": "2014-12-20T21:17:50.410000Z",
    //     "url": "https://swapi.dev/api/people/47/"
    // },
    // {
    //     "name": "Dud Bolt",
    //     "height": "94",
    //     "mass": "45",
    //     "hair_color": "none",
    //     "skin_color": "blue, grey",
    //     "eye_color": "yellow",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/39/",
    //     "films": [
    //         "The Phantom Menace"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/17/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T09:57:31.858000Z",
    //     "edited": "2014-12-20T21:17:50.414000Z",
    //     "url": "https://swapi.dev/api/people/48/"
    // },
    // {
    //     "name": "Gasgano",
    //     "height": "122",
    //     "mass": "unknown",
    //     "hair_color": "none",
    //     "skin_color": "white, blue",
    //     "eye_color": "black",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/40/",
    //     "films": [
    //         "The Phantom Menace"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/18/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T10:02:12.223000Z",
    //     "edited": "2014-12-20T21:17:50.416000Z",
    //     "url": "https://swapi.dev/api/people/49/"
    // },
    // {
    //     "name": "Ben Quadinaros",
    //     "height": "163",
    //     "mass": "65",
    //     "hair_color": "none",
    //     "skin_color": "grey, green, yellow",
    //     "eye_color": "orange",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/41/",
    //     "films": [
    //         "The Phantom Menace"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/19/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T10:08:33.777000Z",
    //     "edited": "2014-12-20T21:17:50.417000Z",
    //     "url": "https://swapi.dev/api/people/50/"
    // },
    {
        "name": "Mace Windu",
        "height": "188",
        "mass": "84",
        "hair_color": "none",
        "skin_color": "dark",
        "eye_color": "brown",
        "birth_year": "72BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/42/",
        "films": [
            "The Phantom Menace",
            "Attack of the Clones",
            "Revenge of the Sith"
        ],
        "species": [],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-20T10:12:30.846000Z",
        "edited": "2014-12-20T21:17:50.420000Z",
        "url": "https://swapi.dev/api/people/51/"
    },

    // {
    //     "name": "Ki-Adi-Mundi",
    //     "height": "198",
    //     "mass": "82",
    //     "hair_color": "white",
    //     "skin_color": "pale",
    //     "eye_color": "yellow",
    //     "birth_year": "92BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/43/",
    //     "films": [
    //         "The Phantom Menace",
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/20/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T10:15:32.293000Z",
    //     "edited": "2014-12-20T21:17:50.422000Z",
    //     "url": "https://swapi.dev/api/people/52/"
    // },
    // {
    //     "name": "Kit Fisto",
    //     "height": "196",
    //     "mass": "87",
    //     "hair_color": "none",
    //     "skin_color": "green",
    //     "eye_color": "black",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/44/",
    //     "films": [
    //         "The Phantom Menace",
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/21/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T10:18:57.202000Z",
    //     "edited": "2014-12-20T21:17:50.424000Z",
    //     "url": "https://swapi.dev/api/people/53/"
    // },
    // {
    //     "name": "Eeth Koth",
    //     "height": "171",
    //     "mass": "unknown",
    //     "hair_color": "black",
    //     "skin_color": "brown",
    //     "eye_color": "brown",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/45/",
    //     "films": [
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/22/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T10:26:47.902000Z",
    //     "edited": "2014-12-20T21:17:50.427000Z",
    //     "url": "https://swapi.dev/api/people/54/"
    // },
    // {
    //     "name": "Adi Gallia",
    //     "height": "184",
    //     "mass": "50",
    //     "hair_color": "none",
    //     "skin_color": "dark",
    //     "eye_color": "blue",
    //     "birth_year": "unknown",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/9/",
    //     "films": [
    //         "The Phantom Menace",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/23/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T10:29:11.661000Z",
    //     "edited": "2014-12-20T21:17:50.432000Z",
    //     "url": "https://swapi.dev/api/people/55/"
    // },
    // {
    //     "name": "Saesee Tiin",
    //     "height": "188",
    //     "mass": "unknown",
    //     "hair_color": "none",
    //     "skin_color": "pale",
    //     "eye_color": "orange",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/47/",
    //     "films": [
    //         "The Phantom Menace",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/24/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T10:32:11.669000Z",
    //     "edited": "2014-12-20T21:17:50.434000Z",
    //     "url": "https://swapi.dev/api/people/56/"
    // },
    // {
    //     "name": "Yarael Poof",
    //     "height": "264",
    //     "mass": "unknown",
    //     "hair_color": "none",
    //     "skin_color": "white",
    //     "eye_color": "yellow",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/48/",
    //     "films": [
    //         "The Phantom Menace"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/25/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T10:34:48.725000Z",
    //     "edited": "2014-12-20T21:17:50.437000Z",
    //     "url": "https://swapi.dev/api/people/57/"
    // },
    // {
    //     "name": "Plo Koon",
    //     "height": "188",
    //     "mass": "80",
    //     "hair_color": "none",
    //     "skin_color": "orange",
    //     "eye_color": "black",
    //     "birth_year": "22BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/49/",
    //     "films": [
    //         "The Phantom Menace",
    //         "Attack of the Clones",
    //         "Revenge of the Sith",
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/26/"
    //     ],
    //     "vehicles": [],
    //     "starships": [
    //         "https://swapi.dev/api/starships/48/"
    //     ],
    //     "created": "2014-12-20T10:49:19.859000Z",
    //     "edited": "2014-12-20T21:17:50.439000Z",
    //     "url": "https://swapi.dev/api/people/58/"
    // },
    // {
    //     "name": "Mas Amedda",
    //     "height": "196",
    //     "mass": "unknown",
    //     "hair_color": "none",
    //     "skin_color": "blue",
    //     "eye_color": "blue",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/50/",
    //     "films": [
    //         "Attack of the Clones"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/27/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T10:53:26.457000Z",
    //     "edited": "2014-12-20T21:17:50.442000Z",
    //     "url": "https://swapi.dev/api/people/59/"
    // },
    // {
    //     "name": "Gregar Typho",
    //     "height": "185",
    //     "mass": "85",
    //     "hair_color": "black",
    //     "skin_color": "dark",
    //     "eye_color": "brown",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/8/",
    //     "films": [
    //         "Attack of the Clones"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [
    //         "https://swapi.dev/api/starships/39/"
    //     ],
    //     "created": "2014-12-20T11:10:10.381000Z",
    //     "edited": "2014-12-20T21:17:50.445000Z",
    //     "url": "https://swapi.dev/api/people/60/"
    // },
    // {
    //     "name": "Cordé",
    //     "height": "157",
    //     "mass": "unknown",
    //     "hair_color": "brown",
    //     "skin_color": "light",
    //     "eye_color": "brown",
    //     "birth_year": "unknown",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/8/",
    //     "films": [
    //         "https://swapi.dev/api/films/5/"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T11:11:39.630000Z",
    //     "edited": "2014-12-20T21:17:50.449000Z",
    //     "url": "https://swapi.dev/api/people/61/"
    // }, {
    //     "name": "Cliegg Lars",
    //     "height": "183",
    //     "mass": "unknown",
    //     "hair_color": "brown",
    //     "skin_color": "fair",
    //     "eye_color": "blue",
    //     "birth_year": "82BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/1/",
    //     "films": [
    //         "Attack of the Clones"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T15:59:03.958000Z",
    //     "edited": "2014-12-20T21:17:50.451000Z",
    //     "url": "https://swapi.dev/api/people/62/"
    // },
    // {
    //     "name": "Poggle the Lesser",
    //     "height": "183",
    //     "mass": "80",
    //     "hair_color": "none",
    //     "skin_color": "green",
    //     "eye_color": "yellow",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/11/",
    //     "films": [
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/28/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T16:40:43.977000Z",
    //     "edited": "2014-12-20T21:17:50.453000Z",
    //     "url": "https://swapi.dev/api/people/63/"
    // },
    // {
    //     "name": "Luminara Unduli",
    //     "height": "170",
    //     "mass": "56.2",
    //     "hair_color": "black",
    //     "skin_color": "yellow",
    //     "eye_color": "blue",
    //     "birth_year": "58BBY",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/51/",
    //     "films": [
    //         "Attack of the Clones",
    //         "Revenge of the Sith",
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/29/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T16:45:53.668000Z",
    //     "edited": "2014-12-20T21:17:50.455000Z",
    //     "url": "https://swapi.dev/api/people/64/"
    // },
    // {
    //     "name": "Barriss Offee",
    //     "height": "166",
    //     "mass": "50",
    //     "hair_color": "black",
    //     "skin_color": "yellow",
    //     "eye_color": "blue",
    //     "birth_year": "40BBY",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/51/",
    //     "films": [
    //         "Attack of the Clones"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/29/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T16:46:40.440000Z",
    //     "edited": "2014-12-20T21:17:50.457000Z",
    //     "url": "https://swapi.dev/api/people/65/"
    // },
    // {
    //     "name": "Dormé",
    //     "height": "165",
    //     "mass": "unknown",
    //     "hair_color": "brown",
    //     "skin_color": "light",
    //     "eye_color": "brown",
    //     "birth_year": "unknown",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/8/",
    //     "films": [
    //         "Attack of the Clones"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/1/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T16:49:14.640000Z",
    //     "edited": "2014-12-20T21:17:50.460000Z",
    //     "url": "https://swapi.dev/api/people/66/"
    // },
    // {
    //     "name": "Dooku",
    //     "height": "193",
    //     "mass": "80",
    //     "hair_color": "white",
    //     "skin_color": "fair",
    //     "eye_color": "brown",
    //     "birth_year": "102BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/52/",
    //     "films": [
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/1/"
    //     ],
    //     "vehicles": [
    //         "https://swapi.dev/api/vehicles/55/"
    //     ],
    //     "starships": [],
    //     "created": "2014-12-20T16:52:14.726000Z",
    //     "edited": "2014-12-20T21:17:50.462000Z",
    //     "url": "https://swapi.dev/api/people/67/"
    // },
    // {
    //     "name": "Bail Prestor Organa",
    //     "height": "191",
    //     "mass": "unknown",
    //     "hair_color": "black",
    //     "skin_color": "tan",
    //     "eye_color": "brown",
    //     "birth_year": "67BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/2/",
    //     "films": [
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/1/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T16:53:08.575000Z",
    //     "edited": "2014-12-20T21:17:50.463000Z",
    //     "url": "https://swapi.dev/api/people/68/"
    // },
    // {
    //     "name": "Jango Fett",
    //     "height": "183",
    //     "mass": "79",
    //     "hair_color": "black",
    //     "skin_color": "tan",
    //     "eye_color": "brown",
    //     "birth_year": "66BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/53/",
    //     "films": [
    //         "Attack of the Clones"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T16:54:41.620000Z",
    //     "edited": "2014-12-20T21:17:50.465000Z",
    //     "url": "https://swapi.dev/api/people/69/"
    // },
    // {
    //     "name": "Zam Wesell",
    //     "height": "168",
    //     "mass": "55",
    //     "hair_color": "blonde",
    //     "skin_color": "fair, green, yellow",
    //     "eye_color": "yellow",
    //     "birth_year": "unknown",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/54/",
    //     "films": [
    //         "Attack of the Clones"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/30/"
    //     ],
    //     "vehicles": [
    //         "https://swapi.dev/api/vehicles/45/"
    //     ],
    //     "starships": [],
    //     "created": "2014-12-20T16:57:44.471000Z",
    //     "edited": "2014-12-20T21:17:50.468000Z",
    //     "url": "https://swapi.dev/api/people/70/"
    // },
    // {
    //     "name": "Dexter Jettster",
    //     "height": "198",
    //     "mass": "102",
    //     "hair_color": "none",
    //     "skin_color": "brown",
    //     "eye_color": "yellow",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/55/",
    //     "films": [
    //         "Attack of the Clones"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/31/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T17:28:27.248000Z",
    //     "edited": "2014-12-20T21:17:50.470000Z",
    //     "url": "https://swapi.dev/api/people/71/"
    // }, {
    //     "name": "Lama Su",
    //     "height": "229",
    //     "mass": "88",
    //     "hair_color": "none",
    //     "skin_color": "grey",
    //     "eye_color": "black",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/10/",
    //     "films": [
    //         "Attack of the Clones"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/32/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T17:30:50.416000Z",
    //     "edited": "2014-12-20T21:17:50.473000Z",
    //     "url": "https://swapi.dev/api/people/72/"
    // },
    // {
    //     "name": "Taun We",
    //     "height": "213",
    //     "mass": "unknown",
    //     "hair_color": "none",
    //     "skin_color": "grey",
    //     "eye_color": "black",
    //     "birth_year": "unknown",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/10/",
    //     "films": [
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/32/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T17:31:21.195000Z",
    //     "edited": "2014-12-20T21:17:50.474000Z",
    //     "url": "https://swapi.dev/api/people/73/"
    // },
    // {
    //     "name": "Jocasta Nu",
    //     "height": "167",
    //     "mass": "unknown",
    //     "hair_color": "white",
    //     "skin_color": "fair",
    //     "eye_color": "blue",
    //     "birth_year": "unknown",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/9/",
    //     "films": [
    //         "Attack of the Clones"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/1/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T17:32:51.996000Z",
    //     "edited": "2014-12-20T21:17:50.476000Z",
    //     "url": "https://swapi.dev/api/people/74/"
    // },
    // {
    //     "name": "R4-P17",
    //     "height": "96",
    //     "mass": "unknown",
    //     "hair_color": "none",
    //     "skin_color": "silver, red",
    //     "eye_color": "red, blue",
    //     "birth_year": "unknown",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/28/",
    //     "films": [
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T17:43:36.409000Z",
    //     "edited": "2014-12-20T21:17:50.478000Z",
    //     "url": "https://swapi.dev/api/people/75/"
    // },
    // {
    //     "name": "Wat Tambor",
    //     "height": "193",
    //     "mass": "48",
    //     "hair_color": "none",
    //     "skin_color": "green, grey",
    //     "eye_color": "unknown",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/56/",
    //     "films": [
    //         "Attack of the Clones"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/33/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T17:53:52.607000Z",
    //     "edited": "2014-12-20T21:17:50.481000Z",
    //     "url": "https://swapi.dev/api/people/76/"
    // },
    // {
    //     "name": "San Hill",
    //     "height": "191",
    //     "mass": "unknown",
    //     "hair_color": "none",
    //     "skin_color": "grey",
    //     "eye_color": "gold",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/57/",
    //     "films": [
    //         "Attack of the Clones"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/34/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T17:58:17.049000Z",
    //     "edited": "2014-12-20T21:17:50.484000Z",
    //     "url": "https://swapi.dev/api/people/77/"
    // },
    // {
    //     "name": "Shaak Ti",
    //     "height": "178",
    //     "mass": "57",
    //     "hair_color": "none",
    //     "skin_color": "red, blue, white",
    //     "eye_color": "black",
    //     "birth_year": "unknown",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/58/",
    //     "films": [
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/35/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T18:44:01.103000Z",
    //     "edited": "2014-12-20T21:17:50.486000Z",
    //     "url": "https://swapi.dev/api/people/78/"
    // },
    // {
    //     "name": "Grievous",
    //     "height": "216",
    //     "mass": "159",
    //     "hair_color": "none",
    //     "skin_color": "brown, white",
    //     "eye_color": "green, yellow",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/59/",
    //     "films": [

    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/36/"
    //     ],
    //     "vehicles": [
    //         "https://swapi.dev/api/vehicles/60/"
    //     ],
    //     "starships": [
    //         "https://swapi.dev/api/starships/74/"
    //     ],
    //     "created": "2014-12-20T19:43:53.348000Z",
    //     "edited": "2014-12-20T21:17:50.488000Z",
    //     "url": "https://swapi.dev/api/people/79/"
    // },
    // {
    //     "name": "Tarfful",
    //     "height": "234",
    //     "mass": "136",
    //     "hair_color": "brown",
    //     "skin_color": "brown",
    //     "eye_color": "blue",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/14/",
    //     "films": [
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/3/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T19:46:34.209000Z",
    //     "edited": "2014-12-20T21:17:50.491000Z",
    //     "url": "https://swapi.dev/api/people/80/"
    // },
    // {
    //     "name": "Raymus Antilles",
    //     "height": "188",
    //     "mass": "79",
    //     "hair_color": "brown",
    //     "skin_color": "light",
    //     "eye_color": "brown",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/2/",
    //     "films": [
    //         "A New Hope",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T19:49:35.583000Z",
    //     "edited": "2014-12-20T21:17:50.493000Z",
    //     "url": "https://swapi.dev/api/people/81/"
    // }, {
    //     "name": "Sly Moore",
    //     "height": "178",
    //     "mass": "48",
    //     "hair_color": "none",
    //     "skin_color": "pale",
    //     "eye_color": "white",
    //     "birth_year": "unknown",
    //     "gender": "female",
    //     "homeworld": "https://swapi.dev/api/planets/60/",
    //     "films": [
    //         "Attack of the Clones",
    //         "Revenge of the Sith"
    //     ],
    //     "species": [],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T20:18:37.619000Z",
    //     "edited": "2014-12-20T21:17:50.496000Z",
    //     "url": "https://swapi.dev/api/people/82/"
    // },
    // {
    //     "name": "Tion Medon",
    //     "height": "206",
    //     "mass": "80",
    //     "hair_color": "none",
    //     "skin_color": "grey",
    //     "eye_color": "black",
    //     "birth_year": "unknown",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/12/",
    //     "films": [
    //         "Revenge of the Sith"
    //     ],
    //     "species": [
    //         "https://swapi.dev/api/species/37/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-20T20:35:04.260000Z",
    //     "edited": "2014-12-20T21:17:50.498000Z",
    //     "url": "https://swapi.dev/api/people/83/"
    // }
];

export const films = [
    {
        count: 6,
        next: null,
        previous: null,
        results: [
            {
                title: "A New Hope",
                episode_id: 4,
                opening_crawl:
                    "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
                director: "George Lucas",
                producer: "Gary Kurtz, Rick McCallum",
                release_date: "1977-05-25",
                characters: [
                    "http://swapi.dev/api/people/1/",
                    "http://swapi.dev/api/people/2/",
                    "http://swapi.dev/api/people/3/",
                    "http://swapi.dev/api/people/4/",
                    "http://swapi.dev/api/people/5/",
                    "http://swapi.dev/api/people/6/",
                    "http://swapi.dev/api/people/7/",
                    "http://swapi.dev/api/people/8/",
                    "http://swapi.dev/api/people/9/",
                    "http://swapi.dev/api/people/10/",
                    "http://swapi.dev/api/people/12/",
                    "http://swapi.dev/api/people/13/",
                    "http://swapi.dev/api/people/14/",
                    "http://swapi.dev/api/people/15/",
                    "http://swapi.dev/api/people/16/",
                    "http://swapi.dev/api/people/18/",
                    "http://swapi.dev/api/people/19/",
                    "http://swapi.dev/api/people/81/",
                ],
                planets: [
                    "http://swapi.dev/api/planets/1/",
                    "http://swapi.dev/api/planets/2/",
                    "http://swapi.dev/api/planets/3/",
                ],
                starships: [
                    "http://swapi.dev/api/starships/2/",
                    "http://swapi.dev/api/starships/3/",
                    "http://swapi.dev/api/starships/5/",
                    "http://swapi.dev/api/starships/9/",
                    "http://swapi.dev/api/starships/10/",
                    "http://swapi.dev/api/starships/11/",
                    "http://swapi.dev/api/starships/12/",
                    "http://swapi.dev/api/starships/13/",
                ],
                vehicles: [
                    "http://swapi.dev/api/vehicles/4/",
                    "http://swapi.dev/api/vehicles/6/",
                    "http://swapi.dev/api/vehicles/7/",
                    "http://swapi.dev/api/vehicles/8/",
                ],
                species: [
                    "http://swapi.dev/api/species/1/",
                    "http://swapi.dev/api/species/2/",
                    "http://swapi.dev/api/species/3/",
                    "http://swapi.dev/api/species/4/",
                    "http://swapi.dev/api/species/5/",
                ],
                created: "2014-12-10T14:23:31.880000Z",
                edited: "2014-12-20T19:49:45.256000Z",
                url: "http://swapi.dev/api/films/1/",
            },
            {
                title: "The Empire Strikes Back",
                episode_id: 5,
                opening_crawl:
                    "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
                director: "Irvin Kershner",
                producer: "Gary Kurtz, Rick McCallum",
                release_date: "1980-05-17",
                characters: [
                    "http://swapi.dev/api/people/1/",
                    "http://swapi.dev/api/people/2/",
                    "http://swapi.dev/api/people/3/",
                    "http://swapi.dev/api/people/4/",
                    "http://swapi.dev/api/people/5/",
                    "http://swapi.dev/api/people/10/",
                    "http://swapi.dev/api/people/13/",
                    "http://swapi.dev/api/people/14/",
                    "http://swapi.dev/api/people/18/",
                    "http://swapi.dev/api/people/20/",
                    "http://swapi.dev/api/people/21/",
                    "http://swapi.dev/api/people/22/",
                    "http://swapi.dev/api/people/23/",
                    "http://swapi.dev/api/people/24/",
                    "http://swapi.dev/api/people/25/",
                    "http://swapi.dev/api/people/26/",
                ],
                planets: [
                    "http://swapi.dev/api/planets/4/",
                    "http://swapi.dev/api/planets/5/",
                    "http://swapi.dev/api/planets/6/",
                    "http://swapi.dev/api/planets/27/",
                ],
                starships: [
                    "http://swapi.dev/api/starships/3/",
                    "http://swapi.dev/api/starships/10/",
                    "http://swapi.dev/api/starships/11/",
                    "http://swapi.dev/api/starships/12/",
                    "http://swapi.dev/api/starships/15/",
                    "http://swapi.dev/api/starships/17/",
                    "http://swapi.dev/api/starships/21/",
                    "http://swapi.dev/api/starships/22/",
                    "http://swapi.dev/api/starships/23/",
                ],
                vehicles: [
                    "http://swapi.dev/api/vehicles/8/",
                    "http://swapi.dev/api/vehicles/14/",
                    "http://swapi.dev/api/vehicles/16/",
                    "http://swapi.dev/api/vehicles/18/",
                    "http://swapi.dev/api/vehicles/19/",
                    "http://swapi.dev/api/vehicles/20/",
                ],
                species: [
                    "http://swapi.dev/api/species/1/",
                    "http://swapi.dev/api/species/2/",
                    "http://swapi.dev/api/species/3/",
                    "http://swapi.dev/api/species/6/",
                    "http://swapi.dev/api/species/7/",
                ],
                created: "2014-12-12T11:26:24.656000Z",
                edited: "2014-12-15T13:07:53.386000Z",
                url: "http://swapi.dev/api/films/2/",
            },
            {
                title: "Return of the Jedi",
                episode_id: 6,
                opening_crawl:
                    "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
                director: "Richard Marquand",
                producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
                release_date: "1983-05-25",
                characters: [
                    "http://swapi.dev/api/people/1/",
                    "http://swapi.dev/api/people/2/",
                    "http://swapi.dev/api/people/3/",
                    "http://swapi.dev/api/people/4/",
                    "http://swapi.dev/api/people/5/",
                    "http://swapi.dev/api/people/10/",
                    "http://swapi.dev/api/people/13/",
                    "http://swapi.dev/api/people/14/",
                    "http://swapi.dev/api/people/16/",
                    "http://swapi.dev/api/people/18/",
                    "http://swapi.dev/api/people/20/",
                    "http://swapi.dev/api/people/21/",
                    "http://swapi.dev/api/people/22/",
                    "http://swapi.dev/api/people/25/",
                    "http://swapi.dev/api/people/27/",
                    "http://swapi.dev/api/people/28/",
                    "http://swapi.dev/api/people/29/",
                    "http://swapi.dev/api/people/30/",
                    "http://swapi.dev/api/people/31/",
                    "http://swapi.dev/api/people/45/",
                ],
                planets: [
                    "http://swapi.dev/api/planets/1/",
                    "http://swapi.dev/api/planets/5/",
                    "http://swapi.dev/api/planets/7/",
                    "http://swapi.dev/api/planets/8/",
                    "http://swapi.dev/api/planets/9/",
                ],
                starships: [
                    "http://swapi.dev/api/starships/2/",
                    "http://swapi.dev/api/starships/3/",
                    "http://swapi.dev/api/starships/10/",
                    "http://swapi.dev/api/starships/11/",
                    "http://swapi.dev/api/starships/12/",
                    "http://swapi.dev/api/starships/15/",
                    "http://swapi.dev/api/starships/17/",
                    "http://swapi.dev/api/starships/22/",
                    "http://swapi.dev/api/starships/23/",
                    "http://swapi.dev/api/starships/27/",
                    "http://swapi.dev/api/starships/28/",
                    "http://swapi.dev/api/starships/29/",
                ],
                vehicles: [
                    "http://swapi.dev/api/vehicles/8/",
                    "http://swapi.dev/api/vehicles/16/",
                    "http://swapi.dev/api/vehicles/18/",
                    "http://swapi.dev/api/vehicles/19/",
                    "http://swapi.dev/api/vehicles/24/",
                    "http://swapi.dev/api/vehicles/25/",
                    "http://swapi.dev/api/vehicles/26/",
                    "http://swapi.dev/api/vehicles/30/",
                ],
                species: [
                    "http://swapi.dev/api/species/1/",
                    "http://swapi.dev/api/species/2/",
                    "http://swapi.dev/api/species/3/",
                    "http://swapi.dev/api/species/5/",
                    "http://swapi.dev/api/species/6/",
                    "http://swapi.dev/api/species/8/",
                    "http://swapi.dev/api/species/9/",
                    "http://swapi.dev/api/species/10/",
                    "http://swapi.dev/api/species/15/",
                ],
                created: "2014-12-18T10:39:33.255000Z",
                edited: "2014-12-20T09:48:37.462000Z",
                url: "http://swapi.dev/api/films/3/",
            },
            {
                title: "The Phantom Menace",
                episode_id: 1,
                opening_crawl:
                    "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
                director: "George Lucas",
                producer: "Rick McCallum",
                release_date: "1999-05-19",
                characters: [
                    "http://swapi.dev/api/people/2/",
                    "http://swapi.dev/api/people/3/",
                    "http://swapi.dev/api/people/10/",
                    "http://swapi.dev/api/people/11/",
                    "http://swapi.dev/api/people/16/",
                    "http://swapi.dev/api/people/20/",
                    "http://swapi.dev/api/people/21/",
                    "http://swapi.dev/api/people/32/",
                    "http://swapi.dev/api/people/33/",
                    "http://swapi.dev/api/people/34/",
                    "http://swapi.dev/api/people/35/",
                    "http://swapi.dev/api/people/36/",
                    "http://swapi.dev/api/people/37/",
                    "http://swapi.dev/api/people/38/",
                    "http://swapi.dev/api/people/39/",
                    "http://swapi.dev/api/people/40/",
                    "http://swapi.dev/api/people/41/",
                    "http://swapi.dev/api/people/42/",
                    "http://swapi.dev/api/people/43/",
                    "http://swapi.dev/api/people/44/",
                    "http://swapi.dev/api/people/46/",
                    "http://swapi.dev/api/people/47/",
                    "http://swapi.dev/api/people/48/",
                    "http://swapi.dev/api/people/49/",
                    "http://swapi.dev/api/people/50/",
                    "http://swapi.dev/api/people/51/",
                    "http://swapi.dev/api/people/52/",
                    "http://swapi.dev/api/people/53/",
                    "http://swapi.dev/api/people/54/",
                    "http://swapi.dev/api/people/55/",
                    "http://swapi.dev/api/people/56/",
                    "http://swapi.dev/api/people/57/",
                    "http://swapi.dev/api/people/58/",
                    "http://swapi.dev/api/people/59/",
                ],
                planets: [
                    "http://swapi.dev/api/planets/1/",
                    "http://swapi.dev/api/planets/8/",
                    "http://swapi.dev/api/planets/9/",
                ],
                starships: [
                    "http://swapi.dev/api/starships/31/",
                    "http://swapi.dev/api/starships/32/",
                    "http://swapi.dev/api/starships/39/",
                    "http://swapi.dev/api/starships/40/",
                    "http://swapi.dev/api/starships/41/",
                ],
                vehicles: [
                    "http://swapi.dev/api/vehicles/33/",
                    "http://swapi.dev/api/vehicles/34/",
                    "http://swapi.dev/api/vehicles/35/",
                    "http://swapi.dev/api/vehicles/36/",
                    "http://swapi.dev/api/vehicles/37/",
                    "http://swapi.dev/api/vehicles/38/",
                    "http://swapi.dev/api/vehicles/42/",
                ],
                species: [
                    "http://swapi.dev/api/species/1/",
                    "http://swapi.dev/api/species/2/",
                    "http://swapi.dev/api/species/6/",
                    "http://swapi.dev/api/species/11/",
                    "http://swapi.dev/api/species/12/",
                    "http://swapi.dev/api/species/13/",
                    "http://swapi.dev/api/species/14/",
                    "http://swapi.dev/api/species/15/",
                    "http://swapi.dev/api/species/16/",
                    "http://swapi.dev/api/species/17/",
                    "http://swapi.dev/api/species/18/",
                    "http://swapi.dev/api/species/19/",
                    "http://swapi.dev/api/species/20/",
                    "http://swapi.dev/api/species/21/",
                    "http://swapi.dev/api/species/22/",
                    "http://swapi.dev/api/species/23/",
                    "http://swapi.dev/api/species/24/",
                    "http://swapi.dev/api/species/25/",
                    "http://swapi.dev/api/species/26/",
                    "http://swapi.dev/api/species/27/",
                ],
                created: "2014-12-19T16:52:55.740000Z",
                edited: "2014-12-20T10:54:07.216000Z",
                url: "http://swapi.dev/api/films/4/",
            },
            {
                title: "Attack of the Clones",
                episode_id: 2,
                opening_crawl:
                    "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
                director: "George Lucas",
                producer: "Rick McCallum",
                release_date: "2002-05-16",
                characters: [
                    "http://swapi.dev/api/people/2/",
                    "http://swapi.dev/api/people/3/",
                    "http://swapi.dev/api/people/6/",
                    "http://swapi.dev/api/people/7/",
                    "http://swapi.dev/api/people/10/",
                    "http://swapi.dev/api/people/11/",
                    "http://swapi.dev/api/people/20/",
                    "http://swapi.dev/api/people/21/",
                    "http://swapi.dev/api/people/22/",
                    "http://swapi.dev/api/people/33/",
                    "http://swapi.dev/api/people/35/",
                    "http://swapi.dev/api/people/36/",
                    "http://swapi.dev/api/people/40/",
                    "http://swapi.dev/api/people/43/",
                    "http://swapi.dev/api/people/46/",
                    "http://swapi.dev/api/people/51/",
                    "http://swapi.dev/api/people/52/",
                    "http://swapi.dev/api/people/53/",
                    "http://swapi.dev/api/people/58/",
                    "http://swapi.dev/api/people/59/",
                    "http://swapi.dev/api/people/60/",
                    "http://swapi.dev/api/people/61/",
                    "http://swapi.dev/api/people/62/",
                    "http://swapi.dev/api/people/63/",
                    "http://swapi.dev/api/people/64/",
                    "http://swapi.dev/api/people/65/",
                    "http://swapi.dev/api/people/66/",
                    "http://swapi.dev/api/people/67/",
                    "http://swapi.dev/api/people/68/",
                    "http://swapi.dev/api/people/69/",
                    "http://swapi.dev/api/people/70/",
                    "http://swapi.dev/api/people/71/",
                    "http://swapi.dev/api/people/72/",
                    "http://swapi.dev/api/people/73/",
                    "http://swapi.dev/api/people/74/",
                    "http://swapi.dev/api/people/75/",
                    "http://swapi.dev/api/people/76/",
                    "http://swapi.dev/api/people/77/",
                    "http://swapi.dev/api/people/78/",
                    "http://swapi.dev/api/people/82/",
                ],
                planets: [
                    "http://swapi.dev/api/planets/1/",
                    "http://swapi.dev/api/planets/8/",
                    "http://swapi.dev/api/planets/9/",
                    "http://swapi.dev/api/planets/10/",
                    "http://swapi.dev/api/planets/11/",
                ],
                starships: [
                    "http://swapi.dev/api/starships/21/",
                    "http://swapi.dev/api/starships/32/",
                    "http://swapi.dev/api/starships/39/",
                    "http://swapi.dev/api/starships/43/",
                    "http://swapi.dev/api/starships/47/",
                    "http://swapi.dev/api/starships/48/",
                    "http://swapi.dev/api/starships/49/",
                    "http://swapi.dev/api/starships/52/",
                    "http://swapi.dev/api/starships/58/",
                ],
                vehicles: [
                    "http://swapi.dev/api/vehicles/4/",
                    "http://swapi.dev/api/vehicles/44/",
                    "http://swapi.dev/api/vehicles/45/",
                    "http://swapi.dev/api/vehicles/46/",
                    "http://swapi.dev/api/vehicles/50/",
                    "http://swapi.dev/api/vehicles/51/",
                    "http://swapi.dev/api/vehicles/53/",
                    "http://swapi.dev/api/vehicles/54/",
                    "http://swapi.dev/api/vehicles/55/",
                    "http://swapi.dev/api/vehicles/56/",
                    "http://swapi.dev/api/vehicles/57/",
                ],
                species: [
                    "http://swapi.dev/api/species/1/",
                    "http://swapi.dev/api/species/2/",
                    "http://swapi.dev/api/species/6/",
                    "http://swapi.dev/api/species/12/",
                    "http://swapi.dev/api/species/13/",
                    "http://swapi.dev/api/species/15/",
                    "http://swapi.dev/api/species/28/",
                    "http://swapi.dev/api/species/29/",
                    "http://swapi.dev/api/species/30/",
                    "http://swapi.dev/api/species/31/",
                    "http://swapi.dev/api/species/32/",
                    "http://swapi.dev/api/species/33/",
                    "http://swapi.dev/api/species/34/",
                    "http://swapi.dev/api/species/35/",
                ],
                created: "2014-12-20T10:57:57.886000Z",
                edited: "2014-12-20T20:18:48.516000Z",
                url: "http://swapi.dev/api/films/5/",
            },
            {
                title: "Revenge of the Sith",
                episode_id: 3,
                opening_crawl:
                    "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
                director: "George Lucas",
                producer: "Rick McCallum",
                release_date: "2005-05-19",
                characters: [
                    "http://swapi.dev/api/people/1/",
                    "http://swapi.dev/api/people/2/",
                    "http://swapi.dev/api/people/3/",
                    "http://swapi.dev/api/people/4/",
                    "http://swapi.dev/api/people/5/",
                    "http://swapi.dev/api/people/6/",
                    "http://swapi.dev/api/people/7/",
                    "http://swapi.dev/api/people/10/",
                    "http://swapi.dev/api/people/11/",
                    "http://swapi.dev/api/people/12/",
                    "http://swapi.dev/api/people/13/",
                    "http://swapi.dev/api/people/20/",
                    "http://swapi.dev/api/people/21/",
                    "http://swapi.dev/api/people/33/",
                    "http://swapi.dev/api/people/35/",
                    "http://swapi.dev/api/people/46/",
                    "http://swapi.dev/api/people/51/",
                    "http://swapi.dev/api/people/52/",
                    "http://swapi.dev/api/people/53/",
                    "http://swapi.dev/api/people/54/",
                    "http://swapi.dev/api/people/55/",
                    "http://swapi.dev/api/people/56/",
                    "http://swapi.dev/api/people/58/",
                    "http://swapi.dev/api/people/63/",
                    "http://swapi.dev/api/people/64/",
                    "http://swapi.dev/api/people/67/",
                    "http://swapi.dev/api/people/68/",
                    "http://swapi.dev/api/people/75/",
                    "http://swapi.dev/api/people/78/",
                    "http://swapi.dev/api/people/79/",
                    "http://swapi.dev/api/people/80/",
                    "http://swapi.dev/api/people/81/",
                    "http://swapi.dev/api/people/82/",
                    "http://swapi.dev/api/people/83/",
                ],
                planets: [
                    "http://swapi.dev/api/planets/1/",
                    "http://swapi.dev/api/planets/2/",
                    "http://swapi.dev/api/planets/5/",
                    "http://swapi.dev/api/planets/8/",
                    "http://swapi.dev/api/planets/9/",
                    "http://swapi.dev/api/planets/12/",
                    "http://swapi.dev/api/planets/13/",
                    "http://swapi.dev/api/planets/14/",
                    "http://swapi.dev/api/planets/15/",
                    "http://swapi.dev/api/planets/16/",
                    "http://swapi.dev/api/planets/17/",
                    "http://swapi.dev/api/planets/18/",
                    "http://swapi.dev/api/planets/19/",
                ],
                starships: [
                    "http://swapi.dev/api/starships/2/",
                    "http://swapi.dev/api/starships/32/",
                    "http://swapi.dev/api/starships/48/",
                    "http://swapi.dev/api/starships/59/",
                    "http://swapi.dev/api/starships/61/",
                    "http://swapi.dev/api/starships/63/",
                    "http://swapi.dev/api/starships/64/",
                    "http://swapi.dev/api/starships/65/",
                    "http://swapi.dev/api/starships/66/",
                    "http://swapi.dev/api/starships/68/",
                    "http://swapi.dev/api/starships/74/",
                    "http://swapi.dev/api/starships/75/",
                ],
                vehicles: [
                    "http://swapi.dev/api/vehicles/33/",
                    "http://swapi.dev/api/vehicles/50/",
                    "http://swapi.dev/api/vehicles/53/",
                    "http://swapi.dev/api/vehicles/56/",
                    "http://swapi.dev/api/vehicles/60/",
                    "http://swapi.dev/api/vehicles/62/",
                    "http://swapi.dev/api/vehicles/67/",
                    "http://swapi.dev/api/vehicles/69/",
                    "http://swapi.dev/api/vehicles/70/",
                    "http://swapi.dev/api/vehicles/71/",
                    "http://swapi.dev/api/vehicles/72/",
                    "http://swapi.dev/api/vehicles/73/",
                    "http://swapi.dev/api/vehicles/76/",
                ],
                species: [
                    "http://swapi.dev/api/species/1/",
                    "http://swapi.dev/api/species/2/",
                    "http://swapi.dev/api/species/3/",
                    "http://swapi.dev/api/species/6/",
                    "http://swapi.dev/api/species/15/",
                    "http://swapi.dev/api/species/19/",
                    "http://swapi.dev/api/species/20/",
                    "http://swapi.dev/api/species/23/",
                    "http://swapi.dev/api/species/24/",
                    "http://swapi.dev/api/species/25/",
                    "http://swapi.dev/api/species/26/",
                    "http://swapi.dev/api/species/27/",
                    "http://swapi.dev/api/species/28/",
                    "http://swapi.dev/api/species/29/",
                    "http://swapi.dev/api/species/30/",
                    "http://swapi.dev/api/species/33/",
                    "http://swapi.dev/api/species/34/",
                    "http://swapi.dev/api/species/35/",
                    "http://swapi.dev/api/species/36/",
                    "http://swapi.dev/api/species/37/",
                ],
                created: "2014-12-20T18:49:38.403000Z",
                edited: "2014-12-20T20:47:52.073000Z",
                url: "http://swapi.dev/api/films/6/",
            },
        ],
    },
];
