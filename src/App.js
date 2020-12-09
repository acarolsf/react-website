import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { checkUserSession } from "./redux/user/user.actions";

import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";

import "./default.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from "./layouts/main-layout";
import HomePageLayout from "./layouts/homepage-layout";
import DashboardLayout from "./layouts/dashboard-layout";
import AdminLayout from "./layouts/admin-layout";

import Homepage from "./pages/homepage";
import Registration from "./pages/registration";
import Login from "./pages/login";
import Recovery from "./pages/recovery";
import Dashboard from "./pages/dashboard";
import Admin from "./pages/admin";
import AdminToolbar from "./components/adminToolbar";
import Search from "./pages/search";
import ProductDetails from "./pages/productDetails";
import DashboardAdmin from "./pages/dashboardAdmin";
import AddEvent from "./pages/adicionar/evento";
import AddLocal from "./pages/adicionar/lugar";
import AddNews from "./pages/adicionar/noticia";
import AddSobreCaico from "./pages/adicionar/sobre-caico";
import AddHistoria from "./pages/adicionar/historia";
import AddSlides from "./pages/adicionar/slides";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      <AdminToolbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePageLayout>
              <Homepage />
            </HomePageLayout>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )}
        />
        <Route
          path="/search/:filterType"
          render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )}
        />
        <Route
          path="/product/:productID"
          render={() => (
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          )}
        />
        <Route
          path="/register"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />

        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </WithAuth>
          )}
        />

        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
        <Route
          path="/dashboard-admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <DashboardAdmin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />

        <Route
          path="/add-evento"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <AddEvent />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />

        <Route
          path="/add-lugar"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <AddLocal />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />

        <Route
          path="/add-noticia"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <AddNews />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />

        <Route
          path="/add-sobre"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <AddSobreCaico />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />

        <Route
          path="/add-historia"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <AddHistoria />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />

        <Route
          path="/add-slides"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <AddSlides />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
