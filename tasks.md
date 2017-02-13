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
You get tired of the beer and you want to remove it. Make an delete button that removes the beer from the list. Create an onClick handler that call a function, e.g. handleDeleteProduct which removes the the beer from the list.

Tip: Remember to bind the function in the constructor of the Product component, for example:
```javascript
this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
```

This is something you will need later too.

React Docs: https://facebook.github.io/react/docs/handling-events.html

## Task 4
However, you want to add the beer again. Create an form where you add name, price and image. This is done here:
```html
<ProductForm />
```
onChange: Set the state based on the input field that changed. This can be achieved by something like this:
```javascript
this.setState({
  [name]: value
});
```

Remember to make sure that when submitting, the state should be sat to default state and the evt.target is reset.



Read more about form handling in React here: https://facebook.github.io/react/docs/forms.html

## Task 5
When the amount of beer types increases, we need to be able to filter to find the correct beer. The filter field can be found in
```html
<ProductFilter />
```

ProductFilter is supposed to update the filter state in the Product component. This will make the Product component to re-render and the ProductList will re-render. Add an filter function to the productList as shown here:
```javascript
const productList = products.filter(filter => true)
.map((product) => <Product />);
```
However, this filter function will always return true and hence all the beers.

Filter method documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
## Task 6
The last task is to make use of the life cycles events in React. In the data folder, a list of beers are added to a json file. This file is imported in the products component. When a component is about to get mounted, add the json file to the state.

Tip: componentWillMount

Docs: https://facebook.github.io/react/docs/state-and-lifecycle.html

## Are you finished?
Play with react.
