import { createBrowserRouter } from "react-router";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { OnboardingPage } from "./components/OnboardingPage";
import { RegisterMachinePage } from "./components/RegisterMachinePage";
import { MachineConnectionPage } from "./components/MachineConnectionPage";
import { CreateStorePage } from "./components/CreateStorePage";
import { AddProductsPage } from "./components/AddProductsPage";
import { DashboardLayout } from "./components/DashboardLayout";
import { OverviewPage } from "./components/OverviewPage";
import { MachineManagementPage } from "./components/MachineManagementPage";
import { OrdersPage } from "./components/OrdersPage";
import { PayoutsPage } from "./components/PayoutsPage";
import { SettingsPage } from "./components/SettingsPage";
import { ManageProductsPage } from "./components/ManageProductsPage";
import { AdminMachinePage } from "./components/AdminMachinePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/signup",
    Component: SignupPage,
  },
  {
    path: "/onboarding",
    Component: OnboardingPage,
  },
  {
    path: "/register-machine",
    Component: RegisterMachinePage,
  },
  {
    path: "/machine-connection",
    Component: MachineConnectionPage,
  },
  {
    path: "/create-store",
    Component: CreateStorePage,
  },
  {
    path: "/add-products",
    Component: AddProductsPage,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: OverviewPage },
      { path: "machines", Component: MachineManagementPage },
      { path: "machines/:machineId/products", Component: ManageProductsPage },
      { path: "machines/admin", Component: AdminMachinePage },
      { path: "orders", Component: OrdersPage },
      { path: "payouts", Component: PayoutsPage },
      { path: "settings", Component: SettingsPage },
    ],
  },
]);