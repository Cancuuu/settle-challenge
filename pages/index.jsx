import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-col h-screen w-screen">
      <nav className="px-16 py-4 w-screen griddie">
        <h1 className="col-start-1 col-end-3 text-4xl">
          <span className="mr-2">⛳️</span>{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Buyapp
          </span>
        </h1>
        <button className="col-start-10 col-end-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg drop-shadow-2xl">
          <Link href="/trade">
            <a className="flex items-center justify-center text-white py-2 text-xl">
              Enter App <span className="text-2xl ml-2">→</span>
            </a>
          </Link>
        </button>
      </nav>
      <div className="griddie h-full w-full">
        <div className="col-start-3 col-end-11 flex flex-col justify-center items-center">
          <h2 className="text-6xl font-bold">
            {" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Use Buyapp
            </span>{" "}
            to trade crypto!
          </h2>
          <p className="text-3xl mt-4">
            Buyapp is a exchange that allows you to trade cripto and test the
            skills of{" "}
            <a
              href="https://github.com/Cancuuu"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              @Cancu
            </a>
          </p>
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg mt-8 drop-shadow-2xl">
            <Link href="/trade">
              <a className="flex items-center justify-center text-white py-2 px-4 text-xl">
                Enter App <span className="text-2xl ml-2">→</span>
              </a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
