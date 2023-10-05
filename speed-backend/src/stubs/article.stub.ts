import { CreateArticleDTO } from 'src/dto/create-article.dto';

export const ArticleDTOStub = (): CreateArticleDTO => {
  return {
    title: 'SDP 2',
    authors: ['John Doe', 'Jane Doe'],
    journal: 'AUT',
    year: 2022,
    volume: 2,
    pages: 185,
    DOI: '10.1093/ajae/aaq063',
    claim: 'Agile is better than waterfall',
    result: true,
    research: 'case study',
    participant: 'student',
  };
};
