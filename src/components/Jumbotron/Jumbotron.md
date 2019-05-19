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
<Jumbotron extraClassName='py-5 text-center'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-8 offset-lg-2'>
        <h3>Made Tech Blog</h3>
        <p>Writings on building software delivery capabilities, delivering digital & technology, and running live services for ambitious organisations.</p>
        <p>
          <button className='btn btn-outline-light'>
            Find out more
          </button>
        </p>
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
      <div className='col-lg-10 offset-lg-1 px-4 py-5'>
        <h3>Made Tech Blog</h3>
        <p>Writings on building software delivery capabilities, delivering digital & technology, and running live services for ambitious organisations.</p>
      </div>
    </div>
  </div>
</Jumbotron>


<Jumbotron backgroundUrl='https://www.madetech.com/assets/sectors/government/quote_background-b324bf74b5381fe447654e9e8c457eaa.jpg'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-8 offset-lg-2 py-5'>
        <blockquote><p>Made Tech's commitment to partnering with and strengthening their clients is exactly what many organisations need.</p></blockquote>

        <p>James Stewart, Deputy CTO, UK Central Government</p>
      </div>
    </div>
  </div>
</Jumbotron>
```
