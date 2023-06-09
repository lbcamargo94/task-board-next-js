export interface HomeProps {
  user: {
    email: string;
  };
}

export interface TaskProps {
  id: string;
  created: Date;
  public: boolean;
  tarefa: string;
  user: string;
}
