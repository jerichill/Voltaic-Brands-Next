import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Digital Goods for Crypto-Natives | VOLTAIC Brands™</title>
          <meta
            name="description"
            content="VOLTAIC Brands is a designer and distributer of innovative digital goods, collectibles, and merchandise for the next generation of consumers."
          />
          <meta
            property="og:title"
            content="Digital Goods for Crypto-Natives | VOLTAIC Brands™"
          />
          <meta
            property="og:description"
            content="VOLTAIC Brands is a designer and distributer of innovative digital goods, collectibles, and merchandise for the next generation of consumers."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1db061e4-ab2f-4c92-8ac0-93b75c2334a5/bc7bb89d-dc00-4857-8f14-2762d9f3ffe0?org_if_sml=1"
          />
        </Head>
        <div className="home-top-container">
          <nav data-role="Header" className="home-navbar">
            <a href="https://www.voltaicbrands.com" className="home-logo">
              <span className="home-text">
                VOLTAIC
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text01">Brands</span>
            </a>
            <span className="home-text02">TM</span>
            <div className="home-right-side">
              <div className="home-links-container">
                <span className="home-text03 menu">Home</span>
                <span className="home-text04 menu">About</span>
                <span className="home-text05 menu">Tour Packages</span>
                <span className="home-text06 menu">Contact</span>
              </div>
              <a href="#main-section">
                <SolidButton button="Explore places"></SolidButton>
              </a>
            </div>
            <div data-type="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-burger-menu">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
            <div data-type="MobileMenu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <h1>Travel</h1>
                  <div data-type="CloseMobileMenu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon03">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="home-right-side1">
                  <div className="home-links-container1">
                    <span className="home-text07">Home</span>
                    <span className="home-text08">About</span>
                    <span className="home-text09">Tour Packages</span>
                    <span>Contact</span>
                  </div>
                  <a href="#main-section" className="home-link01">
                    <SolidButton button="Explore places"></SolidButton>
                  </a>
                </div>
              </div>
              <div className="home-follow-container">
                <span className="home-text11">
                  Follow us on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="home-icons-container">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link02"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon05"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link03"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon07"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link04"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon09"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="home-hero">
            <div className="home-content-container">
              <h1 className="home-text12">
                <span>
                  The Next Generation of Consumer Brands
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  Created
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>for Crypto-Natives.</span>
              </h1>
            </div>
            <video
              src="https://cdn.jwplayer.com/videos/mpxld56s-EDTMlvZe.mp4"
              loop
              muted
              poster="/playground_assets/nftteaserthumb-1000w.png"
              autoPlay
              controls
              className="home-video"
            ></video>
          </div>
        </div>
        <div id="main-section" className="home-main">
          <h2 className="home-text16">
            <span>Our Brands</span>
          </h2>
          <p className="home-subheading">
            <span className="home-text18">
              VOLTAIC
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text19">Brands</span>
            <span className="home-text20">
              {' '}
              creates innovative digital goods, collectibles, and merchandise
              for the next generation of crypto-native consumers.
            </span>
          </p>
          <div className="home-cards-container">
            <a
              href="https://www.theparksreimagined.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link05"
            >
              <PlaceCard
                city="Ploygon"
                image="https://www.theparksreimagined.com/playground_assets/utos63sbqgvmbyh63skf_wm-1200w.gif"
                image1="https://www.turbovirtual.com/playground_assets/theparkslogo-200h.png"
                rootClassName="place-card-root-class-name"
                className="home-component2"
              ></PlaceCard>
            </a>
            <a
              href="https://www.rareorbs.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link06"
            >
              <PlaceCard
                city="Ethereum &amp; Solana"
                image="https://www.rareorbs.com/playground_assets/herodvt4m1tniftn5ldsex5n-1200w.gif"
                image1="https://www.turbovirtual.com/playground_assets/rareorb-logo-trans-200h.png"
                rootClassName="place-card-root-class-name1"
                className="home-component3"
              ></PlaceCard>
            </a>
            <a
              href="https://www.radpups.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link07"
            >
              <PlaceCard
                city="Polygon"
                image="https://www.radpups.com/playground_assets/radpuplogo-1200w.gif"
                image1="https://www.turbovirtual.com/playground_assets/radpup-logo-200h.png"
                rootClassName="place-card-root-class-name2"
                className="home-component4"
              ></PlaceCard>
            </a>
            <a
              href="https://www.etherfelis.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
            >
              <PlaceCard
                city="Ethereum"
                image="https://www.etherfelis.com/playground_assets/etherfeliserc721collection-1200w.gif"
                rootClassName="place-card-root-class-name3"
                className="home-component5"
              ></PlaceCard>
            </a>
            <a
              href="https://www.sinisterassassins.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09"
            >
              <PlaceCard
                city="Binance"
                image="https://www.sinisterassassins.com/playground_assets/eiutknt2r04ieo4sso9k7uprp-1200w.gif"
                image1="https://www.turbovirtual.com/playground_assets/assassins-logo-transl-200h.png"
                rootClassName="place-card-root-class-name4"
                className="home-component6"
              ></PlaceCard>
            </a>
            <a
              href="https://www.mutantblobs.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              <PlaceCard
                city="Binance"
                image="https://www.mutantblobs.com/playground_assets/wru9otrxrrnnbhcgfv4d_4x-1200w.jpg"
                image1="https://www.turbovirtual.com/playground_assets/mutant-blobs-logos-trans-200h.png"
                rootClassName="place-card-root-class-name5"
                className="home-component7"
              ></PlaceCard>
            </a>
          </div>
        </div>
        <footer className="home-footer">
          <div className="home-menu">
            <span className="home-logo2">
              <span>
                VOLTAIC
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text22">Brands</span>
            </span>
            <div className="home-links-container2">
              <div className="home-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon11">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <a
                  href="mailto:support@turbovirtual.com?subject=VOLTAIC  Support Inquiry"
                  className="home-link11"
                >
                  Support
                </a>
              </div>
              <div className="home-container2">
                <Link href="/privacy-policy">
                  <a className="home-link12">Privacy Policy</a>
                </Link>
              </div>
              <div className="home-container3">
                <Link href="/website-terms">
                  <a className="home-link13">Disclaimer &amp; Terms</a>
                </Link>
              </div>
            </div>
            <div className="home-follow-container1">
              <span className="home-text23">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="home-icons-container1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link14"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon13"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon15"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link16"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon17"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
.home-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-top-container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  background-size: cover;
  background-image: linear-gradient(0deg, rgb(0, 0, 0) 14.00%,rgba(0, 0, 0, 0.24) 86.00%),url("https://images.unsplash.com/photo-1632220894022-a83eacddae2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxibG9ja2NoYWlufGVufDB8fHx8MTY1Nzg1NzE1OQ&ixlib=rb-1.2.1&w=1500");
  background-repeat: repeat,no-repeat;
  background-position: 0% 40%,center;
}
.home-navbar {
  width: 100%;
  display: flex;
  max-width: 1000px;
  align-self: center;
  align-items: center;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: center;
}
.home-logo {
  color: var(--dl-color-gray-white);
  font-size: 2.25rem;
  font-family: Maven Pro;
  font-weight: 700;
  line-height: 1.25;
  text-transform: none;
  text-decoration: none;
}
.home-text {
  font-family: Maven Pro;
  font-weight: 700;
  text-transform: none;
  text-decoration: none;
}
.home-text01 {
  color: var(--dl-color-gray-700);
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 400;
  text-transform: none;
  text-decoration: none;
}
.home-text02 {
  color: var(--dl-color-gray-700);
  font-size: 14px;
  align-self: flex-start;
  margin-top: 12px;
}
.home-right-side {
  display: none;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-links-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-text03 {
  color: var(--dl-color-gray-white);
  margin-right: var(--dl-space-space-doubleunit);
}
.home-text04 {
  color: var(--dl-color-gray-white);
  margin-right: var(--dl-space-space-doubleunit);
}
.home-text05 {
  color: var(--dl-color-gray-white);
  margin-right: var(--dl-space-space-doubleunit);
}
.home-text06 {
  color: var(--dl-color-gray-white);
  margin-right: var(--dl-space-space-doubleunit);
}
.home-burger-menu {
  display: none;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-burger-menu {
  width: 24px;
  height: 24px;
}
.home-mobile-menu {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  height: 100%;
  display: none;
  padding: var(--dl-space-space-doubleunit);
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.home-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-top {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-doubleunit);
  flex-direction: row;
  justify-content: space-between;
}
.home-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-icon03 {
  width: 24px;
  height: 24px;
}
.home-right-side1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.home-links-container1 {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  flex-direction: column;
  justify-content: space-between;
}
.home-text07 {
  margin-bottom: 8px;
}
.home-text08 {
  margin-bottom: 8px;
}
.home-text09 {
  margin-bottom: 8px;
}
.home-link01 {
  display: contents;
}
.home-follow-container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.home-text11 {
  padding-bottom: var(--dl-space-space-halfunit);
}
.home-icons-container {
  width: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.home-link02 {
  display: contents;
}
.home-icon05 {
  width: 24px;
  height: 24px;
}
.home-link03 {
  display: contents;
}
.home-icon07 {
  width: 24px;
  height: 24px;
}
.home-link04 {
  display: contents;
}
.home-icon09 {
  width: 24px;
  height: 24px;
}
.home-hero {
  flex: 1;
  width: 100%;
  display: flex;
  max-width: 1000px;
  align-items: center;
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  justify-content: center;
}
.home-content-container {
  display: flex;
  max-width: 1280px;
  align-items: center;
  padding-top: var(--dl-space-space-tripleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
  justify-content: flex-start;
}
.home-text12 {
  color: var(--dl-color-gray-white);
  font-size: 2.5rem;
  text-align: center;
  font-family: Maven Pro;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: var(--dl-space-space-halfunit);
  text-transform: none;
  text-decoration: none;
}
.home-video {
  width: 60%;
  height: auto;
  border-color: #666;
  border-width: var(--dl-size-size-halfunit);
  border-radius: var(--dl-radius-radius-radius8);
}
.home-main {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-tripleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-quadruple);
  background-size: cover;
  justify-content: flex-start;
  background-image: linear-gradient(180deg, rgb(0, 0, 0) 2.00%,rgba(0, 0, 0, 0.55) 78.00%),url("https://images.unsplash.com/photo-1528484593357-bb6777320d96?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGxpZ2h0bmluZ3xlbnwwfHx8fDE2NTc5MTAxMTY&ixlib=rb-1.2.1&w=1500");
}
.home-text16 {
  color: var(--dl-color-gray-white);
  font-size: 2.5rem;
  text-align: center;
  font-family: Maven Pro;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: var(--dl-space-space-halfunit);
  text-transform: none;
  text-decoration: none;
}
.home-subheading {
  color: var(--dl-color-gray-white);
  font-size: 1.25rem;
  max-width: 1080px;
  text-align: center;
  font-family: Poppins;
  font-weight: 400;
  text-transform: none;
  text-decoration: none;
}
.home-text18 {
  font-family: Poppins;
  font-weight: 400;
  text-transform: none;
  text-decoration: none;
}
.home-text19 {
  color: var(--dl-color-gray-700);
  font-family: Poppins;
  font-weight: 400;
  text-transform: none;
  text-decoration: none;
}
.home-text20 {
  font-family: Poppins;
  font-weight: 400;
  text-transform: none;
  text-decoration: none;
}
.home-cards-container {
  width: 100%;
  display: flex;
  grid-gap: var(--dl-space-space-doubleunit);
  flex-wrap: wrap;
  max-width: 1080px;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-quadruple);
  flex-direction: row;
  justify-content: space-between;
}
.home-link05 {
  display: contents;
}
.home-component2 {
  text-decoration: none;
}
.home-link06 {
  display: contents;
}
.home-component3 {
  text-decoration: none;
}
.home-link07 {
  display: contents;
}
.home-component4 {
  text-decoration: none;
}
.home-link08 {
  display: contents;
}
.home-component5 {
  text-decoration: none;
}
.home-link09 {
  display: contents;
}
.home-component6 {
  text-decoration: none;
}
.home-link10 {
  display: contents;
}
.home-component7 {
  text-decoration: none;
}
.home-footer {
  color: var(--dl-color-gray-white);
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-tripleunit);
  align-items: center;
  border-color: var(--dl-color-gray-900);
  border-width: 1px;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-menu {
  width: 100%;
  display: flex;
  max-width: 1000px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-logo2 {
  font-size: 1.25em;
}
.home-text22 {
  color: var(--dl-color-gray-700);
}
.home-links-container2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-container1 {
  display: flex;
  align-items: center;
  margin-left: \;
  flex-direction: row;
}
.home-icon11 {
  fill: var(--dl-color-gray-white);
  width: 20px;
  height: 20px;
  margin-right: var(--dl-space-space-halfunit);
}
.home-link11 {
  font-size: 14px;
  text-decoration: none;
}
.home-container2 {
  display: flex;
  align-items: center;
  margin-left: 100px;
  flex-direction: row;
}
.home-link12 {
  font-size: 14px;
  text-decoration: none;
}
.home-container3 {
  display: flex;
  align-items: center;
  margin-left: 100px;
  flex-direction: row;
}
.home-link13 {
  font-size: 14px;
  text-decoration: none;
}
.home-follow-container1 {
  display: none;
  align-items: center;
  margin-left: 50px;
  flex-direction: column;
  justify-content: space-between;
}
.home-text23 {
  padding-bottom: var(--dl-space-space-halfunit);
}
.home-icons-container1 {
  width: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.home-link14 {
  display: contents;
}
.home-icon13 {
  fill: var(--dl-color-gray-white);
  width: 24px;
  height: 24px;
}
.home-link15 {
  display: contents;
}
.home-icon15 {
  fill: var(--dl-color-gray-white);
  width: 24px;
  height: 24px;
}
.home-link16 {
  display: contents;
}
.home-icon17 {
  fill: var(--dl-color-gray-white);
  width: 24px;
  height: 24px;
}
@media(max-width: 991px) {
  .home-top-container {
    background-image: linear-gradient(0deg, rgb(0, 0, 0) 0.00%,rgba(0, 0, 0, 0.5) 86.00%),url("https://images.unsplash.com/photo-1632220894022-a83eacddae2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxibG9ja2NoYWlufGVufDB8fHx8MTY1Nzg1NzE1OQ&ixlib=rb-1.2.1&w=1500");
    background-repeat: repeat,no-repeat;
    background-position: 0% 40%,center;
  }
  .home-hero {
    padding-left: var(--dl-space-space-tripleunit);
    padding-right: var(--dl-space-space-tripleunit);
  }
  .home-video {
    width: 100%;
    height: auto;
  }
  .home-cards-container {
    justify-content: center;
  }
  .home-container1 {
    margin-left: 50px;
  }
  .home-container2 {
    margin-left: 50px;
  }
  .home-container3 {
    margin-left: 50px;
  }
}
@media(max-width: 767px) {
  .home-top-container {
    background-image: linear-gradient(0deg, rgb(0, 0, 0) 0.00%,rgba(0, 0, 0, 0.6) 86.00%),url("https://images.unsplash.com/photo-1632220894022-a83eacddae2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxibG9ja2NoYWlufGVufDB8fHx8MTY1Nzg1NzE1OQ&ixlib=rb-1.2.1&w=1500");
    background-repeat: repeat,no-repeat;
    background-position: 0% 40%,center;
  }
  .home-right-side {
    display: none;
  }
  .home-burger-menu {
    display: none;
  }
  .home-hero {
    justify-content: center;
  }
  .home-content-container {
    align-items: center;
  }
  .home-video {
    width: 100%;
    height: auto;
  }
  .home-main {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-menu {
    flex-direction: column;
  }
  .home-links-container2 {
    margin-top: var(--dl-space-space-tripleunit);
    margin-bottom: var(--dl-space-space-tripleunit);
    justify-content: space-between;
  }
  .home-container1 {
    margin-left: 40px;
  }
  .home-container2 {
    margin-left: 40px;
  }
  .home-container3 {
    margin-left: 40px;
  }
}
@media(max-width: 479px) {
  .home-top-container {
    height: auto;
    padding-top: var(--dl-space-space-doubleunit);
    padding-bottom: var(--dl-space-space-doubleunit);
    background-image: linear-gradient(0deg, rgb(0, 0, 0) 2.00%,rgba(0, 0, 0, 0.5) 100.00%),url("https://images.unsplash.com/photo-1632220894022-a83eacddae2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxibG9ja2NoYWlufGVufDB8fHx8MTY1Nzg1NzE1OQ&ixlib=rb-1.2.1&w=1500");
  }
  .home-burger-menu {
    display: none;
  }
  .home-text12 {
    font-size: 2em;
  }
  .home-video {
    width: 100%;
    height: auto;
  }
  .home-text16 {
    font-size: 1.75rem;
  }
  .home-subheading {
    font-size: 1rem;
  }
  .home-links-container2 {
    margin-top: var(--dl-space-space-doubleunit);
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .home-container1 {
    align-self: center;
    margin-left: 0px;
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .home-link11 {
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .home-container2 {
    height: 100%;
    align-self: center;
    align-items: center;
    margin-left: 0px;
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .home-link12 {
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .home-container3 {
    height: 100%;
    align-self: center;
    align-items: center;
    margin-left: 0px;
  }
  .home-link13 {
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .home-follow-container1 {
    margin-left: 0px;
  }
}
  `}
      </style>
    </>
  )
}

export default Home
