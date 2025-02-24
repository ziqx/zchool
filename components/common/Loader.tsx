const ZLoader = ({ height }: { height?: number }) => {
  return (
    <img src="/images/loader.gif" className={`h-${height ?? 10}`} alt="" />
  );
};

export default ZLoader;
