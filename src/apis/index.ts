import axios from "axios";
import { SignUpRequestDto } from "./dto/request/auth";
import { SignUpResponseDto } from "./dto/response/auth";
import ResponseDto from "./dto/response";
import SignInRequestDto from "./dto/request/auth/sign-in-request.dto";
import { error } from "console";
import SignInResponseDto from "./dto/response/auth/sign-in-response.dto";

// description: API Domain 주소 //
const API_DOAMIN = 'http://localhost:4000/api/v1';

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
export const SignInRequest = async (requestBody: SignInRequestDto) => {
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
}