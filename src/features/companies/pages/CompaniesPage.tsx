import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { MRT_EditActionButtons } from 'material-react-table';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import CompanyForm from '../components/CompanyForm';
import { companyColumns, CompanyData } from '../config/CompanyConfig';
import { useCreateCompany, useDeleteCompany, useUpdateCompany } from '../hooks/useCompaniesMutations';
import { useCompanies } from '../hooks/useCompaniesQueries';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| COMPANIES PAGE ||============================== //

const CompaniesPage = () => {
  const { data = [], isLoading } = useCompanies();
  const { mutate: createCompany } = useCreateCompany();
  const { mutate: updateCompany } = useUpdateCompany();
  const { mutate: deleteCompany } = useDeleteCompany();

  return (
    <FlexGrow>
      <DataTable<CompanyData>
        data={data}
        columns={companyColumns}
        getRowId={(row) => `${row.companyId}`}
        state={{ isLoading }}
        onCreate={(row) => createCompany(row)}
        onUpdate={(row) => updateCompany(row)}
        onDelete={(row) => deleteCompany(row)}
        renderTopToolbarCustomActions={() => (
          <Button
            component={RouterLink}
            to="new"
            variant="outlined"
            size="small"
            startIcon={<Add />}
            sx={{ textTransform: 'none' }}
          >
            Lägg till bolag
          </Button>
        )}
        renderEditRowDialogContent={({ row, table }) => (
          <>
            <DialogTitle variant="h4" color="primary">
              Redigera bolag
            </DialogTitle>
            <DialogContent>
              <CompanyForm
                sx={{ mt: 1 }}
                formProps={{ values: row.original }}
                onChange={(values) => {
                  //@ts-expect-error any
                  row._valuesCache = values;
                }}
              />
            </DialogContent>
            <DialogActions>
              <MRT_EditActionButtons row={row} table={table} variant="text" />
            </DialogActions>
          </>
        )}
      />
    </FlexGrow>
  );
};

export default CompaniesPage;
