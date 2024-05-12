// import { Button } from 'antd';
// import { ReactNode } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface Props {
//   children: ReactNode;
// }

// export const DefaultLayout = ({ children }: Props) => {
//   const navigate = useNavigate();

//   return (
//     <main>
//       <div className="max-w-[1200px] mx-auto px-2 md:px-4 xl:px-0">
//         <div className="py-4 mt-6 flex justify-between items-center">
//           {/* Logo */}
//           <h1>Frontend Boilerplate</h1>

//           {/* Menu */}
//           <ul className="flex gap-4">
//             <li>
//               <Button type="primary" ghost onClick={() => navigate('/')}>
//                 Home
//               </Button>
//             </li>
//             <li>
//               <Button type="primary" ghost onClick={() => navigate('/about')}>
//                 About
//               </Button>
//             </li>
//           </ul>
//         </div>

//         {/* Content */}
//         <div>{children}</div>
//       </div>
//     </main>
//   );
// };
