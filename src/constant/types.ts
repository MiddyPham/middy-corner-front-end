export type TypeUserResponse = {
  access_token: string;
  refresh_token: string;
  user: TypeUser;
};


export type TypeUser = {
  id: string;
  email: string;
  role: string;
  name: string;
  avatar: string;
};

export type TypeCategory = {
  id?: string;
  name: string;
  description: string;
  status: string;
};