import React from 'react'
import { Link,Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className="dashboardBlock">
      <article>
        <h1>DashBoard</h1>
        <nav className="nested_menu">
          <ul>
            <li>
              <Link to="/dashboard/my-account">MyAccount</Link>
            </li>
            <li>
              <Link to="/dashboard/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </article>
    </section>
  );
}

export default Dashboard


