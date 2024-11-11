import { addToCart, calculateTotal, CartItem } from "./cart";
import { filterByPrice, findProduct } from "./product";
import { Book, Clothing, Electronics } from "./types";

const electronics: Electronics[] = [
    {
        id: 1,
        name: "Smartphone",
        category: 'electronics',
        warranty: "12month",
        price: 699,
        available: true,
        count: 15,
        description: "High-quality smartphone with a powerful processor.",
        title: "Galaxy S21"
    },
    {
        id: 2,
        name: "Laptop",
        category: 'electronics',
        warranty: "12month",
        price: 1700,
        available: true,
        count: 10,
        description: "Lightweight laptop with long battery life.",
        title: "MacBook Air"
    },
    {
        id: 3,
        name: "Smartwatch",
        category: 'electronics',
        warranty: "12month",
        price: 2000,
        available: false,
        count: 0,
        description: "Waterproof smartwatch with fitness tracking.",
        title: "Fitbit Versa"
    },
    {
        id: 4,
        name: "Tablet",
        category: 'electronics',
        price: 450,
        warranty: "12month",
        available: true,
        count: 5,
        description: "10-inch tablet with high-resolution display.",
        title: "iPad Mini"
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        category: 'electronics',
        warranty: "12month",
        price: 3000,
        available: true,
        count: 20,
        description: "Portable speaker with powerful bass.",
        title: "JBL Flip 5"
    }
];

const clothing: Clothing[] = [
    {
        id: 1,
        name: "T-Shirt",
        price: 20,
        available: true,
        count: 50,
        description: "Cotton T-shirt in various colors.",
        title: "Basic Tee",
        category: "clothing",
        size: "M"
    },
    {
        id: 2,
        name: "Jeans",
        price: 45,
        available: true,
        count: 30,
        description: "Classic blue jeans with a straight fit.",
        title: "Denim Jeans",
        category: "clothing",
        size: "L"
    },
    {
        id: 3,
        name: "Jacket",
        price: 85,
        available: false,
        count: 0,
        description: "Water-resistant jacket for outdoor activities.",
        title: "Outdoor Jacket",
        category: "clothing",
        size: "XL"
    },
    {
        id: 4,
        name: "Sweater",
        price: 35,
        available: true,
        count: 20,
        description: "Warm sweater made of wool.",
        title: "Wool Sweater",
        category: "clothing",
        size: "S"
    },
    {
        id: 5,
        name: "Dress",
        price: 70,
        available: true,
        count: 15,
        description: "Elegant dress suitable for formal occasions.",
        title: "Evening Dress",
        category: "clothing",
        size: "M"
    }
];


const books: Book[] = [
    {
        id: 1,
        name: "To Kill a Mockingbird",
        price: 15,
        available: true,
        count: 40,
        description: "A classic novel about justice and racial inequality.",
        title: "Harper Lee's Masterpiece",
        category: "book",
        author: "Harper Lee",
        genre: "Fiction",
        pagesCount: 324
    },
    {
        id: 2,
        name: "1984",
        price: 12,
        available: true,
        count: 30,
        description: "Dystopian novel set in a totalitarian society.",
        title: "A Dystopian Classic",
        category: "book",
        author: "George Orwell",
        genre: "Dystopian",
        pagesCount: 328
    },
    {
        id: 3,
        name: "The Great Gatsby",
        price: 10,
        available: false,
        count: 0,
        description: "A story of wealth and society in the 1920s.",
        title: "Classic American Novel",
        category: "book",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        pagesCount: 180
    },
    {
        id: 4,
        name: "Thinking, Fast and Slow",
        price: 18,
        available: true,
        count: 20,
        description: "Exploring two modes of thought: fast and instinctive, and slow and rational.",
        title: "Insights into Human Psychology",
        category: "book",
        author: "Daniel Kahneman",
        genre: "Psychology",
        pagesCount: 499
    },
    {
        id: 5,
        name: "The Hobbit",
        price: 14,
        available: true,
        count: 25,
        description: "A fantasy adventure that introduces Middle-earth.",
        title: "The Prequel to The Lord of the Rings",
        category: "book",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        pagesCount: 310
    }
];

const foundProduct = findProduct(electronics, 2);
console.log("Product found:", foundProduct);

// Filter products by price
const affordableElectronics = filterByPrice(electronics, 1500);
console.log("Electronics up to 1500:", affordableElectronics);

// Working with the basket
let cart: CartItem<Electronics | Clothing | Book>[] = [];
cart = addToCart(cart, electronics[0], 1);
cart = addToCart(cart, clothing[1], 2);
cart = addToCart(cart, books[2], 1);

console.log("Basket:", cart);
console.log("The total cost of the basket:", calculateTotal(cart));