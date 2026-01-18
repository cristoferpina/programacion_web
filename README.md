# Portafolio de Desarrollo Web

Repositorio de ejercicios y proyectos cortos de HTML, CSS y JavaScript organizados por parciales. Incluye desde bases (tablas, listas, imágenes) hasta temas modernos (Bootstrap, Grid, Flexbox, SASS y reproductores multimedia).

## Contenido
- Descripción rápida de cada parcial
- Guía breve para ejecutar los ejemplos
- Recursos recomendados y notas útiles

## Estructura general
- Primer parcial: fundamentos de HTML y maquetado simple (tablas, listas, imágenes, páginas enlazadas).
  - Ejemplos clave: [Primer_parcial/1/index.html](Primer_parcial/1/index.html), [Primer_parcial/1/imagenes.html](Primer_parcial/1/imagenes.html), [Primer_parcial/4/tabla.html](Primer_parcial/4/tabla.html), [Primer_parcial/5/listas.html](Primer_parcial/5/listas.html), [Primer_parcial/6/index.html](Primer_parcial/6/index.html).
- Segundo parcial: formularios con validación, layouts con CSS, login templates y reproductores de audio/video.
  - Ejemplos clave: [Segundo_parcial/1/forms.html](Segundo_parcial/1/forms.html), [Segundo_parcial/2/validacion.html](Segundo_parcial/2/validacion.html), [Segundo_parcial/4/templates/login.html](Segundo_parcial/4/templates/login.html), [Segundo_parcial/7/index.html](Segundo_parcial/7/index.html), [Segundo_parcial/9/audio_player/index.html](Segundo_parcial/9/audio_player/index.html), [Segundo_parcial/9/video_player/index.htm](Segundo_parcial/9/video_player/index.htm).
- Tercer parcial: proyectos con Bootstrap, CSS Grid, dark mode, Flexbox, parallax, SASS y notas de Tailwind.
  - Detalle completo en [Tercer_parcial/README.md](Tercer_parcial/README.md) y ejemplos como [Tercer_parcial/Bootstrapt/index.html](Tercer_parcial/Bootstrapt/index.html), [Tercer_parcial/CSS GRID/index.html](Tercer_parcial/CSS%20GRID/index.html), [Tercer_parcial/Dark mode/index.html](Tercer_parcial/Dark%20mode/index.html), [Tercer_parcial/SASS/index.html](Tercer_parcial/SASS/index.html).
- Proyectos UMB: sitio académico con plantillas y estáticos en [Piña Rosdriguez Cristofer/umb/templates](Pi%C3%B1a%20Rosdriguez%20Cristofer/umb/templates) y [Piña Rosdriguez Cristofer/umb/static](Pi%C3%B1a%20Rosdriguez%20Cristofer/umb/static).

## Cómo ejecutar
1) Abrir directamente el HTML en el navegador.
   - En Windows: doble clic o `start index.html` desde la carpeta del proyecto.
2) Servir localmente para probar rutas relativas y assets:
```bash
# Opcion Python 3
python -m http.server 8000

# Opcion Node.js
npx serve
```
Luego abre http://localhost:8000 y navega hasta la carpeta deseada.

## Notas rápidas
- Cada carpeta de parcial es independiente; los assets están dentro de su propia estructura.
- Revisa las hojas de estilo asociadas antes de mover archivos para no romper rutas relativas.
- Para proyectos con SASS, edita los .scss y vuelve a compilar a CSS antes de probar estilos.
- Los reproductores de audio y video usan archivos locales; si no cargan, verifica las rutas en static/media.

## Recursos útiles
- MDN Web Docs: https://developer.mozilla.org/
- Bootstrap: https://getbootstrap.com/
- SASS: https://sass-lang.com/guide
- Tailwind CSS: https://tailwindcss.com/docs
