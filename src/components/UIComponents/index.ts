import styled, { css } from 'styled-components'
import tw from 'twin.macro'

//common
export const Container = styled.div`
    // ${tw`w-full px-8`}
`
export const Wrapper = styled.div<{ $flex?: boolean, $between?: boolean, $center?: boolean, bg?: string }>`
    ${tw`w-full px-8`}    
    ${props => props.$flex && css`
            ${tw`flex items-center`}
        `
    }

    ${props => props.$between && css`
            ${tw`justify-between`}
        `
    }

    ${props => props.$center && css`
    ${tw`justify-center`}
    `}

    ${props => props.bg && css`
        background: ${props.bg}
    `}
`
export const Box = styled.div<{ $hidden?: boolean, $spread?: boolean, width?: string, bg?: string }>`
    ${tw`block`}

    ${props => props.$hidden && css`
            ${tw`hidden lg:block`}
        `
    }

    ${props => props.$spread && css`
            ${tw`w-full lg:w-auto lg:block`}
        `
    }

    ${props => props.width && css`
        width: ${props.width}px
    `}

    ${props => props.bg && css`
        background: ${props.bg}
    `}
`

export const Section = styled.div`
`

export const Text = styled.p`
    ${tw`text-sm text-black`}
`

//specific tag
export const Image = styled.img<{ width?: number, height?: number }>`
    ${tw`block object-cover`}

    ${props => props.width && css`
        width: ${props.width}px
    `}

    ${props => props.height && css`
        height: ${props.height}px
    `}
`

export const Nav = styled.ul <{ $vertical?: boolean }>`
    ${tw`list-none flex items-center justify-around`}

    ${props => props.$vertical && css`
            ${tw`flex-col`}
        `
    }
`

export const NavItem = styled.li<{ x?: string, y?: string, $primary?: boolean }>`
    ${tw`px-2 py-[6px] transition-all`}
    ${props => props.x && props.y && css`
            padding: ${props.y}px ${props.x}px
        `
    }

    ${props => props.$primary && css`
        &:hover {
            background: #3c3c3c;
        }
    `}

    &:hover {
        background: #f0f0f0;
        ${props => props.$primary && css`
        background: #3c3c3c;
    `}
        
    }

`

export const Link = styled.a<{ $primary?: boolean, bold?: string, x?: string, y?: string }>`
    ${tw`text-sm cursor-pointer`}
    color: #fff;
    ${props => props.$primary && css`
        color: #1D1D1D;
    `}

    ${props => props.bold == 'normal' && css`
        ${tw`font-normal`}
    `}

    ${props => props.bold == 'medium' && css`
        ${tw`font-medium`}
    `}

    ${props => props.bold == 'bold' && css`
        ${tw`font-bold`}
    `}

    ${props => props.x && props.y && css`
        padding: ${props.y}px ${props.x}px
    `}
`