# Oficina Arbitral — oficinaarbitral.cl

Sitio web institucional + plataforma SaaS para gestión de juicios arbitrales de partición en Chile.

## Stack

- **Next.js 16** (App Router) + TypeScript estricto
- **Tailwind CSS v4** + shadcn/ui
- **PostgreSQL** + Prisma ORM
- **NextAuth.js** (roles: ADMIN, JUEZ, USUARIO) — Fase 2
- **Resend** para email transaccional
- **Vercel** para deploy (frontend + SSR)

## Instalación local

```bash
# Clonar el repositorio
git clone <URL_DEL_REPO>
cd oficinaarbitral

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con sus valores reales

# Ejecutar en desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variables de entorno requeridas

Copie `.env.example` a `.env.local` y configure:

| Variable | Descripción | Requerida |
|---|---|---|
| `DATABASE_URL` | URL de conexión a PostgreSQL | Fase 2 |
| `NEXTAUTH_URL` | URL base del sitio | Fase 2 |
| `NEXTAUTH_SECRET` | Secreto para NextAuth (generar con `openssl rand -base64 32`) | Fase 2 |
| `RESEND_API_KEY` | API key de Resend para emails | Para formulario de contacto |
| `EMAIL_DOMAIN` | Dominio para envío de emails (ej: `oficinaarbitral.cl`) | Para formulario de contacto |
| `CONTACT_EMAIL` | Email de recepción de formulario | Para formulario de contacto |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ID de Google Analytics 4 | Opcional |

## Comandos

```bash
npm run dev      # Servidor de desarrollo con Turbopack
npm run build    # Build de producción
npm run start    # Servidor de producción (requiere build)
npm run lint     # ESLint
```

## Estructura de carpetas

```
oficinaarbitral/
├── app/                    # Next.js App Router (páginas y rutas)
│   ├── og/route.tsx        # Generación dinámica de OG images (Edge)
│   ├── actions/            # Server Actions (formulario de contacto)
│   ├── blog/[slug]/        # Artículos del blog (SSG)
│   └── sitemap.ts / robots.ts
├── components/
│   ├── layout/             # Header, Footer, Breadcrumb
│   ├── sections/           # Secciones reutilizables (HowItWorks, TrustSignals, CTABanner)
│   ├── forms/              # ContactForm (con validación Zod + Server Actions)
│   ├── blog/               # PostCard, PostBody
│   ├── seo/                # JsonLd
│   └── ui/                 # shadcn/ui components
├── content/blog/           # Artículos MDX del blog
├── lib/                    # Utilidades (constants, metadata, email, blog)
├── types/                  # TypeScript types compartidos
├── prisma/                 # Schema Prisma (listo para Fase 2)
└── emails/                 # Plantillas de email (para Fase 2)
```

## Blog

Los artículos del blog son archivos MDX en `content/blog/`. Para agregar un artículo:

1. Crear `content/blog/mi-articulo.mdx`
2. Incluir frontmatter con: `title`, `description`, `date`, `author`, `category`, `keywords`, `readingTime`
3. El artículo queda disponible en `/blog/mi-articulo` (SSG, sin redeploy necesario en modo ISR)

## Datos a configurar antes del lanzamiento

Los siguientes valores están marcados con `[CONFIGURAR_*]` en el código y deben definirse:

- **Precios** de los planes en `lib/constants.ts` → `PRICING_PLANS[].price`
- **Email de contacto** → variable de entorno `CONTACT_EMAIL`
- **Teléfono** → variable de entorno `CONTACT_PHONE`
- **Nombres del equipo** → `app/nosotros/page.tsx`
- **Textos legales** → `app/legal/terminos/page.tsx` y `app/legal/privacidad/page.tsx` (requieren revisión de abogado)
- **Google Analytics** → variable `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- **Verificación Search Console** → variable `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

## Deploy en Vercel

1. Conectar el repositorio en [vercel.com](https://vercel.com)
2. Configurar las variables de entorno en el dashboard de Vercel
3. Deploy automático al hacer push a `main`

Para la base de datos PostgreSQL, se recomienda [Neon](https://neon.tech) o [Supabase](https://supabase.com) (ambos tienen plan gratuito y son compatibles con Vercel).

## Hoja de ruta

- [x] **Fase 1:** Sitio institucional con SEO técnico experto (completado)
- [ ] **Fase 2:** Portal de usuarios (auth + roles ADMIN/JUEZ/USUARIO + dashboards)
- [ ] **Fase 3:** Integraciones Zoom, almacenamiento de documentos, notificaciones
