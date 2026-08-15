# Guía de estilo - Portafolio David Serrudo

Esta guía documenta el sistema visual usado actualmente en el portafolio. La fuente de verdad técnica está en `src/styles/global.css`; el contenido editable vive en `src/data/profile.ts`.

## Dirección visual

El portafolio usa una estética editorial, minimalista y tecnológica. La composición prioriza escala tipográfica, contraste, líneas finas y espacios amplios antes que tarjetas decorativas o elementos gráficos innecesarios.

Principios principales:

- Fondo oscuro o superficie clara según tema.
- Un único color de acento naranja rojizo.
- Tipografía grande, directa y con poco adorno.
- Separadores lineales en vez de contenedores pesados.
- Información presentada en estructuras editoriales: columnas, grillas, listas y líneas.
- Animación sutil, funcional y respetuosa de `prefers-reduced-motion`.
- Sin gradientes morados, badges decorativos, métricas inventadas ni tarjetas genéricas.

## Paleta de color

### Color de acento

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-accent` | `#ff5638` | Focos, detalles activos, subrayados, indicadores, bullets y barras decorativas puntuales. |

El acento debe usarse con moderación. No debe convertirse en color dominante.

### Tema oscuro

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-bg` | `#0b0b0b` | Fondo principal del sitio, Hero, Experiencia y Footer. |
| `--color-surface` | `#111111` | Fondo de secciones alternas como About y Proyectos. |
| `--color-text` | `#f2f0ed` | Texto principal sobre fondos oscuros. |
| `--color-muted` | `#9c9994` | Texto secundario, metadatos y descripciones. |
| `--color-line` | `rgb(242 240 237 / 0.12)` | Líneas divisorias y bordes sutiles. |

### Tema claro

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-bg` | `#f4f2ee` | Fondo principal en modo claro. |
| `--color-surface` | `#ffffff` | Superficie alterna en modo claro. |
| `--color-text` | `#111111` | Texto principal sobre fondos claros. |
| `--color-muted` | `#5f5d59` | Texto secundario en modo claro. |
| `--color-line` | `rgb(17 17 17 / 0.14)` | Líneas divisorias en modo claro. |

### Reglas de uso

- Mantener el contraste alto entre `--color-bg`, `--color-surface` y `--color-text`.
- Usar `--color-muted` para jerarquía secundaria, no para texto crítico.
- Usar `--color-line` para separar bloques sin crear tarjetas pesadas.
- La selección de texto usa fondo `--color-accent` y texto `#111111`.
- Evitar nuevas familias de color. Si se agrega un estado nuevo, derivarlo de los tokens existentes.

## Tipografía

El sistema usa máximo dos familias tipográficas.

| Token | Familia | Uso |
| --- | --- | --- |
| `--font-sans` | `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | Títulos principales, cuerpo de texto y contenido editorial. |
| `--font-mono` | `"IBM Plex Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace` | Navegación, etiquetas, metadatos, fechas, categorías y textos técnicos breves. |

Nota: las fuentes están declaradas como pila tipográfica. Si Inter o IBM Plex Mono no están disponibles en el sistema, se usan los fallbacks.

### Escala tipográfica principal

| Elemento | Tamaño actual | Estilo |
| --- | --- | --- |
| Nombre Hero | `clamp(4.5rem, 15.5vw, 13.5rem)` | Sans, peso 700, uppercase, `line-height: 0.8`. |
| Nombre Hero móvil | `clamp(4.35rem, 21vw, 7.75rem)` | Sans, peso 700, cada palabra en línea propia. |
| Títulos de sección | Entre `clamp(2.8rem, 14vw, 4.5rem)` y `clamp(3rem, 8vw, 7.2rem)` | Sans, peso 700, compacto, editorial. |
| Texto de cuerpo | `1rem` aprox. | Sans, `line-height` entre `1.65` y `1.75`. |
| Metadatos | `0.72rem` a `0.78rem` | Mono, uppercase. |
| Navegación | `0.75rem` | Mono, uppercase. |
| Skills flotantes | `clamp(0.9rem, 2.35vw, 1.55rem)` desktop; menor en móvil | Mono, uppercase. |

### Reglas tipográficas

- No usar `letter-spacing` negativo.
- Mantener `letter-spacing: 0`.
- Los títulos deben tener líneas compactas, entre `0.8` y `0.9`.
- El texto largo debe permanecer sobrio y legible, sin bloques extensos innecesarios.
- Los metadatos técnicos van en mono y uppercase.
- Los títulos de Proyectos, About y Experiencia deben sentirse parte del mismo sistema que el Hero.

## Espaciado y layout

### Tokens principales

| Token | Valor | Uso |
| --- | --- | --- |
| `--layout-max` | `86rem` | Ancho máximo del contenido. |
| `--space-page` | `clamp(1rem, 3.5vw, 4rem)` | Padding lateral global responsive. |

### Reglas de composición

- El contenido se centra con `width: min(100%, var(--layout-max))`.
- Las secciones usan padding vertical amplio: `clamp(5rem, 9vw, 8rem)`.
- En móvil, el padding vertical baja a `4rem` para secciones principales y `2rem` para contacto.
- Se usan grillas CSS para dividir columnas, no contenedores visuales pesados.
- El sitio usa `overflow-x: clip` para prevenir desbordes horizontales.
- Cada sección con `id` tiene `scroll-margin-top: 4rem` para navegación anclada.

## Formas y bordes

El diseño evita cards redondeadas como recurso principal. Las formas se usan de manera funcional.

### Bordes

- Separadores horizontales: `1px solid var(--color-line)`.
- Separadores verticales: `border-left: 1px solid var(--color-line)` en layouts de dos columnas.
- Foto About: borde superior de `3px solid var(--color-accent)`.
- Menú móvil: borde completo de `1px solid var(--color-line)`.

### Radio

| Elemento | Radio |
| --- | --- |
| Skills flotantes | `999px` |
| Toggle de tema | `999px` |
| Imágenes y figuras | Sin radio visible |
| Secciones y paneles | Sin radio |

### Imágenes

- About usa una fotografía personal con proporción `4 / 5`.
- Proyectos usa imágenes placeholder con proporción `16 / 9`.
- Las imágenes deben ser claras y funcionales, no puramente decorativas.
- Las figuras no usan esquinas redondeadas ni marcos pesados.

## Componentes visuales

### Navbar

Ubicación: `src/components/Navbar.tsx`

Características:

- Fija arriba con `position: fixed`.
- Altura mínima de `4rem`.
- Fondo translúcido con `color-mix` y `backdrop-blur-md`.
- Logo textual `DS` en mono.
- Links: Inicio, Proyectos, Experiencia y Contacto.
- En desktop muestra navegación horizontal.
- En móvil se transforma en menú desplegable accesible.
- Cierra el menú al presionar `Escape` o al seleccionar un enlace.

Estados:

- Hover: texto principal o acento según elemento.
- Focus visible: anillo o borde con `--color-accent`.
- Menú móvil: icono hamburguesa de dos líneas que cambia a cerrar.

### ThemeToggle

Ubicación: `src/components/ThemeToggle.tsx`

Características:

- Botón cuadrado de `2.75rem`.
- Track circular de `1.25rem`.
- Thumb interno que se desplaza en modo claro.
- Usa `data-theme="light"` en `:root` para activar el tema claro.
- Debe ser accesible por teclado.

### Hero

Ubicación: `src/components/Hero.tsx`

Características:

- Primera pantalla con `min-height: 100svh`.
- Fondo principal `--color-bg`.
- Nombre `DAVID SERRUDO` como elemento dominante.
- Eyebrow en mono, pequeño y uppercase.
- Espacio superior reservado para skills flotantes.
- Muestra una franja de la siguiente sección mediante el borde inferior del viewport.

Reglas:

- El nombre no debe ser cubierto por las etiquetas flotantes.
- En móvil, `DAVID` y `SERRUDO` se separan en dos líneas.
- El nombre debe seguir siendo el elemento más dominante desde 360 px.

### SkillTags

Ubicación: `src/components/SkillTags.tsx`

Contenido actual:

- `Data Analytics`
- `Software Development`
- `Machine Learning`

Características:

- Etiquetas flotantes con forma pill.
- Arrastrables con pointer events.
- Movimiento limitado dentro del contenedor.
- Colisión simple: una etiqueta no avanza si se superpone con otra.
- Animación sutil `floatTag`.
- En móvil dejan de ser absolutas y pasan a layout de grilla para evitar superposiciones.

Estilo:

- Borde `1px solid var(--color-line)`.
- Fondo mezclado con `color-mix(in srgb, var(--color-bg) 86%, transparent)`.
- Texto mono, uppercase.
- La tercera etiqueta puede reforzar el borde con mezcla del acento.

### About

Ubicación: `src/components/About.tsx`

Características:

- Fondo `--color-surface`.
- Fotografía a la izquierda en desktop.
- Presentación y focos profesionales a la derecha.
- Metadata en filas con labels mono.
- Lista de focos numerada con acento naranja.
- En tablet y móvil pasa a una sola columna.

Estructura visual:

- Columna izquierda: foto + datos personales.
- Columna derecha: kicker, título, texto y lista de focos.
- Separador vertical en desktop; eliminado en móvil.

### Projects

Ubicación: `src/components/Projects.tsx`

Características:

- Fondo `--color-surface`, igual que About para continuidad visual.
- Encabezado editorial con label, rango, título grande y resumen breve.
- Grilla de dos columnas en desktop.
- Una columna en tablet/móvil.
- Imágenes `16 / 9`.
- Metadata de proyecto con título sans y categoría/año/estado en mono.

Reglas:

- Los proyectos actuales son placeholders claramente marcados.
- No inventar información real.
- Cuando se reemplacen, mantener imagen, nombre, categoría, año y estado/enlace si corresponde.

### Experience

Ubicación: `src/components/Experience.tsx`

Características:

- Fondo `--color-bg`.
- Layout editorial de dos columnas en desktop.
- Título grande a la izquierda.
- Experiencias agrupadas a la derecha.
- Grupos actuales: Experiencia laboral y Experiencia relevante.
- Entradas con `<details>` y `<summary>` para expansión accesible.

Estilo:

- Fechas y organizaciones en mono uppercase.
- Rol en sans, peso medio.
- Flecha dibujada con bordes y color acento.
- Bullets mínimos con cuadrados/acento.
- La primera experiencia laboral aparece abierta por defecto.

### Contact

Ubicación: `src/components/Contact.tsx`

Características:

- Footer compacto y discreto.
- Fondo `--color-bg`.
- Dos columnas en desktop: texto breve y canales.
- En móvil se apila.
- Links subrayados solo en hover/focus.
- Canales pendientes se muestran como `[Pendiente]`.

## Interacción y movimiento

### Animaciones

| Elemento | Animación | Duración |
| --- | --- | --- |
| SkillTags desktop | `floatTag` | `8s`, `ease-in-out`, infinita |
| SkillTags móvil | `floatTagMobile` | Movimiento vertical menor |
| Imágenes de proyectos | Scale en hover | `420ms ease` |
| Links y botones | Color/borde | `180ms ease` |
| Menú móvil | Cambio de icono | `180ms ease` |
| ThemeToggle | Desplazamiento thumb | `180ms ease` |

### Reduced motion

Con `prefers-reduced-motion: reduce`:

- El scroll suave se desactiva.
- Las animaciones se reducen a `0.01ms`.
- Las transiciones se reducen a `0.01ms`.
- El hover scale de proyectos queda neutralizado.

## Responsive

Breakpoints usados:

| Breakpoint | Regla |
| --- | --- |
| `min-width: 768px` | Navbar desktop visible, botón de menú oculto. |
| `max-width: 1023px` | About, Experience, Projects y Contact pasan a layouts más simples. |
| `max-width: 767px` | Layout móvil completo: menú accesible, Hero en dos líneas, skills en grilla, proyectos y experiencia a una columna. |

Reglas móviles:

- El sitio debe funcionar desde `360px`.
- No debe existir overflow horizontal.
- Las skills no deben superponerse con el nombre ni entre sí.
- La foto de About aparece antes de datos, foco o estadísticas.
- El menú debe ser operable con teclado y cerrar con `Escape`.
- Los textos largos deben usar `overflow-wrap` cuando sea necesario.

## Accesibilidad

Reglas aplicadas:

- Documento en español: `lang="es"`.
- Navegación principal con `aria-label`.
- Menú móvil con `aria-expanded` y `aria-controls`.
- Botones con `aria-label`.
- Secciones con `aria-labelledby` cuando tienen título.
- Focos visibles con `--color-accent`.
- Navegación por anclas funcional.
- Uso de elementos semánticos: `header`, `nav`, `main`, `section`, `article`, `figure`, `footer`, `details`, `summary`.
- Imágenes con texto alternativo desde `profile.ts`.
- Contraste alto en ambos temas.

## Contenido y datos

Ubicación: `src/data/profile.ts`

Reglas:

- Mantener todo contenido personal editable en este archivo.
- Usar placeholders claros como `[Pendiente]` cuando falte información real.
- No inventar estadísticas, clientes, cargos, métricas ni proyectos.
- Los textos deben ser breves, profesionales y concretos.
- Evitar llenar la página con párrafos generados.

## Assets

Assets actuales:

| Archivo | Uso |
| --- | --- |
| `public/images/FotoPerfil.jpeg` | Fotografía personal en About. |
| `public/images/projects/project-reference-grid.png` | Placeholder de proyectos. |
| `public/images/projects/project-placeholder-screen.png` | Placeholder de proyectos. |
| `public/cv/CV_David_Serrudo_ES_Investigacion.pdf` | Recurso descargable en Contact. |
| `public/favicon.svg` | Favicon del sitio. |

Las imágenes en `references/` se usan como guía visual de trabajo. No deben considerarse contenido final de producción, salvo cuando se copian explícitamente como placeholders temporales y quedan marcadas como pendientes.

## Patrones CSS

Patrones recomendados:

- Definir tokens globales en `:root`.
- Modificar tema claro con `:root[data-theme="light"]`.
- Usar `clamp()` para escalas fluidas de texto y espaciado.
- Usar `minmax(0, 1fr)` en grillas para evitar overflow.
- Usar `overflow-wrap: anywhere` en datos largos.
- Usar `color-mix()` solo para variaciones sutiles derivadas de tokens.
- Mantener la mayoría del sistema en `src/styles/global.css`.

Evitar:

- Estilos inline.
- Nuevos gradientes decorativos.
- Nuevas dependencias visuales sin justificación.
- Cards dentro de cards.
- Secciones con estética distinta al sistema actual.
- Paletas secundarias no derivadas de los tokens.

## Checklist para nuevas secciones

Antes de agregar o modificar una sección:

1. Confirmar si debe usar `--color-bg` o `--color-surface`.
2. Usar `--layout-max` y `--space-page`.
3. Mantener máximo dos columnas en desktop si la sección es editorial.
4. Usar títulos grandes solo cuando la sección lo justifique.
5. Mantener metadatos en `--font-mono`.
6. Usar `--color-accent` solo para interacción o énfasis puntual.
7. Revisar móvil desde `360px`.
8. Confirmar que no existe overflow horizontal.
9. Verificar navegación por teclado y foco visible.
10. Ejecutar `npm run lint` y `npm run build` después de cambios importantes.
