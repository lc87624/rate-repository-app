import Text from './Text';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    flex: 1,
  },
  form: {
    backgroundColor: 'white',
    padding: 18,
    paddingTop: 30,
    paddingBottom: 24,
  },
  input: {
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    color: theme.colors.textPrimary,
    fontSize: 20,
    marginBottom: 24,
    paddingHorizontal: 18,
    height: 64,
  },
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    height: 64,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: theme.fontWeights.bold,
  },
});

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit,
  });
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        <Pressable style={styles.button} onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
