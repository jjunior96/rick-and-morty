import { FormHandles } from '@unform/core';
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { BiSearch as SearchIcon } from 'react-icons/bi';

import Card from 'components/Card';
import Button from 'components/Button';

import api from 'services/api';

import * as S from './styles';
import Link from 'next/link';
import Input from 'components/Input';

export interface HomeProps {
  id: number;
  name: string;
  image: string;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [characters, setCharacters] = useState<HomeProps[]>([]);
  const [character, setCharacter] = useState<HomeProps>();
  const [search, setSearch] = useState('');
  const [inputError, setInputError] = useState('');

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault;

      if (!search) {
        setInputError('Search some caracther');
        return;
      }

      try {
        setInputError('');
        const response = await api.get(`character/${search}`);

        const character = response.data;

        setCharacter(character);
      } catch (err) {
        setInputError('Caracther not found');
      }
    },
    [search]
  );
  useEffect(() => {
    api
      .get(`/character`)
      .then((response) => setCharacters(response.data.results));
  }, []);

  return (
    <S.Container>
      <S.Content>
        <S.Title
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4
              }
            }
          }}
        >
          <h1 className="title">Wubba Lubba Dub Dub!</h1>
        </S.Title>
        <S.FormContainer onSubmit={handleSubmit} ref={formRef}>
          <Input
            name="searchText"
            type="number"
            // value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search some character"
          />
          <Button type="submit">
            <SearchIcon />
          </Button>
        </S.FormContainer>
        <S.Result>
          {inputError && (
            <S.Error>
              {' '}
              <p>{inputError}</p>
            </S.Error>
          )}

          {search ? (
            <Card name={character?.name} image={character?.image} />
          ) : (
            characters.map((item, id) => (
              <S.LinkContainer key={item.id}>
                <Link href="/character/[id]" as={`/character/${id + 1}`}>
                  <a>
                    <Card id={item.id} name={item.name} image={item.image} />
                  </a>
                </Link>
              </S.LinkContainer>
            ))
          )}
        </S.Result>
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
