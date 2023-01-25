import { BsFillArchiveFill } from 'react-icons/bs';
import Button from './components/Button';
import Link from './components/Link';
import LinkButton from './components/LinkButton';
import Menu from './components/MenuButton';

export default function App() {
  return (
    <div className='m-10 space-y-10'>
      <Button label='Button' icon={<BsFillArchiveFill />} />
      <LinkButton href='/' label='Link' icon={<BsFillArchiveFill />} className='w-min' />
      <Link href='/' label='hello' />
      <Menu label='Menu' color='success' items={[{ key: '1', label: 'First Item', icon: <BsFillArchiveFill /> }]} />
    </div>
  );
}
