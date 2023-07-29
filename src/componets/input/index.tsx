import { TextField } from '@mui/material';
import { IInputProps } from './types';

export function Input(props: IInputProps){
    return(
        <TextField
            label={props.label}
            value={props.value}
        />
    )
}