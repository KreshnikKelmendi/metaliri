import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Metali Ri"}
                </title>
            </Head>
        </>
    )
}

export default PageHead