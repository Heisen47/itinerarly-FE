"use client";

import { useState } from "react";
import { Drawer } from "vaul";

export default function Planner() {
  const [formData, setFormData] = useState({
    destination: "",
    budget: "",
    days: "",
    people: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Your preferences have been saved!");
  };

  return (
    <div className="flex justify-center items-center h-16 bg-blue-600">
      <Drawer.Root>
        <Drawer.Trigger>
          <div className="p-2  text-white text-center rounded cursor-pointer shadow-md">
            Open Planner
          </div>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-gray-100 h-fit fixed bottom-0 left-0 right-0 outline-none rounded-t-lg">
            <Drawer.Title className="text-lg font-bold p-4">Plan Your Trip</Drawer.Title>
            <div className="p-4 bg-white space-y-4">
              {/* Destination */}
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                  Where do you want to go?
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter destination"
                />
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                  What is your budget?
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="" disabled>
                    Select budget
                  </option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              {/* Days */}
              <div>
                <label htmlFor="days" className="block text-sm font-medium text-gray-700">
                  How many days?
                </label>
                <input
                  type="number"
                  id="days"
                  name="days"
                  value={formData.days}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter number of days"
                />
              </div>

              {/* People */}
              <div>
                <label htmlFor="people" className="block text-sm font-medium text-gray-700">
                  How many people?
                </label>
                <input
                  type="number"
                  id="people"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter number of people"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Save Preferences
              </button>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}