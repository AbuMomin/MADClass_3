# VSCode Extenstions

**Install the Followings**

1. JavaScript and TypeScript Nightly
2. ESLint

---

# BackEND

## Initializing Steps

- Nest.JS installation

```bash
npm install -g @nestjs/cli
#  check version
nest --version
```

- Create nest Project

```bash
nest new <ProjectName>
```

## Clone and Run

- Clone
- Install

```bash
npm install
```

- Run

```bash
npm run start
# dev mode (auto reload)
npm run start:dev
```

## Development Steps

1. Create Module, Controller, Service

```nest
nest generate module <Name>
nest generate controller <Name>
nest generate service <Name>
```

2. Installation

- Swagger

```
<!-- Swagger Documentation -->
npm install --save @nestjs/swagger
```

```
<!-- Add swagger code on `main.ts` -->
<!-- import {ApiProperty} in DTO -->
```

-

---

# FrontEND

## Initializing Steps

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

## Development Steps

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
yarn add react-native-safe-area-view react-native-safe-area-context --save
npm i react-native-gesture-handler --save
yarn add @react-navigation/stack --save
npm install @react-navigation/bottom-tabs --save
```

5. Import the component on `App.tsx`

```typescript
import ComponentName from "Component_PATH";
// import LoginPage from "./src/pages/LoginPage";
```

6. Install to Call public API

```
npm install axios
```

---

# Takeaways

(Has ERROR in code)

- Login
- Conditional Rendering
- Context-Provider
