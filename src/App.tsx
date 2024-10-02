export default function App() {
  return (
    <div>
      <div className="fixed top-0 z-30 w-full max-w-full flex-col lg:flex">
        <div className="relative flex h-20 justify-center">
          <div className="w-full px-4 bg-white border-b border-black/10 backdrop-blur-lg dark:border-zinc-800 dark:bg-black/75 gap-8 flex flex-row items-center justify-between">
            <div className="flex flex-none flex-row">
              <div className="mr-4 flex shrink-0 items-center">
                <a
                  className="flex items-center transition-transform focus:scale-110 focus:outline-0 focus:drop-shadow-primary"
                  href="/"
                >
                  {/* Logo */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="30"
                    viewBox="0 0 124 30"
                    width="124"
                  >
                    <linearGradient
                      id="a"
                      gradientUnits="userSpaceOnUse"
                      x1="2.47665"
                      x2="127.568"
                      y1="-1.09231"
                      y2="16.8828"
                    >
                      <stop offset="0" stopColor="#fff59e" />
                      <stop offset=".635417" stopColor="#81efd9" />
                      <stop offset="1" stopColor="#6b9be3" />
                    </linearGradient>
                    <path
                      clipRule="evenodd"
                      d="m8.51686 8.22623h5.39534v-5.21203h-5.29224c-5.25788-.14378-6.11701.7189-6.25938 6.542v1.4737c-.06382 5.2121 1.0015 6.6858 4.88477 6.578h.96222v4.1696h-5.73899v5.212h5.70463c4.12379 0 4.39879-.0718 5.42969-1.3299.6873-1.1503.8248-1.9051.9279-5.4277v-1.4738c0-5.0682-1.031-6.4341-4.91425-6.3622h-1.09969zm15.63624-.00008h2.7836v-5.21203h-11.7185v5.21203h2.7836v18.76335h6.1513zm10.2701 18.76335h-6.1514v-19.08686c.0687-4.24151.8591-4.88852 6.1906-4.88852h2.5087c5.3266 0 6.117.61106 6.1857 4.88852v19.08686h-6.1513v-5.0683h-2.5774v5.0683zm2.5774-10.3882v-6.3263c0-1.54562-.4124-2.22858-1.3059-2.22858s-1.2715.7189-1.2715 2.22858v6.3263zm23.2652-8.95031c-.1718-4.13368-.9278-4.74474-5.4984-4.63691h-9.3817v23.97532h6.1514v-9.3816h.7904c1.3058.0359 1.8213.647 1.787 2.1567v3.1991c0 1.6894.1374 2.9834.4811 4.0258h6.1513c-.2749-1.0064-.4811-2.4442-.4811-4.0258v-3.7024c.0688-2.6958-.7904-3.8461-3.3678-4.565 2.5774-.2157 3.4709-1.7253 3.3678-5.49957zm-6.117 2.69591c0 1.6894-.3093 2.0488-1.7526 2.0488h-.8591v-4.16959h.8591c1.3059 0 1.7526.53918 1.7526 2.12079zm22.9955 11.3228c.0687 4.7806-.6529 5.4277-6.0826 5.3198h-2.5431c-5.8421.0719-6.2544-.3594-6.1857-6.4701l-.0344-1.8691v-7.189c.0638-7.80011.5793-8.48307 6.2152-8.44712h8.6257v5.89498c-.7217-.35945-2.4399-.61106-4.4675-.68295h-2.165c-1.8901 0-2.0619.17972-2.0619 2.19269v8.5189c-.0344 2.5162.1374 2.8037 1.5464 2.8397h.9966v-5.7872c0-.9705-.1718-1.7972-.4811-2.6958h6.6325v8.3752zm2.0913 5.3198h6.1513v-5.0683h2.5774v5.0683h6.1514v-19.08686c-.0687-4.27746-.8591-4.88852-6.1857-4.88852h-2.5087c-5.3266 0-6.117.64701-6.1857 4.88852zm8.7287-16.7145v6.3263h-2.5774v-6.3263c0-1.50968.3781-2.22858 1.2716-2.22858s1.3058.68296 1.3058 2.22858zm20.1727-7.26088-5.121 18.76328h5.499l-.688 5.2121h-12.3024l5.1894-18.76335h-5.1206l.7216-5.21203zm7.835 5.21198h5.67v-5.21204h-5.739c-5.361-.07189-5.945.64702-6.082 7.69224v7.6563c-.035 3.5226.24 6.1107.721 6.9374.928 1.5456 1.272 1.6535 5.361 1.6894h5.739v-5.212h-5.67v-4.1697h5.67v-5.212h-5.67z"
                      fill="url(#a)"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center">
                <div style={{ position: "relative" }}>
                  <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                    <li>
                      <button
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium 
                        transition-colors hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800
                        dark:hover:text-zinc-50 focus:bg-pink-500 focus:text-zinc-800 focus:outline-none"
                      >
                        Mint
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="relative top-[0px] ml-1 h-3 w-3 transition group-data-[state=open]:rotate-180"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </li>

                    <li>
                      <button className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus:bg-zinc-100 focus:text-zinc-800 focus:outline-none">
                        Trade
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="relative top-[0px] ml-1 h-3 w-3 transition group-data-[state=open]:rotate-180"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </li>

                    <li>
                      <button className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus:bg-zinc-100 focus:text-zinc-800 focus:outline-none">
                        Chain
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="relative top-[0px] ml-1 h-3 w-3 transition group-data-[state=open]:rotate-180"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </li>

                    <li>
                      <button className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus:bg-zinc-100 focus:text-zinc-800 focus:outline-none">
                        Analytics
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="relative top-[0px] ml-1 h-3 w-3 transition group-data-[state=open]:rotate-180"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus:bg-zinc-100 focus:text-zinc-800 focus:outline-none">
                        Apps
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="flex flex-auto flex-row items-center justify-end space-x-5">
              <button className="rounded-lg bg-white shadow-sm sm:text-sm placeholder:text-zinc-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#db3777] focus:ring-0 focus:ring-offset-0 flex h-10 w-[1000px] items-center justify-between !bg-transparent p-2 text-left text-zinc-600 transition-all border border-gray-600 hover:border-gray-400 hover:!bg-zinc-900 xl:w-full xl:!bg-zinc-900/75 xl:px-4">
                <span className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5 text-zinc-500 xl:text-zinc-400"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <span className="xl:inline text-zinc-400">
                    Search for a collection or profile...
                  </span>
                </span>

                <kbd className="h-5 select-none items-center rounded bg-zinc-700 px-1.5 font-mono text-xs font-medium text-zinc-400 opacity-100 xl:inline-flex">
                  <span className="text-base text-zinc-400 mr-1">⌘</span>
                  <span className="translate-y-3">K</span>
                </kbd>
              </button>

              <button
                className="relative inline-flex flex-none items-center justify-center px-3 py-[5px] rounded-lg border border-transparent text-sm text-center font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777] disabled:cursor-not-allowed disabled:opacity-40 bg-black text-white gradient-border"
                type="button"
              >
                GET STARS
              </button>

              <button>
                <div className="relative px-0.5 py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="size-5"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                  </svg>

                  <div className="absolute right-0 top-0 size-3 shrink-0 rounded-full bg-pink-500"></div>
                </div>
              </button>

              <div className="shrink-0">
                <div className="shrink-0">
                  <button className="w-[133.67px] cursor-pointer items-center justify-center rounded-lg bg-[#db2777] py-3 px-4 text-sm font-medium text-white shadow-2xl shadow-primary transition duration-75 ease-in-out hover:bg-[#db2777]/80 lg:w-36 lg:rounded-lg lg:px-4 lg:py-3 xl:w-72">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="mt-[80px]">
        <div className="mx-auto p-8">
          <div className="mx-auto grid grid-cols-2 gap-20 py-0 px-6">
            <div className="top-32 h-fit sticky">
              <div className="relative flex overflow-hidden rounded-lg hover:bg-zinc-900 flex-col size-full border border-zinc-300 dark:border-zinc-800">
                <div
                  className="flex shrink-0 overflow-hidden bg-zinc-900"
                  style={{ aspectRatio: 1 / 1, width: "100%" }}
                >
                  <div className="aspect-square relative max-h-full transform-gpu overflow-hidden leading-[0] transition-transform group-active/card:scale-100 bg-zinc-900 flex items-center justify-center w-full">
                    <div className="flex size-full items-center justify-center">
                      <img
                        className="size-full max-h-full max-w-full object-contain"
                        src="https://i.stargaze-apis.com/YKUJsgttCvgNUKsryWnysMMnibAV9VCNiuobecKv7kE/f:jpg/resize:fit:700:::/dpr:2/plain/ipfs://bafybeicbq3ppvshoxi7tpobqbgztdnilpovlxtyhxxmne3lqwomgywekyi/3956.png"
                        alt=""
                      />
                    </div>

                    <div
                      className="absolute inset-0 z-[-1] size-full bg-cover bg-center blur-xl"
                      style={{
                        backgroundImage:
                          "url('https://i.stargaze-apis.com/MLcnqgJ3j70jofIIgPo3jos7HuCHksUo5Kj3lSdq7Fc/f:jpg/resize:fit:64:::/dpr:2/plain/ipfs://bafybeicbq3ppvshoxi7tpobqbgztdnilpovlxtyhxxmne3lqwomgywekyi/3956.png')",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="flex grow">
                  <div className="flex size-full grow flex-col divide-y divide-zinc-300 dark:divide-zinc-800">
                    <div className="grid grid-cols-1 gap-2 py-2 text-xs sm:text-sm">
                      <div className="grid grid-cols-4 gap-4 p-4">
                        <a
                          className="group space-y-1 rounded-lg border border-[#db3777] px-3.5 py-2.5 text-zinc-400 hover:bg-[#db3777] hover:text-white"
                          href=""
                        >
                          <dl className="flex h-full flex-col">
                            <dt className="break-words text-xs font-medium text-[#db3777] group-hover:text-white">
                              muscles
                            </dt>
                            <dd className="relative z-[2] break-words text-white">
                              26
                            </dd>
                            <div className="mt-auto flex justify-between">
                              <dd className="relative z-[2] py-0.5 text-xs">
                                3.24%
                              </dd>
                              <dd className="relative z-[2] flex items-center gap-1 text-right text-xs">
                                <span
                                  className="inline-flex"
                                  data-state="closed"
                                >
                                  <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                    <span className="inline-flex items-center gap-x-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current inline size-[14px]"
                                      >
                                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm3.18 14.1-.02 6.22-4.34-4.46-5.93 1.9 2.91-5.5-3.65-5.05 6.14 1.06 3.67-5.02.89 6.16 5.91 1.95-5.59 2.75.01-.01Z"></path>
                                      </svg>
                                      10K{" "}
                                    </span>
                                  </span>
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </a>
                        <a
                          className="group space-y-1 rounded-lg border border-[#db3777] px-3.5 py-2.5 text-zinc-400 hover:bg-[#db3777] hover:text-white"
                          href=""
                        >
                          <dl className="flex h-full flex-col">
                            <dt className="break-words text-xs font-medium text-[#db3777] group-hover:text-white">
                              badness
                            </dt>
                            <dd className="relative z-[2] break-words text-white">
                              40
                            </dd>
                            <div className="mt-auto flex justify-between">
                              <dd className="relative z-[2] py-0.5 text-xs">
                                0.86%
                              </dd>
                            </div>
                          </dl>
                        </a>
                        <a
                          className="group space-y-1 rounded-lg border border-[#db3777] px-3.5 py-2.5 text-zinc-400 hover:bg-[#db3777] hover:text-white"
                          href=""
                        >
                          <dl className="flex h-full flex-col">
                            <dt className="break-words text-xs font-medium text-[#db3777] group-hover:text-white">
                              body
                            </dt>
                            <dd className="relative z-[2] break-words text-white">
                              astronaut
                            </dd>
                            <div className="mt-auto flex justify-between">
                              <dd className="relative z-[2] py-0.5 text-xs">
                                0.75%
                              </dd>
                              <dd className="relative z-[2] flex items-center gap-1 text-right text-xs">
                                <span
                                  className="inline-flex"
                                  data-state="closed"
                                >
                                  <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                    <span className="inline-flex items-center gap-x-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current inline size-[14px]"
                                      >
                                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm3.18 14.1-.02 6.22-4.34-4.46-5.93 1.9 2.91-5.5-3.65-5.05 6.14 1.06 3.67-5.02.89 6.16 5.91 1.95-5.59 2.75.01-.01Z"></path>
                                      </svg>
                                      88.89K{" "}
                                    </span>
                                  </span>
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </a>
                        <a
                          className="group space-y-1 rounded-lg border border-[#db3777] px-3.5 py-2.5 text-zinc-400 hover:bg-[#db3777] hover:text-white"
                          href=""
                        >
                          <dl className="flex h-full flex-col">
                            <dt className="break-words text-xs font-medium text-[#db3777] group-hover:text-white">
                              nose
                            </dt>
                            <dd className="relative z-[2] break-words text-white">
                              small triangle
                            </dd>
                            <div className="mt-auto flex justify-between">
                              <dd className="relative z-[2] py-0.5 text-xs">
                                7.44%
                              </dd>
                              <dd className="relative z-[2] flex items-center gap-1 text-right text-xs">
                                <span
                                  className="inline-flex"
                                  data-state="closed"
                                >
                                  <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                    <span className="inline-flex items-center gap-x-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current inline size-[14px]"
                                      >
                                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm3.18 14.1-.02 6.22-4.34-4.46-5.93 1.9 2.91-5.5-3.65-5.05 6.14 1.06 3.67-5.02.89 6.16 5.91 1.95-5.59 2.75.01-.01Z"></path>
                                      </svg>
                                      10K{" "}
                                    </span>
                                  </span>
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </a>
                        <a
                          className="group space-y-1 rounded-lg border border-[#db3777] px-3.5 py-2.5 text-zinc-400 hover:bg-[#db3777] hover:text-white"
                          href=""
                        >
                          <dl className="flex h-full flex-col">
                            <dt className="break-words text-xs font-medium text-[#db3777] group-hover:text-white">
                              eyes
                            </dt>
                            <dd className="relative z-[2] break-words text-white">
                              goofy
                            </dd>
                            <div className="mt-auto flex justify-between">
                              <dd className="relative z-[2] py-0.5 text-xs">
                                1.88%
                              </dd>
                              <dd className="relative z-[2] flex items-center gap-1 text-right text-xs">
                                <span
                                  className="inline-flex"
                                  data-state="closed"
                                >
                                  <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                    <span className="inline-flex items-center gap-x-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current inline size-[14px]"
                                      >
                                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm3.18 14.1-.02 6.22-4.34-4.46-5.93 1.9 2.91-5.5-3.65-5.05 6.14 1.06 3.67-5.02.89 6.16 5.91 1.95-5.59 2.75.01-.01Z"></path>
                                      </svg>
                                      15K{" "}
                                    </span>
                                  </span>
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </a>
                        <a
                          className="group space-y-1 rounded-lg border border-[#db3777] px-3.5 py-2.5 text-zinc-400 hover:bg-[#db3777] hover:text-white"
                          href=""
                        >
                          <dl className="flex h-full flex-col">
                            <dt className="break-words text-xs font-medium text-[#db3777] group-hover:text-white">
                              background
                            </dt>
                            <dd className="relative z-[2] break-words text-white">
                              toothpaste
                            </dd>
                            <div className="mt-auto flex justify-between">
                              <dd className="relative z-[2] py-0.5 text-xs">
                                4.13%
                              </dd>
                              <dd className="relative z-[2] flex items-center gap-1 text-right text-xs">
                                <span
                                  className="inline-flex"
                                  data-state="closed"
                                >
                                  <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                    <span className="inline-flex items-center gap-x-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current inline size-[14px]"
                                      >
                                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm3.18 14.1-.02 6.22-4.34-4.46-5.93 1.9 2.91-5.5-3.65-5.05 6.14 1.06 3.67-5.02.89 6.16 5.91 1.95-5.59 2.75.01-.01Z"></path>
                                      </svg>
                                      12.5K{" "}
                                    </span>
                                  </span>
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </a>
                        <a
                          className="group space-y-1 rounded-lg border border-[#db3777] px-3.5 py-2.5 text-zinc-400 hover:bg-[#db3777] hover:text-white"
                          href=""
                        >
                          <dl className="flex h-full flex-col">
                            <dt className="break-words text-xs font-medium text-[#db3777] group-hover:text-white">
                              brains
                            </dt>
                            <dd className="relative z-[2] break-words text-white">
                              44
                            </dd>
                            <div className="mt-auto flex justify-between">
                              <dd className="relative z-[2] py-0.5 text-xs">
                                1.93%
                              </dd>
                              <dd className="relative z-[2] flex items-center gap-1 text-right text-xs">
                                <span
                                  className="inline-flex"
                                  data-state="closed"
                                >
                                  <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                    <span className="inline-flex items-center gap-x-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current inline size-[14px]"
                                      >
                                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm3.18 14.1-.02 6.22-4.34-4.46-5.93 1.9 2.91-5.5-3.65-5.05 6.14 1.06 3.67-5.02.89 6.16 5.91 1.95-5.59 2.75.01-.01Z"></path>
                                      </svg>
                                      11K{" "}
                                    </span>
                                  </span>
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </a>
                        <a
                          className="group space-y-1 rounded-lg border border-[#db3777] px-3.5 py-2.5 text-zinc-400 hover:bg-[#db3777] hover:text-white"
                          href=""
                        >
                          <dl className="flex h-full flex-col">
                            <dt className="break-words text-xs font-medium text-[#db3777] group-hover:text-white">
                              skin
                            </dt>
                            <dd className="relative z-[2] break-words text-white">
                              B
                            </dd>
                            <div className="mt-auto flex justify-between">
                              <dd className="relative z-[2] py-0.5 text-xs">
                                12.1%
                              </dd>
                              <dd className="relative z-[2] flex items-center gap-1 text-right text-xs">
                                <span
                                  className="inline-flex"
                                  data-state="closed"
                                >
                                  <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                    <span className="inline-flex items-center gap-x-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current inline size-[14px]"
                                      >
                                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm3.18 14.1-.02 6.22-4.34-4.46-5.93 1.9 2.91-5.5-3.65-5.05 6.14 1.06 3.67-5.02.89 6.16 5.91 1.95-5.59 2.75.01-.01Z"></path>
                                      </svg>
                                      11K{" "}
                                    </span>
                                  </span>
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </a>
                        <a
                          className="group space-y-1 rounded-lg border border-[#db3777] px-3.5 py-2.5 text-zinc-400 hover:bg-[#db3777] hover:text-white"
                          href=""
                        >
                          <dl className="flex h-full flex-col">
                            <dt className="break-words text-xs font-medium text-[#db3777] group-hover:text-white">
                              mouth
                            </dt>
                            <dd className="relative z-[2] break-words text-white">
                              dissatisfied
                            </dd>
                            <div className="mt-auto flex justify-between">
                              <dd className="relative z-[2] py-0.5 text-xs">
                                4.75%
                              </dd>
                              <dd className="relative z-[2] flex items-center gap-1 text-right text-xs">
                                <span
                                  className="inline-flex"
                                  data-state="closed"
                                >
                                  <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                    <span className="inline-flex items-center gap-x-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current inline size-[14px]"
                                      >
                                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm3.18 14.1-.02 6.22-4.34-4.46-5.93 1.9 2.91-5.5-3.65-5.05 6.14 1.06 3.67-5.02.89 6.16 5.91 1.95-5.59 2.75.01-.01Z"></path>
                                      </svg>
                                      9.9K{" "}
                                    </span>
                                  </span>
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </a>
                        <a
                          className="group space-y-1 rounded-lg border border-[#db3777] px-3.5 py-2.5 text-zinc-400 hover:bg-[#db3777] hover:text-white"
                          href=""
                        >
                          <dl className="flex h-full flex-col">
                            <dt className="break-words text-xs font-medium text-[#db3777] group-hover:text-white">
                              age
                            </dt>
                            <dd className="relative z-[2] break-words text-white">
                              11
                            </dd>
                            <div className="mt-auto flex justify-between">
                              <dd className="relative z-[2] py-0.5 text-xs">
                                17.37%
                              </dd>
                              <dd className="relative z-[2] flex items-center gap-1 text-right text-xs">
                                <span
                                  className="inline-flex"
                                  data-state="closed"
                                >
                                  <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                    <span className="inline-flex items-center gap-x-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current inline size-[14px]"
                                      >
                                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm3.18 14.1-.02 6.22-4.34-4.46-5.93 1.9 2.91-5.5-3.65-5.05 6.14 1.06 3.67-5.02.89 6.16 5.91 1.95-5.59 2.75.01-.01Z"></path>
                                      </svg>
                                      9.9K{" "}
                                    </span>
                                  </span>
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <a
                      className="mb-2 text-xs font-semibold uppercase text-[#db3777] hover:text-[#db3777]/80"
                      href=""
                    >
                      Bit Kids
                    </a>
                    <div className="mb-2 text-2xl font-semibold">
                      <span>Bit Kid #3956</span>
                    </div>
                  </div>

                  <button
                    className="flex-none rounded-lg text-sm text-center font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777] disabled:cursor-not-allowed disabled:opacity-40 text-red-500 !bg-transparent border-red-500 hover:!bg-red-600 hover:border-red-600 hover:text-white shadow-sm inline-flex items-center justify-center border-0 px-2 py-1.5"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="size-5"
                      aria-hidden="true"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </button>
                </div>

                <div className=" text-sm text-zinc-300">
                  Maybe in a parallel universe where I got the computer I wanted
                  for my 11th birthday, this would have been the original
                  version of Bad Kids.
                </div>
              </div>

              <p className="mt-2 text-sm text-zinc-300">
                <span>Created by </span>
                <span className="group inline-flex items-center gap-2 cursor-pointer">
                  <a
                    className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                    href=""
                  >
                    <span className="inline-flex" data-state="closed">
                      <span className="relative inline-flex max-w-full overflow-hidden">
                        <span className="max-w-full break-all transition"></span>
                        <span className="absolute inset-0 inline-flex items-center transition translate-y-8 opacity-0">
                          <span className="truncate" aria-hidden="true">
                            stars15y38ehvexp6275ptmm4jj3qdds379nk07tw95r
                          </span>
                        </span>
                      </span>
                    </span>
                  </a>
                  <button
                    aria-label="Copy"
                    className="invisible group-hover:visible inline"
                  >
                    <span className="inline-flex" data-state="closed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="clipboard-check w-4 h-4 text-white hidden"
                      >
                        <rect
                          width="8"
                          height="4"
                          x="8"
                          y="2"
                          rx="1"
                          ry="1"
                        ></rect>
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <path d="m9 14 2 2 4-4"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-4 h-4 text-white inline"
                      >
                        <rect
                          width="14"
                          height="14"
                          x="8"
                          y="8"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </p>

              <div className="inline-flex text-sm font-semibold text-zinc-300 mt-2">
                <div className="inline-flex items-center gap-x-0.5 leading-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="size-3.5"
                  >
                    <line x1="12" x2="12" y1="20" y2="10"></line>
                    <line x1="18" x2="18" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="16"></line>
                  </svg>{" "}
                  2850
                </div>
              </div>

              <div className="my-8">
                <div className="grid gap-4 sm:max-w-xs">
                  <button
                    className="flex-none rounded-lg border border-transparent text-center 
                  font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                  focus-visible:outline-[#db3777] disabled:cursor-not-allowed disabled:opacity-40 
                  !bg-[#db3777] text-white shadow-sm hover:!bg-[#db3777]/80 inline-flex items-center justify-center h-10 px-4 py-2 text-sm w-72"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="mr-2 w-5"
                    >
                      <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M6 12h.01M18 12h.01"></path>
                    </svg>
                    <span>Make Offer</span>
                  </button>
                </div>
              </div>

              <div className="w-[500px] my-8 flex flex-wrap justify-start gap-y-3 rounded-lg border border-zinc-800 p-4 md:mt-0 md:justify-between md:gap-y-3 md:p-4">
                <div className="flex w-1/3 flex-col gap-1 md:w-auto md:gap-2">
                  <div className="text-sm text-zinc-400">Price</div>
                  <div className="text-sm text-white">
                    <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                      —
                    </span>
                  </div>
                </div>
                <div className="flex w-1/3 flex-col gap-1 md:w-auto md:gap-2">
                  <div className="text-sm text-zinc-400">Last Sale</div>
                  <div className="text-sm text-white">
                    <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                      <span className="inline-flex" data-state="closed">
                        <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                          <span className="inline-flex items-center gap-x-1">
                            16K STARS
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-1/3 flex-col gap-1 md:w-auto md:gap-2">
                  <div className="text-sm text-zinc-400">Owner</div>
                  <div className="text-sm text-white">
                    <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                      <span className="group inline-flex items-center gap-2 cursor-pointer">
                        <a
                          className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                          href=""
                        >
                          <span className="inline-flex" data-state="closed">
                            <span className="relative inline-flex max-w-full overflow-hidden">
                              <span
                                aria-hidden="false"
                                className="max-w-full break-all transition"
                              >
                                captainjer...
                              </span>
                              <span className="absolute inset-0 inline-flex items-center transition translate-y-8 opacity-0">
                                <span className="truncate" aria-hidden="true">
                                  168m...89pc
                                </span>
                              </span>
                            </span>
                          </span>
                        </a>
                        <button
                          aria-label="Copy"
                          className="invisible group-hover:visible inline"
                        >
                          <span className="inline-flex" data-state="closed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="w-4 h-4 text-white hidden"
                            >
                              <rect
                                width="8"
                                height="4"
                                x="8"
                                y="2"
                                rx="1"
                                ry="1"
                              ></rect>
                              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                              <path d="m9 14 2 2 4-4"></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="w-4 h-4 text-white inline"
                            >
                              <rect
                                width="14"
                                height="14"
                                x="8"
                                y="8"
                                rx="2"
                                ry="2"
                              ></rect>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-1/3 flex-col gap-1 md:w-auto md:gap-2">
                  <div className="text-sm text-zinc-400">Top Offer</div>
                  <div className="text-sm text-white">
                    <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                      <span className="inline-flex" data-state="closed">
                        <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                          <span className="inline-flex items-center gap-x-1">
                            8K STARS
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex w-1/3 flex-col gap-1 md:w-auto md:gap-2 flex-auto md:flex-none">
                  <div className="text-sm text-zinc-400">Floor Price</div>
                  <div className="text-sm text-white">
                    <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                      <span className="inline-flex" data-state="closed">
                        <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                          <span className="inline-flex items-center gap-x-1">
                            9.7K STARS
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="col-span-2 mt-8 rounded-lg border border-zinc-800 scrollbar-hide">
                  <h1 className="inline-flex flex-auto items-center gap-2 p-4 text-lg font-semibold tracking-tight">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-hand-coins size-4"
                    >
                      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                      <path d="m2 16 6 6" />
                      <circle cx={16} cy={9} r="2.9" />
                      <circle cx={6} cy={5} r={3} />
                    </svg>
                    <span>Top Offers</span>
                  </h1>
                  <div className="relative w-full max-h-96 overflow-y-auto">
                    <table className="w-full caption-bottom text-sm max-h-96 overflow-y-auto">
                      <thead className="[&_tr]:border-b sticky top-0 bg-black/75 backdrop-blur-lg z-[1] border-zinc-800">
                        <tr className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800">
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            Type
                          </th>
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            Accept Offer
                          </th>
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            Floor (% Δ)
                          </th>
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            Expires
                          </th>
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            From
                          </th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              COLLECTION
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    8K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">-17% below</div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                in 14d
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/turbadrum-on-discord"
                                >
                                  <span
                                    className="inline-flex"
                                    data-state="closed"
                                  >
                                    <span className="relative inline-flex max-w-full overflow-hidden">
                                      <span
                                        aria-hidden="false"
                                        className="max-w-full break-all transition"
                                      >
                                        turbadrum-...
                                      </span>
                                      <span className="absolute inset-0 inline-flex items-center transition translate-y-8 opacity-0">
                                        <span
                                          className="truncate"
                                          aria-hidden="true"
                                        >
                                          1fxz...qpcs
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              COLLECTION
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    8K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">-18% below</div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                in 13d
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars103n0x78hlqg0egzg2932ya9kcwaq9js4mnkync"
                                >
                                  103n...kync
                                </a>
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              COLLECTION
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    7.8K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">-20% below</div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                in 14d
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/nechto"
                                >
                                  <span
                                    className="inline-flex"
                                    data-state="closed"
                                  >
                                    <span className="relative inline-flex max-w-full overflow-hidden">
                                      <span
                                        aria-hidden="false"
                                        className="max-w-full break-all transition"
                                      >
                                        nechto
                                      </span>
                                      <span className="absolute inset-0 inline-flex items-center transition translate-y-8 opacity-0">
                                        <span
                                          className="truncate"
                                          aria-hidden="true"
                                        >
                                          15a4...yehz
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              COLLECTION
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    7.8K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">-20% below</div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                in 14d
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1p3elewj6tz2t5t30s09r6lqswu8hpk5svphhaa"
                                >
                                  1p3e...hhaa
                                </a>
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              COLLECTION
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    7.75K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">-20% below</div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                in 14d
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars185yv4ka7ymn3f6meq7k3g42nxrgfeykjkua59c"
                                >
                                  185y...a59c
                                </a>
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-span-2 mt-8 rounded-lg border border-zinc-800">
                  <div className="flex flex-col gap-4 p-4">
                    <h1 className="inline-flex flex-auto items-center gap-2 text-lg font-semibold tracking-tight">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-activity size-4"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                      <span>Item Activity</span>
                    </h1>
                    <div
                      role="group"
                      dir="ltr"
                      className="flex items-center flex-wrap gap-1 justify-start"
                      tabIndex={0}
                      style={{ outline: "none" }}
                    >
                      <button
                        type="button"
                        aria-pressed="false"
                        data-state="off"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-zinc-100 data-[state=on]:text-zinc-900 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=on]:bg-zinc-800 dark:data-[state=on]:text-zinc-50 border border-zinc-200 bg-transparent hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-2.5"
                        tabIndex={-1}
                        data-radix-collection-item=""
                      >
                        LIST
                      </button>
                      <button
                        type="button"
                        aria-pressed="false"
                        data-state="off"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-zinc-100 data-[state=on]:text-zinc-900 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=on]:bg-zinc-800 dark:data-[state=on]:text-zinc-50 border border-zinc-200 bg-transparent hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-2.5"
                        tabIndex={-1}
                        data-radix-collection-item=""
                      >
                        UNLIST
                      </button>
                      <button
                        type="button"
                        aria-pressed="false"
                        data-state="off"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-zinc-100 data-[state=on]:text-zinc-900 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=on]:bg-zinc-800 dark:data-[state=on]:text-zinc-50 border border-zinc-200 bg-transparent hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-2.5"
                        tabIndex={-1}
                        data-radix-collection-item=""
                      >
                        PRICE CHANGE
                      </button>
                      <button
                        type="button"
                        aria-pressed="false"
                        data-state="off"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-zinc-100 data-[state=on]:text-zinc-900 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=on]:bg-zinc-800 dark:data-[state=on]:text-zinc-50 border border-zinc-200 bg-transparent hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-2.5"
                        tabIndex={-1}
                        data-radix-collection-item=""
                      >
                        OFFER
                      </button>
                      <button
                        type="button"
                        aria-pressed="false"
                        data-state="off"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-zinc-100 data-[state=on]:text-zinc-900 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=on]:bg-zinc-800 dark:data-[state=on]:text-zinc-50 border border-zinc-200 bg-transparent hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-2.5"
                        tabIndex={-1}
                        data-radix-collection-item=""
                      >
                        REJECT OFFER
                      </button>
                      <button
                        type="button"
                        aria-pressed="false"
                        data-state="off"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-zinc-100 data-[state=on]:text-zinc-900 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=on]:bg-zinc-800 dark:data-[state=on]:text-zinc-50 border border-zinc-200 bg-transparent hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-2.5"
                        tabIndex={-1}
                        data-radix-collection-item=""
                      >
                        TRANSFER
                      </button>
                      <button
                        type="button"
                        aria-pressed="false"
                        data-state="off"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-zinc-100 data-[state=on]:text-zinc-900 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=on]:bg-zinc-800 dark:data-[state=on]:text-zinc-50 border border-zinc-200 bg-transparent hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-2.5"
                        tabIndex={-1}
                        data-radix-collection-item=""
                      >
                        REMOVE OFFER
                      </button>
                      <button
                        type="button"
                        aria-pressed="false"
                        data-state="off"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-zinc-100 data-[state=on]:text-zinc-900 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=on]:bg-zinc-800 dark:data-[state=on]:text-zinc-50 border border-zinc-200 bg-transparent hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-2.5"
                        tabIndex={-1}
                        data-radix-collection-item=""
                      >
                        SALE
                      </button>
                    </div>
                  </div>
                  <div className="relative w-full max-h-96 overflow-y-auto">
                    <table className="w-full caption-bottom text-sm max-h-96 overflow-y-auto">
                      <thead className="[&_tr]:border-b sticky top-0 bg-black/75 backdrop-blur-lg z-[1] border-zinc-800 !static">
                        <tr className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800">
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            Event
                          </th>
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            Price
                          </th>
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            From
                          </th>
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            To
                          </th>
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              REMOVE OFFER
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0" />
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/turbadrum-on-discord"
                                >
                                  <span
                                    className="inline-flex"
                                    data-state="closed"
                                  >
                                    <span className="relative inline-flex max-w-full overflow-hidden">
                                      <span
                                        aria-hidden="false"
                                        className="max-w-full break-all transition"
                                      >
                                        turbadrum-...
                                      </span>
                                      <span className="absolute inset-0 inline-flex items-center transition translate-y-8 opacity-0">
                                        <span
                                          className="truncate"
                                          aria-hidden="true"
                                        >
                                          1fxz...qpcs
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/59D9DD28972EAC6F0D0F9A3E6457496B4DB0199F339618837454D0BFA6F7D0AC"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                8mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              OFFER
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    6.5K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/turbadrum-on-discord"
                                >
                                  <span
                                    className="inline-flex"
                                    data-state="closed"
                                  >
                                    <span className="relative inline-flex max-w-full overflow-hidden">
                                      <span
                                        aria-hidden="false"
                                        className="max-w-full break-all transition"
                                      >
                                        turbadrum-...
                                      </span>
                                      <span className="absolute inset-0 inline-flex items-center transition translate-y-8 opacity-0">
                                        <span
                                          className="truncate"
                                          aria-hidden="true"
                                        >
                                          1fxz...qpcs
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/6C51E35F2420CFC89816FB154FD4883441D715CD35C90AE235F432FECC0D700C"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                8mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              OFFER
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    16K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1uzu3huj9hfwg8jzg7p0y2p20ch2etay8l7mgajjj59ldpthmf4aq050q32"
                                >
                                  1uzu...0q32
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/AABB1B388E3AD13074E9ECD2A7B4C36581A8B8831CCEF2C16DAFEFAAE8B64822"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                8mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              SALE
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    16K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1xun3qq5veudusxys2rygxkduqld3yq9cvc5tr0"
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1uzu3huj9hfwg8jzg7p0y2p20ch2etay8l7mgajjj59ldpthmf4aq050q32"
                                >
                                  1uzu...0q32
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/AABB1B388E3AD13074E9ECD2A7B4C36581A8B8831CCEF2C16DAFEFAAE8B64822"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                8mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              TRANSFER
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0" />
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1fvhcnyddukcqfnt7nlwv3thm5we22lyxyxylr9h77cvgkcn43xfsvgv0pl"
                                >
                                  1fvh...v0pl
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/captainjerk"
                                >
                                  <span
                                    className="inline-flex"
                                    data-state="closed"
                                  >
                                    <span className="relative inline-flex max-w-full overflow-hidden">
                                      <span
                                        aria-hidden="false"
                                        className="max-w-full break-all transition"
                                      >
                                        captainjer...
                                      </span>
                                      <span className="absolute inset-0 inline-flex items-center transition translate-y-8 opacity-0">
                                        <span
                                          className="truncate"
                                          aria-hidden="true"
                                        >
                                          168m...89pc
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/AABB1B388E3AD13074E9ECD2A7B4C36581A8B8831CCEF2C16DAFEFAAE8B64822"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                8mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              PRICE CHANGE
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    16K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/45B9D4B2E896FD5A8138414671B1B5D26D5DD51D2601F906C557375920E0F54F"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                8mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              REJECT OFFER
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    6.3K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1j6yw6aldlctpaz2na3awsnexle3a8k6z8x9744"
                                >
                                  1j6y...9744
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/3E02DE3C7A81F6E450B4C3DD8F1C10A152504D2BE03C0634304BA14320B0E724"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              OFFER
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    6.3K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1j6yw6aldlctpaz2na3awsnexle3a8k6z8x9744"
                                >
                                  1j6y...9744
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/7472559A29E93F533AC82F7F973BC689C17247A07C17EA55D58A8C96DBB668A0"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              PRICE CHANGE
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    19K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/DA6377D248F166E817AD50DEEC69E73F8014F76CFAF155C1DED23C9E8E3C0F64"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    20K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1xun3qq5veudusxys2rygxkduqld3yq9cvc5tr0"
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/3E7FD81F5DAFFCA461D7662F7AE94EA18EE45E27BBCACBAD4BD071C113FD2369"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    22K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1xun3qq5veudusxys2rygxkduqld3yq9cvc5tr0"
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/2975DA34D2B691E4E8D54BE460B364872CC1104DB4DD18A936BDA9D65B6493FB"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              REJECT OFFER
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    7K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1cxdsmzcqfwscnmuun3knlhshfvrhgge6s2g693"
                                >
                                  1cxd...g693
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/BB3546A0F48B4268EFC04146AF33375A2C3A63A34FB94F4DA89615A436EF61F8"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              OFFER
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    7K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1cxdsmzcqfwscnmuun3knlhshfvrhgge6s2g693"
                                >
                                  1cxd...g693
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/9263F379B8D2CE684366D3ECEA3935CA6AFECF1B39FC70339F60B5615474F429"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    20K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1xun3qq5veudusxys2rygxkduqld3yq9cvc5tr0"
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/D9B10683531D0AC86A6268BDCFC2D245A9452BABBDBCD78C08C24F5ECEE09644"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    21K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href=""
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/232FFC7BC8859DF5CB1E9C915DCB88566D63C5E0EF7D6D89BE54EE1355255E5E"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    19K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href=""
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/7830E2EE9B5361B7FAE208DC87DAD4F24BE986F41D5AEEC38166BFF5ED3CC1C1"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    22.5K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1xun3qq5veudusxys2rygxkduqld3yq9cvc5tr0"
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/986F8F4F9AB83F9C7183B0598B299F8E5F79232965F4D0D5BF5B1D4CF6CC9A68"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    25K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1xun3qq5veudusxys2rygxkduqld3yq9cvc5tr0"
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/D14FE77EA9655087769798B38ACD6077D557EAD8DC5487D3E37D4E331BD3315F"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    37K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1xun3qq5veudusxys2rygxkduqld3yq9cvc5tr0"
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/795C033501BDA38FECC18FCE9B8F495E5B56FCC3B6E26297AC8EA4CDCC255555"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                9mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    50K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1xun3qq5veudusxys2rygxkduqld3yq9cvc5tr0"
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/9A79C08B90A408DC3096A1947F2FDB8BA9EC84A5A9F2792C795331FD6C5205C6"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                10mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              PRICE CHANGE
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    35K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/74ABF1D931E903839E82E534EA5A32157D3F5BCBB95F288B36BFFCC84A1B8118"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                10mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    70K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1xun3qq5veudusxys2rygxkduqld3yq9cvc5tr0"
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/780437A35D6D5539A260D7DE2AAC3569119C62548D958CC7C4047D8C19D72AA1"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                10mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              UNLIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0" />
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/C208916BB44D95D726C9E5612D89EC9203DDFD2490C5032EF0865686F6BA315A"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                10mo
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              PRICE CHANGE
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    50K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/7ACA03EE8F6BD30A0B5C17C491F51A85C448BBBF99A82C563DC7E880CB3B8ABE"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                1y
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    35K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1xun3qq5veudusxys2rygxkduqld3yq9cvc5tr0"
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/53887F26972B58724DAF4B0C0BA63544F1265C54141FCE09A091137F7E00E5B5"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                1y
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              UNLIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0" />
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/3AE4A1A8474CC93B4165EDD052165FDDEB13560800732EC93A3B1286EAEF6FFE"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                1y
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    70K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1xun3qq5veudusxys2rygxkduqld3yq9cvc5tr0"
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/E37259371943E91D0CDE3C31A805229C03FFD6C5AE9517A28D930DE143F01561"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                1y
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              TRANSFER
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0" />
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/degen"
                                >
                                  <span
                                    className="inline-flex"
                                    data-state="closed"
                                  >
                                    <span className="relative inline-flex max-w-full overflow-hidden">
                                      <span
                                        aria-hidden="false"
                                        className="max-w-full break-all transition"
                                      >
                                        degen
                                      </span>
                                      <span className="absolute inset-0 inline-flex items-center transition translate-y-8 opacity-0">
                                        <span
                                          className="truncate"
                                          aria-hidden="true"
                                        >
                                          1pv0...xjm6
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/stars1xun3qq5veudusxys2rygxkduqld3yq9cvc5tr0"
                                >
                                  1xun...5tr0
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/632D11F9CA651CC487C874F58B2AA5F0ABA7AA50DEE57EDE46A07CFBF9A755EF"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                1y
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              UNLIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0" />
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/F8FC5A8EE399FB9589A6F80577D723706F680A14833FA67240E99F1F65CA34B5"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                1y
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    20K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/degen"
                                >
                                  <span
                                    className="inline-flex"
                                    data-state="closed"
                                  >
                                    <span className="relative inline-flex max-w-full overflow-hidden">
                                      <span
                                        aria-hidden="false"
                                        className="max-w-full break-all transition"
                                      >
                                        degen
                                      </span>
                                      <span className="absolute inset-0 inline-flex items-center transition translate-y-8 opacity-0">
                                        <span
                                          className="truncate"
                                          aria-hidden="true"
                                        >
                                          1pv0...xjm6
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/EDFC1FB10DB23CC8390B52F1816150C714CB29F905961694E09F26CD6FDF838E"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                1y
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              UNLIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0" />
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/F2DC97793CC0242F615B0E2078A48D0DF19D43EFF16CEE3F0BEBE510BCD673A8"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                1y
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    25K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href=""
                                >
                                  <span
                                    className="inline-flex"
                                    data-state="closed"
                                  >
                                    <span className="relative inline-flex max-w-full overflow-hidden">
                                      <span
                                        aria-hidden="false"
                                        className="max-w-full break-all transition"
                                      >
                                        degen
                                      </span>
                                      <span className="absolute inset-0 inline-flex items-center transition translate-y-8 opacity-0">
                                        <span
                                          className="truncate"
                                          aria-hidden="true"
                                        >
                                          1pv0...xjm6
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/83607C72936B79CEE363627DF9F5D7A00D491B897D382C31B91025B8B73CBFAD"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                1y
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              UNLIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0" />
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/71FB0421E4559E7446CB04CD56EC3A48A347470B97CB2E2203A936A11C581D9C"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                1y
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              LIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="w-max text-sm">
                              <span className="inline-flex" data-state="closed">
                                <span className="relative -inset-x-0.5 !h-max rounded p-0.5">
                                  <span className="inline-flex items-center gap-x-1">
                                    27K STARS
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/degen"
                                >
                                  <span
                                    className="inline-flex"
                                    data-state="closed"
                                  >
                                    <span className="relative inline-flex max-w-full overflow-hidden">
                                      <span
                                        aria-hidden="false"
                                        className="max-w-full break-all transition"
                                      >
                                        degen
                                      </span>
                                      <span className="absolute inset-0 inline-flex items-center transition translate-y-8 opacity-0">
                                        <span
                                          className="truncate"
                                          aria-hidden="true"
                                        >
                                          1pv0...xjm6
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/C8253F98BDFB35D7E7EC97E666B685C2E63AA41FB4A5EC5C421E8413D75CE14E"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                1y
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                              UNLIST
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0" />
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm">
                              <span className="group inline-flex items-center gap-2">
                                <a
                                  className="rounded-sm text-[#db3777] hover:text-[#db3777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db3777]"
                                  href="/p/undefined"
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <a
                              href="https://www.mintscan.io/stargaze/txs/536731A1A8DCE03F8DBF24936EE73FDC242E00ECF4BC2E3DDBE618F762915537"
                              target="_blank"
                              className="inline-flex w-max items-center gap-2 text-sm hover:text-zinc-400"
                            >
                              <span className="inline-flex" data-state="closed">
                                1y
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-square-arrow-out-up-right w-4"
                              >
                                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                <path d="m21 3-9 9" />
                                <path d="M15 3h6v6" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-span-2 mt-8 rounded-lg border border-zinc-800">
                  <div className="p-4">
                    <h1 className="inline-flex flex-auto items-center gap-2 text-lg font-semibold tracking-tight">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin size-4"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                      Provenance
                    </h1>
                  </div>
                  <div className="relative w-full max-h-96 overflow-y-auto">
                    <table className="w-full caption-bottom text-sm max-h-96 overflow-y-auto">
                      <thead className="[&_tr]:border-b sticky top-0 bg-black/75 backdrop-blur-lg z-[1] border-zinc-800 !static">
                        <tr className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800">
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            Chain
                          </th>
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            Contract
                          </th>
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            Bridge
                          </th>
                          <th className="h-12 px-4 text-left text-sm align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400">
                            Channel
                          </th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        <tr
                          className="border-b border-zinc-800 transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800"
                          data-state="false"
                        >
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="flex items-center gap-2 text-sm font-bold">
                              <img
                                src="https://stargaze.zone/logo.png"
                                alt="Stargaze"
                                className="size-6"
                              />
                              Stargaze
                            </div>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <span className="group inline-flex items-center gap-2 cursor-pointer text-sm">
                              <button>stars1...0z5v</button>
                              <button
                                aria-label="Copy"
                                className="invisible group-hover:visible inline"
                              >
                                <span
                                  className="inline-flex"
                                  data-state="closed"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-clipboard-check w-4 h-4 text-white hidden"
                                  >
                                    <rect
                                      width={8}
                                      height={4}
                                      x={8}
                                      y={2}
                                      rx={1}
                                      ry={1}
                                    />
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                    <path d="m9 14 2 2 4-4" />
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-copy w-4 h-4 text-white inline"
                                  >
                                    <rect
                                      width={14}
                                      height={14}
                                      x={8}
                                      y={8}
                                      rx={2}
                                      ry={2}
                                    />
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                  </svg>
                                </span>
                              </button>
                            </span>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <span className="group inline-flex items-center gap-2 cursor-pointer text-sm">
                              <button />
                              <button
                                aria-label="Copy"
                                className="invisible group-hover:visible hidden"
                              >
                                <span
                                  className="inline-flex"
                                  data-state="closed"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-clipboard-check w-4 h-4 text-white hidden"
                                  >
                                    <rect
                                      width={8}
                                      height={4}
                                      x={8}
                                      y={2}
                                      rx={1}
                                      ry={1}
                                    />
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                    <path d="m9 14 2 2 4-4" />
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-copy w-4 h-4 text-white inline"
                                  >
                                    <rect
                                      width={14}
                                      height={14}
                                      x={8}
                                      y={8}
                                      rx={2}
                                      ry={2}
                                    />
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                  </svg>
                                </span>
                              </button>
                            </span>
                          </td>
                          <td className="px-4 py-2 text-sm sm:text-base align-middle [&:has([role=checkbox])]:pr-0">
                            <div className="text-sm" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
