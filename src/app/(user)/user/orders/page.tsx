export default function Orders() {
  return (
    <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-xl mt-6">
      <div className="p-6 lg:p-8 bg-red-00">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold">My Orders</h2>
          </div>
          <div className="space-y-6">
            <div>
              <div className="text-center py-10">
                <p className="text-clr-secondary capitalize">⚠️ under development </p>
                <p className="text-xs text-gray-400 mt-2">
                 No orders found
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
