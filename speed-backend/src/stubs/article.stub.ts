import { CreateArticleDTO } from '../dto/create-article.dto';

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
    evidence: 'Meowww',
    result: true,
    research: 'case study',
    participant: 'student',
    se_practice: 'Mob Programming',
    date: '2014-12-24',
    is_approved: {
      isModerator: false,
      isModRejected: false,
      isAnalyst: false,
      isAnaRejected: false,
    },
  };
};
