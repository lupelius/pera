import Image from "next/image";

export default function Home() {
  const pe = (url, title, paragraph) => <a
    href={url}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="flex flex-row">
      <div className="group rounded-lg border border-transparent">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <Image
                className="ml-8"
                src="/pera.png"
                alt="Pera Lisbon Logo"
                width={120}
                height={120}
                priority
              />
            </div>
            <div class="flip-card-back">
                <p class="title">{title}</p>
                <p>{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="group rounded-lg border border-transparent ml-8">
        <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                <Image
                  className="ml-8"
                  src="/pera.png"
                  alt="Pera Lisbon Logo"
                  width={120}
                  height={120}
                  priority
                />
              </div>
              <div class="flip-card-back">
                  <p class="title">{title}</p>
                  <p>{paragraph}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="flip-card mt-8">
      <div class="flip-card-inner">
          <div class="flip-card-front">
            <Image
              className="ml-8"
              src="/pera.png"
              alt="Pera Lisbon Logo"
              width={120}
              height={120}
              priority
            />
          </div>
          <div class="flip-card-back">
              <p class="title">{title}</p>
              <p>{paragraph}</p>
          </div>
      </div>
    </div>
  </a>
  const item = (url, title, paragraph) => <a
    href={url}
    className={`first-left-margin space-top group rounded-lg border border-transparent px-5 py-4 transition-colors`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="flip-card">
      <div class="flip-card-inner">
          <div class="flip-card-front">
            <Image
              className="ml-8"
              src="/pera.png"
              alt="Pera Lisbon Logo"
              width={120}
              height={120}
              priority
            />
          </div>
          <div class="flip-card-back">
              <p class="title">{title}</p>
              <p>{paragraph}</p>
          </div>
      </div>
    </div>
  </a>
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="ml-4 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Life is ours, we live it&nbsp;
          <code className="font-mono font-bold">our way</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="geologica-bold pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            BE
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
          {pe("https://peralisboa.com", "Take me to church", "Or shopping")}
          {item("https://peralisboa.com", "Take me to church", "Or somewhere else", true)}
          {item("https://peralisboa.com", "Take me to church", "Or not")}
          {item("https://peralisboa.com", "Take me to church", "Or maybe")}

      </div>
    </main>
  );
}
