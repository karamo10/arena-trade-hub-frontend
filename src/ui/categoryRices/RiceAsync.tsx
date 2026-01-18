import Wrapper from "./ProductWrapper";
import { getProductsByCategory } from "@/services/api";

export default async function Rices() {
    const rices = await getProductsByCategory("rice");

    return (
        <div>
            <Wrapper rices={rices} />
        </div>
    )
}

