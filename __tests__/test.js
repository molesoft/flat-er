import fe from '../src/index'

it('Should flatten', () => {
  const stuff = {
    pets: {
      dogs: [
        {
          name: 'douggie',
          goodBoy: true
        }
      ],
      cats: [
        {
          name: 'mrSocks',
          whiskers: true,
          litterBox: {
            clean: false
          },
          colors: [
            'black',
            'white'
          ]
        }
      ]
    }
  }
  const flattened = fe.flatten(stuff)
  console.log(JSON.stringify(flattened, null, 2))
  expect(flattened).toMatchSnapshot()
})