export default {
  name: 'section1',
  type: 'object',
  title: 'Section 1',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Titre'
    },
    {
      name: 'content',
      type: 'string',
      title: 'Contenu'
    },
    {
      name: 'button_url',
      type: 'url',
      title: 'URL bouton'
    },
    {
      name: 'button_text',
      type: 'string',
      title: 'Texte bouton'
    },
    {
      name: 'background',
      type: 'array',
      title: 'Background',
      of: [
        { type: 'background' }
      ]
    }
  ]
}
