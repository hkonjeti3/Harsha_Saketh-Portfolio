import path from 'path';
import { Fragment } from 'react';
import { readMDXFile } from '../utils';
import { CustomMDX } from '../components/mdx';
import Occupation from './occupation';

const contentPath = path.join(process.cwd(), 'app', 'about', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
  title: 'About',
  description: 'About Harsha Saketh Konjeti',
};

export default function Page() {
  return (
    <Fragment>
      <Occupation />
      <CustomMDX source={content} />
    </Fragment>
  );
}
