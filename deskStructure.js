import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.documentList()
            .title('Pages')
            .filter('_type == "page"')
        ),
      S.divider(),
      S.listItem()
        .title('Actualités')
        .child(
          S.documentList()
            .title('Actualités')
            .filter('_type == "post"')
        ),
      S.listItem()
        .title('Catégories d\'actualité')
        .child(
          S.documentList()
            .title('Catégories d\'actualité')
            .filter('_type == "post_category"')
        ),
      S.divider(),
      S.listItem()
        .title('Réalisations')
        .child(
          S.documentList()
            .title('Réalisations')
            .filter('_type == "realisation"')
        ),
      S.listItem()
        .title('Success stories')
        .child(
          S.documentList()
            .title('Success stories')
            .filter('_type == "success_story"')
        ),
      S.listItem()
        .title('Catégories de réalisation')
        .child(
          S.documentList()
            .title('Catégories de réalisation')
            .filter('_type == "realisation_category"')
        )
    ])
