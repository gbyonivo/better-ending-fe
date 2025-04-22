import { DocumentNode, useQuery } from "@apollo/client";

interface Props<T> {
  graphqlQuery: DocumentNode;
  variables: Record<string, number | string>;
  dataKey: string;
  render: (data: T) => React.ReactNode;
}

export function DataComponent<T>({
  graphqlQuery,
  variables,
  dataKey,
  render,
}: Props<T>) {
  const { data, loading, error } = useQuery(graphqlQuery, {
    variables,
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{render(data[dataKey])}</div>;
}
