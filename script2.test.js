const fetch = require('node-fetch');
const swapi = require('./script2')

describe('Star wars API', () => {
  test('calls swapi to get people', (done) => {
    expect.assertions(1)
    swapi.getPeopleAsync(fetch).then(data => {
      expect(data.count).toEqual(87);
      done()
    })
  })

  test('calls swapi to get people', () => {
    expect.assertions(2);
    return swapi.getPeopleAsync(fetch).then((data) => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });

  test('async test / calls swapi to get people', async () => {
    expect.assertions(1);
    const data = await swapi.getPeopleAsync(fetch);

    expect(data.count).toBe(87)
  });

  it('getsPeople reutn count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve(
      {
        json: () => 
          Promise.resolve({
            count: 87,
            results: [
              0,1,2,3,4,5
            ]
          })       
      }
    ))

    expect.assertions(4);

    return swapi.getPeopleAsync(mockFetch).then(data => {
      
      expect(data.count).toBe(87);
      expect(data.results.length).toBeGreaterThan(5);
      expect(mockFetch.mock.calls.length).toBe(1)
      expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people/');
    })
  })
});