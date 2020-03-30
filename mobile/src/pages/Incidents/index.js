import React ,{useState,useEffect}from 'react';
import {View,FlatList,Image,Text,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logoImage from '../../../assets/logo.png';
import {Feather} from '@expo/vector-icons';
import Styles from './style';
import api from '../../../services/api';



export default () =>{

    const [incidents,setIncidents] = useState([]);
    const navigation = useNavigation();
    const [total,setTotal] = useState(0);
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(false);


    function navigateToDetail(incidenti){
        navigation.navigate('Details',incidenti);
    }
    

    async function loadIncidents() {
        if(loading){
            return;

        }

        if(total>0 && incidents.length == total){
            return;
        }
        
        setLoading(true);
        const resposta = await api.get('incidents',{
            params:{page}
        });
       

        setIncidents([...incidents, ...resposta.data]);
        setTotal(resposta.headers['x-total-count']);
        setPage(page+1);
        setLoading(false);
    }

    useEffect(()=>{
        loadIncidents();
    },[]);

    return(
        <View style={Styles.container}> 
            <View style={Styles.header}>
                <Image source={logoImage}></Image>
                <Text style={Styles.headerText}>
                    Total de <Text style={Styles.headerTextBold}>{total} Casos</Text> 
                </Text>
            </View>
            <Text style={Styles.title}>Bem-Vindo</Text>
            <Text style={Styles.description}>Escolha um dos casos abaixo e salve</Text>
        
            <FlatList
            style={Styles.incidentList}
           showsVerticalScrollIndicator={false}
           onEndReached={loadIncidents}
           onEndReachedThreshold={0.2}
            data={incidents}
             keyExtractor={incident => String(incident.id)}
            renderItem={({item: incident }) => (
                <View style={Styles.incident}>
                    <Text style={[Styles.incidentProperty,{marginTop: -10 }]}>ONG:</Text>
                    <Text style={Styles.incidentValue}>{incident.name}</Text>

                    <Text style={Styles.incidentProperty}>Caso:</Text>
                    <Text style={Styles.incidentValue}>{incident.title}</Text>
                    
                    <Text style={Styles.incidentProperty}>VALOR:</Text>
                    <Text style={Styles.incidentValue}>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency', 
                            currency: 'BRL'
                            }).format(incident.value).replace(/^(\D+)/, '$1 ')}</Text>
                
                <TouchableOpacity 
                style={Styles.detailsButton}
                onPress={() => navigateToDetail(incident)}
                >
                <Text style={Styles.detailsButtonText}>Ver Mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#E02041" />
                </TouchableOpacity>
            </View>
                
            )} />
        </View>

    );
}; 