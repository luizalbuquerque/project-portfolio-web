import React, { useState } from 'react';
import axios from 'axios';
import ProjectDTO from './ProjectDTO'; // Importe a classe ProjectDTO

const ProjectForm = () => {
  const [project, setProject] = useState(new ProjectDTO('', '', ''));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/projects', project); // Substitua a URL pelo endpoint correto do seu backend
      console.log('Novo projeto criado:', response.data);
      // Faça qualquer ação necessária após a criação bem-sucedida
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
      // Lide com erros de solicitação aqui
    }
  };

  return (
    <div>
      <h1>Criar Novo Projeto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={project.name}
            onChange={(e) => setProject(new ProjectDTO(e.target.value, project.dataInicio, project.descricao))}
          />
        </div>
        <div>
          <label htmlFor="dataInicio">Data de Início:</label>
          <input
            type="date"
            id="dataInicio"
            value={project.dataInicio}
            onChange={(e) => setProject(new ProjectDTO(project.name, e.target.value, project.descricao))}
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            value={project.descricao}
            onChange={(e) => setProject(new ProjectDTO(project.name, project.dataInicio, e.target.value))}
          />
        </div>
        <button type="submit">Criar Projeto</button>
      </form>
    </div>
  );
};

export default ProjectForm;
