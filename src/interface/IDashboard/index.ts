export interface IHomeProps {
  user: {
    email: string;
  };
}

export interface ITaskProps {
  id: string;
  created: Date;
  public: boolean;
  tarefa: string;
  user: string;
}
