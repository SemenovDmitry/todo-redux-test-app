import type { IFilterType } from '../types/models'

type IFiltersProps = {
  value: IFilterType
  onChange: (filter: IFilterType) => void
}

const FILTERS: { label: string; value: IFilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
]

const Filters = ({ value, onChange }: IFiltersProps) => {
  return (
    <div className="flex gap-2 mb-4">
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          className={`px-3 py-1 rounded border text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 ${
            value === filter.value
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-blue-500 border-blue-300 hover:bg-blue-50'
          }`}
          type="button"
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default Filters
