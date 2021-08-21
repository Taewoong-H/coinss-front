import React from 'react';
import Main from './main/index';
import { GetStaticProps, GetServerSideProps } from 'next';

import { getFavorites, FavoriteType } from '../api';

interface FavoriteProps {
  favorites: FavoriteType;
}

export default function Home({ favorites }: FavoriteProps) {
  return (
    <>
      <Main favorites={favorites} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let favorites = '';
  const cookieString = context.req ? context.req.headers.cookie : '';

  if (cookieString) {
    const splitCookie = cookieString.split(';');
    const splitAccessToken = splitCookie[0].split('=')[1];

    const response = await getFavorites(splitAccessToken);
    favorites = response;
  }

  // if (!favorites) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      favorites,
    },
  };
};
