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

// used for where people work
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
  '1-2': {
    /* CHANGETHIS - increases SLIGHTLY over age groups - base 90 down to 70 - this is the 'do they currently live in the uk' question */
    liveInUK: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes',
          split: 90,
        },
      ],
    },
    postcode: {
      type: 'percentages',
      subType: 'pick',
      split: postcodeSplitArr,
    },
  },
  '4-1': {
    /* CHANGETHIS - more people work full time as time goes on - towards teh tail end we want a few retired people */
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
    /* CHANGETHIS - more people become self-employed / start their own business at different times in their lives etc. */
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
    },
  },
  '4-3': {
    /* CHANGETHIS - high yes at early times - virtually zero at 20+ with a very fast drop off at 10 years (like no more than 10 % at 10 years) */
    firstCareerJob: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes',
          split: 95,
        },
        {
          lookup: 'No',
          split: 5,
        },
      ],
    },
    // to hard to make this work properly
    /* companyActivity: {

    } */
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
    /* CHANGETHIS - let's have this go up to like 80/20 as time goes on on a straight line */
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
    /* CHANGETHIS - for early times we need this to be just 1 year ago - for later times needs to vary between 1 - 10 years depending on how out we are with most concentrated around the 2 -3 year mark */
    startTime: {
      type: 'dates',
      split: [
        {
          yearsAgo: 0,
          month: 'rand',
          frequency: 80,
        },
        {
          yearsAgo: 1,
          month: 'rand',
          frequency: 20,
        },
      ],
    },
  },
  '5-2': {
    /* CHANGETHIS - let's make this basically go UP over time with a dip in mid life crisis time (10-20 years?) */
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
    /* CHANGETHIS - let's make this basically go UP over time with a dip in mid life crisis time (10-20 years?) */
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
    /* CHANGETHIS - let's make this basically go UP over time with a dip in mid life crisis time (10-20 years?) */
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
    /* CHANGETHIS - let's make this basically go UP over time with a dip in mid life crisis time (10-20 years?) */
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
    /* CHANGETHIS - let's make this so don't know is the main option after 5 years with generally not likely trend */
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
          split: 10,
        },
        {
          lookup: 'Likely',
          split: 10,
        },
        {
          lookup: 'Not very likely',
          split: 40,
        },
        {
          lookup: 'Not likely at all',
          split: 35,
        },
        {
          lookup: 'Don\'t know',
          split: 5,
        },
      ],
    },
    /* CHANGETHIS - let's make this so don't know is the main option after 5 years with generally not likely trend */
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
    /* CHANGETHIS - let's make this so don't know is the main option after 5 years with generally not likely trend */
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
    /* CHANGETHIS - we just need to make sure have not worked is set to 0 after 5 years with an increasing trend of don't know after 5 + years */
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
    /* CHANGETHIS - we just need to make sure have not worked is set to 0 after 5 years with an increasing trend of don't know after 5 + years */
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
    /* CHANGETHIS - we just need to make sure have not worked is set to 0 after 5 years with an increasing trend of don't know after 5 + years */
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
    /* CHANGETHIS - we just need to make sure have not worked is set to 0 after 5 years with an increasing trend of don't know after 5 + years */
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
    /* CHANGETHIS - we just need to make sure have not worked is set to 0 after 5 years with an increasing trend of don't know after 5 + years */
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
    /* CHANGETHIS - we just need to make sure have not worked is set to 0 after 5 years with an increasing trend of don't know after 5 + years */
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
    /* CHANGETHIS - we just need to make sure have not worked is set to 0 after 5 years with an increasing trend of don't know after 5 + years */
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
    /* CHANGETHIS - we just need to make sure have not worked is set to 0 after 5 years with an increasing trend of don't know after 5 + years */
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
    /* CHANGETHIS - we just need to make sure have not worked is set to 0 after 5 years with an increasing trend of don't know after 5 + years */
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
    /* CHANGETHIS - This just needs to make sense over time / year group! */
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
