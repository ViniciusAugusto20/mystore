import React from 'react';
import { HeaderBar } from '../..';

import * as S from './style';

const PageDefault: React.FC = ({ children }) => {
  return (
    <S.Container>
      <HeaderBar />
      <section>
        <S.MainContent>
          <main>{children}</main>
        </S.MainContent>
        <S.Footer>Powered by MyStore | Todos os direitos reservados</S.Footer>
      </section>
    </S.Container>
  );
};

export default PageDefault;
