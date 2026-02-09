import { useCallback, type ReactNode } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable'
import type { DragEndEvent } from '@dnd-kit/core'

type IDragAndDropListProps<T extends { id: string | number }> = {
  items: T[]
  onChange: (newOrder: T[]) => void
  children: ReactNode[]
}

function DragAndDropList<T extends { id: string | number }>({
  items,
  children,
  onChange,
}: IDragAndDropListProps<T>) {
  const itemsIds = items.map((item) => item.id)

  const onDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event
      if (active && over && active.id !== over.id) {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        if (oldIndex !== -1 && newIndex !== -1) {
          const newItems = arrayMove(items, oldIndex, newIndex)
          onChange(newItems)
        }
      }
    },
    [items, onChange],
  )

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={itemsIds} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  )
}

export default DragAndDropList
