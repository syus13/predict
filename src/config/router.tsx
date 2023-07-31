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
import ProductInformationDetail from '../pages/productDetail/index'
import ProductInformationClientDetail from '@/pages/productDetailClient'
import ProductPage from '@/pages/products'

type RoutesPrivateProps = {
  children: ReactNode
}

const RoutesPrivate = ({ children }: RoutesPrivateProps) => {
  const { auth } = useContext(AuthContext)
  if (!auth && !localStorage.getItem('AUTH-TOKEN')) {
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
    path: '/dashboard',
    element: (
      <RoutesPrivate>
        <DashboardPage />
      </RoutesPrivate>
    )
  },

  {
    path: '/predict',
    element: (
      <RoutesPrivate>
        <PagePredictions />
      </RoutesPrivate>
    )
  },

  {
    path: '/customerinformation/:id',
    element: (
      <RoutesPrivate>
        <CustomerInformationDetail />
      </RoutesPrivate>
    )
  },

  {
    path: '/informationproducts/:id',
    element: (
      <RoutesPrivate>
        <ProductInformationDetail />
      </RoutesPrivate>
    )
  },

  {
    path: '/informationproductscustomers/:id',
    element: (
      <RoutesPrivate>
        <ProductInformationClientDetail />
      </RoutesPrivate>
    )
  },

  {
    path: '/products',
    element: (
      <RoutesPrivate>
        <ProductPage />
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
