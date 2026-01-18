import UpdateProductForm from '@/ui/forms/UpdateProduct';
import { getProductById } from '@/services/api';


export default async function EditProduct(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const id = Number(params.id)
  const product = await getProductById(id)

  return (
    <UpdateProductForm product={product} />
  )
}
