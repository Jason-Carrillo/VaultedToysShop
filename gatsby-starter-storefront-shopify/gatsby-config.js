require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  plugins: [
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopify: {
          shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
          accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        },
        gatsbyStorefrontApi: {
          apiUrl: process.env.GATSBYSTOREFRONT_API_URL,
          accessToken: process.env.GATSBYSTOREFRONT_ACCESS_TOKEN,
        },
        useGatsbyStorefrontApi: true,
        basePath: '/',
        productImagesCarouselProps: {
          // See: https://github.com/express-labs/pure-react-carousel#carouselprovider-
          // naturalSlideWidth: 500,
          // naturalSlideHeight: 500,
        },
        product: {
          maxDescriptionSectionsNumber: 10,
        },
        reviews: {
          reviewsNumberPerPage: 10,
        },
        manifest: {
          name: 'Gatsby Storefront Demo Store',
          short_name: 'Gatsby Storefront',
          start_url: '/',
          background_color: '#8B3AF5',
          theme_color: '#F7F41C',
          display: 'standalone',
          icon: 'src/images/shopping_bag.svg',
          icon_options: {
            purpose: 'any maskable',
          },
          cache_busting_mode: 'none',
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://VaultTesting.myshopify.com',
    gatsbyStorefrontConfig: {
      storeName: 'Vaulted Toys',
      storeDescription: 'Collectibles',
      email: 'vaultedtoysshop@gmail.com',
      company: 'Vaulted Toys',
      location: 'Sonora, TX',
      address: '1 Centre St.',
      phone: '+1 (800) 123-1234',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      socialNetworks: [
        'https://facebook.com',
        'https://instagram.com',
        'https://pinterest.com',
        'https://twitter.com',
        'https://youtube.com',
      ],
      // Payments icons are temporarily disabled, due to large package size and negative impact on Lighthouse 6 performance.
      // Need to find an alternative package to react-payment-icons-inline.
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        'Tumblr',
        'Whatsapp',
        'Line',
        'Viber',
      ],
      googleAnalyticsId: 'UA-141525658-5',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'product',
          children: [
            {
              name: 'Jewelery',
              type: 'collection',
              handle: 'jewelery',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Apparel',
              type: 'collection',
              handle: 'apparel',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Silk Summer Top',
              type: 'product',
              handle: 'silk-summer-top',
              textColor: 'white',
              textBgColor: 'primary',
            },
          ],
        },
        {
          type: 'section',
          children: [
            {
              name: 'Apparel',
              type: 'collection',
              handle: 'apparel',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Garden',
              type: 'collection',
              handle: 'garden',
              textColor: 'white',
              textBgColor: 'primary',
            },
          ],
        },
        {
          type: 'section',
          children: [
            {
              name: 'Red Sports Tee',
              type: 'product',
              handle: 'red-sports-tee',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Anchor Bracelet Mens',
              type: 'product',
              handle: 'leather-anchor',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Yellow Sofa',
              type: 'product',
              handle: 'yellow-sofa',
              textColor: 'black',
              textBgColor: 'white',
            },
          ],
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: "Pokemon",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'Cards',
                type: 'collection',
                handle: 'apparel',
              }
            ],
          },
          {
            name: "Sports",
            type: 'header',
            children: [
              {
                name: 'Basketball',
                type: 'collection',
                handle: 'cards',
              },
              {
                name: 'Football',
                type: 'collection',
                handle: 'cards',
              },
              {
                name: 'Soccer',
                type: 'collection',
                handle: 'cards',
              },
            ],
          },
          { 
            name: 'Funko', 
            type: 'header',
            children: [
              {
                name: 'Funko Pops',
                type: 'collection',
                handle: 'figures',
              }
            ],
          },
        ],
      }),
      footerLinks: [
        {
          name: 'About us',
          link: '/pages/about',
        },
        {
          name: 'Terms of Service',
          link: '/policy/termsOfService',
        },
        {
          name: 'Privacy policy',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/policy/refundPolicy',
        },
        {
          name: 'External',
          link: 'https://amazon.com',
        },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
};
