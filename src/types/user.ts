export interface UserType {
  name: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface UserDataType extends UserType {
  slug: string
}
