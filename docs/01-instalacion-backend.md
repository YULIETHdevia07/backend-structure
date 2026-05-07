# Instalación Inicial Backend

## 1. Inicialización del proyecto Node.js

### Comando ejecutado

```bash
npm init -y
```

### Descripción

Este comando crea el archivo `package.json`, el cual contiene la configuración principal del proyecto backend.

---

# 2. Instalación de dependencias principales

### Comando ejecutado

```bash
npm install express cors dotenv bcryptjs jsonwebtoken prisma @prisma/client
```

### Dependencias instaladas

| Dependencia | Descripción |
|---|---|
| express | Framework para crear APIs y servidor backend |
| cors | Permite comunicación entre frontend y backend |
| dotenv | Maneja variables de entorno |
| bcryptjs | Encriptación de contraseñas |
| jsonwebtoken | Generación de tokens JWT |
| prisma | ORM para manejo de base de datos |
| @prisma/client | Cliente Prisma para consultas |

---

# 3. Instalación de dependencias de desarrollo

### Comando ejecutado

```bash
npm install -D typescript ts-node-dev @types/node
```

### Dependencias instaladas

| Dependencia | Descripción |
|---|---|
| typescript | Permite usar TypeScript |
| ts-node-dev | Ejecuta TypeScript en desarrollo |
| @types/node | Tipado de Node.js para TypeScript |

---

# 4. Inicialización de TypeScript

### Comando ejecutado

```bash
npx tsc --init
```

### Resultado

Se creó el archivo:

```txt
tsconfig.json
```

Este archivo contiene la configuración de TypeScript para el proyecto.

---

# 5. Inicialización de Prisma

### Comando ejecutado

```bash
npx prisma init
```

### Resultado

Se crearon los siguientes archivos:

```txt
prisma/
.env
prisma.config.ts
.gitignore
```

### Descripción

Estos archivos permiten configurar Prisma y la conexión con la base de datos.

---

# 6. Variables de entorno

## Archivo `.env`

Ejemplo de configuración:

```env
DATABASE_URL="mysql://root:1234@localhost:3306/app_inc"

PORT=4000

JWT_SECRET="miclavesegura"
```

---

# 7. Configuración de Prisma para MySQL

## Archivo `schema.prisma`

### Descripción

Este archivo define:

- El proveedor de base de datos
- Los modelos de Prisma
- La estructura de tablas
- La generación del cliente Prisma

---

# 8. Configuración de Prisma

## Archivo `prisma.config.ts`

### Descripción

Este archivo contiene la configuración principal de Prisma y la conexión con MySQL mediante variables de entorno.

---

# 9. Configuración de módulos ECMAScript

## Archivo `package.json`

Se modificó:

```json
"type": "commonjs"
```

por:

```json
"type": "module"
```

### Descripción

Esta configuración permite utilizar la sintaxis moderna de JavaScript:

```ts
import/export
```

compatible con Prisma y TypeScript modernos.

---

# 10. Creación y ejecución de migraciones

### Comando ejecutado

```bash
npx prisma migrate dev --name init
```

### Descripción

Este comando:

- Crea la base de datos si no existe
- Genera las migraciones de Prisma
- Ejecuta las migraciones en MySQL
- Sincroniza la base de datos con el archivo `schema.prisma`

### Resultado

Se creó la carpeta:

```txt
prisma/migrations/
```

Prisma generó automáticamente el archivo SQL correspondiente a la migración inicial.

### Mensaje esperado

```txt
Your database is now in sync with your schema.
```

---