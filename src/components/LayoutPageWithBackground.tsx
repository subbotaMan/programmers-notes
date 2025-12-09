type Props = {
  children: React.ReactElement;
  smallBg: string;
  bigBg: string;
};

export const LayoutPageWithBackground = ({
  children,
  smallBg,
  bigBg,
}: Props) => {
  return (
    <div className="relative min-h-screen">
      {/* Фоновый контейнер */}
      <div className="fixed inset-0 z-0">
        {/* Для мобильных */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${smallBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Для десктопов */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${bigBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Общий градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/60" />
      </div>

      {/* Контент */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
