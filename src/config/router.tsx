import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// PAGES
import Contact from '@/pages/contact'
import { Spinner } from '@/components/ui'
import Login from '@/pages/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },

  {
    path: '/contact',
    element: <Contact />
  }
])

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
