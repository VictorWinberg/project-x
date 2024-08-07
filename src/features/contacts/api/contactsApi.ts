import { deleteQuery, query, insertQuery, updateQuery, selectOneQuery } from '@/api/DummyDB';
import { Company } from '@/features/companies/api/companiesApi';
import { pick, toMap } from '@/utils';

export type Contact = {
  contactId: number;
  contactName: string;
  email: string;
  phone: string;
  jobTitle: string;
  companyId: number;
  position: string;
  address: string;
  notes: string;
  lastInteractionDate: string;
  createdAt: string;
  updatedAt: string;
};

export type ContactData = Contact & { company?: Company };

export const fetchContacts = async (): Promise<ContactData[]> => {
  const contacts = await query<Contact>(`SELECT * FROM contacts ORDER BY contact_name`);
  const companies = toMap(await query<Company>(`SELECT * FROM companies`), 'companyId');

  return contacts.map((contact) => ({ ...contact, company: companies.get(contact.companyId) }));
};

export const fetchContact = async (contactId: number) => {
  return await selectOneQuery<Contact>('contacts', { contactId });
};

export const createContact = async (contact: Partial<Contact>) => {
  return await insertQuery<Contact>(
    'contacts',
    pick(contact, [
      'contactName',
      'email',
      'phone',
      'jobTitle',
      'companyId',
      'position',
      'address',
      'notes',
      'lastInteractionDate'
    ])
  );
};

export const updateContact = async (contact: Partial<Contact>) => {
  return await updateQuery<Contact>(
    'contacts',
    pick(contact, [
      'contactName',
      'email',
      'phone',
      'jobTitle',
      'companyId',
      'position',
      'address',
      'notes',
      'lastInteractionDate'
    ]),
    pick(contact, ['contactId'])
  );
};

export const deleteContact = async ({ contactId }: Pick<Contact, 'contactId'>) => {
  return await deleteQuery<Contact>('contacts', { contactId });
};
