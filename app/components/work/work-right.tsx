

export type WorkProps = {
  children: React.ReactNode;
  progress: number;
};




export function WorkRight({ children, progress }: WorkProps) {
  const translateY = Math.max(-50, -(progress - 0.5) * 50);

  return (
    <div
      className="flex h-screen flex-1 justify-start lg:justify-center lg:items-center px-8"
      style={{ transform: `translateY(${translateY}px)`, transition: "transform 0.5s ease-out" }}
    >
      <div className="w-full max-w-2xl">{children}</div>
    </div>
  );
}

