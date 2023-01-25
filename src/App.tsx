import { BsFillArchiveFill } from 'react-icons/bs';
import Button from './components/Button';

export default function App() {
  return (
    <div className='m-10 space-y-10'>
      <Button label='Button' icon={<BsFillArchiveFill />} />
    </div>
  );
}
