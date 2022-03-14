import React from 'react'

import Image from 'next/image';
import NextLink from 'next/link'

import { Spacer, Text,useTheme, Link } from '@nextui-org/react'

export const Navbar = () => {
  const {theme} = useTheme();

  return (
    <div style={{
      display:'flex',
      padding:'0x 20px',
      backgroundColor:theme?.colors.gray900.value,
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'start'
      }}>
       <Image
         src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
         alt='icono'
         width={70}
         height={70}
        />
      <NextLink href='/' passHref>
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </Link>
      </NextLink>
      <Spacer css={{flex:1}}/>
      <NextLink href='/favorites' passHref>
        <Link css={{marginRight:'10px'}}>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
