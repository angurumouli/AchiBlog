import Image from 'next/image'
// import logo from '../static/logo.png'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '/firebase'


const styles = {
    wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer border border-black p-4 bg-[#ffffff]`,
    authorConatiner: `flex gap-[.4rem]`,
    authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    authorImage: `object-cover`,
    authorName: `font-semibold`,

    title: `font-bold text-2xl`,
    breifing: `text-[#787878]`,
    detailesContainer: `flex items-center justify-between text-[#787878]`,
    articleDetailes: `my-2 text-[.8rem]`,
    category: `bg-[#F2F3F2] p-1 rounded-full`,
    bookMarkContainer: `cursor-pointer`,
    postDetailes: `flex-[2.5] flex flex-col`,
}

const PostCard = ({ post }) => {

    const [authorData, setAuthorData] = useState(null)

    useEffect(() => {
        const getAuthorData = async () => {

            (await getDoc(doc(db, 'users', post.data.author))).data()

            setAuthorData(
                (await getDoc(doc(db, 'users', post.data.author))).data()
            )
        }
        getAuthorData()
    }, [])

    return (
        <>
            <Link href={`/post/${post.id}`}>
                <div className={styles.wrapper} id='postCardId'>
                    <div className={styles.postDetailes}>
                        <div className={styles.authorConatiner}>
                            <div className={styles.authorImageContainer}>
                                <Image
                                    src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                                    className={styles.authorImage}
                                    width={40}
                                    height={40}
                                />
                            </div>

                            <div className={styles.authorName}>
                                {authorData?.name}
                            </div>
                        </div>
                        <h1 className={styles.title}>{post.data.title}</h1>
                        <div className={styles.breifing}>
                            {post.data.brief}
                        </div>


                        <div className={styles.detailesContainer}>
                            <span className={styles.articleDetailes}>
                                {new Date(post.data.postedOn).toLocaleString('en-IN', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                })} • &nbsp;
                                {post.data.postLength} min read •
                                <span className={styles.category}>{post.data.category}</span>
                            </span>

                            <span className={styles.bookMarkContainer}>
                                {/* <FiBookmark className='h-5 w-5' /> */}
                            </span>
                        </div>
                    </div>

                    <div className={styles.thumbnailContainer}>
                        <Image
                            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
                            height={100}
                            width={100}
                        />
                    </div>
                </div>
            </Link>
        </>
    )
}
export default PostCard;

