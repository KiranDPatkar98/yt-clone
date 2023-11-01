import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screen/homeScreen/HomeScreen';
import './app.scss';
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import LoginScreen from './screen/loginScreen/LoginScreen';
import { useSelector } from 'react-redux';
import WatchScreen from './screen/watchscreen/WatchScreen';
import SearchScreen from './screen/SearchScreen';
import SubscriptionScreen from './screen/subscriptionScreen/SubscriptionScreen';

const Layout = ({ children }) => {
  const [isSideBarOpen, setSideBar] = useState(false);
  const handleToggleSideBar = () => setSideBar((value) => !value);
  return (
    <>
      <Header handleToggleSideBar={handleToggleSideBar} />
      <div className="app_container">
        <Sidebar
          isSideBarOpen={isSideBarOpen}
          handleToggleSideBar={handleToggleSideBar}
        />
        <Container fluid className="app_main">
          {/* <HomeScreen /> */}
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth');
    }
  }, [accessToken, loading, navigate]);

  return (
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
      <Route
        path="/search/:query"
        element={
          <Layout>
            <SearchScreen />
          </Layout>
        }
      />
      <Route
        path="/watch/:id"
        element={
          <Layout>
            <WatchScreen />
          </Layout>
        }
      />
      <Route
        path="/feed/subscriptions"
        element={
          <Layout>
            <SubscriptionScreen />
          </Layout>
        }
      />
      <Route
        path="/channel/:channelId"
        element={<Layout>Channel screen</Layout>}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
