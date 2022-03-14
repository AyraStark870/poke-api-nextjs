import { Button, Card, Grid, Row, Text } from '@nextui-org/react'
import type { NextPage, GetStaticProps  } from 'next'
import { Layout } from '../components/Layouts'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { CardPokemon } from '../components/pokemon'

interface Props{
  pokemons:SmallPokemon[]
}

const Home: NextPage<Props> = ({pokemons}) => {



  return (
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {
           pokemons.map((x) => (
             <CardPokemon pokemon={x} key={x.id}/>
           ))
       }
     </Grid.Container>
   </Layout>
  )
}

export const getStaticProps:GetStaticProps = async(ctx) =>{

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  //por defecto la data es de tipo any

  const pokemons:SmallPokemon[] = data.results.map((x,i)=>({
    ...x,
    id:i+1,
    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default Home
