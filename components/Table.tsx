import { Product } from '@stripe/firestore-stripe-payments'

interface Props {
  products: Product[]
}

function Table({ products }: Props) {
  return (
    <table>
      <tbody>
        <tr>
          <td>Monthly Price</td>
          {products.map((product: Product) => (
            <td key={product.id}>{product.prices[0].unit_amount!} VND</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table
