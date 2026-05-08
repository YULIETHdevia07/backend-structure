# Resumen desarrollo backend App-INC

## 1. Inicialización del proyecto

Se creó el proyecto Node.js con:

```bash
npm init -y
```

---

## 2. Instalación de dependencias principales

Se instalaron:
- express
- cors
- dotenv
- bcryptjs
- jsonwebtoken
- prisma
- @prisma/client

Comando:

```bash
npm install express cors dotenv bcryptjs jsonwebtoken prisma @prisma/client
```

---

## 3. Instalación de dependencias de desarrollo

Se instalaron:
- typescript
- ts-node-dev
- @types/node
- @types/express
- @types/cors
- @types/jsonwebtoken
- tsx

Comandos:

```bash
npm install -D typescript ts-node-dev @types/node

npm install -D @types/express @types/cors

npm install -D @types/jsonwebtoken

npm install -D tsx
```

---

## 4. Configuración TypeScript

Se creó:

```txt
tsconfig.json
```

Comando:

```bash
npx tsc --init
```

---

## 5. Configuración Prisma

Se inicializó Prisma:

```bash
npx prisma init
```

Se crearon:
- prisma/
- schema.prisma
- prisma.config.ts
- .env

---

## 6. Configuración MySQL

Se configuró:

```env
DATABASE_URL
```

para conectar MySQL local mediante XAMPP y HeidiSQL.

---

## 7. Configuración ECMAScript

En `package.json`:

```json
"type": "module"
```

para usar:

```ts
import/export
```

---

## 8. Migraciones Prisma

Se ejecutó:

```bash
npx prisma migrate dev --name init
```

Se creó:

```txt
prisma/migrations/
```

---

## 9. Estructura profesional backend

Se creó:

```txt
src/
├── app.ts
├── server.ts
├── config/
├── controllers/
├── routes/
├── services/
├── middlewares/
├── interfaces/
├── utils/
└── prisma/
```

---

## 10. Configuración Express

En:

```txt
src/app.ts
```

Se configuró:
- express
- cors
- express.json()
- rutas `/api`

---

## 11. Configuración servidor

En:

```txt
src/server.ts
```

Se configuró:
- puerto
- app.listen()

---

## 12. Configuración scripts

En `package.json`:

```json
"scripts": {
  "dev": "tsx watch src/server.ts"
}
```

Ejecución:

```bash
npm run dev
```

---

## 13. Creación Prisma Client

Archivo:

```txt
src/prisma/client.ts
```

Configurado:

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
```

---

## 14. Sistema de rutas

Se crearon:
- routes/index.ts
- routes/user.routes.ts

Endpoints:
- GET /api/health
- GET /api/users

---

## 15. Controlador usuarios

Archivo:

```txt
src/controllers/user.controller.ts
```

Se implementó:
- getUsers()
- registerUser()
- loginUser()

---

## 16. Registro usuarios

Endpoint:

```http
POST /api/users/register
```

Funciones:
- validación campos vacíos
- validación email existente
- bcrypt hash password
- guardar usuario MySQL
- ocultar password en respuesta

---

## 17. Login JWT

Endpoint:

```http
POST /api/users/login
```

Funciones:
- validar email
- validar password
- bcrypt.compare()
- generar JWT
- devolver token
- devolver usuario autenticado sin password

---

# Estado actual backend

Actualmente el proyecto ya cuenta con:

- Express funcionando  
- TypeScript funcionando  
- Prisma funcionando  
- MySQL conectado  
- Migraciones Prisma  
- Arquitectura backend profesional  
- CRUD básico usuarios  
- Registro usuarios  
- Login JWT  
- Autenticación básica  
- Validaciones iniciales  
- Backend listo para continuar con middleware JWT y rutas protegidas