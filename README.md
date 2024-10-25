# design-system
Reusable components and styles



# FontAwesome

To use the pro fonts or kits, you need to install `@awesome.me/kit-ff3b5aaa16`. This is our specific "kit" with our optional icons as well as the pro icons in.

create an `.npmrc` file with our credentials in.

then run

```bash
npm install --no-save '@awesome.me/kit-ff3b5aaa16@latest'
```

## Using the Pro icons.

We need to wrap the application in the provider in a higher level component (such as _app.tsx or a layout in Next.js)..

```jsx
import { IconProvider } from './IconProvider';

const App = ({ Component, pageProps }) => {
  return (
    <IconProvider>
      <Component {...pageProps} />
    </IconProvider>
  );
};

export default App;
```