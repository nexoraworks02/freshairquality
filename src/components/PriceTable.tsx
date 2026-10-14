import { Check, Plus } from "lucide-react";
import type { PriceTier } from "@/config/site";
import { CardDecor } from "./ui/CardDecor";

// Packages + add-ons for one area, on the dark subpage theme. Prices come
// straight from config/site.ts.
export function PriceTable({ pricing, areaName }: { pricing: PriceTier; areaName: string }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="relative isolate overflow-hidden rounded-[2rem] rounded-br-[4rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
        <CardDecor tone="dark" size="lg" />
        <h3 className="font-display text-xl font-bold text-white">Packages · {areaName}</h3>
        <p className="mt-1 text-sm text-slate-300">Every duct &amp; vent in the home is included.</p>
        <ul className="mt-6 divide-y divide-white/10">
          {pricing.packages.map((p) => (
            <li key={p.id} className="flex items-center gap-3 py-3.5">
              <Check className="h-5 w-5 shrink-0 text-mint-400" />
              <span className="flex-1 font-medium text-slate-100">{p.label}</span>
              <span className="font-display text-xl font-bold text-white">${p.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative isolate overflow-hidden rounded-[2rem] rounded-br-[4rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
        <CardDecor tone="dark" size="lg" />
        <h3 className="font-display text-xl font-bold text-white">Add-ons</h3>
        <p className="mt-1 text-sm text-slate-300">Only pay for what your home has.</p>
        <ul className="mt-6 divide-y divide-white/10">
          {pricing.addons.map((a) => (
            <li key={a.id} className="flex items-center gap-3 py-3">
              <Plus className="h-4 w-4 shrink-0 text-mint-400" />
              <span className="flex-1 text-slate-100">{a.label}</span>
              <span className="font-bold text-white">${a.price}</span>
            </li>
          ))}
          <li className="flex items-center gap-3 py-3">
            <Plus className="h-4 w-4 shrink-0 text-mint-400" />
            <span className="flex-1 text-slate-100">Filter Change</span>
            <span className="text-sm font-semibold text-slate-300">Quoted on request</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
