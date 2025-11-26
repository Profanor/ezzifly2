"use client";

import { useState } from "react";
import { ChevronDown, X, Plus, Search } from "lucide-react";

type TripType = "one-way" | "round-trip" | "multi-city";

interface FlightLeg {
  id: string;
  from: string;
  to: string;
  depart: string;
  return?: string;
}

export default function FlightSearchForm() {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [cabin, setCabin] = useState("economy");
  const [travelers, setTravelers] = useState(1);

  const [legs, setLegs] = useState<FlightLeg[]>([
    { id: "1", from: "", to: "", depart: "" },
  ]);

  /** -------------------------------
   * Helpers
   * -------------------------------- */
  const initializeLegs = (type: TripType) => {
    if (type === "round-trip") {
      setLegs([{ id: "1", from: "", to: "", depart: "", return: "" }]);
    } else if (type === "multi-city") {
      setLegs([
        { id: "1", from: "", to: "", depart: "" },
        { id: "2", from: "", to: "", depart: "" },
      ]);
    } else {
      setLegs([{ id: "1", from: "", to: "", depart: "" }]);
    }
  };

  const handleTripTypeChange = (type: TripType) => {
    setTripType(type);
    initializeLegs(type);
  };

  const updateLeg = (id: string, field: keyof FlightLeg, value: string) => {
    setLegs((prev) =>
      prev.map((leg) => (leg.id === id ? { ...leg, [field]: value } : leg))
    );
  };

  const addFlight = () => {
    const newId = (Math.max(...legs.map((l) => Number(l.id))) + 1).toString();
    setLegs([...legs, { id: newId, from: "", to: "", depart: "" }]);
  };

  const removeFlight = (id: string) => {
    if (legs.length > 1) {
      setLegs((prev) => prev.filter((l) => l.id !== id));
    }
  };

  /** -------------------------------
   * Floating label select component
   * -------------------------------- */
  const FloatingSelect = ({
    label,
    value,
    onChange,
  }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
  }) => (
    <div className="relative border border-gray-300 rounded-lg px-4 pt-4 pb-1 bg-white">
      <span className="text-xs text-gray-500 absolute left-4 top-1.5">
        {label}
      </span>

      <select
        title="destination"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full bg-transparent outline-none appearance-none pr-6"
      >
        <option value="">Select</option>
        <option value="Lagos">Lagos</option>
        <option value="London">London</option>
        <option value="Dubai">Dubai</option>
        <option value="Paris">Paris</option>
      </select>

      <ChevronDown className="absolute right-3 top-6 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
  );

  return (
    <div className="bg-white rounded-2xl p-6 md:p-6 shadow-lg max-w-[1100px] mx-auto w-full">
      {/* trip Type + cabin */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative">
          <select
            value={tripType}
            title="type"
            onChange={(e) => handleTripTypeChange(e.target.value as TripType)}
            className="appearance-none px-4 py-2 border border-gray-300 rounded-lg bg-white pr-8 min-w-32"
          >
            <option value="one-way">One Way</option>
            <option value="round-trip">Round Trip</option>
            <option value="multi-city">Multi Trip</option>
          </select>
          <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-500" />
        </div>

        <div className="relative">
          <select
            value={cabin}
            title="class"
            onChange={(e) => setCabin(e.target.value)}
            className="appearance-none px-4 py-2 border border-gray-300 rounded-lg bg-white pr-8 min-w-32"
          >
            <option value="economy">Economy</option>
            <option value="premium">Premium Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
          <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* flight Legs */}
      <div className="space-y-4 mb-6">
        {legs.map((leg, index) => (
          <div
            key={leg.id}
            className="flex flex-row flex-nowrap gap-4 items-end w-full"
          >
            <div className="flex-1">
              <FloatingSelect
                label="From"
                value={leg.from}
                onChange={(v) => updateLeg(leg.id, "from", v)}
              />
            </div>

            <div className="flex-1">
              <FloatingSelect
                label="To"
                value={leg.to}
                onChange={(v) => updateLeg(leg.id, "to", v)}
              />
            </div>

            <div className="flex-1">
              <FloatingSelect
                label="Depart"
                value={leg.depart}
                onChange={(v) => updateLeg(leg.id, "depart", v)}
              />
            </div>

            {tripType === "round-trip" && index === 0 && (
              <div className="flex-1">
                <FloatingSelect
                  label="Return"
                  value={leg.return ?? ""}
                  onChange={(v) => updateLeg(leg.id, "return", v)}
                />
              </div>
            )}

            {/* travelers + small Search for one-way & round-trip */}
            {tripType !== "multi-city" && index === legs.length - 1 && (
              <div className="flex items-center gap-3">
                {/* travelers select */}
                <div className="w-48 shrink-0">
                  <div className="relative border border-gray-300 rounded-lg px-4 pt-4 pb-1 bg-white">
                    <span className="text-xs text-gray-500 absolute left-4 top-1.5">
                      Travelers
                    </span>
                    <select
                      value={travelers}
                      title="travelers"
                      onChange={(e) => setTravelers(Number(e.target.value))}
                      className="mt-3 w-full bg-transparent outline-none appearance-none pr-6"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option value={num} key={num}>
                          {num} Traveler{num > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-6 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                {/* small search button */}
                <button
                  type="button"
                  title="search"
                  className="cursor-pointer flex items-center justify-center bg-[#295B86] hover:bg-[#1f4567] text-white rounded-lg shadow-md shrink-0 px-4 py-3 h-14 w-14"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* X button (multi-city) */}
            {tripType === "multi-city" && legs.length > 1 && (
              <button
                type="button"
                title="remove"
                onClick={() => removeFlight(leg.id)}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* add flight button for multi-city */}
      {tripType === "multi-city" && (
        <button
          type="button"
          onClick={addFlight}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 mb-6"
        >
          <Plus className="w-4 h-4" /> Add Flight
        </button>
      )}

      {/* search button for multi-city */}
      {tripType === "multi-city" && (
        <div>
          <button
            type="button"
            title="search"
            className="cursor-pointer flex items-center justify-center mx-auto bg-[#295B86] hover:bg-[#1f4567] text-white rounded-lg shadow-md px-4 py-4 w-60"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
