# Tasks

If there is something that you do not understand, ask us anything.

An easy way to debug your application is to use console.log (https://developer.mozilla.org/en-US/docs/Web/API/Console)
## Task 1
Change the title of the header to 'My favorite beers' or something else.

All components you will work on is located under the `src` folder and for this task you will need to change something in `App.js`.

Hint: Add a title prop to the `<Header />` component in App.js and make use of it in `Header.js`.

Do you see any changes on your page?

## Task 2
Add the data to the table found in `Product.js`:
```html
<ProductList />
```

As in task 1, you need to send props to `<ProductList />` and make use of it in `ProductList.js`.

You will have to add columns for each value in the Product, e.g. product.name. This can be done in the
`<Product/>` component in `ProductList.js`.

Hint: If you look at the props `ProductList.js` is receiving, you should notice that it needs a prop named products. This can be found in `this.state.products` in `Products.js`.

## Task 3
You get tired of some of the beers and you want to remove them. Make a delete button in `ProductList.js` that removes a beer from the list. Create an `onClick` handler that invokes a function, `handleDeleteProduct` (you need to pass this with props yourself) which removes a beer from the list.

To remove an element from the list, a [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function is needed:

```javascript
someDeleteFunction = (indexToDelete) => {
  const newArray = this.state.array
  .filter((element, index) => /*Some check that returns true needs to be implemented here...*/);

  this.setState({array: newArray});
}
```


Hint: We have already created a button component that you can use.

React Docs: https://facebook.github.io/react/docs/handling-events.html

## Task 4
However, you want to add beers again. Create a form where you add name, price and image. This is done here:

```html
<ProductForm />
```

### 4.1 - Is there any change here?
In `ProductForm.js` you should make use of the `onFieldChange` and this method should be injected to the `onChange` listener for each input field. When `onFieldChange` is called: Set the state based on the input field that changed. This can be achieved, for instance, by using dynamic object keys, based on the input name, like this:

```javascript
this.setState({
  [name]: value
});
```
Hint: name is found based on the event sent to `onFieldChange` function (event.target.name).

### 4.2 - Submitting all the things
When submitting, the state should be set to the default state. Use `onSubmit` on the form element and use the `submitProduct` function in the products component. This function should again call `handleAddProduct` in `Products.js` where the product is added to the state.

Adding a new element to an array in the state can be done like this:
```javascript
someFunction = (newElement) => {
  this.setState(prevState => ({
    array: prevState.array.concat(newElement)
  }));
}
```

Remember to pass the `handleAddProduct` function in `Products.js` as prop to the `<ProductForm />` component.

Read more about form handling in React here: https://facebook.github.io/react/docs/forms.html

## Task 5
When the number of beers increases, we want to filter the list to find the correct beer. The filter field can be found in:

```html
<ProductFilter />
```

`ProductFilter` is supposed to update the filter state in the Product component. This will cause the Product component and the ProductList to re-render. Add a filter function to the `productList` as shown here:

```javascript
const productList = products.filter(filter => true)
.map((product) => <Product />);
```
However, this filter function will always return true and hence all the beers, which you'll have to fix.

Hint: String has an includes function that you can utilize in the filter method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

Filter method documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


## Task 6
You have now successfully created a small application in React. However, there's something missing. Each component should validate the properties sent to it. Implement props validation in each component found under the Products folder.

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
Take advantage of the life cycle methods in React. When a component mounts, you want to fetch some data (in this case, beers) from an API. Use the [fetch](https://github.com/github/fetch#json) function to retrieve the initial list of beers and use this to populate the component's state.

Tip: In `componentWillMount()`

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
Ask us anything React or about Knowit!
