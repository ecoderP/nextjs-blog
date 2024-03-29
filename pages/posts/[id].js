import utilStyles from '../../styles/utils.module.css';
import Head from "next/head";
import Date from '../../components/date';
import { getAllPostsIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";



export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false,
    }
}


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingX1}>{postData.title}</h1>
                <br />
                <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
                </div>
                <br /> <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}