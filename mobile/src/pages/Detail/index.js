import React from 'react';
import {Feather} from '@expo/vector-icons'
import {View,Image,TouchableOpacity,Text,Linking} from 'react-native';
import { useNavigation , useRoute } from '@react-navigation/native';
import style from './style';
import logoimg from '../../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';

export default () =>{

    const navigate = useNavigation();
    const route = useRoute();
    const incicente = route.params;
   
    const massage = `Olá ${incicente.name}, estou entrando em contato pois gostaria de ajudar no caso: "${incicente.title}" , com valor: ${Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL'
        }).format(incicente.value).replace(/^(\D+)/, '$1 ')}`;
    function navigationBack(){
        navigate.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject:`Herói Do Caso : ${incicente.title}`,
            recipients:[incicente.email],
            body:massage,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incicente.whatsap}&text=${massage}`);
    }

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoimg}   />

        </View>
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>

                <View style={style.incident}>

                 <Text style={[style.incidentProperty, {marginTop: -10 }]}>ONG:</Text>
                    <Text style={style.incidentValue}>{incicente.name} de {incicente.city}/{incicente.UR}</Text>

                    <Text style={style.incidentProperty}>Caso:</Text>
                    <Text style={style.incidentValue}>{incicente.title}</Text>
                    
                    <Text style={style.incidentProperty}>VALOR:</Text>
                    <Text style={style.incidentValue}> {Intl.NumberFormat('pt-BR', {
                            style: 'currency', 
                            currency: 'BRL'
                            }).format(incicente.value).replace(/^(\D+)/, '$1 ')}</Text>
                </View>


                <View style={style.contacBox}>
                    <Text style={style.heroTitle}> Salve o dia!</Text>
                    <Text style={style.heroTitle}> Seja o Heroi desse Caso!</Text>

                    <Text style={style.heroDescription}>Entre em Contato </Text>

                    <View style={ style.actions}>

                        <TouchableOpacity style={style.action} onPress={sendWhatsapp}>
                            <Text style={style.actionText} >WhatsApp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.action} onPress={sendMail}>
                            <Text style={style.actionText} >E-mail</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
    );
};