import React from 'react';
import './style.css';

//          component: 게시물 상세보기 페이지         //
export default function BoardDetail() {

  //          component: 게시물 상세보기 상단 컴포넌트         //
  const BoardDetailTop = () => {

    //          render: 게시물 상세보기 상단 컴포넌트 렌더링         //
    return (
      <div id='board-detail-top'>
        <div className='board-detail-top-header'>
          <div className='board-detail-title'>{'고양이는 신이야 고양이는 귀여워'}</div>
          <div className='board-detail-sub-box'>
            <div className='board-detail-write-info-box'>
              <div className='board-detail-writer-profile-image' style={{ backgroundImage: `url()` }}></div>
              <div className='board-detail-writer-nickname'>{'댕유정'}</div>
              <div className='board-detail-info-divider'>{'\|'}</div>
              <div className='board-detail-write-date'>{'2023.09.07.'}</div>
            </div>
            <div className='icon-button'>
              <div className='more-box'>
                <div className='more-update-button'>{'수정'}</div>
                <div className='divider'></div>
                <div className='more-delete-button'>{'삭제'}</div>
              </div>
              <div className='more-icon'></div>
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='board-detail-top-main'></div>
      </div>
    )
  };

  //          component: 게시물 상세보기 하단 컴포넌트         //
  const BoardDetailBottom = () => {

    //          render: 게시물 상세보기 하단 컴포넌트 렌더링         //
    return (
      <div>

      </div>
    )
  };

  //          render: 게시물 상세보기 페이지 렌더링         //
  return (
    <div id='board-detail-wrapper'>
      <div className='board-detail-container'>
        <BoardDetailTop />
        <BoardDetailBottom />
      </div>
    </div>
  )
}
