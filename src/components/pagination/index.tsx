import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginationType = {
    count: number
    onChange: (value: number) => void
}

const style = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0'
}

export default function PaginationComponent({ count, onChange }: PaginationType) {
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        onChange(page);
    };
    return (
        <Stack spacing={2} sx={style}>
            <Pagination count={count / 6} variant="outlined" shape="rounded" onChange={handleChange} />
        </Stack>
    );
}