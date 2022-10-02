export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Contenu',
      of: [
        { type: 'section1' },
        { type: 'section2' },
      ]
    }
  ]
}
