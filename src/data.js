export const categories = [
  { id: 1, title: "SSC",  premium: false, totalCount: 15 },
  { id: 2, title: "UPSC", premium: false, totalCount: 5 },
  { id: 3, title: "RBI",  premium: false, totalCount: 20 },
  { id: 4, title: "RRB",  premium: true, totalCount: 25 },
  { id: 5, title: "NEET", premium: true, totalCount: 10 },
];

export const subjects = [
  { id: 1, title: "ENGLISH",      premium: false, totalCount: 15 },
  { id: 2, title: "MATH",         premium: false, totalCount: 5 },
  { id: 3, title: "GEOGRAPHY",    premium: false, totalCount: 20 },
  { id: 4, title: "HISTORY",      premium: true,  totalCount: 25 },
  { id: 5, title: "AGRICULTURE",  premium: true,  totalCount: 10 },
];

export const exams = [
  {
    id: "1",
    examId: "1",
    created: "2017-01-25",
    updated: "2017-01-25",
    examDescription: "2017-01-25",
    examDuration: 60,
    examEndDate: "2017-01-25",
    examTitle: "Exam 01",
    isNegativeAllowed: true,
    isPaid: true,
    totalMark: 60,
    examCategoryDto: {
      examCategoryId: 1,
      examCategoryName: "SSC",
      examCount: 10,
      isPremium: false,
    },
    subjectDto: {
      subjectId: 1,
      title: "ENG",
      description: "2017-01-25",
      created: "2017-01-25",
      updated: "2017-01-25",
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
];
