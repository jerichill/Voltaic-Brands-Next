import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'

const WebsiteTerms = (props) => {
  return (
    <>
      <div className="website-terms-container">
        <Head>
          <title>
            Website Terms - VOLTAIC Brands | Creator of Crypto-Native Digital
            Goods & Merchandise
          </title>
          <meta
            name="description"
            content="VOLTAIC Brands is a designer and distributer of innovative digital goods, collectibles, and merchandise for the next generation of consumers."
          />
          <meta
            property="og:title"
            content="Website Terms - VOLTAIC Brands | Creator of Crypto-Native Digital Goods &amp; Merchandise"
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
        <header className="website-terms-top-container">
          <nav data-role="Header" className="website-terms-navbar">
            <a
              href="https://www.voltaicbrands.com"
              target="_blank"
              rel="noreferrer noopener"
              className="website-terms-logo"
            >
              <span className="website-terms-text">
                VOLTAIC
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="website-terms-text01">Brands</span>
            </a>
            <span className="website-terms-text02">TM</span>
            <div className="website-terms-right-side">
              <div className="website-terms-links-container">
                <span className="website-terms-text03 menu">Home</span>
                <span className="website-terms-text04 menu">About</span>
                <span className="website-terms-text05 menu">Tour Packages</span>
                <span className="website-terms-text06 menu">Contact</span>
              </div>
              <a href="#main-section">
                <SolidButton button="Explore places"></SolidButton>
              </a>
            </div>
            <div data-type="BurgerMenu" className="website-terms-burger-menu">
              <svg
                viewBox="0 0 1024 1024"
                className="website-terms-burger-menu"
              >
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
            <div data-type="MobileMenu" className="website-terms-mobile-menu">
              <div className="website-terms-nav">
                <div className="website-terms-top">
                  <h1>Travel</h1>
                  <div
                    data-type="CloseMobileMenu"
                    className="website-terms-close-menu"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="website-terms-icon03"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="website-terms-right-side1">
                  <div className="website-terms-links-container1">
                    <span className="website-terms-text07">Home</span>
                    <span className="website-terms-text08">About</span>
                    <span className="website-terms-text09">Tour Packages</span>
                    <span>Contact</span>
                  </div>
                  <a href="#main-section" className="website-terms-link01">
                    <SolidButton button="Explore places"></SolidButton>
                  </a>
                </div>
              </div>
              <div className="website-terms-follow-container">
                <span className="website-terms-text11">
                  Follow us on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="website-terms-icons-container">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="website-terms-link02"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="website-terms-icon05"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="website-terms-link03"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="website-terms-icon07"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="website-terms-link04"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="website-terms-icon09"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="website-terms-hero">
            <div className="website-terms-content-container">
              <h1 className="website-terms-text12">
                <span>Disclaimer &amp; Website Terms</span>
              </h1>
            </div>
          </div>
        </header>
        <div id="main-section" className="website-terms-main">
          <span className="website-terms-text14 content">
            <span>INTRODUCTION</span>
            <br></br>
            <span>﻿</span>
            <br></br>
            <span>
              The information provided by TurboVirtual (“we,” “us” or “our”) on
              turbovirtual.com, voltaicbrands.com, iamgalactify.com,
              radpups.com, etherfelis.com, and rareorbs.com (the “Site”) is for
              general informational purposes only. All information on the Site
              is provided in good faith, however we make no representation or
              warranty of any kind, express or implied, regarding the accuracy,
              adequacy, validity, reliability, availability or completeness of
              any information on the Site.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Under no circumstance shall we have any liability to you for any
              loss or damage of any kind incurred as a result of the use of the
              site or reliance on any information or technology provided on the
              site. Your use of the site and your reliance on any information on
              the site is solely at your own risk.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>TERMS OF SERVICE</span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              ﻿This Site software is provided as-is. Please use at your own
              risk.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>WEBSITE DISCLAIMER</span>
            <br></br>
            <span></span>
            <br></br>
            <span>External Links Disclaimer for Website</span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              The Site may contain (or you may be sent through the Site links to
              other websites or content belonging to or originating from third
              parties or links to websites and features in banners or other
              advertising. Such external links are not investigated, monitored,
              or checked for accuracy, adequacy, validity, reliability,
              availability or completeness by us.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              We do not warrant, endorse, guarantee, or assume responsibility
              for the accuracy or reliability of any information offered by
              third-party websites linked through the site or any website or
              feature linked in any banner or other advertising. We will not be
              a party to or in any way be responsible for monitoring any
              transaction between you and third-party providers of products or
              services.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>Professional Disclaimer for Website</span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              The Site cannot and does not contain legal or financial advice.
              All content on the Site is provided for general informational and
              sales purposes only and is not a substitute for professional
              advice.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Accordingly, before taking any actions based upon such
              information, we encourage you to consult with the appropriate
              professionals. We do not provide any kind of legal or financial
              advice. The use or reliance of any information contained on this
              site is solely at your own risk.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>Affiliate and Third-party Links Disclaimer for Website</span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <span>
              The Site may contain testimonials by users of our products and/or
              services. These testimonials reflect the real-life experiences and
              opinions of such users. However, the experiences are personal to
              those particular users, and may not necessarily be representative
              of all users of our products and/or services. We do not claim, and
              you should not assume, that all users will have the same
              experiences. Your individual results may vary.The Site may contain
              links to affiliate and third-party websites. Use those links at
              your own risk.
            </span>
            <br></br>
            <span>Testimonials Disclaimer for Website</span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <span>
              The testimonials on the Site are submitted in various forms such
              as text, audio and/or video, and are reviewed by us before being
              posted. They appear on the Site verbatim as given by the users,
              except for the correction of grammar or typing errors. Some
              testimonials may have been shortened for the sake of brevity where
              the full testimonial contained extraneous information not relevant
              to the general public. The views and opinions contained in the
              testimonials belong solely to the individual user and do not
              reflect our views and opinion
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              3. We take seriously the protection of your privacy and
              confidentiality. We understand that all visitors to our website
              are entitled to know that their personal data will not be used for
              any purpose unintended by them, and will not accidentally fall
              into the hands of a third party.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              4. We undertake to preserve the confidentiality of all information
              you provide to us, and hope that you reciprocate.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              5. Except as set out below, we do not share, or sell, or disclose
              to a third party, any information collected through our website,
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>The bases on which we process information about you</span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              The law requires us to determine under which of six defined bases
              we process different categories of your personal information and
              to notify you of the basis for each category.
            </span>
          </span>
        </div>
        <footer className="website-terms-footer">
          <div className="website-terms-menu">
            <span className="website-terms-logo2">
              <span>
                VOLTAIC
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="website-terms-text58">Brands</span>
            </span>
            <div className="website-terms-links-container2">
              <div className="website-terms-container1">
                <svg viewBox="0 0 1024 1024" className="website-terms-icon11">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <a
                  href="mailto:support@turbovirtual.com?subject=VOLTAIC  Support Inquiry"
                  className="website-terms-link05"
                >
                  Support
                </a>
              </div>
              <div className="website-terms-container2">
                <Link href="/privacy-policy">
                  <a className="website-terms-link06">Privacy Policy</a>
                </Link>
              </div>
              <div className="website-terms-container3">
                <Link href="/website-terms">
                  <a className="website-terms-link07">Disclaimer &amp; Terms</a>
                </Link>
              </div>
            </div>
            <div className="website-terms-follow-container1">
              <span className="website-terms-text59">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="website-terms-icons-container1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="website-terms-link08"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="website-terms-icon13"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="website-terms-link09"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="website-terms-icon15"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="website-terms-link10"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="website-terms-icon17"
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
          .website-terms-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .website-terms-top-container {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-size: cover;
            background-image: linear-gradient(
                0deg,
                rgb(0, 0, 0) 14%,
                rgba(0, 0, 0, 0.24) 86%
              ),
              url('https://images.unsplash.com/photo-1632220894022-a83eacddae2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxibG9ja2NoYWlufGVufDB8fHx8MTY1Nzg1NzE1OQ&ixlib=rb-1.2.1&w=1500');
            background-repeat: repeat, no-repeat;
            background-position: 0% 40%, center;
          }
          .website-terms-navbar {
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
          .website-terms-logo {
            color: var(--dl-color-gray-white);
            font-size: 2.25rem;
            font-family: Maven Pro;
            font-weight: 700;
            line-height: 1.25;
            text-transform: none;
            text-decoration: none;
          }
          .website-terms-text {
            font-family: Maven Pro;
            font-weight: 700;
            text-transform: none;
            text-decoration: none;
          }
          .website-terms-text01 {
            color: var(--dl-color-gray-700);
            font-style: normal;
            font-family: Maven Pro;
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .website-terms-text02 {
            color: var(--dl-color-gray-700);
            font-size: 14px;
            align-self: flex-start;
            margin-top: 12px;
          }
          .website-terms-right-side {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .website-terms-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .website-terms-text03 {
            color: var(--dl-color-gray-white);
            margin-right: var(--dl-space-space-doubleunit);
          }
          .website-terms-text04 {
            color: var(--dl-color-gray-white);
            margin-right: var(--dl-space-space-doubleunit);
          }
          .website-terms-text05 {
            color: var(--dl-color-gray-white);
            margin-right: var(--dl-space-space-doubleunit);
          }
          .website-terms-text06 {
            color: var(--dl-color-gray-white);
            margin-right: var(--dl-space-space-doubleunit);
          }
          .website-terms-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .website-terms-burger-menu {
            width: 24px;
            height: 24px;
          }
          .website-terms-mobile-menu {
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
          .website-terms-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .website-terms-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .website-terms-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .website-terms-icon03 {
            width: 24px;
            height: 24px;
          }
          .website-terms-right-side1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .website-terms-links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .website-terms-text07 {
            margin-bottom: 8px;
          }
          .website-terms-text08 {
            margin-bottom: 8px;
          }
          .website-terms-text09 {
            margin-bottom: 8px;
          }
          .website-terms-link01 {
            display: contents;
          }
          .website-terms-follow-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .website-terms-text11 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .website-terms-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .website-terms-link02 {
            display: contents;
          }
          .website-terms-icon05 {
            width: 24px;
            height: 24px;
          }
          .website-terms-link03 {
            display: contents;
          }
          .website-terms-icon07 {
            width: 24px;
            height: 24px;
          }
          .website-terms-link04 {
            display: contents;
          }
          .website-terms-icon09 {
            width: 24px;
            height: 24px;
          }
          .website-terms-hero {
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
          .website-terms-content-container {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: flex-start;
          }
          .website-terms-text12 {
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
          .website-terms-main {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-quadruple);
            justify-content: flex-start;
          }
          .website-terms-text14 {
            max-width: 1280px;
          }
          .website-terms-footer {
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
          .website-terms-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .website-terms-logo2 {
            font-size: 1.25em;
          }
          .website-terms-text58 {
            color: var(--dl-color-gray-700);
          }
          .website-terms-links-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .website-terms-container1 {
            display: flex;
            margin-left: 0px;
            flex-direction: row;
          }
          .website-terms-icon11 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .website-terms-link05 {
            font-size: 14px;
            text-decoration: none;
          }
          .website-terms-container2 {
            display: flex;
            align-items: center;
            margin-left: 100px;
            flex-direction: row;
          }
          .website-terms-link06 {
            font-size: 14px;
            text-decoration: none;
          }
          .website-terms-container3 {
            display: flex;
            align-items: center;
            margin-left: 100px;
            flex-direction: row;
          }
          .website-terms-link07 {
            font-size: 14px;
            text-decoration: none;
          }
          .website-terms-follow-container1 {
            display: none;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .website-terms-text59 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .website-terms-icons-container1 {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .website-terms-link08 {
            display: contents;
          }
          .website-terms-icon13 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .website-terms-link09 {
            display: contents;
          }
          .website-terms-icon15 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .website-terms-link10 {
            display: contents;
          }
          .website-terms-icon17 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .website-terms-top-container {
              background-image: linear-gradient(
                  0deg,
                  rgb(0, 0, 0) 0%,
                  rgba(0, 0, 0, 0.5) 86%
                ),
                url('https://images.unsplash.com/photo-1632220894022-a83eacddae2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxibG9ja2NoYWlufGVufDB8fHx8MTY1Nzg1NzE1OQ&ixlib=rb-1.2.1&w=1500');
              background-repeat: repeat, no-repeat;
              background-position: 0% 40%, center;
            }
            .website-terms-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .website-terms-container1 {
              margin-left: 50px;
            }
            .website-terms-container2 {
              margin-left: 50px;
            }
            .website-terms-container3 {
              margin-left: 50px;
            }
          }
          @media (max-width: 767px) {
            .website-terms-top-container {
              background-image: linear-gradient(
                  0deg,
                  rgb(0, 0, 0) 0%,
                  rgba(0, 0, 0, 0.6) 86%
                ),
                url('https://images.unsplash.com/photo-1632220894022-a83eacddae2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxibG9ja2NoYWlufGVufDB8fHx8MTY1Nzg1NzE1OQ&ixlib=rb-1.2.1&w=1500');
              background-repeat: repeat, no-repeat;
              background-position: 0% 40%, center;
            }
            .website-terms-right-side {
              display: none;
            }
            .website-terms-burger-menu {
              display: none;
            }
            .website-terms-hero {
              justify-content: center;
            }
            .website-terms-content-container {
              align-items: center;
            }
            .website-terms-main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .website-terms-menu {
              flex-direction: column;
            }
            .website-terms-links-container2 {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
            .website-terms-container1 {
              margin-left: 40px;
            }
            .website-terms-container2 {
              margin-left: 40px;
            }
            .website-terms-container3 {
              margin-left: 40px;
            }
          }
          @media (max-width: 479px) {
            .website-terms-top-container {
              height: auto;
              padding-top: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
              background-image: linear-gradient(
                  0deg,
                  rgb(0, 0, 0) 2%,
                  rgba(0, 0, 0, 0.5) 100%
                ),
                url('https://images.unsplash.com/photo-1632220894022-a83eacddae2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxibG9ja2NoYWlufGVufDB8fHx8MTY1Nzg1NzE1OQ&ixlib=rb-1.2.1&w=1500');
            }
            .website-terms-burger-menu {
              display: none;
            }
            .website-terms-text12 {
              font-size: 1.75rem;
            }
            .website-terms-links-container2 {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .website-terms-container1 {
              align-self: center;
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .website-terms-link05 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .website-terms-container2 {
              height: 100%;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .website-terms-link06 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .website-terms-container3 {
              height: 100%;
              align-self: center;
              align-items: center;
              margin-left: 0px;
            }
            .website-terms-link07 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .website-terms-follow-container1 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default WebsiteTerms
