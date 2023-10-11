import { StringLiteral } from "typescript";

interface DataInterface {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volume: number;
  pages: number;
  DOI: string;
  claim: string;
  evidence: string;
  research: string;
  participant: string;
}

export default DataInterface;
