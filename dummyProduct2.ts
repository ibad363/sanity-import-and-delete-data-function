// ok data
export const dummyProducts = [{
        _type: "product",
        title: "Compact Bluetooth Speaker",
        slug: { current: "compact-bluetooth-speaker" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Portable speaker with rich bass and 10-hour playtime." }],
            },
        ],
        hasVariants: true,
        baseImages : [
            "https://m.media-amazon.com/images/I/71zVs2oOgjL._AC_SX425_.jpg",
            "https://m.media-amazon.com/images/I/71zVs2oOgjL._AC_SX425_.jpg",
        ],
        variants: [
            {
                attributes: [{ attributeName: "Color", attributeValue: "Red" }],
                stock: 18,
                price: 3200,
                discountedPrice: 2899,
                image: "https://m.media-amazon.com/images/I/81JhkTsUioL._AC_SX425_.jpg"
            },
            {
                attributes: [{ attributeName: "Color", attributeValue: "Blue" }],
                stock: 14,
                price: 3200,
                discountedPrice: 2899,
                image: "https://m.media-amazon.com/images/I/81srH0p58IL._AC_SX425_.jpg"
            }
        ],
        collection: { _type: "reference", _ref: "electronics" },
        tags: ["speaker", "bluetooth", "audio"],
        brand: "Binzo Mart",
        isNewArrival: false,
        isFeatured: false,
        isBestSelling: true,
        averageRating: 4.7,
        totalReviewsCount: 99
    },
    {
        _type: "product",
        title: "Bamboo Kitchen Utensils Set",
        slug: { current: "bamboo-kitchen-utensils-set" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Eco-friendly bamboo utensils for sustainable cooking." }],
            },
        ],
        hasVariants: false,
        baseImages: ["https://m.media-amazon.com/images/I/71zVDwU6xeL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/81da1ZZwaQL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/81N2fUqLRGL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/711P1azZD1L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71-DYz00D5L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/81EPSLUp9BL._AC_SX679_.jpg"
        ],
        baseOriginalPrice: 1600,
        baseDiscountedPrice: 1299,
        baseStock: 30,
        collection: { _type: "reference", _ref: "kitchen-accessories" },
        tags: ["bamboo", "kitchen", "eco"],
        brand: "Binzo Mart",
        isNewArrival: true,
        isFeatured: true,
        isBestSelling: false,
        averageRating: 4.3,
        totalReviewsCount: 47
    },
    {
        _type: "product",
        title: "Geometric Pattern Rug",
        slug: { current: "geometric-pattern-rug" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Soft floor rug with modern geometric design." }],
            },
        ],
        hasVariants: true,
        baseImages: ["https://m.media-amazon.com/images/I/81Rt9yDAqxL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/913u8NrqjYL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/91ttvdU3FDL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/81HJmEG5UOL._AC_SX679_.jpg",
                "https://m.media-amazon.com/images/I/81JjMSvkaNL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71cy2USQhzL._AC_SX679_.jpg"],
        variants: [
            {
                attributes: [{ attributeName: "Size", attributeValue: "5x7" }],
                stock: 6,
                price: 4800,
                discountedPrice: 4299,
                image: "https://m.media-amazon.com/images/I/81HJmEG5UOL._AC_SX679_.jpg"
            },
            {
                attributes: [{ attributeName: "Size", attributeValue: "5x8" }],
                stock: 4,
                price: 6400,
                discountedPrice: 5999,
                image: "https://m.media-amazon.com/images/I/91IROdliwJL._AC_SX679_.jpg",
            }
        ],
        collection: { _type: "reference", _ref: "home-and-decor" },
        tags: ["rug", "decor", "floor"],
        brand: "Binzo Mart",
        isNewArrival: false,
        isFeatured: true,
        isBestSelling: false,
        averageRating: 4.4,
        totalReviewsCount: 33
    },
    {
        _type: "product",
        title: "Electric Kettle 1.7L",
        slug: { current: "electric-kettle-1-7l" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Boil water quickly with automatic shut-off and cool touch body." }],
            },
        ],
        hasVariants: false,
        baseImages: ["https://m.media-amazon.com/images/I/71awBPNle4L._AC_SX679_.jpg"],
        baseOriginalPrice: 2400,
        baseDiscountedPrice: 2199,
        baseStock: 22,
        collection: { _type: "reference", _ref: "kitchen-accessories" },
        tags: ["kettle", "electric", "kitchen"],
        brand: "Binzo Mart",
        isNewArrival: true,
        isFeatured: false,
        isBestSelling: false,
        averageRating: 4.2,
        totalReviewsCount: 39
    },
    {
        _type: "product",
        title: "Foldable Study Table",
        slug: { current: "foldable-study-table" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Space-saving foldable table for students and remote workers." }],
            },
        ],
        hasVariants: false,
        baseImages: ["https://m.media-amazon.com/images/I/617+krmoROL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71SdcTiau1L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71Ganilip5L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71VNe506lcL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71u9nRT+xXL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/719zCNgHFPL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/711eUxMSMKL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/611-BS5kBhL._AC_SL1500_.jpg"
        ],
        baseOriginalPrice: 5200,
        baseDiscountedPrice: 4999,
        baseStock: 9,
        collection: { _type: "reference", _ref: "home-and-decor" },
        tags: ["study", "furniture", "table"],
        brand: "Binzo Mart",
        isNewArrival: false,
        isFeatured: true,
        isBestSelling: true,
        averageRating: 4.6,
        totalReviewsCount: 61
    },
    {
    _type: "product",
    title: "Men's Classic Cotton Blend Shirt",
    slug: { current: "mens-classic-cotton-blend-shirt" },
    description: [
      {
        _type: "block",
        children: [{ _type: "span", text: "Classic cotton and fabric blend shirt available in multiple sizes and colors." }],
      },
    ],
    hasVariants: true,
    baseImages: [
      "https://m.media-amazon.com/images/I/71UmH1uRz0L._AC_SX522_.jpg",
      "https://m.media-amazon.com/images/I/71+Ig1mzx5L._AC_SX522_.jpg"
    ],
    variants: [
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Royal Blue" },
          { attributeName: "Size", attributeValue: "Small" },
          { attributeName: "Material", attributeValue: "Cotton" }
        ],
        stock: 10,
        price: 1500,
        discountedPrice: 1299,
        image: "https://m.media-amazon.com/images/I/71Z+mQtvSXL._AC_SX522_.jpg"
      },
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Royal Blue" },
          { attributeName: "Size", attributeValue: "Small" },
          { attributeName: "Material", attributeValue: "Fabric" }
        ],
        stock: 8,
        price: 1500,
        discountedPrice: 1299,
        image: "https://m.media-amazon.com/images/I/81wlf1QcbqL._AC_SX522_.jpg"
      },
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Royal Blue" },
          { attributeName: "Size", attributeValue: "Medium" },
          { attributeName: "Material", attributeValue: "Cotton" }
        ],
        stock: 12,
        price: 1500,
        discountedPrice: 1299,
        image: "https://m.media-amazon.com/images/I/71E8he4sVPL._AC_SX522_.jpg"
      },
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Royal Blue" },
          { attributeName: "Size", attributeValue: "Large" },
          { attributeName: "Material", attributeValue: "Cotton" }
        ],
        stock: 15,
        price: 1500,
        discountedPrice: 1299,
        image: "https://m.media-amazon.com/images/I/71y-UtaL65L._AC_SX522_.jpg"
      },
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Royal Blue" },
          { attributeName: "Size", attributeValue: "Large" },
          { attributeName: "Material", attributeValue: "Fabric" }
        ],
        stock: 7,
        price: 1500,
        discountedPrice: 1299,
        image: "https://m.media-amazon.com/images/I/71KhRC644nL._AC_SX522_.jpg"
      },
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Red" },
          { attributeName: "Size", attributeValue: "Small" },
          { attributeName: "Material", attributeValue: "Fabric" }
        ],
        stock: 9,
        price: 1500,
        discountedPrice: 1299,
        image: "https://m.media-amazon.com/images/I/71aOwmCq6rL._AC_SX522_.jpg"
      },
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Red" },
          { attributeName: "Size", attributeValue: "Medium" },
          { attributeName: "Material", attributeValue: "Cotton" }
        ],
        stock: 10,
        price: 1500,
        discountedPrice: 1299,
        image: "https://m.media-amazon.com/images/I/81fJrlv1OqL._AC_SX522_.jpg"
      },
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Red" },
          { attributeName: "Size", attributeValue: "Large" },
          { attributeName: "Material", attributeValue: "Cotton" }
        ],
        stock: 11,
        price: 1500,
        discountedPrice: 1299,
        image: "https://m.media-amazon.com/images/I/91a5uXQTBGL._AC_SX522_.jpg"
      }
    ],
    collection: { _type: "reference", _ref: "apparel" },
    tags: ["shirt", "men", "cotton", "fabric"],
    brand: "Binzo Mart",
    isNewArrival: true,
    isFeatured: true,
    isBestSelling: false,
    averageRating: 4.5,
    totalReviewsCount: 67
  },
  {
    _type: "product",
    title: "Summer Breeze Casual Shirt",
    slug: { current: "summer-breeze-casual-shirt" },
    description: [
      {
        _type: "block",
        children: [{ _type: "span", text: "Bright colored casual shirt, perfect for summer days." }],
      },
    ],
    hasVariants: true,
    baseImages: [
      "https://m.media-amazon.com/images/I/71FhxgdTb3L._AC_SY500_.jpg",
      "https://m.media-amazon.com/images/I/714rkPhsIAL._AC_SY500_.jpg"
    ],
    variants: [
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Grey" },
          { attributeName: "Size", attributeValue: "Small" }
        ],
        stock: 6,
        price: 1400,
        discountedPrice: 1199,
        image: "https://m.media-amazon.com/images/I/81BTz9yms+L._AC_SY500_.jpg"
      },
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Grey" },
          { attributeName: "Size", attributeValue: "Medium" }
        ],
        stock: 10,
        price: 1400,
        discountedPrice: 1199,
        image: "https://m.media-amazon.com/images/I/81-gy296ZuL._AC_SY500_.jpg"
      },
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Grey" },
          { attributeName: "Size", attributeValue: "Large" }
        ],
        stock: 8,
        price: 1400,
        discountedPrice: 1199,
        image: "https://m.media-amazon.com/images/I/91RUXoD+tYL._AC_SY500_.jpg"
      },
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Green" },
          { attributeName: "Size", attributeValue: "Small" }
        ],
        stock: 5,
        price: 1400,
        discountedPrice: 1199,
        image: "https://m.media-amazon.com/images/I/81oHv7jMQOL._AC_SY500_.jpg"
      },
      {
        attributes: [
          { attributeName: "Color", attributeValue: "Green" },
          { attributeName: "Size", attributeValue: "Large" }
        ],
        stock: 7,
        price: 1400,
        discountedPrice: 1199,
        image: "https://m.media-amazon.com/images/I/81Wx7x-OW8L._AC_SY500_.jpg"
      }
    ],
    collection: { _type: "reference", _ref: "apparel" },
    tags: ["shirt", "summer", "casual"],
    brand: "Binzo Mart",
    isNewArrival: false,
    isFeatured: false,
    isBestSelling: true,
    averageRating: 4.3,
    totalReviewsCount: 52
  },
  {
    _type: "product",
    title: "Everyday Comfort Slim Fit Pant",
    slug: { current: "everyday-comfort-slim-fit-pant" },
    description: [
      {
        _type: "block",
        children: [{ _type: "span", text: "Comfortable everyday wear pants available in multiple sizes." }],
      },
    ],
    hasVariants: true,
    baseImages: [
      "https://m.media-amazon.com/images/I/61dClOsliLL._AC_SX385_.jpg",
    ],
    variants: [
      {
        attributes: [{ attributeName: "Size", attributeValue: "Extra Small" }],
        stock: 5,
        price: 1700,
        discountedPrice: 1499,
        image: "https://m.media-amazon.com/images/I/61pIeDlnCUL._AC_SX385_.jpg"
      },
      {
        attributes: [{ attributeName: "Size", attributeValue: "Small" }],
        stock: 10,
        price: 1700,
        discountedPrice: 1499,
        image: "https://m.media-amazon.com/images/I/71IJ6TwNjtL._AC_SX385_.jpg"
      },
      {
        attributes: [{ attributeName: "Size", attributeValue: "Medium" }],
        stock: 12,
        price: 1700,
        discountedPrice: 1499,
        image: "https://m.media-amazon.com/images/I/91vJcymT8JL._AC_SX385_.jpg"
      },
      {
        attributes: [{ attributeName: "Size", attributeValue: "Large" }],
        stock: 9,
        price: 1700,
        discountedPrice: 1499,
        image: "https://m.media-amazon.com/images/I/61iyBr2d6pL._AC_SX385_.jpg"
      }
    ],
    collection: { _type: "reference", _ref: "apparel" },
    tags: ["pants", "bottomwear", "fashion"],
    brand: "Binzo Mart",
    isNewArrival: false,
    isFeatured: true,
    isBestSelling: false,
    averageRating: 4.4,
    totalReviewsCount: 44
  }

]