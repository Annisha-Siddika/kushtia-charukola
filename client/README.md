<<<<<<< HEAD
কুষ্টিয়া চারুকলা ও প্রযুক্তি পাঠশালা। 
=======
# Kushtia Charukola - Frontend
>>>>>>> b09e6cef27a2d9e739508649f95b69bdb35e9945

A [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Key Features

- **Font Optimization**: Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) with [Geist](https://vercel.com/font)
- **Type Safety**: Full TypeScript support
- **UI Components**: Customized shadcn/ui components
- **Authentication**: JWT-based auth with RBAC
- **API Integration**: Axios with typed requests/responses

## Project Structure

### Core Application (`app/`)
```
app/
├── (auth)/              # Authentication routes
│   ├── login/
│   ├── register/
│   └── forgot-password/
├── (marketing)/         # Public pages
│   ├── about/
│   ├── contact/
│   └── pricing/
└── (protected)/        # Authenticated routes
    ├── dashboard/
    ├── profile/
    └── settings/
```

### Components Organization (`components/`)
```
components/
├── auth/              # Auth-related components
│   ├── login-form.tsx
│   └── register-form.tsx
├── common/            # Shared components
│   ├── layouts/
│   │   ├── main-layout.tsx
│   │   └── dashboard-layout.tsx
│   └── navigation/
│       ├── main-nav.tsx
│       └── user-nav.tsx
├── features/          # Feature-specific components
│   ├── dashboard/
│   ├── profile/
│   └── settings/
└── ui/               # UI components (shadcn)
    ├── button.tsx
    └── ...
```

### Core Services & Utilities (`lib/`)
```
lib/
├── api/              # API integration
│   ├── config/
│   │   ├── axios-config.ts
│   │   └── api-endpoints.ts
│   └── services/
│       ├── auth-service.ts
│       └── user-service.ts
└── utils/           # Utility functions
    ├── cookies.ts
    └── validation.ts
```

### Application Logic (`hooks/, contexts/, types/`)
```
├── hooks/                           # Custom React hooks
│   ├── api/                        # API hooks
│   │   ├── auth/
│   │   │   ├── use-login.ts
│   │   │   └── use-register.ts
│   │   └── user/
│   │       └── use-profile.ts
│   └── common/                     # Common hooks
│       ├── use-toast.ts
│       └── use-media-query.ts
├── contexts/                       # React Contexts
│   ├── auth-context.tsx
│   └── theme-context.tsx
└── types/                         # TypeScript types
    ├── api/
    │   ├── requests/
    │   └── responses/
    └── common/
```

### Styling & Configuration
```
├── styles/                         # Styling
│   ├── globals.css
│   └── themes/
│       ├── dark.css
│       └── light.css
├── config/                         # App configuration
│   ├── site-config.ts
│   └── feature-flags.ts
└── constants/                      # Constants
    ├── routes.ts
    └── api-endpoints.ts
```

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). For detailed deployment instructions, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

<<<<<<< HEAD
=======
## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
>>>>>>> b09e6cef27a2d9e739508649f95b69bdb35e9945
