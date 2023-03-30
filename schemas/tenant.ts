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
    { name: 'type', type: 'string', title: 'Type' },
    { name: 'environment', type: 'string', title: 'Environment' },
    {
      name: 'abaxData',
      type: 'object',
      title: 'Abax Data',
      fields: [
        { name: 'authMethod', type: 'string', title: 'Auth Method' },
        { name: 'clientId', type: 'string', title: 'Client ID' },
        { name: 'clientSecret', type: 'string', title: 'Client Secret' },
      ],
    },
    {
      name: 'procoreData',
      type: 'object',
      title: 'Procore Data',
      fields: [
        { name: 'companyId', type: 'number', title: 'Company ID' },
        { name: 'projectId', type: 'number', title: 'Project ID' },
      ],
    },
  ],
};
