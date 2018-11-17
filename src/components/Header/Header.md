Example with Made Tech logo:

```jsx
<Header
  logoHref='/'
  navLinks={[
    <a href='/agile-transformation' className='nav-link'>
      Agile Team Transformation
    </a>,

    <a href='/software-development' className='nav-link'>
      Software Development
    </a>,

    <a href='/continuous-delivery' className='nav-link'>
      Continuous Delivery
    </a>,

    <a href='/devops' className='nav-link'>
      DevOps &amp;
      <br className='d-none d-lg-block' />
      Live Services
    </a>
  ]}
  />
```

Example with custom logo:

```jsx
<Header
  logoHref='/'
  logoText='Learn Tech'
  navLinks={[
    <a href='/' className='nav-link'>
      Getting Started
    </a>,

    <a href='/help' className='nav-link'>
      Ask for Help
    </a>
  ]}
  />
```
