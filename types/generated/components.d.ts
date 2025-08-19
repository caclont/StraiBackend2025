import type { Schema, Struct } from '@strapi/strapi';

export interface ImageExterneImageExterne extends Struct.ComponentSchema {
  collectionName: 'components_image_externe_image_externes';
  info: {
    displayName: 'Image Externe';
  };
  attributes: {
    alt: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface VideoExterneVideoExterne extends Struct.ComponentSchema {
  collectionName: 'components_video_externe_video_externes';
  info: {
    displayName: 'Video Externe';
  };
  attributes: {
    provider: Schema.Attribute.Enumeration<['Vimeo', 'Youtube', 'Cloudinary']>;
    Titre: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image-externe.image-externe': ImageExterneImageExterne;
      'video-externe.video-externe': VideoExterneVideoExterne;
    }
  }
}
