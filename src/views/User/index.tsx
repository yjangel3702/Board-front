import React, { useRef, ChangeEvent, useState, useEffect } from 'react';
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';
import { userBoardListMock, userMock } from 'mocks';
import { useUserStore } from 'stores';
import { usePagination } from 'hooks';
import { BoardItem } from 'types';
import BoardListItem from 'components/BoardListItem';
import Pagination from 'components/Pagination';
import { AUTH_PATH, BOARD_WRITE_PATH, USER_PATH } from 'constant';

//          component: 유저 페이지          //
export default function User() {

  //          state: 조회하는 유저 이메일 path variable 상태          //
  const { searchEmail } = useParams();
  //          state: 로그인 유저 정보 상태          //
  const { user } = useUserStore();
  //          state: 본인 여부 상태          //
  const [isMypage, setMypage] = useState<boolean>(false);

  //          component: 유저 정보 컴포넌트          //
  const UserInfo = () => {

    //          state: 프로필 이미지 input ref 상태          //
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    //          state: 이메일 상태          //
    const [email, setEmail] = useState<string>('');
    //          state: 프로필 이미지 상태          //
    const [profileImage, setProfileImage] = useState<string | null>('');
    //          state: 닉네임 상태          //
    const [nickname, setNickname] = useState<string>('Meow');
    //          state: 닉네임 변경 상태          //
    const [showChangeNickname, setShowChangeNickname] = useState<boolean>(false);

    //          event handler: 프로필 이미지 클릭 이벤트 처리          //
    const onProfileImageClickHandler = () => {
      if(!isMypage) return;
      if(!fileInputRef.current) return;
      fileInputRef.current.click();
    }

    //          event handler: 닉네임 변경 버튼 클릭 이벤트 처리          //
    const onChangeNicknameButtonClickHandler = () => {
      setShowChangeNickname(!showChangeNickname);
    }

    //          event handler: 프로필 이미지 변경 이벤트 처리          //
    const onProfileImageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      if(!event.target.files || !event.target.files.length) return;
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setProfileImage(imageUrl);
    }
    //          event handler: 닉네임 변경 이벤트 처리          //
    const onNicknameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const nickname = event.target.value;
      setNickname(nickname);
    }

    //          effect: 조회하는 유저의 이메일이 변경될 때마다 실행할 함수          //
    useEffect(() => {
      const { email, nickname, profileImage } = userMock;
      setEmail(email);
      setNickname(nickname);
      setProfileImage(profileImage);

      const isMypage = email === user?.email;
      setMypage(isMypage);
    }, [searchEmail]);

    //          render: 유저 정보 컴포넌트 렌더링          //
    return (
      <div id='user-info-wrapper'>
        <div className='user-info-container'>
          <div className={isMypage ? 'user-info-profile-image-box-mypage' : 'user-info-profile-image-box'} onClick={onProfileImageClickHandler}>
            <input ref={fileInputRef} type='file' accept='image/*' style={{ display: 'none'}} onChange={onProfileImageChangeHandler} />
            { profileImage === '' ? (
            <div className='user-info-profile-default-image'>
              <div className='user-info-profile-icon-box'>
                <div className='image-box-white-icon'></div>
              </div>
            </div>
            ) : (
              <div className='user-info-profile-image' style={{ backgroundImage: `url(${profileImage})` }}></div>
            )}
          </div>
          <div className='user-info-meta-box'>
            <div className='user-info-nickname-box'>
              {showChangeNickname ? (
              <input className='user-info-nickname-input' type='text' size={nickname.length + 1} value={nickname} onChange={onNicknameChangeHandler} />
              ) : (
              <div className='user-info-nickname'>{nickname}</div>
              )}
              {isMypage && (
              <div className='icon-button' onClick={onChangeNicknameButtonClickHandler}>
                <div className='edit-light-icon'></div>
              </div>
              )}
            </div>
            <div className='user-info-email'>{email}</div>
          </div>
        </div>
      </div>
    );

  };

  //          component: 유저 게시물 컴포넌트          //
  const UserBoardList = () => {

    //          state: 페이지네이션 관련 상태          //
    const { currentPageNumber, setCurrentPageNumber, currentSectionNumber, setCurrentSectionNumber,
            viewBoardList, viewPageNumberList, totalSection, setBoardList } = usePagination<BoardItem>(5);
    //          state: 게시물 개수 상태          //
    const [count, setCount] = useState<number>(0);

    //          function: 네비게이트 함수         //
    const navigator = useNavigate();

    //          event handler: 버튼 클릭 이벤트 처리          //
    const onButtonClickHandler = () => {
      if (!user) {
        alert('로그인이 필요합니다.');
        navigator(AUTH_PATH);
        return;
      }

      if (isMypage) navigator(BOARD_WRITE_PATH);
      else navigator(USER_PATH(user.email));
    }

    //          effect: 조회하는 유저의 이메일이 변경될 때마다 실행할 함수          //
    useEffect(() => {
      setBoardList(userBoardListMock);
      setCount(userBoardListMock.length);
    }, [searchEmail]);
    
    //          render: 유저 게시물 컴포넌트 렌더링          //
    return (
      <div id='user-board-wrapper'>
        <div className='user-board-container'>
          <div className='user-board-title-box'>
            <div className='user-board-title'>{'내 게시물 '}<span className='emphasis'>{count}</span></div>
          </div>
          <div className='user-board-contents-box'>
            {count === 0 ? (
            <div className='user-board-contents-nothing'>{'게시물이 없습니다.'}</div>
            ) : (
            <div className='user-board-contents-result-box'>
              {viewBoardList.map(boardItem => <BoardListItem boardItem={boardItem} />)}
            </div>
            )}
            <div className='user-board-button-box' onClick={onButtonClickHandler}>
              <div className='user-board-button-contents'>
                {isMypage ? (
                <>
                <div className='icon-box'>
                  <div className='edit-light-icon'></div>
                </div>
                <div className='user-board-button-text'>{'글쓰기'}</div>
                </>
                ) : (
                <>
                <div className='user-board-button-text'>{'내 게시물로 가기'}</div>
                <div className='icon-box'>
                  <div className='arrow-right-icon'></div>
                </div>
                </>
                )}
              </div>
            </div>
          </div>
          <div className='user-board-pagination-box'>
            {count !== 0 && (
            <Pagination
              currentPageNumber={currentPageNumber}
              currentSectionNumber={currentSectionNumber}
              setCurrentPageNumber={setCurrentPageNumber}
              setCurrentSectionNumber={setCurrentSectionNumber}
              viewPageNumberList={viewPageNumberList}
              totalSection={totalSection}
            />
            )}
          </div>
        </div>
      </div>
    );
  };

  //          effect: 조회하는 유저의 이메일이 변경될 때마다 실행할 함수          //
  useEffect(() => {
    const isMypage = searchEmail === user?.email;
    setMypage(isMypage);
  }, [searchEmail]);
  
  //          render: 유저 페이지 렌더링          //
  return (
    <>
      <UserInfo />
      <UserBoardList />
    </>
  )
}