
// percentages
// - subtype - lookup - will lookup the options based on the percentages and spread out over the remaining options that are not specified
// - subtype - pick - will split based on the optiosn provided (free text)

// dates
// - month can be string rand (a random month will be picked) or an integer, 1 through 12
// - yearsAgo must be an integer that is number of years ago (which could be 0 if to use 2018)

// structure of section 2-1 is slightly different - NOTE we do not currently support multiple universities in generation!
// we supply a BASE object with a qualificationLoops object which sets up the percentage likelyhood of multiple qualifications happening
// we then specify the data for each loop inside of the qualifications array like we would for any other (Accepts normal arguments)

const _ = require('lodash');
const staticData = require('./31yrData/staticData.js');
const yearGroupData = require('./31yrData/yearGroupData.js');


const config = {
  '1-3': {
    /* REMOVETHIS - should be 97% MALE or 97% FEMALE with all rest in OTHER */
    gender: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        /* {
          lookup: 'Male',
          split: 97,
        }, */
        {
          lookup: 'Female',
          split: 97,
        },
        {
          lookup: 'Other',
          split: 3,
        },
      ],
    },
    /* CHANGETHIS - should make sense for the year group this is being created for - BUT remember that if they are 1YR after graduation, it is still possible for them to be 35 years old, its just not likely - they will mostly be 21 etc. for instance */
    age: {
      type: 'dates',
      split: [
        {
          yearsAgo: 54,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 55,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 56,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 57,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 58,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 59,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 60,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 61,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 62,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 63,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 64,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 65,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 66,
          month: 'rand',
          frequency: 5,
        },
        {
          yearsAgo: 67,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 68,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 69,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 70,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 71,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 72,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 73,
          month: 'rand',
          frequency: 4,
        },
        {
          yearsAgo: 74,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 75,
          month: 'rand',
          frequency: 1,
        },
        {
          yearsAgo: 76,
          month: 'rand',
          frequency: 1,
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
          frequency: 1,
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
          split: 45,
        },
        {
          lookup: 'Asian / Asian British',
          split: 15,
        },
        {
          lookup: 'Black / African / Caribbean / Black British',
          split: 20,
        },
        {
          lookup: 'Mixed / Multiple ethnic groups',
          split: 10,
        },
        {
          lookup: 'Other ethnic group',
          split: 10,
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
          split: 30,
        },
        {
          lookup: 'Chrstian (including CoE, Catholic, Protestant and all other Christian denominations)',
          split: 15,
        },
        {
          lookup: 'Muslim',
          split: 15,
        },
        {
          lookup: 'Do not want to disclose this',
          split: 15,
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
          /* CHANGETHIS - this matters based on the input graduation group, should only have the correct years for the regions split evenly */
          graduationYear: {
            type: 'percentages',
            subType: 'lookup',
            split: [
              {
                lookup: '1987',
                split: 5,
              },
              {
                lookup: '1986',
                split: 5,
              },
              {
                lookup: '1985',
                split: 5,
              },
              {
                lookup: '1984',
                split: 5,
              },
              {
                lookup: '1983',
                split: 5,
              },
              {
                lookup: '1982',
                split: 5,
              },
              {
                lookup: '1981',
                split: 5,
              },
              {
                lookup: '1980',
                split: 5,
              },
              {
                lookup: '1979',
                split: 5,
              },
              {
                lookup: '1978',
                split: 5,
              },
              {
                lookup: '1977',
                split: 5,
              },
              {
                lookup: '1976',
                split: 5,
              },
              {
                lookup: '1975',
                split: 5,
              },
              {
                lookup: '1974',
                split: 5,
              },
              {
                lookup: '1973',
                split: 5,
              },
              {
                lookup: '1972',
                split: 5,
              },
              {
                lookup: '1971',
                split: 5,
              },
              {
                lookup: '1970',
                split: 5,
              },
              {
                lookup: '1969',
                split: 5,
              },
              {
                lookup: '1968',
                split: 5,
              },
            ],
          },
          /* REMOVETHIS - should be based on the graduation type needed */
          degreeLevel: {
            type: 'percentages',
            subType: 'lookup',
            split: [
              {
                lookup: 'Undergraduate Bachelors Degree',
                split: 0,
              },
              {
                lookup: 'Undergraduate Masters Degree',
                split: 0,
              },
              {
                lookup: 'Masters',
                split: 0,
              },
              {
                lookup: 'Doctorate',
                split: 100,
              },
              {
                lookup: 'Other Degree',
                split: 0,
              },
            ],
          },
          /* REMOVETHIS - only applies to certain set of things */
          mastersType: {
            type: 'percentages',
            subType: 'lookup',
            split: [
              {
                lookup: 'Taught Masters',
                split: 5,
              },
              {
                lookup: 'Research Masters',
                split: 80,
              },
            ],
          },
          /* REMOVETHIS - only applies to a certain set of things and should reflect age */
          funding: {
            type: 'percentages',
            subType: 'lookup',
            split: [
              {
                lookup: 'Self-funding',
                split: 5,
              },
              {
                lookup: 'Sponsorship',
                split: 80,
              },
              {
                lookup: 'Grant or award',
                split: 5,
              },
              {
                lookup: 'My employer provided financial support',
                split: 5,
              },
              {
                lookup: 'Other',
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
          /* REMOVETHIS - this is how long the degree is and depends on what type of degree they are doing */
          startYear: {
            type: 'percentages',
            subType: 'lookup',
            split: [
              {
                lookup: '1 Year',
                split: 0,
              },
              {
                lookup: '2 Years',
                split: 0,
              },
              {
                lookup: '3 Years',
                split: 0,
              },
              {
                lookup: '4 Years',
                split: 100,
              },
              {
                lookup: 'Other',
                split: 0,
              },
            ],
          },
          /* REMOVETHIS - needs to make sense for the type of degree */
          result: {
            type: 'percentages',
            subType: 'lookup',
            split: [
              // this is wierd because we are doing multiple probabilities in 1
              /* {
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
              }, */
              {
                lookup: 'Pass',
                split: 90,
              },
              {
                lookup: 'Fail',
                split: 10,
              },
            ],
          },
          /* REMOVETHIS - this depends on the type of degree they are doing and the input that we want */
          /* courseType: {
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
          }, */
        },
      },
      {
        countID: 2,
        data: {
          // ignore
        },
      },
      {
        countID: 3,
        data: {
          // ignore
        },
      },
    ],
  },
  '2-5': {
    /* CHANGETHIS - let's make a trend that it is more positive the closer to their graduation date they are and the further out it goes the worse it becomes */
    experiencePrepEmployment: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Very well',
          split: 10,
        },
        {
          lookup: 'Well',
          split: 5,
        },
        {
          lookup: 'Not very well',
          split: 25,
        },
        {
          lookup: 'Not at all',
          split: 30,
        },
        {
          lookup: 'Can\'t tell',
          split: 30,
        },
      ],
    },
    /* CHANGETHIS - let's make a trend that it is more positive the closer to their graduation date they are and the further out it goes the worse it becomes */
    experiencePrepFurtherStudy: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Very well',
          split: 15,
        },
        {
          lookup: 'Well',
          split: 5,
        },
        {
          lookup: 'Not very well',
          split: 20,
        },
        {
          lookup: 'Not at all',
          split: 30,
        },
        {
          lookup: 'Can\'t tell',
          split: 30,
        },
      ],
    },
    /* CHANGETHIS - let's make a trend that it is more positive the closer to their graduation date they are and the further out it goes the worse it becomes */
    experiencePrepSelfEmployed: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Very well',
          split: 10,
        },
        {
          lookup: 'Well',
          split: 5,
        },
        {
          lookup: 'Not very well',
          split: 25,
        },
        {
          lookup: 'Not at all',
          split: 30,
        },
        {
          lookup: 'Can\'t tell',
          split: 30,
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
          lookup: 'GBP - Pound Sterling (£)',
          split: 90,
        },
        {
          lookup: 'USD - US Dollar ($)',
          split: 5,
        },
        {
          lookup: 'EUR - Euro (€)',
          split: 5,
        },
      ],
    },
    salaryPeriod: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Monthly',
          split: 80,
        },
        {
          lookup: 'Weekly',
          split: 10,
        },
        {
          lookup: 'Daily',
          split: 10,
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
    /* CHANGETHIS - remember this is the salary distribution and we want it to go up a bit like this (in terms of mean):
      Fresh out of uni - 35k
      10 years - 100k
      20 years - 200k
      30 years - 220k
      40 years - 250 k

      THE SALARY NUMBERS ARE ALSO EFFECTED BY
        GENDER - lower female
        SUBJECT - lower arts

      then as time goes on make more and more reiculous higher values -

      haveBonusPercent goes up as time goes on
    */
    SalaryBASE: {
      // upper and lower numbers are used for calculation of annual salary which is then mutated to whatever the selected period becomes
      // we use a bell curve distribution between upper and lower numbers and then assign our values against that
      lowerSalary: 40000,
      meanSalary: 50000,
      upperSalary: 80000,
      lowerBonus: 0,
      meanBonus: 1000,
      upperBonus: 3000,
      // percentage of people that have a bonus
      haveBonusPercent: 20,
    },
    /* CHANGETHIS - people work less hours as time go on */
    hoursBASE: {
      data: [
        {
          split: 10,
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
          split: 50,
          contract: 20,
          contractVarianceUpPercent: 0,
          contractVarianceDownPercent: 0,
          actualVarianceUpPercent: 0,
          actualVarianceDownPercent: 0,
        },
        {
          split: 30,
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
    /* CHANGETHIS - as time goes on the qualification being a formal requirement dissapears completely but in the early days is really important */
    neededQualification: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes, the qualification was a formal requirement',
          split: 0,
        },
        {
          lookup: 'Yes, while the qualification was not a formal requirment it did give me an advantage',
          split: 0,
        },
        {
          lookup: 'No, the qualifation was not required',
          split: 50,
        },
        {
          lookup: 'Don\'t know',
          split: 50,
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
    /* CHANGETHIS - need to make sense for age group */
    jobReason: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'It fitted into my career plan / it was exactly the type of work I wanted',
          split: 0,
        },
        {
          lookup: 'It was the best job offer I received',
          split: 0,
        },
        {
          lookup: 'It was the only job offer I received',
          split: 0,
        },
        {
          lookup: 'It was an opportunity to progress in the organisation',
          split: 10,
        },
        {
          lookup: 'To see if I would like the type of work it involved',
          split: 5,
        },
        {
          lookup: 'To gain and broaden my experience in order to get the type of job I really want',
          split: 5,
        },
        {
          lookup: 'It was in the right location',
          split: 45,
        },
        {
          lookup: 'The job was well-paid',
          split: 35,
        },
        {
          lookup: 'In order to earn a living / pay off debts',
          split: 0,
        },
      ],
    },
    /* CHANGETHIS - needs to make senses for age group (uni / college career service should be 0 for instance for anyone except 1 yr out) */
    jobDiscovery: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'University / College Career Service',
          split: 0,
        },
        {
          lookup: 'Other University / college source (e.g. lecturer or website)',
          split: 0,
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
          split: 20,
        },
        {
          lookup: 'Recruitment agency / website',
          split: 5,
        },
        {
          lookup: 'Speculative Application',
          split: 5,
        },
        {
          lookup: 'Already worked there (i.e. internship)',
          split: 30,
        },
        {
          lookup: 'Other',
          split: 10,
        },
      ],
    },
    /* CHANGETHIS - linked to age - basically becomes 100% no after y years */
    previouslyEmployed: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes, before my programme of study',
          split: 0,
        },
        {
          lookup: 'Yes during my programme of study',
          split: 0,
        },
        {
          lookup: 'Yes, before and during my programme of study',
          split: 0,
        },
        {
          lookup: 'No',
          split: 100,
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
    /* CHANGETHIS - let's make this basically go DOWN over time! */
    applyDegreeToWork: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 2,
        },
        {
          lookup: 'Agree',
          split: 3,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 35,
        },
        {
          lookup: 'Strongly disagree',
          split: 30,
        },
      ],
    },
    /* CHANGETHIS - let's make this basically go DOWN over time! */
    applySkillsToWork: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 2,
        },
        {
          lookup: 'Agree',
          split: 3,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 35,
        },
        {
          lookup: 'Strongly disagree',
          split: 30,
        },
      ],
    },
    /* CHANGETHIS - let's make this basically go DOWN over time! */
    applyExtraCurricularToWork: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 2,
        },
        {
          lookup: 'Agree',
          split: 3,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 35,
        },
        {
          lookup: 'Strongly disagree',
          split: 30,
        },
      ],
    },
    /* CHANGETHIS - let's make this basically go DOWN over time! */
    contributeMeaningfullyToLife: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 2,
        },
        {
          lookup: 'Agree',
          split: 3,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 35,
        },
        {
          lookup: 'Strongly disagree',
          split: 30,
        },
      ],
    },
    /* CHANGETHIS - let's make this basically go DOWN over time! */
    currentWorkFitsWithFuturePlans: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 2,
        },
        {
          lookup: 'Agree',
          split: 3,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 35,
        },
        {
          lookup: 'Strongly disagree',
          split: 30,
        },
      ],
    },
    /* CHANGETHIS - let's make this basically go DOWN over time! */
    currentWorkMeaningfulAndImportant: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 2,
        },
        {
          lookup: 'Agree',
          split: 3,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 35,
        },
        {
          lookup: 'Strongly disagree',
          split: 30,
        },
      ],
    },
    /* CHANGETHIS - let's make this basically go DOWN over time! */
    furtherStudyAdvancesCareer: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 2,
        },
        {
          lookup: 'Agree',
          split: 3,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 35,
        },
        {
          lookup: 'Strongly disagree',
          split: 30,
        },
      ],
    },
    /* CHANGETHIS - let's make this basically go DOWN over time! */
    professionalQualificationsAdvanceCareer: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Strongly agree',
          split: 2,
        },
        {
          lookup: 'Agree',
          split: 3,
        },
        {
          lookup: 'Neither agree or disagree',
          split: 30,
        },
        {
          lookup: 'Disagree',
          split: 35,
        },
        {
          lookup: 'Strongly disagree',
          split: 30,
        },
      ],
    },
  },
};

const thing = _.merge(staticData, config, yearGroupData);
module.exports = thing;
