import Wrapper from "./productWrapper";
import { getProductsByCategory } from "@/services/api";

export default async function Rices() {
    const rices = await getProductsByCategory("rice");

    return (
        <div>
            <Wrapper rices={rices} />
        </div>
    )
}

