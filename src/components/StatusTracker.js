import React, { useState } from "react";

function StatusTracker(props) {
  const [status, setStatus] = useState("Ready");

  return (
    <div class="my-7 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">Status</p>
          <p class="text-slate-500 font-medium">{status}</p>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Refresh
        </button>
      </div>
    </div>
  );
}

export default StatusTracker;
