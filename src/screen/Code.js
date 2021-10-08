import React , {useRef} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Code = ({navigation}) => {
    const ref_input1 = useRef();
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();
    const ref_input6 = useRef();
    const dogrula = ()=>{
        navigation.push('Messages')
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Lütfen telefonunuza gönderilen 6 haneli kodu girin.</Text>
            </View>
            <View style={styles.codeContainer}>
                <View style={styles.codeInput}>
                    <TextInput autoFocus style={styles.input} maxLength={1} keyboardType="number-pad" onChange={(e)=>{
                        console.log(e.target)
                        ref_input2.current.focus()
                    }} />
                </View>
                <View style={styles.codeInput}>
                    <TextInput style={styles.input} maxLength={1} keyboardType="number-pad" ref={ref_input2} onChange={()=>ref_input3.current.focus()}/>
                </View>
                <View style={styles.codeInput}>
                    <TextInput style={styles.input} maxLength={1} keyboardType="number-pad" ref={ref_input3} onChange={()=>ref_input4.current.focus()}/>
                </View>
                <View style={styles.codeInput}>
                    <TextInput style={styles.input} maxLength={1} keyboardType="number-pad" ref={ref_input4} onChange={()=>ref_input5.current.focus()}/>
                </View>
                <View style={styles.codeInput}>
                    <TextInput style={styles.input} maxLength={1} keyboardType="number-pad" ref={ref_input5} onChange={()=>ref_input6.current.focus()}/>
                </View>
                <View style={styles.codeInput}>
                    <TextInput style={styles.input} maxLength={1} keyboardType="number-pad" ref={ref_input6} onChange={()=>dogrula()}/>
                </View>
            </View>
        </View>
    )
}

export default Code

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F9F8F8'
    },
    title: {
        width: '90%',
        marginBottom: 50,
        marginTop: 20
    },
    titleText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 17
    },
    codeContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    codeInput: {
        backgroundColor: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        width: '15%',
        borderRadius: 7
    },
    input: {
        fontSize: 29,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    }
})
