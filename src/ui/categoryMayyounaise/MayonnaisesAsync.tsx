import Wrapper from "./ProductWrapper";
import { getProductsByCategory } from "@/services/api";

export default async function Mayonnaises() {
    const mayonnaises = await getProductsByCategory("mayonnaises");

    return (
        <div>
            <Wrapper mayonnaises={mayonnaises} />
        </div>
    )
}
