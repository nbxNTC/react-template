# React Template

In this repo i'll show you how to create a new react project and how to organize him.

## Setting-up your machine

First of all, you need to install [Chocolatey](https://chocolatey.org/docs/installation) to manage some packages, and after that, you run these commands in your terminal to install NodeJS and Yarn:

```
choco install yarn
choco install nodejs
```

## Creating a new project

To create a new react project you need to run this command:

```
yarn create react-app name-of-my-project
```

## Installing packages

You need to install the react-router-dom to manage your system routes:

```
yarn add react-router-dom
```

## Cleaning your project

After creating the new project, you need to cleanup it. You can delete these files:

### Folder: src

```
App.css
App.test.js
index.css
logo.svg
serviceWorker.js
setupTests.js
```

### Folder: public

```
favicon.ico
logo192.png
logo512.png
robots.txt
```

Now, you need to setting-up the files that remains.

### Path: src/index.js

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

### Path: src/App.js

```javascript
import React from 'react'

import './global.css'

import Routes from './routes'

const App = () => {
  return (
    <Routes />
  )
}

export default App
```

## Setting-up routes

After that, you need to setting-up the routes of your system. To do that, we can create a new file called __routes.js__.

### Path: src/routes.js

```javascript
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import Home from './views/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/*<Route path="/" component={Home} exact/>*/}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
```