import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { RiAccountCircleLine } from 'react-icons/ri';
import DropDown from './DropDown/DropDown';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { FiShoppingCart } from 'react-icons/fi';
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderCenter,
  HeaderLinksContainer,
  HeaderLinks,
  HeaderInput,
  HeaderInputContainer,
  HeaderInputBtn,
  HeaderRight,
  HeaderRightLinks,
  HeaderRightLink,
  HeaderRightWrap,
  HeaderNumber,
  HeaderMobileButtons,
  HeaderIconContainer,
  HeaderCartQty,
  HeaderCartContainer,
  HeaderFooter,
  HeaderFooterRight,
  HeaderRightLogin,
  HeaderRigthCart,
  HeaderCatalog,
  HeaderBarrier,
  HeaderFooterLink,
  HeaderSpan,
  HeaderPrice,
  HeaderFooterIcon,
  HamburgerContainer,
  HeaderLanguageBtn,
} from './HeaderElements';
import { HamburgerMenu } from './hamburgerMenu';
import { fetchHomeInformation } from '../../redux/Slicess/homeSlice';
import { AuthContext } from '../../context/authContext';

const Header = ({ setCartStatus, setLanguageStatus }) => {
  const [cartQty, setCartQty] = React.useState(0);
  const [inputStatus, setInputStatus] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser, logout } = React.useContext(AuthContext);

  const { cartProductsIdsQty, totalPrice } = useSelector(
    (state) => state.cart
  );

  React.useEffect(() => {
    setCartQty(() =>
      cartProductsIdsQty.reduce((acc, val) => {
        return acc + val.qty;
      }, 0)
    );
  }, [cartProductsIdsQty]);

  const { t, i18n } = useTranslation();
  const { language } = useSelector((state) => state.language);
  const { discountProducts, watchedProductsIds } = useSelector(
    (state) => state.home
  );
  React.useEffect(() => {
    if (!discountProducts[language]) {
      dispatch(fetchHomeInformation(watchedProductsIds));
    }
  }, [language]);

  const handleSearch = () => {
    return navigate(`/search?src=${search.trim()}&lan=${language}&page=1`);
  };

  return (
    <HeaderContainer>
      <HeaderLogoContainer to='/' inputStatus={inputStatus}>
        <HeaderLogo src={logo} alt='logo' />
      </HeaderLogoContainer>
      <HeaderCenter>
        <HeaderLinksContainer>
          <HeaderLinks to='/about-us'>{t('header.about_us')}</HeaderLinks>
          <HeaderLinks to='/contacts'>{t('header.contacts')}</HeaderLinks>
          <HeaderLinks to='/news'>{t('header.news')}</HeaderLinks>
          <HeaderLinks to='/support'>{t('header.support')}</HeaderLinks>
          <HeaderLinks to='/portfolio'>{t('header.portfolio')}</HeaderLinks>
          <HeaderLinks to='/brands'>{t('header.brands')}</HeaderLinks>
          <HeaderLinks to='/cooperation'>{t('header.cooperation')}</HeaderLinks>
        </HeaderLinksContainer>
        <HeaderInputContainer status={inputStatus}>
          <HeaderInput
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
          />
          <HeaderInputBtn onClick={handleSearch}>
            {t('header.search')}
          </HeaderInputBtn>
        </HeaderInputContainer>
      </HeaderCenter>
      <HeaderRight>
        <HeaderRightLinks>
          <HeaderRightLink to='/payment'>{t('header.payment')}</HeaderRightLink>
          <HeaderRightLink to='/delivery'>
            {t('header.delivery')}
          </HeaderRightLink>
          <HeaderRightLink to='/warranty'>
            {t('header.warranty')}
          </HeaderRightLink>
        </HeaderRightLinks>
        <HeaderRightWrap>
          <HeaderNumber>555 555 555</HeaderNumber>
          {/* <Link to='https://www.facebook.com/'>
            <FaFacebookSquare style={{ color: '#0058CF', fontSize: '20px' }} />
          </Link> */}
          <HeaderLanguageBtn onClick={() => setLanguageStatus(true)}>
            <BiWorld />
          </HeaderLanguageBtn>
        </HeaderRightWrap>
      </HeaderRight>

      <HeaderMobileButtons>
        <HeaderIconContainer onClick={() => setInputStatus((prev) => !prev)}>
          <AiOutlineSearch />
        </HeaderIconContainer>

        <HeaderCartContainer
          inputStatus={inputStatus}
          onClick={() => setCartStatus(true)}
        >
          <HeaderCartQty>{cartQty}</HeaderCartQty>
          <FiShoppingCart />
        </HeaderCartContainer>
        <HamburgerContainer inputStatus={inputStatus}>
          <HamburgerMenu />
        </HamburgerContainer>
      </HeaderMobileButtons>

      <HeaderFooter>
        <HeaderCatalog>
          <DropDown />
        </HeaderCatalog>
        <HeaderFooterRight>
          <HeaderRigthCart onClick={() => setCartStatus(true)}>
            <HeaderFooterIcon>
              <AiOutlineShoppingCart />
            </HeaderFooterIcon>
            <HeaderBarrier></HeaderBarrier>
            <HeaderPrice>{Math.ceil(totalPrice)} UAH</HeaderPrice>
          </HeaderRigthCart>
          <HeaderRightLogin>
            <HeaderFooterIcon>
              <RiAccountCircleLine />
            </HeaderFooterIcon>
            {currentUser ? (
              <>
                <HeaderFooterLink onClick={logout}>
                  <HeaderSpan>{t('header.logout')}</HeaderSpan>
                </HeaderFooterLink>
              </>
            ) : (
              <>
                <HeaderFooterLink to='/login'>
                  <HeaderSpan>{t('header.login')}</HeaderSpan>
                </HeaderFooterLink>
              </>
            )}
          </HeaderRightLogin>
        </HeaderFooterRight>
      </HeaderFooter>
    </HeaderContainer>
  );
};

export default Header;
