import { useState, useEffect } from "react";
import ReactPullToRefresh from "react-pull-to-refresh";

type BoardProps<T> = {
  itemName: string;
  fetchData: () => Promise<T[]>;
  renderItem: (item: T, index: number) => React.ReactNode;
  emptyMessage?: string;
};

export function Board<T>({ itemName, fetchData, renderItem, emptyMessage }: BoardProps<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchData();
      setItems(data);
    } catch (err) {
      setError(`Error al cargar ${itemName.toLowerCase()}. Intenta nuevamente.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ReactPullToRefresh onRefresh={loadData}>
      <div>
        {/* <h2>{title}</h2> */}

        {loading && <p>Cargando {itemName.toLowerCase()}...</p>}

        {error && <p className="text-red-500 font-bold">{error}</p>}

        {!loading && !error && items.length === 0 && (
          <p>{emptyMessage || `No hay ${itemName.toLowerCase()} disponibles.`}</p>
        )}

        {!loading && !error && items.map((item, index) => renderItem(item, index))}
      </div>
    </ReactPullToRefresh>
  );
}
