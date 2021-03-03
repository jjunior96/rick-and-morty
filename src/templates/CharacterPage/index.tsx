import { IoArrowBackOutline } from 'react-icons/io5';

import * as S from './styled';

const CharacterPage: React.FC = ({ children }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.BackButton href="/">
            <IoArrowBackOutline style={{ cursor: 'pointer' }} />
          </S.BackButton>
        </S.Header>
        {children}
      </S.Content>
    </S.Container>
  );
};

export default CharacterPage;
