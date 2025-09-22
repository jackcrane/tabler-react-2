// TableV2.jsx
// TanStack Table v8 styled like the Original component's Tabler look.
// Adds `dense` mode for a compact layout.
// Controlled (server-side) pagination & sorting. ES modules, named exports, arrow functions only.

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

/** Small utilities */

export const SortIcon = ({ state }) => {
  if (state === "asc") return <span aria-label="sorted ascending">▲</span>;
  if (state === "desc") return <span aria-label="sorted descending">▼</span>;
  return (
    <span className="text-muted" aria-hidden>
      ↕
    </span>
  );
};

export const RangeText = ({ page, size, total, dense }) => {
  const start = total === 0 ? 0 : (page - 1) * size + 1;
  const end = Math.min(page * size, total);
  return (
    <span className={dense ? "ms-2 small text-muted" : "ms-3 text-muted"}>
      {start.toLocaleString()}–{end.toLocaleString()} of{" "}
      {total.toLocaleString()}
    </span>
  );
};

export const PageSizeSelect = ({
  value,
  onChange,
  options = [10, 25, 50, 100],
  dense,
}) => (
  <select
    className={"form-select form-select-sm"}
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
    aria-label="Rows per page"
    style={{ width: dense ? 90 : 110 }}
  >
    {options.map((n) => (
      <option key={n} value={n}>
        {n} / page
      </option>
    ))}
  </select>
);

export const Pager = ({
  page,
  size,
  total,
  onPageChange,
  disabled,
  className = "",
  dense,
}) => {
  const totalPages = Math.max(1, Math.ceil(total / Math.max(1, size)));
  const canPrev = page > 1 && !disabled;
  const canNext = page < totalPages && !disabled;

  const go = (p) => {
    const clamped = Math.min(Math.max(1, p), totalPages);
    if (clamped !== page) onPageChange(clamped);
  };

  return (
    <div
      className={`d-inline-flex align-items-center ${
        dense ? "gap-2" : ""
      } ${className}`}
    >
      <button
        className={`btn ${dense ? "btn-sm" : "btn-sm"} ${
          dense ? "px-2 py-1" : ""
        }`}
        onClick={() => go(Math.max(1, page - 1))}
        disabled={!canPrev}
      >
        Previous
      </button>
      <button
        className={`btn ${dense ? "btn-sm ms-1" : "btn-sm ms-2"} ${
          dense ? "px-2 py-1" : ""
        }`}
        onClick={() => go(Math.min(totalPages, page + 1))}
        disabled={!canNext}
      >
        Next
      </button>
      <span className={dense ? "ms-2 small text-muted" : "ms-3 text-muted"}>
        Page {page} of {totalPages}
      </span>
    </div>
  );
};

/** Helper: render a cell with a null/empty fallback */
const isEmptyRender = (node) => {
  if (node === null || node === undefined) return true;
  if (typeof node === "string" && node.trim() === "") return true;
  return false;
};

const renderCellWithFallback = (cell, fallbackText) => {
  const rendered = flexRender(cell.column.columnDef.cell, cell.getContext());
  const finalNode = isEmptyRender(rendered) ? cell.getValue?.() : rendered;

  if (
    finalNode === null ||
    finalNode === undefined ||
    (typeof finalNode === "string" && finalNode.trim() === "")
  ) {
    return <span className="text-muted">{fallbackText}</span>;
  }

  return finalNode;
};

/** Skeletons */

const SkeletonCSS = () => (
  <style>{`
    /* TableV2 skeletons */
    .tblv2-skel {
      display: inline-block;
      vertical-align: middle;
      border-radius: 9999px;
      background: linear-gradient(90deg, #e9ecef 25%, #f1f3f5 37%, #e9ecef 63%);
      background-size: 400% 100%;
      animation: tblv2-shimmer 1.2s ease-in-out infinite;
    }
    @keyframes tblv2-shimmer {
      0% { background-position: 100% 0; }
      100% { background-position: 0 0; }
    }
  `}</style>
);

const skeletonWidthAt = (rowIdx, colIdx) => {
  // Cycle through some natural-looking widths
  const widths = [48, 72, 96, 120, 64, 88, 140];
  return widths[(rowIdx + colIdx) % widths.length];
};

/** Main table */

export const TableV2 = ({
  // data/columns
  columns,
  data,
  totalRows,
  // controlled pagination (1-based)
  page,
  size,
  onPageChange,
  onSizeChange,
  // controlled sorting [{id, desc}]
  sorting,
  onSortingChange,
  // ids & selection (optional)
  getRowId,
  rowSelection,
  onRowSelectionChange,
  // visuals (matching Original component’s classes/layout)
  nowrap = false,
  stickyHeader = false,
  className = "",
  tableClassName = "",
  paginationClassName = "",
  parentClassName = "",
  dense = false, // <<< supports compact rows
  // misc
  emptyState = "No data",
  loading = false, // <<< shows a light grey skeleton pill in each cell
  showPagination = true,
  pageSizeOptions = [10, 25, 50, 100],
  fallbackText = "—",
}) => {
  const table = useReactTable({
    data,
    columns,
    state: { sorting, ...(rowSelection !== undefined ? { rowSelection } : {}) },
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    enableSortingRemoval: false,

    /** Selection essentials */
    enableRowSelection: true,
    onRowSelectionChange,
    getRowId, // IMPORTANT: provide a stable id (e.g., row => row.id) when paginating
    autoResetRowSelection: false,

    onSortingChange,
    renderFallbackValue: <span className="text-muted">{fallbackText}</span>,
  });

  /** Make memoization responsive to internal table state, not just the instance ref */
  const { rowSelection: rs, sorting: currentSorting } = table.getState();

  const headerCell = ({ header }) => {
    const canSort = header.column.getCanSort();
    const sortState = header.column.getIsSorted();
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

    const thClass = [
      header.column.columnDef.className || "",
      canSort ? "sortable" : "",
      dense ? "py-1" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <th
        key={header.id}
        className={thClass}
        onClick={canSort && !loading ? handleSort : undefined}
        style={{ cursor: canSort && !loading ? "pointer" : "default" }}
        aria-sort={
          sortState === "asc"
            ? "ascending"
            : sortState === "desc"
            ? "descending"
            : "none"
        }
      >
        <span style={{ marginRight: 8 }}>
          {flexRender(header.column.columnDef.header, header.getContext())}
        </span>
        {canSort && <SortIcon state={sortState || false} />}
      </th>
    );
  };

  const total = totalRows ?? 0;
  const leafCols = table.getAllLeafColumns().length;

  const content = useMemo(() => {
    if (loading) {
      const rowCount = Math.max(1, size || data.length || 10);
      const rowClass = [dense ? "align-middle" : ""].filter(Boolean).join(" ");
      const cellClass = [dense ? "py-1" : ""].filter(Boolean).join(" ");
      const pillHeight = dense ? 16 : 18;

      return Array.from({ length: rowCount }).map((_, r) => (
        <tr key={`skel-${r}`} className={rowClass} aria-hidden="true">
          {Array.from({ length: leafCols }).map((__, c) => (
            <td key={`skel-${r}-${c}`} className={cellClass}>
              <span
                className="tblv2-skel"
                style={{
                  height: pillHeight,
                  width: skeletonWidthAt(r, c),
                }}
              />
            </td>
          ))}
        </tr>
      ));
    }

    if (!loading && data.length === 0) {
      return (
        <tr>
          <td
            colSpan={leafCols}
            className={`text-center ${
              dense ? "py-3 small" : "py-3"
            } text-muted`}
          >
            {typeof emptyState === "function" ? emptyState() : emptyState}
          </td>
        </tr>
      );
    }

    return table.getRowModel().rows.map((row) => (
      <tr
        key={row.id}
        className={[
          row.getIsSelected() ? "table-active" : "",
          dense ? "align-middle" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {row.getVisibleCells().map((cell) => (
          <td
            key={cell.id}
            className={[
              cell.column.columnDef.className || "",
              dense ? "py-1" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {renderCellWithFallback(cell, fallbackText)}
          </td>
        ))}
      </tr>
    ));
    // Depend on internal table state so selection/sorting changes trigger re-render
  }, [
    loading,
    size,
    data,
    dense,
    table,
    rs,
    currentSorting,
    emptyState,
    leafCols,
    fallbackText,
  ]);

  return (
    <div className={parentClassName}>
      <SkeletonCSS />

      <div
        className={`table-responsive ${
          nowrap ? "table-nowrap" : ""
        } ${className}`}
      >
        <table
          className={[
            "table table-vcenter",
            stickyHeader ? "sticky-top" : "",
            dense ? "table-sm" : "",
            tableClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((h) => headerCell({ header: h }))}
              </tr>
            ))}
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>

      {showPagination && (
        <div
          className={`d-flex justify-content-between align-items-center mx-2 ${
            dense ? "my-1" : "my-2"
          } ${paginationClassName}`}
        >
          <div className={`d-flex align-items-center ${dense ? "gap-2" : ""}`}>
            <Pager
              page={page}
              size={size}
              total={total}
              onPageChange={onPageChange}
              disabled={loading}
              dense={dense}
            />
            <RangeText page={page} size={size} total={total} dense={dense} />
          </div>
          <PageSizeSelect
            value={size}
            onChange={(n) => {
              onSizeChange?.(n);
            }}
            options={pageSizeOptions}
            dense={dense}
          />
        </div>
      )}
    </div>
  );
};

/** PropTypes */

SortIcon.propTypes = {
  state: PropTypes.oneOf(["asc", "desc", false]),
};

RangeText.propTypes = {
  page: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  dense: PropTypes.bool,
};

PageSizeSelect.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.number),
  dense: PropTypes.bool,
};

Pager.propTypes = {
  page: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  dense: PropTypes.bool,
};

TableV2.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  totalRows: PropTypes.number.isRequired,

  page: PropTypes.number.isRequired,
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

  nowrap: PropTypes.bool,
  stickyHeader: PropTypes.bool,
  className: PropTypes.string,
  tableClassName: PropTypes.string,
  paginationClassName: PropTypes.string,
  parentClassName: PropTypes.string,

  emptyState: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  loading: PropTypes.bool, // now shows skeleton pills per cell
  showPagination: PropTypes.bool,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),

  dense: PropTypes.bool,
};

/** Usage (server-side)
 *
 * <TableV2
 *   dense // compact mode
 *   columns={columns}
 *   data={data}
 *   totalRows={total}
 *   page={page}
 *   size={size}
 *   onPageChange={setPage}
 *   onSizeChange={(n)=>{ setPage(1); setSize(n); }}
 *   sorting={sorting}
 *   onSortingChange={(next)=>{ setPage(1); setSorting(next); }}
 *   rowSelection={rowSelection} // { [rowId]: true }
 *   onRowSelectionChange={setRowSelection}
 *   getRowId={(row) => row.id} // <<< stable id across pages
 *   loading={loading} // <<< skeletons instead of spinner row
 *   nowrap
 *   stickyHeader
 * />
 */
