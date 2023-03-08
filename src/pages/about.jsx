import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'

import { Container } from '@/components/Container'
import Head from 'next/head'
import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'
import sergImage from '@/images/sergiy.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Sergiy Dybskiy</title>
        <meta
          name="description"
          content="I’m Sergiy Dybskiy. I live in London, Ontario, Canada, where I hack around and do other things."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={sergImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Sergiy Dybskiy. I live in London, Ontario, where I hack about
              and cuddle my goldendoodle, Luna 🐶.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                In Kharkiv, Ukraine, born and raised. On the soccer field is
                where I spent most of my days. Chillin&apos; out, hackin&apos;,
                relaxin&apos; all cool, all shooting some soccer balls outside
                of the school.
              </p>
              <p>
                Then we moved to Canada 🇨🇦 and when it came time to figuring out
                what to do with my life, and the reason I am where I am today is
                because of my brother, Yuriy. The mentorship, guidance, and
                support he has given me has been invaluable. First, he
                encouraged me to go to university and get a degree in Computer
                Science. After studying for a year and putting that on pause, he
                was there to provide an alternative path. He introduced me to
                the tools, he connected me with people looking for work that
                trusted him to give me a chance. So, broski, if you are reading
                this, thank you for everything you have done for me. 💛
              </p>
              <p>
                Did a startup for 4 years. It has recently been aquired which is
                cool. Proceeded to help my brother build an MVP of{' '}
                <Link
                  href="https://pumabrowser.com/?ref=serg.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-500"
                >
                  Puma Browser
                </Link>{' '}
                before joing Shopify and learning there for a few years.
              </p>

              <p>
                Today, I’m working at Coinbase on the Coinbase One team. We
                built a subscription product to give our users benefits like
                fee-free trading to help onboard into the web3 space easier and
                with more rewards. Think Amazon Prime but for Coinbase.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/sergiy_eth"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://github.com/sergical"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/sergical"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:email+website@serg.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                email@serg.tech
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
