<div align="center">
  <img src="./public/vercel.svg"  width="30" alt="icon">

<h3>
 US demographic explorer
</h3>
</div>
<div align="center">
    <a href="https://us-demographic-exporer-ofss.vercel.app/" target="_blank">
        Preview
    </a>
    <span>&nbsp;✦&nbsp;</span>
       <a href="#-stack">
        Stack
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-getting-started">
        Getting Started
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#️-useful-commands">
        Commands
    </a>
</div>

## 🛠️ Stack

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

To start work with USA demographic explorer project you will need to have some tools previously installed

#### Prerequisites

- SO: OSX, Linux, Windows with WSL2
- [**NodeJS 22**](https://nodejs.org/en)

#### Technical Information

- [**React**](https://reactjs.org/).
- [**TypeScript**](https://www.typescriptlang.org/) - To work with types.
- [**NextJS**](https://nextjs.org/blog/next-15) - As React framework
- [**TailwindCSS**](https://tailwindcss.com/) - To work with CSS directly in the HTML.
- [**Recharts**](https://recharts.org/en-US) - To graphic charts.
- [**Shadcn**](https://ui.shadcn.com/) - As UI library (combined with TailwindCSS)
- [**Tanstack Query**](https://tanstack.com/query/latest) - As state management library.
- [**Tanstack Table**](https://tanstack.com/table/latest) - As table library (combined with shadcn to make a powerful and easy table handler).

## 🚀 Getting Started

1. [Fork](git@github.com:Matisantillan11/us-demographic-exporer.git) or clone this repository.

```bash
git clone git@github.com:Matisantillan11/us-demographic-exporer.git
```

2. Install the dependencies:

- I use [bun](https://bun.sh) to install and manage the dependencies.

```bash
# Install bun for MacOS, WSL & Linux:
curl -fsSL https://bun.sh/install | bash

# Install bun for Windows:
powershell -c "iwr bun.sh/install.ps1|iex"

# Install with bun:
bun install
```

- or you can use [npm](https://www.npmjs.com/):

```bash
npm install
```

`NOTE:: All lock files are ignored in the repository except bun-lock.`

3. Run the development server:

```bash
# Run with bun:
bun run dev

# Run with yarn:
npm run dev
```

4. Open [**http://localhost:3000**](http://localhost:3000/) with your browser to see the result 🚀

## 🧞 Commands

|     | Command | Action                                                        |
| :-- | :------ | :------------------------------------------------------------ |
| ⚙️  | `start` | Starts local dev server with build files at `localhost:3000`. |
| ⚙️  | `dev`   | Starts local dev server at `localhost:3000` usign turbopack.  |
| ⚙️  | `build` | Build your production site to `./dist/`.                      |
| ⚙️  | `lint`  | Run your linter to check for code errors & format your code   |

## 📝 Data-source

All data used in this project is public information from the [**Data USA Reports**](https://datausa.io/profile/geo/united-states)
