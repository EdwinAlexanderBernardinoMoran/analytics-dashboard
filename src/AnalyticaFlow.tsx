import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"
import { AnalyticContextProvider } from "./context/AnalyticContext"

export const AnalyticaFlow = () => {
  return (
    <>
      <AnalyticContextProvider >
        <RouterProvider router={appRouter} />
      </AnalyticContextProvider>
    </>
  )
}