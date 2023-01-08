export default {
	name: 'project',
	type: 'document',
	title: 'Projects',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'description',
			type: 'string',
			title: 'Description',
		},
		{
			name: 'isPublished',
			type: 'boolean',
			title: 'Is Published',
			initialValue: false,
		},
		{
			name: 'thumbnail',
			type: 'image',
			title: 'Thumbnail Image',
		},
		{
			name: 'githubLink',
			type: 'string',
			title: 'Github Link',
		},
		{
			name: 'projectLink',
			type: 'string',
			title: 'Project Link',
		},
		{
			name: 'thumbnailAlt',
			type: 'string',
			title: 'Thumbnail Alt',
		},
		{
			name: 'tags',
			type: 'tags',
			title: 'Tags',
			options: {
				includeFromRelated: 'tags',
			},
		},
		{
			name: 'createdDate',
			type: 'datetime',
			title: 'Created Date',
		},
	],
};
