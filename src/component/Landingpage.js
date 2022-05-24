import React from 'react'
import { Link } from 'react-router-dom';
import './Landingpage.css'

export const Landingpage = () => {
     return (
          <>
               <div className='container'>
                    <div className='header'>
                         <div className='nav hidden'>
                              <nav>
                                   <ul>
                                        <li className='btn-build'><Link className='link build' to="/steps">Build my Resume</Link></li>
                                        <li className='btn-sign'><Link className='link sign' to="/sign">Sign</Link></li>
                                   </ul>
                              </nav>
                         </div>
                         <h1 class="icon">Resume<span> Builder</span></h1>
                    </div>
               </div>
          </>
     );
}
