import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  name: string;
  title?: string;
  subtitle?: string;
  style?: object;
  mode?: 'EXPANDED' | 'COMPRESSED';
}
export const Section = ({
  children,
  name,
  title,
  subtitle,
  style={},
  mode = 'EXPANDED',
}: SectionProps) => {
  return (
    <section
    style={style}
      id={name}
      className={`flex flex-col items-center w-full px-2 min-h-[120vh]
       justify-center md:min-h-screen lg:min-h-[80vh]
       ${
         mode === 'EXPANDED' ? 'my-16 lg:min-h-[80vh]' : `my-0 lg:min-h-[40vh]`
       } 2xl:my-0 text-center`}
    >
      <h4 className="text-sm font-bold text-white px-10">{title}</h4>
      <h2 className="text-3xl lg:text-4xl font-bold mb-10 px-10">{subtitle}</h2>
      {children}
    </section>
  );
};
