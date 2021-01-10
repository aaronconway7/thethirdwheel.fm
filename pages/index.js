import styled from 'styled-components'
import {
    FaSpotify,
    FaPodcast,
    FaYoutube,
    FaInstagram,
    FaTwitter,
    FaFacebookF,
    FaTwitch,
    FaPatreon,
} from 'react-icons/fa'
import { SiGooglepodcasts } from 'react-icons/si'

import Footer from '../components/Footer'

import Thumbnail from '../public/thumbnail-corona.jpg'

const players = [
    {
        href: `http://spotify.thethirdwheel.fm`,
        icon: FaSpotify,
        pre: `Listen on`,
        label: `Spotify`,
        bg: `#1bd760`,
    },
    {
        href: `http://apple.thethirdwheel.fm`,
        icon: FaPodcast,
        pre: `Listen on`,
        label: `Apple Podcasts`,
        bg: `#B150E2`,
    },
    {
        href: `http://google.thethirdwheel.fm`,
        icon: SiGooglepodcasts,
        pre: `Listen on`,
        label: `Google Podcasts`,
        bg: `#ffffff`,
    },
    {
        href: `http://youtube.thethirdwheel.fm`,
        icon: FaYoutube,
        pre: `Watch on`,
        label: `Youtube`,
        bg: `#fe0302`,
    },
]

const extras = [
    {
        href: `http://clips.thethirdwheel.fm`,
        icon: FaYoutube,
        pre: `Clips on`,
        label: `Youtube`,
        bg: `#fe0302`,
    },
    {
        href: `http://twitch.thethirdwheel.fm`,
        icon: FaTwitch,
        pre: `Streaming on`,
        label: `Twitch`,
        bg: `#6441A4`,
    },
    {
        href: `http://patreon.thethirdwheel.fm`,
        icon: FaPatreon,
        pre: `Support on`,
        label: `Patreon`,
        bg: `#f96854`,
    },
]

const socials = [
    {
        label: `Instagram`,
        href: `https://instagram.com/thethirdwheelfm`,
        icon: FaInstagram,
        bg: `#c13584`,
    },
    {
        label: `Twitter`,
        href: `https://twitter.com/thethirdwheelfm`,
        icon: FaTwitter,
        bg: `#1da1f2`,
    },
    {
        label: `Facebook`,
        href: `https://facebook.com/thethirdwheelfm`,
        icon: FaFacebookF,
        bg: `#4267B2`,
    },
]

const Home = () => (
    <StyledHome className={`bg-brand min-h-screen flex flex-col font-brand`}>
        <main className={`flex-grow w-4/5 max-w-screen-sm mx-auto py-16 grid auto-rows-max gap-10`}>
            <img
                src={Thumbnail}
                alt={`The Third Wheel Cover Art`}
                className={`shadow-lg mx-auto w-48 md:w-64`}
            />
            <div className={`grid gap-2`}>
                <p className={`text-center text-white uppercase font-bold tracking-wider italic`}>
                    Watch our latest ep 👇
                </p>
                <StyledYoutubeEmbed className={`shadow-md`}>
                    <iframe
                        title={`The Third Wheel on Youtube`}
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/videoseries?list=PL-Eg1IW3ZB27tXDZyfOl1SH6pu9YtlsVP'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                    ></iframe>
                </StyledYoutubeEmbed>
            </div>
            <div className={`grid gap-4`}>
                {players.map((link, i) => (
                    <StyledLink
                        key={i}
                        href={link.href}
                        target={`_blank`}
                        className={`${link.label
                            .toLowerCase()
                            .replace(
                                ` `,
                                `-`
                            )} grid grid-flow-col auto-cols-max gap-1 items-center justify-center p-4 bg-white rounded-md shadow-md hover:shadow text-white`}
                        bg={link.bg}
                        aria-label={link.label.toLowerCase().replace(` `, `-`)}
                        rel={`noopener noreferrer`}
                    >
                        <span>{link.pre}</span>
                        <link.icon className={`ml-1`} />
                        <span className={`font-bold tracking-wide`}>{link.label}</span>
                    </StyledLink>
                ))}
                <a
                    className={`w-max mx-auto text-white italic underline tracking-wide hover:opacity-75`}
                    href={`https://anchor.fm/thethirdwheelfm`}
                    target={`_blank`}
                    aria-label={`anchor`}
                    rel={`noopener noreferrer`}
                >
                    Listen elsewhere?
                </a>
                <hr className={`border-2 border-dashed my-4`} />
                {extras.map((link, i) => (
                    <StyledLink
                        key={i}
                        href={link.href}
                        target={`_blank`}
                        className={`${link.label
                            .toLowerCase()
                            .replace(
                                ` `,
                                `-`
                            )} grid grid-flow-col auto-cols-max gap-1 items-center justify-center p-4 bg-white rounded-md shadow-md hover:shadow text-white`}
                        bg={link.bg}
                        aria-label={link.label.toLowerCase().replace(` `, `-`)}
                        rel={`noopener noreferrer`}
                    >
                        <span>{link.pre}</span>
                        <link.icon className={`ml-1`} />
                        <span className={`font-bold tracking-wide`}>{link.label}</span>
                    </StyledLink>
                ))}
            </div>
            <div className={`grid grid-flow-col auto-cols-max gap-2 mx-auto`}>
                {socials.map((s, i) => (
                    <StyledSocial
                        className={`rounded-lg grid text-white w-8 h-8 place-items-center shadow hover:shadow-md`}
                        bg={s.bg}
                        href={s.href}
                        target={`_blank`}
                        aria-label={s.label.toLowerCase().replace(` `, `-`)}
                        rel={`noopener noreferrer`}
                    >
                        <s.icon />
                    </StyledSocial>
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

const StyledLink = styled.a`
    background-color: ${({ bg }) => (bg ? bg : `white`)};

    &.google-podcasts {
        color: #0166d9 !important;
    }
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
