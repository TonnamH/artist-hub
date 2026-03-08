// src/components/Button.jsx
export default function Buttons({ children }) {
  return (
    <button className="px-10 py-3 bg-orange-600 text-white font-bold rounded-sm text-sm hover:bg-orange-800 transition-colors uppercase font-worksans tracking-wide">
      {children}
    </button>
  );
}