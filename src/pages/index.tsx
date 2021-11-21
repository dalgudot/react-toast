import type { NextPage } from 'next';
import { useToast } from '../../toast/src';
import Link from 'next/link';

const Index: NextPage = () => {
  const { showToast } = useToast();

  return (
    <>
      <Link href="/about">
        <a>
          <p>Go to about</p>
        </a>
      </Link>
      <button
        onClick={() =>
          showToast(
            `This page is Index
This page is Index
This page is Index`
          )
        }
      >
        showToast
      </button>
    </>
  );
};

export default Index;
