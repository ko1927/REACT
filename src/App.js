import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>유정이의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
				//마지막에 :(콜론)postId는 동적으로 변하는 파라미터를 위한 값이다.
				//콜론과 id를 사용하면 실제 컴포넌트에서는 useParams를 사용해 아이디로 해당 값을 가져올 수 있다고 한다.
      </Routes>
    </BrowserRouter>
  );
}

export default App;