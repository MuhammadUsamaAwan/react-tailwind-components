import { BsFillArchiveFill } from 'react-icons/bs';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';

export default function App() {
  return (
    <div className='m-10 space-y-10'>
      <MenuButton label='Menu' items={[{ key: '1', label: 'First Item', icon: <BsFillArchiveFill /> }]} />
      <Menu label={<BsFillArchiveFill />} items={[{ key: '1', label: 'First Item', icon: <BsFillArchiveFill /> }]} />
    </div>
  );
}
