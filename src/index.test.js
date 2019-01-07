import { Footer, Header, Jumbotron, Pagination, Prose, TopBar } from './index'

it('exports components', () => {
  expect(Footer).toBeTruthy()
  expect(Header).toBeTruthy()
  expect(Jumbotron).toBeTruthy()
  expect(Pagination).toBeTruthy()
  expect(Prose).toBeTruthy()
  expect(TopBar).toBeTruthy()
})
