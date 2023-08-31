import React, { useState } from 'react';
import './style.css';
import InputBox from 'components/InputBox';
import { useCookies } from 'react-cookie';
import { useUserStore } from 'stores';

//          component: 인증 페이지          //
export default function Authentication() {

  const { user, setUser } = useUserStore();
  const [cookies, setCookie] = useCookies();
  //          state: 화면 상태          //
  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');

  //          component: sign-in 카드 컴포넌트          //
  const SignInCard = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
    const [passwordIcon, setPasswordIcon] = useState<'eye-off-icon' | 'eye-on-icon'>('eye-off-icon')
    const [error, setError] =useState<boolean>(false);

    const onPasswordIconClickHandler = () => {
      if (passwordType === 'text') {
        setPasswordType('password');
        setPasswordIcon('eye-off-icon');
      }
      if (passwordType === 'password') {
        setPasswordType('text');
        setPasswordIcon('eye-on-icon');
      }
    }

    const onSignInButtonClickHandler = () => {
      // TODO: 로그인 처리
      alert('로그인 버튼 클릭');
    }

    const onSignUpLinkClickHandler = () => {
      setView('sign-up');
    }

    return (
      <div className='auth-card'>
        <div className='auth-card-top'>
          <div className='auth-card-title-box'>
            <div className='auth-card-title'>{'로그인'}</div>
          </div>
          <InputBox label='이메일 주소' type='text' placeholder='이메일 주소를 입력해주세요.' error={error} value={email} setValue={setEmail} />
          <InputBox label='비밀번호' type={passwordType} placeholder='비밀번호를 입력해주세요.' error={error} value={password} setValue={setPassword} icon={passwordIcon} onButtonClick={onPasswordIconClickHandler} />
        </div>
        <div className='auth-card-bottom'>
          {error && (
          <div className='auth-sign-in-error-box'>
            <div className='auth-sign-in-error-message'>
              {'이메일 주소 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요'}
            </div>
          </div>
          )}
          <div className='auth-button' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
          <div className='auth-description-box'>
            <div className='auth-desceription'>{'신규 사용자이신가요?'}<span className='description-emphasis' onClick={onSignUpLinkClickHandler}>{'회원가입'}</span></div>
          </div>
        </div>
      </div>
    );

  }
  //          component: sign-up 카드 컴포넌트          //
  const SignUpCard = () => {
    return (<></>)
  }

  //          render: 인증 페이지 렌더링          //
  return (
    <div id='auth-wrapper'>
      <div className='auth-container'>
        <div className='auth-jumbotron-box'>
          <div className='auth-jumbotron-contents'>
            <div className='jumbotron-icon'></div>
            <div className='auth-jumbotron-text-box'>
              <div className='auth-jumbotron-text'>{'환영합니다.'}</div>
              <div className='auth-jumbotron-text'>{'Cats Board입니다.'}</div>
            </div>
          </div>
        </div>
        { view == 'sign-in' && <SignInCard /> }
        { view == 'sign-up' && <SignUpCard /> }
      </div>
    </div>
  )
  
}
