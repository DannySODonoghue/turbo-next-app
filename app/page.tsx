import Image from "next/image";

export default function Home() {
  return (
    <>
      <header
        className="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white backdrop-blur-sm shadow-lg"
        x-data="handleHeader"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="shrink-0 mr-4">
              <a className="block" href="/" aria-label="Cruip">
                <img
                  className="w-28"
                  src="https://lh3.googleusercontent.com/Xs24XmEf0ycOSBRExQqF5NSB-GKRsOIihNBZGojS6w2LpHnCUasfV7PIcLZJydvu5iG0SWRQEtJml_L2NNtsxzRA3zymC3_u3nx2vg=s240"
                />
              </a>
            </div>

            <nav className="hidden md:flex md:grow">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    href="#"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    href="#"
                  >
                    Documentation
                  </a>
                </li>
              </ul>

              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <a
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    href="/login"
                  >
                    Sign in
                  </a>
                </li>
                <li>
                  <a
                    className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                    href="/register"
                  >
                    <span>Sign up</span>
                    <svg
                      className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fill-rule="nonzero"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="text-center pb-12 md:pb-16">
                <h1
                  className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4"
                  data-aos="zoom-y-out"
                >
                  Build It.
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    Ship It.
                  </span>
                </h1>
                <div className="max-w-3xl mx-auto">
                  <p
                    className="text-xl text-gray-600 mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    On Turbo 360 launch full stack sites and apps with 3rd party
                    integrations in minutes, not hours or days.
                  </p>
                  <div
                    className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  >
                    <div>
                      <a
                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                        href="#0"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div
            className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 md:pt-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h2 mb-4">How Turbo 360 Works</h1>
                <p className="text-xl text-gray-600">
                  All Turbo 360 projects are hosted on a production-ready, fully
                  scalable infrastructure so developers can focus on building,
                  not managing.
                </p>
              </div>

              <div
                className="md:grid md:grid-cols-12 md:gap-6"
                x-data="{ tab: '1' }"
              >
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                  <div className="mb-8 md:mb-0">
                    <button className="text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3">
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1">
                          1. Select Project Template
                        </div>
                        <div className="text-gray-600 mt-2">
                          Start a project from scratch or choose from one of
                          several pre-configured project templates.
                        </div>
                      </div>
                    </button>
                    <button className="text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3">
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1">
                          2. Add Apps
                        </div>
                        <div className="text-gray-600 mt-2">
                          Need credit card payments? Email automation? User
                          authentication? Turbo has an app for that.
                        </div>
                      </div>
                    </button>
                    <button className="text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out">
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1">
                          3. One-Click Deploy
                        </div>
                        <div className="text-gray-600 mt-2">
                          That is it, we promise. No complex dev ops, bloated
                          pipelines, or unreadable errors. Just Ship It!
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  data-aos="zoom-y-out"
                >
                  <div className="relative flex flex-col text-center lg:text-right">
                    <div className="w-full">
                      <div className="relative inline-flex flex-col">
                        <img
                          className="md:max-w-none mx-auto rounded"
                          src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/features-home-bg-01.png"
                          width="500"
                          height="375"
                          alt="Features bg"
                        />
                        <img
                          className="md:max-w-none absolute w-full left-0 transform animate-float top-1/4"
                          src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/features-home-element-01.png"
                          width="500"
                          height="147"
                          alt="Element 01"
                        />
                        <img
                          className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500 top-1/2"
                          src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/features-home-element-02.png"
                          width="500"
                          height="158"
                          alt="Element 02"
                        />
                        <img
                          className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000 top-3/4"
                          src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/features-home-element-03.png"
                          width="500"
                          height="167"
                          alt="Element 03"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative inline-flex flex-col">
                        <img
                          className="md:max-w-none mx-auto rounded"
                          src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/features-home-bg-01.png"
                          width="500"
                          height="375"
                          alt="Features bg"
                        />
                        <img
                          className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000"
                          src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/features-home-element-03.png"
                          width="500"
                          height="167"
                          alt="Element 03"
                        />
                        <img
                          className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500"
                          src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/features-home-element-02.png"
                          width="500"
                          height="158"
                          alt="Element 02"
                        />
                        <img
                          className="md:max-w-none absolute w-full left-0 transform animate-float"
                          src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/features-home-element-01.png"
                          width="500"
                          height="147"
                          alt="Element 01"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative inline-flex flex-col">
                        <img
                          className="md:max-w-none mx-auto rounded"
                          src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/features-home-bg-01.png"
                          width="500"
                          height="375"
                          alt="Features bg"
                        />
                        <img
                          className="md:max-w-none absolute w-full left-0 transform animate-float"
                          src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/features-home-element-01.png"
                          width="500"
                          height="147"
                          alt="Element 01"
                        />
                        <img
                          className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500"
                          src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/features-home-element-02.png"
                          width="500"
                          height="158"
                          alt="Element 02"
                        />
                        <img
                          className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000"
                          src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/features-home-element-03.png"
                          width="500"
                          height="167"
                          alt="Element 03"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div
            className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-4">Explore Apps</h2>
                <p className="text-xl text-gray-600">
                  Developer-made apps are the heart &amp; soul of the Turbo 360
                  ecosystem. Take your project to the next level by adding third
                  party apps or creating your own!
                </p>
              </div>

              <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <rect
                        className="fill-current text-blue-600"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <g stroke-width="2">
                        <path
                          className="stroke-current text-blue-300"
                          d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M20.571 37.714h5.715L36.57 26.286h8"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          stroke-linecap="square"
                          d="M41.143 34.286l3.428 3.428-3.428 3.429"
                        />
                        <path
                          className="stroke-current text-white"
                          stroke-linecap="square"
                          d="M41.143 29.714l3.428-3.428-3.428-3.429"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Payments
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <rect
                        className="fill-current text-blue-600"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <g stroke-width="2" transform="translate(19.429 20.571)">
                        <circle
                          className="stroke-current text-white"
                          stroke-linecap="square"
                          cx="12.571"
                          cy="12.571"
                          r="1.143"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    User Management
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <rect
                        className="fill-current text-blue-600"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <g stroke-width="2">
                        <path
                          className="stroke-current text-blue-300"
                          d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286"
                        />
                        <path
                          className="stroke-current text-white"
                          stroke-linecap="square"
                          d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          d="M36.571 32H40"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M24 32h3.429"
                          stroke-linecap="square"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Push Notifications
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <rect
                        className="fill-current text-blue-600"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <g stroke-width="2">
                        <path
                          className="stroke-current text-white"
                          d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                          stroke-linecap="square"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Headless CMS
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <rect
                        className="fill-current text-blue-600"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <g stroke-width="2">
                        <path
                          className="stroke-current text-white"
                          d="M19.429 32a12.571 12.571 0 0021.46 8.89L23.111 23.11A12.528 12.528 0 0019.429 32z"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          d="M32 19.429c6.943 0 12.571 5.628 12.571 12.571M32 24a8 8 0 018 8"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M34.286 29.714L32 32"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Automated Email
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <rect
                        className="fill-current text-blue-600"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <g stroke-width="2" stroke-linecap="square">
                        <path
                          className="stroke-current text-white"
                          d="M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          d="M44.571 43.429H34.286M44.571 37.714H34.286"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Custom Integration
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h2 mb-4">Collaborate</h1>
                <p className="text-xl text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                  cupidatat.
                </p>
              </div>

              <div className="flex flex-col items-center pt-12 md:pt-16">
                <div className="relative">
                  <svg
                    className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none max-w-full"
                    width="800"
                    height="800"
                    viewBox="0 0 800 800"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="fill-current text-gray-400 opacity-75">
                      <circle className="pulse" cx="400" cy="400" r="200" />
                      <circle
                        className="pulse pulse-1"
                        cx="400"
                        cy="400"
                        r="200"
                      />
                      <circle
                        className="pulse pulse-2"
                        cx="400"
                        cy="400"
                        r="200"
                      />
                    </g>
                  </svg>
                  <img
                    className="relative rounded-full shadow-xl"
                    src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/planet.png"
                    width="400"
                    height="400"
                    alt="Planet"
                  />
                  <svg
                    className="absolute top-0 w-full h-auto left=1/4"
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <filter
                        x="-41.7%"
                        y="-34.2%"
                        width="183.3%"
                        height="185.6%"
                        filterUnits="objectBoundingBox"
                        id="world-ill-a"
                      >
                        <feOffset
                          dy="4"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />
                        <feGaussianBlur
                          stdDeviation="6"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                          in="shadowBlurOuter1"
                        />
                      </filter>
                      <filter
                        x="-83.3%"
                        y="-68.5%"
                        width="266.7%"
                        height="271.2%"
                        filterUnits="objectBoundingBox"
                        id="world-ill-c"
                      >
                        <feOffset
                          dy="4"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />
                        <feGaussianBlur
                          stdDeviation="6"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                          in="shadowBlurOuter1"
                        />
                      </filter>
                      <filter
                        x="-7.3%"
                        y="-23.8%"
                        width="114.5%"
                        height="147.6%"
                        filterUnits="objectBoundingBox"
                        id="world-ill-e"
                      >
                        <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                      </filter>
                      <ellipse
                        id="world-ill-b"
                        cx="51"
                        cy="175.402"
                        rx="24"
                        ry="23.364"
                      />
                      <ellipse
                        id="world-ill-d"
                        cx="246"
                        cy="256.201"
                        rx="12"
                        ry="11.682"
                      />
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="world-ill-f"
                      >
                        <stop
                          stop-color="#0070F4"
                          stop-opacity="0"
                          offset="0%"
                        />
                        <stop
                          stop-color="#0070F4"
                          stop-opacity=".64"
                          offset="52.449%"
                        />
                        <stop
                          stop-color="#0070F4"
                          stop-opacity="0"
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      transform="translate(0 -.818)"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <use
                        fill="#000"
                        filter="url(#world-ill-a)"
                        xlinkHref="#world-ill-b"
                      />
                      <use fill="#0070F4" xlinkHref="#world-ill-b" />
                      <use
                        fill="#000"
                        filter="url(#world-ill-c)"
                        xlinkHref="#world-ill-d"
                      />
                      <use fill="#0070F4" xlinkHref="#world-ill-d" />
                      <ellipse
                        fill-opacity=".32"
                        fill="#0070F4"
                        cx="293"
                        cy="142.303"
                        rx="8"
                        ry="7.788"
                      />
                      <ellipse
                        fill-opacity=".64"
                        fill="#0070F4"
                        cx="250"
                        cy="187.083"
                        rx="6"
                        ry="5.841"
                      />
                      <ellipse
                        fill-opacity=".64"
                        fill="#0070F4"
                        cx="13"
                        cy="233.811"
                        rx="2"
                        ry="1.947"
                      />
                      <ellipse
                        fill="#0070F4"
                        cx="29"
                        cy="114.072"
                        rx="2"
                        ry="1.947"
                      />
                      <path
                        d="M258 256.2l87-29.204"
                        stroke="#666"
                        stroke-width="2"
                        opacity=".16"
                        filter="url(#world-ill-e)"
                      />
                      <path
                        d="M258 251.333c111.333-40.237 141-75.282 89-105.136M136 103.364c66.667 4.543 104.667 32.45 114 83.72"
                        stroke="url(#world-ill-f)"
                        stroke-width="2"
                        stroke-dasharray="2"
                      />
                    </g>
                  </svg>
                  <svg
                    className="absolute max-w-full"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="fill-current text-blue-600">
                      <circle
                        className="pulse pulse-mini pulse-1"
                        cx="24"
                        cy="24"
                        r="8"
                      />
                      <circle
                        className="pulse pulse-mini pulse-2"
                        cx="24"
                        cy="24"
                        r="8"
                      />
                      <circle cx="24" cy="24" r="8" />
                    </g>
                  </svg>
                  <svg
                    className="absolute max-w-full"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="fill-current text-blue-600">
                      <circle
                        className="pulse pulse-mini"
                        cx="24"
                        cy="24"
                        r="8"
                      />
                      <circle
                        className="pulse pulse-mini pulse-2"
                        cx="24"
                        cy="24"
                        r="8"
                      />
                      <circle cx="24" cy="24" r="8" />
                    </g>
                  </svg>
                  <img
                    className="absolute max-w-full transform animate-float"
                    src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/planet-avatar-01.png"
                    width="261"
                    height="105"
                    alt="Planet avatar 01"
                  />
                  <img
                    className="absolute max-w-full transform animate-float animation-delay-1000"
                    src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/planet-avatar-02.png"
                    width="355"
                    height="173"
                    alt="Planet avatar 02"
                  />
                  <svg
                    className="absolute top-0 max-w-full w-20 h-auto rounded-full shadow-xl w-1/5 left-1/4"
                    viewBox="0 0 80 80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="fill-current text-gray-800"
                      cx="40"
                      cy="40"
                      r="40"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M30.19 41.221c7.074 3.299 12.957-4.7 20.03-1.401l1.769.824-1.419-3.883M43.988 50.877l3.887-1.41-1.769-.824c-2.19-1.021-3.475-2.651-4.42-4.512M38.724 36.91c-.944-1.86-2.23-3.49-4.42-4.512"
                      stroke-linecap="square"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    className="absolute max-w-full w-16 h-auto rounded-full shadow-xl w-1/5 left-1/3"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="fill-current text-blue-600"
                      cx="32"
                      cy="32"
                      r="32"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.733 31.416l18.127-8.452M43.039 31.926L24.913 40.38"
                      stroke-width="2"
                      fill="none"
                    />
                    <path
                      className="stroke-current text-white"
                      stroke-linecap="square"
                      d="M32.238 20.595l6.622 2.369-2.442 6.594M31.534 42.747l-6.621-2.368 2.442-6.595"
                      stroke-width="2"
                      fill="none"
                    />
                  </svg>
                  <svg
                    className="absolute max-w-full w-16 h-auto rounded-full shadow-xl w-1/5"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="fill-current text-gray-100"
                      fill="#FBFBFB"
                      cx="32"
                      cy="32"
                      r="32"
                    />
                    <path
                      className="fill-current text-gray-700"
                      d="M37.11 32.44l-1.69 4.646-8.458-3.078.676-1.859-4.773 1.42 2.744 4.156.677-1.858 9.396 3.42a.994.994 0 001.278-.587l2.03-5.576-1.88-.684zM27.037 30.878l1.691-4.646 8.457 3.078-.676 1.858 4.773-1.42-2.744-4.155-.676 1.858-9.397-3.42a.994.994 0 00-1.278.587l-2.03 5.576 1.88.684z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2">
                  The most innovative businesses choose Simple
                </h2>
              </div>

              <div className="mb-12 md:mb-16">
                <ul className="flex flex-wrap justify-center text-sm font-medium -m-2">
                  <li className="m-2">
                    <a
                      className="inline-flex text-center text-gray-100 py-2 px-4 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Developers
                    </a>
                  </li>
                  <li className="m-2">
                    <a
                      className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                      href="#0"
                    >
                      SaaS
                    </a>
                  </li>
                  <li className="m-2">
                    <a
                      className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Web Agencies
                    </a>
                  </li>
                  <li className="m-2">
                    <a
                      className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                      href="#0"
                    >
                      E-Commerce
                    </a>
                  </li>
                  <li className="m-2">
                    <a
                      className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Startups
                    </a>
                  </li>
                </ul>
              </div>

              <div className="max-w-sm mx-auto md:max-w-none">
                <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                  <article
                    className="flex flex-col h-full"
                    data-aos="zoom-y-out"
                  >
                    <header>
                      <a className="block mb-6" href="blog-post.html">
                        <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                          <img
                            className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                            src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/news-01.jpg"
                            width="352"
                            height="198"
                            alt="News 01"
                          />
                        </figure>
                      </a>
                      <div className="mb-3">
                        <ul className="flex flex-wrap text-xs font-medium -m-1">
                          <li className="m-1">
                            <a
                              className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                              href="#0"
                            >
                              Case studies
                            </a>
                          </li>
                          <li className="m-1">
                            <a
                              className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                              href="#0"
                            >
                              Hubspot
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="text-xl font-bold leading-snug tracking-tight">
                        <a className="hover:underline" href="blog-post.html">
                          “How HubSpot saved 25% on developing costs by
                          switching to Simple.”
                        </a>
                      </h3>
                    </header>
                    <footer className="text-sm flex items-center mt-4">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative" href="#0">
                          <span
                            className="absolute inset-0 -m-px"
                            aria-hidden="true"
                          >
                            <span className="absolute inset-0 -m-px bg-white rounded-full"></span>
                          </span>
                          <img
                            className="relative rounded-full"
                            src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/news-author-01.jpg"
                            width="32"
                            height="32"
                            alt="Author 01"
                          />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">
                          Lisa Allison
                        </a>
                      </div>
                    </footer>
                  </article>

                  <article
                    className="flex flex-col h-full"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    <header>
                      <a className="block mb-6" href="blog-post.html">
                        <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                          <img
                            className="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out"
                            src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/news-02.jpg"
                            width="352"
                            height="198"
                            alt="News 02"
                          />
                        </figure>
                      </a>
                      <div className="mb-3">
                        <ul className="flex flex-wrap text-xs font-medium -m-1">
                          <li className="m-1">
                            <a
                              className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                              href="#0"
                            >
                              Case studies
                            </a>
                          </li>
                          <li className="m-1">
                            <a
                              className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                              href="#0"
                            >
                              Facebook
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="text-xl font-bold leading-snug tracking-tight">
                        <a className="hover:underline" href="blog-post.html">
                          “How Facebook brought 13% cost savings to their bottom
                          line with Simple’s products.”
                        </a>
                      </h3>
                    </header>
                    <footer className="text-sm flex items-center mt-4">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative -ml-2" href="#0">
                          <span
                            className="absolute inset-0 -m-px"
                            aria-hidden="true"
                          >
                            <span className="absolute inset-0 -m-px bg-white rounded-full"></span>
                          </span>
                          <img
                            className="relative rounded-full"
                            src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/news-author-02.jpg"
                            width="32"
                            height="32"
                            alt="Author 02"
                          />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">
                          Knut Mayer
                        </a>
                      </div>
                    </footer>
                  </article>

                  <article
                    className="flex flex-col h-full"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  >
                    <header>
                      <a className="block mb-6" href="blog-post.html">
                        <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                          <img
                            className="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out"
                            src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/news-03.jpg"
                            width="352"
                            height="198"
                            alt="News 03"
                          />
                        </figure>
                      </a>
                      <div className="mb-3">
                        <ul className="flex flex-wrap text-xs font-medium -m-1">
                          <li className="m-1">
                            <a
                              className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                              href="#0"
                            >
                              Case studies
                            </a>
                          </li>
                          <li className="m-1">
                            <a
                              className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                              href="#0"
                            >
                              Tinder
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="text-xl font-bold leading-snug tracking-tight">
                        <a className="hover:underline" href="blog-post.html">
                          “How Tinder grew 115% and saved 120 Hours each week by
                          outsourcing to Simple.”
                        </a>
                      </h3>
                    </header>
                    <footer className="text-sm flex items-center mt-4">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative" href="#0">
                          <span
                            className="absolute inset-0 -m-px"
                            aria-hidden="true"
                          >
                            <span className="absolute inset-0 -m-px bg-white rounded-full"></span>
                          </span>
                          <img
                            className="relative rounded-full"
                            src="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/images/news-author-01.jpg"
                            width="32"
                            height="32"
                            alt="Author 01"
                          />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">
                          Lisa Allison
                        </a>
                      </div>
                    </footer>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12">
                <h1 className="h1 mb-4" data-aos="zoom-y-out">
                  Start for free. Pay as you grow.
                </h1>
                <p
                  className="text-xl text-gray-600"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  No matter how many team members you have - our pricing is
                  simple, transparent and adapts to the size of your company.
                </p>
              </div>

              <div x-data="pricingSwitch">
                <div className="max-w-sm md:max-w-2xl xl:max-w-none mx-auto grid gap-8 md:grid-cols-3 xl:grid-cols-3 xl:gap-8 items-start">
                  <div
                    className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl"
                    data-aos="zoom-y-out"
                    data-aos-delay="450"
                  >
                    <div className="mb-4">
                      <div className="text-lg font-bold mb-1">First Gear</div>
                      <div className="inline-flex items-baseline mb-2">
                        <span
                          x-text="priceOutput.plan1[value][0]"
                          className="text-3xl font-bold"
                        ></span>
                        <span
                          x-text="priceOutput.plan1[value][1]"
                          className="text-4xl font-bold"
                        ></span>
                        <span
                          x-text="priceOutput.plan1[value][2]"
                          className="text-gray-600 pl-2"
                        ></span>
                      </div>
                      <div className="text-lg text-gray-800">
                        For larger teams that need to create, and collaborate.
                      </div>
                    </div>
                    <ul className="text-gray-600 -mb-2 grow">
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Unlimited viewers</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Up to 3 members</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Up to 2 projects</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Dedicated support</span>
                      </li>
                    </ul>
                    <div className="border-t border-gray-200 pt-5 mt-6">
                      <a
                        className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full"
                        href="#0"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>

                  <div
                    className="relative flex flex-col h-full py-5 px-6 rounded bg-blue-100 shadow-xl border-2 border-blue-500"
                    data-aos="zoom-y-out"
                    data-aos-delay="450"
                  >
                    <div className="absolute top-0 right-0 mr-5 p-3 -mt-5 bg-yellow-500 rounded-full">
                      <svg
                        className="w-4 h-4 fill-current text-white"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.145 5.05l-4.316-.627L8.898.513c-.338-.684-1.456-.684-1.794 0l-1.93 3.91-4.317.627a1.002 1.002 0 00-.554 1.707l3.124 3.044-.737 4.3a1 1 0 001.45 1.053L8 13.125l3.862 2.03c.728.381 1.59-.234 1.45-1.054l-.736-4.299L15.7 6.758a1.003 1.003 0 00-.555-1.708z" />
                      </svg>
                    </div>
                    <div className="mb-4">
                      <div className="text-lg font-bold mb-1">Second Gear</div>
                      <div className="inline-flex items-baseline mb-2">
                        <span
                          x-text="priceOutput.plan2[value][0]"
                          className="text-3xl font-bold"
                        ></span>
                        <span
                          x-text="priceOutput.plan2[value][1]"
                          className="text-4xl font-bold"
                        ></span>
                        <span
                          x-text="priceOutput.plan2[value][2]"
                          className="text-gray-600 pl-2"
                        ></span>
                      </div>
                      <div className="text-lg text-gray-800">
                        For larger teams that need to create, and collaborate.
                      </div>
                    </div>
                    <ul className="text-gray-600 -mb-2 grow">
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Unlimited viewers</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Up to 3 members</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Up to 2 projects</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Dedicated support</span>
                      </li>
                    </ul>
                    <div className="border-t border-gray-200 pt-5 mt-6">
                      <a
                        className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full"
                        href="#0"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>

                  <div
                    className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl"
                    data-aos="zoom-y-out"
                    data-aos-delay="450"
                  >
                    <div className="mb-4">
                      <div className="text-lg font-bold mb-1">Third Gear</div>
                      <div className="inline-flex items-baseline mb-2">
                        <span
                          x-text="priceOutput.plan3[value][0]"
                          className="text-3xl font-bold"
                        ></span>
                        <span
                          x-text="priceOutput.plan3[value][1]"
                          className="text-4xl font-bold"
                        ></span>
                        <span
                          x-text="priceOutput.plan3[value][2]"
                          className="text-gray-600 pl-2"
                        ></span>
                      </div>
                      <div className="text-lg text-gray-800">
                        For larger teams that need to create, and collaborate.
                      </div>
                    </div>
                    <ul className="text-gray-600 -mb-2 grow">
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Unlimited viewers</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Up to 3 members</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Up to 2 projects</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Dedicated support</span>
                      </li>
                    </ul>
                    <div className="border-t border-gray-200 pt-5 mt-6">
                      <a
                        className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full"
                        href="#0"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pb-12 md:pb-20">
              <div
                className="bg-blue-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl"
                data-aos="zoom-y-out"
              >
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                    <h3 className="h3 text-white mb-2">
                      Ready to get started?
                    </h3>
                    <p className="text-white text-lg opacity-75">
                      Start for free today. No credit card required.
                    </p>
                  </div>

                  <div>
                    <a
                      className="btn text-blue-600 bg-gradient-to-r from-blue-100 to-white"
                      href="#0"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
