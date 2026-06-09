import Text from './Text';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
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
  errorInput: {
    borderColor: theme.colors.error,
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
  errorText: {
    color: theme.colors.error,
    fontSize: 16,
    marginBottom: 8,
  },
});

const SignIn = () => {
  
  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            formik.touched.username && formik.errors.username && styles.errorInput,
          ]}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.errorText}>{formik.errors.username}</Text>
        )}
        <TextInput
          style={[
            styles.input,
            formik.touched.password && formik.errors.password && styles.errorInput,
          ]}
          placeholder="Password"
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        )}
        <Pressable style={styles.button} onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
