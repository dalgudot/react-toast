import { useToast } from '../../toast/src';
import type { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

const About: NextPage = () => {
  const { showToast } = useToast();

  return (
    <Div>
      <Link href='/'>
        <a>
          <p>Go to index</p>
        </a>
      </Link>
      <button onClick={() => showToast('1')}>showToast('1')</button>
      <button onClick={() => showToast('2')}>showToast('2')</button>
      <button onClick={() => showToast('3')}>showToast('3')</button>
      <button onClick={() => showToast('4')}>showToast('4')</button>
      <button onClick={() => showToast('5')}>showToast('5')</button>
    </Div>
  );
};

export default About;

const Div = styled.div`
  margin-top: 300px;
  display: flex;
  flex-direction: column;
`;
