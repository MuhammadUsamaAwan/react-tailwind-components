import clsx from 'clsx';
import { ImSpinner2 } from 'react-icons/im';

interface Props {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  label,
  type = 'button',
  color = 'primary',
  disabled = false,
  loading = false,
  icon,
  onClick,
  className,
}: Props) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      disabled={disabled || loading}
      onClick={onClick}
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
      {loading ? <ImSpinner2 className='animate-spin' /> : icon}
      <span>{label}</span>
    </button>
  );
}
