import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet"

const Head = ({
  description,
  googleSiteVerification,
  keywords,
  name,
  image,
  isFetching
}) => (
  isFetching ? null :
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="google-site-verification" content={googleSiteVerification} />
    {name && <title>{name}</title>}
    {description && <meta name="description" content={description} />}
    {keywords && <meta name="keywords" content={keywords} />}
    {image && image.src ? <link rel="apple-touch-icon" sizes="180x180" href={image.src} /> : null }
    {image && image.src ? <link rel="icon" type="image/png" href={image.src} sizes="32x32" /> : null}
    {image && image.src ? <link rel="icon" type="image/png" href={image.src} sizes="16x16" /> : null }
    <link rel="canonical" href={window.location.hostname} />
  </Helmet>
)

const mapStateToProps = ({
  brand: {
    business: {
      image,
      values: {
        description,
        googleSiteVerification,
        keywords,
        name,
      }
    },
    isFetching,
  }
}) => ({
  description,
  googleSiteVerification,
  keywords,
  image,
  isFetching,
  name
})

Head.propTypes = {
  description: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  googleSiteVerification: PropTypes.string,
  image: PropTypes.object,
  keywords: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  name: PropTypes.string,
}

export default connect(mapStateToProps)(Head)
