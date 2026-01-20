export default function ProdutoCard({ nome, preco, descricao, imagem }) {
  return (
    <div className="card">
      <img 
        src={imagem} 
        alt={nome} 
        onError={e => e.target.src = "https://placehold.co/300x200?text=Sem+Imagem"}
      />
      <div className="card-content">
        <h3>{nome}</h3>
        <p className="preco">R$ {preco.toFixed(2).replace('.', ',')}</p>
        <p className="descricao">{descricao}</p>
      </div>
    </div>
  )
}