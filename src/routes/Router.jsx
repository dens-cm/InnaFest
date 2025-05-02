import React from 'react'
import { Box } from '@chakra-ui/react'
import { Toaster } from '../components/ui/toaster'
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Login from '../pages/authentication/Login'
import Signup from '../pages/authentication/Signup'
import InnaFest from '../components/layouts/container/InnaFest'

export default function Router() {

    return (
        <Box w='100vw' h='100vh' bg='base'>
            <Toaster />
            <BrowserRouter>
                <Routes>
                    {/* default path */}
                    <Route path="*" element={<Navigate to="/" />} />

                    {/* authentication path */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />

                    {/* InnaFest path */}
                    <Route path="/" element={<InnaFest />} />
                </Routes>
            </BrowserRouter>
        </Box>
    )
}