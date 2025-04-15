import { Link } from 'react-router-dom'
import NavBar from '../Composants/NavBar'
import { motion } from 'framer-motion'
function Accueil () {
  //Etat

  //Comportement

  //Affichage
  return (
    <div className='w-full h-screen text-white bg-slate-800'>
      <NavBar />
      <div className='flex justify-center items-center h-[90%] w-full container flex-col'>
        <div className='absolute flex justify-around w-full lg:right-5 bottom-20 lg:bottom-auto lg:flex-col md:w-10'>
          <motion.a
            href='https://www.facebook.com/profile.php?id=61568986044948'
            target='_blank'
            className='text-4xl text-white no-underline fab fa-facebook-square lg:mt-5'
            initial={{ opacity: 0, translateX: '100%' }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: { duration: 1, delay: 1 }
            }}
          ></motion.a>
          <motion.a
            href='https://www.linkedin.com/in/kevin-niavo-39a541286/'
            target='_blank'
            className='text-4xl text-white no-underline fab fa-linkedin lg:mt-5'
            initial={{ opacity: 0, translateX: '100%' }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: { duration: 1, delay: 1.5 }
            }}
          ></motion.a>
          <motion.a
            href='https://wa.me/261389423351?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services.'
            target='_blank'
            className='text-4xl text-white no-underline fab fa-whatsapp-square lg:mt-5'
            initial={{ opacity: 0, translateX: '100%' }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: { duration: 1, delay: 2 }
            }}
          ></motion.a>
          <motion.a
            href='mailto:niavo.kevin9@gmail.com?subject=Demande%20de%20service&body=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.'
            target='_blank'
            className='fas fa-envelope text-[32px] lg:mt-5  no-underline text-white'
            initial={{ opacity: 0, translateX: '100%' }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: { duration: 1, delay: 2.5 }
            }}
          ></motion.a>
        </div>
        <motion.h1
          className='mt-5 text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 3 } }}
        >
          Solution for Technology Innovation and Logical Leadership
        </motion.h1>
        <motion.h6
          className='w-1/2 mt-2 mb-5 text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 3.5 } }}
        >
          Nous sommes une entreprise dédiée à l'innovation technologique et au
          leadership stratégique. Notre mission est de proposer des solutions
          numériques fiables, modernes et efficaces, adaptées aux besoins des
          entreprises d’aujourd’hui et de demain. Grâce à notre expertise, nous
          aidons nos clients à transformer leurs idées en produits digitaux
          performants et durables.
        </motion.h6>
        <motion.span
          className='flex justify-center w-full mt-5'
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1, delay: 4 }
          }}
        >
          <Link
            className=' bg-slate-500 p-3 text-white rounded-lg font-bold no-underline text-center md:w-[25%] mr-2 hover:bg-slate-400 transition-all'
            to='/Services'
          >
            Voir nos services
          </Link>
          <a
            href='mailto:niavo.kevin9@gmail.com?subject=Demande%20de%20service&body=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.'
            className=' bg-red-50 p-3 text-black rounded-lg no-underline font-bold md:w-[25%] text-center ml-2 animate-pulse hover:bg-slate-500 transition-all'
          >
            Contactez-nous
          </a>
        </motion.span>
        <motion.footer
          className='absolute bottom-0 flex items-center justify-center w-full h-16 border-t-2 boder-white'
          initial={{ opacity: 0, translateY: '100%' }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 1, delay: 4.5 }
          }}
        >
          &copy; Still development
        </motion.footer>
      </div>
    </div>
  )
}
export default Accueil
