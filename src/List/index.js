import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function List(props) {

    function carregaIcon(likeada){
        return likeada ? require('../img/likeada.png') :
        require('../img/like.png')
    }

    function mostraLikers(likers){
        if(likers === 0){
            return
        }
        return(
            <Text style={styles.like}>{likers}{likers > 1 ? ' curtidas' : ' curtida'}</Text>
        )
    }
    return (
        <View>
            <View style={styles.perfil}>

                <Image
                    source={{ uri: props.data.imgperfil }}
                    style={styles.imgperfil} />

                <Text style={styles.nome}>{props.data.nome}</Text>
            </View>

            <Image
                resizeMode='cover'
                source={{ uri: props.data.imgPublicacao }}
                style={styles.fotoPublicacao} />

            <View style={styles.areainteracoes}>
                <TouchableOpacity style={styles.btn}>
                    <Image source={carregaIcon(props.data.likeada)}
                        style={styles.icons} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Image source={require('../img/comment.png')}
                        style={styles.icons} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Image source={require('../img/send.png')}
                        style={styles.icons} />
                </TouchableOpacity>
            </View>

            {mostraLikers(props.data.likers)}

            <Text style={styles.nomeRodape}>{props.data.nome}</Text>
            <Text style={styles.descricao}>{props.data.descricao}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    perfil: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        padding: 8
    },
    imgperfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nome: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 5
    },
    fotoPublicacao: {
        width: '100%',
        height: 400,
        alignSelf: 'center'
    },
    areainteracoes: {
        flexDirection: 'row',
        padding: 5
    },
    icons: {
        width: 23,
        height: 23
    },
    btn:{
        paddingLeft: 5
    },
    like:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
        marginLeft: 5
    },
    descricao:{
        marginLeft: 5,
        fontSize: 15,
        marginBottom: 10,
        marginTop: 3
    },
    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 5
    }

})