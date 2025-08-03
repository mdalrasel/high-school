import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Academic from "../components/Academic";
import Teacher from "../components/Teacher";
import NoticeBoard from "../components/NoticeBoard";
import ResultBoard from "../components/ResultBoard";
import Gallery from "../components/Gallery";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: '/',
        Component: Home
      },
      {
        path: 'academic',
        Component: Academic
      },
      {
        path: 'teacher',
        Component: Teacher
      },
      {
        path: 'notice',
        Component: NoticeBoard
      },
      {
        path:'result-board',
        Component:ResultBoard
      },
      {
        path:'gallery',
        Component:Gallery
      }
    ]
  },
]);