import { motion } from 'framer-motion';

import * as S from './styles';

interface CardProps {
  id?: number;
  name?: string;
  image?: string;
}

const Card = ({ id, name, image }: CardProps) => {
  return (
    <S.Container>
      {name && (
        <a>
          <S.CardImage>
            <motion.img
              src={image}
              alt={`${name} Thumbnail`}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
            />
          </S.CardImage>
          <S.Content>
            <S.Name
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
              {name}
            </S.Name>
          </S.Content>
        </a>
      )}
    </S.Container>
  );
};

export default Card;
