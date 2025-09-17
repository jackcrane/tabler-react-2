// TableV2.jsx
// TanStack Table v8 styled with Tabler CSS classes.
// Controlled (server-side) pagination & sorting. Ready to paste.
// ES modules, named exports, arrow functions only.

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

/** Small utility components (pure, named, arrow) */

const SortIcon = ({ state }) => {
  // state: 'asc' | 'desc' | false
  if (state === "asc") return <span aria-label="sorted ascending">▲</span>;
  if (state === "desc") return <span aria-label="sorted descending">▼</span>;
  return (
    <span className="text-muted" aria-hidden>
      ↕
    </span>
  );
};

const RangeText = ({ page, size, total }) => {
  const start = total === 0 ? 0 : (page - 1) * size + 1;
  const end = Math.min(page * size, total);
  return (
    <span className="text-muted">
      {start.toLocaleString()}–{end.toLocaleString()} of{" "}
      {total.toLocaleString()}
    </span>
  );
};

const PageSizeSelect = ({ value, onChange, options = [10, 25, 50, 100] }) => (
  <select
    className="form-select form-select-sm"
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
    aria-label="Rows per page"
    style={{ width: 90 }}
  >
    {options.map((n) => (
      <option key={n} value={n}>
        {n} / page
      </option>
    ))}
  </select>
);

const Pager = ({ page, size, total, onPageChange, disabled }) => {
  const totalPages = Math.max(1, Math.ceil(total / Math.max(1, size)));
  const canPrev = page > 1 && !disabled;
  const canNext = page < totalPages && !disabled;

  const go = (p) => {
    const clamped = Math.min(Math.max(1, p), totalPages);
    if (clamped !== page) onPageChange(clamped);
  };

  return (
    <ul className="pagination pagination-sm mb-0">
      <li className={`page-item ${!canPrev ? "disabled" : ""}`}>
        <button
          className="page-link"
          onClick={() => go(1)}
          disabled={!canPrev}
          aria-label="First"
        >
          «
        </button>
      </li>
      <li className={`page-item ${!canPrev ? "disabled" : ""}`}>
        <button
          className="page-link"
          onClick={() => go(page - 1)}
          disabled={!canPrev}
          aria-label="Previous"
        >
          ‹
        </button>
      </li>
      <li className="page-item active">
        <span className="page-link">
          {page} / {totalPages}
        </span>
      </li>
      <li className={`page-item ${!canNext ? "disabled" : ""}`}>
        <button
          className="page-link"
          onClick={() => go(page + 1)}
          disabled={!canNext}
          aria-label="Next"
        >
          ›
        </button>
      </li>
      <li className={`page-item ${!canNext ? "disabled" : ""}`}>
        <button
          className="page-link"
          onClick={() => go(totalPages)}
          disabled={!canNext}
          aria-label="Last"
        >
          »
        </button>
      </li>
    </ul>
  );
};

/** Main table */

export const TableV2 = ({
  columns,
  data,
  totalRows,
  page,
  size,
  onPageChange,
  onSizeChange,
  sorting,
  onSortingChange,
  getRowId,
  rowSelection,
  onRowSelectionChange,
  className = "",
  tableClassName = "table table-striped table-hover table-sm mb-0",
  theadClassName = "",
  tbodyClassName = "",
  emptyState = "No data",
  loading = false,
  headerSticky = false,
  renderToolbarLeft,
  renderToolbarRight,
}) => {
  // TanStack expects 0-based pageIndex internally, but we control paging outside,
  // so we leave TanStack in "manual" mode and pass already-sliced data.
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      // Ensure TanStack always receives an object for selection state
      rowSelection: rowSelection ?? {},
    },
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true, // server-side sorting
    enableSortingRemoval: false,
    onSortingChange,
    getRowId,
    onRowSelectionChange,
  });

  const headerStyle = headerSticky
    ? {
        position: "sticky",
        top: 0,
        zIndex: 1,
        background: "var(--tblr-bg-surface, #fff)",
      }
    : undefined;

  const Th = ({ header }) => {
    const canSort = header.column.getCanSort();
    const sortState = header.column.getIsSorted(); // 'asc' | 'desc' | false
    const handleSort = () => {
      if (!canSort) return;
      const id = header.column.id;
      const next =
        sortState === "asc"
          ? [{ id, desc: true }]
          : sortState === "desc"
          ? []
          : [{ id, desc: false }];
      onSortingChange(next);
    };
    const buttonClass = canSort
      ? "btn btn-link p-0 text-reset text-decoration-none d-inline-flex align-items-center gap-1"
      : "";
    return (
      <th
        scope="col"
        style={headerStyle}
        className={canSort ? "cursor-pointer" : undefined}
        aria-sort={
          sortState === "asc"
            ? "ascending"
            : sortState === "desc"
            ? "descending"
            : "none"
        }
      >
        {canSort ? (
          <button type="button" className={buttonClass} onClick={handleSort}>
            {flexRender(header.column.columnDef.header, header.getContext())}
            <SortIcon state={sortState || false} />
          </button>
        ) : (
          flexRender(header.column.columnDef.header, header.getContext())
        )}
      </th>
    );
  };

  const content = useMemo(() => {
    if (!loading && data.length === 0) {
      return (
        <tr>
          <td
            colSpan={table.getAllLeafColumns().length}
            className="text-center text-muted py-5"
          >
            {typeof emptyState === "function" ? emptyState() : emptyState}
          </td>
        </tr>
      );
    }
    return table.getRowModel().rows.map((row) => (
      <tr
        key={row.id}
        className={row.getIsSelected() ? "table-active" : undefined}
      >
        {row.getVisibleCells().map((cell) => (
          <td key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ));
  }, [data, loading, emptyState, table]);

  return (
    <div className={`card ${className}`}>
      {(renderToolbarLeft || renderToolbarRight) && (
        <div className="card-header d-flex align-items-center justify-content-between gap-2">
          <div className="d-flex align-items-center gap-2">
            {renderToolbarLeft?.({ page, size, totalRows, sorting })}
          </div>
          <div className="d-flex align-items-center gap-2">
            {renderToolbarRight?.({ page, size, totalRows, sorting })}
          </div>
        </div>
      )}

      <div className="table-responsive">
        <table className={tableClassName}>
          <thead className={theadClassName}>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((header) => (
                  <Th key={header.id} header={header} />
                ))}
              </tr>
            ))}
          </thead>
          <tbody className={tbodyClassName}>{content}</tbody>
        </table>
      </div>

      <div className="card-footer d-flex align-items-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <PageSizeSelect value={size} onChange={onSizeChange} />
          <RangeText page={page} size={size} total={totalRows} />
        </div>
        <div className="d-flex align-items-center gap-3">
          {loading && (
            <div className="d-flex align-items-center gap-2">
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden
              />
              <span className="text-muted">Loading…</span>
            </div>
          )}
          <Pager
            page={page}
            size={size}
            total={totalRows}
            onPageChange={onPageChange}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
};

/** PropTypes (explicit, concise) */

SortIcon.propTypes = {
  state: PropTypes.oneOf(["asc", "desc", false]),
};

RangeText.propTypes = {
  page: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

PageSizeSelect.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.number),
};

Pager.propTypes = {
  page: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

TableV2.propTypes = {
  columns: PropTypes.array.isRequired, // TanStack column defs
  data: PropTypes.array.isRequired, // current page rows
  totalRows: PropTypes.number.isRequired,

  page: PropTypes.number.isRequired, // 1-based
  size: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onSizeChange: PropTypes.func.isRequired,

  sorting: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired, desc: PropTypes.bool })
  ).isRequired,
  onSortingChange: PropTypes.func.isRequired,

  getRowId: PropTypes.func,
  rowSelection: PropTypes.object,
  onRowSelectionChange: PropTypes.func,

  className: PropTypes.string,
  tableClassName: PropTypes.string,
  theadClassName: PropTypes.string,
  tbodyClassName: PropTypes.string,

  emptyState: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  loading: PropTypes.bool,
  headerSticky: PropTypes.bool,

  renderToolbarLeft: PropTypes.func,
  renderToolbarRight: PropTypes.func,
};

/** ----
 * Minimal usage reference (server-side)
 *
 * const [page, setPage] = useState(1);
 * const [size, setSize] = useState(25);
 * const [sorting, setSorting] = useState([]); // [{ id:'name', desc:false }]
 * const { data, total, loading } = useMyQuery({ page, size, sorting });
 *
 * <TableV2
 *   columns={columns}
 *   data={data}
 *   totalRows={total}
 *   page={page}
 *   size={size}
 *   onPageChange={setPage}
 *   onSizeChange={(n)=>{ setPage(1); setSize(n); }}
 *   sorting={sorting}
 *   onSortingChange={(next)=>{ setPage(1); setSorting(next); }}
 *   loading={loading}
 * />
 * ----
 */
