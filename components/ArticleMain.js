import Image from "next/image";
// import Qazi from '../static/qazi.jpg'
import { AiFillPlayCircle } from "react-icons/ai" 


const styles = {
    wrapper: `flex justify-center border-l border-r overflow-scroll`,
    content: `h-screen w-full p-[2rem]`,
    postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
    authorContainer: `flex gap-[1rem]`,
    authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
    column: `flex flex-[1] flex-col justify-center`,
    postDetails: `flex gap-[.2rem] text-[#787878]`,
    listenButton: `flex items-center text-[#1A8917] gap-[.2rem] `,
    socialIcons: `flex gap-[1rem] text-[#787878] cursor-pointer ml-[1rem]`,
    space: `w-[.5rem]`,
    bannerContainer: `  grid center overflow-hidden mb-[2rem]`,
    articleMainContainer: `flex flex-col gap-[1rem]`,
    image: `object-cover`,
    title: `font-bold text-3xl `,
    subTitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929 ]`,
    articleText: `font-mediumSerif text-[1.4rem] text-[#292929]`,
}

const ArticleMain = ({ post, author }) => {
 
    
    return (
        <>
        
            <div className={styles.wrapper}>
                <div className={styles.content} >
                    <div className={styles.postHeaderContainer}>
                        <div className={styles.authorContainer}>
                            <div className={styles.authorProfileImageContainer}>
                                <Image
                                // https://www.w3schools.com/images/picture.jpg
                                    // src={Qazi}
                                    src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`}
                                    className={'object-cover'}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className={styles.column}>
                                <div>{author?.data?.name}</div>
                                <div className={styles.postDetails}>
                                    <span>{new Date(post?.data?.postedOn).toLocaleDateString('en-IN', {
                                    month: 'long',
                                    day: 'numeric',
                                })} . {post?.data?.postLength} min read . </span><span className={styles.listenButton}>
                                        <AiFillPlayCircle /> Listen
                                    </span>
                                </div>
                            </div>
                        </div>
                         
                    </div>
                    <div className={styles.articleMainContainer}>
                        <div className={styles.bannerContainer}>
                            <Image
                                src={`https://res.cloudinary.com/demo/image/fetch/${post?.data?.bannerImage}`}
                                className={styles.image}
                                height={500}
                                width={500}
                            />
                        </div>
                        <h1 className={styles.title}> {post?.data?.title} </h1>
                        <h4 className={styles.subTitle}>
                            <div>
                                {author?.data?.name} , {' '}
                                {new Date(post?.data?.postedOn).toLocaleDateString('en-IN', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </div>
                            {/* <div className={styles.brief}> {post?.data?.brief}</div> */}
                        </h4>
                        <div className={styles.articleText}>
                            {post?.data?.body}

                        </div>
                    </div>
                </div>
            </div>
         
        </>
    )
}

export default ArticleMain;