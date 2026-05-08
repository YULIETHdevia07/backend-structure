# 1. Configuración de módulos ECMAScript

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

# 2. Creación de `app.ts`

## Archivo creado

```txt
src/app.ts
```

### Descripción

Este archivo contiene la configuración principal de Express:

- Inicialización de Express
- Configuración de middlewares
- Configuración de CORS
- Registro de rutas
- Exportación de la aplicación

---

# 3. Creación de `server.ts`

## Archivo creado

```txt
src/server.ts
```

### Descripción

Este archivo es el punto de entrada del backend.

Se encarga de:

- Importar la aplicación Express
- Definir el puerto del servidor
- Ejecutar el servidor backend

---

# 4. Configuración de scripts

## Archivo modificado

```txt
package.json
```

### Script agregado

```json
"scripts": {
  "dev": "tsx watch src/server.ts"
}
```

### Descripción

Este script permite ejecutar el backend en modo desarrollo mediante el comando:

```bash
npm run dev
```

El servidor se reinicia automáticamente al detectar cambios en el proyecto.

---



---

# 5. Creación de Prisma Client

## Archivo creado

```txt
src/prisma/client.ts
```

### Descripción

Se creó la instancia principal de Prisma Client para permitir la conexión y consultas a MySQL desde cualquier parte del backend.

---

# 6. Creación de controlador de usuarios

## Archivo creado

```txt
src/controllers/user.controller.ts
```

### Descripción

Se creó el controlador inicial de usuarios.

Actualmente contiene:

- Endpoint para obtener usuarios
- Respuesta JSON de prueba
- Configuración inicial de Request y Response con TypeScript

---

# 7. Creación de rutas de usuarios

## Archivo creado

```txt
src/routes/user.routes.ts
```

### Descripción

Se creó el archivo encargado de manejar las rutas relacionadas con usuarios.

Actualmente incluye:

```txt
GET /users
```

---

# 8 Creación de rutas principales

## Archivo creado

```txt
src/routes/index.ts
```

### Descripción

Este archivo centraliza todas las rutas del backend.

Actualmente incluye:

| Ruta | Descripción |
|---|---|
| /api/health | Verificación del estado de la API |
| /api/users | Rutas relacionadas con usuarios |

---

# 9. Endpoints funcionales

## Health Check

```http
GET /api/health
```

### Respuesta exitosa

```json
{
  "message": "API funcionando correctamente"
}
```

---

## Obtener usuarios

```http
GET /api/users
```

### Respuesta exitosa

```json
[
  {
    "id": 1,
    "name": "Juan",
    "email": "juan@gmail.com"
  }
]
```

---

## Registrar usuario

```http
POST /api/users/register
```

### Body

```json
{
  "name": "Juan",
  "email": "juan@gmail.com",
  "password": "123456"
}
```

### Respuesta exitosa

```json
{
  "message": "Usuario registrado correctamente",
  "user": {
    "id": 1,
    "name": "Juan",
    "email": "juan@gmail.com"
  }
}
```

### Respuesta si el usuario ya existe

```json
{
  "message": "El usuario ya existe"
}
```

### Respuesta en caso de error

```json
{
  "message": "Error al registrar usuario"
}
```

---