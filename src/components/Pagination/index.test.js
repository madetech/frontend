import React from 'react'
import Pagination from '.'
import { mount } from 'enzyme'

it('renders single page link if only one page', () => {
  const pagination = mount(
    <Pagination currentPage={1} hrefPrefix='/blog' totalPages={1} />
  )
  const links = pagination.find('.page-link')
  expect(links.length).toEqual(3)
  expect(links.first().text()).toMatch('Prev')
  expect(links.last().text()).toMatch('Next')
  expect(links.at(1).text()).toMatch('1')
})

it('renders disables prev and next if only one page', () => {
  const pagination = mount(
    <Pagination currentPage={1} hrefPrefix='/blog' totalPages={1} />
  )
  const items = pagination.find('PaginationItem')
  expect(items.first().prop('disabled')).toBe(true)
  expect(items.last().prop('disabled')).toBe(true)
})

it('renders 1-5 if many pages and on page 1', () => {
  const pagination = mount(
    <Pagination currentPage={1} hrefPrefix='/blog' totalPages={20} />
  )
  const links = pagination.find('.page-link')
  expect(links.length).toEqual(7)
  expect(links.first().text()).toMatch('Prev')
  expect(links.last().text()).toMatch('Next')
  expect(links.at(1).text()).toMatch('1')
  expect(links.at(2).text()).toMatch('2')
  expect(links.at(3).text()).toMatch('3')
  expect(links.at(4).text()).toMatch('4')
  expect(links.at(5).text()).toMatch('5')
})

it('renders 1-5 if many pages and on page 2', () => {
  const pagination = mount(
    <Pagination currentPage={2} hrefPrefix='/blog' totalPages={20} />
  )
  const links = pagination.find('.page-link')
  expect(links.length).toEqual(7)
  expect(links.first().text()).toMatch('Prev')
  expect(links.last().text()).toMatch('Next')
  expect(links.at(1).text()).toMatch('1')
  expect(links.at(2).text()).toMatch('2')
  expect(links.at(3).text()).toMatch('3')
  expect(links.at(4).text()).toMatch('4')
  expect(links.at(5).text()).toMatch('5')
})

it('renders 1-5 if many pages and on page 3', () => {
  const pagination = mount(
    <Pagination currentPage={3} hrefPrefix='/blog' totalPages={20} />
  )
  const links = pagination.find('.page-link')
  expect(links.length).toEqual(7)
  expect(links.first().text()).toMatch('Prev')
  expect(links.last().text()).toMatch('Next')
  expect(links.at(1).text()).toMatch('1')
  expect(links.at(2).text()).toMatch('2')
  expect(links.at(3).text()).toMatch('3')
  expect(links.at(4).text()).toMatch('4')
  expect(links.at(5).text()).toMatch('5')
})

it('renders 2-6 if many pages and on page 4', () => {
  const pagination = mount(
    <Pagination currentPage={4} hrefPrefix='/blog' totalPages={20} />
  )
  const links = pagination.find('.page-link')
  expect(links.length).toEqual(7)
  expect(links.first().text()).toMatch('Prev')
  expect(links.last().text()).toMatch('Next')
  expect(links.at(1).text()).toMatch('2')
  expect(links.at(2).text()).toMatch('3')
  expect(links.at(3).text()).toMatch('4')
  expect(links.at(4).text()).toMatch('5')
  expect(links.at(5).text()).toMatch('6')
})

it('renders 3-7 if many pages and on page 5', () => {
  const pagination = mount(
    <Pagination currentPage={5} hrefPrefix='/blog' totalPages={20} />
  )
  const links = pagination.find('.page-link')
  expect(links.length).toEqual(7)
  expect(links.first().text()).toMatch('Prev')
  expect(links.last().text()).toMatch('Next')
  expect(links.at(1).text()).toMatch('3')
  expect(links.at(2).text()).toMatch('4')
  expect(links.at(3).text()).toMatch('5')
  expect(links.at(4).text()).toMatch('6')
  expect(links.at(5).text()).toMatch('7')
})

it('renders 16-20 if 20 pages and on page 17', () => {
  const pagination = mount(
    <Pagination currentPage={17} hrefPrefix='/blog' totalPages={20} />
  )
  const links = pagination.find('.page-link')
  expect(links.length).toEqual(7)
  expect(links.first().text()).toMatch('Prev')
  expect(links.last().text()).toMatch('Next')
  expect(links.at(1).text()).toMatch('15')
  expect(links.at(2).text()).toMatch('16')
  expect(links.at(3).text()).toMatch('17')
  expect(links.at(4).text()).toMatch('18')
  expect(links.at(5).text()).toMatch('19')
})

it('renders 16-20 if 20 pages and on page 18', () => {
  const pagination = mount(
    <Pagination currentPage={18} hrefPrefix='/blog' totalPages={20} />
  )
  const links = pagination.find('.page-link')
  expect(links.length).toEqual(7)
  expect(links.first().text()).toMatch('Prev')
  expect(links.last().text()).toMatch('Next')
  expect(links.at(1).text()).toMatch('16')
  expect(links.at(2).text()).toMatch('17')
  expect(links.at(3).text()).toMatch('18')
  expect(links.at(4).text()).toMatch('19')
  expect(links.at(5).text()).toMatch('20')
})

it('renders 16-20 if 20 pages and on page 19', () => {
  const pagination = mount(
    <Pagination currentPage={19} hrefPrefix='/blog' totalPages={20} />
  )
  const links = pagination.find('.page-link')
  expect(links.length).toEqual(7)
  expect(links.first().text()).toMatch('Prev')
  expect(links.last().text()).toMatch('Next')
  expect(links.at(1).text()).toMatch('16')
  expect(links.at(2).text()).toMatch('17')
  expect(links.at(3).text()).toMatch('18')
  expect(links.at(4).text()).toMatch('19')
  expect(links.at(5).text()).toMatch('20')
})

it('renders 16-20 if 20 pages and on page 20', () => {
  const pagination = mount(
    <Pagination currentPage={20} hrefPrefix='/blog' totalPages={20} />
  )
  const links = pagination.find('.page-link')
  expect(links.length).toEqual(7)
  expect(links.first().text()).toMatch('Prev')
  expect(links.last().text()).toMatch('Next')
  expect(links.at(1).text()).toMatch('16')
  expect(links.at(2).text()).toMatch('17')
  expect(links.at(3).text()).toMatch('18')
  expect(links.at(4).text()).toMatch('19')
  expect(links.at(5).text()).toMatch('20')
})

it('creates correct page urls with /blog prefix', () => {
  const pagination = mount(
    <Pagination currentPage={1} hrefPrefix='/blog' totalPages={20} />
  )
  const links = pagination.find('.page-link')
  expect(links.first().prop('href')).toEqual('/blog')
  expect(links.last().prop('href')).toEqual('/blog/2')
  expect(links.at(1).prop('href')).toEqual('/blog')
  expect(links.at(2).prop('href')).toEqual('/blog/2')
  expect(links.at(3).prop('href')).toEqual('/blog/3')
  expect(links.at(4).prop('href')).toEqual('/blog/4')
  expect(links.at(5).prop('href')).toEqual('/blog/5')
})

it('creates correct page urls with / prefix', () => {
  const pagination = mount(
    <Pagination currentPage={1} hrefPrefix='/' totalPages={20} />
  )
  const links = pagination.find('.page-link')
  expect(links.first().prop('href')).toEqual('/')
  expect(links.last().prop('href')).toEqual('/2')
  expect(links.at(1).prop('href')).toEqual('/')
  expect(links.at(2).prop('href')).toEqual('/2')
  expect(links.at(3).prop('href')).toEqual('/3')
  expect(links.at(4).prop('href')).toEqual('/4')
  expect(links.at(5).prop('href')).toEqual('/5')
})
