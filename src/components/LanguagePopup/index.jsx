import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../redux/slices/languageSlice';
import {
  LanguagePopupContainer,
  LanguagePopupH1,
  LanguagePopupLan,
  LanguagePopupSelectWrap,
  LanguagePopupWrap,
} from './LanguagePopupElements';

const LanguagePopup = ({ languageStatus, setLanguageStatus }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (lan) => {
    i18n.changeLanguage(lan);
    const language = localStorage.getItem('i18nextLng');
    dispatch(setLanguage(language));
    setLanguageStatus(false);
  };

  return (
    <LanguagePopupContainer
      languageStatus={languageStatus}
      onClick={() => setLanguageStatus(false)}
    >
      <LanguagePopupWrap
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <LanguagePopupH1>{t('languagePopup.choose_language')}</LanguagePopupH1>
        <LanguagePopupSelectWrap>
          <LanguagePopupLan onClick={() => changeLanguage('ru')}>
            RU
          </LanguagePopupLan>
          <LanguagePopupLan onClick={() => changeLanguage('ua')}>
            UA
          </LanguagePopupLan>
        </LanguagePopupSelectWrap>
      </LanguagePopupWrap>
    </LanguagePopupContainer>
  );
};

export default LanguagePopup;
