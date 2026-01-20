import { useState, useEffect } from 'react'
import ProdutoCard from '../components/ProdutoCard'
import FormularioProduto from '../components/FormularioProduto'

const produtosIniciais = [
  {
    id: 1,
    nome: "Caneca Programador",
    preco: 39.90,
    descricao: "Caneca com código que compila no micro-ondas",
    imagem: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=400"
  },
  {
    id: 2,
    nome: "Camiseta Front-end",
    preco: 89.90,
    descricao: "Porque o CSS é vida (e sofrimento)",
    imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
  }
]

export default function Home() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)

  // Simula busca na API
  useEffect(() => {
    setTimeout(() => {
      setProdutos(produtosIniciais)
      setCarregando(false)
    }, 1800) // 1.8 segundos de "carregamento"
  }, [])

  const adicionarProduto = (novoProduto) => {
    const produtoComId = {
      ...novoProduto,
      id: Date.now() // id simples (não é o ideal em produção)
    }
    setProdutos(prev => [...prev, produtoComId])
  }

  if (carregando) {
    return <div className="loading">Carregando produtos...</div>
  }

  return (
    <div className="container">
      <FormularioProduto onAdicionar={adicionarProduto} />

      <div className="grid">
        {produtos.map(produto => (
          <ProdutoCard key={produto.id} {...produto} />
        ))}
      </div>

      {produtos.length === 0 && (
        <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
          Nenhum produto cadastrado ainda...
        </p>
      )}
    </div>
  )
}