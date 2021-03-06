# Tauri + Svelte App Template

This is a quick-start template for creating a Tauri app using Sveltejs, based on
the Svelte template at https://github.com/sveltejs/template.

## Pre-requisites
Go to https://tauri.studio and set up Tauri for your operating system. Also
install `yarn` if you want to follow the instructions here verbatim.

Check that Tauri is working by creating a throwaway test project:
```bash
yarn tauri init
```
If that doesn't appear to be working, `yarn tauri info` might give some helpful information.

## Create A Tauri + Svelte App 
1. Create a new Tauri + Svelte project using
```bash
  npx degit vikbert/pactify svelte-app
  cd svelte-app
```

2. Edit the `config.json` and `src-tauri/tauri.config.json` files to configure your
app.
```bash
# package.json
"scripts": {
  "tauri": "tauri",
  ...
}

# src-tauri/tauri.config.json
"build": {
  "distDir": "../public",
  ...
},
```

## Development

Install the dependencies and start your Svelte development server:
```bash
cd svelte-app
npm install
npm run dev
```

In another console, start the Tauri development environment:
```bash
cd svelte-app
npm run tauri dev
```

## Build
```bash
npm run build
npm run tauri build 
# look for the released .app and .dmg files in "pactify/src-tauri/target/release/bundle/"
```


You should see your Tauri app window display the Svelte "Hello World" app. This
will take a while to happen the first time you do this, while dependencies are
downloaded and built.

## Info

This template is just to get your development environment set up. For how to
proceed from this point, refer to the Svelte and Tauri websites.

## LICENSE

Everything is GPL3.0 unless otherwise stated. Any contributions are accepted on the condition they conform to this license.

See also ./LICENSE
