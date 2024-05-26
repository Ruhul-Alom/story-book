import { Link, Outlet } from "react-router-dom";

export default function AdminDashBoardLayout() {
  // const [signOut] = useSignOut(auth);

  // const handleLogout = async () => {
  //   await signOut();
  // };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center relative w-full">
        <div className="absolute top-4 right-4 lg:hidden">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
          <div className="flex justify-between items-center lg:hidden">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="btn btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
          {/* Sidebar content here */}
          <div>
            <li>
              <Link to={"manage-posts"}>Manage All Blog Posts</Link>
            </li>
            <li>
              <Link to={"/admin"}>Add Blog Post</Link>
            </li>
          </div>
          <div className="flex gap-4">
            <Link to={"/"} className="btn btn-neutral">
              Home
            </Link>
            <button className="btn btn-error">
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
