import Image from "next/image";

export default function Home() {

  const img = 
    <Image
      className="ml-3"
      src="/pera.png"
      alt="Pera Lisbon Logo"
      width={160}
      height={160}
      priority
    />
  const pe = (array) => <div
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
  >
    <div className="flex flex-row">
      <a 
        className="group rounded-lg border border-transparent"
        href={array[0].url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
               {img}
            </div>
            <div class="flip-card-back">
                <p class="title">{array[0].title}</p>
                <p>{array[0].paragraph}</p>
            </div>
          </div>
        </div>
      </a>
      <a className="group rounded-lg border border-transparent ml-8"
        href={array[1].url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                {img}
              </div>
              <div class="flip-card-back">
                  <p class="title">{array[1].title}</p>
                  <p>{array[1].paragraph}</p>
              </div>
          </div>
        </div>
      </a>
    </div>
    
    <a 
      href={array[2].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="flip-card mt-8">
      <div class="flip-card-inner">
          <div class="flip-card-front">
            {img}
          </div>
          <div class="flip-card-back">
              <p class="title">{array[2].title}</p>
              <p>{array[2].paragraph}</p>
          </div>
      </div>
      </div>
    </a>
  </div>
  const item = (url, title, paragraph, bg) => <a
    href={url}
    className={`first-left-margin space-top group rounded-lg border border-transparent px-5 py-4 transition-colors`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="flip-card">
      <div class="flip-card-inner">
          <div class="flip-card-front">
            {img}
          </div>
          <div class="flip-card-back" style={{background: bg}}>
              <p class="title">{title}</p>
              <p>{paragraph}</p>
          </div>
      </div>
    </div>
  </a>

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between open-sans-normal text-sm lg:flex">
        <p className="ml-4 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Life is ours, we live it&nbsp;
          <code className="font-mono open-sans-bold ">our way</code>
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

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
          {pe([
            {url: "https://peralisboa.com/pages/about", title: "About us", paragraph: "about you"},
            {url: "https://peralisboa.com", title: "Take me to church", paragraph: "Or shopping"},
            {url: "https://peralisboa.com/pages/events", title: "Events are fun", paragraph: "right?"},
          ])}
          {item("https://peralisboa.com/pages/workshops", "Workshops", "Or not to workshops", "#960018")}
          {item("https://peralisboa.com/pages/art", "Art is for art", "Or for humans", "#120A8F")}
          {item("https://www.google.com/maps/place/Pera+Lisboa/@38.7093854,-9.1507565,17z/data=!3m1!4b1!4m6!3m5!1s0xd193592b3b63555:0x47a08d5d9b063ba1!8m2!3d38.7093854!4d-9.1507565!16s%2Fg%2F11v64zz_84?entry=ttu", 
            "Come to us,", "perhaps", "#FFD700")}

      </div>
    </main>
  );
}
