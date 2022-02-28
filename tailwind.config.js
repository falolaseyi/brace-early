module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'neutral-50': '#F9FAFB',
        'neutral-100': '#F3F4F6',
        'neutral-200': '#E5E7EB',
        'neutral-300': '#D1D5DB',
        'neutral-400': '#9CA3AF',
        'neutral-500': '#6B7280',
        'neutral-600': '#4B5563',
        'neutral-700': '#374151',
        'neutral-800': '#1F2937',
        'neutral-900': '#111827',

        'main-50': '#E6E9EB',
        'main-100': '#CDD4D7',
        'main-200': '#9BA8AF',
        'main-300': '#6A7D88',
        'main-400': '#385160',
        'main-500': '#062638',
        'main-600': '#051E2D',
        'main-700': '#041722',
        'main-800': '#020F16',
        'main-900': '#01080B',

        'success-50': '#F0FDF4',
        'success-100': '#DCFCE7',
        'success-200': '#BBF7D0',
        'success-300': '#86EFAC',
        'success-400': '#4ADE80',
        'success-500': '#22C55E',
        'suceess-600': '#16A34A',
        'success-700': '#15803D',
        'success-800': '#166534',
        'success-900': '#14532D',

        'white': '#ffffff',
        'black': '#000000',
      },
      
      fontFamily: {
        'custom': ['omny', 'sans-serif']
      },

      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }

    },
  },
  plugins: [],
}
