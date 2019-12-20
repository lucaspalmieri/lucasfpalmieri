import React from 'react';
import styled from 'styled-components';

import Banner from './banner/Banner'

export default function Portfolio(){

  const iframe1 = '<iframe src="https://www.apple.com.br" height="100%" width="100%" />'

  return (
    <Wrapper>
      <Banner iframe={iframe1} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  padding: 30px;
`;