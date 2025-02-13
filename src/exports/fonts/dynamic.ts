import localFont from 'next/font/local';

export const workSans = localFont({
  src: [
    {
      path: '../../fonts/dynamic/work_sans/regular.ttf',
      style: 'normal',
    },
    {
      path: '../../fonts/dynamic/work_sans/italic.ttf',
      style: 'italic',
    },
  ],
});
