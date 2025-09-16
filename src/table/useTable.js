import { useCallback, useMemo, useRef, useState } from "react";

/**
 * useTable - helper hook to coordinate controlled Table props and async flows
 *
 * Options:
 * - initialPage?: number (default 1)
 * - initialSize?: number (default 10)
 * - initialOrderBy?: string
 * - initialOrder?: 'asc' | 'desc' (default 'asc')
 * - initialCount?: number (default 0)
 * - autoLoading?: boolean (default true) — auto toggle loading if callbacks return a Promise
 * - onPageChange?: (page: number, size: number, sort: { orderBy?: string, order?: 'asc'|'desc' }) => (void|Promise)
 * - onCountChange?: (count: number) => void
 * - onSortChange?: (orderBy: string, order: 'asc' | 'desc') => (void|Promise)
 */
export function useTable(options = {}) {
  const {
    initialPage = 1,
    initialSize = 10,
    initialOrderBy,
    initialOrder = "asc",
    initialCount = 0,
    autoLoading = true,
    onPageChange,
    onCountChange,
    onSortChange,
  } = options;

  const [page, setPageState] = useState(initialPage);
  const [size, setSizeState] = useState(initialSize);
  const [orderBy, setOrderByState] = useState(initialOrderBy);
  const [order, setOrderState] = useState(initialOrder);
  const [count, setCountState] = useState(initialCount);
  const [loading, setLoading] = useState(false);

  const latest = useRef({ onPageChange, onCountChange, onSortChange, autoLoading });
  latest.current = { onPageChange, onCountChange, onSortChange, autoLoading };

  const wrapMaybeAsync = useCallback(async (fn) => {
    if (!fn) return;
    const { autoLoading } = latest.current;
    try {
      const result = fn();
      if (result && typeof result.then === "function") {
        if (autoLoading) setLoading(true);
        await result.finally(() => {
          if (autoLoading) setLoading(false);
        });
      }
    } catch (e) {
      if (autoLoading) setLoading(false);
      throw e;
    }
  }, []);

  const setPage = useCallback(
    (nextPage) => {
      setPageState(nextPage);
      wrapMaybeAsync(() => latest.current.onPageChange?.(nextPage, size, { orderBy, order }));
    },
    [size, orderBy, order, wrapMaybeAsync]
  );

  const setSize = useCallback(
    (nextSize) => {
      setSizeState(nextSize);
      // Common UX: reset to first page on size change
      setPageState(1);
      wrapMaybeAsync(() => latest.current.onPageChange?.(1, nextSize, { orderBy, order }));
    },
    [orderBy, order, wrapMaybeAsync]
  );

  const setCount = useCallback(
    (nextCount) => {
      setCountState(nextCount);
      latest.current.onCountChange?.(nextCount);
    },
    []
  );

  const setOrder = useCallback(
    (by, dir) => {
      setOrderByState(by);
      setOrderState(dir);
      wrapMaybeAsync(() => latest.current.onSortChange?.(by, dir));
    },
    [wrapMaybeAsync]
  );

  const tableProps = useMemo(
    () => ({
      // controlled pagination
      page,
      size,
      totalRows: count,
      onSetPage: setPage,
      onSetSize: setSize,
      // controlled ordering
      orderBy,
      order,
      onSetOrder: setOrder,
      // loading state
      loading,
      showPagination: true,
    }),
    [page, size, count, orderBy, order, setPage, setSize, setOrder, loading]
  );

  return {
    tableProps,
    page,
    size,
    count,
    orderBy,
    order,
    loading,
    setLoading,
    setPage,
    setSize,
    setCount,
    setOrder,
  };
}

