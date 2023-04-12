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
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    { name: 'id', type: 'string', title: 'ID' },
    { name: 'email', type: 'string', title: 'Email' },
    { name: 'type', type: 'string', title: 'Type' },
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
