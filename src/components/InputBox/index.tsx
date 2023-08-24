import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import './style.css';

//          interface: Input 상자 컴포넌트 Props          //
interface Props {
  label: string;
  type: 'text' | 'password';
  error: boolean;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>
  icon?: string;
  errorMessage?: string;
  onButtonClick?: () => void;

}

//          component: Input 상자 컴포넌트          //
export default function InputBox(props: Props) {

  //          state: Properties         //
  const { label, type, error, placeholder, value, icon, errorMessage } = props;
  const { setValue, onButtonClick } = props;

  //          event handler: input값 변경 이벤트 처리         //
  const onInputValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  }


  //          render: Input 상자 렌더링         //
  return (
    <div className="inputbox">
      <div className='inputbox-label'>{label}</div>
      <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
        <input className='input' type={type} placeholder={placeholder} value={value} onChange={onInputValueChangeHandler}/>
        {onButtonClick !== undefined && (
          <div className='icon-button' onClick={onButtonClick}>
            {icon !== undefined && <div className={icon}></div>}
          </div>
        )}
      </div>
      <div className='inputbox-message'>{errorMessage}</div>
    </div>
  )
}
