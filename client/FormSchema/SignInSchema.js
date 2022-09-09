import * as yup from "yup";

export const SignInSchema = yup.object().shape({
  email: yup.string().email("Invalid email!").required("email is required!"),
  password: yup.string().required("Your password is required"),
});
