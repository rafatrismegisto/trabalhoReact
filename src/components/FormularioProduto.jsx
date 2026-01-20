import { useState } from 'react'

export default function FormularioProduto({ onAdicionar }) {
  const [form, setForm] = useState({
    nome: '',
    preco: '',
    descricao: '',
    imagem: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!form.nome || !form.preco || !form.descricao) {
      alert("Preencha nome, preço e descrição!")
      return
    }

    onAdicionar({
      nome: form.nome,
      preco: Number(form.preco),
      descricao: form.descricao,
      imagem: form.imagem || undefined
    })

    setForm({ nome: '', preco: '', descricao: '', imagem: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="form-cadastro">
      <h2>Adicionar Produto</h2>
      
      <input
        type="text"
        name="nome"
        placeholder="Nome do produto"
        value={form.nome}
        onChange={handleChange}
        required
      />
      
      <input
        type="number"
        name="preco"
        placeholder="Preço (R$)"
        step="0.01"
        min="0.01"
        value={form.preco}
        onChange={handleChange}
        required
      />
      
      <textarea
        name="descricao"
        placeholder="Descrição"
        value={form.descricao}
        onChange={handleChange}
        rows={3}
        required
      />
      
      <input
        type="url"
        name="imagem"
        placeholder="URL da imagem (opcional)"
        value={form.imagem}
        onChange={handleChange}
      />
      
      <button type="submit">Cadastrar Produto</button>
    </form>
  )
}