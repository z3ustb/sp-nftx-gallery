import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Logo from '../components/Logo';
import vaults from '../constants/vaults.json';
import VaultCard from '../components/VaultCard';

// TODO - live data

const Home = () => (
  <div className="container mx-auto py-24 px-4">
    <Head>
      <title>NFTX Gallery</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1 className="text-4xl font-bold text-center text-gray-100">
      Welcome to the <a href="https://nftx.org">NFTX</a> Vault.
    </h1>
    <div className="my-16 text-center">
      <Logo size={100} />
    </div>

    {vaults.map((vault) => (
      <section className="mb-24" key={vault.name}>
        <header className="flex items-center justify-between mb-6">
          <h3 className="text-gray-100 font-bold text-2xl">{vault.name}</h3>
          <Link href={`/vault/${vault.name.toLocaleLowerCase()}/`}>
            <a className="text-gray-100 text-lg">
              {'See details '}
              <span className="text-2xl">&rsaquo;</span>
            </a>
          </Link>
        </header>
        <div className="bg-gradient-to-r from-yellow-500 via-green-500 to-purple-500 h-0.5 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
          {vault.ids.map(
            (v, i) =>
              i < 5 && (
                <Link
                  key={v}
                  href={`/vault/${vault.name.toLocaleLowerCase()}/`}
                >
                  <a>
                    <VaultCard
                      image={`https://via.placeholder.com/160x160.png?text=${v}`}
                      eyebrow={vault.name}
                      title={v}
                    />
                  </a>
                </Link>
              )
          )}
        </div>
      </section>
    ))}
  </div>
);

export default Home;
