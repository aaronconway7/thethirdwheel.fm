import Link from 'next/link'
import styled from 'styled-components'

const Button = ({ link }) => (
    <Link href={link.href} passHref>
        <StyledLink
            className={`${link.label
                .toLowerCase()
                .replace(
                    ` `,
                    `-`
                )} grid grid-flow-col auto-cols-max gap-1 items-center justify-center p-4 bg-white rounded-md shadow-md hover:shadow text-white cursor-pointer`}
            bg={link.bg}
            target={`_blank`}
            aria-label={link.label.toLowerCase().replace(` `, `-`)}
            rel={`noopener noreferrer`}
        >
            <span>{link.pre}</span>
            <link.icon className={`ml-1`} />
            <span className={`font-bold tracking-wide`}>{link.label}</span>
        </StyledLink>
    </Link>
)

export default Button

const StyledLink = styled.a`
    background-color: ${({ bg }) => (bg ? bg : `white`)};

    &.google-podcasts {
        color: #0166d9 !important;
    }
`
