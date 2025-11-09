# Configuración de CodeRabbit

## ¿Qué es CodeRabbit?

CodeRabbit es una herramienta de revisión de código automatizada que utiliza IA para analizar pull requests y proporcionar sugerencias de mejora, detectar problemas de seguridad, y mejorar la calidad del código.

## Pasos para completar la integración

### 1. Instalar la aplicación de GitHub

1. Ve a: https://github.com/apps/coderabbitai
2. Haz clic en el botón **"Install"** (Instalar)
3. Selecciona la opción **"Only select repositories"** (Solo repositorios seleccionados)
4. Selecciona el repositorio: `Jhuanca2023/BytGaming-Front`
5. Haz clic en **"Install"**

### 2. Configuración del repositorio

Una vez instalado, CodeRabbit comenzará a funcionar automáticamente con la configuración en `.coderabbit.yaml`.

### 3. Verificar la integración

Para verificar que CodeRabbit está funcionando:

1. Crea un Pull Request desde cualquier rama hacia `develop` o `main`
2. CodeRabbit aparecerá como un bot en los comentarios del PR
3. Revisará automáticamente los cambios y dejará comentarios con sugerencias

## Configuración actual

El archivo `.coderabbit.yaml` está configurado para:

- **Revisar:** Archivos TypeScript (.ts), HTML (.html), SCSS (.scss)
- **Ignorar:** Archivos de prueba, node_modules, dist, locks
- **Analizar:** Calidad de código, seguridad, rendimiento, accesibilidad
- **Ramas:** `main` y `develop`

## Características habilitadas

- ✅ Revisión automática de código
- ✅ Sugerencias de mejora
- ✅ Detección de problemas de seguridad
- ✅ Análisis de rendimiento
- ✅ Verificación de accesibilidad
- ✅ Resumen de alto nivel de cambios
- ✅ Descripción automática de PRs

## Uso

Una vez configurado, CodeRabbit funciona automáticamente:

1. **Crear un PR:** CodeRabbit revisará automáticamente
2. **Revisar comentarios:** Lee las sugerencias en los comentarios del PR
3. **Aplicar cambios:** Implementa las mejoras sugeridas
4. **Actualizar PR:** CodeRabbit revisará los nuevos cambios

## Personalización

Puedes modificar `.coderabbit.yaml` para ajustar:
- Qué archivos revisar
- Qué tipos de análisis realizar
- Qué ramas incluir
- Qué ignorar

## Recursos

- [Documentación de CodeRabbit](https://docs.coderabbit.ai)
- [Configuración avanzada](https://docs.coderabbit.ai/configuration)

