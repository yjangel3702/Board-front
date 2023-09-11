import React from 'react';
import './style.css';

//          component: 유저 페이지          //
export default function User() {

  //          component: 유저 정보 컴포넌트          //
  const UserInfo = () => {

    //          render: 유저 정보 컴포넌트 렌더링          //
    return (
      <div id='user-info-wrapper'>
        <div className='user-info-container'>
          <div className='user-info-profile-image-box'>
            <div className='user-info-profile-default-image'>
              <div className='user-info-profile-icon-box'>
                <div className='image-box-white-icon'></div>
              </div>
            </div>
            {/* <div className='user-info-profile-image'></div> */}
          </div>
          <div className='user-info-meta-box'>
            <div className='user-info-nickname-box'>
              <div className='user-info-nickname'>{'나는주코야키'}</div>
              <div className='icon-button'>
                <div className='edit-light-icon'></div>
              </div>
            </div>
            <div className='user-info-email'>{'email@email.com'}</div>
          </div>
        </div>
      </div>
    );

  };

  //          component: 유저 게시물 컴포넌트          //
  const UserBoardList = () => {
    
    //          render: 유저 게시물 컴포넌트 렌더링          //
    return (
      <div></div>
    );
  };

  //          render: 유저 페이지 렌더링          //
  return (
    <>
      <UserInfo />
      <UserBoardList />
    </>
  )
}