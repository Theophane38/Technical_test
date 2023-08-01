import {Link, useLocation} from "react-router-dom";
import {routes} from "../config/routes";

const Layout = ({children}) => {
    const location = useLocation()

  return (
      <div>
          <div
              className='w-full bg-top bg-no-repeat bg-cover h-[37.2vw] hidden md:block'
              style={{ backgroundImage: 'url(https://www.eldo.com/_next/static/media/pro-shape-desktop.3fd75d67f9e8c00f2f73abfb837e4e14.png)'}}
          />
          <div className=' max-w-[1280px] mx-auto md:-mt-[37.2vw] pt-[20px] px-[32px]'>
              <div className='flex justify-between items-center md:mb-[60px] md:flex-row flex-col space-y-[32px] md:space-y-0' >
                  <h1 className='md:text-white text-[2rem] font-bold'>Test technique Théophane Duval</h1>
                  <a href='https://github.com/Theophane38/Technical_test' target='_blank' className='space-x-[16px] text-[1.125rem] py-[20px] px-[40px] rounded-[110px] bg-white text-[#0b5351] font-bold flex items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill='#0b5351'/>
                      </svg>
                      <span>Voir le Github</span>
              </a>
              </div>
              {location.pathname !== '/' ? <Link to={routes.home} className='hover:underline lg:text-white text-[#0b5351]'>← Retour à la liste des tests</Link> : null}
              <div className='md:pt-[100px]'>{children}</div>
          </div>
      </div>
  )
}

export default Layout
