import { client } from 'nightwatch-api'
import { Given, When, Then } from 'cucumber'

Given(/^I open the page$/, async () => {
  const ret = client.url('https://google.com')
  // const ret = client.page.TodoList().navigate()

  console.log(ret.constructor.name, typeof ret.then)

  await ret
})

When(/I type "(\w+)" in the box/, async item => {
  await client.page.TodoList()
    .waitForElementVisible('@todoInput', 1000)
    .setValue('@todoInput', item)
})

When(/I click the Add button/, async () => {
  await client.page.TodoList()
    .waitForElementVisible('@addButton', 1000)
    .click('@addButton')
})

Then(/I should see "(\w+)" in the list/, async item => {
  await client.expect(['Eggs']).to.contain(item)
})
