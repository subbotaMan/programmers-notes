import React from "react";

type Props = {
  children: React.ReactElement[] | React.ReactElement;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
      {children}
    </div>
  );
};
