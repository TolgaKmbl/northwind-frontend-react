import { ErrorMessage, Field, useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function TLGTextInput({...props}) {
    
    const [field,meta] = useField(props)
    return (
        <FormField error={meta.touched && !!meta.error}>    
            <Field {...field}></Field>
            {(meta.touched && !!meta.error) ? <Label pointing basic color="red" content={meta.error}></Label> : null} 
        </FormField>
    )
}
