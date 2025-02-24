import AdminLayout from "@/components/layouts/AdminLayout";
import ZLink from "@/components/widgets/ZLink";
import { MdAdd } from "react-icons/md";

const PagesIndex = () => {
  return (
    <AdminLayout>
      <section className="flex justify-between items-center">
        <h1 className="text-2xl">Pages</h1>

        <ZLink
          href="/admin/pages/new"
          text="Add Page"
          icon={<MdAdd className="text-xl" />}
        />
      </section>
    </AdminLayout>
  );
};

export default PagesIndex;
