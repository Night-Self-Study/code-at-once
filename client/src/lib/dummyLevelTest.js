const dummyLevelTest = {
  testId: {
    1: {
      problems: [
        {
          no: 1,
          question: "Javascript를 사용할 때 html 상에서 선언을 해 주어야 한다.",
          isMultipleQuestion: true,
          viewing: ["Yes", "No"],
          answer: "Yes",
          score: 10,
        },
        {
          no: 2,
          question: "Javascript에서 html코드나 css코드를 넣을 수 있다.",
          isMultipleQuestion: true,
          viewing: ["Yes", "No"],
          answer: "yes",
          score: 10,
        },
        {
          no: 3,
          question:
            "HTML에서 특정 text를 클릭 했을 때 다른 웹사이트로 이동할 수 있도록 하는 html tag는 ?",
          isMultipleQuestion: false,
          answer: "a",
          score: 10,
        },
      ],
    },
    2: {
      problems: [
        {
          no: 1,
          question: "대충 OS",
          isMutipleQuestion: true,
          viewing: ["Yes", "No"],
          answer: "Yes",
          score: 10,
        },
      ],
    },
  },
};
export default dummyLevelTest;
