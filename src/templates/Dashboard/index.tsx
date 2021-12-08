import { useCallback, useEffect, useMemo, useState } from 'react';
import { BiSearch as SearchIcon } from 'react-icons/bi';

import Card from 'components/Card';
import Button from 'components/Button';

import debounce from 'lodash.debounce';

import * as S from './styles';
import Link from 'next/link';
import { getCharacters } from 'services/hooks/characters';
import { CharacterProps } from 'services/hooks/characters/types';
import Form from 'components/Form';
import { useForm } from 'react-hook-form';
import InputControlled from 'components/InputControlled';

const Dashboard: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [search, setSearch] = useState('');

  const { handleSubmit, control } = useForm();

  const handleSubmitData = useCallback(async (data) => {
    console.log(data);
  }, []);

  const handleSearch = useCallback((search) => {
    if (search.target.value === '') return;

    setSearch(search.target.value);
  }, []);

  const debouncedChangeHandler = useMemo(() => debounce(handleSearch, 300), [
    handleSearch
  ]);

  useEffect(() => {
    const fechCharacters = async () => {
      const { data } = await getCharacters();

      setCharacters(data!);
    };

    fechCharacters();
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
        <Form onSubmit={handleSubmit(handleSubmitData)}>
          <InputControlled
            control={control}
            name="searchCharacter"
            type="number"
            autoFocus
            onChange={debouncedChangeHandler}
            placeholder="Search some character"
          />
          <Button type="submit">
            <SearchIcon />
          </Button>
        </Form>
        <S.Result>
          {characters.map((item) => (
            <S.LinkContainer key={item.id}>
              <Link href="/character/[id]" as={`/character/${item.id}`}>
                <a>
                  <Card title={item.name} img={item.image} />
                </a>
              </Link>
            </S.LinkContainer>
          ))}
        </S.Result>
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
