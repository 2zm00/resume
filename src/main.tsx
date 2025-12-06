import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Resume from "./resume.mdx";
import Frontend from "./frontend.mdx";
import './index.css'
import Master from "./master.mdx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Resume />,
  },
  {
    path: "/frontend",
    element: <Frontend />,
  },
  {
    path: "/master",
    element: <Master />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
