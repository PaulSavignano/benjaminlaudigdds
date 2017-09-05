import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const heroContainer = (ComposedComponent) => {
  class HeroContainer extends Component {
    state = {
      propsForParent: null,
      propsForChild: null
    }
    handleProps = (item) => {
      const { alignItems, minHeight } = this.props.heroStyle.values
      const {
        _id,
        backgroundImage,
        values: {
          backgroundColor,
        }
      } = item
      const propsForParent = {
        style: {
          alignItems,
          backgroundImage: backgroundImage.src && `url(${backgroundImage.src})`,
          backgroundColor,
          display: 'flex',
          flex: '1 1 auto',
          justifyContent: 'center',
          minHeight,
          position: 'absolute',
          width: '100%'
        },
        className: backgroundImage.src ? 'hero background-image' : 'hero'
      }
      const propsForChild = {
        style: {
          margin: '0 auto',
          backgroundColor: 'transparent',
        }
      }
      this.setState({ propsForParent, propsForChild })
    }
    componentWillMount() {
      this.handleProps(this.props.item)
    }
    componentWillReceiveProps(nextProps) {
      this.handleProps(nextProps.item)
    }
    render() {
      const {
        propsForParent,
        propsForChild
      } = this.state
      const {
        heroStyle,
        dispatch,
        hasButtons,
        hasHeading,
        hasMedia,
        hasParagraph,
        isFetching,
        item,
        typography
      } = this.props
      const props = {
        heroStyle,
        dispatch,
        hasButtons,
        hasHeading,
        hasMedia,
        hasParagraph,
        item,
        propsForParent,
        propsForChild,
        typography
      }
      return (
        isFetching ? null : <ComposedComponent {...props} />
      )
    }
  }
  const mapStateToProps = ({
    brand: { isFetching, heroStyle, typography }
  }, {
    item
  }) => ({
    heroStyle,
    hasButtons: item.values.button1Text ? true : false,
    hasHeading: item.values.h1Text || item.values.h2Text || item.values.h3Text ? true : false,
    hasMedia: item.image.src || item.values.iframe ? true : false,
    hasParagraph: item.values.pText && item.values.pText.length > 8 ? true : false,
    isFetching,
    item,
    typography
  })
  HeroContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    hasButtons: PropTypes.bool.isRequired,
    hasHeading: PropTypes.bool.isRequired,
    hasMedia: PropTypes.bool.isRequired,
    hasParagraph: PropTypes.bool.isRequired,
    heroStyle: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    typography: PropTypes.object.isRequired
  }
  return connect(mapStateToProps)(HeroContainer)
}

export default heroContainer
