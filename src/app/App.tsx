import { OverflyApp } from "./components/OverflyApp";

export default function App() {
  return (
    <div className="size-full bg-[#12110F] flex items-center justify-center">
      <div className="w-[393px] h-[852px] relative overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.5)] rounded-none">
        <OverflyApp />
      </div>
    </div>
  );
}
