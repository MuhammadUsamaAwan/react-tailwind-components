import clsx from 'clsx';

interface Props {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  icon?: JSX.Element;
  href: string;
  className?: string;
}

export default function LinkButton({ label, color = 'primary', icon, href, className }: Props) {
  return (
    <a
      href={href}
      className={clsx(
        'flex items-center justify-center space-x-1 rounded px-4 py-1 text-white shadow duration-200 ease-out focus:outline-none active:scale-95 disabled:cursor-not-allowed',
        color === 'primary' && 'bg-primary-1 hover:bg-primary-2 focus:bg-primary-2 disabled:bg-primary-3',
        color === 'secondary' && 'bg-secondary-1 hover:bg-secondary-2 focus:bg-secondary-2 disabled:bg-secondary-3',
        color === 'success' && 'bg-success-1 hover:bg-success-2 focus:bg-success-2 disabled:bg-success-3',
        color === 'warning' && 'bg-warning-1 hover:bg-warning-2 focus:bg-warning-2 disabled:bg-warning-3',
        color === 'danger' && 'bg-danger-1 hover:bg-danger-2 focus:bg-danger-2 disabled:bg-danger-3',
        className
      )}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
