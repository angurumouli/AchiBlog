import ReadersNav from '../../components/ReaderNavBar'
import ArticleMain from '../../components/ArticleMain'
import { MediumContext } from '../../context/MediumContext'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const styles = {
    content: `flex-col`,
    article: `flex items-center justify-center max-w-[80rem] bg-[#ffffff]`,
    artWrapper: `flex items-center justify-center bg-[#DEE2E6]`
}

const Post = () => {
    const { posts, users } = useContext(MediumContext)
    const router = useRouter()

    const [post, setPost] = useState([])
    const [author, setAuthor] = useState([])

    useEffect(() => {

        if (posts.length === 0 || users.lenght === 0) {
            return
        }

        // console.log(router.query.slug,"Gun Gun Gun")

        setPost(posts.find(post => post.id === router.query.slug))

        // console.log(users,"just fire fire fire")
        setAuthor(users.find(user => user.id === post.data?.author), 'MoneyFace')

    }, [post])

    return (
        <>
            <div className={styles.content} >
                <ReadersNav author={author} />
                <div className={styles.artWrapper}>
                    <div className={styles.article}>
                        <ArticleMain post={post} author={author} key={post.id} />
                    </div>
                     
                </div>
            </div>
        </>
    )
}
export default Post