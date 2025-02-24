const EditPage = async ({
  params,
}: {
  params: Promise<{ pageid: string }>;
}) => {
  const { pageid } = await params;
  return <div>Enter</div>;
};

export default EditPage;
