export default {
  name: 'success_story',
  type: 'document',
  title: 'Success story',
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
    {
      name: 'problem',
      type: 'text',
      title: 'Problématique'
    },
    {
      name: 'promise',
      type: 'text',
      title: 'Promesse'
    },
    /*{
      name: 'strategy_content',
      type: 'array',
      title: 'Stratégie',
      of: [
          { type: 'block' }
      ]
    },*/
    {
      name: 'strategy_content',
      type: 'text',
      title: 'Stratégie'
    },
    {
      name: 'strategy_image',
      type: 'image',
      title: 'Illustration stratégie'
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
      name: 'results',
      type: 'text',
      title: 'Résultats obtenus'
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Galerie',
      of: [
          { type: 'image' }
      ]
    },
    {
      name: 'client',
      type: 'string',
      title: 'Contact client'
    },
    {
      name: 'client_testimonial',
      type: 'text',
      title: 'Témoignage client'
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
