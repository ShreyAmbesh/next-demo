'use client';

import {Alert, Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";

interface UserFormData {
    name: string;
    email: string;
}

export default function AddUser() {
    const [formData, setFormData] = useState<UserFormData>({name: '', email: ''});
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/users/add/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if(response.ok){
                setSuccessMessage( 'User added successfully!');
                setFormData({name: '', email: ''});
            } else {
                setErrorMessage('Failed to add user');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Failed to add user');
        }
    }
    return (
        <Box>
            <Typography variant="h1">Add User</Typography>
            <Stack className="pt-12" spacing={2} width={400}>
                <TextField
                    required
                    id="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Save
                </Button>
                {successMessage && <Alert severity="success">
                    {successMessage}
                </Alert>}
                {errorMessage && <Alert severity="error">
                    {errorMessage}
                </Alert>}
            </Stack>
        </Box>
    )
}