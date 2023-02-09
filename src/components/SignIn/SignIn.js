import { useMutation } from '@tanstack/react-query';
import { ErrorMessage, Field, Form, Formik } from 'formik';
// import { REDUX_LS_KEY } from '../../redux/initState';
import { useDispatch, useSelector } from "react-redux";
import { tokenAC } from "../../redux/actionsCreators/tokenAC";
import * as Yup from 'yup';
import { REQUIRED_ERROR_MESSAGE } from './constants';
import { getInitialState } from '../../redux/initState';
import { useNavigate } from 'react-router-dom';

export const SignIn = ({setToken}) => {
    // const userToken = useSelector(store => store.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  

    const getDataUser = async (user) => {
        const response = await fetch(`https://api.react-learning.ru/signin`, {
            method:"POST",
            body: JSON.stringify(
                {
                    email: user.email,
                    password: user.password
                }
            ),
            headers: { 'Content-Type': 'application/json'}
        });
        const data = await response.json();
        const token = data.token;
        dispatch(tokenAC(token));
        // localStorage.setItem('token', JSON.stringify(token));
        return token;
    }; 
    const { mutate, isError, isLoading } = useMutation(getDataUser, {
        onSuccess: (token) => {
            // setToken(token);
            if(getInitialState().tokenUser) {
              navigate(`/`);
              
                };
        },
      });

      if (isLoading) {
        return (<p>Loading...</p>)
      }
      if (isError) {
        return console.log('Error')
      }

    return (
        <>
        <div className="container d-flex justify-content-center py-5">
       <Formik
         initialValues={{
           email: '',
           password: '',
         }}
         validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required(REQUIRED_ERROR_MESSAGE),
              password: Yup.string()
              .required(REQUIRED_ERROR_MESSAGE),
            
          })}
         onSubmit={(values) => {
          mutate({email: values.email, password: values.password});
         }}
       >
         <Form >
         <h1>Войти в систему</h1>
        <Field name="email" className="form-control mb-3"  type="email" placeholder="email" />
        <ErrorMessage component='span' name="email" />
        <Field name="password" className="form-control mb-3" type="password" placeholder="password"/>
        <ErrorMessage component='span' name="password" />
        <button type="submit" className="btn btn-primary m-2">Войти</button>
        </Form>
        
       </Formik>
        </div>
        
        
      
        </>
    )
}

