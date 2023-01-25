import clsx from 'clsx';
import { Menu as HeadlessMenu } from '@headlessui/react';
import { VscChevronDown } from 'react-icons/vsc';

interface Props {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  className?: string;
  placement?: 'left' | 'right' | 'center';
  items: MenuItem[];
}

interface MenuItem {
  key: string;
  label: string;
  disabled?: boolean;
  className?: string;
  icon?: JSX.Element;
}

export default function MenuButton({
  label,
  color = 'primary',
  disabled = false,
  className,
  placement = 'left',
  items,
}: Props) {
  return (
    <div className={clsx('relative w-min', className)}>
      <HeadlessMenu>
        <HeadlessMenu.Button
          disabled={disabled}
          className={clsx(
            'flex items-center justify-center space-x-1 rounded px-3 py-1 text-white shadow duration-200 ease-out focus:outline-none disabled:cursor-not-allowed',
            color === 'primary' && 'bg-primary-1 hover:bg-primary-2 focus:bg-primary-2 disabled:bg-primary-3',
            color === 'secondary' && 'bg-secondary-1 hover:bg-secondary-2 focus:bg-secondary-2 disabled:bg-secondary-3',
            color === 'success' && 'bg-success-1 hover:bg-success-2 focus:bg-success-2 disabled:bg-success-3',
            color === 'warning' && 'bg-warning-1 hover:bg-warning-2 focus:bg-warning-2 disabled:bg-warning-3',
            color === 'danger' && 'bg-danger-1 hover:bg-danger-2 focus:bg-danger-2 disabled:bg-danger-3',
            className
          )}
        >
          <span>{label}</span>
          <VscChevronDown />
        </HeadlessMenu.Button>
        <HeadlessMenu.Items
          className={clsx(
            'absolute top-[2.25rem] w-max space-y-0.5 rounded border border-slate-200 bg-white p-1 shadow',
            placement === 'left' && 'left-0',
            placement === 'right' && 'right-0',
            placement === 'center' && 'left-1/2 -translate-x-1/2'
          )}
        >
          {items.map(item => (
            <HeadlessMenu.Item key={item.key}>
              {({ active }) => (
                <button
                  type='button'
                  disabled={item.disabled}
                  className={clsx(
                    'flex w-full items-center space-x-2 rounded px-2 py-0.5 text-left',
                    active && 'bg-bg-1',
                    item.className
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              )}
            </HeadlessMenu.Item>
          ))}
        </HeadlessMenu.Items>
      </HeadlessMenu>
    </div>
  );
}
