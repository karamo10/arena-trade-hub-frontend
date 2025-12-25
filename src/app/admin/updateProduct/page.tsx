import { getProducts } from "@/services/api";
import UpdateProductCard from "@/ui/productCard/updateProductCard";
import ProductSearchInput from "@/ui/inputs/searchInput";

type Props = {
    searchParams?: {
        q?: string;
    };
};

export default async function UpdatePage({searchParams}: Props) {
    const products = await getProducts(searchParams?.q); // pass .q as an argument
    
    return (
        <section className="min-h-screen">
            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between py-2 mx-5">
                <h2 className="text-center font-medium">You can update any product here</h2>
                <ProductSearchInput />
            </div>
            <div className="grid grid-cols-3 gap-2 p-2">
            {products.map((product) => (
                <UpdateProductCard key={product.id} product={product} />
            ))}
            </div>
            
            {products.length === 0 && (
                <div className="text-center">
                    <p>No product found {searchParams?.q ? `for "${searchParams?.q}"` : ''}</p>
                </div>
            )}

        </section>
    )
}