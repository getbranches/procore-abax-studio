import { defineType } from 'sanity';

export const abaxData = defineType({
  name: 'abaxData',
  type: 'object',
  title: 'Abax Data',
  fields: [
    { name: 'clientId', type: 'string', title: 'Client ID' },
    { name: 'clientSecret', type: 'string', title: 'Client Secret' },

    {
      name: 'environment',
      type: 'string',
      title: 'Environment',
      initialValue: 'production',
      options: { list: ['sandbox', 'production'] },
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      description: 'Email associated with abax account',
    },
  ],
});
