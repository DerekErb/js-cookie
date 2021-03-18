# JavaScript Cookie

A tiny JavaScript script for managing browser Cookies.

## Installation

### Direct download

Download the source file and include in your HTML file(s).

## Basic Usage

```javascript
  Cookie.set(strName, strVal, fDays=1, strPath='/', bSec=false);
```

  ### Parameters

* __strName__<br>
Name of the cookie to be set

* __strValue__<br>
Value of the cookie to be set

* __fDays__<br>
The number of days before expiring the cookie. From now.<br>
__Default:__ 1 day

* __strPath_<br>
The path from where the cookie is valid, starting from the root.<br>
__Default:__ root /

* __bSec__<br>
Is the cookie only available through a secure connection (https)?<br>
__Default:__ false

### Create Cookies

Create a cookie, expiring in 1 day and valid across the site:

```javascript
  Cookie.set('cookiename', 'cookievalue');
```

Create a cookie that expires 5 days from now and valid across the site:

```javascript
  Cookie.set('cookiename', 'cookievalue', 5);
```

Create a cookie that expires in 5 days and is valid from your /js folder and subfolder:

```javascript
  Cookie.set('cookiename', 'cookievalue', 5, '/js');
```

### Read Cookies

Read cookie:

```javascript
  Cookie.get('cookiename')  // => cookie's value
  Cookie.get('wrongname')   // => undefined
```

### Deleting Cookies

```javascript
  Cookie.del('cookiename')
```

_Note: Removing a nonexistent cookie neither raises any exception nor returns any value._

## Contributing

Check out the [Contributing Guidelines](CONTRIBUTING.md)

## Security

For vulnerability reports, send an e-mail to `js-cookie at derekerb dot solutions`

## Authors

- [Derek Erb](https://github.com/DerekErb)
- [Victor Polouchine](https://github.com/VictorPolouchine)
