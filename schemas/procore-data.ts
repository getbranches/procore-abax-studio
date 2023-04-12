import { defineType } from 'sanity';

export const procoreData = defineType({
  name: 'procoreData',
  type: 'object',
  title: 'Procore Data',
  fields: [
    { name: 'companyId', type: 'number', title: 'Company ID' },
    { name: 'projectId', type: 'number', title: 'Project ID' },
    {
      name: 'environment',
      type: 'string',
      title: 'Environment',
      options: { list: ['sandbox', 'production'] },
    },
  ],
});
