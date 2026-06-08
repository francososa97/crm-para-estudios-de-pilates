# CRM Estudios de Pilates — Architecture

## Stack
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- PostgreSQL + Prisma (a configurar)

## Estructura de carpetas
\`\`\`
src/
├── app/               # Next.js App Router pages y layouts
├── features/          # Un módulo por épica del proyecto
│   └── auth/
│   └── scheduling/
│   └── reservations/
│   └── notifications/
│   └── analytics/
└── shared/
    ├── types/index.ts # Interfaces TypeScript del dominio
    ├── utils/
    ├── hooks/
    └── components/
\`\`\`

## Convenciones para Dev Agents
1. Cada feature tiene: \`service.ts\`, \`types.ts\`, \`actions.ts\` (Next.js server actions)
2. Los tipos van en \`src/shared/types/index.ts\`
3. Nunca lógica de negocio en componentes React
4. Usa \`@/\` como alias para \`src/\`
