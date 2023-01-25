import { BsFillArchiveFill } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import Button from './components/Button';
import IconButton from './components/IconButton';
import LinkButton from './components/LinkButton';

export default function App() {
  return (
    <div className='m-10 space-y-10'>
      <Button label='Button' icon={<BsFillArchiveFill />} />
      <LinkButton href='/' label='Link' icon={<BsFillArchiveFill />} className='w-min' />
      <IconButton icon={<FaTrashAlt />} color='danger' />
    </div>
  );
}
