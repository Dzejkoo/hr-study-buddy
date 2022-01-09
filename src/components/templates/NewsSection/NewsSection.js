import { Button } from 'components/atoms/Button/Button';
import React, { useState, useEffect } from 'react';
import { Wrapper, NewsSectionHeader, AricleWrapper, TitleWrapper, ContentWrapper } from './NewsSections.styles';
import axios from 'axios';

//GraphQl structure
export const query = `
          {
            allArticles{
              id
              title
              category
              content
              image{
                url	
              }
            }
          }
        `;

//API key from DatoCMS
const API_TOKEN = '6544a28b58bca33b3618300fb002a9';

const NewsSection = () => {
  //hook that give us set article from Data CMS
  const [articles, setArticle] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: query,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticle(data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load article for you`);
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 && !error ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <AricleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </AricleWrapper>
        ))
      ) : (
        <NewsSectionHeader> {error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
