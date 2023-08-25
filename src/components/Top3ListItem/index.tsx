import React from 'react';
import './style.css';
import { BoardItem } from 'types';
import DefaultProfileImage from 'assets/default-profile-image.png';

//          interface: Top3 리스트 아이템 컴포넌트 Props          //
interface Props {
  boardItem: BoardItem
}

//          component: Top3 리스트 아이템 컴포넌트(요소)          //
export default function Top3ListItem({ boardItem }: Props) {

  //          state: Properties         //
  const { boardNumber, title, contents, imageUrl } = boardItem; 
  const { viewCount, commentCount, favoriteCount } = boardItem;
  const { writeDatetime, nickname, profileImageUrl } = boardItem;

  //          event handler: Card Click 이벤트 처리 함수          //
  const onCardClickHandler = () => {
    // TODO: 카드 클릭 이벤트 처리 - 해당 게시물 번호 상세 페이지로 이동
    alert(boardNumber);
  }

  // TODO: 타이틀과 내용초과 범위 처리
  //          render: Top3 리스트 아이템 컴포넌트 렌더링(보여주기)          //
  return (
    <div className='top3-list-item-card' style={{ backgroundImage: `url(${imageUrl})` }} onClick={onCardClickHandler}>
      <div className='top3-list-item-main-box'>

        <div className='top3-list-item-top'>
          <div className='top3-list-item-profile-box'>
            <div className='top3-list-item-profile-image' style={{ backgroundImage: `url(${profileImageUrl ? profileImageUrl : DefaultProfileImage})` }}></div>
          </div>
          <div className='top3-list-item-write-box'>
            <div className='top3-list-item-nickname'>{nickname}</div>
            <div className='top3-list-item-write-date'>{writeDatetime}</div>
          </div>
        </div>

        <div className='top3-list-item-middle'>
          <div className='top3-list-item-title'>{title}</div>
          <div className='top3-list-item-contents'>{contents}</div>
        </div>

        <div className='top3-list-item-bottom'>
          <div className='top3-list-item-counts'>
            {`댓글 ${commentCount} · 좋아요 ${favoriteCount} · 조회수 ${viewCount}`}
          </div>
        </div>

      </div>
    </div>
  )
}
