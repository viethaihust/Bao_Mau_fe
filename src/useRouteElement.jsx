import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import RegisterLayout from './Layout/RegisterLayout'
import Home from './page/Home'
import Login from './page/Login'
import UserProfile from './page/UserProfile'
import EmployeeProfile from './page/EmployeeProfile'
import Register from './page/Register'
import EmployeeList from './page/EmployeeList'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'
import Mainlayout from './Layout/MainLayout/MainLayout'
import JobDetail from './page/JobDetail'
import EmployeeInfo from './page/EmployeeInfo'
import ContractedJobsList from './page/ContractedJobsList'
import EmployeeApplyingList from './page/EmployeeApplyingList'
import UserPosts from './page/UserPosts'
import UserRequestsList from './page/UserRequestsList'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

function RoleProtectedRouter() {
  const { info } = useContext(AppContext)
  const check = Boolean(info.roles === 1)
  console.log(check)
  return check ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    // {
    //   path: 'userprofile',
    //   element: (
    //     <MainLayout>
    //       <UserProfile />
    //     </MainLayout>
    //   )
    // },

    // {
    //   path: 'employeelist',
    //   element: (
    //     <Mainlayout>
    //       <EmployeeList />
    //     </Mainlayout>
    //   )
    // },

    {
      path: 'contractedjobslist',
      element: (
        <Mainlayout>
          <ContractedJobsList />
        </Mainlayout>
      )
    },
    {
      path: 'employeeapplyinglist',
      element: (
        <Mainlayout>
          <EmployeeApplyingList />
        </Mainlayout>
      )
    },
    {
      path: 'userposts',
      element: (
        <Mainlayout>
          <UserPosts />
        </Mainlayout>
      )
    },
    {
      path: 'userrequestslist',
      element: (
        <Mainlayout>
          <UserRequestsList />
        </Mainlayout>
      )
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: 'register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: 'employeeprofile',
          element: (
            <MainLayout>
              <EmployeeProfile />
            </MainLayout>
          )
        },
        {
          path: 'userprofile',
          element: (
            <MainLayout>
              <UserProfile />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <RoleProtectedRouter />,
          children: [
            {
              path: 'employeelist',
              element: (
                <Mainlayout>
                  <EmployeeList />
                </Mainlayout>
              )
            }
          ]
        }
      ]

      // path: '',
      // element: <RoleProtectedRouter />,
      // children: [
      //   {
      //     path: 'employeelist',
      //     element: (
      //       <Mainlayout>
      //         <EmployeeList />
      //       </Mainlayout>
      //     )
      //   }
      // ]
    },
    // {
    //   path: 'employeelist',
    //   element: (
    //     <Mainlayout>
    //       <EmployeeList />
    //     </Mainlayout>
    //   )
    // },
    {
      path: 'jobdetail',
      element: (
        <MainLayout>
          <JobDetail />
        </MainLayout>
      )
    },
    {
      path: 'employeeinfo',
      element: (
        <MainLayout>
          <EmployeeInfo />
        </MainLayout>
      )
    }
  ])
  return routeElement
}
