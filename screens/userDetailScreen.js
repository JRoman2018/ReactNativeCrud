import React, {useEffect, useState} from 'react';
import firebase from '../database/firebase'
import {ActivityIndicator, View, Button, TextInput, ScrollView, StyleSheet, Alert} from 'react-native';

function UsersDetailScreen(props) {
    const initialUser = {id:'', name:'', email:'', phone:''};
    const [user, setUser] = useState(initialUser)
    const [loading, setLoading] = useState(true)

    const getUserById = async (id) =>{
        const dbRef = firebase.db.collection('users').doc(id);
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({...user, id:doc.id});
        setLoading(false)
    }

    useEffect(() =>{
        getUserById(props.route.params.userId);
    },[])

    const handleChangeText = (name, value) => {
        setUser({...user, [name]: value});
    }

    const deleteUser = async () =>{
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId);
        await dbRef.delete();
        props.navigation.navigate('UsersList');
    }

    const updateUser = async () =>{
        const dbRef = firebase.db.collection('users').doc(user.id);
        await dbRef.set({ name: user.name, email: user.email, phone: user.phone});
        setUser(initialUser);
        props.navigation.navigate('UsersList')
    }

    const openConfirmationAlert = () =>{
        Alert.alert('Remove The User', 'Are you sure?', [
            {text:'Yes', onPress: () => deleteUser()},
            {text:'No', onPress: () => console.log('false')},
        ])
    }

    if(loading){
        return (
            <View>
                <ActivityIndicator size="large" color="#9e9e9e"/>
            </View>
        )
    }else{
        return (
                <ScrollView style={styles.container}>
                    <View style={styles.inputGroup}>
                        <TextInput placeholder="Name User" value={user.name}
                        onChangeText={(value) =>  handleChangeText('name', value)}/>
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput placeholder="Email User" value={user.email}
                        onChangeText={(value) =>  handleChangeText('email', value)}/>
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput placeholder="Phone User" value={user.phone}
                        onChangeText={(value) =>  handleChangeText('phone', value)}/>
                    </View>
                    <View style={styles.buttonUpdate}>
                        <Button title="Update User" color="#19AC52" onPress={() => updateUser()}/>
                    </View>
                    <View>
                        <Button title="Delete User" color="#E37399" onPress={() => openConfirmationAlert()}/>
                    </View>
                </ScrollView>
            )
        }
    }

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35,
        backgroundColor:'#ceddec',
        color:'black'
    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    buttonUpdate:{
        marginBottom:5
    }
})

export default UsersDetailScreen
