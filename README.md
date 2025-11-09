# BytGaming Frontend

Aplicación frontend desarrollada con Angular para el sistema de gestión de gaming BytGaming.

## Tecnologías

- Angular 19
- PrimeNG
- TailwindCSS
- Bun

## Desarrollo

### Instalación

```bash
bun install
```

### Ejecutar en desarrollo

```bash
bun run start
```

### Build para producción

```bash
bun run build
```

## Estructura de ramas

- `main`: Rama de producción
- `develop`: Rama de desarrollo
- `feature/*`: Ramas de características

## Herramientas de calidad de código

### CodeRabbit

Este proyecto utiliza [CodeRabbit](https://coderabbit.ai) para revisión automática de código. CodeRabbit analiza automáticamente los pull requests y proporciona sugerencias de mejora.

**Configuración:**
- Archivo de configuración: `.coderabbit.yaml`
- Revisa automáticamente: TypeScript, HTML, SCSS
- Ignora: archivos de prueba, node_modules, dist

**Para activar CodeRabbit:**
1. Ve a https://github.com/apps/coderabbitai
2. Haz clic en "Install" (Instalar)
3. Selecciona el repositorio `BytGaming-Front`
4. CodeRabbit comenzará a revisar automáticamente los pull requests

**Configurar notificaciones de CodeRabbit en Discord:**

**IMPORTANTE:** CodeRabbit ya está instalado ✅. Ahora configura el webhook en GitHub.

**Paso 1: Configurar Webhook en GitHub**
1. Ve a: https://github.com/Jhuanca2023/BytGaming-Front/settings/hooks
2. Haz clic en **"Add webhook"** (Agregar webhook)
3. Pega tu URL de webhook de Discord:
   ```
   https://discord.com/api/webhooks/1436835746555363684/otXrJXgKNNX8IDDpvqudAQE1rJ13Q6jHOI_lRKsbCElNifPF9eNYYkkXZl0RCCggD-wf
   ```
4. En **Content type**, selecciona **"application/json"**
5. En **Which events would you like to trigger this webhook?**, selecciona:
   - **"Let me select individual events"**
   - Marca: ✅ Pull requests, ✅ Pull request reviews, ✅ Issue comments, ✅ Pull request review comments
6. Haz clic en **"Add webhook"**

**Paso 2: Probar**
1. Crea un PR o comenta en uno existente: `@coderabbitai review`
2. CodeRabbit revisará y dejará comentarios
3. Las notificaciones aparecerán en Discord automáticamente

**Nota importante:**
- CodeRabbit revisa automáticamente PRs hacia `main` y `develop`
- Si no aparece revisando, verifica que el PR esté dirigido a una de estas ramas
- Puedes forzar una revisión con el comando: `@coderabbitai review`
