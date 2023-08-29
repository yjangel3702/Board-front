export const MAIN_PATH = '/';
export const AUTH_PATH = '/auth';
export const SEARCH_PATH = (word: string) => `/search/${word}`;
export const BOARD_DETAIL_PATH = (boardNumber: number | string) => `/board/detail/${boardNumber}`;
export const BOARD_WRITE_PATH = '/board/write';
export const BOARD_UPDATE_PATH = (boardNumber: number | string) => `/board/update/${boardNumber}`;
export const USER_PATH = (email: string) => `/user/${email}`;
 // 원래는 { return 반환값 } 으로 입력해야 하지만, 한 줄이면 중괄호와 리턴을 생략할 수 있다