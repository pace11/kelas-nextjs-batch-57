import Link from "next/link"

export default function Products() {
    return (
        <ul>
            <li><Link href="/products/1" shallow={false}>Products 1</Link></li>
            <li><Link href="/products/2">Products 2</Link></li>
            <li><Link href="/products/3">Products 3</Link></li>
            <li><Link href="/products/4">Products 4</Link></li>
        </ul>
    )
}