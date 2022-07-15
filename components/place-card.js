import React from 'react'

import PropTypes from 'prop-types'

const PlaceCard = (props) => {
  return (
    <>
      <div className={`place-card-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image}
          className="place-card-image"
        />
        <img
          alt={props.image_alt1}
          src={props.image1}
          className="place-card-image1"
        />
      </div>
      <style jsx>
        {`
          .place-card-container {
            width: 300px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .place-card-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: var(--dl-space-space-halfunit);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .place-card-image1 {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .place-card-root-class-name {
            width: 320px;
          }
          .place-card-root-class-name1 {
            width: 320px;
          }
          .place-card-root-class-name2 {
            width: 320px;
          }
          .place-card-root-class-name3 {
            width: 320px;
          }
          .place-card-root-class-name4 {
            width: 320px;
          }
          .place-card-root-class-name5 {
            width: 320px;
          }
          .place-card-root-class-name6 {
            width: 320px;
          }
          .place-card-root-class-name7 {
            width: 320px;
          }
          .place-card-root-class-name8 {
            width: 320px;
          }
          .place-card-root-class-name9 {
            width: 320px;
          }
          .place-card-root-class-name10 {
            width: 320px;
          }
          .place-card-root-class-name11 {
            width: 320px;
          }
          @media (max-width: 767px) {
            .place-card-container {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .place-card-container {
              width: 300px;
            }
          }
        `}
      </style>
    </>
  )
}

PlaceCard.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  image_alt1: 'image',
  image_alt: 'image',
  image1:
    'https://www.turbovirtual.com/playground_assets/etherfelis-logo-200h.png',
  rootClassName: '',
}

PlaceCard.propTypes = {
  image: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  image1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PlaceCard
