
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

//used for where people live in the UK
const postcodeSplitArr = [
  {
    lookup: 'DH33AQ',
    split: 1,
  },
  {
    lookup: 'ME21HQ',
    split: 1,
  },
  {
    lookup: 'TW32RH',
    split: 1,
  },
  {
    lookup: 'DA13HG',
    split: 1,
  },
  {
    lookup: 'HU95EP',
    split: 1,
  },
  {
    lookup: 'SP102FB',
    split: 1,
  },
  {
    lookup: 'SS74NR',
    split: 1,
  },
  {
    lookup: 'PE114JS',
    split: 1,
  },
  {
    lookup: 'SR59HY',
    split: 1,
  },
  {
    lookup: 'LS102NZ',
    split: 1,
  },
  {
    lookup: 'HP119BE',
    split: 1,
  },
  {
    lookup: 'DY52UN',
    split: 1,
  },
  {
    lookup: 'WN73XJ',
    split: 1,
  },
  {
    lookup: 'BT820JZ',
    split: 1,
  },
  {
    lookup: 'NG182JN',
    split: 1,
  },
  {
    lookup: 'G690BJ',
    split: 1,
  },
  {
    lookup: 'CT31HH',
    split: 1,
  },
  {
    lookup: 'CB45XQ',
    split: 1,
  },
  {
    lookup: 'BR36WA',
    split: 1,
  },
  {
    lookup: 'CR53EN',
    split: 1,
  },
  {
    lookup: 'CF67UJ',
    split: 1,
  },
  {
    lookup: 'AL109LR',
    split: 1,
  },
  {
    lookup: 'WA101RN',
    split: 1,
  },
  {
    lookup: 'TQ139EW',
    split: 1,
  },
  {
    lookup: 'LU27NY',
    split: 1,
  },
  {
    lookup: 'ST179NR',
    split: 1,
  },
  {
    lookup: 'PA345DY',
    split: 1,
  },
  {
    lookup: 'LA14NQ',
    split: 1,
  },
  {
    lookup: 'S102SN',
    split: 1,
  },
  {
    lookup: 'FY39GH',
    split: 1,
  },
  {
    lookup: 'KT205ND',
    split: 1,
  },
  {
    lookup: 'NN57DE',
    split: 1,
  },
  {
    lookup: 'RM12JQ',
    split: 1,
  },
  {
    lookup: 'WF83YT',
    split: 1,
  },
  {
    lookup: 'DT40SN',
    split: 1,
  },
  {
    lookup: 'SG124BR',
    split: 1,
  },
  {
    lookup: 'DE78NZ',
    split: 1,
  },
  {
    lookup: 'BB90PY',
    split: 1,
  },
  {
    lookup: 'WS110AY',
    split: 1,
  },
  {
    lookup: 'EH459YB',
    split: 1,
  },
  {
    lookup: 'SO36RT',
    split: 1,
  },
  {
    lookup: 'KY102PA',
    split: 1,
  },
  {
    lookup: 'IG11GJ',
    split: 1,
  },
  {
    lookup: 'BD131EG',
    split: 1,
  },
  {
    lookup: 'KA137PF',
    split: 1,
  },
  {
    lookup: 'ME21HQ',
    split: 1,
  },
  {
    lookup: 'CV78NN',
    split: 1,
  },
  {
    lookup: 'PO317JL',
    split: 1,
  },
  {
    lookup: 'TR263DY',
    split: 1,
  },
  {
    lookup: 'SL66JZ',
    split: 1,
  },
  {
    lookup: 'MK137WZ',
    split: 1,
  },
  {
    lookup: 'TD75NQ',
    split: 1,
  },
  {
    lookup: 'CO30JB',
    split: 1,
  },
  {
    lookup: 'SA699AU',
    split: 1,
  },
  {
    lookup: 'BA229ZN',
    split: 1,
  },
  {
    lookup: 'N135QN',
    split: 1,
  },
  {
    lookup: 'ML12TD',
    split: 1,
  },
  {
    lookup: 'LE113NX',
    split: 1,
  },
  {
    lookup: 'EX238FA',
    split: 1,
  },
  {
    lookup: 'TA37SS',
    split: 1,
  },
  {
    lookup: 'TN23ZB',
    split: 1,
  },
  {
    lookup: 'HS75LX',
    split: 1,
  },
  {
    lookup: 'CM159BP',
    split: 1,
  },
  {
    lookup: 'LL301TE',
    split: 1,
  },
  {
    lookup: 'W1V4HP',
    split: 1,
  },
  {
    lookup: 'EX238FA',
    split: 1,
  },
  {
    lookup: 'SM12JE',
    split: 1,
  },
  {
    lookup: 'EC2Y8PE',
    split: 1,
  },
  {
    lookup: 'CH458NF',
    split: 1,
  },
  {
    lookup: 'PH14AE',
    split: 1,
  },
  {
    lookup: 'AB31DP',
    split: 1,
  },
  {
    lookup: 'TF31NT',
    split: 1,
  },
  {
    lookup: 'SN67PZ',
    split: 1,
  },
  {
    lookup: 'FK28HS',
    split: 1,
  },
  {
    lookup: 'PR82TE',
    split: 1,
  },
  {
    lookup: 'PL288EQ',
    split: 1,
  },
  {
    lookup: 'OX45FE',
    split: 1,
  },
  {
    lookup: 'SK102SN',
    split: 1,
  },
  {
    lookup: 'SE193PT',
    split: 1,
  },
  {
    lookup: 'HD61LY',
    split: 1,
  },
  {
    lookup: 'CA26BU',
    split: 1,
  },
  {
    lookup: 'HX49AB',
    split: 1,
  },
  {
    lookup: 'RH203NW',
    split: 1,
  },
  {
    lookup: 'YO140BB',
    split: 1,
  },
  {
    lookup: 'IV458RS',
    split: 1,
  },
  {
    lookup: 'HG45NA',
    split: 1,
  },
  {
    lookup: 'LD30DY',
    split: 1,
  },
  {
    lookup: 'DG64LT',
    split: 1,
  },
  {
    lookup: 'SW49AZ',
    split: 1,
  },
  {
    lookup: 'GU227AU',
    split: 1,
  },
  {
    lookup: 'BN131AN',
    split: 1,
  },
  {
    lookup: 'EN61TA',
    split: 1,
  },
  {
    lookup: 'CW97XU',
    split: 1,
  },
  {
    lookup: 'UB96SY',
    split: 1,
  },
  {
    lookup: 'BS67SU',
    split: 1,
  },
  {
    lookup: 'NP441HH',
    split: 1,
  },
  {
    lookup: 'WR38PW',
    split: 1,
  },
  {
    lookup: 'BL12ND',
    split: 1,
  },
  {
    lookup: 'DD109SZ',
    split: 1,
  },
  {
    lookup: 'WD24GP',
    split: 1,
  },
  {
    lookup: 'HR48LR',
    split: 1,
  },
  {
    lookup: 'BH148TE',
    split: 1,
  },
  {
    lookup: 'SY83LP',
    split: 1,
  },
  {
    lookup: 'WC1A9EY',
    split: 1,
  },
  {
    lookup: 'WV45AT',
    split: 1,
  },
  {
    lookup: 'LL301TE',
    split: 1,
  },
  {
    lookup: 'BT820JZ',
    split: 1,
  },
  {
    lookup: 'RG401EX',
    split: 1,
  },
  {
    lookup: 'KW148YD',
    split: 1,
  },
  {
    lookup: 'NR95SW',
    split: 1,
  },
  {
    lookup: 'OL45HX',
    split: 1,
  },
  {
    lookup: 'DN48EE',
    split: 1,
  },
  {
    lookup: 'NE241YX',
    split: 1,
  },
  {
    lookup: 'ZE29JX',
    split: 1,
  },
  {
    lookup: 'TS296PQ',
    split: 1,
  },
  {
    lookup: 'IP122WA',
    split: 1,
  },
  {
    lookup: 'DL12SX',
    split: 1,
  },
  {
    lookup: 'HA20DD',
    split: 1,
  },
  {
    lookup: 'LN129AB',
    split: 1,
  },
  {
    lookup: 'GL26BA',
    split: 1,
  },
  {
    lookup: 'NW23AN',
    split: 1,
  },
];

//used for school location
const altPostcodeSplitArr = _.concat(
  postcodeSplitArr,
  {
    lookup: 'null',
    split: 10,
  },
);

//used for where people work
const postcodeSplitArrWorkLocation = [
  {
    lookup: 'DH33AQ',
    split: 1,
  },
  {
    lookup: 'ME21HQ',
    split: 1,
  },
  {
    lookup: 'TW32RH',
    split: 1,
  },
  {
    lookup: 'DA13HG',
    split: 1,
  },
  {
    lookup: 'HU95EP',
    split: 1,
  },
  {
    lookup: 'SP102FB',
    split: 1,
  },
  {
    lookup: 'SS74NR',
    split: 1,
  },
  {
    lookup: 'PE114JS',
    split: 1,
  },
  {
    lookup: 'SR59HY',
    split: 1,
  },
  {
    lookup: 'LS102NZ',
    split: 1,
  },
  {
    lookup: 'HP119BE',
    split: 1,
  },
  {
    lookup: 'DY52UN',
    split: 1,
  },
  {
    lookup: 'WN73XJ',
    split: 1,
  },
  {
    lookup: 'BT820JZ',
    split: 1,
  },
  {
    lookup: 'NG182JN',
    split: 1,
  },
  {
    lookup: 'G690BJ',
    split: 1,
  },
  {
    lookup: 'CT31HH',
    split: 1,
  },
  {
    lookup: 'CB45XQ',
    split: 1,
  },
  {
    lookup: 'BR36WA',
    split: 1,
  },
  {
    lookup: 'CR53EN',
    split: 1,
  },
  {
    lookup: 'CF67UJ',
    split: 1,
  },
  {
    lookup: 'AL109LR',
    split: 1,
  },
  {
    lookup: 'WA101RN',
    split: 1,
  },
  {
    lookup: 'TQ139EW',
    split: 1,
  },
  {
    lookup: 'LU27NY',
    split: 1,
  },
  {
    lookup: 'ST179NR',
    split: 1,
  },
  {
    lookup: 'PA345DY',
    split: 1,
  },
  {
    lookup: 'LA14NQ',
    split: 1,
  },
  {
    lookup: 'S102SN',
    split: 1,
  },
  {
    lookup: 'FY39GH',
    split: 1,
  },
  {
    lookup: 'KT205ND',
    split: 1,
  },
  {
    lookup: 'NN57DE',
    split: 1,
  },
  {
    lookup: 'RM12JQ',
    split: 1,
  },
  {
    lookup: 'WF83YT',
    split: 1,
  },
  {
    lookup: 'DT40SN',
    split: 1,
  },
  {
    lookup: 'SG124BR',
    split: 1,
  },
  {
    lookup: 'DE78NZ',
    split: 1,
  },
  {
    lookup: 'BB90PY',
    split: 1,
  },
  {
    lookup: 'WS110AY',
    split: 1,
  },
  {
    lookup: 'EH459YB',
    split: 1,
  },
  {
    lookup: 'SO36RT',
    split: 1,
  },
  {
    lookup: 'KY102PA',
    split: 1,
  },
  {
    lookup: 'IG11GJ',
    split: 1,
  },
  {
    lookup: 'BD131EG',
    split: 1,
  },
  {
    lookup: 'KA137PF',
    split: 1,
  },
  {
    lookup: 'ME21HQ',
    split: 1,
  },
  {
    lookup: 'CV78NN',
    split: 1,
  },
  {
    lookup: 'PO317JL',
    split: 1,
  },
  {
    lookup: 'TR263DY',
    split: 1,
  },
  {
    lookup: 'SL66JZ',
    split: 1,
  },
  {
    lookup: 'MK137WZ',
    split: 1,
  },
  {
    lookup: 'TD75NQ',
    split: 1,
  },
  {
    lookup: 'CO30JB',
    split: 1,
  },
  {
    lookup: 'SA699AU',
    split: 1,
  },
  {
    lookup: 'BA229ZN',
    split: 1,
  },
  {
    lookup: 'N135QN',
    split: 1,
  },
  {
    lookup: 'ML12TD',
    split: 1,
  },
  {
    lookup: 'LE113NX',
    split: 1,
  },
  {
    lookup: 'EX238FA',
    split: 1,
  },
  {
    lookup: 'TA37SS',
    split: 1,
  },
  {
    lookup: 'TN23ZB',
    split: 1,
  },
  {
    lookup: 'HS75LX',
    split: 1,
  },
  {
    lookup: 'CM159BP',
    split: 1,
  },
  {
    lookup: 'LL301TE',
    split: 1,
  },
  {
    lookup: 'W1V4HP',
    split: 1,
  },
  {
    lookup: 'EX238FA',
    split: 1,
  },
  {
    lookup: 'SM12JE',
    split: 1,
  },
  {
    lookup: 'EC2Y8PE',
    split: 20,
  },
  {
    lookup: 'CH458NF',
    split: 1,
  },
  {
    lookup: 'PH14AE',
    split: 1,
  },
  {
    lookup: 'AB31DP',
    split: 1,
  },
  {
    lookup: 'TF31NT',
    split: 1,
  },
  {
    lookup: 'SN67PZ',
    split: 1,
  },
  {
    lookup: 'FK28HS',
    split: 1,
  },
  {
    lookup: 'PR82TE',
    split: 1,
  },
  {
    lookup: 'PL288EQ',
    split: 1,
  },
  {
    lookup: 'OX45FE',
    split: 1,
  },
  {
    lookup: 'SK102SN',
    split: 1,
  },
  {
    lookup: 'SE193PT',
    split: 1,
  },
  {
    lookup: 'HD61LY',
    split: 1,
  },
  {
    lookup: 'CA26BU',
    split: 1,
  },
  {
    lookup: 'HX49AB',
    split: 1,
  },
  {
    lookup: 'RH203NW',
    split: 1,
  },
  {
    lookup: 'YO140BB',
    split: 1,
  },
  {
    lookup: 'IV458RS',
    split: 1,
  },
  {
    lookup: 'HG45NA',
    split: 1,
  },
  {
    lookup: 'LD30DY',
    split: 1,
  },
  {
    lookup: 'DG64LT',
    split: 1,
  },
  {
    lookup: 'SW49AZ',
    split: 20,
  },
  {
    lookup: 'GU227AU',
    split: 1,
  },
  {
    lookup: 'BN131AN',
    split: 1,
  },
  {
    lookup: 'EN61TA',
    split: 1,
  },
  {
    lookup: 'CW97XU',
    split: 1,
  },
  {
    lookup: 'UB96SY',
    split: 1,
  },
  {
    lookup: 'BS67SU',
    split: 1,
  },
  {
    lookup: 'NP441HH',
    split: 1,
  },
  {
    lookup: 'WR38PW',
    split: 1,
  },
  {
    lookup: 'BL12ND',
    split: 1,
  },
  {
    lookup: 'DD109SZ',
    split: 1,
  },
  {
    lookup: 'WD24GP',
    split: 1,
  },
  {
    lookup: 'HR48LR',
    split: 1,
  },
  {
    lookup: 'BH148TE',
    split: 1,
  },
  {
    lookup: 'SY83LP',
    split: 1,
  },
  {
    lookup: 'WC1A9EY',
    split: 20,
  },
  {
    lookup: 'WV45AT',
    split: 1,
  },
  {
    lookup: 'LL301TE',
    split: 1,
  },
  {
    lookup: 'BT820JZ',
    split: 1,
  },
  {
    lookup: 'RG401EX',
    split: 1,
  },
  {
    lookup: 'KW148YD',
    split: 1,
  },
  {
    lookup: 'NR95SW',
    split: 1,
  },
  {
    lookup: 'OL45HX',
    split: 1,
  },
  {
    lookup: 'DN48EE',
    split: 1,
  },
  {
    lookup: 'NE241YX',
    split: 1,
  },
  {
    lookup: 'ZE29JX',
    split: 1,
  },
  {
    lookup: 'TS296PQ',
    split: 1,
  },
  {
    lookup: 'IP122WA',
    split: 1,
  },
  {
    lookup: 'DL12SX',
    split: 1,
  },
  {
    lookup: 'HA20DD',
    split: 1,
  },
  {
    lookup: 'LN129AB',
    split: 1,
  },
  {
    lookup: 'GL26BA',
    split: 1,
  },
  {
    lookup: 'NW23AN',
    split: 20,
  },
];

const config = {
  '1-1': {
    nationality1: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'United Kingdom of Great Britain and Northern Ireland (the)',
          split: 90,
        },
      ],
    },
    dualNationality: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'No',
          split: 90,
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
      split: postcodeSplitArr,
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
    parentsUniversity: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes',
          split: 50,
        },
        {
          lookup: 'No',
          split: 50,
        },
      ],
    },
    siblingUniversity: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Don\'t have a brother or sister',
          split: 20,
        },
        {
          lookup: 'Yes',
          split: 50,
        },
        {
          lookup: 'No',
          split: 30,
        },
      ],
    },
  },
  '2-5': {
    experiencePrepEmployment: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Very well',
          split: 20,
        },
        {
          lookup: 'Well',
          split: 20,
        },
        {
          lookup: 'Not very well',
          split: 20,
        },
        {
          lookup: 'Not at all',
          split: 20,
        },
        {
          lookup: 'Can\'t tell',
          split: 20,
        },
      ],
    },
    experiencePrepFurtherStudy: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Very well',
          split: 20,
        },
        {
          lookup: 'Well',
          split: 20,
        },
        {
          lookup: 'Not very well',
          split: 20,
        },
        {
          lookup: 'Not at all',
          split: 20,
        },
        {
          lookup: 'Can\'t tell',
          split: 20,
        },
      ],
    },
    experiencePrepSelfEmployed: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Very well',
          split: 20,
        },
        {
          lookup: 'Well',
          split: 20,
        },
        {
          lookup: 'Not very well',
          split: 20,
        },
        {
          lookup: 'Not at all',
          split: 20,
        },
        {
          lookup: 'Can\'t tell',
          split: 20,
        },
      ],
    },
  },
  '3-1': {
    outreachItems: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Open Days',
          split: 35,
        },
        {
          lookup: 'Summer School',
          split: 5,
        },
        {
          lookup: 'Other',
          split: 20,
        },
        {
          lookup: 'None',
          split: 40,
        },
      ],
    }
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
      split: altPostcodeSplitArr,
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
    freeSchoolMeals: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes',
          split: 20,
        },
        {
          lookup: 'No',
          split: 20,
        },
        {
          lookup: 'Don\'t know',
          split: 20,
        },
      ],
    }
  },
  '4-1': {
    graduateDestination: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Working full-time, including self-employed/freelance, voluntary or other unpaid work, developing a professional portfolio/creative practice or on an internship/placement',
          split: 60,
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
          split: 5,
        },
        {
          lookup: 'Unemployed',
          split: 5,
        },
      ],
    },
  },
  '4-2': {
    company: {
      companyNames: [
        'MVF',
        'Innocent ',
        'Churchill Retirement Living',
        'Connect Catering',
        'Charter Court Financial Services',
        'The New World Trading Company',
        'Reassured ',
        'UKFast',
        'First Response Finance',
        'Beaverbrooks the Jewellers',
        'PKF Cooper Parry',
        'Bravissimo',
        'Stryker UK ',
        'Kingsley Napley LLP',
        'Funding Circle',
        'Oakman Inns & Restaurants',
        'ANS Group',
        'Toyota (GB)',
        'Pelican Business Services',
        'Karmarama',
        'Lindum Group ',
        'Hilti (Great Britain)',
        'Nedbank Private Wealth',
        'JMW Solicitors LLP',
        'Accountants',
        'The Landmark London',
        'Curtins',
        'Sewell Group ',
        'Mishcon de Reya',
        'Robinwood ',
        'Auto Trader',
        'Stephens Scown LLP',
        'Together',
        'SweetTree Home Care Services',
        'The Alchemist',
        'Hawksmoor',
        'COOK',
        'Anderson Anderson & Brown LLP',
        'Hydrock',
        'Certsure LLP',
        'Motorpoint',
        'Peach Pubs',
        'Zen Internet',
        'Childrensalon',
        'Wyboston Lakes',
        'Splash Damage ',
        'Bibby Financial Services',
        'Paxton',
        'Pertemps Recruitment Partnership',
        'Recruitment',
        'Randstad',
        'Sky Betting & Gaming',
        'Amigo Loans',
        'Coventry Building Society',
        'Mills & Reeve LLP',
        'Johnson & Johnson',
        'Childbase Partnership',
        'ACT ',
        'Stewarts',
        'Bristan Group',
        'Royds Withy King',
        'Audley Travel',
        'Edenhouse Solutions',
        'BWB Consulting',
        'Buzzworks Holdings',
        'Go Ape',
        'Coloplast ',
        'The Entertainer ',
        'Fourth',
        'Skipton Building Society',
        'Clark Contracts ',
        'Bartle Bogle Hegarty (BBH)',
        'HIT Training ',
        'BrewDog',
        'Toy retailer',
        'Price Bailey LLP',
        'Bridge Leisure Parks',
        'Engine',
        'Royal Lancaster London ',
        'Kuoni',
        'Weight Watchers',
        'Altro ',
        'Fossil Group',
        'Babington Group',
        'AJ Bell',
        'Barbon Insurance Group',
        'L\'Occitane en Provence',
        'Bates Wells Braithwaite',
        'David Nieper',
        'Hays Travel',
        'PureGym ',
        'Holiday Extras',
        'FMG',
        'Claims Consortium Group',
        'Everton FC',
        'Guidant Group',
        'Ensono',
        'Kainos ',
        'The Goodwood Group',
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
    jobCount: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: '2',
          split: 95,
        },
        {
          lookup: '3',
          split: 5,
        },
      ],
    },
    employmentType: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Self-employed / freelance',
          split: 0,
        },
        {
          lookup: 'Starting up own business',
          split: 0,
        },
        {
          lookup: 'On a permanent or open-ended contract',
          split: 75,
        },
        {
          lookup: 'On a fixed-term contract lasting 12 months or longer',
          split: 10,
        },
        {
          lookup: 'On a fixed-term contract lasting less than 12 months',
          split: 5,
        },
        {
          lookup: 'Voluntary work',
          split: 0,
        },
        {
          lookup: 'On an internship/placement',
          split: 0,
        },
        {
          lookup: 'Developing a professional protfolio / creative practice',
          split: 0,
        },
        {
          lookup: 'Temping (including supply teaching)',
          split: 5,
        },
        {
          lookup: 'On a zero hours contract',
          split: 5,
        },
        {
          lookup: 'Other',
          split: 0,
        },
      ],
    }
  },
  '4-3': {
    firstCareerJob: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes',
          split: 80,
        },
        {
          lookup: 'No',
          split: 20,
        },
      ],
    },
    //to hard to make this work properly
    /*companyActivity: {

    }*/
    employerSize: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: '1 to 9',
          split: 10,
        },
        {
          lookup: '10 to 49',
          split: 10,
        },
        {
          lookup: '50 to 99',
          split: 10,
        },
        {
          lookup: '100 to 249',
          split: 10,
        },
        {
          lookup: '250 to 499',
          split: 10,
        },
        {
          lookup: '500 to 999',
          split: 20,
        },
        {
          lookup: 'Over 1000',
          split: 30,
        },
      ],
    },
  },
  '4-4': {
    workLocationUKTest: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes',
          split: 90,
        },
        {
          lookup: 'No',
          split: 10,
        },
      ],
    },
    workLocationDetail: {
      type: 'percentages',
      subType: 'pick',
      split: postcodeSplitArrWorkLocation,
    },
    startTime: {
      type: 'dates',
      split: [
        {
          yearsAgo: 1,
          month: 'rand',
          frequency: 90,
        },
        {
          yearsAgo: 2,
          month: 'rand',
          frequency: 10,
        },
      ],
    }
  },
  '4-5': {
    currency: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'GBP - Pound Sterling (£)',
          split: 78,
        },
        {
          lookup: 'USD - US Dollar ($)',
          split: 10,
        },
        {
          lookup: 'EUR - Euro (€)',
          split: 10,
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
