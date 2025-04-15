# 📝 Next.js Todo App

This is a simple Todo application built with **Next.js 14** (App Router) using **React Query**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 How to Run the Project

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

.
├── app/
│   ├── components/
│   │   ├── EmptyState.tsx        # Empty state when no todos are available
│   │   ├── TodoForm.tsx          # Form for adding todos
│   │   ├── TodoItem.tsx          # Single todo item component
│   │   └── TodosList.tsx         # List of all todos
│   ├── hooks/
│   │   ├── useAddTodo.ts         # Hook to add a todo
│   │   ├── useDeleteTodo.ts      # Hook to delete a todo
│   │   ├── useUpdateTodo.ts      # Hook to update a todo
│   │   └── useTodos.ts           # Hook to fetch todos
│   ├── lib/
│   │   └── apiTodos.ts           # API requests (axios/fetch)
│   ├── types/
│   │   └── todoType.ts           # Todo type definition
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Main page
│   └── providers.tsx             # React Query provider setup
├── public/                       # Static assets
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project description (this file)

🛠️ Tech Stack
Next.js 14 – App Router

React + TypeScript

React Query – for data fetching/mutations

Tailwind CSS – for styling

Framer Motion – for animations
