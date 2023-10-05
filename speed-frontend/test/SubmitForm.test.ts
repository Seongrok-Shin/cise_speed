import { describe, expect, test } from "@jest/globals";
import Form from "@/app/component/submitForm";
import DataInterface from "@/app/interface/dataInterface";

describe("Form", () => {
  test("should match snapshot", () => {
    const handleChnage = (e: any) => {
      console.log(e);
    };
    const handleSubmit = (e: any) => {
      console.log(e);
    };
    const data: DataInterface = {
      title: "d",
      author: [],
      journal: "d",
      year: "213",
      volume: "123",
      pages: "123",
      DOI: "123",
    };
    const form = Form(handleChnage, handleSubmit, data);
    expect(form).toMatchSnapshot();
  });
});
