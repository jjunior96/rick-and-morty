import Head from 'next/head';

import CharacterPage from 'templates/CharacterPage';

const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

interface GetServerProps {
  query: {
    id: number;
  };
}

interface CharacterDataProps {
  data: {
    name: string;
    image: string;
  };
}

export async function getServerSideProps({ query }: GetServerProps) {
  const { id } = query;

  const response = await fetch(`${defaultEndpoint}${id}`);
  const data = await response.json();

  return {
    props: {
      data
    }
  };
}

export default function Character({ data }: CharacterDataProps) {
  const { name, image } = data;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <CharacterPage>
        <img src={image} alt="" />
        <p>{name}</p>
      </CharacterPage>
    </>
  );
}
