import { useContext, Suspense, ReactNode } from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthContext, AuthProvider } from '../assets/contexts'
import Layout from '../layout'

// ROUTES
import Contact from '@/routes/contact'
import { Spinner } from '@/components/ui'
import Login from '@/routes/login'

type RoutesPrivateProps = {
  children: ReactNode
}

const RoutesPrivate = ({ children }: RoutesPrivateProps) => {
  const { auth } = useContext(AuthContext)
  if (!auth) {
    return <Navigate to="/" />
  }

  return <Layout>{children}</Layout>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },

  {
    path: '/contact',
    element: <Contact />
  }

  // {
  //   path: '/dashboard',
  //   element: (
  //     <RoutesPrivate>
  //       <PageDashboard />
  //     </RoutesPrivate>
  //   )
  // },

  // {
  //   path: '/predicoes',
  //   element: (
  //     <RoutesPrivate>
  //       <PagePredicoes />
  //     </RoutesPrivate>
  //   )
  // },

  // {
  //   path: '/informacoesclientes/:id',
  //   element: (
  //     <RoutesPrivate>
  //       <SubScreenPrediction />
  //     </RoutesPrivate>
  //   )
  // },

  // {
  //   path: '/informacoesprodutos/:id',
  //   element: (
  //     <RoutesPrivate>
  //       <SubScreenProduct />
  //     </RoutesPrivate>
  //   )
  // },

  // {
  //   path: '/informacoesprodutosclientes/:id',
  //   element: (
  //     <RoutesPrivate>
  //       <SubScreenProductClient />
  //     </RoutesPrivate>
  //   )
  // },

  // {
  //   path: '/produtos',
  //   element: (
  //     <RoutesPrivate>
  //       <PageProduct />
  //     </RoutesPrivate>
  //   )
  //}
])

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Suspense>
  )
}
