import UpdateProductForm from '@/ui/forms/updateProduct';
import { getProductById } from '@/services/api';


export default async function EditProduct({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const product = await getProductById(id)

  return (
    <UpdateProductForm product={product} />
  )
}
