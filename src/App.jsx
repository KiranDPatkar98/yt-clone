import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screen/homeScreen/HomeScreen';
import './app.scss';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import LoginScreen from './screen/homeScreen/loginScreen/LoginScreen';

const Layout = ({ children }) => {
  const [isSideBarOpen, setSideBar] = useState(false);
  const handleToggleSideBar = () => setSideBar((value) => !value);
  return (
    <>
      <Header handleToggleSideBar={handleToggleSideBar} />
      <div className="app_container border border-info">
        <Sidebar
          isSideBarOpen={isSideBarOpen}
          handleToggleSideBar={handleToggleSideBar}
        />
        <Container fluid className="app_main border border-warning">
          {/* <HomeScreen /> */}
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
          exact
        />
        <Route path="/auth" element={<LoginScreen />} />
        <Route path="/search" element={<h1>Search</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
