import type { Schema, Struct } from '@strapi/strapi';

export interface ElectricPropElectricChar extends Struct.ComponentSchema {
  collectionName: 'components_electric_prop_electric_chars';
  info: {
    displayName: 'electric_char';
  };
  attributes: {
    battery: Schema.Attribute.String;
    charge_time: Schema.Attribute.Integer;
    distance: Schema.Attribute.Integer;
    e_power: Schema.Attribute.Integer;
    max_speed: Schema.Attribute.Integer;
  };
}

export interface MainPropChar extends Struct.ComponentSchema {
  collectionName: 'components_main_prop_chars';
  info: {
    displayName: 'char';
  };
  attributes: {
    d_wheel: Schema.Attribute.Integer;
    deck_height: Schema.Attribute.Integer;
    deck_width: Schema.Attribute.Decimal;
    ground_clearance: Schema.Attribute.Integer;
    handlebar_width: Schema.Attribute.Decimal;
    is_folding: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    length: Schema.Attribute.Decimal;
    max_payload: Schema.Attribute.Integer;
    min_age: Schema.Attribute.Integer;
    warranty: Schema.Attribute.Integer;
    weight: Schema.Attribute.Decimal;
  };
}

export interface MainPropProduct extends Struct.ComponentSchema {
  collectionName: 'components_main_prop_products';
  info: {
    displayName: 'product';
    icon: 'archive';
  };
  attributes: {
    char: Schema.Attribute.Component<'main-prop.char', false>;
    colors: Schema.Attribute.JSON;
    discount_price: Schema.Attribute.Integer;
    electric_char: Schema.Attribute.Component<
      'electric-prop.electric-char',
      false
    >;
    image: Schema.Attribute.Media<'images', true>;
    in_stock: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    is_child: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    is_epower: Schema.Attribute.Boolean & Schema.Attribute.Required;
    label: Schema.Attribute.Enumeration<['new', 'popular', 'sale']>;
    price: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'electric-prop.electric-char': ElectricPropElectricChar;
      'main-prop.char': MainPropChar;
      'main-prop.product': MainPropProduct;
    }
  }
}
