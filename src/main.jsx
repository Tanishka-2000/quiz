import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home, Quiz, Result, Dashboard } from './screens';
import App from './App.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'quiz/:category',
        element: <Quiz />
      },
      {
        path: 'result',
        element: <Result />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
    ]
  }
])

const queryClient = new QueryClient({
  defaultOptions:{
    staleTime: 1000 * 60 * 60 * 12 // data will remain fresh for 1 day
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
