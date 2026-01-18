# 📚 Portafolio de Evidencias - Desarrollo Web Frontend

Este repositorio contiene un conjunto de proyectos prácticos que demuestran habilidades en HTML, CSS y JavaScript. Cada proyecto es una evidencia de aprendizaje en diferentes tecnologías y técnicas de desarrollo web frontend.

---

## 📋 Tabla de Contenidos

1. [Proyectos Incluidos](#-proyectos-incluidos)
2. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
3. [Estructura del Proyecto](#-estructura-del-proyecto)
4. [Cómo Usar](#-cómo-usar)
5. [Detalles de Cada Proyecto](#-detalles-de-cada-proyecto)

---

## 🎯 Proyectos Incluidos

### 1. **Bootstrapt** - Framework CSS Responsivo
Proyecto que demuestra el uso de Bootstrap 5 para crear una landing page moderna y responsiva.

**Características:**
- Navbar con menú responsive
- Hero section con CTA buttons
- Layout responsive con Grid de Bootstrap
- Iconos de Bootstrap
- Footer con redes sociales

**Tecnologías:** HTML, Bootstrap 5, CSS

---

### 2. **CSS GRID** - Dashboard Moderno
Dashboard completo utilizando CSS Grid para layout avanzado.

**Características:**
- Layout responsive con CSS Grid
- Header, Sidebar y Content area
- Tarjetas interactivas
- Media queries para mobile
- Diseño limpio y moderno

**Archivos:**
- `index.html` - Estructura HTML
- `styles.css` - Estilos con CSS Grid

**Tecnologías:** HTML, CSS Grid

---

### 3. **Dark Mode** - Blog Interactivo
Blog personal con funcionalidad de tema oscuro/claro.

**Características:**
- Toggle de Dark Mode funcional
- Sistema de CSS variables (custom properties)
- Tarjetas de artículos responsivas
- Sidebar con categorías
- LocalStorage para persistencia de tema
- Animaciones suaves

**Archivos:**
- `index.html` - Estructura del blog
- `styles.css` - Estilos con variables CSS
- `script.js` - Lógica del dark mode

**Tecnologías:** HTML, CSS, JavaScript, LocalStorage

---

### 4. **Flexbox** - Prácticas de Layout Flexible

#### a) Práctica Guiada
Página de contacto con formulario usando Flexbox.

**Características:**
- Menú horizontal con Flexbox
- Formulario responsive
- Layout flexible para desktop y mobile
- Gradientes y sombras
- Inputs y textareas estilizados

**Archivos:**
- `index.html` - Estructura del formulario
- `styles/styles.css` - Estilos con Flexbox

**Tecnologías:** HTML, Flexbox, CSS

#### b) Práctica Flex
Formulario de pedido de comida con dos columnas.

**Características:**
- Formulario de datos del pedido
- Lista de opciones de envío
- Transiciones hover interactivas
- Responsive design
- Botones y inputs estilizados

**Archivos:**
- `templates/form.html` - Estructura HTML
- `styles/form.css` - Estilos Flexbox
- `img/` - Imágenes de empresas de envío

**Tecnologías:** HTML, Flexbox, CSS

---

### 5. **Parallax** - Efecto de Profundidad
Página demostrativa del efecto parallax en CSS.

**Características:**
- Efecto parallax con background-attachment: fixed
- Secciones alternadas con contenido
- Smooth scroll
- Responsive para móviles
- Texto con sombras elegantes

**Archivos:**
- `index.html` - Estructura con secciones
- `styles.css` - Estilos del parallax
- `images/` - Imágenes de fondo

**Tecnologías:** HTML, CSS, Parallax

---

### 6. **SASS** - Preprocesador CSS
Proyecto que demuestra el uso de SASS/SCSS para mejor organización de estilos.

**Características:**
- Navbar interactivo
- Hero section
- Galería de tarjetas
- Variables SCSS
- Mixins y nesting
- Estructura modular

**Archivos:**
- `index.html` - Estructura HTML
- `scss/main.scss` - Archivo SCSS principal
- `scss/_variables.scss` - Variables compartidas
- `css/syles.css` - CSS compilado

**Tecnologías:** HTML, SASS/SCSS, CSS

---

### 7. **Tailwind** - Documentación
Archivo de documentación y referencia sobre Tailwind CSS.

**Contenido:**
- Documentación de Tailwind CSS
- Guías de uso
- Recursos de aprendizaje

**Archivo:**
- `Tailwind CSS.docx` - Documento de referencia

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción | Proyectos |
|-----------|-------------|-----------|
| **HTML5** | Estructura semántica | Todos |
| **CSS3** | Estilos modernos | Todos |
| **JavaScript** | Interactividad | Dark Mode |
| **Bootstrap 5** | Framework CSS | Bootstrapt |
| **CSS Grid** | Layout avanzado | CSS GRID |
| **Flexbox** | Layout flexible | Flexbox (ambos) |
| **SASS/SCSS** | Preprocesador CSS | SASS |
| **CSS Variables** | Custom properties | Dark Mode |
| **LocalStorage** | Persistencia de datos | Dark Mode |

---

## 📁 Estructura del Proyecto

```
Tercer_parcial/
├── Bootstrapt/
│   └── index.html
├── CSS GRID/
│   ├── index.html
│   └── styles.css
├── Dark mode/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── flexbox/
│   ├── practica guiada/
│   │   ├── index.html
│   │   ├── images/
│   │   └── styles/
│   │       └── styles.css
│   └── Práctica_flex/
│       ├── templates/
│       │   └── form.html
│       ├── styles/
│       │   └── form.css
│       └── img/
├── paradax/
│   ├── index.html
│   ├── styles.css
│   └── images/
├── SASS/
│   ├── index.html
│   ├── css/
│   │   └── syles.css
│   ├── scss/
│   │   ├── main.scss
│   │   └── _variables.scss
│   └── images/
├── Tailwind/
│   └── Tailwind CSS.docx
├── PROYECTO/
├── desplegar_web/
├── trash/
└── README.md
```

---

## 🚀 Cómo Usar

### 1. **Abrir un Proyecto**
Simplemente navega a la carpeta del proyecto y abre el archivo `index.html` en tu navegador.

```bash
cd CSS\ GRID
open index.html  # macOS
# o en Windows
start index.html
```

### 2. **Modificar Estilos**
- Edita los archivos `.css` directamente
- Para SASS: edita `.scss` y compila a CSS
- Los cambios se reflejarán al recargar la página

### 3. **Desarrollo Local**
Se recomienda usar un servidor local para mejor experiencia:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx serve
```

---

## 📖 Detalles de Cada Proyecto

### Bootstrapt
**Objetivo:** Aprender a usar Bootstrap para crear interfaces responsivas rápidamente.

**Lo que aprendí:**
- Sistema de Grid de Bootstrap (12 columnas)
- Componentes prefabricados
- Clases de utilidad
- Responsividad automática

**Características principales:**
- Navbar pegajosa
- Botones CTA destacados
- Layout responsivo automático
- Iconos intuitivos

---

### CSS GRID
**Objetivo:** Dominar CSS Grid para layouts complejos.

**Lo que aprendí:**
- Template de grid con áreas nombradas
- Responsividad con grid
- Gradientes y sombras
- Animaciones en hover

**Características principales:**
- Dashboard profesional
- Sidebar navegable
- Área de contenido principal
- Tarjetas interactivas
- Adapta a cualquier tamaño de pantalla

---

### Dark Mode
**Objetivo:** Implementar tema oscuro/claro con persistencia.

**Lo que aprendí:**
- CSS Variables (Custom Properties)
- JavaScript para manipular DOM
- LocalStorage para guardar preferencias
- Transiciones suaves entre temas

**Características principales:**
- Toggle de tema funcional
- Sistema de colores con variables
- Persistencia de tema seleccionado
- Blog con artículos
- Sidebar dinámico

---

### Flexbox
**Objetivo:** Entender y aplicar Flexbox para layouts flexibles.

**Lo que aprendí:**
- Propiedades flex-direction, justify-content, align-items
- Responsive design sin media queries complejas
- Flex-wrap y gap
- Espaciado automático

**Características principales:**
- Formularios responsivos
- Menús flexibles
- Layouts que se adaptan al contenido
- Alineación perfecta de elementos

---

### Parallax
**Objetivo:** Crear efecto de profundidad visual con parallax.

**Lo que aprendí:**
- background-attachment: fixed
- Diferencias de velocidad visual
- Responsive parallax
- Composición visual

**Características principales:**
- Efecto de profundidad inmersivo
- Alternancia de secciones
- Smooth scrolling
- Adaptable a móviles

---

### SASS
**Objetivo:** Organizar CSS con SASS para código más mantenible.

**Lo que aprendí:**
- Variables en SASS
- Nesting de selectores
- Mixins reutilizables
- Compilación a CSS
- Estructura modular

**Características principales:**
- Código más limpio y organizado
- Variables compartidas
- Mixins para estilos reutilizables
- Estructura escalable

---

## 📚 Objetivos de Aprendizaje Alcanzados

✅ HTML5 semántico y accesible
✅ CSS3 avanzado (Grid, Flexbox, Variables)
✅ Responsive Design
✅ JavaScript vanilla
✅ Bootstrap framework
✅ SASS/SCSS
✅ Efectos y animaciones
✅ Buenas prácticas de código
✅ Persistencia de datos (LocalStorage)
✅ Interfaz de usuario interactiva

---

## 🎨 Características Transversales

Todos los proyectos incluyen:

- **Responsive Design**: Se adaptan a cualquier dispositivo
- **Código Limpio**: Indentación y nomenclatura consistente
- **Accesibilidad**: HTML semántico y atributos alt
- **Rendimiento**: Estilos optimizados y sin redundancias
- **UX Moderna**: Transiciones, hover effects y feedback visual
- **Cross-browser**: Compatible con navegadores modernos

---

## 📝 Notas

- Todos los proyectos son **totalmente funcionales** y listos para usar
- Se pueden usar como **referencia** para otros proyectos
- El código está **bien comentado** para facilitar el aprendizaje
- Cada proyecto es **independiente** y puede ejecutarse solo

---

## 🔗 Recursos Utilizados

- [MDN Web Docs](https://developer.mozilla.org/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [SASS Documentation](https://sass-lang.com/)
- [Can I Use](https://caniuse.com/)

---

## 📅 Información del Portafolio

**Curso:** Desarrollo Web Frontend - Tercer Parcial
**Fecha:** Enero 2026
**Nivel:** Intermedio
**Estado:** ✅ Completo y Funcional


---

**Última actualización:** 17 de enero de 2026

---

*Este portafolio demuestra la progresión en el aprendizaje de tecnologías web modernas y buenas prácticas de desarrollo frontend.*
