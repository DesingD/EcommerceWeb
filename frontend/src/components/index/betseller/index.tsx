import React from 'react';
import Card from './card';


const Betseller: React.FC = () => {
    // Example data for the bestseller section
    // This can be replaced with actual data fetched from an API or database
    const bestsellers = [
        {
            title: "Roadster Shirt",
            description: "Printed Casual Shirt",
            imageUrl: "/imgPruebaProductos/camisa.png",
            discount: true,
            discountValue: "$20.00",
            value: "$50.00"
        },
        {
            title: "Roadster Pants",
            description: "Comfortable Casual Pants",
            imageUrl: "/imgPruebaProductos/bolso.png",
            discount: false,
            discountValue: "",
            value: "$40.00"
        },
        {
            title: "US Polo Assn.",
            description: "Polo colar t-shirt",
            imageUrl: "/imgPruebaProductos/polo.png",
            discount: true,
            discountValue: "$40.00",
            value: "$50.00"
        },
        {
            title: "Adidas",
            description: "Men's Sports Shoes",
            imageUrl: "/imgPruebaProductos/zapatillas.png",
            discount: true,
            discountValue: "$60.00",
            value: "$75.00"
        },
        {
            title: "Trenyol",
            description: "Floral Embroidered Dress",
            imageUrl: "/imgPruebaProductos/vestido.png",
            discount: true,
            discountValue: "$35.00",
            value: "$45.00"
        },
        {
            title: "YK Disney",
            description: "Girls' Printed Dress",
            imageUrl: "/imgPruebaProductos/vestidoCorto.png",
            discount: false,
            discountValue: "$80.00",
            value: "$100.00"
        },
        {
            title: "Louis philippe Shirt",
            description: "Polo colar t-shirt",
            imageUrl: "/imgPruebaProductos/larga.png",
            discount: true,
            discountValue: "$50.00",
            value: "$55.00"
        },
        {
            title: "Sila",
            description: "Women Sandals",
            imageUrl: "/imgPruebaProductos/womenSho.png",
            discount: true,
            discountValue: "$80.00",
            value: "$100.00"
        }
        // Add more products as needed
    ];
    return (
        <div className='my-20'>
            <h3 className='text-center text-4xl font-normal'>Our Bestseller</h3>
            <div className="grid grid-cols-4 gap-4 mt-8 px-40">
                {bestsellers.map((product, index) => (
                    <Card
                        key={index}
                        title={product.title}
                        description={product.description}
                        imageUrl={product.imageUrl}
                        discount={product.discount}
                        discountValue={product.discountValue}
                        value={product.value}
                    />
                ))}            
            </div>

        </div>
    );
};

export default Betseller;