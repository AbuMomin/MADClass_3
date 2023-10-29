# VSCode Extenstions

**Install the Followings**

1. JavaScript and TypeScript Nightly
2. ESLint

# Initializing Steps

- Install React_Native && Expo together

```bash
yarn create expo-app ProjectName

cd ProjectName

```

- Run Expo, Start Simulating

```bash
yarn expo start
```

## Clone and Run

- Clone
- Install

```bash
yarn
```

- Run

```bash
yarn expo start
```

# Development Steps

1. Store all your components on `src/pages` folder
2. Do not forget to export the component you have designed

```javascript
export default ComponentName;
```

3. Use to component Elsewhere using

```jsx
<ComponentName />
```

4. Add React NAVIGATION

```zsh
yarn add @react-navigation/native --save
yarn add @react-navigation/stack --save
yarn add react-native-safe-area-view react-native-safe-area-context --save
npm i react-native-gesture-handler --save
```

5. Import the component on `App.tsx`

```typescript
import ComponentName from "Component_PATH";
// import LoginPage from "./src/pages/LoginPage";
```

# Takeaways

- React Virtual DOM
- React State
- React Hook
- React Navigator
- React Action Handler
- Image component
