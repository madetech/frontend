import components from './index'

it('exports components', () => {
  expect(components.Header).toBeTruthy()
  expect(components.TopBar).toBeTruthy()
})

it('does not export non-existant components', () => {
  expect(components.NotExist).toBeFalsy()
})
