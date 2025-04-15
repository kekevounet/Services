import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react'
function NavBar () {
  //Etat
  const [BarOpen, setBarOpen] = useState(true)
  //Comportement

  //Affichage
  return (
    <div className='text-white'>
      <AnimatePresence>
        {BarOpen && (
          <motion.div
            className='fixed top-0 flex items-center justify-center w-full h-72 md:h-20 bg-slate-800'
            style={{ boxShadow: '0px 27px 10px -29px rgba(255,255,255,0.75' }}
            initial={{opacity:0,translateY:'-100%'}}
            animate={{opacity:1, translateY:0,  transition: { duration: 1 }}}
          >
            <div className='absolute left-5'>
              <i className='text-5xl fab fa-angellist'></i>
            </div>
            <div className='flex justify-between items-center w-[40%]  md:flex-row flex-col'>
              <Link
                className='p-3 text-lg text-center text-white no-underline transition-all rounded-lg hover:bg-slate-700 hover:border-b-2 w-36'
                to='/'
              >
                <i className='mr-3 fas fa-building'></i> Accueil
              </Link>
              <Link
                className='p-3 text-lg text-center text-white no-underline transition-all rounded-lg hover:bg-slate-700 hover:border-b-2 w-36'
                to='/Services'
              >
                <i className='mr-3 fas fa-business-time'></i> Services
              </Link>
              <Link
                className='p-3 text-lg text-center text-white no-underline transition-all rounded-lg hover:bg-slate-700 w-36 hover:border-b-2'
                to='/About'
              >
                <i className='mr-3 fas fa-address-card'></i> About
              </Link>
              <div
                className='p-3 text-lg text-center text-white no-underline transition-all rounded-lg cursor-not-allowed hover:bg-slate-700 hover:border-b-2 w-36'
                to='/Contact'
              >
                <i className='mr-3 fas fa-envelope'></i> Contact
              </div>
            </div>
            <div className='absolute md:hidden right-5'>
              <i
                className='text-3xl cursor-pointer fas fa-xmark'
                onClick={() => setBarOpen(false)}
              ></i>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!BarOpen && (
        <div className='fixed md:hidden right-3 top-3'>
          <i
            className='text-3xl cursor-pointer fas fa-bars'
            onClick={() => setBarOpen(true)}
          ></i>
        </div>
      )}
    </div>
  )
}
export default NavBar
