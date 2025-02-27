
  
  
  import React, { useEffect } from "react";
  // import { useAdminstore } from "../path/to/your/store";
            import { useAdminstore } from "../../store/useAdminstore";

const AdminList = () => {
  const { admins, loading, get } = useAdminstore();

  useEffect(() => {
    get(); // Fetch the admins when the component mounts
  }, [get]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Registered Admins
      </h1>
      {admins && admins.length > 0 ? (
        <ul className="space-y-4">
          {admins.map((admin, index) => (
            <li
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-lg font-semibold text-gray-800">
                  {admin.name}
                </span>
                <span className="text-sm text-gray-500 mt-2 sm:mt-0">
                  {admin.email}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No registered admins found.
        </p>
      )}
    </div>
  );
};

export default AdminList;
