export interface ISearchProvider {
  children: React.ReactNode;
}

export interface ISearchContext {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
