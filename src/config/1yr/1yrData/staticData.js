const _ = require('lodash');

// used for where people live in the UK
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


// used for school location
const altPostcodeSplitArr = _.concat(
  postcodeSplitArr,
  {
    lookup: 'null',
    split: 10,
  },
);


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
                split: 40,
              },
              {
                lookup: 'A',
                split: 40,
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
                split: 70,
              },
              {
                lookup: 'B',
                split: 20,
              },
              {
                lookup: 'C',
                split: 10,
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
            split: 0,
          },
          {
            count: 2,
            split: 0,
          },
          {
            count: 3,
            split: 70,
          },
          {
            count: 4,
            split: 30,
          },
          {
            count: 5,
            split: 0,
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
          split: 60,
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
    },
  },
};

module.exports = config;
