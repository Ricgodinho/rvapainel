import { useState, useRef, useEffect } from "react";
import { Lock, LockOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface DraggableCardProps {
  children: React.ReactNode;
  defaultWidth?: number;
  defaultHeight?: number;
}

export default function DraggableCard({
  children,
  defaultWidth = 100,
  defaultHeight = 100,
}: DraggableCardProps) {
  const [isLocked, setIsLocked] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: defaultWidth, height: defaultHeight });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isLocked) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    if (isLocked) return;
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isLocked) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }

      if (isResizing && !isLocked) {
        const deltaX = e.clientX - resizeStart.x;
        const deltaY = e.clientY - resizeStart.y;

        setSize({
          width: Math.max(300, resizeStart.width + deltaX),
          height: Math.max(200, resizeStart.height + deltaY),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isResizing, dragStart, resizeStart, isLocked]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative bg-card border border-border/50 rounded-lg overflow-hidden transition-all",
        !isLocked && "ring-2 ring-primary/50",
        isDragging && "cursor-grabbing",
        isResizing && "cursor-nwse-resize"
      )}
      style={{
        width: size.width,
        height: size.height,
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isLocked ? "default" : isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={!isLocked ? handleMouseDown : undefined}
    >
      {/* Lock Button */}
      <button
        onClick={() => setIsLocked(!isLocked)}
        className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
        title={isLocked ? "Desbloquear para mover/redimensionar" : "Bloquear posição"}
      >
        {isLocked ? (
          <Lock className="w-4 h-4" />
        ) : (
          <LockOpen className="w-4 h-4" />
        )}
      </button>

      {/* Content */}
      <div className="w-full h-full overflow-y-auto pointer-events-auto">
        {children}
      </div>

      {/* Resize Handle */}
      {!isLocked && (
        <div
          onMouseDown={handleResizeMouseDown}
          className="absolute bottom-0 right-0 w-6 h-6 bg-primary/20 hover:bg-primary/30 cursor-nwse-resize border-l border-t border-primary/30"
          title="Arraste para redimensionar"
        />
      )}
    </div>
  );
}
