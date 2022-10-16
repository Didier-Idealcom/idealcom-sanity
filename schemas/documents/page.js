export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        auto: true
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Contenu',
      of: [
        { type: 'page_section1' },
        { type: 'page_section2' },
      ]
    }
  ]
}
