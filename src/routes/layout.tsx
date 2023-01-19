import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <h1>
            Bienvenido al tutorial de useNavigate y useLocation con Qwik{" "}
            <span class="lightning">⚡️</span>
          </h1>
        </section>
        <Slot />
      </main>
    </>
  );
});
