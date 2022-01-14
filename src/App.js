import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./router/AppRouter";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
