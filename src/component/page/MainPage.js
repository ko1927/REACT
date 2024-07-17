import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
//앞에서 만든 버튼 컴포넌트를 사용해서 글을 작성하기 페이지에 이동할 수 있도록 import 했고,
//앞에서 만든 postlist컴포넌트를 통해 글 목록을 표시할 수 있도록 import했습니다.
import Button from "../ui/Button";
import data from '../../data.json';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

//페이지 이동을 위해 리엑트 라우터 돔에 useNavigate 훅을 사용하였다.
//mainpage 컴포넌트의 구조는 기존에 만들어 두었던 컴포넌트들을 모아놓은 수준으로 굉장히 단순한데, 이것이 바로 컴포넌트 기반으로 개발하는 리액트의 장점이라는 것을 느낄 수 있었습니다.
function MainPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />

                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;