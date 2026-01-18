import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IArticle, ArticleFormData } from "../types/article.types";

interface ArticlesState {
  items: IArticle[];
}

const initialState: ArticlesState = {
  items: [],
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle: {
      reducer: (state, action: PayloadAction<IArticle>) => {
        state.items.push(action.payload);
      },
      prepare: (articleData: ArticleFormData) => ({
        payload: {
          ...articleData,
          id: nanoid(),
          createdAt: new Date().toISOString(),
        },
      }),
    },
  },
});

export const { addArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
