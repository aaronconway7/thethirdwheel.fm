import { FaSpotify, FaPodcast, FaYoutube, FaSoundcloud } from 'react-icons/fa'
import { SiGooglepodcasts } from 'react-icons/si'

const players = [
    {
        href: `/spotify`,
        icon: FaSpotify,
        pre: `Listen on`,
        label: `Spotify`,
        bg: `#1bd760`,
    },
    {
        href: `/apple`,
        icon: FaPodcast,
        pre: `Listen on`,
        label: `Apple Podcasts`,
        bg: `#B150E2`,
    },
    {
        href: `/google`,
        icon: SiGooglepodcasts,
        pre: `Listen on`,
        label: `Google Podcasts`,
        bg: `#ffffff`,
    },
    {
        href: `/youtube`,
        icon: FaYoutube,
        pre: `Watch on`,
        label: `Youtube`,
        bg: `#fe0302`,
    },
    {
        href: `/soundcloud`,
        icon: FaSoundcloud,
        pre: `Listen on`,
        label: `Soundcloud`,
        bg: `#FE5000`,
    },
]

export default players
