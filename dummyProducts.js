"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyProducts = void 0;
exports.dummyProducts = [
    {
        _type: "product",
        title: "Wireless Earbuds Pro",
        slug: { current: "wireless-earbuds-pro" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Noise-cancelling wireless earbuds with long battery life." }],
            },
        ],
        hasVariants: true,
        variants: [
            {
                attributes: [
                    { attributeName: "Color", attributeValue: "Black" }
                ],
                stock: 20,
                price: 5500,
                discountedPrice: 4999,
                media: [
                    "https://m.media-amazon.com/images/I/612ayXw-rlL._AC_SX569_.jpg",
                    "https://img.drz.lazcdn.com/static/pk/p/c20341104115826081021d160733fd2b.jpg_720x720q80.jpg_.webp",
                    "https://m.media-amazon.com/images/I/51k0HSzPB5L._AC_SX569_.jpg",
                    "https://m.media-amazon.com/images/I/71ARULrls-L._AC_SX569_.jpg",
                    "https://m.media-amazon.com/images/I/511jS3UQbsL._AC_SX569_.jpg",
                    "https://m.media-amazon.com/images/I/51xnTt6vxAL._AC_SX569_.jpg",
                ],
            },
            {
                attributes: [
                    { attributeName: "Color", attributeValue: "White" }
                ],
                stock: 15,
                price: 5500,
                discountedPrice: 4999,
                media: [
                    "https://m.media-amazon.com/images/I/41rr6JeqLJL._AC_SX569_.jpg",
                    "https://video.drz.lazcdn.com/vod-4e6588/original/workflow/437b49a3-1908ec220c9-0005-d158-ef1-1800e.mp4"
                ],
            }
        ],
        collection: { _type: "reference", _ref: "electronics" },
        tags: ["earbuds", "wireless", "audio"],
        brand: "Binzo Mart",
        isNewArrival: true,
        isFeatured: true,
        isBestSelling: true,
        averageRating: 4.8,
        totalReviewsCount: 112
    },
    {
        _type: "product",
        title: "Modern Bookshelf",
        slug: { current: "modern-bookshelf" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "A stylish wooden bookshelf with 5 open shelves." }],
            },
        ],
        hasVariants: false,
        baseMedia: ["https://m.media-amazon.com/images/I/71XB2MpaZtL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61uHkj0-oNL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71a8vKvZXCL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71z1oLKPlOL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71oFTjSPUkL._AC_SL1500_.jpg"
        ],
        baseOriginalPrice: 8800,
        baseDiscountedPrice: 7999,
        baseStock: 10,
        collection: { _type: "reference", _ref: "home-and-decor" },
        tags: ["furniture", "bookshelf", "wood"],
        brand: "Binzo Mart",
        isNewArrival: true,
        isFeatured: false,
        isBestSelling: false,
        averageRating: 4.2,
        totalReviewsCount: 34
    },
    {
        _type: "product",
        title: "Multi-function Food Processor",
        slug: { current: "multi-function-food-processor" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Chop, grind, and blend with this all-in-one food processor." }],
            },
        ],
        hasVariants: true,
        variants: [
            {
                attributes: [{ attributeName: "Capacity", attributeValue: "1.5L" }],
                stock: 8,
                price: 7200,
                discountedPrice: 6999,
                media: ["https://s.alicdn.com/@sc04/kf/Hbd510aacb5154fce8a093ced3e5d600b2.jpg_720x720q50.jpg",
                    "https://video.drz.lazcdn.com/vod-4e6588/1e8c6350f94571edb37836a5e8aa0102/88763e4b7c5f4750999b7493d53705f8-c17eced881c2d8f9b1ca56a0d2259479-hd.mp4",
                    "https://s.alicdn.com/@sc04/kf/Hbf076fb68605405c979224bcecc349692.jpg_720x720q50.jpg",
                    "https://s.alicdn.com/@sc04/kf/H7620e0e5abcf48cb80be07d22be94dbcE.jpg_720x720q50.jpg", "https://s.alicdn.com/@sc04/kf/Ha1de351c37ea45aca5a0e1eae2d71197e.jpg_720x720q50.jpg",
                    "https://s.alicdn.com/@sc04/kf/H37415bcd56df43a1955c52377af0c874W.jpg_720x720q50.jpg"
                ],
            },
            {
                attributes: [{ attributeName: "Capacity", attributeValue: "3L" }],
                stock: 5,
                price: 8200,
                discountedPrice: 7799,
                media: ["https://s.alicdn.com/@sc04/kf/H74d6186175644caba6cd3df6793551002.jpg_720x720q50.jpg"],
            }
        ],
        collection: { _type: "reference", _ref: "kitchen-accessories" },
        tags: ["food", "processor", "kitchen"],
        brand: "Binzo Mart",
        isNewArrival: false,
        isFeatured: true,
        isBestSelling: false,
        averageRating: 4.4,
        totalReviewsCount: 76
    },
    {
        _type: "product",
        title: "Wall Art Canvas Set",
        slug: { current: "wall-art-canvas-set" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Abstract canvas prints to enhance your living room walls." }],
            },
        ],
        hasVariants: false,
        baseMedia: ["https://m.media-amazon.com/images/I/81B3KI+517L._AC_SY300_SX300_.jpg",
            "https://m.media-amazon.com/images/I/81d2iOYUV+L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/81XXum7snrL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/81F9vIxmL8L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71ClQS9mPfL._AC_SX679_.jpg"
        ],
        baseOriginalPrice: 2400,
        baseDiscountedPrice: 1999,
        baseStock: 25,
        collection: { _type: "reference", _ref: "home-and-decor" },
        tags: ["art", "canvas", "decor"],
        brand: "Binzo Mart",
        isNewArrival: false,
        isFeatured: true,
        isBestSelling: true,
        averageRating: 4.6,
        totalReviewsCount: 60
    },
    {
        _type: "product",
        title: "Touchscreen Air Fryer",
        slug: { current: "touchscreen-air-fryer" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Oil-free cooking with touchscreen presets for convenience." }],
            },
        ],
        hasVariants: false,
        baseMedia: ["https://m.media-amazon.com/images/I/71s8nikz44L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/91xfufD++3L._AC_SX679_.jpg0",
            "https://m.media-amazon.com/images/I/81cXjL3ZV5L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/81ZdyspKAwL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71yE4DqdiRL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71XmQ3hLrGL._AC_SX679_.jpg"
        ],
        baseOriginalPrice: 9000,
        baseDiscountedPrice: 8499,
        baseStock: 12,
        collection: { _type: "reference", _ref: "kitchen-accessories" },
        tags: ["fryer", "touchscreen", "kitchen"],
        brand: "Binzo Mart",
        isNewArrival: true,
        isFeatured: false,
        isBestSelling: true,
        averageRating: 4.9,
        totalReviewsCount: 140
    },
    {
        _type: "product",
        title: "LED Floor Lamp",
        slug: { current: "led-floor-lamp" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Minimalist LED floor lamp for ambient lighting." }],
            },
        ],
        hasVariants: true,
        variants: [
            {
                attributes: [{ attributeName: "Color", attributeValue: "Grey" }],
                stock: 12,
                price: 3200,
                discountedPrice: 2999,
                media: ["https://m.media-amazon.com/images/I/61gZO0x-2XL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/81HmAvItS-L._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71dPUqhH6VL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/81dvFaXuy2L._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71ciydrQRsL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71NCbRDk99L._AC_SL1500_.jpg",
                    "https://m.media-amazon.com/images/I/81vxBJ3KlBL._AC_SL1500_.jpg"
                ]
            },
            {
                attributes: [{ attributeName: "Color", attributeValue: "Gold" }],
                stock: 7,
                price: 3500,
                discountedPrice: 3299,
                media: ["https://m.media-amazon.com/images/I/61bZUZzCvXL._AC_SX679_.jpg"]
            }
        ],
        collection: { _type: "reference", _ref: "home-and-decor" },
        tags: ["lamp", "led", "decor"],
        brand: "Binzo Mart",
        isNewArrival: false,
        isFeatured: true,
        isBestSelling: false,
        averageRating: 4.5,
        totalReviewsCount: 45
    },
    {
        _type: "product",
        title: "Android Tablet 10.1 Inch",
        slug: { current: "android-tablet-10-inch" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "High-performance Android tablet for work and play." }],
            },
        ],
        hasVariants: false,
        baseMedia: ["https://m.media-amazon.com/images/I/81JPOOJFO8L._AC_SX425_.jpg",
            "https://m.media-amazon.com/images/I/714rnAb4ZVL._AC_SX425_.jpg",
            "https://m.media-amazon.com/images/I/61dKZj4GEgL._AC_SX425_.jpg",
            "https://m.media-amazon.com/images/I/61dKZj4GEgL._AC_SX425_.jpg",
            "https://m.media-amazon.com/images/I/71rN3KXODML._AC_SX425_.jpg",
        ],
        baseOriginalPrice: 18500,
        baseDiscountedPrice: 17499,
        baseStock: 6,
        collection: { _type: "reference", _ref: "electronics" },
        tags: ["tablet", "android", "electronics"],
        brand: "Binzo Mart",
        isNewArrival: false,
        isFeatured: true,
        isBestSelling: false,
        averageRating: 4.3,
        totalReviewsCount: 80
    },
    {
        _type: "product",
        title: "Smart Rice Cooker",
        slug: { current: "smart-rice-cooker" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Digital rice cooker with multiple cooking modes and timer." }],
            },
        ],
        hasVariants: false,
        baseMedia: ["https://m.media-amazon.com/images/I/51lEvpCRRYL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/716jAAF9QDL._AC_SY879_.jpg"
        ],
        baseOriginalPrice: 4700,
        baseDiscountedPrice: 4499,
        baseStock: 20,
        collection: { _type: "reference", _ref: "kitchen-accessories" },
        tags: ["cooker", "kitchen", "smart"],
        brand: "Binzo Mart",
        isNewArrival: true,
        isFeatured: true,
        isBestSelling: false,
        averageRating: 4.7,
        totalReviewsCount: 54
    },
    {
        _type: "product",
        title: "Ergonomic Office Chair",
        slug: { current: "ergonomic-office-chair" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Comfortable and adjustable office chair with lumbar support." }],
            },
        ],
        hasVariants: true,
        variants: [
            {
                attributes: [{ attributeName: "Color", attributeValue: "Grey" }],
                stock: 10,
                price: 9500,
                discountedPrice: 8999,
                media: ["https://m.media-amazon.com/images/I/71VOSFwUE+L._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71Q+lETgqfL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71zEl4vm3uL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/711ipRG9LNL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/7149Y4VabXL._AC_SL1500_.jpg",
                    "https://m.media-amazon.com/images/I/71KdfnJXgGL._AC_SL1500_.jpg",
                    "https://m.media-amazon.com/images/I/71UMjTb4aoL._AC_SL1500_.jpg"
                ]
            },
            {
                attributes: [{ attributeName: "Color", attributeValue: "Black + Blue" }],
                stock: 8,
                price: 9500,
                discountedPrice: 8999,
                media: ["https://m.media-amazon.com/images/I/71kI3MCZ8FL._AC_SX679_.jpg"]
            },
            {
                attributes: [{ attributeName: "Color", attributeValue: "Black" }],
                stock: 8,
                price: 9500,
                discountedPrice: 8999,
                media: ["https://m.media-amazon.com/images/I/71LWhgxJCaL._AC_SX679_.jpg"]
            },
            {
                attributes: [{ attributeName: "Style", attributeValue: "Without Headrest" }],
                stock: 8,
                price: 9500,
                discountedPrice: 8999,
                media: ["https://m.media-amazon.com/images/I/712Unaa8jSL._AC_SX679_.jpg"]
            },
            {
                attributes: [{ attributeName: "Style", attributeValue: "With Headrest" }],
                stock: 8,
                price: 9500,
                discountedPrice: 8999,
                media: ["https://m.media-amazon.com/images/I/71pKjtU9QtL._AC_SX679_.jpg"]
            },
        ],
        collection: { _type: "reference", _ref: "home-and-decor" },
        tags: ["chair", "ergonomic", "furniture"],
        brand: "Binzo Mart",
        isNewArrival: false,
        isFeatured: true,
        isBestSelling: true,
        averageRating: 4.9,
        totalReviewsCount: 150
    },
    {
        _type: "product",
        title: "Smartwatch X5",
        slug: { current: "smartwatch-x5" },
        description: [
            {
                _type: "block",
                children: [{ _type: "span", text: "Stay connected with health tracking and phone sync features." }],
            },
        ],
        hasVariants: false,
        baseMedia: ["https://m.media-amazon.com/images/I/71qLOn9tcrL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/816r7v8ZuHL._AC_SX569_.jpg",
            "https://m.media-amazon.com/images/I/812VrmSrIHL._AC_SX569_.jpg"
        ],
        baseOriginalPrice: 12999,
        baseDiscountedPrice: 11999,
        baseStock: 14,
        collection: { _type: "reference", _ref: "electronics" },
        tags: ["smartwatch", "wearable", "fitness"],
        brand: "Binzo Mart",
        isNewArrival: true,
        isFeatured: true,
        isBestSelling: false,
        averageRating: 4.6,
        totalReviewsCount: 91
    },
    {
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
        variants: [
            {
                attributes: [{ attributeName: "Color", attributeValue: "Red" }],
                stock: 18,
                price: 3200,
                discountedPrice: 2899,
                media: ["https://m.media-amazon.com/images/I/81JhkTsUioL._AC_SX425_.jpg",
                    "https://m.media-amazon.com/images/I/71zVs2oOgjL._AC_SX425_.jpg",
                    "https://m.media-amazon.com/images/I/71zVs2oOgjL._AC_SX425_.jpg",
                ]
            },
            {
                attributes: [{ attributeName: "Color", attributeValue: "Blue" }],
                stock: 14,
                price: 3200,
                discountedPrice: 2899,
                media: ["https://m.media-amazon.com/images/I/81srH0p58IL._AC_SX425_.jpg"]
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
        baseMedia: ["https://m.media-amazon.com/images/I/71zVDwU6xeL._AC_SX679_.jpg",
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
        variants: [
            {
                attributes: [{ attributeName: "Size", attributeValue: "5x7" }],
                stock: 6,
                price: 4800,
                discountedPrice: 4299,
                media: ["https://m.media-amazon.com/images/I/81Rt9yDAqxL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/913u8NrqjYL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/91ttvdU3FDL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/81HJmEG5UOL._AC_SX679_.jpg"
                ]
            },
            {
                attributes: [{ attributeName: "Size", attributeValue: "5x8" }],
                stock: 4,
                price: 6400,
                discountedPrice: 5999,
                media: ["https://m.media-amazon.com/images/I/91IROdliwJL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/81JjMSvkaNL._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71cy2USQhzL._AC_SX679_.jpg"
                ]
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
        baseMedia: ["https://m.media-amazon.com/images/I/71awBPNle4L._AC_SX679_.jpg"],
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
        baseMedia: ["https://m.media-amazon.com/images/I/617+krmoROL._AC_SX679_.jpg",
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
    }
];
