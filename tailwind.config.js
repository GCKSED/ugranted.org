const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  safelist: [
  'pb-8',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#FF6B21',
          '50': '#FFE5D9',
          '100': '#FFD8C4',
          '200': '#FFBD9B',
          '300': '#FFA173',
          '400': '#FF864A',
          '500': '#FF6B21',
          '600': '#E84D00',
          '700': '#B03B00',
          '800': '#782800',
          '900': '#401500'
        },
        'secondary': {  
          DEFAULT: '#71717A',
          '50': '#D0D0D3',
          '100': '#C5C5C9',
          '200': '#B0B0B6',
          '300': '#9B9BA2',
          '400': '#85858E',
          '500': '#71717A',
          '600': '#56565D',
          '700': '#3B3B40',
          '800': '#202023',
          '900': '#050506'
        },
      }
    },
    fontFamily: {
      sans: [
        "'Work Sans', sans-serif;",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
  },
  variants: {
    typography: ["dark"],
  },
        typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray[800]'),
            '--tw-prose-headings': theme('colors.gray[900]'),
            '--tw-prose-lead': theme('colors.gray[700]'),
            '--tw-prose-links': theme('colors.gray[900]'),
            '--tw-prose-bold': theme('colors.gray[900]'),
            '--tw-prose-counters': theme('colors.gray[600]'),
            '--tw-prose-bullets': theme('colors.gray[400]'),
            '--tw-prose-hr': theme('colors.gray[300]'),
            '--tw-prose-quotes': theme('colors.gray[900]'),
            '--tw-prose-quote-borders': theme('colors.gray[300]'),
            '--tw-prose-captions': theme('colors.gray[700]'),
            '--tw-prose-code': theme('colors.primary[500]'),
            '--tw-prose-pre-code': theme('colors.primary[300]'),
            '--tw-prose-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-th-borders': theme('colors.gray[300]'),
            '--tw-prose-td-borders': theme('colors.gray[200]'),
            '--tw-prose-invert-body': theme('colors.gray[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.gray[300]'),
            '--tw-prose-invert-links': theme('colors.primary[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.gray[400]'),
            '--tw-prose-invert-bullets': theme('colors.gray[200]'),
            '--tw-prose-invert-hr': theme('colors.gray[500]'),
            '--tw-prose-invert-quotes': theme('colors.gray[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.gray[700]'),
            '--tw-prose-invert-captions': theme('colors.gray[400]'),
            '--tw-prose-invert-code': theme('colors.primary[400]'),
            '--tw-prose-invert-pre-code': theme('colors.primary[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-invert-th-borders': theme('colors.gray[100]'),
            '--tw-prose-invert-td-borders': theme('colors.gray[500]'),

            // Lists
          ul: {
            listStyleType: {
              none: 'none',
              disc: 'disc',
              decimal: 'decimal',
              square: 'square',
              roman: 'upper-roman',
            },
          },
          ol: {
            listStyleType: 'decimal',
          },
          'ul, ol': {
            paddingLeft: theme('spacing.6'),
          },
          li: {
            marginTop: theme('spacing.6'),
            marginBottom: theme('spacing.6'),
            paddingLeft: theme('spacing[3.5]'),
          },
          'li::marker': {
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.semibold'),
          },
          'ol > li::marker': {
            color: 'var(--tw-prose-counters)',
          },
          'ul > li::marker': {
            color: 'var(--tw-prose-bullets)',
          },
          'li :is(ol, ul)': {
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4'),
          },
          'li :is(li, p)': {
            marginTop: theme('spacing.3'),
            marginBottom: theme('spacing.3'),
          },
          },
        },
      }),
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/aspect-ratio'),
    require('flowbite-typography'),
    require('flowbite/plugin')
  ],
};
