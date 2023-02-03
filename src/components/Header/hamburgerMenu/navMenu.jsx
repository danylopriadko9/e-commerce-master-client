import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function NavMenu({ isOpen }) {
  const { t, i18n } = useTranslation();

  return (
    <NavMenuContainer>
      <NavList>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <Link to='/'>{t('header.main')}</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <Link to='/categories'>{t('header.catalog')}</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <Link to='/contacts'>{t('header.contacts')}</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link to='/about-us'>{t('header.about_us')}</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <Link to='/news'>{t('header.news')}</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.7, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.25, duration: 0.05 },
            },
          }}
        >
          <Link to='/support'>{t('header.support')}</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
        >
          <Link to='/portfolio'>{t('header.portfolio')}</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
        >
          <Link to='/brands'>{t('header.brands')}</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
        >
          <Link to='/cooperation'>{t('header.cooperation')}</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
        >
          <Link to='/payment'>{t('header.payment')}</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
        >
          <Link to='/delivery'>{t('header.delivery')}</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
        >
          <Link to='/warranty'>{t('header.warranty')}</Link>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
}

const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  padding: 0 0.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(motion.li)`
  font-weight: 600;
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #444;
    font-size: 20px;
    transition: all 200ms ease-in-out;
    width: 100%;
  }

  &:hover {
    a {
      color: #555;
    }
  }
`;

const variants = {
  show: {
    transform: 'translateX(0em)',
    opacity: 1,
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0,
  },
};
