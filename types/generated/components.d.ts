import type { Schema, Struct } from '@strapi/strapi';

export interface DesignCategorie extends Struct.ComponentSchema {
  collectionName: 'components_design_categories';
  info: {
    displayName: 'Categorie';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'design.categorie': DesignCategorie;
    }
  }
}
