export interface IArticle {
  id: string;
  category: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
}

export type ArticleFormData = Omit<IArticle, "id" | "createdAt">;
