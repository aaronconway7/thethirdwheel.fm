import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import Footer from '../components/Footer'
import players from '../data/players'
import extras from '../data/extras'
import socials from '../data/socials'
import Button from '../components/Button'

const Home = () => (
    <StyledHome className={`bg-brand min-h-screen flex flex-col font-brand`}>
        <main className={`flex-grow w-4/5 max-w-screen-sm mx-auto py-16 grid auto-rows-max gap-10`}>
            <div className={`grid shadow-lg mx-auto`}>
                <Image
                    src={`/v1610308983/the-third-wheel/thumbnail-corona.jpg`}
                    alt={'The Third Wheel Artwork'}
                    width={250}
                    height={250}
                />
            </div>
            <div className={`grid gap-2`}>
                <p className={`text-center text-white uppercase font-bold tracking-wider italic`}>
                    Watch our latest ep 👇
                </p>
                <StyledYoutubeEmbed className={`shadow-md`}>
                    <iframe
                        title={`The Third Wheel on Youtube`}
                        width={`560`}
                        height={`315`}
                        src={`https://www.youtube.com/embed/videoseries?list=PL-Eg1IW3ZB27tXDZyfOl1SH6pu9YtlsVP`}
                        frameBorder={`0`}
                        allow={`autoplay; encrypted-media`}
                        allowFullScreen
                    ></iframe>
                </StyledYoutubeEmbed>
            </div>
            <div className={`grid gap-4`}>
                {players.map((link, i) => (
                    <Button link={link} key={i} />
                ))}
                <Link href={`/anchor`}>
                    <a
                        className={`w-max mx-auto text-white italic underline tracking-wide hover:opacity-75 cursor-pointer`}
                        target={`_blank`}
                        aria-label={`anchor`}
                        rel={`noopener noreferrer`}
                    >
                        Listen elsewhere?
                    </a>
                </Link>
                <hr className={`border-2 border-dashed my-4`} />
                {extras.map((link, i) => (
                    <Button link={link} key={i} />
                ))}
            </div>
            <div className={`grid grid-flow-col auto-cols-max gap-2 mx-auto`}>
                {socials.map((s, i) => (
                    <Link href={s.href} key={i} passHref>
                        <StyledSocial
                            className={`rounded-lg grid text-white w-8 h-8 place-items-center shadow hover:shadow-md cursor-pointer`}
                            bg={s.bg}
                            target={`_blank`}
                            aria-label={s.label.toLowerCase().replace(` `, `-`)}
                            rel={`noopener noreferrer`}
                        >
                            <s.icon />
                        </StyledSocial>
                    </Link>
                ))}
            </div>
        </main>
        <Footer />
    </StyledHome>
)

export default Home

const StyledHome = styled.div`
    background-image: repeating-conic-gradient(#4adfb8 0 9deg, #00d0a7 9deg 18deg);
    background-repeat: no-repeat;
    background-size: 100vw 200vh;
    background-attachment: fixed;
`

const StyledSocial = styled.a`
    background-color: ${({ bg }) => (bg ? bg : `white`)};
`

const StyledYoutubeEmbed = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;

    &:after {
        padding-top: 56.25%;
        display: block;
        content: '';
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`
