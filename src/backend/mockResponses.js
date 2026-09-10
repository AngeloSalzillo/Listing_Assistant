const mockResponses = [

    // 0. Valid - T-shirt
    `{
        "title": "High-Quality White T-Shirt - Size M",
        "tags": ["tshirt", "fashion", "men", "size-m"],
        "price_range": "10-20€"
    }`,


    // 1. Valid - Running shoes
    `{
        "title": "Nike Running Shoes - Size 42",
        "tags": ["nike", "running", "shoes", "size-42"],
        "price_range": "40-60€"
    }`,



    // 2. Valid - Desk
    `{
        "title": "Wooden Desk in Good Condition",
        "tags": ["desk", "furniture", "wood", "office"],
        "price_range": "30-50€"
    }`,


    // 3. Valid - Smartphone
    `{
        "title": "iPhone 13 128GB - Excellent Condition",
        "tags": ["iphone", "apple", "smartphone", "128gb"],
        "price_range": "300-400€"
    }`,



    // 4. Valid - Bicycle
    `{
        "title": "Mountain Bike - 27.5 inch Wheels",
        "tags": ["bike", "mountain-bike", "cycling", "sport"],
        "price_range": "150-250€"
    }`,


    // 5. Valid - Headphones
    `{
        "title": "Sony Wireless Headphones - Like New",
        "tags": ["sony", "headphones", "wireless", "audio"],
        "price_range": "60-90€"
    }`,


    // 6. BAD - Malformed JSON
    `{
        "title": "Nike Running Shoes - Siz,
        "tags": ["nike", "running", "shoes", "size-42],
        "price_range": "40-60€"
    }`,


    // 7. BAD - Missing title
    `{
        "tags": ["desk", "furniture", "wood"],
        "price_range": "30-50€"
    }`,


    // 8. BAD - Missing tags
    `{
        "title": "Gaming Keyboard - Mechanical",
        "price_range": "50-80€"
    }`,


    // 9. BAD - Empty JSON object
    // Represents an invalid/non-sellable user input
    `{}`,



    // 10. BAD - Completely invalid response
    // Not JSON at all
    `The AI could not generate a listing. Please try again.`

];

export default mockResponses;
