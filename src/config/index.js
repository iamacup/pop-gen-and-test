
// percentages
// - subtype - lookup - will lookup the options based on the percentages and spread out over the remaining options that are not specified
// - subtype - pick - will split based on the optiosn provided (free text)

// dates
// - month can be string rand (a random month will be picked) or an integer, 1 through 12
// - yearsAgo must be an integer that is number of years ago (which could be 0 if to use 2018)

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
};

module.exports = config;
