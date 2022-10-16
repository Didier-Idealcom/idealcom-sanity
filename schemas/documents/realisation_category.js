export default {
  name: 'realisation_category',
  type: 'document',
  title: 'Catégories de réalisation',
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
    }
  ]
}
