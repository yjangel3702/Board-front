import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

//          component: 헤더 컴포넌트          //
export default function Header() {

  //          function: 네비게이트 함수          //
  const navigator = useNavigate();

  //          event handler: 로고 클릭 이벤트 처리          //
  const onLogoClickHandler = () => {
    navigator('/')
  }

  //          render: 헤더 컴포넌트 렌더링          //
  return (
    <div id='header'>
      <div className='header-container'>
        <div className='header-left-box' onClick={onLogoClickHandler}>
          <div className='header-logo-icon-box'>
            <div className='logo-dark-icon'></div>
          </div>
          <div className='header-logo-text'>{'Cats Board'}</div>
        </div>

        <div className='header-right-box'>
          
        </div>
      </div>
    </div>
  )
}
