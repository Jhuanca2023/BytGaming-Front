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

**Configuración para notificaciones en Discord:**
1. Ve al dashboard de CodeRabbit: https://app.coderabbit.ai
2. Selecciona tu repositorio `BytGaming-Front`
3. Ve a "Settings" > "Integrations" > "Discord"
4. Conecta tu servidor de Discord y selecciona el canal
5. Las notificaciones de CodeRabbit aparecerán en Discord automáticamente

**Nota importante:**
- CodeRabbit revisa automáticamente PRs hacia `main` y `develop`
- Si no aparece revisando, verifica que el PR esté dirigido a una de estas ramas
- Puedes forzar una revisión con el comando: `@coderabbitai review`
