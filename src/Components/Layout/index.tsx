import { ReactElement } from "react";

const Layout = ({children} : {children: ReactElement}): ReactElement => {
  return (
    <div className='flex flex-col items-center mt-20'>
      {children}
    </div>
  );
};

export default Layout;