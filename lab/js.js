const data =
{
  "site": "CinemaClub",
  "movies": [
    {
      "id": 1,
      "title": "Inception",
      "year": 2010,
      "genres": ["Sci-Fi", "Action"],
      "rating": 8.8,
      "available": true,
      "director": { "name": "Christopher Nolan", "country": "UK" },
      "cast": [
        { "name": "Leonardo DiCaprio", "role": "Cobb" },
        { "name": "Elliot Page", "role": "Ariadne" }
      ],
      "awards": { "oscars": 4 },
      "reviews": [
        { "score": 9, "author": { "username": "dana_k" } },
        { "score": 8, "author": { "username": "tom99" } }
      ]
    },
    {
      "id": 2,
      "title": "Toy Story",
      "year": 1995,
      "genres": ["Animation", "Comedy"],
      "rating": 8.3,
      "available": false,
      "director": { "name": "John Lasseter", "country": "USA" },
      "cast": [
        { "name": "Tom Hanks", "role": "Woody" },
        { "name": "Tim Allen", "role": "Buzz" }
      ],
      "reviews": []
    },
    {
      "id": 3,
      "title": "Parasite",
      "year": 2019,
      "genres": ["Thriller", "Drama"],
      "rating": 8.5,
      "available": true,
      "director": { "name": "Bong Joon-ho", "country": "South Korea" },
      "cast": [
        { "name": "Song Kang-ho", "role": "Kim Ki-taek" }
      ],
      "awards": { "oscars": 4 },
      "reviews": [
        { "score": 10, "author": { "username": "noa_l" } }
      ]
    }
  ]
}
console.log(data.movies[0].reviews[1].author.username);
console.log(data.site);
console.log(data.movies[2].title)
console.log(data.movies[1].director.country)
console.log(data.movies[1].cast[0].role)
console.log(data.movies[0].genres[1])
console.log(data.movies[2].reviews[0].author.username)
console.log(data.movies[0].cast.length)
