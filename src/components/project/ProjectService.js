import axios from 'axios';

const API_URL = 'localhost:8080/projects'; // Substitua pela URL correta do seu backend

const ProjectService = {
  createProject: async (projectDTO) => {
    try {
      const response = await axios.post(API_URL, projectDTO);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ProjectService;
