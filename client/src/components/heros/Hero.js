import React from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'
import { Card } from 'material-ui/Card'

import heroContainer from '../../containers/heros/heroContainer'
import Buttons from '../buttons/Buttons'
import Text from '../typography/Text'
import Media from '../media/Media'
import P from '../typography/P'

const Hero = ({
  heroStyle: {
    values: {
      button1Color,
      button2Color,
      button1BackgroundColor,
      button2BackgroundColor,
      h1Align,
      h1Color,
      h1TextShadow,
      h2Align,
      h2Color,
      h2TextShadow,
      h3Align,
      h3Color,
      h3TextShadow,
      mediaBorder,
      mediaElevation,
      minHeight,
    }
  },
  dispatch,
  hasButtons,
  hasText,
  hasMedia,
  item: {
    _id,
    editing,
    image,
    values: {
      backgroundColor,
      button1Text,
      button1Link,
      button2Text,
      button2Link,
      h1Text,
      h2Text,
      h3Text,
      iframe,
      pText
    }
  },
  propsForParent,
  propsForChild
}) => {
  return (
    <div {...propsForParent}>
      <Card
        id={_id}
        zDepth={0}
        {...propsForChild}
        className="hero"
      >
        {hasMedia &&
          <Media
            image={image}
            iframe={iframe}
          />
        }
        {hasText &&
          <Text
            h1Align={h1Align}
            h2Align={h2Align}
            h3Align={h3Align}
            h1Color={h1Color}
            h2Color={h2Color}
            h3Color={h3Color}
            h1Text={h1Text}
            h2Text={h2Text}
            h3Text={h3Text}
            h1TextShadow={h1TextShadow}
            h2TextShadow={h2TextShadow}
            h3TextShadow={h3TextShadow}
          />
        }
        && <P>{renderHTML(pText)}</P>}
        {hasButtons &&
          <Buttons
            button1BackgroundColor={button1BackgroundColor}
            button2BackgroundColor={button2BackgroundColor}
            button1Color={button1Color}
            button2Color={button2Color}
            button1Link={button1Link}
            button2Link={button2Link}
            button1Text={button1Text}
            button2Text={button2Text}
            dispatch={dispatch}
          />
        }
      </Card>
    </div>
  )
}

Hero.propTypes = {
  dispatch: PropTypes.func.isRequired,
  hasButtons: PropTypes.bool.isRequired,
  hasText: PropTypes.bool.isRequired,
  hasMedia: PropTypes.bool.isRequired,
  heroStyle: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
}

export default heroContainer(Hero)
