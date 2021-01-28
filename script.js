const googleData = [
  'mdn.com', 
  'funnydogs.com',
  'games-workshop.com',
  'marca.com',
  'ozu.es',
  'freecodecamp.com',
  'dogs.com',
  'codecademy.com',
  'academia.es',
  'cleandog.com'
];

// para poder cambiar la BD que le pasamos a la función (moqueada en caso de test), esta función debe ser pura
const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput)
  })

  return matches.length > 3 ? matches.slice(0,3) : matches;
}



module.exports = { googleSearch}