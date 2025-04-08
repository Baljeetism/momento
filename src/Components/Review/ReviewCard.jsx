import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ReviewCard = ({ review }) => {
    return (
        <Card sx={{ minWidth: 500, p: 4, }}>
            <CardContent>
                {/* Review Description (Top) */}
                <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 ,textAlign:'center',fontSize:'1rem',fontFamily:'Outfit, sans-serif' }}>
                    "{review.description}"
                </Typography>

                {/* User ID (Below) */}
                <Typography variant="body2" color="textSecondary" sx={{textAlign:'center'}}>
                     ~ {review.user}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ReviewCard;
