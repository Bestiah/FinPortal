import { createBrowserRouter, Navigate } from "react-router";
import { DashboardPage } from "@/pages/DashboardPage";
import { InvestmentsPage } from "@/pages/InvestmentPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { OrderPage } from "@/pages/OrderPage";
import { TransactionsPage } from "@/pages/TransactionPage";
import { AppLayout } from "./AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "transactions", element: <TransactionsPage /> },
      { path: "investments", element: <InvestmentsPage /> },
      { path: "investments/order", element: <OrderPage /> },
    ],
  },
]);
