import { useContext, Suspense, ReactNode } from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthContext, AuthProvider } from '../assets/contexts'
import Layout from '../layout'

// ROUTES
import { Spinner } from '@/components/ui'
import Login from '@/pages/login'
import DashboardPage from '@/pages/dashboard'
import PagePredictions from '@/pages/predictions'
import CustomerInformationDetail from '../pages/predictionDetail'

type RoutesPrivateProps = {
  children: ReactNode
}

const RoutesPrivate = ({ children }: RoutesPrivateProps) => {
  // const { auth } = useContext(AuthContext)
  // if (!auth) {
  //   return <Navigate to="/" />
  // }

  return <Layout>{children}</Layout>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },

  {
    path: '/dashboard',
    element: (
      <RoutesPrivate>
        <DashboardPage />
      </RoutesPrivate>
    )
  },

  {
    path: '/predicoes',
    element: (
      <RoutesPrivate>
        <PagePredictions />
      </RoutesPrivate>
    )
  },

  {
    path: '/informacoesclientes/:id',
    element: (
      <RoutesPrivate>
        <CustomerInformationDetail />
      </RoutesPrivate>
    )
  }
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
