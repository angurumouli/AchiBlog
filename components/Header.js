import Image from 'next/image'
import logo from '../static/logo.png'
import { useContext } from 'react'
import { MediumContext } from '@/context/MediumContext'

import Modal from 'react-modal'

import { useRouter } from 'next/router'
import Link from 'next/link'

import PostModal from '../components/PostModal'
Modal.setAppElement('#__next')


const customeStyles = {
  content:{
    top:'50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    transform:'translate(-50%,-50%)',
    backgroundColor:'#fff',
    padding:0,
    border:'none'
  },
  overlay:{
    backgroundColor:'rgba(10,11,13,0.75',
  }
}



const styles = {
  wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017]',
  content: 'max-w-7xl flex-1 flex justify-between gap-10',
  logoContainer: 'flex items-center flex-start',
  logo: 'cursor-pointer object-contain',
  bannerNav: 'flex cursor-pointer items-center space-x-7',
  accentedButton: 'bg-black text-white py-2 px-4 rounded-full cursor-pointer'
}

const Header = () => {

  const router = useRouter()

  const {currentUser, handleUserAuth } = useContext(MediumContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={logo}
            height={40}
            width={200}
          />
        </div>

        {currentUser ?
          (<div className={styles.bannerNav}>
            <p>Our Story</p>
            <p>Member Ship</p>
            <Link href={'/?addNew=1'}>
              <p className={styles.accentedButton}>Write</p>
            </Link>
            <p className={styles.accentedButton}>Get Unlimeted Access</p>
          </div>)
          : (
            <div className={styles.bannerNav}>
              <p>Our Services</p>
              <p>Member Ship</p>
              <p onClick={handleUserAuth}>Sign Innn</p>
              <p className={styles.accentedButton}>Get Started</p>
            </div>
          )
        }

      </div>
        <Modal 
          isOpen={Boolean(router.query.addNew)}
          onRequestClose={()=>router.push('/')}
          style={customeStyles}
        >
          <PostModal />
        </Modal>
    </div>
  )
}
export default Header