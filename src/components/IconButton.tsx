import clsx from 'clsx';

interface Props {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  icon: JSX.Element;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({ color = 'primary', disabled = false, icon, onClick, className }: Props) {
  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'duration-200 ease-out focus:outline-none active:scale-95 disabled:cursor-not-allowed',
        color === 'primary' && 'text-primary-1 hover:text-primary-2 focus:text-primary-2 disabled:text-primary-3',
        color === 'secondary' &&
          'text-secondary-1 hover:text-secondary-2 focus:text-secondary-2 disabled:text-secondary-3',
        color === 'success' && 'text-success-1 hover:text-success-2 focus:text-success-2 disabled:text-success-3',
        color === 'warning' && 'text-warning-1 hover:text-warning-2 focus:text-warning-2 disabled:text-warning-3',
        color === 'danger' && 'text-danger-1 hover:text-danger-2 focus:text-danger-2 disabled:text-danger-3',
        className
      )}
    >
      {icon}
    </button>
  );
}
