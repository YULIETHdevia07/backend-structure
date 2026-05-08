# Historial de Incidentes Backend

---

# Incidente #001 — Error al ejecutar TSX

## Fecha

2026-05-08

---

## Descripción del incidente

Durante la ejecución del backend se presentó un error relacionado con el comando `tsx`, impidiendo iniciar el servidor en modo desarrollo.

---

## Error presentado

### Mensaje obtenido

```txt
"tsx" no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable.
```

---

## Causa identificada

El paquete `tsx` no se encontraba instalado dentro de las dependencias de desarrollo del proyecto.

---

# Solución aplicada

## Instalación de TSX

### Comando ejecutado

```bash
npm install -D tsx
```

---

## Resultado de la instalación

```txt
added 5 packages, and audited 254 packages in 6s
```

---

## Validación realizada

Después de instalar `tsx`, el backend pudo ejecutarse correctamente utilizando el siguiente comando:

```bash
npm run dev
```

---

## Resultado final

- Ejecución correcta del servidor backend.
- Reinicio automático habilitado mediante `tsx watch`.
- Soporte para ejecución directa de archivos TypeScript.

---

## Observaciones

Se recomienda validar que todas las dependencias de desarrollo necesarias se encuentren instaladas después de clonar el proyecto o actualizar dependencias.

---

# Próximos incidentes

## Incidente #002 — Pendiente

## Incidente #003 — Pendiente