export default function Orders() {
  return (
    <div className="bg-white rounded-xl shadow-xl mt-6">
      <div className="p-6 lg:p-8 bg-red-00">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold">My Orders</h2>
          </div>
          <div className="space-y-6">
            <div>
              <div className="text-center py-10">
                <p className="text-clr-secondary">No orders found</p>
                <p className="text-xs text-gray-400 mt-2">
                  Start shopping to see your orders here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
