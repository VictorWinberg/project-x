import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { DialogActions, DialogContent, DialogTitle, Link } from '@mui/material';
import { MRT_EditActionButtons } from 'material-react-table';

// project imports
import DataTable from '@/ui-component/DataTable';
import { Contact, ContactData } from '../api/contactsApi';
import { useCreateContact, useUpdateContact, useDeleteContact } from '../hooks/useContactsMutations';
import ContactForm from './ContactForm';

interface ContactTableProps {
  contacts: ContactData[];
  isLoading: boolean;
  defaultValues?: Partial<Contact>;
}

const ContactTable = ({ contacts, isLoading, defaultValues }: ContactTableProps) => {
  const { mutate: createContact } = useCreateContact();
  const { mutate: updateContact } = useUpdateContact();
  const { mutate: deleteContact } = useDeleteContact();

  return (
    <DataTable
      data={contacts}
      getRowId={(row) => `${row.contactId}`}
      state={{ isLoading }}
      columns={[
        {
          accessorKey: 'contactName',
          header: 'Namn',
          Cell: ({ cell, row }) => (
            <Link component={RouterLink} to={`/dashboard/contacts/${row.original.contactId}`}>
              {cell.getValue<string>()}
            </Link>
          )
        },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'jobTitle', header: 'Jobbtitel' },
        { accessorKey: 'phone', header: 'Telefonnummer' }
      ]}
      renderCreateRowDialogContent={({ row, table }) => (
        <>
          <DialogTitle variant="h4" color="primary">
            Ny kontakt
          </DialogTitle>
          <DialogContent>
            <ContactForm
              sx={{ mt: 1 }}
              formProps={{ defaultValues }}
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
      renderEditRowDialogContent={({ row, table }) => (
        <>
          <DialogTitle variant="h4" color="primary">
            Redigera kontakt
          </DialogTitle>
          <DialogContent>
            <ContactForm
              sx={{ mt: 1 }}
              formProps={{ defaultValues: row.original }}
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
      onCreate={(row) => createContact(row)}
      onUpdate={(row) => updateContact(row)}
      onDelete={(row) => deleteContact(row)}
    />
  );
};

export default ContactTable;
