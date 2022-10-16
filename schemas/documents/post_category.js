export default {
  name: 'post_category',
  type: 'document',
  title: 'Catégories d\'actualité',
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
