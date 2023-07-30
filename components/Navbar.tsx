import Image from 'next/image';
import NavItem from './NavItem';
import Logo from '../public/lotus.png'

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 z-50 bg-[#B9F3FC]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          <Image src={Logo} width='40' height='40' alt='/'/>
        </div>
        <div>
          <ul className="flex">
            <NavItem route='/' name='home' />
            <NavItem route='/#about' name='about' />
            <NavItem route='/#skills' name='skills' />
            <NavItem route='/#projects' name='projects' />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
