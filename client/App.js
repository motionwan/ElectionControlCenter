import 'react-native-gesture-handler';
import { AuthProvider } from './Context/AuthContext';
import AppNav from './screens/Navigation/AppNav';

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
