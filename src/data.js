export const categories = [
  { id: 1, title: "SSC", premium: false, totalCount: 15 },
  { id: 2, title: "UPSC", premium: false, totalCount: 5 },
  { id: 3, title: "RBI", premium: false, totalCount: 20 },
  { id: 4, title: "RRB", premium: true, totalCount: 25 },
  { id: 5, title: "NEET", premium: true, totalCount: 10 },
];

export const subjects = [
  { id: 1, title: "ENGLISH", premium: false, totalCount: 15 },
  { id: 2, title: "MATH", premium: false, totalCount: 5 },
  { id: 3, title: "GEOGRAPHY", premium: false, totalCount: 20 },
  { id: 4, title: "HISTORY", premium: true, totalCount: 25 },
  { id: 5, title: "AGRICULTURE", premium: true, totalCount: 10 },
];

export const exams = [
  {
    id: "1",
    examId: "1",
    created: "2017-01-25",
    updated: "2017-01-25",
    examDescription: "2017-01-25",
    examDuration: 60,
    examStartDate: "",
    examEndDate: "",
    examTitle: "Exam 01",
    isNegativeAllowed: true,
    isPaid: true,
    totalMark: 60,
    tags: [
      {
        id: 1,
        name: "SSC",
      },
      {
        id: 2,
        name: "GEO",
      },
    ],
    code: {
      codeId: "1",
      code: "EDU1",
      description: "desc",
    },
    questionCount: 15,
  },
  {
    id: "2",
    examId: "2",
    created: "2017-01-25",
    updated: "2017-01-25",
    examDescription: "2017-01-25",
    examDuration: 60,
    examStartDate: "",
    examEndDate: "",
    examTitle: "Exam 02",
    isNegativeAllowed: false,
    isPaid: false,
    totalMark: 100,
    tags: [
      {
        id: 1,
        name: "SSC",
      },
      {
        id: 2,
        name: "GEO",
      },
    ],
    questionCount: 50,
  },
];

export const results = [
  {
    resultId: 1,
    userDto: {},
    examDto: {
      id: "2",
      examId: "2",
      created: "2017-01-25",
      updated: "2017-01-25",
      examDescription: "2017-01-25",
      examDuration: 60,
      examEndDate: "2017-01-25",
      examTitle: "Exam 02",
      isNegativeAllowed: false,
      isPaid: false,
      totalMark: 100,
      examCategoryDto: {
        examCategoryId: 2,
        examCategoryName: "UPSC",
        examCount: 10,
        isPremium: false,
      },
      subjectDto: {
        subjectId: 2,
        title: "GEO",
        description: "descriptoin",
        created: "2017-01-25",
        updated: "2017-01-25",
      },
      questionCount: 50,
    },
    obtainedMark: 50,
    negativeMark: 0,
    created: "12/11/2020",
    startAt: "12.35",
    EndAt: "12.36",
    totalDuration: "46",
    answeredQuestion: "20",
    correctAnswer: "20",
    IncorrectAnswer: "0",
    resultJsonDataList: [
      {
        seqId: "1",
        questionTitle: "question title 1",
        questionDescription: "desc",
        questionAnswerDescription: "answer desc",
        isNegativeAllowed: false,
        questionImage: "bash64 image",
        questionAnswerDescriptionImage: "base64 img",
        questionMark: 1,
        correctAnswer: {
          answerId: "1",
          answerText: "answer",
          answerImage: "img answer",
          isCorrect: true,
        },
        submittedAnswer: {
          answerId: "1",
          answerText: "answer",
          answerImage: "img answer",
          isCorrect: true,
        },
      },
      {
        seqId: "2",
        questionTitle: "question title 2",
        questionDescription: "desc",
        questionAnswerDescription: "answer desc",
        isNegativeAllowed: false,
        questionImage: "bash64 image",
        questionAnswerDescriptionImage: "base64 img",
        questionMark: 1,
        correctAnswer: {
          answerId: "1",
          answerText: "answer",
          answerImage: "img answer",
          isCorrect: true,
        },
        submittedAnswer: {
          answerId: "1",
          answerText: "answer",
          answerImage: "img answer",
          isCorrect: true,
        },
      },
      {
        seqId: "3",
        questionTitle: "question title 3",
        questionDescription: "desc",
        questionAnswerDescription: "answer desc",
        isNegativeAllowed: false,
        questionImage: "bash64 image",
        questionAnswerDescriptionImage: "base64 img",
        questionMark: 1,
        correctAnswer: {
          answerId: "1",
          answerText: "answer",
          answerImage: "img answer",
          isCorrect: true,
        },
        submittedAnswer: {
          answerId: "1",
          answerText: "answer",
          answerImage: "img answer",
          isCorrect: true,
        },
      },
    ],
  },
];

export const user = {
  userName: "sdhfkjfhsdkf",
  firstName: "Shri",
  lastName: "Pardhi",
  email: "shripardhi@gmail.com",
  mobile: "8975307295",
  address: "Address hai",
  image: "abc.jpg",
  city: "Nagpur",
  state: "Maharashtra",
  education: "Degree",
  status: true,
  role: [
    {
      roleName: "User",
      roleDescription: "User",
    },
  ],
};

export const users = [
  {
    userName: "sdhfkjfhsdkf",
    firstName: "Shri",
    lastName: "Pardhi",
    email: "shripardhi@gmail.com",
    mobile: "8975307295",
    address: "Address hai",
    image: "abc.jpg",
    city: "Nagpur",
    state: "Maharashtra",
    education: "Degree",
    status: false,
    role: [
      {
        roleName: "User",
        roleDescription: "User",
      },
    ],
  },
  {
    userName: "sdhfkjfhsdkfds",
    firstName: "Shri",
    lastName: "Pardhi",
    email: "shripardhi@gmail.com",
    mobile: "8975307295",
    address: "Address hai",
    image: "abc.jpg",
    city: "Nagpur",
    state: "Maharashtra",
    education: "Degree",
    status: true,
    role: [
      {
        roleName: "User",
        roleDescription: "User",
      },
    ],
  },
  {
    userName: "sdhfkjfhsdkfdfg",
    firstName: "Shri",
    lastName: "Pardhi",
    email: "shripardhi@gmail.com",
    mobile: "8975307295",
    address: "Address hai",
    image: "abc.jpg",
    city: "Nagpur",
    state: "Maharashtra",
    education: "Degree",
    status: true,
    role: [
      {
        roleName: "User",
        roleDescription: "User",
      },
    ],
  },
];

export const states = [
  {
    id: 1,
    name: "Maharashtra",
  },
  {
    id: 2,
    name: "Madhya Pradhesh",
  },
  {
    id: 3,
    name: "Karnataka",
  },
  {
    id: 4,
    name: "Punjab",
  },
];

export const tags = [
  {
    id: 1,
    name: "SSC",
  },
  {
    id: 2,
    name: "GEO",
  },
  {
    id: 3,
    name: "ENG",
  },
  {
    id: 4,
    name: "POLITY",
  },
];

export const educatorCodes = [
  {
    codeId: "1",
    code: "EDU1",
    description: "desc",
  },
  {
    codeId: "2",
    code: "EDU2",
    description: "desc",
  },
];

export const questions = [
  {
    id: "1",
    questionId: "1",
    examDto: "",
    tag: {
      id: "1",
      name: "ENG",
    },
    questionTypeDto: {
      questionTypeId: 1,
      questionTypeName: "Multiple",
      questionTypeCode: "M",
    },
    answerDtoList: [
      {
        answerId: "1",
        questionDto: "",
        answerText: "Answer 1",
        answerImage: "",
        isCorrect: false,
      },
      {
        answerId: "2",
        questionDto: "",
        answerText: "Answer2",
        answerImage: "",
        isCorrect: true,
      },
      {
        answerId: "3",
        questionDto: "",
        answerText: "Answer 3",
        answerImage: "",
        isCorrect: false,
      },
      {
        answerId: "4",
        questionDto: "",
        answerText: "Answer 4",
        answerImage: "",
        isCorrect: false,
      },
    ],
    questionTitle: "What is your name?",
    questionDescription: "",
    questionAnswerDescription: "",
    isNegativeAllowed: true,
    questionImage: "",
    questionAnswerDescriptionImage: "",
    questionMark: 1,
  },
  {
    id: "2",
    questionId: "2",
    examDto: "",
    tag: {
      id: "1",
      name: "GEO",
    },
    questionTypeDto: {
      questionTypeId: 1,
      questionTypeName: "Single",
      questionTypeCode: "S",
    },
    answerDtoList: [
      {
        answerId: "1",
        questionDto: "",
        answerText: "Answer 1",
        answerImage: "",
        isCorrect: false,
      },
      {
        answerId: "2",
        questionDto: "",
        answerText: "Answer2",
        answerImage: "",
        isCorrect: false,
      },
      {
        answerId: "3",
        questionDto: "",
        answerText: "Answer 3",
        answerImage: "",
        isCorrect: false,
      },
      {
        answerId: "4",
        questionDto: "",
        answerText: "Answer 4",
        answerImage: "",
        isCorrect: true,
      },
    ],
    questionTitle: "Your age?",
    questionDescription: "",
    questionAnswerDescription: "",
    isNegativeAllowed: false,
    questionImage: "",
    questionAnswerDescriptionImage: "",
    questionMark: 2,
  },
];
