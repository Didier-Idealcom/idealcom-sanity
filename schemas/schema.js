// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Object types
import background from './objects/background'
import page_section1 from './objects/page_section1'
import page_section2 from './objects/page_section2'

// Document types
import page from './documents/page'
import post_category from './documents/post_category'
import post from './documents/post'
import realisation_category from './documents/realisation_category'
import realisation from './documents/realisation'
import success_story from './documents/success_story'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Object types
    background,
    page_section1,
    page_section2,

    // Document types
    page,
    post_category,
    post,
    realisation_category,
    realisation,
    success_story
  ])
})
