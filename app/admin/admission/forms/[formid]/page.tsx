const EditForm = async ({
  params,
}: {
  params: Promise<{ formid: string }>;
}) => {
  const { formid } = await params;
  return <div>Enter</div>;
};

export default EditForm;
