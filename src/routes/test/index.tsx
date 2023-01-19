import { component$, useClientEffect$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  const loc = useLocation();
  console.log(nav);

  useClientEffect$(() => {
    // Only runs in the client
    const timer = setInterval(() => {
      nav.path = "/";
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div class="my-4">
        <h2>Esta es la página de test</h2>
        <p>
          Ahora lo que vamos a hacer es redirigirte a home de nuevo después de 3
          segundos.
        </p>
      </div>
    </>
  );
});
