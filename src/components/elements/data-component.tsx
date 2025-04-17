import { DocumentNode, useQuery } from "@apollo/client";

interface Props<T> {
  graphqlQuery: DocumentNode;
  variables: Record<string, number | string>;
  Component: React.ComponentType<{ data: T }>;
  dataKey: string;
}

export function DataComponent<T>({
  graphqlQuery,
  variables,
  Component,
  dataKey,
}: Props<T>) {
  const { data, loading, error } = useQuery(graphqlQuery, {
    variables,
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <Component data={data[dataKey]} />
    </div>
  );
}
