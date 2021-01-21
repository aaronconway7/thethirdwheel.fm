import { FaYoutube, FaTwitch, FaPatreon } from 'react-icons/fa'

const extras = [
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

export default extras
