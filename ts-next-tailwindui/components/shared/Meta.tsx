import Head from "next/head";


const init = {
    title: `${process.env.NEXT_PUBLIC_NAME} - Kho theme đa dạng, Mua theme WP tiếng Việt đẹp`,
    description: `${process.env.NEXT_PUBLIC_NAME} - đã tư vấn và thiết kế cho hơn 10.000 khách hàng giúp doanh nghiệp tăng doanh thu và xây dựng thương hiệu bền vững`,
    url: typeof window !== 'undefined' ? window.location.href : process.env.NEXT_PUBLIC_URL,
    site: process.env.NEXT_PUBLIC_NAME,
    image: `${process.env.NEXT_PUBLIC_URL}/kho-theme.jpg`,
    logo: {
        512: `${process.env.NEXT_PUBLIC_URL}/kho-theme.jpg`,
        192: `${process.env.NEXT_PUBLIC_URL}/kho-theme.jpg`,
        32: `${process.env.NEXT_PUBLIC_URL}/kho-theme.jpg`,
    },
    facebook: {
        page: process.env.NEXT_PUBLIC_FB_PAGE || `https://www.facebook.com/profile.php?id=100042199030094`,
        profile: process.env.NEXT_PUBLIC_FB_PROFILE || `https://www.facebook.com/profile.php?id=100042199030094`,
    },
    twitter: {
        creator: process.env.NEXT_PUBLIC_TW_CREATOR || `@FibeTien`,
        site: process.env.NEXT_PUBLIC_TW_SITE || `@FibeTien`,
        by: process.env.NEXT_PUBLIC_TW_BY || `Nguyễn Tiến`,
    }
}

interface IArticleMeta {
    title?: string;
    image?: string;
    description?: string;
    canonical?: string;
    createdAt?: string;
    updatedAt?: string;
}

interface IHomeMeta {
    title?: string;
    image?: string;
    description?: string;
}

export class Meta {
    static Home({title, image, description}: IHomeMeta) {
        title = title ? `${title} - ${init.site}` : init.title;
        return (
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="description" content={description || init.description}/>
                <meta property="og:locale" content="vi_VN"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={init.site}/>
                <meta property="og:description" content={description || init.description}/>
                <meta property="og:url" content={init.url}/>
                <meta property="og:site_name" content={init.site}/>
                <meta property="og:image" content={image || init.image}/>
                <meta property="og:image:width" content="2476"/>
                <meta property="og:image:height" content="1064"/>
                <meta property="og:image:type" content="image/png"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content={init.twitter.site}/>
                <meta name="generator" content="WordPress 5.9.1"/>
                <meta name="msapplication-TileImage" content={init.logo["512"]}/>

                <link rel="canonical" href={init.url}/>
                <link rel="profile" href="https://gmpg.org/xfn/11"/>
                <link href={init.logo["32"]} rel="shortcut icon"/>
                <link rel="icon" href={init.logo["32"]} sizes="32x32"/>
                <link rel="icon" href={init.logo["192"]} sizes="192x192"/>
                <link rel="apple-touch-icon" href={init.logo["512"]}/>
                {/*<link rel="next" href="https://seongon.com/page/2"/>
                <link rel="https://api.w.org/" href="https://seongon.com/wp-json/" />
                <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://seongon.com/xmlrpc.php?rsd" />
                <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://seongon.com/wp-includes/wlwmanifest.xml" />*/}
            </Head>
        )
    }

    static Article({title, canonical, description, image, createdAt, updatedAt}: IArticleMeta) {
        title = title + ' | ts-next-tailwindui';
        return (
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="description" content={description}/>
                <meta property="og:locale" content="vi_VN"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:url" content={canonical}/>
                <meta property="og:site_name" content={init.site}/>
                <meta property="article:publisher" content={init.facebook.page}/>
                <meta property="article:author" content={init.facebook.profile}/>
                <meta property="article:published_time" content={createdAt}/>
                <meta property="article:modified_time" content={updatedAt}/>
                <meta property="og:image" content={image}/>
                <meta property="og:image:width" content="512"/>
                <meta property="og:image:height" content="366"/>
                <meta property="og:image:type" content="image/jpeg"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:creator" content={init.twitter.creator}/>
                <meta name="twitter:site" content={init.twitter.site}/>
                <meta name="twitter:label1" content="Được viết bởi"/>
                <meta name="twitter:data1" content={init.twitter.by}/>
                <meta name="twitter:label2" content="Ước tính thời gian đọc"/>
                <meta name="twitter:data2" content="12 phút"/>
                <meta name="generator" content="WordPress 5.9.1"/>

                <link rel="canonical" href={init.url}/>
                <link rel="profile" href="https://gmpg.org/xfn/11"/>
                <link href={init.logo["32"]} rel="shortcut icon"/>
                <link rel="icon" href={init.logo["32"]} sizes="32x32"/>
                <link rel="icon" href={init.logo["192"]} sizes="192x192"/>
                <link rel="apple-touch-icon" href={init.logo["512"]}/>
            </Head>
        );
    }
}