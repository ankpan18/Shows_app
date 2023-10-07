import React, { useEffect,useState } from 'react';
// import { Button, FormGroup, Label, Input, Form, Container } from 'reactstrap';
import { Form,Dropdown, Button, Input, FormField } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { useForm,Controller } from "react-hook-form";
import Select from "react-select";
import {useNavigate} from "react-router-dom";




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
    const isObjectEmpty = (objectName) => {
      return Object.keys(objectName).length === 0
    }
    const navigate = useNavigate();
    

    // console.log("formc",props.formc)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [items, setItems] = useState({});

    const onSubmit = (data) => {
      console.log(data);
      // save to local storage
      localStorage.setItem('Name', JSON.stringify(data.fullName));
      localStorage.setItem('Email', JSON.stringify(data.email));
      localStorage.setItem('Time', JSON.stringify(data.time));
      localStorage.setItem('Trip Interval', JSON.stringify(data.trip_start));
      // setItems(data);
    }

    useEffect(() => {
      if(isObjectEmpty(props.formc)){
        console.log("navigate to home");
        navigate('/');
      } 
    }, []);

    // const handleError=()=>{
    //   console.log("Everything is fine");
    // }

  //   const options={options: [
  //     { key: '0',value:'1', text:'8 a.m.'},
  //     { key: '1',value:'2', text:'11 a.m.'},
  //     { key: '2',value:'3', text:'2 p.m.'},
  //     { key: '3',value:'4', text:'5 p.m.'},
  //     { key: '4',value:'5', text:'8.30 p.m.'},

  //   ],
  //   selected: '1',
  // };

  
  
    
   
    return (
      isObjectEmpty(props.formc)?
      <div></div>
      :
<div>
<Form onSubmit={handleSubmit(onSubmit)}>
              <FormField>
              <img src={props.formc.show.image["medium"]} alt="Movie"/>
              </FormField>
                <Form.Field>
                    <label>Movie Name</label>
                    <input type="text" defaultValue={props.formc.show.name} readOnly={true} />
                    {/* <p>{props.formc.show.name}</p> */}
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
                    {/* <Dropdown
                      placeholder="Select Options"
                      defaultValue={options.selected}
                      fluid selection
                      options={options.options}
                    />
       */}
      <select
                  className="custom-select"
                  id="selectmethod"
                  defaultValue=""
                  name="time"
                  {...register("time", { required: true })}
                >
                  <option value="" disabled>Select Option</option>
                  <option  value="8 a.m.">8 a.m.</option>
                  <option  value="11 a.m.">11 a.m.</option>
                  <option  value="2 p.m.">2 p.m.</option>
                  <option  value="5 p.m.">5 p.m.</option>
                </select>
                {errors.time && <span className="formError errorMssg">This field is required</span>}
 
                </Form.Field>


               <Form.Field>
                    <label>Calender</label>
                    <input type="date" id="start" name="trip_start"

       min="2023-06-07" max="2023-08-07"  {...register("trip_start", { required: true })}/>
                </Form.Field> 
                {errors.trip_start && <p>This field is required</p>}
                <Button type='submit'>Submit</Button>
            </Form>
        </div>

    );
  }