import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Pagination,
  Tooltip
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Expense from './Expense';
import { makeStyles } from '@mui/styles';
import SortButton from '../sortButton/SortButton';

const testDatas = [
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'No Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'No Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'No Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'No Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'No Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'No Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'No Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'No Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'No Vacation',
    date: '29-11-2001'
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
    name: 'No Vacation',
    date: '29-11-2001'
  }
];
const useStyles = makeStyles({
  expenseContainer: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  }
});

const Expenses = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState(testDatas.slice(page - 1, page * 10 - 1));
  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
    setPaginatedData(testDatas.slice((value - 1) * 10, value * 10 - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <SortButton />
      <div className={classes.expenseContainer}>
        {paginatedData.map((data) => (
          <Expense data={data} />
        ))}
      </div>
      <Pagination
        count={Math.floor(testDatas.length / 10)}
        page={page}
        onChange={handleChange}
        shape="rounded"
      />
    </div>
  );
};
export default Expenses;
