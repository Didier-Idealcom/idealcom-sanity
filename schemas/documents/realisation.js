export default {
  name: 'realisation',
  type: 'document',
  title: 'Réalisation',
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
    /*{
      name: 'content',
      type: 'array',
      title: 'Contenu',
      of: [
          { type: 'block' }
      ]
    },*/
    {
      name: 'content',
      type: 'text',
      title: 'Contenu'
    },
    /*{
      name: 'website_content',
      type: 'array',
      title: 'Site web',
      of: [
          { type: 'block' }
      ]
    },*/
    {
      name: 'website_content',
      type: 'text',
      title: 'Site web'
    },
    {
      name: 'website_image',
      type: 'image',
      title: 'Illustration site web'
    },
    {
      name: 'website_url',
      type: 'url',
      title: 'URL site web'
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
            { type: 'realisation_category' }
          ]
        }
      ]
    }
  ]
}
