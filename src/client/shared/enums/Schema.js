export const EXPENSES_MODEL = [
  { field: 'id', type: 'int', defaultValue: undefined },
  { field: 'title', type: 'string', defaultValue: '' },
  { field: 'category', type: 'string', defaultValue: undefined },
  { field: 'date', type: 'int', defaultValue: new Date().getTime() },
  { field: 'value', type: 'int', defaultValue: 0 }
]

export const CATEGORIES_MODEL = [
  { field: 'id', type: 'int', defaultValue: undefined },
  { field: 'title', type: 'string', defaultValue: '' },
  { field: 'description', type: 'string', defaultValue: '' }
]