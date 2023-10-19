import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(title: string, message: string, firstButtonValue: string, secondButtonValue: string, status: boolean, closeDialog: any, openDialog: any) {
    return (
        <div>
            <Dialog
                open={status}
                onClose={closeDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} autoFocus>
                        {firstButtonValue}
                    </Button>
                    {openDialog &&
                        <Button onClick={openDialog} autoFocus>
                            {secondButtonValue}
                        </Button>
                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}