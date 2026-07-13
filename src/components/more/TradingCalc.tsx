"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Minus, Plus } from "lucide-react";

interface CalcState {
  capital: number;
  riskPercent: number;
  riskReward: number;
  winRate: number;
  trades: number;
}

function StepInput({
  label,
  hint,
  prefix,
  suffix,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  hint: string;
  prefix?: string;
  suffix?: string;
  value: number;
  min: number;
  max?: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const clamp = (v: number) => Math.min(Math.max(v, min), max ?? Infinity);

  return (
    <label className="calc-field">
      <span className="calc-label">{label}</span>
      <div className="calc-input-wrap">
        {prefix && <span className="calc-prefix">{prefix}</span>}
        <input
          type="number"
          className="calc-input"
          value={value}
          onChange={(e) => onChange(clamp(Number(e.target.value) || min))}
          min={min}
          max={max}
          step={step}
          inputMode="decimal"
        />
        {suffix && <span className="calc-suffix">{suffix}</span>}
        <div className="calc-steppers">
          <button type="button" className="calc-step-btn" onClick={() => onChange(clamp(value - step))} disabled={value <= min} aria-label="Уменьшить">
            <Minus size={14} strokeWidth={2.5} />
          </button>
          <button type="button" className="calc-step-btn" onClick={() => onChange(clamp(value + step))} aria-label="Увеличить">
            <Plus size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
      <span className="calc-hint">{hint}</span>
    </label>
  );
}

export function TradingCalc() {
  const [state, setState] = useState<CalcState>({ capital: 1000, riskPercent: 1, riskReward: 3, winRate: 80, trades: 50 });
  const [egg, setEgg] = useState<string | null>(null);
  const eggTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const lastEggTime = useRef(0);
  const eggCooldown = useRef(false);

  const showEgg = useCallback((msg: string) => {
    if (eggCooldown.current) return;
    eggCooldown.current = true;
    setEgg(msg);
    clearTimeout(eggTimer.current);
    eggTimer.current = setTimeout(() => {
      setEgg(null);
      eggCooldown.current = false;
    }, 2500);
  }, []);

  const set = useCallback((key: keyof CalcState, value: number) => {
    setState((s) => {
      const next = { ...s, [key]: value };
      if (value === 777 && !eggCooldown.current) showEgg("jackpot!");
      else if (key === "capital" && value === 0 && !eggCooldown.current) showEgg("enterpreneur speedrun any%");
      else if (key === "riskPercent" && value === 100 && !eggCooldown.current) showEgg("ты либо легенда, либо бомж");
      return next;
    });
  }, [showEgg]);

  const riskAmount = state.capital * (state.riskPercent / 100);
  const rewardAmount = riskAmount * state.riskReward;
  const wins = Math.round(state.trades * (state.winRate / 100));
  const losses = state.trades - wins;
  const totalProfit = wins * rewardAmount;
  const totalLoss = losses * riskAmount;
  const netProfit = totalProfit - totalLoss;
  const finalCapital = state.capital + netProfit;
  const roi = (netProfit / state.capital) * 100;
  const profitFactor = totalLoss > 0 ? totalProfit / totalLoss : Infinity;

  useEffect(() => {
    if (netProfit > state.capital * 10) showEgg("печатай деньги? SEC already knows your location");
  }, [netProfit, state.capital, showEgg]);

  return (
    <section className="more-section">
      <div className="more-section-head"><h2 className="more-section-title">Калькулятор трейдера</h2><p className="more-section-desc">Рассчитайте потенциальный капитал вашей торговой системы</p></div>
      {egg && <div className="calc-egg">{egg}</div>}
      <div className="calc-layout">
        <div className="calc-inputs">
          <StepInput label="Начальный капитал" hint="" prefix="$" value={state.capital} min={0} step={100} onChange={(v) => set("capital", v)} />
          <StepInput label="Риск от депозита" hint={`Риск: $${riskAmount.toFixed(2)}`} suffix="%" value={state.riskPercent} min={0} max={100} step={0.5} onChange={(v) => set("riskPercent", v)} />
          <StepInput label="Риск/Прибыль" hint={`Прибыль: $${rewardAmount.toFixed(2)}`} prefix="1:" value={state.riskReward} min={1} step={0.5} onChange={(v) => set("riskReward", v)} />
          <StepInput label="Win Rate" hint={state.trades > 0 ? `${wins} из ${state.trades}` : ""} suffix="%" value={state.winRate} min={0} max={100} step={5} onChange={(v) => set("winRate", v)} />
          <StepInput label="Количество сделок" hint="" value={state.trades} min={1} step={10} onChange={(v) => set("trades", v)} />
        </div>
        <div className="calc-result">
          <div className="calc-result-main">
            <span className="calc-result-label">Финальный капитал</span>
            <span className="calc-result-value">${finalCapital.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <span className="calc-result-delta" style={{ color: netProfit >= 0 ? "var(--accent-text)" : "#f87171" }}>{netProfit >= 0 ? "+" : ""}${netProfit.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({netProfit >= 0 ? "+" : ""}{roi.toFixed(2)}% ROI)</span>
          </div>
          <div className="calc-details">
            <div className="calc-detail-row"><span>Выигрышные сделки</span><span>{wins} × ${rewardAmount.toFixed(2)}</span><span style={{ color: "var(--accent-text)" }}>+${totalProfit.toFixed(2)}</span></div>
            <div className="calc-detail-row"><span>Проигрышные сделки</span><span>{losses} × ${riskAmount.toFixed(2)}</span><span style={{ color: "#f87171" }}>-${totalLoss.toFixed(2)}</span></div>
            <div className="calc-detail-row calc-detail-total"><span>Чистая прибыль</span><span /><span style={{ color: netProfit >= 0 ? "var(--accent-text)" : "#f87171" }}>{netProfit >= 0 ? "+" : ""}${netProfit.toFixed(2)}</span></div>
          </div>
          <div className="calc-stats">
            <div className="calc-stat"><span className="calc-stat-label">Процент выигрышей</span><span className="calc-stat-value">{state.winRate}%</span></div>
            <div className="calc-stat"><span className="calc-stat-label">Profit Factor</span><span className="calc-stat-value">{profitFactor === Infinity ? "∞" : profitFactor.toFixed(2)}</span></div>
            <div className="calc-stat"><span className="calc-stat-label">Средняя прибыль</span><span className="calc-stat-value">${(netProfit / state.trades).toFixed(2)}</span></div>
          </div>
          <div className="calc-tip"><span>{profitFactor >= 2 ? "Отличная система: Profit Factor выше 2.0." : profitFactor >= 1.3 ? "Рабочая система: Profit Factor выше 1.3." : "Система требует доработки."}</span></div>
        </div>
      </div>
    </section>
  );
}
