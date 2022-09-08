import { AuthContext, AuthProvider } from "./Context/AuthContext";
import AppNav from "./screens/Navigation/AppNav";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
