import React, { Component } from 'react';;
// import Helmet from 'react-helmet';

// import '../assets/sass/grayscale.scss';

class Layout extends Component {
    render() {

        return (
            <div>
        {/*    <StaticQuery*/}
        {/*        query={graphql`*/}
        {/*  query SiteTitleQuery {*/}
        {/*    site {*/}
        {/*      siteMetadata {*/}
        {/*        title*/}
        {/*      }*/}
        {/*    }*/}
        {/*  }*/}
        {/*`}*/}
        {/*        render={data => (*/}
        {/*            <>*/}
        {/*                <Helmet*/}
        {/*                    title={data.site.siteMetadata.title}*/}
        {/*                    meta={[*/}
        {/*                        { name: 'description', content: 'Grayscale' },*/}
        {/*                        { name: 'keywords', content: 'site, web' },*/}
        {/*                    ]}*/}
        {/*                >*/}
        {/*                    <html lang="en" />*/}
        {/*                </Helmet>*/}
        {/*                <div className={'page-top'}>{children}</div>*/}
        {/*            </>*/}
        {/*        )}*/}
        {/*    />*/}
            </div>
        );
    }
}

export default Layout;
