"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Usamos `useRouter` para navegación en Next.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase"; // Asegúrate de que esté bien importado

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>(""); // Email del usuario
  const [password, setPassword] = useState<string>(""); // Contraseña del usuario
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores
  const [loading, setLoading] = useState<boolean>(false); // Indicador de carga
  const router = useRouter();

  // Manejo del formulario de login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reinicia el estado de error

    try {
      // Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirige al home
    } catch (err: unknown) {
      // Manejo de errores comunes
      if (err instanceof Error) {
        if (err.message.includes("auth/user-not-found")) {
          setError("No existe una cuenta con este correo.");
        } else if (err.message.includes("auth/wrong-password")) {
          setError("La contraseña es incorrecta.");
        } else {
          setError("Hubo un problema al iniciar sesión. Inténtalo más tarde.");
        }
      } else {
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-negro_ebano text-beige_claro">
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
        <h1 className="text-3xl font-bold text-center">Iniciar Sesión</h1>

        {/* Mensaje de error */}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded">
            {error}
          </div>
        )}

        {/* Input de correo electrónico */}
        <div>
          <label htmlFor="email" className="block mb-1">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded bg-negro_claro text-beige_claro placeholder-beige_oscuro focus:outline-none focus:ring-2 focus:ring-beige_oscuro"
            required
          />
        </div>

        {/* Input de contraseña */}
        <div>
          <label htmlFor="password" className="block mb-1">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded bg-negro_claro text-beige_claro placeholder-beige_oscuro focus:outline-none focus:ring-2 focus:ring-beige_oscuro"
            required
          />
        </div>

        {/* Botón de enviar con indicador de carga */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 rounded ${loading
            ? "bg-gray-500 text-gray-300 cursor-not-allowed"
            : "bg-beige_claro text-negro_ebano hover:bg-beige_oscuro"
            }`}
        >
          {loading ? "Cargando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
};

export default Login;
