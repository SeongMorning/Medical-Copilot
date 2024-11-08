import { useState } from 'react';
import styles from './UserProfile.module.scss';
import NameInput from '../NameInput/NameInput';
import PWInput from '../PWInput/PWInput';

export default function UserProfile() {
  const [isNameInput, setIsNameInput] = useState<boolean>(false);
  const [isPWInput, setIsPWInput] = useState<boolean>(false);
  return (
    <div
      className={`${styles.main} rounded-[20px] w-[50%] min-w-[490px] p-6 flex flex-col gap-4 h-fit`}
    >
      <span className={`${styles.title} text-[32px]`}>User Profile</span>
      <div className={`${styles.info}  h-full flex flex-col gap-4`}>
        <div className={`grid grid-cols-[1fr_2fr_1fr]  h-[40px] items-center`}>
          <span>Email</span>
          <span>jeonsm22@daum.net</span>
          <span></span>
        </div>
        <span></span>
        <div className={`grid grid-cols-[1fr_2fr_1fr]  h-[40px] items-center`}>
          <span>Name</span>
          <span>Seongmo Jeon</span>
          <span
            className={`${styles.setting} w-[50px] h-[30px] flex justify-center items-center rounded-[10px]`}
            onClick={() => {
              setIsNameInput((prev) => !prev);
            }}
          >
            설정
          </span>
        </div>
        {isNameInput && <NameInput isNameInput={isNameInput} />}
        <div className={`grid grid-cols-[1fr_2fr_1fr]  h-[40px] items-center`}>
          <span>Password</span>
          <span>**********</span>
          <span
            className={`${styles.setting} w-[50px] h-[30px] flex justify-center items-center rounded-[10px]`}
            onClick={() => {
              setIsPWInput((prev) => !prev);
            }}
          >
            설정
          </span>
        </div>
        {isPWInput && <PWInput isPWInput={isPWInput} />}
      </div>
    </div>
  );
}