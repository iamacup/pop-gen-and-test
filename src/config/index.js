
// percentages
// - subtype - lookup - will lookup the options based on the percentages and spread out over the remaining options that are not specified
// - subtype - pick - will split based on the optiosn provided (free text)

// dates
// - month can be string rand (a random month will be picked) or an integer, 1 through 12
// - yearsAgo must be an integer that is number of years ago (which could be 0 if to use 2018)

// structure of section 2-1 is slightly different - NOTE we do not currently support multiple universities in generation!
// we supply a BASE object with a qualificationLoops object which sets up the percentage likelyhood of multiple qualifications happening
// we then specify the data for each loop inside of the qualifications array like we would for any other (Accepts normal arguments)

const config = {
  '0-1': {
    universityName: 'University of London'.toUpperCase(),
  },
  '1-1': {
    nationality1: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'United Kingdom of Great Britain and Northern Ireland (the)',
          split: 80,
        },
      ],
    },
  },
  '1-2': {
    liveInUK: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes',
          split: 80,
        },
      ],
    },
    postcode: {
      type: 'percentages',
      subType: 'pick',
      split: [
        {
          lookup: 'NG5 4JX',
          split: 50,
        },
        {
          lookup: 'SE17 3SD',
          split: 50,
        },
      ],
    },
  },
  '1-3': {
    gender: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Male',
          split: 49,
        },
        {
          lookup: 'Female',
          split: 49,
        },
      ],
    },
    age: {
      type: 'dates',
      split: [
        {
          yearsAgo: 20,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 21,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 22,
          month: 'rand',
          frequency: 2,
        },
        {
          yearsAgo: 23,
          month: 'rand',
          frequency: 2,
        },
        {
          yearsAgo: 24,
          month: 'rand',
          frequency: 3,
        },
        {
          yearsAgo: 25,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 26,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 27,
          month: 'rand',
          frequency: 6,
        },
        {
          yearsAgo: 28,
          month: 'rand',
          frequency: 8,
        },
        {
          yearsAgo: 29,
          month: 'rand',
          frequency: 10,
        },
        {
          yearsAgo: 30,
          month: 'rand',
          frequency: 11,
        },
        {
          yearsAgo: 31,
          month: 'rand',
          frequency: 10,
        },
        {
          yearsAgo: 32,
          month: 'rand',
          frequency: 8,
        },
        {
          yearsAgo: 33,
          month: 'rand',
          frequency: 7,
        },
        {
          yearsAgo: 34,
          month: 'rand',
          frequency: 7,
        },
        {
          yearsAgo: 35,
          month: 'rand',
          frequency: 6,
        },
        {
          yearsAgo: 36,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 37,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 38,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 39,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 40,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 41,
          month: 'rand',
          frequency: 6,
        },
        {
          yearsAgo: 42,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 43,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 44,
          month: 'rand',
          frequency: 6,
        },
        {
          yearsAgo: 45,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 46,
          month: 'rand',
          frequency: 3,
        },
        {
          yearsAgo: 47,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 48,
          month: 'rand',
          frequency: 3,
        },
        {
          yearsAgo: 49,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 50,
          month: 'rand',
          frequency: 3,
        },
        {
          yearsAgo: 51,
          month: 'rand',
          frequency: 2,
        },
        {
          yearsAgo: 52,
          month: 'rand',
          frequency: 2,
        },
        {
          yearsAgo: 53,
          month: 'rand',
          frequency: 3,
        },
        {
          yearsAgo: 54,
          month: 'rand',
          frequency: 2,
        },
        {
          yearsAgo: 55,
          month: 'rand',
          frequency: 2,
        },
        {
          yearsAgo: 56,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 57,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 58,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 59,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 60,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 61,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 62,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 63,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 64,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 65,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 66,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 67,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 68,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 69,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 70,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 71,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 72,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 73,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 74,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 75,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 76,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 77,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 78,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 79,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 80,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 81,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 82,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 83,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 84,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 85,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 86,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 87,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 88,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 89,
          month: 'rand',
          frequency: 0,
        },
        {
          yearsAgo: 90,
          month: 'rand',
          frequency: 0,
        },
      ],
    },
  },
  '1-4': {
    ethnicity: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'White',
          split: 70,
        },
      ],
    },
    disability: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'No known disability',
          split: 95,
        },
      ],
    },
    religion: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'No religion',
          split: 60,
        },
      ],
    },
  },
  'uni-qualifications': {
    BASE: {
      qualificationLoops: {
        split: [
          {
            count: 1,
            percent: 80,
          },
          {
            count: 2,
            percent: 15,
          },
          {
            count: 3,
            percent: 5,
          },
        ],
      },
    },
    qualifications: [
      {
        countID: 1,
        data: {
          graduationYear: {
            type: 'percentages',
            subType: 'lookup',
            split: [
              {
                lookup: '2017',
                split: 10,
              },
              {
                lookup: '2016',
                split: 10,
              },
              {
                lookup: '2015',
                split: 9,
              },
              {
                lookup: '2014',
                split: 8,
              },
              {
                lookup: '2013',
                split: 8,
              },
              {
                lookup: '2012',
                split: 7,
              },
              {
                lookup: '2011',
                split: 6,
              },
              {
                lookup: '2010',
                split: 6,
              },
              {
                lookup: '2009',
                split: 5,
              },
              {
                lookup: '2008',
                split: 5,
              },
              {
                lookup: '2007',
                split: 4,
              },
              {
                lookup: '2006',
                split: 4,
              },
              {
                lookup: '2005',
                split: 3,
              },
              {
                lookup: '2004',
                split: 3,
              },
              {
                lookup: '2003',
                split: 2,
              },
              {
                lookup: '2002',
                split: 2,
              },
              {
                lookup: '2001',
                split: 2,
              },
              {
                lookup: '2000',
                split: 2,
              },
              {
                lookup: '1999',
                split: 1,
              },
              {
                lookup: '1998',
                split: 1,
              },
              {
                lookup: '1997',
                split: 1,
              },
              {
                lookup: '1996',
                split: 1,
              },
              {
                lookup: '1995',
                split: 1,
              },
              {
                lookup: '1994',
                split: 1,
              },
              {
                lookup: '1993',
                split: 1,
              },
              {
                lookup: '1992',
                split: 1,
              },
              {
                lookup: '1991',
                split: 1,
              },
              {
                lookup: '1990',
                split: 1,
              },
            ],
          },
          degreeLevel: {
            type: 'percentages',
            subType: 'lookup',
            split: [
              {
                lookup: 'Undergraduate Bachelors Degree',
                split: 60,
              },
              {
                lookup: 'Undergraduate Masters Degree',
                split: 10,
              },
              {
                lookup: 'Masters',
                split: 10,
              },
              {
                lookup: 'Doctorate',
                split: 15,
              },
              {
                lookup: 'Other Degree',
                split: 5,
              },
            ],
          },
          courseFTPT: {
            type: 'percentages',
            subType: 'lookup',
            split: [
              {
                lookup: 'Full Time',
                split: 95,
              },
              {
                lookup: 'Part Time',
                split: 5,
              },
            ],
          },
          startYear: {
            type: 'percentages',
            subType: 'lookup',
            split: [
              {
                lookup: '1 Year',
                split: 5,
              },
              {
                lookup: '2 Years',
                split: 5,
              },
              {
                lookup: '3 Years',
                split: 75,
              },
              {
                lookup: '4 Years',
                split: 10,
              },
              {
                lookup: 'Other',
                split: 5,
              },
            ],
          },
          result: {
            type: 'percentages',
            subType: 'lookup',
            split: [
              // this is wierd because we are doing multiple probabilities in 1
              {
                lookup: 'First-class honours (1st)',
                split: 10,
              },
              {
                lookup: 'Second-class honours, upper division (2:1)',
                split: 60,
              },
              {
                lookup: 'Second-class honours, lower division (2:2)',
                split: 25,
              },
              {
                lookup: 'Third-class honours (3rd)',
                split: 5,
              },
              {
                lookup: 'Ordinary degree (pass)',
                split: 5,
              },
              // other
              {
                lookup: 'Distinction',
                split: 10,
              },
              {
                lookup: 'Merrit',
                split: 20,
              },
              {
                lookup: 'Pass',
                split: 60,
              },
              {
                lookup: 'Fail',
                split: 10,
              },
            ],
          },
          courseType: {
            type: 'percentages',
            subType: 'lookup',
            split: [
              {
                lookup: 'BA',
                split: 45,
              },
              {
                lookup: 'BSc',
                split: 40,
              },
              {
                lookup: 'BEng',
                split: 10,
              },
              {
                lookup: 'LBB',
                split: 5,
              },
            ],
          },
        },
      },
      {
        countID: 2,
        data: {
          // should put some data here if we want realism?
        },
      },
      {
        countID: 3,
        data: {
          // should put some data here if we want realism?
        },
      },
    ],
  },
  '2-2': {
    anotherUniversity: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'No',
          split: 100,
        },
      ],
    },
  },
  '2-4': {

  },
  '2-5': {

  },
  '3-1': {

  },
  '3-2': {
    ukPreUniStudy: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes',
          split: 90,
        },
      ],
    },
    schoolLocationDetail: {
      type: 'percentages',
      subType: 'pick',
      split: [
        {
          lookup: 'NG5 4JX',
          split: 40,
        },
        {
          lookup: 'SE17 3SD',
          split: 50,
        },
        // null is what happens when the user clicks 'don't know'
        {
          lookup: 'null',
          split: 10,
        },
      ],
    },
    // use unique word as this is strange config
    educationDetailBASE: {
      qualificationPicker: {
        type: 'percentages',
        subType: 'pick',
        // must add up to 100 in split values
        split: [
          {
            lookup: 'A Levels',
            split: 80,
            subSplits: [
              {
                lookup: 'A*',
                split: 20,
              },
              {
                lookup: 'A',
                split: 60,
              },
              {
                lookup: 'B',
                split: 10,
              },
              {
                lookup: 'C',
                split: 10,
              },
              {
                lookup: 'D',
                split: 0,
              },
              {
                lookup: 'E',
                split: 0,
              },
            ],
          },
          {
            lookup: 'Scottish Advanced Highers',
            split: 20,
            subSplits: [
              {
                lookup: 'A',
                split: 50,
              },
              {
                lookup: 'B',
                split: 30,
              },
              {
                lookup: 'C',
                split: 20,
              },
              {
                lookup: 'D',
                split: 0,
              },
            ],
          },
        ],
      },
      // must add up to 100 in split values
      educationQuantity: {
        split: [
          {
            count: 1,
            split: 10,
          },
          {
            count: 2,
            split: 10,
          },
          {
            count: 3,
            split: 50,
          },
          {
            count: 4,
            split: 20,
          },
          {
            count: 5,
            split: 10,
          },
        ],
      },
      subjectList: [
        'English Language',
        'ICT',
        'English Literature',
        'Mathematics',
        'French',
        'German',
        'Physics',
        'Chemistry',
        'Biology',
      ],
    },
  },
  '3-3': {

  },
  '4-1': {
    graduateDestination: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Working full-time, including self-employed/freelance, voluntary or other unpaid work, developing a professional portfolio/creative practice or on an internship/placement',
          split: 45,
        },
        {
          lookup: 'Working part-time, including self-employed/freelance, voluntary or other unpaid work, developing a professional portfolio/creative practice or on an internship/placement',
          split: 10,
        },
        {
          lookup: 'Due to start a job in the next month',
          split: 5,
        },
        {
          lookup: 'Engaged in full-time further study, training or research',
          split: 5,
        },
        {
          lookup: 'Engaged in part-time further study, training or research',
          split: 5,
        },
        {
          lookup: 'Taking time out in order to travel',
          split: 5,
        },
        {
          lookup: 'Doing something else, e.g retired, looking after home or family',
          split: 10,
        },
        {
          lookup: 'Unemployed',
          split: 15,
        },
      ],
    },
  },
  '4-2': {
    company: {
      companyNames: [
        'IBM',
        'KPMG',
        'Deloite',
      ],
    },
    moreThanOneJob: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes',
          split: 5,
        },
        {
          lookup: 'No',
          split: 95,
        },
      ],
    },
  },
  '4-3': {

  },
  '4-4': {
    workLocationDetail: {
      type: 'percentages',
      subType: 'pick',
      split: [
        {
          lookup: 'NG5 4JX',
          split: 40,
        },
        {
          lookup: 'SE17 3SD',
          split: 50,
        },
        // null is what happens when the user clicks 'don't know'
        {
          lookup: 'null',
          split: 10,
        },
      ],
    },
  },
  '4-5': {
    currency: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'GBP',
          split: 78,
        },
        {
          lookup: 'USD',
          split: 10,
        },
        {
          lookup: 'EURO',
          split: 10,
        },
        {
          lookup: 'Other',
          split: 2,
        },
      ],
    },
    salaryPeriod: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Monthly',
          split: 70,
        },
        {
          lookup: 'Weekly',
          split: 10,
        },
        {
          lookup: 'Daily',
          split: 20,
        },
      ],
    },
    bonusPeriod: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Annually',
          split: 80,
        },
        {
          lookup: 'Monthly',
          split: 10,
        },
        {
          lookup: 'Weekly',
          split: 10,
        },
        {
          lookup: 'Daily',
          split: 0,
        },
      ],
    },
    unpaid: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes',
          split: 5,
        },
        {
          lookup: 'No',
          split: 95,
        },
      ],
    },
    SalaryBASE: {
      // upper and lower numbers are used for calculation of annual salary which is then mutated to whatever the selected period becomes
      // we use a bell curve distribution between upper and lower numbers and then assign our values against that
      lowerSalary: 20000,
      meanSalary: 70000,
      upperSalary: 1000000,
      lowerBonus: 200,
      meanBonus: 1000,
      upperBonus: 400000,
      // percentage of people that have a bonus
      haveBonusPercent: 40,
    },
    hoursBASE: {
      data: [
        {
          split: 65,
          contract: 40,
          contractVarianceUpPercent: 0,
          contractVarianceDownPercent: 0,
          actualVarianceUpPercent: 0,
          actualVarianceDownPercent: 0,
        },
        {
          split: 10,
          contract: 40,
          contractVarianceUpPercent: 40,
          contractVarianceDownPercent: 0,
          actualVarianceUpPercent: 40,
          actualVarianceDownPercent: 40,
        },
        {
          split: 15,
          contract: 20,
          contractVarianceUpPercent: 0,
          contractVarianceDownPercent: 0,
          actualVarianceUpPercent: 0,
          actualVarianceDownPercent: 0,
        },
        {
          split: 10,
          contract: 20,
          contractVarianceUpPercent: 40,
          contractVarianceDownPercent: 0,
          actualVarianceUpPercent: 40,
          actualVarianceDownPercent: 40,
        },
      ],
    },
  },
  '4-6': {
    neededQualification: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes, the qualification was a formal requirement',
          split: 20,
        },
        {
          lookup: 'Yes, while the qualification was not a formal requirment it did give me an advantage',
          split: 30,
        },
        {
          lookup: 'No, the qualifation was not required',
          split: 30,
        },
        {
          lookup: 'Don\'t know',
          split: 20,
        },
      ],
    },
    qualificationImportance: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'The Subject Studied',
          split: 30,
        },
        {
          lookup: 'The level of Study (Ba, Masters, PhD)',
          split: 10,
        },
        {
          lookup: 'The result of my qualification (1st class, 2.1 etc.)',
          split: 10,
        },
        {
          lookup: 'Sandwich / work experience gained as part of my coruse',
          split: 10,
        },
        {
          lookup: 'No one thing was most important',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 20,
        },
      ],
    },
    jobReason: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'It fitted into my career plan / it was exactly the type of work I wanted',
          split: 10,
        },
        {
          lookup: 'It was the best job offer I received',
          split: 10,
        },
        {
          lookup: 'It was the only job offer I received',
          split: 10,
        },
        {
          lookup: 'It was an opportunity to progress in the organisation',
          split: 10,
        },
        {
          lookup: 'To see if I would like the type of work it involved',
          split: 10,
        },
        {
          lookup: 'To gain and broaden my experience in order to get the type of job I really want',
          split: 10,
        },
        {
          lookup: 'It was in the right location',
          split: 10,
        },
        {
          lookup: 'The job was well-paid',
          split: 10,
        },
        {
          lookup: 'In order to earn a living / pay off debts',
          split: 20,
        },
      ],
    },
    jobDiscovery: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'University / College Career Service',
          split: 10,
        },
        {
          lookup: 'Other University / college source (e.g. lecturer or website)',
          split: 10,
        },
        {
          lookup: 'Media (e.g. newspaper / magazine advertisement)',
          split: 10,
        },
        {
          lookup: 'Personal contacts, including family and friends',
          split: 10,
        },
        {
          lookup: 'Social media / professional networking sites',
          split: 10,
        },
        {
          lookup: 'Employer\'s website',
          split: 10,
        },
        {
          lookup: 'Recruitment agency / website',
          split: 10,
        },
        {
          lookup: 'Speculative Application',
          split: 10,
        },
        {
          lookup: 'Already worked there (i.e. internship)',
          split: 10,
        },
        {
          lookup: 'Other',
          split: 10,
        },
      ],
    },
    previouslyEmployed: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes, before my programme of study',
          split: 20,
        },
        {
          lookup: 'Yes during my programme of study',
          split: 30,
        },
        {
          lookup: 'Yes, before and during my programme of study',
          split: 30,
        },
        {
          lookup: 'No',
          split: 20,
        },
      ],
    },
    howPreviouslyEmployed: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'On a sandwich placement as part of my course',
          split: 20,
        },
        {
          lookup: 'On another kind of placemenet or project work',
          split: 20,
        },
        {
          lookup: 'As a holiday job',
          split: 10,
        },
        {
          lookup: 'Full time or part time work all year round',
          split: 10,
        },
        {
          lookup: 'Full time or part time work during term time',
          split: 20,
        },
        {
          lookup: 'On an internship',
          split: 10,
        },
        {
          lookup: 'In other ways',
          split: 10,
        },
      ],
    },
  },
  '5-1': {
    applyDegreeToWork: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 20,
        },
        {
          lookup: 'Agree',
          split: 10,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 20,
        },
        {
          lookup: 'Strongly disagree',
          split: 20,
        },
      ],
    },
    applySkillsToWork: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 20,
        },
        {
          lookup: 'Agree',
          split: 10,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 20,
        },
        {
          lookup: 'Strongly disagree',
          split: 20,
        },
      ],
    },
    applyExtraCurricularToWork: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 20,
        },
        {
          lookup: 'Agree',
          split: 10,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 20,
        },
        {
          lookup: 'Strongly disagree',
          split: 20,
        },
      ],
    },
    contributeMeaningfullyToLife: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 20,
        },
        {
          lookup: 'Agree',
          split: 10,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 20,
        },
        {
          lookup: 'Strongly disagree',
          split: 20,
        },
      ],
    },
    currentWorkFitsWithFuturePlans: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 20,
        },
        {
          lookup: 'Agree',
          split: 10,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 20,
        },
        {
          lookup: 'Strongly disagree',
          split: 20,
        },
      ],
    },
    currentWorkMeaningfulAndImportant: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 20,
        },
        {
          lookup: 'Agree',
          split: 10,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 20,
        },
        {
          lookup: 'Strongly disagree',
          split: 20,
        },
      ],
    },
    furtherStudyAdvancesCareer: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 20,
        },
        {
          lookup: 'Agree',
          split: 10,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 20,
        },
        {
          lookup: 'Strongly disagree',
          split: 20,
        },
      ],
    },
    professionalQualificationsAdvanceCareer: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 20,
        },
        {
          lookup: 'Agree',
          split: 10,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 20,
        },
        {
          lookup: 'Strongly disagree',
          split: 20,
        },
      ],
    },
  },
  '5-2': {
    lifeSatisfaction: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: '0',
          split: 10,
        },
        {
          lookup: '1',
          split: 5,
        },
        {
          lookup: '2',
          split: 10,
        },
        {
          lookup: '3',
          split: 10,
        },
        {
          lookup: '4',
          split: 5,
        },
        {
          lookup: '5',
          split: 10,
        },
        {
          lookup: '6',
          split: 10,
        },
        {
          lookup: '7',
          split: 10,
        },
        {
          lookup: '8',
          split: 10,
        },
        {
          lookup: '9',
          split: 10,
        },
        {
          lookup: '10',
          split: 10,
        },
      ],
    },
    lifeWorthwhile: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: '0',
          split: 10,
        },
        {
          lookup: '1',
          split: 5,
        },
        {
          lookup: '2',
          split: 10,
        },
        {
          lookup: '3',
          split: 10,
        },
        {
          lookup: '4',
          split: 5,
        },
        {
          lookup: '5',
          split: 10,
        },
        {
          lookup: '6',
          split: 10,
        },
        {
          lookup: '7',
          split: 10,
        },
        {
          lookup: '8',
          split: 10,
        },
        {
          lookup: '9',
          split: 10,
        },
        {
          lookup: '10',
          split: 10,
        },
      ],
    },
    lifeHappy: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: '0',
          split: 10,
        },
        {
          lookup: '1',
          split: 5,
        },
        {
          lookup: '2',
          split: 10,
        },
        {
          lookup: '3',
          split: 10,
        },
        {
          lookup: '4',
          split: 5,
        },
        {
          lookup: '5',
          split: 10,
        },
        {
          lookup: '6',
          split: 10,
        },
        {
          lookup: '7',
          split: 10,
        },
        {
          lookup: '8',
          split: 10,
        },
        {
          lookup: '9',
          split: 10,
        },
        {
          lookup: '10',
          split: 10,
        },
      ],
    },
    lifeAnxious: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: '0',
          split: 10,
        },
        {
          lookup: '1',
          split: 5,
        },
        {
          lookup: '2',
          split: 10,
        },
        {
          lookup: '3',
          split: 10,
        },
        {
          lookup: '4',
          split: 5,
        },
        {
          lookup: '5',
          split: 10,
        },
        {
          lookup: '6',
          split: 10,
        },
        {
          lookup: '7',
          split: 10,
        },
        {
          lookup: '8',
          split: 10,
        },
        {
          lookup: '9',
          split: 10,
        },
        {
          lookup: '10',
          split: 10,
        },
      ],
    },
    recommendToFriendOrColleague: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: '0',
          split: 10,
        },
        {
          lookup: '1',
          split: 5,
        },
        {
          lookup: '2',
          split: 10,
        },
        {
          lookup: '3',
          split: 10,
        },
        {
          lookup: '4',
          split: 5,
        },
        {
          lookup: '5',
          split: 10,
        },
        {
          lookup: '6',
          split: 10,
        },
        {
          lookup: '7',
          split: 10,
        },
        {
          lookup: '8',
          split: 10,
        },
        {
          lookup: '9',
          split: 10,
        },
        {
          lookup: '10',
          split: 10,
        },
      ],
    },
    trustOrCare: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Most people can be trusted',
          split: 50,
        },
        {
          lookup: 'You can’t be too careful in dealing with people',
          split: 50,
        },
      ],
    },
  },
  '5-3': {
    viewsOnCourseDifferentSubject: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Very likely',
          split: 20,
        },
        {
          lookup: 'Likely',
          split: 35,
        },
        {
          lookup: 'Not very likely',
          split: 20,
        },
        {
          lookup: 'Not likely at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 5,
        },
      ],
    },
    viewsOnCourseDifferentInstitution: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Very likely',
          split: 20,
        },
        {
          lookup: 'Likely',
          split: 35,
        },
        {
          lookup: 'Not very likely',
          split: 20,
        },
        {
          lookup: 'Not likely at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 5,
        },
      ],
    },
    viewsOnCourseDifferentQualification: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Very likely',
          split: 20,
        },
        {
          lookup: 'Likely',
          split: 35,
        },
        {
          lookup: 'Not very likely',
          split: 20,
        },
        {
          lookup: 'Not likely at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 5,
        },
      ],
    },
    viewsOnCourseTotallyDifferent: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Very likely',
          split: 20,
        },
        {
          lookup: 'Likely',
          split: 35,
        },
        {
          lookup: 'Not very likely',
          split: 20,
        },
        {
          lookup: 'Not likely at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 5,
        },
      ],
    },
    viewsOnHEInnovative: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'A great extent',
          split: 20,
        },
        {
          lookup: 'Some extent',
          split: 35,
        },
        {
          lookup: 'Not at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 20,
        },
        {
          lookup: 'Have not worked since finishing course',
          split: 5,
        },
      ],
    },
    viewsOnHEDifferenceInWorkplace: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'A great extent',
          split: 20,
        },
        {
          lookup: 'Some extent',
          split: 35,
        },
        {
          lookup: 'Not at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 20,
        },
        {
          lookup: 'Have not worked since finishing course',
          split: 5,
        },
      ],
    },
    viewsOnHEChangeOrganisation: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'A great extent',
          split: 20,
        },
        {
          lookup: 'Some extent',
          split: 35,
        },
        {
          lookup: 'Not at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 20,
        },
        {
          lookup: 'Have not worked since finishing course',
          split: 5,
        },
      ],
    },
    viewsOnHEInfluenceWork: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'A great extent',
          split: 20,
        },
        {
          lookup: 'Some extent',
          split: 35,
        },
        {
          lookup: 'Not at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 20,
        },
        {
          lookup: 'Have not worked since finishing course',
          split: 5,
        },
      ],
    },
    viewsOnHEAccessJobOppts: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'A great extent',
          split: 20,
        },
        {
          lookup: 'Some extent',
          split: 35,
        },
        {
          lookup: 'Not at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 20,
        },
        {
          lookup: 'Have not worked since finishing course',
          split: 5,
        },
      ],
    },
    viewsOnHEEnhanceCredibility: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'A great extent',
          split: 20,
        },
        {
          lookup: 'Some extent',
          split: 35,
        },
        {
          lookup: 'Not at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 20,
        },
        {
          lookup: 'Have not worked since finishing course',
          split: 5,
        },
      ],
    },
    viewsOnHEProgressLongTerm: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'A great extent',
          split: 20,
        },
        {
          lookup: 'Some extent',
          split: 35,
        },
        {
          lookup: 'Not at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 20,
        },
        {
          lookup: 'Have not worked since finishing course',
          split: 5,
        },
      ],
    },
    viewsOnHEEnhanceSocialCapeabilities: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'A great extent',
          split: 20,
        },
        {
          lookup: 'Some extent',
          split: 35,
        },
        {
          lookup: 'Not at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 20,
        },
        {
          lookup: 'Have not worked since finishing course',
          split: 5,
        },
      ],
    },
    viewsOnHEEnhanceQualityOfLife: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'A great extent',
          split: 20,
        },
        {
          lookup: 'Some extent',
          split: 35,
        },
        {
          lookup: 'Not at all',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 20,
        },
        {
          lookup: 'Have not worked since finishing course',
          split: 5,
        },
      ],
    },
  },
  '5-4': {
    maritalStatus: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Single',
          split: 45,
        },
        {
          lookup: 'Married',
          split: 20,
        },
        {
          lookup: 'Civil Partnered',
          split: 10,
        },
        {
          lookup: 'Divorced',
          split: 10,
        },
        {
          lookup: 'Widowed',
          split: 5,
        },
        {
          lookup: 'Do not want to disclose this',
          split: 10,
        },
      ],
    },
  },
};

module.exports = config;
