# Vue components lib template

Initial setup for a Vue 3 SFC library using Vite.

## Usage

The custom CSS defined in the `style` section of the Vue Single File Components (SFC) packaged by Vite as a single external module must be imported in a specific way in your Vue app. It is recommended to do this in the `script setup` section of `App.vue`:

```ts
import "vue-components-lib-template/styles.css";
```

This import is necessary to ensure that the styles are applied correctly to the components. If you do not include this import, the components will not display their styles, rendering them essentially unusable.

Once this is done, you can import the desired components using standard ESM syntax and use them in the `template` section:

```ts
import { SomeComponent } from "vue-components-lib-template";
```

## Development

### Requirements

To develop, you need to have:

- Node.js (version 22.\*)

### Local Setup

To develop the components, you need to have immediate visual feedback just as you are used to receiving it in Vite-based web app development environments with hot reload.

To address this, the project is set up with a `/playground` directory containing basic modules that allow Vite to initialize a local web server where you can work on the components.

First, you need to download all project dependencies (peer, dev, etc.):

```bash
npm install
```

Then you just need to start the development script:

```bash
npm run dev
```

and navigate your browser to the localhost address specified by Vite.
