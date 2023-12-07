# VSCode Extenstions

**Install the Followings**

1. JavaScript and TypeScript Nightly
2. ESLint

---

# BackEND

**Ref: [Nest.js Documentation](https://docs.nestjs.com/)**

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

- Swagger API Documentation

  ```
  <!-- Swagger Documentation -->
  npm install --save @nestjs/swagger
  ```

  ```
  <!-- Add swagger code on `main.ts` -->
  <!-- import {ApiProperty} in DTO -->
  ```

  ```
  localhost:<PORT>/docs  <!-- Swagger view-->
  ```

- Class/Input Validator on DTO (Post Request)

  ```
   npm i --save class-validator
  ```

## Database

**Ref: [Nest.js Database](https://docs.nestjs.com/techniques/database)**

0.  Install PostgreSQL as per documentation Online (Note the Database User, Password, PORT)

1.  DB necessary Installation

```
yarn add --save @nestjs/typeorm typeorm      <!-- TypeORM -->
yarn add --save @nestjs/config      <!-- Config -->
yarn add --save pg          <!-- Postgres Client -->
yarn add dotenv         <!-- Config alternative for `.env` file-->
```

2.  **DataGrip** Setup

    - Open project / Clone from Git
    - Press `+` button > `Data Source` > Add a Database
    - Configure the database using User,Password,PORT
    - Test connection before `Apply`

3.  DB Migration

**Sync Database among contributors**

- Installation

  ```
  yarn add db-migrate-pg
  ```

- Create a file named `.db-migraterc`

      {
      "sql-file": true,
      "configFile": "./migrations/database.json"
      }

- Create a folder name `migrations`, create a file `database.json` --> check project for code

- Migration Commands

  ```
  npx db-migrate create init-<Table_NAME>

  <!-- After pulling from git -->
  npx db-migrate down
  npx db-migrate up

  ```

- ***

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

7. For Simulator

```
yarn add expo-dev-client --save
```

## Simulators and Expo-mobile-app

1. Expo Mobile App

   - Install expo go from App Store.
   - Run `yarn expo start`
   - Scan the QR code from VS-Code terminal.
   - Run your application on Expo Mobile App.

2. [Run Android Simulator](https://www.youtube.com/watch?v=WKGGQVSUoqA)

3. [Run iOS Simulator](https://www.youtube.com/watch?v=Ws-wnDywtMI)

---

# Takeaways

(Has ERROR in code)

- NestJS structure
- controller, service, module.
- HTTP request and response
- API testing using Postman
- DTO
