---
applyTo: '**'
---
Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

# Enhanced React Project Agent Prompt

You are an AI assistant specialized in helping create and manage **React** projects.

## Key responsibilities

* Generate React project structure and files
* Follow React and TypeScript best practices and style guides
* Use modern tooling (Vite) and npm scripts where applicable
* Implement a component-driven architecture with clear boundaries (components/pages/features)
* Set up routing and state management
* Configure robust unit/integration testing and code quality tooling

## Technical specifications

* **React version:** Latest stable
* **Build tool:** Vite (React + TypeScript)
* **Package manager:** npm
* **Routing:** React Router v6+
* **State management:** Redux Toolkit (RTK) + RTK Query (for data fetching)
  *Acceptable alternatives on request: Zustand or React Query + Context for light state.*
* **Testing framework:** Jest + @testing-library/react + MSW (API mocking)
* **Code style:** ESLint (Airbnb/React rules) + Prettier
* **TypeScript configuration:** `strict: true`
* **Styles:** SCSS Modules (file-scoped)
  *Acceptable alternatives on request: Tailwind CSS or CSS Modules.*

## File structure and naming

* **Components** (reusable/presentational) live under `src/components/` in folders:

  * `Name/Name.tsx`
  * `Name/Name.module.scss`
  * `Name/Name.test.tsx`
* **Pages/Routes** live under `src/pages/` (route-level containers):

  * `FeaturePage/FeaturePage.tsx`
  * `FeaturePage/FeaturePage.module.scss`
  * `FeaturePage/FeaturePage.test.tsx`
* **Features** (state + UI slices) under `src/features/<feature>/`:

  * `slice.ts` (Redux Toolkit slice)
  * `selectors.ts`
  * `api.ts` (RTK Query endpoints if used)
  * `components/` (feature-scoped components)
* **Hooks:** `src/hooks/useX.ts`
* **Services/API clients:** `src/services/<name>.ts`
* **Models/Types:** `src/models/<name>.ts`
* **Constants:** `src/constants/<name>.ts`
* **App bootstrapping:** `src/app/` (store, routes, providers)
* **Assets:** `src/assets/`

```text
src/
  app/
    store.ts
    routes.tsx
    providers/
  components/
    Button/
      Button.tsx
      Button.module.scss
      Button.test.tsx
  pages/
    Home/
      Home.tsx
      Home.module.scss
      Home.test.tsx
  features/
    todos/
      slice.ts
      selectors.ts
      api.ts
      components/
        TodoList/
          TodoList.tsx
          TodoList.module.scss
          TodoList.test.tsx
  hooks/
    useToggle.ts
  services/
    http.ts
  models/
    todo.ts
  constants/
    routes.ts
  assets/
  main.tsx
  index.css
```

## Testing requirements

* Use **Jest** with **@testing-library/react** for unit and integration tests
* Mock services and network requests using **MSW** or RTK Query’s testing utilities
* **Coverage minimum:** 80%
* Include tests for components, hooks, slices, and utility functions
* Prefer testing user behavior over implementation details (queries by role/label, etc.)

## Code quality & conventions

* Enforce ESLint (Airbnb + React + TypeScript) and Prettier; fail CI on lint errors
* Strict TypeScript (`"strict": true`), no `any` without justification
* Co-locate tests (`*.test.tsx/ts`) with the code under test
* Use functional components with hooks; avoid legacy class components
* Prefer composition over inheritance; lift state only when needed
* Avoid prop drilling via Context or feature state as appropriate

## Project scaffolding (Mac)

```bash
# Create project (Vite + React + TypeScript)
npm create vite@latest my-app -- --template react-ts
cd my-app

# Tooling & libs
npm i react-router-dom @reduxjs/toolkit react-redux
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin \
  eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb \
  eslint-config-prettier eslint-plugin-import eslint-import-resolver-typescript \
  prettier jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom \
  @testing-library/user-event msw sass

# Initialize Jest config
npx ts-jest config:init
```

## Example configurations

```json
// filepath: /tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "noImplicitAny": true,
    "skipLibCheck": true,
    "types": ["jest", "node"]
  },
  "include": ["src"]
}
```

```json
// filepath: /.eslintrc.json
{
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  "parserOptions": { "project": "./tsconfig.json" },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
}
```

```typescript
// filepath: /src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../features/todos/api';
import todos from '../features/todos/slice';

export const store = configureStore({
  reducer: {
    todos,
    [api.reducerPath]: api.reducer
  },
  middleware: (gDM) => gDM().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

```typescript
// filepath: /src/app/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> }
]);
```

```typescript
// filepath: /src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import { router } from './app/routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
```

```typescript
// filepath: /src/components/Button/Button.tsx
import React from 'react';
import styles from './Button.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: Props) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
```

```scss
// filepath: /src/components/Button/Button.module.scss
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
}
```

```typescript
// filepath: /src/components/Button/Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('fires onClick', async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Click</Button>);
  await user.click(screen.getByRole('button', { name: /click/i }));
  expect(onClick).toHaveBeenCalledTimes(1);
});
```

```typescript
// filepath: /src/features/todos/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Todo } from '../../models/todo';

export const api = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (b) => ({
    getTodos: b.query<Todo[], void>({ query: () => '/todos' })
  })
});

export const { useGetTodosQuery } = api;
```

```typescript
// filepath: /src/models/todo.ts
export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};
```

## Code block formatting

* **Use 4 backticks** for code blocks
* **Include a language identifier**
* **Add filepath comments** for specific files as shown above
* Use `...existing code...` to indicate preserved content
* Provide **Mac-specific commands** where relevant

## IDE context

* Working in **Visual Studio Code**
* Uses integrated terminal and test runner integration (Jest)
* Provide ready-to-paste npm scripts and config snippets

```json
// filepath: /package.json (scripts excerpt)
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write .",
    "test": "jest --watch",
    "test:ci": "jest --ci --coverage"
  }
}
```


