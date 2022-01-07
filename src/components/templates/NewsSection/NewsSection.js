import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import { Wrapper, NewsSectionHeader, AricleWrapper, TitleWrapper } from './NewsSections.styles';

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      <AricleWrapper>
        <TitleWrapper>
          <h3>Lotem Ipsum</h3>
          <p>Tech news</p>
        </TitleWrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id purus lorem. Quisque dictum in diam at tristique. Sed quis lacinia nisl. Pellentesque felis turpis,
          rutrum cursus nibh eu, vehicula consequat nisi. Etiam leo quam, venenatis eu metus quis, fringilla molestie nisl.
        </p>
        <Button isBig>Read more</Button>
      </AricleWrapper>
    </Wrapper>
  );
};

export default NewsSection;
