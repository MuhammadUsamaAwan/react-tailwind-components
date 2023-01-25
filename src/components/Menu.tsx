import clsx from 'clsx';
import { useEffect, useState, useRef, ReactNode } from 'react';
import { Menu as HeadlessMenu } from '@headlessui/react';

interface Props {
  label: ReactNode;
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
  onClick?: () => void;
}

export default function Menu({ label, disabled = false, className, placement = 'left', items }: Props) {
  const [height, setHeight] = useState<number | undefined>(0);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setHeight(ref?.current?.clientHeight);
  }, []);

  return (
    <div className={clsx('relative w-min', className)}>
      <HeadlessMenu>
        <HeadlessMenu.Button disabled={disabled} ref={ref}>
          {label}
        </HeadlessMenu.Button>
        <HeadlessMenu.Items
          className={clsx(
            'absolute w-max space-y-0.5 rounded border border-slate-200 bg-white p-1 shadow',
            placement === 'left' && 'left-0',
            placement === 'right' && 'right-0',
            placement === 'center' && 'left-1/2 -translate-x-1/2',
            `top-[calc(${height}px+4px)]`
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
                  onClick={item.onClick}
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
