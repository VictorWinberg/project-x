import { Link } from 'react-router-dom';

// material-ui
import { Box, Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

// project imports
import DataTable from '@/ui-component/DataTable';
import useCompanies from '@/hooks/useCompanies';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| COMPANIES PAGE ||============================== //

type DataType = ReturnType<typeof useCompanies>['data'][number];
const columns: GridColDef<DataType>[] = [
  { field: 'companyName', headerName: 'Bolagsnamn' },
  { field: 'address', headerName: 'Address' },
  { field: 'industry', headerName: 'Industri' },
  { field: 'website', headerName: 'Website' },
  { field: 'updatedAt', headerName: 'Senast uppdaterad', headerAlign: 'right', align: 'right' }
];

const Companies = () => {
  const { data, isLoading } = useCompanies();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Box>
        <Button component={Link} to="new" variant="outlined" size="small" startIcon={<Add />} sx={{ textTransform: 'none' }}>
          Lägg till bolag
        </Button>
      </Box>
      <DataTable rows={data} columns={columns} getRowId={(row) => row.companyId} loading={isLoading} onRowClick={console.log} />
    </Box>
  );
};

export default Companies;
