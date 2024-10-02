import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passwordSchema = yup.object().shape({
  passwordLength: yup
    .number()
    .min(4, 'Should be min of 4 char')
    .max(16, 'Should be max of 16 char')
    .required('Lenght is req'),
});

function App(): JSX.Element {
  const [password, setPassword] = useState('');
  const [isPassGen, setIsPassGen] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePass = (passwordlen: number) => {
    let characlist = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const speciatchars = '!a#5%18*()_+';

    if (upperCase) {
      characlist += upperCase;
    }
    if (lowerCase) {
      characlist += lowerCase;
    }
    if (numbers) {
      characlist += digitChars;
    }
    if (symbols) {
      characlist += speciatchars;
    }

    const passresult = createPassword(characlist, passwordlen);
    setPassword(passresult);
    setIsPassGen(true);
  };

  const createPassword = (charac: string, passwordlen: number) => {
    let result = '';
    for (let i = 0; i < passwordlen; i++) {
      const charindex = Math.round(Math.random() * charac.length);
      result += charac.charAt(charindex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGen(false);
    setLowerCase(false);
    setUpperCase(false);
    setNumber(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={ (values) => {
              console.log(values)
              generatePass(+values.passwordLength) 
            }} >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset
              /* and other goodies */
            }) => (
              <>
              <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>Password Length</Text>
                  {touched.passwordLength && errors.passwordLength && (
                    <Text style= {styles.errorText}>
                      {errors.passwordLength}
                    </Text>
                  )}
                </View>
                <TextInput 
                    style={styles.inputStyle}
                    value ={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder='Ex.8'
                    keyboardType='numeric'
                  />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Lowercase </Text>
                <BouncyCheckbox
                  isChecked = {lowerCase}
                  onPress={()=> setLowerCase(true)}
                  fillColor='#29ab87'
                />
              </View>
              <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Uppercase </Text>
                <BouncyCheckbox
                  isChecked = {upperCase}
                  onPress={()=> setUpperCase(true)}
                  fillColor='blue'
                />
              </View>
              <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Numbers </Text>
                <BouncyCheckbox
                  isChecked = {numbers}
                  onPress={()=> setNumber(true)}
                  fillColor='red'
                />
              </View>
              <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Symbols </Text>
                <BouncyCheckbox
                  isChecked = {symbols}
                  onPress={()=> setSymbols(true)}
                  fillColor='brown'
                />
              </View>

              <View style={styles.formActions}>
                <TouchableOpacity
                  disabled={!isValid}
                  style={styles.primaryBtn}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondaryBtn}
                  onPress={() => {
                    handleReset();
                    resetPasswordState();
                  }}
                >
                  <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
              </View>
              </>
            )}
          </Formik>
        </View>
        {
          isPassGen ? (
            <View style={[styles.card,styles.cardElevated]}>
              <Text style= {styles.subTitle}>Result: </Text>
              <Text style= {styles.description}>Long press to copy: </Text>
              <Text style= {styles.generatedPassword} selectable>{password}</Text>
            </View>
          ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});

export default App;
