import { useMutation, useQueryClient} from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';
// import { USER_QUERY_KEY } from '../UserPage/UserPage';
import { REQUIRED_ERROR_MESSAGE } from '../SignIn/constants';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export const SignUp = () => {
const queryClient = useQueryClient();
const navigate = useNavigate();

const createDataUser = async (user) => {

 return  await fetch(`https://api.react-learning.ru/signup`, {
        method:"POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(
            {
            email: user.email,
            password: user.password,
            group: user.group
            }
        )
    }).then((res)=>res.json());
}; 
const { mutate, isError, isLoading, isSuccess } = useMutation(createDataUser, {
    onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: USER_QUERY_KEY });
        localStorage.clear(); 
        navigate(`/signin`);
    },
});
if (isSuccess) {
    return (<p>Loading...</p>)
}
if (isLoading) {
    return (<p>Loading...</p>)
}
if (isError) {
    return <p>Error...</p>
}
return (
    <>
    <div className="container d-flex justify-content-center py-5">
<Formik
initialValues={{
  email: '',
  password: '',
  group: '',
}}
validationSchema={Yup.object({
   email: Yup.string()
     .email('Invalid email address')
     .required(REQUIRED_ERROR_MESSAGE),
     password: Yup.string()
     .required(REQUIRED_ERROR_MESSAGE),
     group: Yup.string()
     .required(REQUIRED_ERROR_MESSAGE),
   
 })}
onSubmit={(values) => {
 mutate({email: values.email, password: values.password, group: values.group});
}}
>
<Form >
<h1>Регистрация</h1>
<Field name="email" className="form-control mb-3"  type="email" placeholder="email" />
<ErrorMessage component='span' name="email" />

<Field name="group" className="form-control mb-3"  type="text" placeholder="sm8" />
<ErrorMessage component='span' name="group" />

<Field name="password" className="form-control mb-3" type="password" placeholder="password"/>
<ErrorMessage component='span' name="password" />
<button type="submit" className="btn btn-primary m-2">Отправить</button>
</Form>

</Formik>


    </div>
    </>
)
}

