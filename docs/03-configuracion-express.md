# Estructura del backend

## 1. Creación de la estructura de la  carpeta src

Se organizó la estructura principal del backend dentro de la carpeta `src` para separar responsabilidades y mantener una arquitectura escalable.

### Estructura  dentro src

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

## 2. Descripción de carpetas

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

# 3. Creación de `app.ts`

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

# 4. Creación de `server.ts`

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

# 5. Instalación de dependencias adicionales

## Instalación de tipados para Express y Cors

### Comando ejecutado

```bash
npm install -D @types/express @types/cors
```

### Descripción

Se instalaron los tipados de TypeScript para:

- Express
- Cors

Esto permite obtener autocompletado, validaciones y tipado estático durante el desarrollo.

---

# 6. Instalación de TSX

### Comando ejecutado

```bash
npm install -D tsx
```

### Descripción

`tsx` permite ejecutar archivos TypeScript directamente sin necesidad de compilar manualmente el proyecto.

También permite reiniciar automáticamente el servidor cuando se detectan cambios en el proyecto.

---

# 7. Configuración de scripts

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

# 8. Ejecución inicial del backend

## Comando ejecutado

```bash
npm run dev
```

---

# 9. Error presentado

## Mensaje obtenido

```txt
"tsx" no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable.
```

### Causa

El paquete `tsx` aún no se encontraba instalado en el proyecto.

---

# 10. Solución aplicada

## Comando ejecutado

```bash
npm install -D tsx
```

### Resultado

```txt
added 5 packages, and audited 254 packages in 6s
```

### Descripción

Después de instalar `tsx`, el backend pudo ejecutarse correctamente utilizando:

```bash
npm run dev
```

---