import React from "react";
import { Helmet } from "react-helmet";

export default class SEO extends React.Component {


    render() {

        const SeoContent = [
            {
                title: "%s | https://portfolio.esnault.app/",
                description: "je suis un développeur qui souhaite évoluer dans un monde cohérant ou la technologie peut apporter un soutient dans les besoins de chacun tout en pensant a l'éccologie et du développement durables "
            }
        ];

        return (


            <Helmet
                titleTemplate={SeoContent.title}

            >
                <html lang="fr" />

                <meta charset="utf-8" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="je suis un développeur qui souhaite évoluer dans un monde cohérant ou la technologie peut apporter un soutient dans les besoins de chacun tout en pensant a l'éccologie et du développement durables " />

                <script src="https://kit.fontawesome.com/b1c274f128.js" crossorigin="anonymous"></script>

                <title>ESNAULT JEROME</title>

                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-102282699-1"></script>
                <meta http-equiv="Content-Type" content="application/x-font-woff" />


                {/* <meta name="google-site-verification" content="xrESO8fpu4QhsrLd6fdyNamdnWO_3Yw1DZW_xxLcC2A"> */}
                {/* <meta name="author" content="esnault jerome, JEsnault"> */}
                {/* <meta name="Keywords" content="portfolio, gmanzola, Referencement web, Gael Manzola, Developpeur web, Symfony, BTS SIO, Développeur Java, Mobile, Android, Informatique, Master, chef de projet Digital">
                    <meta name="Robots" content="all">
                        <link rel="icon" href="https://www.gmanzola.fr/favicon.ico" type="image/x-icon">
                            <link rel="shortcut icon" href="https://www.gmanzola.fr/favicon.ico" type="image/x-icon">
                                <meta property="og:title" content="Gael MANZOLA étudiant et développeur web | Java | Mobile à Paris. Création de sites internet responsive.">
                                    <meta property="og:type" content="Portfolio Gael MANZOLA étudiant et développeur web ">
                                        <meta property="og:url" content="https://www.gmanzola.fr"> */}

            </Helmet>


        );
    }
};


