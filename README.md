# ESSENTIAL · estudio floral

Sitio web del estudio floral ESSENTIAL. Diseñamos emociones en forma de flores.

## Acerca del proyecto

Landing page editorial para un estudio floral mexicano especializado en arreglos de autor, eventos (bodas, XV años, corporativo) y suscripciones florales.

## Stack

- HTML5 semántico
- CSS3 con custom properties (sin frameworks)
- JavaScript vanilla
- Google Fonts: Cormorant Garamond + Inter

Sin dependencias, sin build step. Se sirve como archivos estáticos.

## Estructura

```
essential_estudio_floral/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── script.js
└── img/
    ├── logo.png
    ├── 1.png   (Romance)
    ├── 2.png   (Signature)
    ├── 3.png   (Jardín / Hero)
    └── 4.png   (Susurro)
```

## Cómo verlo localmente

### Opción 1 — Servidor de Python

```bash
cd essential_estudio_floral
python -m http.server 8000
```

Abrir `http://localhost:8000` en el navegador.

### Opción 2 — Live Server (VS Code)

Instalar la extensión **Live Server** y hacer clic derecho sobre `index.html` → **Open with Live Server**.

## Secciones

1. **Hero** — Tagline principal con marquesina infinita
2. **Manifiesto** — Filosofía del estudio + 4 pilares
3. **Arreglos** — Catálogo de ediciones (Romance, Jardín, Susurro, Signature)
4. **Eventos** — Bodas, XV años, corporativo
5. **Suscripción** — Planes quincenal, semanal, mensual
6. **Estudio** — Sobre nosotros + números clave
7. **Contacto** — WhatsApp, Instagram, ubicación, horarios

## Pendientes / TODO

Reemplazar placeholders antes de salir a producción:

- `[NUMERO]` — número de WhatsApp (formato internacional sin `+`)
- `[Tu número aquí]` — versión visible del WhatsApp
- `[Ciudad / Colonia]` — ubicación del estudio
- `[zona]` — zona de cobertura de entregas
- `[10:00 — 19:00]` — horarios reales
- `[hola@essentialestudio.mx]` — correo de contacto

## Redes

- Instagram: [@essentialestudiomx](https://instagram.com/essentialestudiomx)

## Créditos

Sitio diseñado y desarrollado por [m2aq](https://github.com/m2aq).

---

© 2026 ESSENTIAL · estudio floral
