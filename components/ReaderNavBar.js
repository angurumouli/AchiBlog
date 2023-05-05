import Image from "next/image"
import logo from '../static/logo.svg'
import Link from "next/link"

import { useContext } from 'react'
import { MediumContext } from '@/context/MediumContext'
import { useRouter } from 'next/router'

import Modal from 'react-modal'
Modal.setAppElement('#__next')

import PostModal from '../components/PostModal'

 


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
    wrapper: 'flex justify-center gap-10 p-5 bg-[#DEE2E6]',
    content: 'max-w-7xl flex-1 flex justify-between gap-10',
    logoContainer: 'flex items-center flex-start flex-col',
    logo: 'cursor-pointer object-contain',
    bannerNav: 'flex cursor-pointer items-center space-x-7',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full cursor-pointer'
}

const ReaderNavBar = () => {    

    const router = useRouter()
    const {currentUser, handleUserAuth } = useContext(MediumContext)

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Link href="/">
                        <div className={styles.logoContainer}>
                            <Image
                                className={styles.logo}
                                src={logo}

                            />
                            <p>ArcusHub</p>
                        </div>
                    </Link>

                    {currentUser ?
                    (<div className={styles.bannerNav}>
                        <p>Home</p>
                        <p>Our Services</p>
                        <p className={styles.accentedButton}>Blog Post</p>
                        <Link href={'/?addNewPage=1'}>
                            <p className={styles.accentedButton}>Write</p>
                        </Link>
                    </div>)
                     : (
                        <div className={styles.bannerNav}>
                        <p>Home</p>
                        <p>Our Services</p>
                        <p className={styles.accentedButton}>Blog Post</p>
                        <p onClick={handleUserAuth} className={styles.accentedButton}>Sign In</p>
                    </div>
                    )

                    }
                </div>
                 <Modal
                    isOpen={Boolean(router.query.addNewPage)}
                    onRequestClose={()=>router.push('/')}
                    style={customeStyles}
                 >
                    <PostModal />
                 </Modal>

            </div>
            

        </>
    )
}

export default ReaderNavBar