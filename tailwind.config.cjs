/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-1': '#6366F1',
        'primary-2': '#4F46E5',
        'primary-3': '#818cf8',
        'secondary-1': '#64748B',
        'secondary-2': '#475569',
        'secondary-3': '#a8a29e',
        'success-1': '#22C55E',
        'success-2': '#16A34A',
        'success-3': '#4ade80',
        'warning-1': '#F59E0B',
        'warning-2': '#D97706',
        'warning-3': '#fbbf24',
        'danger-1': '#EF4444',
        'danger-2': '#DC2626',
        'danger-3': '#f87171',
        'link-1': '#06b6d4',
        'link-2': '#0891b2',
        'bg-1': 'rgb(245,245,245)',
        text: 'rgba(0,0,0,0.88)',
      },
    },
  },
  plugins: [],
};
