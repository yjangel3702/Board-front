export default interface signUpRequestDto {
  email: string;
  password: string;
  nickname: string;
  tellNumber: string;
  address: string;
  addressDetail: string | null;
  agreedPersonal: boolean;
};