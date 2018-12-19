module.exports = {
  url: function() { return this.api.launchUrl },
  elements: {
    todoInput: '[data-test-id=todoInput]',
    addButton: '[data-test-id=addTodoButton]'
  },
  commands: [{
    enterTodo: function (value) {
      return this.waitForElementVisible('@todoInput', 1000).setValue('@todoInput', value)
    },
    clickAdd: function () {
      return this.waitForElementVisible('@addButton', 1000).click('@addButton')
    },
    getItems: function (cb) {
      return this.api.elements('css selector', `[data-test-id=todoList] li`, ({value}) => {
        const numberOfItems = value.length
        let items = []

        value.forEach(({ELEMENT}) =>
          this.api.elementIdText(ELEMENT, ({value}) => {
            items.push(value)

            if (items.length === numberOfItems) {
              cb(items)
            }
          }))
      })
    }
  }]
}
