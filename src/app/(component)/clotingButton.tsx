'use client'

import React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation'

const clotingButton = ({ click, text, ...props }: any) => {
    const router = useRouter()
    const linkToMenPage = () => {
        if (text == "Men's Clothing") {
            router.push('/mens-clothing');
        } else if (text == "Women's Clothing") {
            router.push('/womens-clothing');
        }

    }
    return (
        <Button variant="contained" className={text == "Men's Clothing"?"clothbutton":"clothbutton2" }onClick={linkToMenPage} >{text}</Button>
    )
}

export default clotingButton

