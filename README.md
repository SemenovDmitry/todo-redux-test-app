# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

Задание: Разработка Todo List с использованием React и Redux Toolkit
Цель этого задания - создать простое веб-приложение для управления списком задач (Todo List) с использованием React и Redux Toolkit. Ниже приведены основные требования к приложению:

Интерфейс пользователя:
Должен быть отображен список задач.
Пользователь должен иметь возможность добавлять новые задачи.
Пользователь должен иметь возможность отмечать задачи как выполненные.
Пользователь должен иметь возможность удалять задачи.

Реализация:
Используйте React для создания пользовательского интерфейса.
Для управления состоянием используйте Redux Toolkit.
Создайте необходимые actions, reducers и store для работы с задачами.
Для стилизации компонентов вы можете использовать любой подход на ваш выбор (например, CSS, Styled Components и т. д.).

Дополнительные требования (опционально):
+ Добавьте возможность редактирования задач.
+ Добавьте возможность фильтрации задач по статусу (выполненные / невыполненные).
+ Используйте TypeScript для статической типизации приложения.
+ Реализуйте функционал перетаскивания задач для изменения их порядка в списке.
+ Добавьте возможность сохранения задач в локальное хранилище браузера для сохранения данных между сеансами.
Примечание: Пожалуйста, следуйте указанным требованиям и инструкциям для успешного выполнения задания.
