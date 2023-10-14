import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, description, imageSrc, buttonValue }: any, openLink: any) {
    return (
        <Card sx={{
            maxWidth: 345, minWidth: 200,
            float: "left",

        }}>
            <CardMedia
                sx={{ height: 140 }}
                image={imageSrc}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={openLink}>{buttonValue}</Button>
            </CardActions>
        </Card>
    );
}