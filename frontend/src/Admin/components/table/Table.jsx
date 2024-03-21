import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows =[
        {
            id:1131313,
            product:"Acer Nitro 5",
            img: "https://imgs.search.brave.com/uuDo2Nu1VZnZrrQa_ZfiamGJSx5bB-mp_bD5if56-k0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JiLzVi/Lzg0L2JiNWI4NDg4/ODM3MWRhNWE2Y2Yy/ODI4ZDMzZWMyMWNm/LmpwZw",
            customer:"David Goggins",
            date:"1 march",
            amount:1234,
            method:"Cash on delivery",
            status:"Approved",
        },
        {
            id:1131315,
            product:"PS 5",
            img: "https://imgs.search.brave.com/Jf3RmvCpsMk114C4qIv6sqim0hSTSN3pjn3oKoNkE9s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZGF2/aWQtZ29nZ2lucy10/cmFpbmluZy1mb3It/Zm91bmRhdGlvbi1j/cXVwZ2w1ZWNiZ2Iw/bnk0LmpwZw",
            customer:"David Goggins",
            date:"2 march",
            amount:12345,
            method:"Online",
            status:"Pending",
        },
        {
            id:1131316,
            product:"X Box ",
            img: "https://imgs.search.brave.com/t5PURumnZlTU54vLkS4kOJ7XW9vypUUfMH0YudSE26A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UwLzkx/L2Y2L2UwOTFmNjcx/ZDVlMzI5YjNiMmIw/NTYyYWJhMzM3NzM3/LmpwZw",
            customer:"David Goggins",
            date:"3 march",
            amount:123456,
            method:"Online",
            status:"Approved",
        },
        {
            id:1131317,
            product:"Pc",
            img: "https://imgs.search.brave.com/t5PURumnZlTU54vLkS4kOJ7XW9vypUUfMH0YudSE26A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UwLzkx/L2Y2L2UwOTFmNjcx/ZDVlMzI5YjNiMmIw/NTYyYWJhMzM3NzM3/LmpwZw",
            customer:"David Goggins",
            date:"4 march",
            amount:123457,
            method:"Cash On Delivery",
            status:"Pending",
        }
    ]
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Tracking ID</TableCell>
          <TableCell className="tableCell">Product</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment Method</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
           >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} slt="" className="image"/>
                    {row.product}
                </div>
            </TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List