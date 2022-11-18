export const categories = [
  { id: 1, title: "SSC", premium: 0, totalCount: 15 },
  { id: 2, title: "UPSC", premium: 0, totalCount: 5 },
  { id: 3, title: "RBI", premium: 0, totalCount: 20 },
  { id: 4, title: "RRB", premium: 0, totalCount: 25 },
  { id: 5, title: "NEET", premium: 1, totalCount: 10 },
];

export const subjects = [
  { id: 1, title: "ENGLISH", premium: 0, totalCount: 15 },
  { id: 2, title: "MATH", premium: 0, totalCount: 5 },
  { id: 3, title: "GEOGRAPHY", premium: 0, totalCount: 20 },
  { id: 4, title: "HISTORY", premium: 0, totalCount: 25 },
  { id: 5, title: "AGRICULTURE", premium: 1, totalCount: 10 },
];

export const exams = [
  {
    id: "1",
    examId: "1",
    created: null,
    updated: null,
    examDescription: null,
    examDuration: 60,
    examEndDate: "2017-01-25",
    examTitle: "Exam 01",
    isNegativeAllowed: 0,
    isPaid: 0,
    totalMark: 60,
    examCategoryDto: {
      examCategoryId: 1,
      examCategoryName: "SSC",
      updatedBy: "",
      examCount: "",
      isPremium: "",
    },
    subjectDto: {
      subjectId: 1,
      title: "ENG",
      description: "",
      updatedBy: "",
      created: "",
      updated: "",
    },
    questionCount: "",
  },
  {
    id: "2",
    examId: "2",
    created: null,
    updated: null,
    examDescription: null,
    examDuration: 60,
    examEndDate: "2017-01-25",
    examTitle: "Exam 02",
    isNegativeAllowed: 0,
    isPaid: 0,
    totalMark: 100,
    examCategoryDto: {
      examCategoryId: 2,
      examCategoryName: "UPSC",
      updatedBy: "",
      examCount: "",
      isPremium: "",
    },
    subjectDto: {
      subjectId: 2,
      title: "GEO",
      description: "",
      updatedBy: "",
      created: "",
      updated: "",
    },
    questionCount: "",
  },
];
