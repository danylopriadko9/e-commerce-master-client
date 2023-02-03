import React from 'react';
import logo from '../../../assets/logo2.png';

import {
  NewItemContainer,
  NewItemImageContainer,
  NewItemImage,
  NewItemDescription,
  NewItemDate,
} from '../NewsSliderElements';

const NewItem = ({ item }) => {
  const { id, t_created, name, short_description } = item;
  return (
    <>
      <NewItemContainer>
        <NewItemImageContainer>
          <NewItemImage src={logo} />
        </NewItemImageContainer>
        <NewItemDate>{t_created && t_created.split('T')[0]}</NewItemDate>
        <NewItemDescription>
          {short_description
            ? short_description
            : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod velit facilis minus quas placeat iusto a consectetur officia esse fugit maxime cum repellendus quia, fugiat qui ratione recusandae atque.'}
        </NewItemDescription>
      </NewItemContainer>
    </>
  );
};

export default NewItem;
