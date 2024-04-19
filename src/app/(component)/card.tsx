'use client'

import React from 'react';
import { useRouter } from 'next/navigation'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const card = ({ title, image, description, price, category, ...props }: any) => {
    const router = useRouter()

    return (
        <Card className="card" sx={{width:210,marginLeft:15,marginRight:15 }}>
            <Typography sx={{ fontSize: 13 }} className="cardTitle" variant="h6" component="div">
                {title}
            </Typography>
            <div className="cardImg">
                <CardMedia
                    sx={{ height: 120, width: 82, alignSelf: "center", marginBottom: 2 }}
                    image={image}
                    title="Clothing"
                />
            </div>

            <CardContent sx={{
                backgroundColor: `${category == "men's clothing" ? "#2bd9af" :category == "women's clothing" ? "#ff5d84":"#ff5d84"}`,
                fontSize: 10, height: 125, borderRadius: 2
            }}>
                <Typography className="cardBottomText" variant="body2" >
                    <Typography>
                        <p className="priceTag">Rs {price.toFixed(2)}</p>
                    </Typography>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default card