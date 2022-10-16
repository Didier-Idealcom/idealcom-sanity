export default {
  name: 'background',
  type: 'object',
  title: 'Background',
  fields: [
    {
      name: 'color',
      type: 'string',
      title: 'Couleur'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'repeat',
      type: 'string',
      title: 'Répétition',
      options: {
        list: ['no-repeat', 'repeat', 'repeat-x', 'repeat-y']
      }
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
      options: {
        list: ['top left', 'top center', 'top right', 'center left', 'center center', 'center right', 'bottom left', 'bottom center', 'bottom right']
      }
    },
    {
      name: 'size',
      type: 'string',
      title: 'Taille',
      options: {
        list: ['auto' ,'contain', 'cover']
      }
    }
  ]
}
