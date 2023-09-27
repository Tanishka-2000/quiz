import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'screen1',
        element: <div>Screen 1</div>
      },
      {
        path: 'screen2',
        element: <div>Screen 2</div>
      },
      {
        path: 'screen3',
        element: <div>Screen 3</div>
      },
      {
        path: 'screen4',
        element: <div>Screen 4</div>
      },
      {
        path: 'screen5',
        element: <div>Screen 5</div>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
