# sebra

This project utilizes [Vite](https://vitejs.dev/guide/) with React + [MUI](https://mui.com), leveraging TypeScript for enhanced development experience.

## Features

- **Prettier**: Ensures consistent code formatting.
- **Eslint**: Performs code linting for error checking.
- **Common Components**: Includes a set of common components, useful hooks, and essential utilities.
- **State Management**: Utilizes Context API for state management.
- **Public and Private Layouts**: Offers different and customized layouts for public and private sections.
- **Authentication**: Provides basic authentication hooks and events.

## Prerequisites

1. Node v20 and pnpm (installed via `corepack enable pnpm`)
2. Copy the `.env.example` file into `.env`.
3. Install deps (`pnpm install`)

## Folder Structure

```
├── assets                  # Static assets like images, fonts, etc.
│   ├── images              # Image assets
│   └── scss                # SCSS stylesheets
├── features                # Feature based modules
│   ├── xxx ...
│   │   ├── api             # API service files
│   │   ├── components      # Feature based components
│   │   ├── hooks           # Custom hooks
│   │   └── pages           # Feature based pages
│   └── yyy ...
├── hooks                   # Custom React hooks
├── layout                  # Contains layout components
├── plugins                 # Contains plugin components
├── routes                  # Route configuration files
├── store                   # Store configuration files
├── theme                   # Theme configuration files
├── ui-component            # Reusable UI components
└── utils                   # Utility functions and helpers
```

## Available Scripts

In the project directory, you can run:

- `pnpm dev`: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `pnpm lint`: Checks the code for errors and missing things.
- `pnpm format`: Formats the code according to the `.prettierrc.js` config.
- `pnpm test`: Launches the test runner in interactive watch mode.
- `pnpm build`: Builds the app for production or local development to the `dist` folder.

Feel free to reach out if you have any questions or need further assistance!
