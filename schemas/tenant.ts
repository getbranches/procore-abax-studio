export default {
  name: 'tenant',
  type: 'document',
  title: 'Tenant',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    { name: 'id', type: 'string', title: 'ID' },
    { name: 'email', type: 'string', title: 'Email' },
    { type: 'string', name: 'type', title: 'Type' },
    { type: 'string', name: 'environment', title: 'Environment' },
    {
      name: 'abaxData',
      type: 'object',
      title: 'Abax Data',
      fields: [
        { type: 'string', name: 'authMethod', title: 'Auth Method' },
        { type: 'string', name: 'clientId', title: 'Client ID' },
        { type: 'string', name: 'clientSecret', title: 'Client Secret' },
      ],
    },
    {
      name: 'procoreData',
      type: 'object',
      title: 'Procore Data',
      fields: [
        { type: 'number', name: 'companyId', title: 'Company ID' },
        { type: 'number', name: 'projectId', title: 'Project ID' },
      ],
    },
  ],
};
