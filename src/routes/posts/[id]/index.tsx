import { component$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const nav = useNavigate();

  return (
    <div class="my-4">
      <h2>Este es el ID de la página: {location.params.id}</h2>
      <p>
        Este es el nombre del path por el que hemos accedido:{" "}
        <strong>{location.pathname}</strong>.
      </p>
      <button
        onClick$={() => {
          // this assigment causes SPA navigation
          nav.path = "/";
        }}
      >
        IR A HOME
      </button>
    </div>
  );
});
