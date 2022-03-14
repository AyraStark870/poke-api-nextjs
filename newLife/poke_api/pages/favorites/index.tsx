import { Container,Text,Image, Grid, Card } from '@nextui-org/react'
// import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import { Layout } from '../../components/Layouts'
import { FavoritesPokemons } from '../../components/pokemon/FavoritesPokemons'
import { NoFavorites } from '../../components/UI/NoFavorites'
import { localFavorites } from '../../utils'

 const Favorites = () => {

  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

  useEffect(()=>{
   setFavoritesPokemon(localFavorites.pokemons)
  },[])

  return (
    <Layout title='Favorites'>
      {
        favoritesPokemon.length===0
        ?(<NoFavorites/>)
        :(<FavoritesPokemons pokemons={favoritesPokemon}/>)
      }
    </Layout>
  )
}

export default Favorites