# Semi-A

## Usage
1. Clone this repository
```sh
git clone https://github.com/ogatakatsuya/Semi-A.git
```
2. Build and Boot
```sh
docker compose up --build
```

## パッケージを追加するとき
以下のいずれかで対応
1. コンテナ内で直接インストール
```sh
docker container exec -it svelte_container sh
npm install
```
2. volumeを削除して再度ビルド
```sh
docker volume rm {your volume name}
docker compose up --build
```

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
