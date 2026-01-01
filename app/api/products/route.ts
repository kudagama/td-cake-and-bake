import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';

export async function GET() {
    await dbConnect();

    try {
        let products = await Product.find({});

        // SEED DATA IF EMPTY (For demo purposes)
        if (products.length === 0) {
            const sampleProducts = [
                {
                    title: "Elegant Rose Wedding Cake",
                    description: "Three-tier vanilla sponge with buttercream roses.",
                    price: 25000,
                    category: "Wedding Cake Structures",
                    imageUrl: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop",
                    isAvailable: true
                },
                {
                    title: "Classic Chocolate Drip",
                    description: "Rich chocolate fudge cake with ganache drip.",
                    price: 4500,
                    category: "Birthday Cakes",
                    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
                    isAvailable: true
                },
                {
                    title: "Red Velvet Cupcakes",
                    description: "Moist red velvet with cream cheese frosting.",
                    price: 250,
                    category: "Cup Cakes",
                    imageUrl: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=800&auto=format&fit=crop",
                    isAvailable: true
                },
                {
                    title: "Golden Anniversary Special",
                    description: "Gold leaf accented fruit cake.",
                    price: 12000,
                    category: "Anniversary Cakes",
                    imageUrl: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=800&auto=format&fit=crop",
                    isAvailable: true
                },
                {
                    title: "Strawberry Jar Cake",
                    description: "Layers of sponge, cream and fresh strawberries in a jar.",
                    price: 800,
                    category: "Jar Cakes",
                    imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop",
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
