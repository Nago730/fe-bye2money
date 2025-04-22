const colors = {
  grayscale: {
    50: '#FFFFFF',
    100: '#FBFCFD',
    200: '#F1F4F8',
    300: '#777D84',
    400: '#000000',
  },
  pastel: {
    almondFrost: '#A28878',
    porsche: '#E39D5D',
    chenin: '#D7CA6B',
    caper: '#AACD7E',
    cruise: '#BCDFD3',
    onahau: '#C5E0EB',
    glacier: '#7DB7BF',
    seagull: '#79B2CA',
    jordyBlue: '#73A4D0',
    perano: '#A7B9E9',
    perfume: '#BDA6E1',
    lavenderPink: '#F0B0D3',
    amaranth: '#E93B5A',
    chestnut: '#C04646',
  },
};

const tokens = {
  nuetral: {
    surface: {
      weak: colors.grayscale[100],
      default: colors.grayscale[50],
      point: colors.grayscale[200],
    },
    text: {
      weak: colors.grayscale[300],
      default: colors.grayscale[400],
      revDefault: colors.grayscale[50],
    },
    border: {
      default: colors.grayscale[400],
    },
  },
  brand: {
    surface: {
      default: colors.grayscale[50],
    },
    text: {
      income: colors.pastel.seagull,
      expense: colors.pastel.chestnut,
    },
  },
  danger: {
    surface: {
      default: colors.pastel.amaranth,
    },
    text: {
      default: colors.pastel.amaranth,
      revDefault: colors.grayscale[50],
    },
    border: {
      default: colors.pastel.amaranth,
    },
  },
  colorchip: {
    10: colors.pastel.almondFrost,
    20: colors.pastel.porsche,
    30: colors.pastel.chenin,
    40: colors.pastel.caper,
    50: colors.pastel.cruise,
    60: colors.pastel.onahau,
    70: colors.pastel.glacier,
    80: colors.pastel.jordyBlue,
    90: colors.pastel.perano,
    100: colors.pastel.perfume,
    110: colors.pastel.lavenderPink,
    120: colors.pastel.chestnut,
  },
};

const typography = {
  serif48: {
    fontFamily: 'Chosunilbo_myungjo, serif',
    fontSize: '48px',
    lineHeight: '56px',
    fontWeight: 'normal',
  },
  serif24: {
    fontFamily: 'Chosunilbo_myungjo, serif',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 'normal',
  },
  serif16: {
    fontFamily: 'Chosunilbo_myungjo, serif',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 'normal',
  },
  semibold16: {
    fontFamily: 'Pretendard, sans-serif',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '600',
  },
  semibold14: {
    fontFamily: 'Pretendard, sans-serif',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: '600',
  },
  semibold12: {
    fontFamily: 'Pretendard, sans-serif',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '600',
  },
  light16: {
    fontFamily: 'Pretendard, sans-serif',
    fontSize: '16px',
    lineHeight: '32px',
    fontWeight: '300',
  },
  light14: {
    fontFamily: 'Pretendard, sans-serif',
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: '300',
  },
  light12: {
    fontFamily: 'Pretendard, sans-serif',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '300',
  },
};

const theme = {
  colors,
  tokens,
  typography,
} as const;

export default theme