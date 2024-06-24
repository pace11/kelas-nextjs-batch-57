import { useRouter } from "next/router";

export default function Products() {
    const router = useRouter();
    
    return (
        <ul>
            <li onClick={() => router.back()}>Back</li>
            <li>Products {router.query.slug}</li>
        </ul>
    )
}