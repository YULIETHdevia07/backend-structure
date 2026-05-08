# Documentación Técnica

## Descripción

Documentación técnica inicial del backend desarrollada con Node.js, Express y TypeScript.

---

# Estructura general del backend

```txt
backend/
│
├── docs/
├── node_modules/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── prisma.config.ts
└── tsconfig.json
```

---

# Descripción de la estructura

| Archivo / Carpeta | Descripción |
|---|---|
| docs | Documentación técnica del proyecto |
| node_modules | Dependencias instaladas del proyecto |
| prisma | Configuración de Prisma y migraciones |
| prisma/migrations | Historial de migraciones de base de datos |
| prisma/schema.prisma | Definición de modelos y conexión Prisma |
| src | Código fuente principal del backend |
| .env | Variables de entorno |
| .gitignore | Archivos ignorados por Git |
| package.json | Dependencias y scripts del proyecto |
| package-lock.json | Control de versiones exactas de dependencias |
| prisma.config.ts | Configuración personalizada de Prisma |
| tsconfig.json | Configuración de TypeScript |

---

# Estructura interna de src

Se organizó la estructura principal del backend dentro de la carpeta `src` para separar responsabilidades y mantener una arquitectura escalable.

### Estructura 

```txt
src/
│
├── server.ts
├── app.ts
│
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

# Descripción de carpetas

| Carpeta | Descripción |
|---|---|
| config | Configuraciones generales del proyecto |
| controllers | Controladores de las peticiones |
| routes | Definición de rutas de la API |
| services | Lógica de negocio |
| middlewares | Middlewares personalizados |
| interfaces | Interfaces y tipados TypeScript |
| utils | Funciones reutilizables |
| prisma | Configuración y cliente Prisma |

---

# Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- Prisma ORM
- MySQL
- TSX
- Cors

---

# Configuración inicial

## Instalación de dependencias

### Dependencias principales

```bash
npm install express cors dotenv
```

### Dependencias de desarrollo

```bash
npm install -D typescript tsx @types/node @types/express @types/cors
```

---

# Configuración de scripts

## package.json

```json
"scripts": {
  "dev": "tsx watch src/server.ts"
}
```

---

# Ejecución del proyecto

## Comando

```bash
npm run dev
```

---

# Arquitectura utilizada

```txt
Route -> Controller -> Service -> Prisma
```

---

# Archivos principales

## src/app.ts

Archivo encargado de:

- Inicializar Express
- Configurar middlewares
- Configurar CORS
- Registrar rutas
- Exportar la aplicación

---

## src/server.ts

Archivo principal encargado de:

- Importar la aplicación
- Definir puerto
- Inicializar el servidor

---

## src/prisma/client.ts

Archivo encargado de crear y exportar la instancia de Prisma Client.

---

# Variables de entorno

## Archivo

```txt
.env
```

## Variables

```env
PORT=3000
DATABASE_URL=
JWT_SECRET=
```

---

# Estado actual del proyecto

| Módulo | Estado |
|---|---|
| Configuración Express | Completo |
| Configuración TypeScript | Completo |
| Configuración Prisma | Completo |
| Rutas iniciales | Completo |
| Controladores iniciales | Completo |
| Login JWT | Pendiente |
| Registro de usuarios | Pendiente |
| Middleware autenticación | Pendiente |

---

# Notas técnicas

- El proyecto utiliza TypeScript para mejorar el tipado y mantenimiento.
- TSX permite ejecutar archivos TypeScript sin compilación manual.
- Prisma ORM se utiliza para la conexión y consultas a MySQL.
- La arquitectura está organizada por responsabilidades para facilitar escalabilidad y mantenimiento.

---