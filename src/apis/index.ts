import axios from "axios";
import { SignUpRequestDto } from "./dto/request/auth";
import { SignUpResponseDto } from "./dto/response/auth";
import ResponseDto from "./dto/response";
import SignInRequestDto from "./dto/request/auth/sign-in-request.dto";
import SignInResponseDto from "./dto/response/auth/sign-in-response.dto";
import { GetSignInUserResponseDto } from "./dto/response/user";
import GetUserResponseDto from "./dto/response/user/get-user.response.dto";

// description: Domain URL //
const DOMAIN = 'http://localhost:4000';

// description: API Domain 주소 //
const API_DOAMIN = `${DOMAIN}/api/v1`;
// description: Authorizaition Header //
const authorizaition = (token: string) => { 
  return { headers: { Authorizaition: `Bearer ${token}`}}};
// description: sign up API end point //
const SIGN_UP_URL = () => `${API_DOAMIN}/auth/sign-up`;
// description: sign in API end point //
const SIGN_IN_URL = () => `${API_DOAMIN}/auth/sign-in`;

// description: sign up request //
export const signUpRequest = async (requestBody: SignUpRequestDto) => {
  const result = await axios.post(SIGN_UP_URL(), requestBody)
    .then(response => {
      const responseBody: SignUpResponseDto = response.data;
      const { code } = responseBody;
      return code;
    })
    .catch(error => {
      const responseBody: ResponseDto = error.response.data;
      const { code } = responseBody;
      return code;
    });
  return result;
};

// description: sign in request //
export const signInUserRequest = async (requestBody: SignInRequestDto) => {
  const result = await axios.post(SIGN_IN_URL(), requestBody)
    .then(response => {
      const responseBody: SignInResponseDto = response.data;
      return responseBody;
    })
    .catch(error => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

// description: get sign in user API end point //
const GET_SIGN_IN_USER_URL = () => `${API_DOAMIN}/user`;
// description: get user API end point //
const GET_USER_URL = (email: string) => `${API_DOAMIN}/user/${email}`;

// description: get sign in request //
export const getSignInRequest = async (token: string) => {
  const result = await axios.get(GET_SIGN_IN_USER_URL(), { headers: { Authorization: `Bearer ${token}`} })
    .then(response => {
      const responseBody: GetSignInUserResponseDto = response.data;
      return responseBody;
    })
    .catch(error => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

// description: get user request //
export const getUserRequest = async (email: string) => {
  const result = await axios.get(GET_USER_URL(email))
    .then(response => {
      const responseBody: GetUserResponseDto = response.data;
      return responseBody;
    })
    .catch(error => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    })

  return result;
};

// description: File Domain 주소 //
const FILE_DOMAIN = `${DOMAIN}/file`;

// description: file upload end point //
const FILE_UPLOAD_URL = () => `${FILE_DOMAIN}/upload`;

// description: File Content type Header //
const multipart = { headers: { 'Content-Type': 'multipart/form-data' }};

// description: file upload request //
export const fileUploadRequest = async (data: FormData) => {
  const result = await axios.post(FILE_UPLOAD_URL(), data, multipart)
    .then(response => {
      const responseBody: string = response.data;
      return responseBody;
    })
    .catch(error => {
      return null;
    });
  return result;
}