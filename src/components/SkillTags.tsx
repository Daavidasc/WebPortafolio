import { useRef, useState } from 'react';
import type { CSSProperties, PointerEvent } from 'react';
import { profile } from '../data/profile';

const tagClasses = [
  'skill-tag-shell skill-tag-shell--primary',
  'skill-tag-shell skill-tag-shell--secondary',
  'skill-tag-shell skill-tag-shell--tertiary',
];

type Offset = {
  x: number;
  y: number;
};

type DragState = {
  index: number;
  pointerId: number;
  startX: number;
  startY: number;
  originX: number;
  originY: number;
  itemRect: DOMRect;
  containerRect: DOMRect;
};

type SkillTagStyle = CSSProperties & {
  '--drag-x': string;
  '--drag-y': string;
};

type RectLike = {
  bottom: number;
  left: number;
  right: number;
  top: number;
};

const initialOffsets = profile.skills.map(() => ({ x: 0, y: 0 }));

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const rectanglesOverlap = (first: RectLike, second: RectLike) => {
  return !(
    first.right <= second.left ||
    first.left >= second.right ||
    first.bottom <= second.top ||
    first.top >= second.bottom
  );
};

const getSkillTagStyle = (offset: Offset): SkillTagStyle => ({
  '--drag-x': `${offset.x}px`,
  '--drag-y': `${offset.y}px`,
});

export const SkillTags = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tagRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [offsets, setOffsets] = useState<Offset[]>(initialOffsets);
  const [dragState, setDragState] = useState<DragState | null>(null);

  const handlePointerDown = (
    event: PointerEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.button !== 0) {
      return;
    }

    const container = containerRef.current;
    const item = tagRefs.current[index];

    if (!container || !item) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);

    setDragState({
      index,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: offsets[index].x,
      originY: offsets[index].y,
      itemRect: item.getBoundingClientRect(),
      containerRect: container.getBoundingClientRect(),
    });
  };

  const handlePointerMove = (
    event: PointerEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (
      !dragState ||
      dragState.index !== index ||
      dragState.pointerId !== event.pointerId
    ) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;
    const minX =
      dragState.originX + dragState.containerRect.left - dragState.itemRect.left;
    const maxX =
      dragState.originX +
      dragState.containerRect.right -
      dragState.itemRect.right;
    const minY =
      dragState.originY + dragState.containerRect.top - dragState.itemRect.top;
    const maxY =
      dragState.originY +
      dragState.containerRect.bottom -
      dragState.itemRect.bottom;
    const nextOffset = {
      x: clamp(dragState.originX + deltaX, minX, maxX),
      y: clamp(dragState.originY + deltaY, minY, maxY),
    };
    const offsetDeltaX = nextOffset.x - dragState.originX;
    const offsetDeltaY = nextOffset.y - dragState.originY;
    const nextRect = {
      bottom: dragState.itemRect.bottom + offsetDeltaY,
      left: dragState.itemRect.left + offsetDeltaX,
      right: dragState.itemRect.right + offsetDeltaX,
      top: dragState.itemRect.top + offsetDeltaY,
    };
    const wouldOverlap = tagRefs.current.some((tag, tagIndex) => {
      return (
        tagIndex !== index &&
        tag !== null &&
        rectanglesOverlap(nextRect, tag.getBoundingClientRect())
      );
    });

    if (wouldOverlap) {
      return;
    }

    setOffsets((currentOffsets) =>
      currentOffsets.map((offset, offsetIndex) =>
        offsetIndex === index
          ? nextOffset
          : offset,
      ),
    );
  };

  const stopDragging = (event: PointerEvent<HTMLButtonElement>) => {
    if (dragState?.pointerId === event.pointerId) {
      setDragState(null);
    }
  };

  return (
    <div className="skill-tags" aria-label="Areas de interes" ref={containerRef}>
      {profile.skills.map((skill, index) => (
        <button
          aria-label={`Arrastrar ${skill}`}
          className={tagClasses[index]}
          key={skill}
          onPointerCancel={stopDragging}
          onPointerDown={(event) => {
            handlePointerDown(event, index);
          }}
          onPointerMove={(event) => {
            handlePointerMove(event, index);
          }}
          onPointerUp={stopDragging}
          ref={(element) => {
            tagRefs.current[index] = element;
          }}
          style={getSkillTagStyle(offsets[index])}
          type="button"
        >
          <span className="skill-tag">{skill}</span>
        </button>
      ))}
    </div>
  );
};
