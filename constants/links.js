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

export const players = [
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
]

export const extras = [
    {
        href: `/clips`,
        icon: FaYoutube,
        pre: `Clips on`,
        label: `Youtube`,
        bg: `#fe0302`,
    },
    {
        href: `/twitch`,
        icon: FaTwitch,
        pre: `Streaming on`,
        label: `Twitch`,
        bg: `#6441A4`,
    },
    {
        href: `/patreon`,
        icon: FaPatreon,
        pre: `Support on`,
        label: `Patreon`,
        bg: `#f96854`,
    },
]

export const socials = [
    {
        href: `/instagram`,
        label: `Instagram`,
        icon: FaInstagram,
        bg: `#c13584`,
    },
    {
        href: `/twitter`,
        label: `Twitter`,
        icon: FaTwitter,
        bg: `#1da1f2`,
    },
    {
        href: `/facebook`,
        label: `Facebook`,
        icon: FaFacebookF,
        bg: `#4267B2`,
    },
]
