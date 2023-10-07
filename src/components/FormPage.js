import React, { useEffect, useState } from 'react';
import { Form, Button, FormField,Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";


  
  export default function FormPage(props) {
    const isObjectEmpty = (objectName) => {
      return Object.keys(objectName).length === 0
    }
    const navigate = useNavigate();
    
    var currD=new Date();
    var nextD=new Date();
    nextD.setDate(nextD.getDate()+7);

    function getDateString(d){
      // return d.getFullYear()+'-'+d.getMonth()+'-'+d.getDay();
      return d.toISOString().slice(0,10);
    }

    // console.log("formc",props.formc)
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [items, setItems] = useState({});
    const [status,setStatus]=useState(false);

    const onSubmit = (data) => {
      console.log(data);
      // save to local storage
      localStorage.setItem('Name', JSON.stringify(data.fullName));
      localStorage.setItem('Email', JSON.stringify(data.email));
      localStorage.setItem('Time', JSON.stringify(data.time));
      localStorage.setItem('Trip Interval', JSON.stringify(data.trip_start));
      setStatus(true);
      // setItems(data);
    }

    useEffect(() => {
      if(isObjectEmpty(props.formc)){
        console.log("navigate to home");
        navigate('/');
      } 
    }, []);
  
  
    
   
    return (
      isObjectEmpty(props.formc)?
      <div></div>
      :
<div>
  {status?(<Message
    success
    header='Your booking was successful'
    content='You may now go back or close this page'
  />):(" ")}

<Form className='bookingform' onSubmit={handleSubmit(onSubmit)}>
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
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}/>
                </Form.Field>
                {errors.email && <p>Please check the Email</p>}
                <Form.Field>
                    <label>Choose Time</label>
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
                    <label>Calendar</label>
                    <input type="date" id="start" name="trip_start"

      //  min="2023-08-07" max="2023-08-10"  {...register("trip_start", { required: true })}/>
      min={getDateString(currD)} max={getDateString(nextD)}  {...register("trip_start", { required: true })}/>

                </Form.Field> 
                {errors.trip_start && <p>This field is required</p>}
                <Button type='submit'>Submit</Button>
            </Form>
        </div>

    );
  }