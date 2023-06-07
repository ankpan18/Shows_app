import React, { useEffect,useState } from 'react';
// import { Button, FormGroup, Label, Input, Form, Container } from 'reactstrap';
import { Form,Dropdown, Button, Input, FormField } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { useForm } from "react-hook-form";




// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const SignupSchema = Yup.object().shape({
  //   fullName: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
  // });
  
  export default function FormPage(props) {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [items, setItems] = useState({});

    const onSubmit = (data) => {
      console.log(data);
      // save to local storage
      localStorage.saveData = JSON.stringify(data);
      // setItems(data);
    }

    const options={options: [
      { key: '0',value:'1', text:'8 a.m.'},
      { key: '1',value:'2', text:'11 a.m.'},
      { key: '2',value:'3', text:'2 p.m.'},
      { key: '3',value:'4', text:'5 p.m.'},
      { key: '4',value:'5', text:'8.30 p.m.'},

    ],
    selected: '1',
  };

  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
     setItems(data);
    }
  }, []);
    
   
    return (
    //   <Container>
      
    //   {/* <Formik
    //    initialValues={{
    //      fullName: '',
    //      email: '',
    //    }}validationSchema={SignupSchema}
    //    onSubmit={values => {
    //      // same shape as initial values
    //      console.log(values);
    //    }}
    //  >
    //      {({ errors, touched }) => ( */}
    //   <Form>
    //     <FormGroup>
       
    //       <img src={props.formc.show.image.medium} alt="This is"/>
    //       </FormGroup>
    //       <FormGroup>
    //       <Label for="exampleEmail">Movie Name</Label>
    //       <Input type="text" name="name" id="moviename" value={props.formc.show.name} disabled />
    //     </FormGroup>
    //     <FormGroup>
    //     {/* <Field name="fullName" />
    //     {errors.firstName && touched.firstName ? (
    //          <div>{errors.firstName}</div>
    //        ) : null} */}
    //      <Label for="examplePassword">Your Name</Label>
    //       <Input type="text" name="name" id="user_name" placeholder="Your Name" required/>
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="exampleEmail">Email</Label>
    //       <Input type="email" name="email" id="exampleEmail" placeholder="example@gmail.com" required/>
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="exampleSelect">Select Show Timing</Label>
    //       <Input type="select" name="select" id="exampleSelect">
      
    //         <option>8 a.m.</option>
    //         <option>11 a.m.</option>
    //         <option>2 p.m.</option>
    //         <option>5 p.m.</option>
    //         <option>8.30 p.m.</option>
    //       </Input>
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="exampleSelectMulti">Select Date</Label>
    //       <Input type="date" id="start" name="trip-start"
    //    value="2023-07-08"
    //    min="2023-06-07" max="2023-07-07">

    //       </Input>
    //     </FormGroup>
    //     <Button color="success">Submit</Button>
    //   </Form>
    //   </Container>


<div>
<Form onSubmit={handleSubmit(onSubmit)}>
              <FormField>
              <img src={props.formc.show.image.medium} alt="Movie"/>
              </FormField>
                <Form.Field>
                    <label>Movie Name</label>
                    <input type="text" value={props.formc.show.name} readOnly={true} />
                </Form.Field>
                <Form.Field>
                    <label>Your Name</label>
                    <input placeholder='Enter Full Name' type="text" {...register("fullName", { required: true, minLength: 4 })} />
                </Form.Field>
                {errors.fullName && <p>Please check the Full Name</p>}

                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' type="email" {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}/>
                </Form.Field>
                {errors.email && <p>Please check the Email</p>}
                <Form.Field>
                    <label>Choose Time</label>
                    <Dropdown
                      placeholder="Select Options"
                      defaultValue={options.selected}
                      fluid selection
                      options={options.options}
                    />
      
 
                </Form.Field>

                <Form.Field>
                    <label>Calender</label>
                    <input type="date" id="start" name="trip-start"
       value="2023-07-08"
       min="2023-06-07" max="2023-08-07"/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>

    );
  }