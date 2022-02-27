import {useFormik} from "formik";
import * as yup from "yup";
import * as React from "react";


interface Result {
    token: string;
    success: boolean;
}

// const useAuth = () => {

//     return {
//         errors: formik.errors,
//         handleBlur: formik.handleBlur,
//         handleChange: formik.handleChange,
//         handleSubmit: formik.handleSubmit,
//         values: formik.values,
//     };
// };

// export default useAuth;

const WithFormikPage: React.FC<{}> = () => {
    const formik = useFormik({
        initialValues: {username: "", password: ""},
        validationSchema: yup.object({
            password: yup.string().required(),
        }),
        onSubmit: async ({username, password}, formik) => {
            console.log('{ username, password }', {username, password})

        },
    });

    return (<>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-4 py-2">
                <div className="">
                    <label
                        htmlFor="email"
                        className="block uppercase text-sm font-medium text-gray-600"
                    >
                        FIRST NAME
                    </label>
                    <input
                        id="firstName"
                        name="username"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        placeholder="Enter your first name"
                        className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="">
                    <label
                        htmlFor="email"
                        className="block uppercase text-sm font-medium text-gray-600"
                    >
                        LAST NAME
                    </label>
                    <input
                        id="lastName"
                        name="password"
                        autoComplete="current-password"
                        placeholder="Enter your last name"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>{formik.errors.password}</div>

            </div>

            <div className="flex justify-end w-full">
                <button
                    type="submit"
                    className="w-40 flex
                            justify-center py-2 px-4 border
                             border-transparent text-sm font-medium
                             rounded-md text-white
                             bg-indigo-600
                             hover:bg-indigo-700
                             "
                    // disabled={
                    //   !formik.values.firstName || !formik.values.lastName
                    // }
                >
                    Save changes
                </button>
            </div>
        </form>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda dolorum eum illum nesciunt quae quaerat quo. Doloribus earum illum quod? Consequatur expedita facere labore quam qui quo tenetur voluptatum!
    </>)

   /* return (<>
        <div>
            <div>用戶名稱</div>
            <input
                name="username"
                onBlur={authState.handleBlur}
                onChange={authState.handleChange}
                value={authState.values.username}
            />
        </div>
        <div>
            <div>密碼</div>
            <input
                name="password"
                type="password"
                onBlur={authState.handleBlur}
                onChange={authState.handleChange}
                value={authState.values.password}
            />
            <div>{authState.errors.password}</div>
        </div>
        <button onClick={()=>authState.handleSubmit}>登入</button>
       {/!* <input
            name="username"
            onBlur={authState.handleBlur}
            onChange={authState.handleChange}
            value={authState.values.username}
        />
        <button onClick={() => authState.handleSubmit}>登入</button>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam assumenda delectus deleniti dignissimos
        earum est, ex expedita fugit illo iste maiores, neque nulla quidem, repellat reprehenderit totam vero vitae.*!/}
    </>)*/
}
export default WithFormikPage