import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';
import { AUTH_PATH, BOARD_DETAIL_PATH, BOARD_UPDATE_PATH, BOARD_WRITE_PATH, MAIN_PATH, SEARCH_PATH, USER_PATH } from 'constant';
import Main from 'views/Main';
import Authentication from 'views/Authentication';
import Search from 'views/Search';
import BoardDetail from 'views/Board/Detail';
import BoardUpdate from 'views/Board/Update';
import BoardWrite from 'views/Board/Write';
import User from 'views/User';
import Container from 'layouts/Container';

function App() {

  return (
      <Routes>
        <Route element={<Container />}>
          <Route path={MAIN_PATH} element={<Main />} />
          <Route path={AUTH_PATH} element={<Authentication />} />
          <Route path={SEARCH_PATH(':word')} element={<Search />} />
          <Route path={BOARD_WRITE_PATH} element={<BoardWrite />} />
          <Route path={BOARD_DETAIL_PATH(':bordNumber')} element={<BoardDetail />} />
          <Route path={BOARD_UPDATE_PATH(':boardNumber')} element={<BoardUpdate />} />
          <Route path={USER_PATH(':email')} element={<User />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
  )
}

export default App;

// ! 네비게이션 설계
// ! 메인 화면 : '/' - Main
// ! 로그인 화면 + 회원가입 화면 : /auth - Authentication
// ! 검색 화면 : '/search/:word' - Search
// ! 게시물 상세 보기 화면 : '/board/detail/:boardNumber' - BoardDetail
// ! 게시물 작성 화면 : '/board/write' - BoardWrite
// ! 게시물 수정 화면 : '/board/update/:boardNumber' - BoardUpdate
// ! 유저 게시물 화면 : '/user/:email' - User