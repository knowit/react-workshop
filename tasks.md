# Tasks

If there is something that you do not understand, ask us anything.

## Task 1
Change the title of the header to 'My favourite beers' or something else.

## Task 2
Add the data to a table which is found here:
```html
<ProductList />
```


## Task 3
You get tired of the beer and you want to remove it. Make a delete button that removes the beer from the list. Create an `onClick` handler that invokes a function, handleDeleteProduct which removes the beer from the list.

Hint: We have already created a button component that you can use.

React Docs: https://facebook.github.io/react/docs/handling-events.html

## Task 4
However, you want to add the beer again. Create a form where you add name, price and image. This is done here:

```html
<ProductForm />
```

`onChange`: Set the state based on the input field that changed. This can be achieved, for instance, by using dynamic object keys, based on the input name, like this:

```javascript
this.setState({
  [name]: value
});
```

Remember to make sure that when submitting, the state should be sat to default state and the evt.target is reset.

Tip: Use `onSubmit` on the form element and make use of the `handleAddProduct` method in products component.

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
