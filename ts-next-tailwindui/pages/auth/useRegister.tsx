import {useFormik} from "formik";
import * as yup from "yup";
import {authRegister} from "./authsSlice";
import { useDispatch,  } from "react-redux";

const useRegister = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        },
        validationSchema: yup.object({
            name: yup
                .string()
                .required("Name is required"),
            email: yup
                .string()
                .required()
                .oneOf([yup.ref("email"), null], "Emails must match"),
            password: yup
                .string()
                .required()
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                ),
            password_confirmation: yup
                .string()
                .required()
                .oneOf([yup.ref("password"), null], "Passwords must match")
        }),
        onSubmit: async (values, formik) => {
            console.log('values', values)
            dispatch(authRegister(values))
        },
    });
    return formik;
}

export default useRegister