function CustomerSummary({ crm }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-4">
        Customer Summary
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <p className="text-gray-500">Customer</p>
          <p className="font-semibold">{crm.customer_name}</p>
        </div>

        <div>
          <p className="text-gray-500">Tier</p>
          <p className="font-semibold">{crm.tier}</p>
        </div>

        <div>
          <p className="text-gray-500">Status</p>
          <p className="font-semibold">{crm.account_status}</p>
        </div>

      </div>

    </div>
  );
}

export default CustomerSummary;