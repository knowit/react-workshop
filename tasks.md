# Tasks

If there is something that you do not understand, ask us anything.

An easy way to debug your application is to use console.log (https://developer.mozilla.org/en-US/docs/Web/API/Console)
## Task 1
Change the title of the header to 'My favorite beers' or something else.

All components you will work on is located under the `src` folder and for this task you will need to change something in `App.js`.

Hint: Add a title prop to the `<Header />` component in App.js and make use of it in `Header.js`.

## Task 2
Add the data to a table which is found here in `Product.js`:
```html
<ProductList />
```

As in task 1, you need to send props to `<ProductList />` and make use of it in `ProductList.js`.

You will need to add columns for each value in the Product, e.g. product.name. This can be done in the
`<Product/>` component in `ProductList.js`.

Hint: If you look at the props `ProductList.js` is receiving, you should notice that it will need a prop named products. This can be found in this.state.products in `Products.js`.

## Task 3
You get tired of the beer and you want to remove it. Make a delete button that removes the beer from the list. Create an `onClick` handler that invokes a function, handleDeleteProduct which removes the beer from the list.

To remove an element from the list, a filter function is needed:

```javascript
someDeleteFunction = (deletedIndex) => {
  const arr = this.state.array
  .filter((element, index) => /*Some check needs to be done here...*/);

  this.setState({array: arr});
}
```


Hint: We have already created a button component that you can use.

React Docs: https://facebook.github.io/react/docs/handling-events.html

## Task 4
However, you want to add the beer again. Create a form where you add name, price and image. This is done here:

```html
<ProductForm />
```

### 4.1 - Is there any change here?
In `ProductForm.js` you should make use of the onFieldChange and this method should be injected to the onChange listener for each input field. When `onFieldChange` is called: Set the state based on the input field that changed. This can be achieved, for instance, by using dynamic object keys, based on the input name, like this:

```javascript
this.setState({
  [name]: value
});
```
Hint: name is found based on the event sent to `onFieldChange` function.

### 4.2 - Submitting all the things
When submitting, the state should be sat to default state. Use `onSubmit` on the form element and make use of the `submitProduct` function in products component. This function should again make use of the `handleAddProduct` in `Products.js` where the product is added to the state.

Adding a new element to an array in the state can be done like this:
```javascript
someFunction = (newElement) => {
  this.setState(prevState => ({
    array: [...prevState.array, newElement]
  }));
}
```

Remember to send the `handleAddProduct` function in `Products.js` as prop to the `<ProductForm />` component.

Hint: In addition to setting the state to default, you should use `evt.target.reset()` in `submitProduct`.

Read more about form handling in React here: https://facebook.github.io/react/docs/forms.html

## Task 5
When the amount of beer types increases, we need to be able to filter to find the correct beer. The filter field can be found in

```html
<ProductFilter />
```

ProductFilter is supposed to update the filter state in the Product component. This will make the Product component to re-render and the ProductList will re-render. Add an filter function to the `productList` as shown here:

```javascript
const productList = products.filter(filter => true)
.map((product) => <Product />);
```
However, this filter function will always return true and hence all the beers.

Filter method documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


## Task 6
You have now successfully created a small application in React. However, there is something missing. Each component needs to validate the properties sent to it. Implement prop validation in each component found under the Products folder.

Example:
```javascript
SomeComponent.propTypes = {
  someRequiredObject: PropTypes.object.isRequired,
  someOptionalString: PropTypes.string,
};
```

Hint: Remember to import PropTypes:
```javascript
import React, { PropTypes } from 'react';
```
Docs: https://facebook.github.io/react/docs/typechecking-with-proptypes.html

## Task 7
Take advantage of the life cycles events in React. When a component mounts, you want to fetch some data (in this case, beers) from an API. Use the [fetch](https://github.com/github/fetch#json) function to retrieve the initial list of beers and use this to populate the component's state.

Tip: `componentWillMount()`

```javascript
  fetch('/data.json')
    .then(response => response.json())
    .then(beers => /* What here? */);
```

Docs: https://facebook.github.io/react/docs/state-and-lifecycle.html

Try changing the URL. Does your application still work? Add error handling to the fetch as well!

## Task 8
Join us @ `Den Gode Nabo`. PS: You can't start here.

## Are you finished?
`<React together or alone... :) />`
