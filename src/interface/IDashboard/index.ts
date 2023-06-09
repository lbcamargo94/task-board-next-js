export interface HomeProps {
  user: {
    email: string;
  };
}

export interface TaskProps {
  id: string;
  createdAt: Date;
  public: boolean;
  tarefa: string;
  user: string;
}
