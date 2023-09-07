import React from 'react';
import './style.css';

//          component: 검색 페이지          //
export default function Search() {

  //          render: 검색 페이지 렌더링          //
  return (
    <div id='search-wrapper'>
      <div className='search-container'>
        <div className='search-title-box'>
          <div className='search-title'><span className='search-title-emphasis'>{'안녕'}</span>{'에 대한 검색 결과입니다.'}</div>
          <div className='search-count'>{12}</div>
        </div>
        <div className='search-contents-box'>
          {/* <div className='search-contents-result-box'>

          </div> */}
          <div className='search-contents-result-nothing'>{'검색 결과가 없습니다.'}</div>
          <div className='search-relation-word-box'>
            <div className='search-relation-word-card'>
              <div className='search-relation-card-box'>
                <div className='search-relation-card-title'>{'관련 검색어'}</div>
                {/* <div className='search-relation-card-contents'></div> */}
                <div className='search-relation-card-contents-nothing'>{'관련 검색어가 없습니다.'}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='search-pagination-box'></div>
      </div>
    </div>
  )
}
