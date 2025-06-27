import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "users",
                Component: User,
            },
            {
                path: "tasks",
                Component: Tasks,
            },
        ]
    },
]);
