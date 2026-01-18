import Wrapper from "./ProductWrapper";
import { getProductsByCategory } from "@/services/api";

export default async function GeneralProducts() {
    const generalProduct = await getProductsByCategory("general");

    return (
        <div>
            <Wrapper generals={generalProduct} />
        </div>
    )
}
