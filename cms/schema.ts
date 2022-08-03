import { list } from '@keystone-6/core';
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  image,
} from '@keystone-6/core/fields';
import { Lists } from '.keystone/types';

export const lists: Lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
      projects: relationship({ ref: 'Project.author', many: true }),
    },
    // Configure the Admin UI
    ui: {
      listView: {
        initialColumns: ['name'],
      },
    },
  }),

  Project: list({
    fields: {
      title: text({ validation: { isRequired: true }}),
      description: text({ validation: { isRequired: true },
        ui: { displayMode: 'textarea' },}),
      status: select({
        validation: { isRequired: true},
        options: [
          { label: 'Published', value: 'published' },
          { label: 'Draft', value: 'draft' },
        ],
        defaultValue: 'draft',
        ui: {
          displayMode: 'segmented-control',
        },
      }),
      thumbnail: image({
        storage: 'local_images'
      }),
      thumbnailAlt: text(),
      tags: relationship({
        ref: 'Tag.projects',
        many: true
      }),
      createdDate: timestamp(),
      author: relationship({
        ref: 'User.projects',
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'email'],
          inlineEdit: { fields: ['name', 'email'] },
          linkToItem: true,
          inlineConnect: true,
        },
      }),
    },
  }),

  Tag: list({
    fields: {
      name: text(),
      projects: relationship({
        ref: 'Project.tags',
        many: true
      })
    },
  })
  
};
