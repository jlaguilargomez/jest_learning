const { googleSearch} = require('./script')

dbMock = [
  'dog.com',
  'lightcandles.com',
  'dogpictures.com',
  'marvel.com',
  'dogwaf.com',
  'dbs.com',
  'superdog.com'
]

describe('googleSearch', () => {
  it('is a silly test', () => {
    expect.assertions(1)
    expect('hello').toBe('hello');
  });

  it('is a searching google', () => {
    expect.assertions(2);
    const expectedResult = ['dog.com', 'dogpictures.com', 'dogwaf.com'];

    expect(googleSearch('dog', dbMock)).toEqual(expectedResult);
    expect(googleSearch('test', dbMock)).toEqual([]);
  });

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('does not return more than 3 matches', () => {
    const expectedResult = 3;

    expect(googleSearch('dog', dbMock).length).toEqual(expectedResult);
  });
})

