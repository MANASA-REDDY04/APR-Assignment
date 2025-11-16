# APR Assignment

This project is a responsive dashboard application built using React. It includes a sidebar, a navbar, and multiple pages such as Dashboard, Reports, Campaigns, Products, and Settings. The layout is designed to work on both mobile and desktop screens with proper routing and component structure.

## Features

- Fully responsive layout with sidebar and navbar
- Mobile menu drawer with toggle functionality
- Dashboard and other pages in separate components
- React Router-based navigation
- Clean folder structure with reusable UI components
- Deployed on Vercel with support for client-side routing

## Live Demo
https://apr-assignment.vercel.app

## Installation

Clone the repository:

```
git clone https://github.com/MANASA-REDDY04/APR-Assignment.git
cd APR-Assignment
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

## Deployment on Vercel

To avoid "Page Not Found" errors when refreshing, add a `vercel.json` file in the project root:

```
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

After adding the file:

```
git add vercel.json
git commit -m "Add Vercel routing fix"
git push
```

## Build for Production

```
npm run build
```

This generates the production-ready `dist` folder.

## Technologies Used

- React
- React Router
- Vite
- Tailwind CSS

## License

This project is created for assignment and educational usage. You may modify or extend it as needed.
