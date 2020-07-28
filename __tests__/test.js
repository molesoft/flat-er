import flat from '../src/index'

it('Should flatten', () => {
  const obj = {
    foo: 'bar',
    baz: 2,
    dogs: [
      "lab",
      "great dane"
    ],
    cat: {
      whiskers: true,
      litterBox: {
        clean: false
      },
      colors: [
        'black',
        'white'
      ]
    }
  }
  const flattened = flat.flatten(obj)
  expect(flattened).toMatchSnapshot()
})