interface IArticle {
    id: string;
    title: string;
    authors: string[];
    journal: string;
    year: number;
    volume: number;
    pages: number;
    DOI: string;
    status: string;
    claim: string;
    result: boolean;
    evidence: string;
    research: string;
    participant: string;
    se_practice: string;
    date: string;
    is_approved: {
      isModerator: boolean;
      isModRejected: boolean;
      isAnalyst: boolean;
      isAnaRejected: boolean;
    };
}

export default IArticle;
