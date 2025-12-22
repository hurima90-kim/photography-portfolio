import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Photo = defineDocumentType(() => ({
  name: 'Photo',
  filePathPattern: `photos/**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the photo',
      required: true,
    },
    image: {
      type: 'string',
      description: 'Path to the image file',
      required: true,
    },
    caption: {
      type: 'string',
      description: 'Caption for the photo',
    },
    gallery: {
      type: 'string',
      description: 'Gallery slug this photo belongs to',
    },
    date: {
      type: 'date',
      description: 'The date the photo was taken',
      required: true,
    },
    location: {
      type: 'string',
      description: 'Location where the photo was taken',
    },
    camera: {
      type: 'string',
      description: 'Camera model used',
    },
    lens: {
      type: 'string',
      description: 'Lens used',
    },
    aperture: {
      type: 'string',
      description: 'Aperture setting (e.g., f/2.8)',
    },
    shutterSpeed: {
      type: 'string',
      description: 'Shutter speed (e.g., 1/1000)',
    },
    iso: {
      type: 'string',
      description: 'ISO setting',
    },
    focalLength: {
      type: 'string',
      description: 'Focal length (e.g., 50mm)',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tags for the photo',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (photo) => `/photo/${photo._raw.flattenedPath.replace('photos/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (photo) => photo._raw.flattenedPath.replace('photos/', ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Photo],
})