```jsx
<Jumbotron>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-10 offset-lg-1'>
        <h1>Made Tech Blog</h1>
        <p>Writings on building software delivery capabilities, delivering digital & technology, and running live services for ambitious organisations.</p>
      </div>
    </div>
  </div>
</Jumbotron>
```

You can add extra class names to the Jumbotron like so:

```jsx
<Jumbotron extraClassName='py-3'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-8 offset-lg-2'>
        <h1>Made Tech Blog</h1>
        <p>Writings on building software delivery capabilities, delivering digital & technology, and running live services for ambitious organisations.</p>
      </div>
    </div>
  </div>
</Jumbotron>
```

With background image:

```jsx
<Jumbotron backgroundUrl='https://www.madetech.com/assets/sectors/government/master_header_westminster-456ab9fe224157f2e946461ffd8af43e.jpg'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-8 offset-lg-2'>
        <h3>Made Tech Blog</h3>
        <p>Writings on building software delivery capabilities, delivering digital & technology, and running live services for ambitious organisations.</p>
      </div>
    </div>
  </div>
</Jumbotron>
```
