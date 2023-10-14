import { describe, expect, test } from "@jest/globals";
import SubmitPageForm from "@/app/component/SubmitForm";
import DataInterface from "@/app/interface/IArticle";
import IArticle from "@/app/interface/IArticle";

describe("Form", () => {
  test("should match snapshot", () => {
    const handleChnage = (e: any) => {
      console.log(e);
    };
    const handleSubmit = (e: any) => {
      console.log(e);
    };
    const data: IArticle = {
      title: '',
    authors: [],
    journal: '',
    year: 0,
    volume: 0,
    pages: 0,
    DOI: '',
    status: '',
    claim: '',
    result: false,
    evidence: '',
    research: '',
    participant: '',
    se_practice: '',
    is_approved: {
      isModerator: false,
      isAnalyst: false,
      isAnaRejected: false,
      isModRejected: false,
    }
    };
    const form = SubmitPageForm(handleChnage, handleSubmit, data);
    expect(form).toMatchSnapshot();
  });
});
