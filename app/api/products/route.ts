import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';

export async function GET() {
    await dbConnect();

    try {
        let products = await Product.find({});

        // SEED DATA IF EMPTY or MISSING NEW ITEMS (For demo purposes)
        // If strict match 5 original items is tricky, assume < 10 means we have old set
        if (products.length < 10) {
            // Clear existing to avoid duplicates during this dev phase
            await Product.deleteMany({});

            const sampleProducts = [
                {
                    title: "Hello Kitty Theme Cake",
                    description: "Adorable Hello Kitty themed cake for Damsadhi.",
                    price: 6500,
                    category: "Birthday Cakes",
                    imageUrl: "/gallery/cake11.jpg",
                    isAvailable: true
                },
                {
                    title: "Mickey Mouse 1st Birthday",
                    description: "Blue and white Mickey Mouse cake for Minosh.",
                    price: 7000,
                    category: "Birthday Cakes",
                    imageUrl: "/gallery/cake13.jpg",
                    isAvailable: true
                },
                {
                    title: "Blue Green Floral Birthday",
                    description: "Elegant blue and green floral design for Manike.",
                    price: 5500,
                    category: "Birthday Cakes",
                    imageUrl: "/gallery/cake12.jpg",
                    isAvailable: true
                },
                {
                    title: "Red Floral Small Cake",
                    description: "Cute small cake with bright red flowers.",
                    price: 3500,
                    category: "Birthday Cakes",
                    imageUrl: "/gallery/cake10.jpg",
                    isAvailable: true
                },
                {
                    title: "Pink Flowers - Akka",
                    description: "Beautiful pink floral cake with 'Akka' topper.",
                    price: 4800,
                    category: "Birthday Cakes",
                    imageUrl: "/gallery/cake6.jpg",
                    isAvailable: true
                },
                {
                    title: "Mermaid Theme - Thanuli",
                    description: "Magical mermaid scale cake for Thanuli.",
                    price: 7500,
                    category: "Birthday Cakes",
                    imageUrl: "/gallery/cake7.jpg",
                    isAvailable: true
                },
                {
                    title: "Rose Anniversary - Methmal",
                    description: "Romantic cake with red roses and gold accents.",
                    price: 6000,
                    category: "Anniversary Cakes",
                    imageUrl: "/gallery/cake8.jpg",
                    isAvailable: true
                },
                {
                    title: "Classic Ribbon - Amma",
                    description: "Elegant white cake with red ribbon.",
                    price: 4500,
                    category: "Birthday Cakes",
                    imageUrl: "/gallery/cake9.jpg",
                    isAvailable: true
                },
                {
                    title: "Chocolate Drip Birthday",
                    description: "Rich chocolate cake with macarons and drip.",
                    price: 5500,
                    category: "Birthday Cakes",
                    imageUrl: "/gallery/cake5.jpg",
                    isAvailable: true
                },
                {
                    title: "Golden Anniversary Special",
                    description: "Gold leaf accented fruit cake.",
                    price: 12000,
                    category: "Anniversary Cakes",
                    imageUrl: "/gallery/cake4.jpg",
                    isAvailable: true
                },
                {
                    title: "Elegant Rose Wedding Cake",
                    description: "Three-tier vanilla sponge with buttercream roses.",
                    price: 25000,
                    category: "Wedding Cake Structures",
                    imageUrl: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800",
                    isAvailable: true
                },
                {
                    title: "Strawberry Jar Cake",
                    description: "Layers of sponge, cream and fresh strawberries.",
                    price: 800,
                    category: "Jar Cakes",
                    imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800",
                    isAvailable: true
                },
                {
                    title: "Red Velvet Cupcakes",
                    description: "Moist red velvet with cream cheese frosting.",
                    price: 250,
                    category: "Cup Cakes",
                    imageUrl: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=800",
                    isAvailable: true
                },
                {
                    title: "Birthday Love Cake",
                    description: "White cake with red hearts and love topper.",
                    price: 4200,
                    category: "Birthday Cakes",
                    imageUrl: "/gallery/cake1.jpg",
                    isAvailable: true
                },
                {
                    title: "Blue Floral Birthday",
                    description: "Square cake with blue and white frosting.",
                    price: 5000,
                    category: "Birthday Cakes",
                    imageUrl: "/gallery/cake2.jpg",
                    isAvailable: true
                },
                {
                    title: "Strawberry Slice",
                    description: "Fresh strawberry cake slice.",
                    price: 400,
                    category: "All other cakes",
                    imageUrl: "/gallery/cake3.jpg",
                    isAvailable: true
                }
            ];

            await Product.insertMany(sampleProducts);
            products = await Product.find({});
        }

        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    await dbConnect();
    try {
        const body = await req.json();
        const product = await Product.create(body);
        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}
