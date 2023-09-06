import { useState, useEffect } from "react";
import { BoardItem } from "types";

const usePagination = () => {

  //          state: 현재 페이지 번호 상태          //
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  //          state: 현재 섹션 번호 상태          //
  const [currentSectionNumber, setCurrentSectionNumber] = useState<number>(1);
  //          state: 보여줄 게시물 리스트 상태          //
  const [viewBoardList, setViewBoardList] = useState<BoardItem[]>([]);
  //          state: 보여줄 페이지 번호 리스트 상태          //
  const [viewPageNumberList, setViewPageNumberList] = useState<number[]>([]);

  //          state: 전체 페이지 번호 상태          //
  const [totalPage, setTotalPage] = useState<number>(0);
  //          state: 전체 섹션 번호 상태          //
  const [totalSection, setTotalSection] = useState<number>(0);
  //          state: 전체 게시물 리스트 상태          //
  const [boardList, setBoardList] = useState<BoardItem[]>([]);

  //          function: 보여줄 게시물 리스트 불러오기 함수         //
  const setViewBoard = () => {
     // const tmpList = [];
    // for (let index = 5 * (currentPageNumber - 1); index < 5 * currentPageNumber; index++) {
    //   if (currentBoardListMock.length === index) break;
    //   tmpList.push(currentBoardListMock[index]);
    // }

    const FISRT_INDEX = 5 * (currentPageNumber - 1);
    const LAST_INDEX = 5 * currentPageNumber;
    const tmpList = boardList.filter((item, index) => (index >= FISRT_INDEX && index < LAST_INDEX));
       
    const FIRST_PAGE_INDEX = 10 * (currentSectionNumber - 1) + 1;
    const LAST_PAGE_INDEX = 10 * currentSectionNumber;

    const tmpPageNumberList = [];

    const TOTAL_PAGE = Math.floor((boardList.length - 1) / 5) + 1;

    for (let pageNumber = FIRST_PAGE_INDEX; pageNumber <= LAST_PAGE_INDEX; pageNumber++) {
      if (pageNumber > TOTAL_PAGE) break;
      tmpPageNumberList.push(pageNumber);
    }
    
    setViewBoardList(tmpList);

  }

  //          function: 보여줄 페이지 리스트 불러오기 함수         //
  const setViewPage = (totalPage: number) => {
    const FIRST_PAGE_INDEX = 10 * (currentSectionNumber - 1) + 1;
    const LAST_PAGE_INDEX = 10 * currentSectionNumber;

    const tmpPageNumberList = [];

    for (let pageNumber = FIRST_PAGE_INDEX; pageNumber <= LAST_PAGE_INDEX; pageNumber++) {
      if (pageNumber > totalPage) break;
      tmpPageNumberList.push(pageNumber);
    }

    setViewPageNumberList(tmpPageNumberList);
  }
  
  //          effect: 전체 게시물 리스트가 변경될 시 작업          //
  useEffect(() => {
    const totalPage = Math.floor((boardList.length - 1) / 5) + 1;
    const totalSection = Math.floor((boardList.length - 1) / 50) + 1;
    setTotalPage(totalPage);
    setTotalSection(totalSection);

    setViewBoard();
    setViewPage(totalPage);
  }, [boardList]);

  //          effect: 현재 페이지가 변경될 시 보여줄 게시물 리스트 불러오기          //
  useEffect(() => {
      setViewBoard();

  }, [currentPageNumber]);
  //          effect: 현재 섹션이 변경될 시 보여줄 페이지 리스트 불러오기          //
  useEffect(() => {
      setViewPage(totalPage);
  }, [currentSectionNumber]);

  return {
    currentPageNumber,
    setCurrentPageNumber,
    currentSectionNumber,
    setCurrentSectionNumber,
    viewBoardList,
    viewPageNumberList,
    totalSection,
    setBoardList,
  };
}

export default usePagination;