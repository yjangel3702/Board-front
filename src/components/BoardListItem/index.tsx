import React from 'react';
import './style.css';
import DefaultProfileImage from 'assets/default-profile-image.png';

export default function BoardListItem() {
  return (
    <div className='board-list-item-card'>
      <div className='board-list-item-main-box'>
        <div className='board-list-item-top'>
          <div className='board-list-item-profile-box'>
            <div className='board-list-item-profile-image' style={{ backgroundImage: `url(${DefaultProfileImage})` }}></div>
          </div>
          <div className='board-list-item-write-box'>
            <div className='board-list-item-nickname'>댕유정</div>
            <div className='board-list-item-write-date'>2023. 08. 24.</div>
          </div>
        </div>
        <div className='board-list-item-middle'>
          <div className='board-list-item-title'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </div>
          <div className='board-list-item-contents'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
          Various versions have evolved over the years, sometimes by accident, sometimes on purpose
          </div>
        </div>
        <div className='board-list-item-bottom'>
          <div className='board-list-item-counts'>
            댓글 0 · 좋아요 0 · 조회수 0
          </div>
        </div>
      </div>
        <div className='board-list-item-image-box'>
          <div className='board-list-item-image'></div>
        </div>
    </div>
  )
}
