import { defineType } from 'sanity';

export const tenant = defineType({
  name: 'tenant',
  type: 'document',
  title: 'Tenant',
  groups: [
    {
      name: 'procoreData',
      title: 'Procore Data',
    },
    { name: 'abaxData', title: 'Abax Data' },
    { name: 'company', title: 'Company details' },
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      group: 'company',
    },
    {
      name: 'id',
      type: 'string',
      title: 'ID',
      description: 'companyId-projectId',
      group: 'company',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      description: 'Contact email',
      group: 'company',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      initialValue: 'external',
      options: { list: ['internal', 'affiliate', 'external'] },
      group: 'company',
    },
    {
      name: 'procoreData',
      type: 'procoreData',
      title: 'Procore Data',
      group: 'procoreData',
    },
    {
      name: 'abaxData',
      type: 'abaxData',
      title: 'Abax Data',
      group: 'abaxData',
    },
  ],
});
