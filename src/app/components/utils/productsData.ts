type Product = {
    name: string;
    category: string;
    image: string;
    price: string;
    brand: string;
    color: string;
    size: string;
  };
  
  type ProductsData = {
    women: Product[];
    men: Product[];
  };
 export const productsData: ProductsData = {
    
    women: [
      {
        name: "T-Shirt",
        category: "Clothing",
        image: "/images/products/women/women-1.jpg",
        price: "$50",
        brand: "Nike",
        color: "Red",
        size: "M",
      },
      {
        name: "Handbag",
        category: "Accessories",
        image: "/images/products/women/women-2.jpg",
        price: "$80",
        brand: "Adidas",
        color: "Blue",
        size: "L",
      },
      {
        name: "Clothing",
        category: "Accessories",
        image: "/images/products/women/women-3.jpg",
        price: "$80",
        brand: "Adidas",
        color: "Blue",
        size: "L",
      },
      {
        name: "Clothing",
        category: "Accessories",
        image: "/images/products/women/women-4.jpg",
        price: "$80",
        brand: "Adidas",
        color: "Blue",
        size: "L",
      },
      {
        name: "Clothing",
        category: "Accessories",
        image: "/images/products/women/women-5.jpg",
        price: "$80",
        brand: "Adidas",
        color: "Blue",
        size: "L",
      },
      // Add more women products here
    ],
    men: [
      {
        name: "Sneakers",
        category: "Shoes",
        image: "/images/products/men/man-1.jpg",
        price: "$60",
        brand: "Puma",
        color: "Black",
        size: "XL",
      },
      {
        name: "Jacket",
        category: "Clothing",
        image: "/images/products/men/man-2.jpg",
        price: "$120",
        brand: "Reebok",
        color: "Gray",
        size: "L",
      },
      {
        name: "Jacket",
        category: "Clothing",
        image: "/images/products/men/man-3.jpg",
        price: "$120",
        brand: "Reebok",
        color: "Gray",
        size: "L",
      },
      {
        name: "Jacket",
        category: "Clothing",
        image: "/images/products/men/man-4.jpg",
        price: "$120",
        brand: "Reebok",
        color: "Gray",
        size: "L",
      },
      {
        name: "Jacket",
        category: "Clothing",
        image: "/images/products/men/man-5.jpg",
        price: "$120",
        brand: "Reebok",
        color: "Gray",
        size: "L",
      },
      {
        name: "Jacket",
        category: "Clothing",
        image: "/images/products/men/man-6.jpg",
        price: "$120",
        brand: "Reebok",
        color: "Gray",
        size: "L",
      },
      {
        name: "Jacket",
        category: "Clothing",
        image: "/images/products/men/man-7.jpg",
        price: "$120",
        brand: "Reebok",
        color: "Gray",
        size: "L",
      },
      // Add more men products here
    ],
  };
  