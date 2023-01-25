import clsx from 'clsx';

interface Props {
  label: string;
  href: string;
  className?: string;
}

export default function Link({ label, href, className }: Props) {
  return (
    <a href={href} className={clsx('inline-block text-link-1 hover:text-link-2 hover:underline', className)}>
      {label}
    </a>
  );
}
