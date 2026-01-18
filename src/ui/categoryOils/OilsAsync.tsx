import Wrapper from "./ProductWrapper";
import { getProductsByCategory } from "@/services/api";

export default async function Oils() {
    const oils = await getProductsByCategory("oil");
    // console.log(oils);

    return (
        <div>
            <Wrapper oils={oils} />
        </div>
    )
}
