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
      <button onClick={() => showToast('This page is About')}>showToast</button>
    </>
  );
};

export default About;
