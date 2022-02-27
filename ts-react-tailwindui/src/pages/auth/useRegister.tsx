import {useFormik} from "formik";
import * as yup from "yup";

const useRegister = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: yup.object({
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
            confirmPassword: yup
                .string()
                .required()
                .oneOf([yup.ref("password"), null], "Passwords must match")
        }),
        onSubmit: async (values, formik) => {
            console.log('values', values)
        },
    });
    return formik;
}

export default useRegister