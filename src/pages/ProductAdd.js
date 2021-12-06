import { Form, Formik } from 'formik'
import React from 'react'
import { Button } from 'semantic-ui-react';
import * as yup from 'yup';
import TLGTextInput from '../utilities/customFormControls/TLGTextInput';

export default function ProductAdd() {

    const initialValues = { productName: "", unitPrice: 0 }

    const schema = yup.object({
        productName: yup.string().required("Product name is required"),
        unitPrice: yup.number().required("Unit price is required")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <TLGTextInput name="productName" placeholder="Product Name"/>  
                    <TLGTextInput name="unitPrice" placeholder="Unit Price" />   
                    <Button color="teal" type="submit">Add</Button>
                </Form>
            </Formik>
        </div>
    )
}
