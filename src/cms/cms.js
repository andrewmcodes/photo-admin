import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import PhotosPagePreview from './preview-templates/PhotosPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('photos', PhotosPagePreview)
