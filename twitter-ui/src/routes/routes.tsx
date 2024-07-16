import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Home</div>,
	},
	{
		path: "/login",
		element: <LoginPage />,
	}
]);

export default router