# Tasks

If there is something that you do not understand, ask us anything.

An easy way to debug your application is to use console.log (https://developer.mozilla.org/en-US/docs/Web/API/Console)

## Task 1

Change the title of the header to 'My favorite beverages' or something else.

All components you will work on is located under the `src` folder and for this task you will need to change something in `App.js`.

Hint: Add a title prop to the `<Header />` component in App.js and make use of it in `Header.js`.

Do you see any changes on your page?

## Task 2

Add the data to the table found in `ProductList.js`:

```html
<ProductList />
```

As in task 1, you need to send props to `<ProductList />` and make use of it in `ProductList.js`.

You will have to add columns for each value in the Product, e.g. product.name. This can be done in the
`<Product/>` component in `ProductList.js`.

Hint: If you look at the props `ProductList.js` is receiving, you should notice that it needs a prop named products. `Products.js` has a `products` variable given by `useState`.

## Task 3

You get tired of some of the beverages and you want to remove them. Make a delete button in `ProductList.js` that removes a beer from the list. Create an `onClick` handler that invokes a function, `handleDeleteProduct` (you need to pass this with props yourself) which removes a beer from the list.

To remove an element from the list, a [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function is needed:

```javascript
handleDeleteProduct = (indexToDelete) => {
  const newArray = products.filter((element, index) => /*Some check that returns true needs to be implemented here...*/);

  setProducts(newArray);
}
```

Hint: We have already created a button component that you can use.

Hint 2: `key` serve as a hint to React but they don’t get passed to your components.

React Docs for events: https://reactjs.org/docs/handling-events.html

React Docs for useState hook: https://reactjs.org/docs/hooks-overview.html#state-hook

React Docs for useState hook if you are familiar with React classes: https://reactjs.org/docs/hooks-state.html


## Task 4

However, you want to add beverages again. Create a form where you add name, price and image. This is done here:

```html
<ProductForm />
```

### 4.1 - Is there any change here?

In `ProductForm.js` you should make use of the `handleFieldChange` and this method should be injected to the `onChange` listener for each input field. When `handleFieldChange` is called: Set the state based on the input field that changed. This can be achieved, for instance, by using dynamic object keys, based on the input name, like this:

```javascript
setItem({
  ...item,
  [name]: value,
});
```

Hint: name is found based on the event sent to `handleFieldChange` function (event.target.name).

### 4.2 - Submitting all the things

When submitting, the state should be set to the default state. Use `onSubmit` on the form element and use the `submitProduct` function in the products component. This function should again call `handleAddProduct` in `Products.js` where the product is added to the state.

Adding a new element to an array in the state can be done like this:

```javascript
someFunction = newElement => {
  setArray([...array, newElement]);
};
```

Remember to pass the `handleAddProduct` function in `Products.js` as prop to the `<ProductForm />` component.

Read more about form handling in React here: https://reactjs.org/docs/forms.html

## Task 5

When the number of beverages increases, we want to filter the list to find the correct beer. The filter field can be found in:

```html
<ProductFilter />
```

`ProductFilter` is supposed to update the filter state in the Product component. This will cause the Product component and the ProductList to re-render. Add a filter function to the `productList` as shown here:

```javascript
const productList = products
  .filter(product => /* implement your filtering logic here */)
  .map(product => <Product />);
```

However, this filter function will always return true and hence all the beverages, which you'll have to fix.

Hint: String has an includes function that you can utilize in the filter method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

Filter method documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Hint: You currently do not have a state for your search filter.

## Task 6

You have now successfully created a small application in React. However, there's something missing. Each component should validate the properties sent to it. Implement props validation in each component found under the Products folder.

Example:

```javascript
SomeComponent.propTypes = {
  someRequiredObject: PropTypes.object.isRequired,
  someRequiredFunction: PropTypes.func.isRequired,
  someOptionalString: PropTypes.string,
};
```

Hint: Remember to import PropTypes:

```javascript
import PropTypes from 'prop-types';
```

Docs: https://reactjs.org/docs/typechecking-with-proptypes.html

## Task 7

Take advantage of the useEffect hook in React. When a component mounts, you want to fetch some data (in this case, beverages) from a REST API. Use the [fetch](https://github.com/github/fetch#json) function to retrieve the initial list of beverages and use this to populate the component's state.

Tip: To only run `useEffect` once (on mount), you can pass an empty array `[]` as a second argument to `useEffect`.

```javascript
  fetch('/data.json')
    .then(response => response.json())
    .then(beverages => /* What here? */);
```

Docs: https://reactjs.org/docs/hooks-effect.html

Try changing the URL. Does your application still work? Add error handling to the fetch as well!

## Task 8

Woho! Finally finished? Not so fast.

There is a bug in our code. Type something in the filter and try to delete a beverage. Was the correct beverage deleted?

In general it's a bad idea to use indices in React. Rewrite the delete functionality to use the id field provided by `data.json`.

Hint: Remember to provide id when adding new beverages. You can use `new Date().getTime()` to generate an unique id.

## Task 9

Choose whatever subtask you want to try out.

### 9.1 TypeScript

Convert the code to TypeScript. Types are great, aren't they?

Too get started, see here: https://create-react-app.dev/docs/adding-typescript

### 9.2 Async Await

Convert task 7 data fetching to make use of async await with error handling.

Async await documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

### 9.3 GraphQL

We have made a simple GraphQL endpoint for you to use. You can explore the schema at: https://react-workshop-api.now.sh

As in Task 7 you can use the fetch function to retrieve data:

```
fetch('https://react-workshop-api.now.sh/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: '{ posts { title } }' }),
})
```

Docs: https://graphql.org/learn/queries/

## Are you finished?

Ask us anything React. Or anything else, e.g. GraphQL, TypeScript...
