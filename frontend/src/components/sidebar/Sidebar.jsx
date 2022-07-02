import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

  const { pathname } = useLocation();

  const sidebarMenu = [
    { path: '/', title: 'Home' },
    // { path: '/users', title: 'Users' },
    // { path: '/books', title: 'Books' },
    { path: '/about', title: 'About' },
  ]

  return (
    <div className='w-1/5 bg-darkBlue h-screen p-3 relative'>
      <h2 className='text-white text-3xl font-bold'>My Library</h2>
      <p className='text-white text-sm mt-1'>Library Management System</p>
      <hr className='text-white mt-2' />
      <div className='mt-5'>
      {sidebarMenu.map(({ path, title }, index) => (
            <Link 
            key={index} 
            className={ pathname === path ? 'rounded p-2 mb-2 cursor-pointer bg-white block': 'rounded p-2 mb-2 cursor-pointer text-white block hover:bg-white hover:text-black'}
            to={path}>{title}</Link>
        ))}
      </div>

      <div className='absolute bottom-4'>
        <p className='text-white text-sm'>&#169; Deepak and Sahil</p>
      </div>
    </div>
  )
}

export default Sidebar