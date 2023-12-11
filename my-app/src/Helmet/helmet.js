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
                <meta name="description" content="pour ceux qui veulent un projet react tout pret et configurable voici mon template react " />

                <script src="https://kit.fontawesome.com/b1c274f128.js" crossorigin="anonymous"></script>

                <title>esnault-mon premier template React</title>

                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-102282699-1"></script>
                <meta http-equiv="Content-Type" content="application/x-font-woff" />



            </Helmet>


        );
    }
};


