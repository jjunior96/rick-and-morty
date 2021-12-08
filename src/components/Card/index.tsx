import { BsHeart as UnlikeIcon } from 'react-icons/bs';

// , BsHeartFill as LikeIcon

import * as S from './styles';

type CardProps = {
  img?: string;
  title?: string;
};

const Card = ({ img, title }: CardProps) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={img} alt={`Thumbnail of ${title}`} />
      </S.ImageContainer>

      <S.CardFooter>
        <S.Title>{title}</S.Title>

        <UnlikeIcon size={18} />
      </S.CardFooter>
    </S.Container>
  );
};

export default Card;
