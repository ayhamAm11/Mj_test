export const schema=(values)=>({
 login:[
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "email",
    errorMessage:
    "It should be a valid email address!",
    pattern:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
    label: "Email",
    required: true,
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters  ",
    label: "Password",
    // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,20}$`,
    minLength:8,
    required: true,
  },
],
 signUp:[
  {
    id: 1,
    name: "userName",
    type: "text",
    placeholder: "UserName",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
    label: "UserName",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "email",
    errorMessage:
    "It should be a valid email address!",
    pattern:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
    label: "Email",
    required: true,
  },
  {
    id: 2,
    name: "mobile",
    type: "tel",
    placeholder: "put your number +94 000 000 000",
    errorMessage:
    "It should be a valid number",
    pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",
    label: "mobile number",
    required: true,
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters ",
    label: "Password",
    minLength:8,
    required: true,
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Passwords don't match!",
    label: "Confirm Password",
    pattern: values.password,
    required: true,
  },
]
})