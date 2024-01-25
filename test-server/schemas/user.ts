export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {
      name: 'username',
      type: 'string',
      title: 'Username',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'profileImg',
      type: 'string',
      title: 'ProfileImg',
    },
    {
      name: 'followings',
      type: 'array',
      title: 'Followings',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}], // user 스키마 참조
        },
      ],
      validation: (Rule: any) => Rule.unique(),
    },
    {
      name: 'followers',
      type: 'array',
      title: 'Followers',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule: any) => Rule.unique(),
    },
    {
      name: 'bookmarks',
      title: 'Bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
      validation: (Rule: any) => Rule.unique(),
    },
  ],
  preview: {
    select: {
      title: 'username',
      subtitle: 'email',
    },
  },
}

// name
// username <id개념>
// image
// followings
// followers
// hearts
// bookmarks
