import type { Schema, Struct } from '@strapi/strapi';

export interface TextArticle extends Struct.ComponentSchema {
  collectionName: 'components_text_articles';
  info: {
    displayName: 'article';
  };
  attributes: {
    article: Schema.Attribute.String;
  };
}

export interface TextHelp extends Struct.ComponentSchema {
  collectionName: 'components_text_helps';
  info: {
    displayName: 'help';
  };
  attributes: {
    needHelp: Schema.Attribute.String;
  };
}

export interface TextProduct extends Struct.ComponentSchema {
  collectionName: 'components_text_products';
  info: {
    displayName: 'product';
  };
  attributes: {
    product: Schema.Attribute.RichText;
  };
}

export interface TextTopic extends Struct.ComponentSchema {
  collectionName: 'components_text_topics';
  info: {
    displayName: 'topic';
  };
  attributes: {
    topic: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'text.article': TextArticle;
      'text.help': TextHelp;
      'text.product': TextProduct;
      'text.topic': TextTopic;
    }
  }
}
