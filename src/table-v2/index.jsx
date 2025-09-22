// TableV2.jsx
// TanStack Table v8 styled like the Original component's Tabler look.
// Adds `dense` mode for a compact layout.
// Supports null/empty cells without layout shift via placeholder rendering.
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
    className={dense ? "form-select form-select-sm" : "form-select"}
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
  dense = false,
  // misc
  emptyState = "No data",
  loading = false,
  showPagination = true,
  pageSizeOptions = [10, 25, 50, 100],

  // NEW: stabilize cells with null/empty values
  emptyCellPlaceholder = "",
  treatEmptyStringAsNull = false,

  // NEW: stronger width stability
  fixedLayout = true,
}) => {
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection: rowSelection ?? {},
    },
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    enableSortingRemoval: false,
    onSortingChange,
    getRowId,
    onRowSelectionChange,
  });

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

  // Helper: render a stable placeholder for empty cells
  const renderCellContent = (cell) => {
    // Prefer the raw value to detect emptiness; custom renderers still run for non-empty values
    const raw = cell.getValue?.();
    const isEmpty =
      raw === null ||
      raw === undefined ||
      (treatEmptyStringAsNull && raw === "");

    if (isEmpty) {
      // Use an invisible placeholder to keep height without adding visual noise.
      // Wrap in inline-block so the cell keeps a minimal box even in dense mode.
      return emptyCellPlaceholder;
    }

    return flexRender(cell.column.columnDef.cell, cell.getContext());
  };

  const content = useMemo(() => {
    if (!loading && data.length === 0) {
      return (
        <tr>
          <td
            colSpan={table.getAllLeafColumns().length}
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
            {renderCellContent(cell)}
          </td>
        ))}
      </tr>
    ));
  }, [
    data,
    loading,
    emptyState,
    table,
    dense,
    treatEmptyStringAsNull,
    emptyCellPlaceholder,
  ]);

  const total = totalRows ?? 0;

  return (
    <div className={parentClassName}>
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
          style={fixedLayout ? { tableLayout: "fixed" } : undefined}
        >
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((h) => headerCell({ header: h }))}
              </tr>
            ))}
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td
                  colSpan={table.getAllLeafColumns().length}
                  className={`text-center ${dense ? "py-2" : "py-3"}`}
                >
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden
                  />
                  <span className={dense ? "small text-muted" : "text-muted"}>
                    Loading…
                  </span>
                </td>
              </tr>
            )}
            {content}
          </tbody>
        </table>
      </div>

      {showPagination && (
        <div
          className={`d-flex justify-content-between align-items-center ${
            dense ? "mt-1" : "mt-2"
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
  loading: PropTypes.bool,
  showPagination: PropTypes.bool,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),

  dense: PropTypes.bool,

  emptyCellPlaceholder: PropTypes.node,
  treatEmptyStringAsNull: PropTypes.bool,
  fixedLayout: PropTypes.bool,
};

/** Usage (server-side)
 *
 * <TableV2
 *   dense
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
 *   nowrap
 *   stickyHeader
 *   // NEW props for null-safe cells:
 *   emptyCellPlaceholder="—"
 *   treatEmptyStringAsNull
 *   fixedLayout
 * />
 */
