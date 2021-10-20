import React,{useState,useEffect}  from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import EnvironmentButton from '../components/EnvironmentButton';
import Header from '../components/Header'
import Load from '../components/Load';
import PlantCardPrimary from '../components/PlantCardPrimary';

import api from '../services/api';
import colors from '../styles/colors'
import fonts from '../styles/fonts';

interface EnvironmentProps {
  key:string;
  title:string;
}

interface PlantProps {
  id: string,
    name: string,
    about: string,
    water_tips: string,
    photo: string,
    environments: [string],
    frequency: {
      times: string,
      repeat_every: string
    }
}

export function PlantSelect () {
  const [environments,setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] =  useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] =  useState<PlantProps[]>([]);
  const [selectedEnvironment, setSelectedEnvironment]  = useState('all');
  const [loading, setLoading] = useState(true);

  const handleEnvironmentSelected = (environment:string) => {
    //ambiente selecionado
    setSelectedEnvironment(environment);
    if(environment === 'all')
      return setFilteredPlants(plants);

    const filtered =  plants.filter(plant =>
      //filtrar pra saber se tem algum ambiente em comum
      plant.environments.includes(environment));
      setFilteredPlants(filtered);
      setLoading(false);

  }
    useEffect(() => {
      async function fetchEnvironments(){
        const { data } = await api.get('plants_environments?_sort?title&order=asc');
        //adicionando um elemento todos
        setEnvironments([{
          key:'all',
          title:'Todos',
        },...data]);
      }
      fetchEnvironments();
    }, [])

    useEffect(() => {
      async function fetchPlants(){
        const { data } = await api
        .get('plants?_sort?name&order=asc');
        setPlants(data);
        setFilteredPlants(data);
        setLoading(false);

      }
      fetchPlants();
    }, [])

    if(loading) return <Load/> 
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Header/>

        <Text style={styles.title}>
          Em qual Ambiente
        </Text> 
        <Text style={styles.subtitle}>
          Você quer colocar sua Planta?
        </Text> 
        </View>
        <View>
          <FlatList 
          data={environments}
          renderItem={({item})=>(
            <EnvironmentButton  
            title={item.title} 
            //deixando ativo o botao selecionado
            active={item.key === selectedEnvironment}
            onPress={()=> handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          //estilizando o container da flatlist
          contentContainerStyle={styles.environmentList}
          />
        </View>
        <View>
        <FlatList 
          data={filteredPlants}
          renderItem={({item})=> (
            <PlantCardPrimary data={item} />
        )}
        showsVerticalScrollIndicator={false}
        //dividindo em colunas
        numColumns={2}
        />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.background,
  },
  header:{
  paddingHorizontal:30,
  },
  title:{
    fontFamily: fonts.heading,
    fontSize: 17,
    lineHeight: 20,
    marginTop: 15,
    color: colors.heading,
  },
  subtitle:{
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  environmentList:{
    justifyContent: 'center',
    height: 40,
    paddingBottom:5,

    marginLeft:32,
    marginVertical:32
  },
  plants :{
    flex: 1,
    justifyContent:'center',
    paddingHorizontal:32,
  }

})