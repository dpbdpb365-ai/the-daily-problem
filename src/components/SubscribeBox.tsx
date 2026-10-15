"use client";

import { useState } from "react";

interface SubscribeBoxProps {
  variant?: "button" | "victory"; 
}

export default function SubscribeBox({ variant = "button" }: SubscribeBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Mandamos el correo a nuestro propio puente (API)
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail(""); // Limpiamos el campo
      } else {
        setStatus("idle");
        alert("Oops, algo salió mal. Intenta de nuevo.");
      }
    } catch (error) {
      setStatus("idle");
      alert("Error de conexión. Intenta de nuevo.");
    }
  };;

  // --- VARIANTE 1: EL BOTÓN CON POP-UP ---
  if (variant === "button") {
    return (
      <>
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-slate-900 text-white font-bold px-6 py-2 rounded-md hover:bg-slate-800 transition-colors shadow-sm text-sm"
        >
          Subscribe
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-200">
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 text-xl font-bold"
              >
                ✕
              </button>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Get tomorrow's puzzle</h3>
              <p className="text-slate-600 text-sm mb-6">Join the list to receive the daily challenge before anyone else. Zero spam.</p>
              
              {status === "success" ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-center text-emerald-800 font-medium">
                  Done! You're on the list for tomorrow. 🧠
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    required
                    className="w-full bg-white border border-slate-300 text-slate-900 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-slate-900 text-white font-bold px-6 py-2 rounded-md hover:bg-slate-800 transition-colors disabled:opacity-50 shadow-sm"
                  >
                    {status === "loading" ? "Saving..." : "Subscribe"}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </>
    );
  }

  // --- VARIANTE 2: LA CAJA GRANDE AL GANAR ---
  return (
    <div className="mt-4 p-6 bg-slate-100 border border-slate-200 rounded-xl w-full max-w-md">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-bold text-slate-900 mb-1">Ready for tomorrow?</h3>
        <p className="text-slate-600 text-sm">Join the list to get the daily puzzle.</p>
      </div>
      {status === "success" ? (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-center text-emerald-800 font-medium">
          Done! You're on the list. 🧠
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            className="flex-1 bg-white border border-slate-300 text-slate-900 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-slate-900 text-white font-bold px-6 py-2 rounded-md hover:bg-slate-800 transition-colors disabled:opacity-50 shadow-sm"
          >
            {status === "loading" ? "Saving..." : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
}