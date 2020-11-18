export const dummyProblems = [
  {
    id: 0,
    title: '스택을 이용한 문제',
    category: '스택',
    level: '초급',
    content: '스택은 우리말로 선입선출',
  },
  {
    id: 1,
    title: '큐를 이용한 문제',
    category: '큐',
    level: '중급',
    content: '큐는 우리말로 선입후출',
  },
  {
    id: 2,
    title: '트리를 이용한 문제',
    category: '트리',
    level: '고급',
    content: '트리는 우리말로 나무ㅋㅋ',
  },
];

export const dummyProblemDataToDemo = {
  title: '책 정리하기 DEMO',
  problemDescription: [
    `도서관에 책이 N개가 있다.\n각각의 책에 대해서, 책 번호와 책 이름이 존재한다.\nN과 책의 정보가 input으로 주어질 때, 번호가 가장 작은 책의 이름을 출력하시오.\n `,
  ],
  inputDescription: [
    '숫자 N과 N만큼의 책의 정보(책 번호, 책 이름)가 입력된다.',
  ],
  outputDescription: ['가장 번호가 작은 책의 이름이 출력된다.'],
  inputExample: [
    `5\n25 DataStructure\n643 DataBase\n1 WebProgramming\n67 DataCommunication\n732 ProgrammingLanguage`,
    `10\n235 DataStructure\n547 DataBase\n34 WebProgramming\n8 DataCommunication\n62 ProgrammingLanguage\n257 Google\n643 ComputerStructure\n19 SystemProgramming\n13 DataStructure2\n97 ComputerNetwork`,
  ],
  outputExample: ['WebProgramming', 'DataCommunication'],
};

export const dummySubjects = [
  {
    title: '알고리즘',
    path: '/learn/algorithm',
    img: '/images/algorithm.png',
    description: '알고리즘',
  },
  {
    title: '자료구조',
    path: '/learn/data-structure',
    img: '/images/data-structure.png',
    description: '자료구조',
  },
  {
    title: '네트워크',
    path: '/learn/prograaming1',
    img: '/images/no-image.png',
    description: '네트워크',
  },
  {
    title: '운영체제',
    path: '/learn/prograaming2',
    img: '/images/no-image.png',
    description: '운영체제',
  },
];
