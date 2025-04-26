import me_info from '../../Assets/me_info.png';
import NavBar from '../Composants/NavBar'
import { motion } from 'framer-motion'
function About () {
  return (
    <div className='w-full h-screen text-white bg-slate-800'>
      <NavBar />
      <div className='flex items-center justify-center h-screen'>
        <div className='flex lg:flex-row flex-col justify-between w-4/5 items-center h-[600px]'>
          <motion.div
            className='w-full md:w-[45%] h-full flex flex-col justify-center items-center'
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 1, delay: 1 }
            }}
          >
            <p className='text-center'>
              Nous sommes une entreprise dédiée à l'innovation technologique et
              au leadership stratégique. Notre mission est de proposer des
              solutions numériques fiables, modernes et efficaces, adaptées aux
              besoins des entreprises d’aujourd’hui et de demain.
            </p>
            <div className='text-center'>
              Grâce à notre expertise, nous aidons nos clients à transformer
              leurs idées en produits digitaux performants et durables.
            </div>
          </motion.div>
          <motion.div
            className='w-full md:w-[45%] h-full '
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 1, delay: 1.5 }
            }}
          >
            <img
              src={me_info}
              alt=''
              className='hidden rounded-lg md:block'
              style={{ scale: '0.5' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default About
