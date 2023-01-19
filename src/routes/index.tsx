import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();

  return (
    <>
      <div class="my-4">
        <h2>Qué vamos a hacer</h2>
        <p>
          Vamos a aprender las diferencias entre los siguientes hooks:{" "}
          <a
            title="Contenido sobre el hook useNavigate"
            target="_blank"
            rel="nofollow noopener"
            href="https://qwik.builder.io/qwikcity/api/#usenavigate"
          >
            useNavigate
          </a>{" "}
          y{" "}
          <a
            title="Contenido sobre el hook useLocation"
            target="_blank"
            rel="nofollow noopener"
            href="https://qwik.builder.io/qwikcity/api/#uselocation"
          >
            useLocation
          </a>
          .
        </p>
        <ol>
          <li>
            Con <code>useNavigate</code> lo que vamos a hacer es cambiar de
            página en nuestro proyecto sin hacer que la página se cargue de
            nuevo. Es la API que funciona por detrás del elemento{" "}
            <code>Link</code>. Lo que es importante saber es que{" "}
            <strong>useNavigate es una API de tipo write-only</strong>, no
            debemos leer el valor que tiene. Para ello utilizamos useLocation.
          </li>
          <li>
            Con <code>useLocation</code> podemos recibir y sobre todo leer los
            párametros que queramos. Si queremos que el usuario vaya a
            <code>https://blog-ejemplo.com/posts/[id]</code>, pues podremos
            recibir esa información al hacer{" "}
            <code>useLocation().params.id</code> dentro del componente. Como
            ves,{" "}
            <strong>useLocation es una API de read-only (solo lectura)</strong>.
          </li>
        </ol>
      </div>
      {/* useNavigate  */}
      <div class="my-4">
        <h2>Ejemplo de useNavigate</h2>
        <p>
          Vamos a causar el cambio de página a <code>/test</code> tras pulsar el
          siguiente botón, y luego volveremos a esta misma página tras haber
          estado allí 3 segundos.
        </p>
        <button
          onClick$={() => {
            // this assigment causes SPA navigation
            nav.path = "/test";
          }}
        >
          IR A TEST
        </button>
      </div>
      {/* useLocation  */}
      <div class="my-4">
        <h2>Ejemplo de useLocation</h2>
        <p>
          Vamos a causar el cambio de página a una página a la que le pasaremos
          un valor determinado y que se verá reflejado tanto en la URL de la
          nueva página como en la propia página. Es decir, visitaremos{" "}
          <code>/posts/1</code> por ejemplo y lo veremos en la url.
        </p>
        <div class="d-flex gap-2">
          <Link href="/posts/1" class="btn">
            VER POST 1
          </Link>
          <Link href="/posts/2" class="btn">
            VER POST 2
          </Link>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Tutorial de useNavigate y useLocation con Qwik",
  meta: [
    {
      name: "description",
      content: "Tutorial de useNavigate y useLocation con Qwik",
    },
  ],
};
