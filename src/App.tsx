import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './page/login';
import SignUp from './page/signup';
import Main from './page/main';
import MyPage from './page/mypage';
import Layout from './component/layout';
import LoginPageLayout from './component/loginPageLayout';
import Landing from './page/landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<LoginPageLayout><Landing/></LoginPageLayout>}></Route>
          <Route path='/login' element={<LoginPageLayout><LogIn/></LoginPageLayout>}></Route>
          <Route path='/signup' element={<LoginPageLayout><SignUp /></LoginPageLayout>}></Route>
          <Route path='/main' element={<Layout><Main /></Layout>}></Route>
          <Route path='/mypage/:id' element={<MyPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
