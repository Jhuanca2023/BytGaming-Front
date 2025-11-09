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

## Despliegue en Netlify

Este proyecto está configurado para desplegarse automáticamente en Netlify cuando se hace push a la rama `main`.

### Configuración inicial

**Paso 1: Crear sitio en Netlify**
1. Ve a https://app.netlify.com
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en **"Add new site"** > **"Import an existing project"**
4. Selecciona **"GitHub"** y autoriza Netlify
5. Selecciona el repositorio: `Jhuanca2023/BytGaming-Front`
6. Netlify detectará automáticamente la configuración desde `netlify.toml`

**Paso 2: Configurar variables de entorno (OBLIGATORIO)**

**IMPORTANTE**: Las variables de entorno deben tener el prefijo `NG_APP_` para funcionar con Angular.

1. En la página de configuración de Netlify, haz clic en **"Add environment variables"**
2. Agrega las siguientes variables (las mismas que tienes en tu archivo `.env` local):
   - **Key**: `NG_APP_API_URL`
     - **Value**: URL de tu API en producción (ej: `https://api.bytgaming.com` o `https://tu-backend.railway.app`)
   - Si tienes más variables en tu `.env`, agréguelas con el prefijo `NG_APP_`
     - Ejemplo: Si en tu `.env` tienes `API_URL=http://localhost:8081`
     - En Netlify debe ser: `NG_APP_API_URL=https://tu-api-produccion.com`

3. **Nota**: El archivo `.env` local no se sube a GitHub (está en `.gitignore`)
4. Las variables en Netlify solo se aplican durante el build, no en runtime

**Variables de entorno comunes:**
- `NG_APP_API_URL`: URL del backend API (obligatorio para producción)
- Cualquier otra variable que uses en tu código debe tener el prefijo `NG_APP_`

**Paso 3: Configurar secrets en GitHub (para despliegue automático)**
1. Ve a: https://github.com/Jhuanca2023/BytGaming-Front/settings/secrets/actions
2. Agrega los siguientes secrets:
   - `NETLIFY_AUTH_TOKEN`: Token de autenticación de Netlify
     - Obtén el token en: https://app.netlify.com/user/applications#personal-access-tokens
   - `NETLIFY_SITE_ID`: ID del sitio de Netlify
     - Encuéntralo en: Site settings > General > Site details > Site information

### Despliegue automático

- **Rama `main`**: Se despliega automáticamente en producción cuando se hace push
- **Rama `develop`**: Se compila pero no se despliega (solo validación)
- **Ramas `feature/*`**: Se compilan pero no se despliegan (solo validación)

### Configuración del proyecto

- **Archivo de configuración**: `netlify.toml`
- **Comando de build**: `bun install && bun run build`
- **Directorio de publicación**: `dist/bytgaming/browser`
- **Node.js version**: 20
- **Variables de entorno**: Deben tener el prefijo `NG_APP_` (ej: `NG_APP_API_URL`)

### Despliegue manual

Si necesitas desplegar manualmente:

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Autenticarse
netlify login

# Desplegar
netlify deploy --prod --dir=dist/bytgaming/browser
```
