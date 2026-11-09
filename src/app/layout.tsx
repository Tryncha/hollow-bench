import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { LoadoutProvider } from '../context/LoadoutContext';
import Image from 'next/image';
import { version } from '../../package.json';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

const metaTitle = 'Hollow Bench - Build and charm calculator for Hollow Knight';
const metaDescription =
  'Plan your Hollow Knight builds, calculate charm synergies and damage, and share your setup instantly with other players.';
const metaAuthor = { name: 'Tryncha', url: 'https://github.com/Tryncha' };
const metaRepositoryURL = 'https://github.com/Tryncha/hollow-bench';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  category: 'gaming',
  keywords: [
    'hollow bench',
    'hollow knight',
    'hollow knight builds',
    'hollow knight build editor',
    'hollow knight calculator',
    'hollow knight charm calculator',
    'hollow knight damage calculator',
    'hollow knight charms',
    'hollow knight tools',
    'hollow knight planner',
    'hollow knight enemies'
  ],
  authors: metaAuthor,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: metaRepositoryURL,
    title: metaTitle,
    description: metaDescription,
    siteName: 'Hollow Bench'
    // images: [
    //   {
    //     url: '/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Hollow Bench - Hollow Knight Charm and Damage Calculator'
    //   }
    // ]
  },
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDescription
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadoutProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
          <header className="fixed inset-x-0 top-0 z-20 flex h-18 w-full items-center justify-between gap-8 border-b border-gray-700 bg-gray-900/70 pr-4 pl-8 backdrop-blur-sm">
            <Image
              src="banner.png"
              alt="Banner"
              width={602}
              height={64}
              className="absolute top-0 left-24 opacity-10"
            />
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">
                HollowBench
                {/* <span className="text-blue-400">.app .build</span> */}
              </h1>
              <span className="text-xs text-gray-300">
                Build calculator for Hollow Knight. Look for charm synergies and damage in real time.
              </span>
            </div>
          </header>
          {children}
          <footer className="border-t border-gray-700 bg-gray-900">
            <div className="mx-auto w-4xl py-6">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold">About Hollow Bench</h3>
                  <p className="text-sm text-gray-400">
                    A fan-made build calculator and planner for Hollow Knight. Experiment with charm combinations,
                    calculate damage, and optimize your loadout.
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src="hollow-knight/ui/geo.png"
                      alt="Geo"
                      width={16}
                      height={16}
                    />
                    <span className="text-sm text-gray-400">Free & Open Source</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold">Resources</h3>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://www.hollowknight.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 underline transition-colors hover:text-white"
                    >
                      Official Hollow Knight Website
                    </a>
                    <a
                      href="https://hollowknight.fandom.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 underline transition-colors hover:text-white"
                    >
                      Hollow Knight Wiki
                    </a>
                    <a
                      href="https://github.com/Tryncha/hollow-bench"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 underline transition-colors hover:text-white"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="my-4 rounded-md border border-gray-700 bg-gray-800/50 p-4">
                <div className="text-xs text-gray-400">
                  <p className="mb-2 font-semibold text-gray-300">Legal Disclaimer</p>
                  <p>
                    <strong>Hollow Bench</strong> is an unofficial fan-made calculator and is not endorsed by or
                    affiliated with <strong>Team Cherry</strong>. All game content, artwork, character names, enemy
                    data, charm descriptions, and other intellectual property from <strong>Hollow Knight</strong> are
                    copyrighted and trademarked by their respective owners. This project is created purely for
                    educational and informational purposes to enhance the player experience. If you enjoy this tool,
                    please support the developers by purchasing <strong>Hollow Knight</strong> from{' '}
                    <a
                      href="https://www.hollowknight.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline hover:text-blue-300"
                    >
                      official sources
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 italic">
                <div className="flex gap-2">
                  <span>&copy; {new Date().getFullYear()}</span>
                  <a
                    href="https://github.com/Tryncha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline transition-colors hover:text-gray-400"
                  >
                    Tryncha
                  </a>
                  <span>•</span>
                  <span>
                    Find source code{' '}
                    <a
                      href={metaRepositoryURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-400"
                    >
                      here
                    </a>
                    . v{version}
                  </span>
                </div>
                <span>Made with ♥ for the Hollow Knight community</span>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </LoadoutProvider>
  );
};

export default RootLayout;
