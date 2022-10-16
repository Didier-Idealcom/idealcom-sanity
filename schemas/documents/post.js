export default {
  name: 'post',
  type: 'document',
  title: 'Actualités',
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
          { type: 'block' }
      ]
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Catégories',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'post_category' }
          ]
        }
      ]
    }
  ]
}
