import NavBar from '../Composants/NavBar'
import { motion } from 'framer-motion'
function Services () {
  //Etat

  //Comportement

  //Affichage
  return (
    <div className='w-full h-screen text-white'>
      <NavBar />
      <div className='flex items-center justify-center h-full min-h-screen p-0 m-0 bg-slate-800 md:h-screen'>
        <div className='flex justify-between w-4/5 items-end h-[600px] flex-col lg:flex-row'>
          <motion.a
            href='mailto:niavo.kevin9@gmail.com?subject=Demande%20de%20service%20-%20Création%20de%20site%20web&body=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services%20de%20création%20de%20site%20web.'
            className='md:w-[30%] w-full h-[90%] bg-slate-900 p-3 rounded-lg transition-all hover:-translate-y-10 text-white no-underline my-2 lg:my-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 1, delay: 1.5 }
            }}
          >
            <div className='p-2 text-center'>Création de sites web</div>
            <hr />
            <div className='flex flex-col justify-center w-full h-[80%]'>
              <div className=''>
                Nous concevons des sites web modernes et fonctionnels, adaptés
                aux besoins de votre entreprise. Chaque projet est unique et
                nous nous assurons que le design, la fonctionnalité et
                l'optimisation sont en parfaite harmonie.
              </div>
            
              <ul>
                <li>
                  Conception responsive (compatible mobile, tablette, et bureau)
                </li>
                <li>
                  Intégration d'outils personnalisés (formulaires de contact,
                  calendriers, etc.)
                </li>
                <li>Optimisation SEO pour une meilleure visibilité</li>
                <li>
                  Mise en place d’un CMS pour faciliter la gestion du contenu
                </li>
                <li>Hébergement et maintenance</li>
              </ul>
            </div>
          </motion.a>
          <motion.a
            href='mmailto:niavo.kevin9@gmail.com?subject=Demande%20de%20service%20-%20Maintenance%20PC&body=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services%20de%20maintenance%20PC.'
            className='md:w-[30%] w-full h-[90%] bg-slate-900 p-3 rounded-lg transition-all hover:-translate-y-10 text-white no-underline my-2 lg:my-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 1, delay: 2 }
            }}
          >
            <div className='p-2 text-center'>
              Maintenance et dépannage informatique
            </div>
            <hr />
            <div className='flex flex-col justify-center w-full h-[80%]'>
              <div className=''>
                Nous offrons des services de maintenance informatique pour
                garantir la performance et la longévité de vos appareils. Que ce
                soit pour un dépannage rapide ou une mise à jour système, nous
                nous assurons que votre matériel fonctionne de manière optimale.
              </div>
              <ul>
                <li>Dépannage et réparation de PC (hardware et software)</li>
                <li>Mise à jour et optimisation du système d’exploitation</li>
                <li>
                  Réinstallation du système d'exploitation et récupération de
                  données
                </li>
                <li>
                  Réparation des périphériques (imprimantes, scanners, etc.)
                </li>
                <li>
                  Assistance à distance pour résoudre rapidement vos problèmes
                </li>
              </ul>
            </div>
          </motion.a>
          <motion.a
            href='ailto:niavo.kevin9@gmail.com?subject=Demande%20de%20service%20-%20Montage%20vidéo%20et%20caméra&body=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services%20de%20montage%20vidéo%20et%20caméra.'
            className='md:w-[30%] w-full h-[90%] bg-slate-900 p-3 rounded-lg transition-all hover:-translate-y-10 text-white no-underline my-2 lg:my-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 1, delay: 2.5 }
            }}
          >
            <div className='p-2 text-center'>
              Montage vidéo et services caméra
            </div>
            <hr />
            <div className='flex flex-col justify-center w-full h-[80%]'>
              <div className=''>
                Nous offrons des services de montage vidéo professionnel ainsi
                que de tournage avec caméra pour vos projets. Nous transformons
                vos vidéos brutes en productions de haute qualité adaptées à vos
                besoins.
              </div>
              <ul>
                <li>
                  Montage vidéo professionnel (coupe, effets, transitions, etc.)
                </li>
                <li>
                  Création de vidéos à partir de rushes (documentaires,
                  publicités, événements)
                </li>
                <li>
                  Prise en charge de l'enregistrement vidéo avec équipement
                  professionnel
                </li>
                <li>Ajout d'effets spéciaux et d'animations graphiques</li>
                <li>
                  Exportation des vidéos dans différents formats adaptés à vos
                  besoins
                </li>
              </ul>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  )
}
export default Services
