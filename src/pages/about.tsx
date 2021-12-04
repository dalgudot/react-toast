import { useToast } from '../../toast/src';
import type { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
  const { showToast } = useToast();

  return (
    <>
      <Link href="/">
        <a>
          <p>Go to index</p>
        </a>
      </Link>
      <button onClick={() => showToast('1')}>showToast</button>
      <button onClick={() => showToast('2')}>showToast</button>
      <button onClick={() => showToast('3')}>showToast</button>
      <button onClick={() => showToast('4')}>showToast</button>
      <button onClick={() => showToast('5')}>showToast</button>
    </>
  );
};

export default About;
